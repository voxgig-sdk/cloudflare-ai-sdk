# AutoRagRagSearch entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareAi_sdk"
require_relative "runner"

class AutoRagRagSearchEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareAiSDK.test(nil, nil)
    ent = testsdk.AutoRagRagSearch(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = auto_rag_rag_search_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "auto_rag_rag_search." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_SEARCH_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    auto_rag_rag_search_ref01_ent = client.AutoRagRagSearch(nil)
    auto_rag_rag_search_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.auto_rag_rag_search"), "auto_rag_rag_search_ref01"))
    auto_rag_rag_search_ref01_data["account_id"] = setup[:idmap]["account01"]
    auto_rag_rag_search_ref01_data["rag_id"] = setup[:idmap]["rag01"]

    auto_rag_rag_search_ref01_data_result = auto_rag_rag_search_ref01_ent.create(auto_rag_rag_search_ref01_data, nil)
    auto_rag_rag_search_ref01_data = Helpers.to_map(auto_rag_rag_search_ref01_data_result.respond_to?(:data_get) ? auto_rag_rag_search_ref01_data_result.data_get : auto_rag_rag_search_ref01_data_result)
    assert !auto_rag_rag_search_ref01_data.nil?

  end
end

def auto_rag_rag_search_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "auto_rag_rag_search", "AutoRagRagSearchTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareAiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["auto_rag_rag_search01", "auto_rag_rag_search02", "auto_rag_rag_search03", "account01", "account02", "account03", "rag01"],
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
  entid_env_raw = ENV["CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_SEARCH_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_SEARCH_ENTID" => idmap,
    "CLOUDFLARE_AI_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_AI_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_AI_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_SEARCH_ENTID"])
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
