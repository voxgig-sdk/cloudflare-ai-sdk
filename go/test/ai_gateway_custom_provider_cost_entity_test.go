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

func TestAiGatewayCustomProviderCostEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiGatewayCustomProviderCost(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiGatewayCustomProviderCostEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"ai_gateway_custom_provider_cost": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AiGatewayCustomProviderCost(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.AiGatewayCustomProviderCost(nil).Stream("list", nil, nil) {
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
		setup := ai_gateway_custom_provider_costBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ai_gateway_custom_provider_cost." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_PROVIDER_COST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		aiGatewayCustomProviderCostRef01Ent := client.AiGatewayCustomProviderCost(nil)
		aiGatewayCustomProviderCostRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ai_gateway_custom_provider_cost"}), "ai_gateway_custom_provider_cost_ref01"))
		aiGatewayCustomProviderCostRef01Data["account_id"] = setup.idmap["account01"]

		aiGatewayCustomProviderCostRef01DataResult, err := aiGatewayCustomProviderCostRef01Ent.Create(aiGatewayCustomProviderCostRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		aiGatewayCustomProviderCostRef01Data = core.ToMapAny(entityData(aiGatewayCustomProviderCostRef01DataResult))
		if aiGatewayCustomProviderCostRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if aiGatewayCustomProviderCostRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		aiGatewayCustomProviderCostRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		aiGatewayCustomProviderCostRef01ListResult, err := aiGatewayCustomProviderCostRef01Ent.List(aiGatewayCustomProviderCostRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiGatewayCustomProviderCostRef01List, aiGatewayCustomProviderCostRef01ListOk := aiGatewayCustomProviderCostRef01ListResult.([]any)
		if !aiGatewayCustomProviderCostRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", aiGatewayCustomProviderCostRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(aiGatewayCustomProviderCostRef01List), map[string]any{"id": aiGatewayCustomProviderCostRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		aiGatewayCustomProviderCostRef01DataUp0Up := map[string]any{
			"id": aiGatewayCustomProviderCostRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		aiGatewayCustomProviderCostRef01MarkdefUp0Name := "account_provider_id"
		aiGatewayCustomProviderCostRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ai_gateway_custom_provider_cost_ref01_%d", setup.now)
		aiGatewayCustomProviderCostRef01DataUp0Up[aiGatewayCustomProviderCostRef01MarkdefUp0Name] = aiGatewayCustomProviderCostRef01MarkdefUp0Value

		aiGatewayCustomProviderCostRef01ResdataUp0Result, err := aiGatewayCustomProviderCostRef01Ent.Update(aiGatewayCustomProviderCostRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		aiGatewayCustomProviderCostRef01ResdataUp0 := core.ToMapAny(entityData(aiGatewayCustomProviderCostRef01ResdataUp0Result))
		if aiGatewayCustomProviderCostRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if aiGatewayCustomProviderCostRef01ResdataUp0["id"] != aiGatewayCustomProviderCostRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if aiGatewayCustomProviderCostRef01ResdataUp0[aiGatewayCustomProviderCostRef01MarkdefUp0Name] != aiGatewayCustomProviderCostRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", aiGatewayCustomProviderCostRef01MarkdefUp0Name, aiGatewayCustomProviderCostRef01ResdataUp0[aiGatewayCustomProviderCostRef01MarkdefUp0Name])
		}

		// LOAD
		aiGatewayCustomProviderCostRef01MatchDt0 := map[string]any{
			"id": aiGatewayCustomProviderCostRef01Data["id"],
		}
		aiGatewayCustomProviderCostRef01DataDt0Loaded, err := aiGatewayCustomProviderCostRef01Ent.Load(aiGatewayCustomProviderCostRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		aiGatewayCustomProviderCostRef01DataDt0LoadResult := core.ToMapAny(entityData(aiGatewayCustomProviderCostRef01DataDt0Loaded))
		if aiGatewayCustomProviderCostRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if aiGatewayCustomProviderCostRef01DataDt0LoadResult["id"] != aiGatewayCustomProviderCostRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		aiGatewayCustomProviderCostRef01MatchRm0 := map[string]any{
			"id": aiGatewayCustomProviderCostRef01Data["id"],
		}
		_, err = aiGatewayCustomProviderCostRef01Ent.Remove(aiGatewayCustomProviderCostRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		aiGatewayCustomProviderCostRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		aiGatewayCustomProviderCostRef01ListRt0Result, err := aiGatewayCustomProviderCostRef01Ent.List(aiGatewayCustomProviderCostRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiGatewayCustomProviderCostRef01ListRt0, aiGatewayCustomProviderCostRef01ListRt0Ok := aiGatewayCustomProviderCostRef01ListRt0Result.([]any)
		if !aiGatewayCustomProviderCostRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", aiGatewayCustomProviderCostRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(aiGatewayCustomProviderCostRef01ListRt0), map[string]any{"id": aiGatewayCustomProviderCostRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func ai_gateway_custom_provider_costBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ai_gateway_custom_provider_cost", "AiGatewayCustomProviderCostTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ai_gateway_custom_provider_cost test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ai_gateway_custom_provider_cost test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ai_gateway_custom_provider_cost01", "ai_gateway_custom_provider_cost02", "ai_gateway_custom_provider_cost03", "account01", "account02", "account03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_PROVIDER_COST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_PROVIDER_COST_ENTID": idmap,
		"CLOUDFLARE_AI_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_AI_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_AI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_PROVIDER_COST_ENTID"])
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
