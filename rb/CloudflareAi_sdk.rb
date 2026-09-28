# CloudflareAi SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CloudflareAi_types'


class CloudflareAiSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudflareAiUtility.new
    @_utility = utility

    config = CloudflareAiConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudflareAiHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudflareAiHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudflareAiFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudflareAiUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudflareAiHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudflareAiHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudflareAiHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudflareAiSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CloudflareAiError.new(
        "#{op}_allow",
        "CloudflareAiSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudflareAiError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudflareAiHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudflareAiHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CloudflareAiError.new(
        "graphql_error", "CloudflareAiSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Account.list / client.Account.load({ "id" => ... })
  def Account(data = nil)
    require_relative 'entity/account_entity'
    AccountEntity.new(self, data)
  end


  # Canonical facade: client.AiGateway.list / client.AiGateway.load({ "id" => ... })
  def AiGateway(data = nil)
    require_relative 'entity/ai_gateway_entity'
    AiGatewayEntity.new(self, data)
  end


  # Canonical facade: client.AiGatewayCustomDomain.list / client.AiGatewayCustomDomain.load({ "id" => ... })
  def AiGatewayCustomDomain(data = nil)
    require_relative 'entity/ai_gateway_custom_domain_entity'
    AiGatewayCustomDomainEntity.new(self, data)
  end


  # Canonical facade: client.AiGatewayCustomProvider.list / client.AiGatewayCustomProvider.load({ "id" => ... })
  def AiGatewayCustomProvider(data = nil)
    require_relative 'entity/ai_gateway_custom_provider_entity'
    AiGatewayCustomProviderEntity.new(self, data)
  end


  # Canonical facade: client.AiGatewayCustomProviderCost.list / client.AiGatewayCustomProviderCost.load({ "id" => ... })
  def AiGatewayCustomProviderCost(data = nil)
    require_relative 'entity/ai_gateway_custom_provider_cost_entity'
    AiGatewayCustomProviderCostEntity.new(self, data)
  end


  # Canonical facade: client.AiGatewayDataset.list / client.AiGatewayDataset.load({ "id" => ... })
  def AiGatewayDataset(data = nil)
    require_relative 'entity/ai_gateway_dataset_entity'
    AiGatewayDatasetEntity.new(self, data)
  end


  # Canonical facade: client.AiGatewayDynamicRoute.list / client.AiGatewayDynamicRoute.load({ "id" => ... })
  def AiGatewayDynamicRoute(data = nil)
    require_relative 'entity/ai_gateway_dynamic_route_entity'
    AiGatewayDynamicRouteEntity.new(self, data)
  end


  # Canonical facade: client.AiGatewayEvaluation.list / client.AiGatewayEvaluation.load({ "id" => ... })
  def AiGatewayEvaluation(data = nil)
    require_relative 'entity/ai_gateway_evaluation_entity'
    AiGatewayEvaluationEntity.new(self, data)
  end


  # Canonical facade: client.AiGatewayGateway.list / client.AiGatewayGateway.load({ "id" => ... })
  def AiGatewayGateway(data = nil)
    require_relative 'entity/ai_gateway_gateway_entity'
    AiGatewayGatewayEntity.new(self, data)
  end


  # Canonical facade: client.AiGatewayLog.list / client.AiGatewayLog.load({ "id" => ... })
  def AiGatewayLog(data = nil)
    require_relative 'entity/ai_gateway_log_entity'
    AiGatewayLogEntity.new(self, data)
  end


  # Canonical facade: client.AiGatewayProviderConfig.list / client.AiGatewayProviderConfig.load({ "id" => ... })
  def AiGatewayProviderConfig(data = nil)
    require_relative 'entity/ai_gateway_provider_config_entity'
    AiGatewayProviderConfigEntity.new(self, data)
  end


  # Canonical facade: client.AiSearchAccountSearch.list / client.AiSearchAccountSearch.load({ "id" => ... })
  def AiSearchAccountSearch(data = nil)
    require_relative 'entity/ai_search_account_search_entity'
    AiSearchAccountSearchEntity.new(self, data)
  end


  # Canonical facade: client.AiSearchInstance.list / client.AiSearchInstance.load({ "id" => ... })
  def AiSearchInstance(data = nil)
    require_relative 'entity/ai_search_instance_entity'
    AiSearchInstanceEntity.new(self, data)
  end


  # Canonical facade: client.AiSearchInstancesItem.list / client.AiSearchInstancesItem.load({ "id" => ... })
  def AiSearchInstancesItem(data = nil)
    require_relative 'entity/ai_search_instances_item_entity'
    AiSearchInstancesItemEntity.new(self, data)
  end


  # Canonical facade: client.AiSearchInstancesJob.list / client.AiSearchInstancesJob.load({ "id" => ... })
  def AiSearchInstancesJob(data = nil)
    require_relative 'entity/ai_search_instances_job_entity'
    AiSearchInstancesJobEntity.new(self, data)
  end


  # Canonical facade: client.AiSearchNamespace.list / client.AiSearchNamespace.load({ "id" => ... })
  def AiSearchNamespace(data = nil)
    require_relative 'entity/ai_search_namespace_entity'
    AiSearchNamespaceEntity.new(self, data)
  end


  # Canonical facade: client.AiSearchToken.list / client.AiSearchToken.load({ "id" => ... })
  def AiSearchToken(data = nil)
    require_relative 'entity/ai_search_token_entity'
    AiSearchTokenEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingCreateTopup.list / client.AigBillingCreateTopup.load({ "id" => ... })
  def AigBillingCreateTopup(data = nil)
    require_relative 'entity/aig_billing_create_topup_entity'
    AigBillingCreateTopupEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingDeleteSpendingLimit.list / client.AigBillingDeleteSpendingLimit.load({ "id" => ... })
  def AigBillingDeleteSpendingLimit(data = nil)
    require_relative 'entity/aig_billing_delete_spending_limit_entity'
    AigBillingDeleteSpendingLimitEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingDeleteTopupConfig.list / client.AigBillingDeleteTopupConfig.load({ "id" => ... })
  def AigBillingDeleteTopupConfig(data = nil)
    require_relative 'entity/aig_billing_delete_topup_config_entity'
    AigBillingDeleteTopupConfigEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingGetCreditBalance.list / client.AigBillingGetCreditBalance.load({ "id" => ... })
  def AigBillingGetCreditBalance(data = nil)
    require_relative 'entity/aig_billing_get_credit_balance_entity'
    AigBillingGetCreditBalanceEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingGetInvoiceHistory.list / client.AigBillingGetInvoiceHistory.load({ "id" => ... })
  def AigBillingGetInvoiceHistory(data = nil)
    require_relative 'entity/aig_billing_get_invoice_history_entity'
    AigBillingGetInvoiceHistoryEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingGetInvoicePreview.list / client.AigBillingGetInvoicePreview.load({ "id" => ... })
  def AigBillingGetInvoicePreview(data = nil)
    require_relative 'entity/aig_billing_get_invoice_preview_entity'
    AigBillingGetInvoicePreviewEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingGetSpendingLimit.list / client.AigBillingGetSpendingLimit.load({ "id" => ... })
  def AigBillingGetSpendingLimit(data = nil)
    require_relative 'entity/aig_billing_get_spending_limit_entity'
    AigBillingGetSpendingLimitEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingGetTopupConfig.list / client.AigBillingGetTopupConfig.load({ "id" => ... })
  def AigBillingGetTopupConfig(data = nil)
    require_relative 'entity/aig_billing_get_topup_config_entity'
    AigBillingGetTopupConfigEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingGetTopupEligibility.list / client.AigBillingGetTopupEligibility.load({ "id" => ... })
  def AigBillingGetTopupEligibility(data = nil)
    require_relative 'entity/aig_billing_get_topup_eligibility_entity'
    AigBillingGetTopupEligibilityEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingGetTopupLimit.list / client.AigBillingGetTopupLimit.load({ "id" => ... })
  def AigBillingGetTopupLimit(data = nil)
    require_relative 'entity/aig_billing_get_topup_limit_entity'
    AigBillingGetTopupLimitEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingGetUsageHistory.list / client.AigBillingGetUsageHistory.load({ "id" => ... })
  def AigBillingGetUsageHistory(data = nil)
    require_relative 'entity/aig_billing_get_usage_history_entity'
    AigBillingGetUsageHistoryEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingSetSpendingLimit.list / client.AigBillingSetSpendingLimit.load({ "id" => ... })
  def AigBillingSetSpendingLimit(data = nil)
    require_relative 'entity/aig_billing_set_spending_limit_entity'
    AigBillingSetSpendingLimitEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingSetTopupConfig.list / client.AigBillingSetTopupConfig.load({ "id" => ... })
  def AigBillingSetTopupConfig(data = nil)
    require_relative 'entity/aig_billing_set_topup_config_entity'
    AigBillingSetTopupConfigEntity.new(self, data)
  end


  # Canonical facade: client.AigBillingTopupStatus.list / client.AigBillingTopupStatus.load({ "id" => ... })
  def AigBillingTopupStatus(data = nil)
    require_relative 'entity/aig_billing_topup_status_entity'
    AigBillingTopupStatusEntity.new(self, data)
  end


  # Canonical facade: client.AutoRagJob.list / client.AutoRagJob.load({ "id" => ... })
  def AutoRagJob(data = nil)
    require_relative 'entity/auto_rag_job_entity'
    AutoRagJobEntity.new(self, data)
  end


  # Canonical facade: client.AutoRagRag.list / client.AutoRagRag.load({ "id" => ... })
  def AutoRagRag(data = nil)
    require_relative 'entity/auto_rag_rag_entity'
    AutoRagRagEntity.new(self, data)
  end


  # Canonical facade: client.AutoRagRagSearch.list / client.AutoRagRagSearch.load({ "id" => ... })
  def AutoRagRagSearch(data = nil)
    require_relative 'entity/auto_rag_rag_search_entity'
    AutoRagRagSearchEntity.new(self, data)
  end


  # Canonical facade: client.FinetuneAsset.list / client.FinetuneAsset.load({ "id" => ... })
  def FinetuneAsset(data = nil)
    require_relative 'entity/finetune_asset_entity'
    FinetuneAssetEntity.new(self, data)
  end


  # Canonical facade: client.Vectorize.list / client.Vectorize.load({ "id" => ... })
  def Vectorize(data = nil)
    require_relative 'entity/vectorize_entity'
    VectorizeEntity.new(self, data)
  end


  # Canonical facade: client.VectorizeBetaDeprecated.list / client.VectorizeBetaDeprecated.load({ "id" => ... })
  def VectorizeBetaDeprecated(data = nil)
    require_relative 'entity/vectorize_beta__deprecated_entity'
    VectorizeBetaDeprecatedEntity.new(self, data)
  end


  # Canonical facade: client.WorkersAi.list / client.WorkersAi.load({ "id" => ... })
  def WorkersAi(data = nil)
    require_relative 'entity/workers_ai_entity'
    WorkersAiEntity.new(self, data)
  end


  # Canonical facade: client.WorkersAiFinetune.list / client.WorkersAiFinetune.load({ "id" => ... })
  def WorkersAiFinetune(data = nil)
    require_relative 'entity/workers_ai_finetune_entity'
    WorkersAiFinetuneEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudflareAiSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
