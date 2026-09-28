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

func TestAiSearchNamespaceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiSearchNamespace(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiSearchNamespaceEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"ai_search_namespace": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AiSearchNamespace(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.AiSearchNamespace(nil).Stream("list", nil, nil) {
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
		setup := ai_search_namespaceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ai_search_namespace." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_SEARCH_NAMESPACE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		aiSearchNamespaceRef01Ent := client.AiSearchNamespace(nil)
		aiSearchNamespaceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ai_search_namespace"}), "ai_search_namespace_ref01"))
		aiSearchNamespaceRef01Data["account_id"] = setup.idmap["account01"]

		aiSearchNamespaceRef01DataResult, err := aiSearchNamespaceRef01Ent.Create(aiSearchNamespaceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		aiSearchNamespaceRef01Data = core.ToMapAny(entityData(aiSearchNamespaceRef01DataResult))
		if aiSearchNamespaceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if aiSearchNamespaceRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		aiSearchNamespaceRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		aiSearchNamespaceRef01ListResult, err := aiSearchNamespaceRef01Ent.List(aiSearchNamespaceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiSearchNamespaceRef01List, aiSearchNamespaceRef01ListOk := aiSearchNamespaceRef01ListResult.([]any)
		if !aiSearchNamespaceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", aiSearchNamespaceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(aiSearchNamespaceRef01List), map[string]any{"id": aiSearchNamespaceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		aiSearchNamespaceRef01DataUp0Up := map[string]any{
			"id": aiSearchNamespaceRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		aiSearchNamespaceRef01MarkdefUp0Name := "description"
		aiSearchNamespaceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ai_search_namespace_ref01_%d", setup.now)
		aiSearchNamespaceRef01DataUp0Up[aiSearchNamespaceRef01MarkdefUp0Name] = aiSearchNamespaceRef01MarkdefUp0Value

		aiSearchNamespaceRef01ResdataUp0Result, err := aiSearchNamespaceRef01Ent.Update(aiSearchNamespaceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		aiSearchNamespaceRef01ResdataUp0 := core.ToMapAny(entityData(aiSearchNamespaceRef01ResdataUp0Result))
		if aiSearchNamespaceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if aiSearchNamespaceRef01ResdataUp0["id"] != aiSearchNamespaceRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if aiSearchNamespaceRef01ResdataUp0[aiSearchNamespaceRef01MarkdefUp0Name] != aiSearchNamespaceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", aiSearchNamespaceRef01MarkdefUp0Name, aiSearchNamespaceRef01ResdataUp0[aiSearchNamespaceRef01MarkdefUp0Name])
		}

		// LOAD
		aiSearchNamespaceRef01MatchDt0 := map[string]any{
			"id": aiSearchNamespaceRef01Data["id"],
		}
		aiSearchNamespaceRef01DataDt0Loaded, err := aiSearchNamespaceRef01Ent.Load(aiSearchNamespaceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		aiSearchNamespaceRef01DataDt0LoadResult := core.ToMapAny(entityData(aiSearchNamespaceRef01DataDt0Loaded))
		if aiSearchNamespaceRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if aiSearchNamespaceRef01DataDt0LoadResult["id"] != aiSearchNamespaceRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		aiSearchNamespaceRef01MatchRm0 := map[string]any{
			"id": aiSearchNamespaceRef01Data["id"],
		}
		_, err = aiSearchNamespaceRef01Ent.Remove(aiSearchNamespaceRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		aiSearchNamespaceRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		aiSearchNamespaceRef01ListRt0Result, err := aiSearchNamespaceRef01Ent.List(aiSearchNamespaceRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiSearchNamespaceRef01ListRt0, aiSearchNamespaceRef01ListRt0Ok := aiSearchNamespaceRef01ListRt0Result.([]any)
		if !aiSearchNamespaceRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", aiSearchNamespaceRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(aiSearchNamespaceRef01ListRt0), map[string]any{"id": aiSearchNamespaceRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func ai_search_namespaceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ai_search_namespace", "AiSearchNamespaceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ai_search_namespace test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ai_search_namespace test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ai_search_namespace01", "ai_search_namespace02", "ai_search_namespace03", "account01", "account02", "account03", "namespace01", "namespace02", "namespace03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_AI_TEST_AI_SEARCH_NAMESPACE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_AI_TEST_AI_SEARCH_NAMESPACE_ENTID": idmap,
		"CLOUDFLARE_AI_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_AI_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_AI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_AI_TEST_AI_SEARCH_NAMESPACE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
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
