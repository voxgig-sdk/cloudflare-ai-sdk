# AiGatewayDynamicRoute entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareAi_sdk"
require_relative "runner"

class AiGatewayDynamicRouteEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareAiSDK.test(nil, nil)
    ent = testsdk.AiGatewayDynamicRoute(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = ai_gateway_dynamic_route_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "ai_gateway_dynamic_route." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    ai_gateway_dynamic_route_ref01_ent = client.AiGatewayDynamicRoute(nil)
    ai_gateway_dynamic_route_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.ai_gateway_dynamic_route"), "ai_gateway_dynamic_route_ref01"))
    ai_gateway_dynamic_route_ref01_data["account_id"] = setup[:idmap]["account01"]
    ai_gateway_dynamic_route_ref01_data["gateway_id"] = setup[:idmap]["gateway01"]
    ai_gateway_dynamic_route_ref01_data["route_id"] = setup[:idmap]["route01"]

    ai_gateway_dynamic_route_ref01_data_result = ai_gateway_dynamic_route_ref01_ent.create(ai_gateway_dynamic_route_ref01_data, nil)
    ai_gateway_dynamic_route_ref01_data = Helpers.to_map(ai_gateway_dynamic_route_ref01_data_result.respond_to?(:data_get) ? ai_gateway_dynamic_route_ref01_data_result.data_get : ai_gateway_dynamic_route_ref01_data_result)
    assert !ai_gateway_dynamic_route_ref01_data.nil?
    assert !ai_gateway_dynamic_route_ref01_data["id"].nil?

    # UPDATE
    ai_gateway_dynamic_route_ref01_data_up0_up = {
      "id" => ai_gateway_dynamic_route_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
      "gateway_id" => setup[:idmap]["gateway_id"],
    }

    ai_gateway_dynamic_route_ref01_markdef_up0_name = "account_tag"
    ai_gateway_dynamic_route_ref01_markdef_up0_value = "Mark01-ai_gateway_dynamic_route_ref01_#{setup[:now]}"
    ai_gateway_dynamic_route_ref01_data_up0_up[ai_gateway_dynamic_route_ref01_markdef_up0_name] = ai_gateway_dynamic_route_ref01_markdef_up0_value

    ai_gateway_dynamic_route_ref01_resdata_up0_result = ai_gateway_dynamic_route_ref01_ent.update(ai_gateway_dynamic_route_ref01_data_up0_up, nil)
    ai_gateway_dynamic_route_ref01_resdata_up0 = Helpers.to_map(ai_gateway_dynamic_route_ref01_resdata_up0_result.respond_to?(:data_get) ? ai_gateway_dynamic_route_ref01_resdata_up0_result.data_get : ai_gateway_dynamic_route_ref01_resdata_up0_result)
    assert !ai_gateway_dynamic_route_ref01_resdata_up0.nil?
    assert_equal ai_gateway_dynamic_route_ref01_resdata_up0["id"], ai_gateway_dynamic_route_ref01_data_up0_up["id"]
    assert_equal ai_gateway_dynamic_route_ref01_resdata_up0[ai_gateway_dynamic_route_ref01_markdef_up0_name], ai_gateway_dynamic_route_ref01_markdef_up0_value

    # LOAD
    ai_gateway_dynamic_route_ref01_match_dt0 = {
      "id" => ai_gateway_dynamic_route_ref01_data["id"],
    }
    ai_gateway_dynamic_route_ref01_data_dt0_loaded = ai_gateway_dynamic_route_ref01_ent.load(ai_gateway_dynamic_route_ref01_match_dt0, nil)
    ai_gateway_dynamic_route_ref01_data_dt0_load_result = Helpers.to_map(ai_gateway_dynamic_route_ref01_data_dt0_loaded.respond_to?(:data_get) ? ai_gateway_dynamic_route_ref01_data_dt0_loaded.data_get : ai_gateway_dynamic_route_ref01_data_dt0_loaded)
    assert !ai_gateway_dynamic_route_ref01_data_dt0_load_result.nil?
    assert_equal ai_gateway_dynamic_route_ref01_data_dt0_load_result["id"], ai_gateway_dynamic_route_ref01_data["id"]

    # REMOVE
    ai_gateway_dynamic_route_ref01_match_rm0 = {
      "id" => ai_gateway_dynamic_route_ref01_data["id"],
    }
    ai_gateway_dynamic_route_ref01_ent.remove(ai_gateway_dynamic_route_ref01_match_rm0, nil)

  end
end

def ai_gateway_dynamic_route_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "ai_gateway_dynamic_route", "AiGatewayDynamicRouteTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareAiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["ai_gateway_dynamic_route01", "ai_gateway_dynamic_route02", "ai_gateway_dynamic_route03", "account01", "account02", "account03", "gateway01", "route01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID" => idmap,
    "CLOUDFLARE_AI_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_AI_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_AI_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["gateway_id"].nil?
    idmap_resolved["gateway_id"] = idmap_resolved["gateway01"]
  end

  if env["CLOUDFLARE_AI_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_AI_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareAiSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_AI_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_AI_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
