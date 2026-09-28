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

func TestAiGatewayLogEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiGatewayLog(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiGatewayLogEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"ai_gateway_log": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AiGatewayLog(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.AiGatewayLog(nil).Stream("list", nil, nil) {
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
		setup := ai_gateway_logBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ai_gateway_log." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_GATEWAY_LOG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		aiGatewayLogRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.ai_gateway_log")))
		var aiGatewayLogRef01Data map[string]any
		if len(aiGatewayLogRef01DataRaw) > 0 {
			aiGatewayLogRef01Data = core.ToMapAny(aiGatewayLogRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = aiGatewayLogRef01Data

		// LIST
		aiGatewayLogRef01Ent := client.AiGatewayLog(nil)
		aiGatewayLogRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
			"gateway_id": setup.idmap["gateway01"],
		}

		aiGatewayLogRef01ListResult, err := aiGatewayLogRef01Ent.List(aiGatewayLogRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, aiGatewayLogRef01ListOk := aiGatewayLogRef01ListResult.([]any)
		if !aiGatewayLogRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", aiGatewayLogRef01ListResult)
		}

		// UPDATE
		aiGatewayLogRef01DataUp0Up := map[string]any{
			"id": aiGatewayLogRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"gateway_id": setup.idmap["gateway_id"],
		}

		aiGatewayLogRef01MarkdefUp0Name := "created_at"
		aiGatewayLogRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ai_gateway_log_ref01_%d", setup.now)
		aiGatewayLogRef01DataUp0Up[aiGatewayLogRef01MarkdefUp0Name] = aiGatewayLogRef01MarkdefUp0Value

		aiGatewayLogRef01ResdataUp0Result, err := aiGatewayLogRef01Ent.Update(aiGatewayLogRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		aiGatewayLogRef01ResdataUp0 := core.ToMapAny(entityData(aiGatewayLogRef01ResdataUp0Result))
		if aiGatewayLogRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if aiGatewayLogRef01ResdataUp0["id"] != aiGatewayLogRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if aiGatewayLogRef01ResdataUp0[aiGatewayLogRef01MarkdefUp0Name] != aiGatewayLogRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", aiGatewayLogRef01MarkdefUp0Name, aiGatewayLogRef01ResdataUp0[aiGatewayLogRef01MarkdefUp0Name])
		}

		// LOAD
		aiGatewayLogRef01MatchDt0 := map[string]any{
			"id": aiGatewayLogRef01Data["id"],
		}
		aiGatewayLogRef01DataDt0Loaded, err := aiGatewayLogRef01Ent.Load(aiGatewayLogRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		aiGatewayLogRef01DataDt0LoadResult := core.ToMapAny(entityData(aiGatewayLogRef01DataDt0Loaded))
		if aiGatewayLogRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if aiGatewayLogRef01DataDt0LoadResult["id"] != aiGatewayLogRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func ai_gateway_logBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ai_gateway_log", "AiGatewayLogTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ai_gateway_log test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ai_gateway_log test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ai_gateway_log01", "ai_gateway_log02", "ai_gateway_log03", "account01", "account02", "account03", "gateway01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_AI_TEST_AI_GATEWAY_LOG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_AI_TEST_AI_GATEWAY_LOG_ENTID": idmap,
		"CLOUDFLARE_AI_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_AI_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_AI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_AI_TEST_AI_GATEWAY_LOG_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}
	// Add gateway_id alias for update test.
	if idmapResolved["gateway_id"] == nil {
		idmapResolved["gateway_id"] = idmapResolved["gateway01"]
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
