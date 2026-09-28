-- AiGatewayLog entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-ai_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("AiGatewayLogEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:AiGatewayLog(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["ai_gateway_log"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:AiGatewayLog(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:AiGatewayLog(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = ai_gateway_log_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "ai_gateway_log." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_GATEWAY_LOG_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local ai_gateway_log_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.ai_gateway_log")))
    local ai_gateway_log_ref01_data = nil
    if #ai_gateway_log_ref01_data_raw > 0 then
      ai_gateway_log_ref01_data = helpers.to_map(ai_gateway_log_ref01_data_raw[1][2])
    end

    -- LIST
    local ai_gateway_log_ref01_ent = client:AiGatewayLog(nil)
    local ai_gateway_log_ref01_match = {
      ["account_id"] = setup.idmap["account01"],
      ["gateway_id"] = setup.idmap["gateway01"],
    }

    local ai_gateway_log_ref01_list_result, err = ai_gateway_log_ref01_ent:list(ai_gateway_log_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(ai_gateway_log_ref01_list_result)

    -- UPDATE
    local ai_gateway_log_ref01_data_up0_up = {
      id = ai_gateway_log_ref01_data["id"],
      ["account_id"] = setup.idmap["account_id"],
      ["gateway_id"] = setup.idmap["gateway_id"],
    }

    local ai_gateway_log_ref01_markdef_up0_name = "created_at"
    local ai_gateway_log_ref01_markdef_up0_value = "Mark01-ai_gateway_log_ref01_" .. tostring(setup.now)
    ai_gateway_log_ref01_data_up0_up[ai_gateway_log_ref01_markdef_up0_name] = ai_gateway_log_ref01_markdef_up0_value

    local ai_gateway_log_ref01_resdata_up0_result, err = ai_gateway_log_ref01_ent:update(ai_gateway_log_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local ai_gateway_log_ref01_resdata_up0 = helpers.to_map(type(ai_gateway_log_ref01_resdata_up0_result) == 'table' and ai_gateway_log_ref01_resdata_up0_result.data_get and ai_gateway_log_ref01_resdata_up0_result:data_get() or ai_gateway_log_ref01_resdata_up0_result)
    assert.is_not_nil(ai_gateway_log_ref01_resdata_up0)
    assert.are.equal(ai_gateway_log_ref01_resdata_up0["id"], ai_gateway_log_ref01_data_up0_up["id"])
    assert.are.equal(ai_gateway_log_ref01_resdata_up0[ai_gateway_log_ref01_markdef_up0_name], ai_gateway_log_ref01_markdef_up0_value)

    -- LOAD
    local ai_gateway_log_ref01_match_dt0 = {
      id = ai_gateway_log_ref01_data["id"],
    }
    local ai_gateway_log_ref01_data_dt0_loaded, err = ai_gateway_log_ref01_ent:load(ai_gateway_log_ref01_match_dt0, nil)
    assert.is_nil(err)
    local ai_gateway_log_ref01_data_dt0_load_result = helpers.to_map(type(ai_gateway_log_ref01_data_dt0_loaded) == 'table' and ai_gateway_log_ref01_data_dt0_loaded.data_get and ai_gateway_log_ref01_data_dt0_loaded:data_get() or ai_gateway_log_ref01_data_dt0_loaded)
    assert.is_not_nil(ai_gateway_log_ref01_data_dt0_load_result)
    assert.are.equal(ai_gateway_log_ref01_data_dt0_load_result["id"], ai_gateway_log_ref01_data["id"])

  end)
end)

function ai_gateway_log_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/ai_gateway_log/AiGatewayLogTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read ai_gateway_log test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "ai_gateway_log01", "ai_gateway_log02", "ai_gateway_log03", "account01", "account02", "account03", "gateway01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_AI_TEST_AI_GATEWAY_LOG_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_AI_TEST_AI_GATEWAY_LOG_ENTID"] = idmap,
    ["CLOUDFLARE_AI_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_AI_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_AI_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_AI_TEST_AI_GATEWAY_LOG_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"] == nil then
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["gateway_id"] == nil then
    idmap_resolved["gateway_id"] = idmap_resolved["gateway01"]
  end

  if env["CLOUDFLARE_AI_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_AI_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_AI_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_AI_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
