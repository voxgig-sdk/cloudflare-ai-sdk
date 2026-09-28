<?php
declare(strict_types=1);

// AiSearchInstancesItem entity test

require_once __DIR__ . '/../cloudflareai_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class AiSearchInstancesItemEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareAiSDK::test(null, null);
        $ent = $testsdk->AiSearchInstancesItem(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "ai_search_instances_item" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CloudflareAiSDK::test($seed, null);
        $seen = iterator_to_array($base->AiSearchInstancesItem(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CloudflareAiConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CloudflareAiSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->AiSearchInstancesItem(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = ai_search_instances_item_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "ai_search_instances_item." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $ai_search_instances_item_ref01_ent = $client->AiSearchInstancesItem(null);
        $ai_search_instances_item_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.ai_search_instances_item"), "ai_search_instances_item_ref01"));
        $ai_search_instances_item_ref01_data["account_id"] = $setup["idmap"]["account01"];
        $ai_search_instances_item_ref01_data["instance_id"] = $setup["idmap"]["instance01"];
        $ai_search_instances_item_ref01_data["item_id"] = $setup["idmap"]["item01"];
        $ai_search_instances_item_ref01_data["namespace_id"] = $setup["idmap"]["namespace01"];

        $ai_search_instances_item_ref01_data_result = $ai_search_instances_item_ref01_ent->create($ai_search_instances_item_ref01_data, null);
        $ai_search_instances_item_ref01_data = Helpers::to_map(is_object($ai_search_instances_item_ref01_data_result) && method_exists($ai_search_instances_item_ref01_data_result, 'data_get') ? $ai_search_instances_item_ref01_data_result->data_get() : $ai_search_instances_item_ref01_data_result);
        $this->assertNotNull($ai_search_instances_item_ref01_data);
        $this->assertNotNull($ai_search_instances_item_ref01_data["id"]);

        // LIST
        $ai_search_instances_item_ref01_match = [
            "account_id" => $setup["idmap"]["account01"],
            "instance_id" => $setup["idmap"]["instance01"],
            "item_id" => $setup["idmap"]["item01"],
            "namespace_id" => $setup["idmap"]["namespace01"],
        ];

        $ai_search_instances_item_ref01_list_result = $ai_search_instances_item_ref01_ent->list($ai_search_instances_item_ref01_match, null);
        $this->assertIsArray($ai_search_instances_item_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($ai_search_instances_item_ref01_list_result),
            ["id" => $ai_search_instances_item_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $ai_search_instances_item_ref01_data_up0_up = [
            "id" => $ai_search_instances_item_ref01_data["id"],
            "account_id" => $setup["idmap"]["account_id"],
            "namespace_id" => $setup["idmap"]["namespace_id"],
        ];

        $ai_search_instances_item_ref01_markdef_up0_name = "action";
        $ai_search_instances_item_ref01_markdef_up0_value = "Mark01-ai_search_instances_item_ref01_" . $setup["now"];
        $ai_search_instances_item_ref01_data_up0_up[$ai_search_instances_item_ref01_markdef_up0_name] = $ai_search_instances_item_ref01_markdef_up0_value;

        $ai_search_instances_item_ref01_resdata_up0_result = $ai_search_instances_item_ref01_ent->update($ai_search_instances_item_ref01_data_up0_up, null);
        $ai_search_instances_item_ref01_resdata_up0 = Helpers::to_map(is_object($ai_search_instances_item_ref01_resdata_up0_result) && method_exists($ai_search_instances_item_ref01_resdata_up0_result, 'data_get') ? $ai_search_instances_item_ref01_resdata_up0_result->data_get() : $ai_search_instances_item_ref01_resdata_up0_result);
        $this->assertNotNull($ai_search_instances_item_ref01_resdata_up0);
        $this->assertEquals($ai_search_instances_item_ref01_resdata_up0["id"], $ai_search_instances_item_ref01_data_up0_up["id"]);
        $this->assertEquals($ai_search_instances_item_ref01_resdata_up0[$ai_search_instances_item_ref01_markdef_up0_name], $ai_search_instances_item_ref01_markdef_up0_value);

        // LOAD
        $ai_search_instances_item_ref01_match_dt0 = [
            "id" => $ai_search_instances_item_ref01_data["id"],
        ];
        $ai_search_instances_item_ref01_data_dt0_loaded = $ai_search_instances_item_ref01_ent->load($ai_search_instances_item_ref01_match_dt0, null);
        $ai_search_instances_item_ref01_data_dt0_load_result = Helpers::to_map(is_object($ai_search_instances_item_ref01_data_dt0_loaded) && method_exists($ai_search_instances_item_ref01_data_dt0_loaded, 'data_get') ? $ai_search_instances_item_ref01_data_dt0_loaded->data_get() : $ai_search_instances_item_ref01_data_dt0_loaded);
        $this->assertNotNull($ai_search_instances_item_ref01_data_dt0_load_result);
        $this->assertEquals($ai_search_instances_item_ref01_data_dt0_load_result["id"], $ai_search_instances_item_ref01_data["id"]);

        // REMOVE
        $ai_search_instances_item_ref01_match_rm0 = [
            "id" => $ai_search_instances_item_ref01_data["id"],
        ];
        $ai_search_instances_item_ref01_ent->remove($ai_search_instances_item_ref01_match_rm0, null);

        // LIST
        $ai_search_instances_item_ref01_match_rt0 = [
            "account_id" => $setup["idmap"]["account01"],
            "instance_id" => $setup["idmap"]["instance01"],
            "item_id" => $setup["idmap"]["item01"],
            "namespace_id" => $setup["idmap"]["namespace01"],
        ];

        $ai_search_instances_item_ref01_list_rt0_result = $ai_search_instances_item_ref01_ent->list($ai_search_instances_item_ref01_match_rt0, null);
        $this->assertIsArray($ai_search_instances_item_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($ai_search_instances_item_ref01_list_rt0_result),
            ["id" => $ai_search_instances_item_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function ai_search_instances_item_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/ai_search_instances_item/AiSearchInstancesItemTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareAiSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["ai_search_instances_item01", "ai_search_instances_item02", "ai_search_instances_item03", "account01", "account02", "account03", "instance01", "item01", "namespace01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID" => $idmap,
        "CLOUDFLARE_AI_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_AI_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_AI_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["account_id"])) {
        $idmap_resolved["account_id"] = $idmap_resolved["account01"];
    }
    if (!isset($idmap_resolved["namespace_id"])) {
        $idmap_resolved["namespace_id"] = $idmap_resolved["namespace01"];
    }

    if ($env["CLOUDFLARE_AI_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_AI_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareAiSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_AI_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_AI_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
