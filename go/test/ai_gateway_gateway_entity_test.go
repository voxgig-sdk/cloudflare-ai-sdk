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

func TestAiGatewayGatewayEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiGatewayGateway(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiGatewayGatewayEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"ai_gateway_gateway": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AiGatewayGateway(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.AiGatewayGateway(nil).Stream("list", nil, nil) {
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
		setup := ai_gateway_gatewayBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ai_gateway_gateway." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_GATEWAY_GATEWAY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		aiGatewayGatewayRef01Ent := client.AiGatewayGateway(nil)
		aiGatewayGatewayRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ai_gateway_gateway"}), "ai_gateway_gateway_ref01"))
		aiGatewayGatewayRef01Data["account_id"] = setup.idmap["account01"]
		aiGatewayGatewayRef01Data["gateway_id"] = setup.idmap["gateway01"]

		aiGatewayGatewayRef01DataResult, err := aiGatewayGatewayRef01Ent.Create(aiGatewayGatewayRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		aiGatewayGatewayRef01Data = core.ToMapAny(entityData(aiGatewayGatewayRef01DataResult))
		if aiGatewayGatewayRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if aiGatewayGatewayRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		aiGatewayGatewayRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		aiGatewayGatewayRef01ListResult, err := aiGatewayGatewayRef01Ent.List(aiGatewayGatewayRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiGatewayGatewayRef01List, aiGatewayGatewayRef01ListOk := aiGatewayGatewayRef01ListResult.([]any)
		if !aiGatewayGatewayRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", aiGatewayGatewayRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(aiGatewayGatewayRef01List), map[string]any{"id": aiGatewayGatewayRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		aiGatewayGatewayRef01DataUp0Up := map[string]any{
			"id": aiGatewayGatewayRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		aiGatewayGatewayRef01MarkdefUp0Name := "created_at"
		aiGatewayGatewayRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ai_gateway_gateway_ref01_%d", setup.now)
		aiGatewayGatewayRef01DataUp0Up[aiGatewayGatewayRef01MarkdefUp0Name] = aiGatewayGatewayRef01MarkdefUp0Value

		aiGatewayGatewayRef01ResdataUp0Result, err := aiGatewayGatewayRef01Ent.Update(aiGatewayGatewayRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		aiGatewayGatewayRef01ResdataUp0 := core.ToMapAny(entityData(aiGatewayGatewayRef01ResdataUp0Result))
		if aiGatewayGatewayRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if aiGatewayGatewayRef01ResdataUp0["id"] != aiGatewayGatewayRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if aiGatewayGatewayRef01ResdataUp0[aiGatewayGatewayRef01MarkdefUp0Name] != aiGatewayGatewayRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", aiGatewayGatewayRef01MarkdefUp0Name, aiGatewayGatewayRef01ResdataUp0[aiGatewayGatewayRef01MarkdefUp0Name])
		}

		// LOAD
		aiGatewayGatewayRef01MatchDt0 := map[string]any{
			"id": aiGatewayGatewayRef01Data["id"],
		}
		aiGatewayGatewayRef01DataDt0Loaded, err := aiGatewayGatewayRef01Ent.Load(aiGatewayGatewayRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		aiGatewayGatewayRef01DataDt0LoadResult := core.ToMapAny(entityData(aiGatewayGatewayRef01DataDt0Loaded))
		if aiGatewayGatewayRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if aiGatewayGatewayRef01DataDt0LoadResult["id"] != aiGatewayGatewayRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		aiGatewayGatewayRef01MatchRm0 := map[string]any{
			"id": aiGatewayGatewayRef01Data["id"],
		}
		_, err = aiGatewayGatewayRef01Ent.Remove(aiGatewayGatewayRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		aiGatewayGatewayRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		aiGatewayGatewayRef01ListRt0Result, err := aiGatewayGatewayRef01Ent.List(aiGatewayGatewayRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiGatewayGatewayRef01ListRt0, aiGatewayGatewayRef01ListRt0Ok := aiGatewayGatewayRef01ListRt0Result.([]any)
		if !aiGatewayGatewayRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", aiGatewayGatewayRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(aiGatewayGatewayRef01ListRt0), map[string]any{"id": aiGatewayGatewayRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func ai_gateway_gatewayBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ai_gateway_gateway", "AiGatewayGatewayTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ai_gateway_gateway test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ai_gateway_gateway test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ai_gateway_gateway01", "ai_gateway_gateway02", "ai_gateway_gateway03", "account01", "account02", "account03", "gateway01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_AI_TEST_AI_GATEWAY_GATEWAY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_AI_TEST_AI_GATEWAY_GATEWAY_ENTID": idmap,
		"CLOUDFLARE_AI_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_AI_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_AI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_AI_TEST_AI_GATEWAY_GATEWAY_ENTID"])
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
