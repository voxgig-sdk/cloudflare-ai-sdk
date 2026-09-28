package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-ai-sdk/go"
	"github.com/voxgig-sdk/cloudflare-ai-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-ai-sdk/go/utility/struct"
)

func TestAiSearchInstancesItemEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiSearchInstancesItem(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiSearchInstancesItemEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"ai_search_instances_item": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AiSearchInstancesItem(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.AiSearchInstancesItem(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := ai_search_instances_itemBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ai_search_instances_item." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		aiSearchInstancesItemRef01Ent := client.AiSearchInstancesItem(nil)
		aiSearchInstancesItemRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ai_search_instances_item"}), "ai_search_instances_item_ref01"))
		aiSearchInstancesItemRef01Data["account_id"] = setup.idmap["account01"]
		aiSearchInstancesItemRef01Data["instance_id"] = setup.idmap["instance01"]
		aiSearchInstancesItemRef01Data["item_id"] = setup.idmap["item01"]
		aiSearchInstancesItemRef01Data["namespace_id"] = setup.idmap["namespace01"]

		aiSearchInstancesItemRef01DataResult, err := aiSearchInstancesItemRef01Ent.Create(aiSearchInstancesItemRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		aiSearchInstancesItemRef01Data = core.ToMapAny(entityData(aiSearchInstancesItemRef01DataResult))
		if aiSearchInstancesItemRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if aiSearchInstancesItemRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		aiSearchInstancesItemRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
			"instance_id": setup.idmap["instance01"],
			"item_id": setup.idmap["item01"],
			"namespace_id": setup.idmap["namespace01"],
		}

		aiSearchInstancesItemRef01ListResult, err := aiSearchInstancesItemRef01Ent.List(aiSearchInstancesItemRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiSearchInstancesItemRef01List, aiSearchInstancesItemRef01ListOk := aiSearchInstancesItemRef01ListResult.([]any)
		if !aiSearchInstancesItemRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", aiSearchInstancesItemRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(aiSearchInstancesItemRef01List), map[string]any{"id": aiSearchInstancesItemRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		aiSearchInstancesItemRef01DataUp0Up := map[string]any{
			"id": aiSearchInstancesItemRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"namespace_id": setup.idmap["namespace_id"],
		}

		aiSearchInstancesItemRef01MarkdefUp0Name := "action"
		aiSearchInstancesItemRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ai_search_instances_item_ref01_%d", setup.now)
		aiSearchInstancesItemRef01DataUp0Up[aiSearchInstancesItemRef01MarkdefUp0Name] = aiSearchInstancesItemRef01MarkdefUp0Value

		aiSearchInstancesItemRef01ResdataUp0Result, err := aiSearchInstancesItemRef01Ent.Update(aiSearchInstancesItemRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		aiSearchInstancesItemRef01ResdataUp0 := core.ToMapAny(entityData(aiSearchInstancesItemRef01ResdataUp0Result))
		if aiSearchInstancesItemRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if aiSearchInstancesItemRef01ResdataUp0["id"] != aiSearchInstancesItemRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if aiSearchInstancesItemRef01ResdataUp0[aiSearchInstancesItemRef01MarkdefUp0Name] != aiSearchInstancesItemRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", aiSearchInstancesItemRef01MarkdefUp0Name, aiSearchInstancesItemRef01ResdataUp0[aiSearchInstancesItemRef01MarkdefUp0Name])
		}

		// LOAD
		aiSearchInstancesItemRef01MatchDt0 := map[string]any{
			"id": aiSearchInstancesItemRef01Data["id"],
		}
		aiSearchInstancesItemRef01DataDt0Loaded, err := aiSearchInstancesItemRef01Ent.Load(aiSearchInstancesItemRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		aiSearchInstancesItemRef01DataDt0LoadResult := core.ToMapAny(entityData(aiSearchInstancesItemRef01DataDt0Loaded))
		if aiSearchInstancesItemRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if aiSearchInstancesItemRef01DataDt0LoadResult["id"] != aiSearchInstancesItemRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		aiSearchInstancesItemRef01MatchRm0 := map[string]any{
			"id": aiSearchInstancesItemRef01Data["id"],
		}
		_, err = aiSearchInstancesItemRef01Ent.Remove(aiSearchInstancesItemRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		aiSearchInstancesItemRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
			"instance_id": setup.idmap["instance01"],
			"item_id": setup.idmap["item01"],
			"namespace_id": setup.idmap["namespace01"],
		}

		aiSearchInstancesItemRef01ListRt0Result, err := aiSearchInstancesItemRef01Ent.List(aiSearchInstancesItemRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiSearchInstancesItemRef01ListRt0, aiSearchInstancesItemRef01ListRt0Ok := aiSearchInstancesItemRef01ListRt0Result.([]any)
		if !aiSearchInstancesItemRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", aiSearchInstancesItemRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(aiSearchInstancesItemRef01ListRt0), map[string]any{"id": aiSearchInstancesItemRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func ai_search_instances_itemBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ai_search_instances_item", "AiSearchInstancesItemTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ai_search_instances_item test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ai_search_instances_item test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ai_search_instances_item01", "ai_search_instances_item02", "ai_search_instances_item03", "account01", "account02", "account03", "namespace01", "namespace02", "namespace03", "instance01", "item01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID": idmap,
		"CLOUDFLARE_AI_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_AI_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_AI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}
	// Add namespace_id alias for update test.
	if idmapResolved["namespace_id"] == nil {
		idmapResolved["namespace_id"] = idmapResolved["namespace01"]
	}

	if env["CLOUDFLARE_AI_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_AI_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareAiSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_AI_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_AI_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
