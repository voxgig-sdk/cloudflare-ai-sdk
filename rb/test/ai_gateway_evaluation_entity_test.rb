# AiGatewayEvaluation entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareAi_sdk"
require_relative "runner"

class AiGatewayEvaluationEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareAiSDK.test(nil, nil)
    ent = testsdk.AiGatewayEvaluation(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "ai_gateway_evaluation" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareAiSDK.test(seed, nil)
    seen = base.AiGatewayEvaluation(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareAiConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareAiSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.AiGatewayEvaluation(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = ai_gateway_evaluation_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "ai_gateway_evaluation." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_GATEWAY_EVALUATION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    ai_gateway_evaluation_ref01_ent = client.AiGatewayEvaluation(nil)
    ai_gateway_evaluation_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.ai_gateway_evaluation"), "ai_gateway_evaluation_ref01"))
    ai_gateway_evaluation_ref01_data["account_id"] = setup[:idmap]["account01"]
    ai_gateway_evaluation_ref01_data["gateway_id"] = setup[:idmap]["gateway01"]

    ai_gateway_evaluation_ref01_data_result = ai_gateway_evaluation_ref01_ent.create(ai_gateway_evaluation_ref01_data, nil)
    ai_gateway_evaluation_ref01_data = Helpers.to_map(ai_gateway_evaluation_ref01_data_result.respond_to?(:data_get) ? ai_gateway_evaluation_ref01_data_result.data_get : ai_gateway_evaluation_ref01_data_result)
    assert !ai_gateway_evaluation_ref01_data.nil?
    assert !ai_gateway_evaluation_ref01_data["id"].nil?

    # LIST
    ai_gateway_evaluation_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
    }

    ai_gateway_evaluation_ref01_list_result = ai_gateway_evaluation_ref01_ent.list(ai_gateway_evaluation_ref01_match, nil)
    assert ai_gateway_evaluation_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(ai_gateway_evaluation_ref01_list_result),
      { "id" => ai_gateway_evaluation_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # LOAD
    ai_gateway_evaluation_ref01_match_dt0 = {
      "id" => ai_gateway_evaluation_ref01_data["id"],
    }
    ai_gateway_evaluation_ref01_data_dt0_loaded = ai_gateway_evaluation_ref01_ent.load(ai_gateway_evaluation_ref01_match_dt0, nil)
    ai_gateway_evaluation_ref01_data_dt0_load_result = Helpers.to_map(ai_gateway_evaluation_ref01_data_dt0_loaded.respond_to?(:data_get) ? ai_gateway_evaluation_ref01_data_dt0_loaded.data_get : ai_gateway_evaluation_ref01_data_dt0_loaded)
    assert !ai_gateway_evaluation_ref01_data_dt0_load_result.nil?
    assert_equal ai_gateway_evaluation_ref01_data_dt0_load_result["id"], ai_gateway_evaluation_ref01_data["id"]

    # REMOVE
    ai_gateway_evaluation_ref01_match_rm0 = {
      "id" => ai_gateway_evaluation_ref01_data["id"],
    }
    ai_gateway_evaluation_ref01_ent.remove(ai_gateway_evaluation_ref01_match_rm0, nil)

    # LIST
    ai_gateway_evaluation_ref01_match_rt0 = {
      "account_id" => setup[:idmap]["account01"],
    }

    ai_gateway_evaluation_ref01_list_rt0_result = ai_gateway_evaluation_ref01_ent.list(ai_gateway_evaluation_ref01_match_rt0, nil)
    assert ai_gateway_evaluation_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(ai_gateway_evaluation_ref01_list_rt0_result),
      { "id" => ai_gateway_evaluation_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def ai_gateway_evaluation_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "ai_gateway_evaluation", "AiGatewayEvaluationTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareAiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["ai_gateway_evaluation01", "ai_gateway_evaluation02", "ai_gateway_evaluation03", "account01", "account02", "account03", "gateway01"],
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
  entid_env_raw = ENV["CLOUDFLARE_AI_TEST_AI_GATEWAY_EVALUATION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_AI_TEST_AI_GATEWAY_EVALUATION_ENTID" => idmap,
    "CLOUDFLARE_AI_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_AI_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_AI_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_AI_TEST_AI_GATEWAY_EVALUATION_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
