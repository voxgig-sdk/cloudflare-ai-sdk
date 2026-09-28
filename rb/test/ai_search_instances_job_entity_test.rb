# AiSearchInstancesJob entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareAi_sdk"
require_relative "runner"

class AiSearchInstancesJobEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareAiSDK.test(nil, nil)
    ent = testsdk.AiSearchInstancesJob(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "ai_search_instances_job" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareAiSDK.test(seed, nil)
    seen = base.AiSearchInstancesJob(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareAiConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareAiSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.AiSearchInstancesJob(nil).stream("list", nil, nil).each do |item|
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
    setup = ai_search_instances_job_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "ai_search_instances_job." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_JOB_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    ai_search_instances_job_ref01_ent = client.AiSearchInstancesJob(nil)
    ai_search_instances_job_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.ai_search_instances_job"), "ai_search_instances_job_ref01"))
    ai_search_instances_job_ref01_data["account_id"] = setup[:idmap]["account01"]
    ai_search_instances_job_ref01_data["instance_id"] = setup[:idmap]["instance01"]
    ai_search_instances_job_ref01_data["job_id"] = setup[:idmap]["job01"]
    ai_search_instances_job_ref01_data["namespace_id"] = setup[:idmap]["namespace01"]

    ai_search_instances_job_ref01_data_result = ai_search_instances_job_ref01_ent.create(ai_search_instances_job_ref01_data, nil)
    ai_search_instances_job_ref01_data = Helpers.to_map(ai_search_instances_job_ref01_data_result.respond_to?(:data_get) ? ai_search_instances_job_ref01_data_result.data_get : ai_search_instances_job_ref01_data_result)
    assert !ai_search_instances_job_ref01_data.nil?
    assert !ai_search_instances_job_ref01_data["id"].nil?

    # LIST
    ai_search_instances_job_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
      "instance_id" => setup[:idmap]["instance01"],
    }

    ai_search_instances_job_ref01_list_result = ai_search_instances_job_ref01_ent.list(ai_search_instances_job_ref01_match, nil)
    assert ai_search_instances_job_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(ai_search_instances_job_ref01_list_result),
      { "id" => ai_search_instances_job_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    ai_search_instances_job_ref01_data_up0_up = {
      "id" => ai_search_instances_job_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
      "instance_id" => setup[:idmap]["instance_id"],
    }

    ai_search_instances_job_ref01_markdef_up0_name = "action"
    ai_search_instances_job_ref01_markdef_up0_value = "Mark01-ai_search_instances_job_ref01_#{setup[:now]}"
    ai_search_instances_job_ref01_data_up0_up[ai_search_instances_job_ref01_markdef_up0_name] = ai_search_instances_job_ref01_markdef_up0_value

    ai_search_instances_job_ref01_resdata_up0_result = ai_search_instances_job_ref01_ent.update(ai_search_instances_job_ref01_data_up0_up, nil)
    ai_search_instances_job_ref01_resdata_up0 = Helpers.to_map(ai_search_instances_job_ref01_resdata_up0_result.respond_to?(:data_get) ? ai_search_instances_job_ref01_resdata_up0_result.data_get : ai_search_instances_job_ref01_resdata_up0_result)
    assert !ai_search_instances_job_ref01_resdata_up0.nil?
    assert_equal ai_search_instances_job_ref01_resdata_up0["id"], ai_search_instances_job_ref01_data_up0_up["id"]
    assert_equal ai_search_instances_job_ref01_resdata_up0[ai_search_instances_job_ref01_markdef_up0_name], ai_search_instances_job_ref01_markdef_up0_value

    # LOAD
    ai_search_instances_job_ref01_match_dt0 = {
      "id" => ai_search_instances_job_ref01_data["id"],
    }
    ai_search_instances_job_ref01_data_dt0_loaded = ai_search_instances_job_ref01_ent.load(ai_search_instances_job_ref01_match_dt0, nil)
    ai_search_instances_job_ref01_data_dt0_load_result = Helpers.to_map(ai_search_instances_job_ref01_data_dt0_loaded.respond_to?(:data_get) ? ai_search_instances_job_ref01_data_dt0_loaded.data_get : ai_search_instances_job_ref01_data_dt0_loaded)
    assert !ai_search_instances_job_ref01_data_dt0_load_result.nil?
    assert_equal ai_search_instances_job_ref01_data_dt0_load_result["id"], ai_search_instances_job_ref01_data["id"]

  end
end

def ai_search_instances_job_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "ai_search_instances_job", "AiSearchInstancesJobTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareAiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["ai_search_instances_job01", "ai_search_instances_job02", "ai_search_instances_job03", "account01", "account02", "account03", "namespace01", "namespace02", "namespace03", "instance01", "job01"],
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
  entid_env_raw = ENV["CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_JOB_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_JOB_ENTID" => idmap,
    "CLOUDFLARE_AI_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_AI_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_AI_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_JOB_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end
  if idmap_resolved["instance_id"].nil?
    idmap_resolved["instance_id"] = idmap_resolved["instance01"]
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
