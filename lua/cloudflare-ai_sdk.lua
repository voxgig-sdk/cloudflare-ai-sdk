-- CloudflareAi SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-ai_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareAiSDK = {}
CloudflareAiSDK.__index = CloudflareAiSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareAiSDK._make_feature = _make_feature


function CloudflareAiSDK.new(options)
  local self = setmetatable({}, CloudflareAiSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareAiSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareAiSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareAiSDK:get_root_ctx()
  return self._rootctx
end


function CloudflareAiSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareAiSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareAiSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareAiSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareAiSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareAiSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareAiSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareAiSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Account():list() / client:Account():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:Account(data)
  local EntityMod = require("entity.account_entity")
  if data == nil then
    if self._account == nil then
      self._account = EntityMod.new(self, nil)
    end
    return self._account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGateway():list() / client:AiGateway():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGateway(data)
  local EntityMod = require("entity.ai_gateway_entity")
  if data == nil then
    if self._ai_gateway == nil then
      self._ai_gateway = EntityMod.new(self, nil)
    end
    return self._ai_gateway
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayCustomDomain():list() / client:AiGatewayCustomDomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGatewayCustomDomain(data)
  local EntityMod = require("entity.ai_gateway_custom_domain_entity")
  if data == nil then
    if self._ai_gateway_custom_domain == nil then
      self._ai_gateway_custom_domain = EntityMod.new(self, nil)
    end
    return self._ai_gateway_custom_domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayCustomProvider():list() / client:AiGatewayCustomProvider():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGatewayCustomProvider(data)
  local EntityMod = require("entity.ai_gateway_custom_provider_entity")
  if data == nil then
    if self._ai_gateway_custom_provider == nil then
      self._ai_gateway_custom_provider = EntityMod.new(self, nil)
    end
    return self._ai_gateway_custom_provider
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayCustomProviderCost():list() / client:AiGatewayCustomProviderCost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGatewayCustomProviderCost(data)
  local EntityMod = require("entity.ai_gateway_custom_provider_cost_entity")
  if data == nil then
    if self._ai_gateway_custom_provider_cost == nil then
      self._ai_gateway_custom_provider_cost = EntityMod.new(self, nil)
    end
    return self._ai_gateway_custom_provider_cost
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayDataset():list() / client:AiGatewayDataset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGatewayDataset(data)
  local EntityMod = require("entity.ai_gateway_dataset_entity")
  if data == nil then
    if self._ai_gateway_dataset == nil then
      self._ai_gateway_dataset = EntityMod.new(self, nil)
    end
    return self._ai_gateway_dataset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayDynamicRoute():list() / client:AiGatewayDynamicRoute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGatewayDynamicRoute(data)
  local EntityMod = require("entity.ai_gateway_dynamic_route_entity")
  if data == nil then
    if self._ai_gateway_dynamic_route == nil then
      self._ai_gateway_dynamic_route = EntityMod.new(self, nil)
    end
    return self._ai_gateway_dynamic_route
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayEvaluation():list() / client:AiGatewayEvaluation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGatewayEvaluation(data)
  local EntityMod = require("entity.ai_gateway_evaluation_entity")
  if data == nil then
    if self._ai_gateway_evaluation == nil then
      self._ai_gateway_evaluation = EntityMod.new(self, nil)
    end
    return self._ai_gateway_evaluation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayGateway():list() / client:AiGatewayGateway():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGatewayGateway(data)
  local EntityMod = require("entity.ai_gateway_gateway_entity")
  if data == nil then
    if self._ai_gateway_gateway == nil then
      self._ai_gateway_gateway = EntityMod.new(self, nil)
    end
    return self._ai_gateway_gateway
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayLog():list() / client:AiGatewayLog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGatewayLog(data)
  local EntityMod = require("entity.ai_gateway_log_entity")
  if data == nil then
    if self._ai_gateway_log == nil then
      self._ai_gateway_log = EntityMod.new(self, nil)
    end
    return self._ai_gateway_log
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiGatewayProviderConfig():list() / client:AiGatewayProviderConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiGatewayProviderConfig(data)
  local EntityMod = require("entity.ai_gateway_provider_config_entity")
  if data == nil then
    if self._ai_gateway_provider_config == nil then
      self._ai_gateway_provider_config = EntityMod.new(self, nil)
    end
    return self._ai_gateway_provider_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiSearchAccountSearch():list() / client:AiSearchAccountSearch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiSearchAccountSearch(data)
  local EntityMod = require("entity.ai_search_account_search_entity")
  if data == nil then
    if self._ai_search_account_search == nil then
      self._ai_search_account_search = EntityMod.new(self, nil)
    end
    return self._ai_search_account_search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiSearchInstance():list() / client:AiSearchInstance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiSearchInstance(data)
  local EntityMod = require("entity.ai_search_instance_entity")
  if data == nil then
    if self._ai_search_instance == nil then
      self._ai_search_instance = EntityMod.new(self, nil)
    end
    return self._ai_search_instance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiSearchInstancesItem():list() / client:AiSearchInstancesItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiSearchInstancesItem(data)
  local EntityMod = require("entity.ai_search_instances_item_entity")
  if data == nil then
    if self._ai_search_instances_item == nil then
      self._ai_search_instances_item = EntityMod.new(self, nil)
    end
    return self._ai_search_instances_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiSearchInstancesJob():list() / client:AiSearchInstancesJob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiSearchInstancesJob(data)
  local EntityMod = require("entity.ai_search_instances_job_entity")
  if data == nil then
    if self._ai_search_instances_job == nil then
      self._ai_search_instances_job = EntityMod.new(self, nil)
    end
    return self._ai_search_instances_job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiSearchNamespace():list() / client:AiSearchNamespace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiSearchNamespace(data)
  local EntityMod = require("entity.ai_search_namespace_entity")
  if data == nil then
    if self._ai_search_namespace == nil then
      self._ai_search_namespace = EntityMod.new(self, nil)
    end
    return self._ai_search_namespace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiSearchToken():list() / client:AiSearchToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AiSearchToken(data)
  local EntityMod = require("entity.ai_search_token_entity")
  if data == nil then
    if self._ai_search_token == nil then
      self._ai_search_token = EntityMod.new(self, nil)
    end
    return self._ai_search_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingCreateTopup():list() / client:AigBillingCreateTopup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingCreateTopup(data)
  local EntityMod = require("entity.aig_billing_create_topup_entity")
  if data == nil then
    if self._aig_billing_create_topup == nil then
      self._aig_billing_create_topup = EntityMod.new(self, nil)
    end
    return self._aig_billing_create_topup
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingDeleteSpendingLimit():list() / client:AigBillingDeleteSpendingLimit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingDeleteSpendingLimit(data)
  local EntityMod = require("entity.aig_billing_delete_spending_limit_entity")
  if data == nil then
    if self._aig_billing_delete_spending_limit == nil then
      self._aig_billing_delete_spending_limit = EntityMod.new(self, nil)
    end
    return self._aig_billing_delete_spending_limit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingDeleteTopupConfig():list() / client:AigBillingDeleteTopupConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingDeleteTopupConfig(data)
  local EntityMod = require("entity.aig_billing_delete_topup_config_entity")
  if data == nil then
    if self._aig_billing_delete_topup_config == nil then
      self._aig_billing_delete_topup_config = EntityMod.new(self, nil)
    end
    return self._aig_billing_delete_topup_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingGetCreditBalance():list() / client:AigBillingGetCreditBalance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingGetCreditBalance(data)
  local EntityMod = require("entity.aig_billing_get_credit_balance_entity")
  if data == nil then
    if self._aig_billing_get_credit_balance == nil then
      self._aig_billing_get_credit_balance = EntityMod.new(self, nil)
    end
    return self._aig_billing_get_credit_balance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingGetInvoiceHistory():list() / client:AigBillingGetInvoiceHistory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingGetInvoiceHistory(data)
  local EntityMod = require("entity.aig_billing_get_invoice_history_entity")
  if data == nil then
    if self._aig_billing_get_invoice_history == nil then
      self._aig_billing_get_invoice_history = EntityMod.new(self, nil)
    end
    return self._aig_billing_get_invoice_history
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingGetInvoicePreview():list() / client:AigBillingGetInvoicePreview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingGetInvoicePreview(data)
  local EntityMod = require("entity.aig_billing_get_invoice_preview_entity")
  if data == nil then
    if self._aig_billing_get_invoice_preview == nil then
      self._aig_billing_get_invoice_preview = EntityMod.new(self, nil)
    end
    return self._aig_billing_get_invoice_preview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingGetSpendingLimit():list() / client:AigBillingGetSpendingLimit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingGetSpendingLimit(data)
  local EntityMod = require("entity.aig_billing_get_spending_limit_entity")
  if data == nil then
    if self._aig_billing_get_spending_limit == nil then
      self._aig_billing_get_spending_limit = EntityMod.new(self, nil)
    end
    return self._aig_billing_get_spending_limit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingGetTopupConfig():list() / client:AigBillingGetTopupConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingGetTopupConfig(data)
  local EntityMod = require("entity.aig_billing_get_topup_config_entity")
  if data == nil then
    if self._aig_billing_get_topup_config == nil then
      self._aig_billing_get_topup_config = EntityMod.new(self, nil)
    end
    return self._aig_billing_get_topup_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingGetTopupEligibility():list() / client:AigBillingGetTopupEligibility():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingGetTopupEligibility(data)
  local EntityMod = require("entity.aig_billing_get_topup_eligibility_entity")
  if data == nil then
    if self._aig_billing_get_topup_eligibility == nil then
      self._aig_billing_get_topup_eligibility = EntityMod.new(self, nil)
    end
    return self._aig_billing_get_topup_eligibility
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingGetTopupLimit():list() / client:AigBillingGetTopupLimit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingGetTopupLimit(data)
  local EntityMod = require("entity.aig_billing_get_topup_limit_entity")
  if data == nil then
    if self._aig_billing_get_topup_limit == nil then
      self._aig_billing_get_topup_limit = EntityMod.new(self, nil)
    end
    return self._aig_billing_get_topup_limit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingGetUsageHistory():list() / client:AigBillingGetUsageHistory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingGetUsageHistory(data)
  local EntityMod = require("entity.aig_billing_get_usage_history_entity")
  if data == nil then
    if self._aig_billing_get_usage_history == nil then
      self._aig_billing_get_usage_history = EntityMod.new(self, nil)
    end
    return self._aig_billing_get_usage_history
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingSetSpendingLimit():list() / client:AigBillingSetSpendingLimit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingSetSpendingLimit(data)
  local EntityMod = require("entity.aig_billing_set_spending_limit_entity")
  if data == nil then
    if self._aig_billing_set_spending_limit == nil then
      self._aig_billing_set_spending_limit = EntityMod.new(self, nil)
    end
    return self._aig_billing_set_spending_limit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingSetTopupConfig():list() / client:AigBillingSetTopupConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingSetTopupConfig(data)
  local EntityMod = require("entity.aig_billing_set_topup_config_entity")
  if data == nil then
    if self._aig_billing_set_topup_config == nil then
      self._aig_billing_set_topup_config = EntityMod.new(self, nil)
    end
    return self._aig_billing_set_topup_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AigBillingTopupStatus():list() / client:AigBillingTopupStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AigBillingTopupStatus(data)
  local EntityMod = require("entity.aig_billing_topup_status_entity")
  if data == nil then
    if self._aig_billing_topup_status == nil then
      self._aig_billing_topup_status = EntityMod.new(self, nil)
    end
    return self._aig_billing_topup_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutoRagJob():list() / client:AutoRagJob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AutoRagJob(data)
  local EntityMod = require("entity.auto_rag_job_entity")
  if data == nil then
    if self._auto_rag_job == nil then
      self._auto_rag_job = EntityMod.new(self, nil)
    end
    return self._auto_rag_job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutoRagRag():list() / client:AutoRagRag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AutoRagRag(data)
  local EntityMod = require("entity.auto_rag_rag_entity")
  if data == nil then
    if self._auto_rag_rag == nil then
      self._auto_rag_rag = EntityMod.new(self, nil)
    end
    return self._auto_rag_rag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutoRagRagSearch():list() / client:AutoRagRagSearch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:AutoRagRagSearch(data)
  local EntityMod = require("entity.auto_rag_rag_search_entity")
  if data == nil then
    if self._auto_rag_rag_search == nil then
      self._auto_rag_rag_search = EntityMod.new(self, nil)
    end
    return self._auto_rag_rag_search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FinetuneAsset():list() / client:FinetuneAsset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:FinetuneAsset(data)
  local EntityMod = require("entity.finetune_asset_entity")
  if data == nil then
    if self._finetune_asset == nil then
      self._finetune_asset = EntityMod.new(self, nil)
    end
    return self._finetune_asset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Memory():list() / client:Memory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:Memory(data)
  local EntityMod = require("entity.memory_entity")
  if data == nil then
    if self._memory == nil then
      self._memory = EntityMod.new(self, nil)
    end
    return self._memory
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Namespace():list() / client:Namespace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:Namespace(data)
  local EntityMod = require("entity.namespace_entity")
  if data == nil then
    if self._namespace == nil then
      self._namespace = EntityMod.new(self, nil)
    end
    return self._namespace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Vectorize():list() / client:Vectorize():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:Vectorize(data)
  local EntityMod = require("entity.vectorize_entity")
  if data == nil then
    if self._vectorize == nil then
      self._vectorize = EntityMod.new(self, nil)
    end
    return self._vectorize
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VectorizeBetaDeprecated():list() / client:VectorizeBetaDeprecated():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:VectorizeBetaDeprecated(data)
  local EntityMod = require("entity.vectorize_beta__deprecated_entity")
  if data == nil then
    if self._vectorize_beta__deprecated == nil then
      self._vectorize_beta__deprecated = EntityMod.new(self, nil)
    end
    return self._vectorize_beta__deprecated
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersAi():list() / client:WorkersAi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:WorkersAi(data)
  local EntityMod = require("entity.workers_ai_entity")
  if data == nil then
    if self._workers_ai == nil then
      self._workers_ai = EntityMod.new(self, nil)
    end
    return self._workers_ai
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkersAiFinetune():list() / client:WorkersAiFinetune():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareAiSDK:WorkersAiFinetune(data)
  local EntityMod = require("entity.workers_ai_finetune_entity")
  if data == nil then
    if self._workers_ai_finetune == nil then
      self._workers_ai_finetune = EntityMod.new(self, nil)
    end
    return self._workers_ai_finetune
  end
  return EntityMod.new(self, data)
end




function CloudflareAiSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareAiSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareAiSDK
