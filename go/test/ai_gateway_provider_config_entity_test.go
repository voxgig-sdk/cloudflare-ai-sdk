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

func TestAiGatewayProviderConfigEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiGatewayProviderConfig(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiGatewayProviderConfigEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"ai_gateway_provider_config": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AiGatewayProviderConfig(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.AiGatewayProviderConfig(nil).Stream("list", nil, nil) {
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
		setup := ai_gateway_provider_configBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ai_gateway_provider_config." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_GATEWAY_PROVIDER_CONFIG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		aiGatewayProviderConfigRef01Ent := client.AiGatewayProviderConfig(nil)
		aiGatewayProviderConfigRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ai_gateway_provider_config"}), "ai_gateway_provider_config_ref01"))
		aiGatewayProviderConfigRef01Data["account_id"] = setup.idmap["account01"]
		aiGatewayProviderConfigRef01Data["gateway_id"] = setup.idmap["gateway01"]

		aiGatewayProviderConfigRef01DataResult, err := aiGatewayProviderConfigRef01Ent.Create(aiGatewayProviderConfigRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		aiGatewayProviderConfigRef01Data = core.ToMapAny(entityData(aiGatewayProviderConfigRef01DataResult))
		if aiGatewayProviderConfigRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if aiGatewayProviderConfigRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		aiGatewayProviderConfigRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
			"gateway_id": setup.idmap["gateway01"],
		}

		aiGatewayProviderConfigRef01ListResult, err := aiGatewayProviderConfigRef01Ent.List(aiGatewayProviderConfigRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiGatewayProviderConfigRef01List, aiGatewayProviderConfigRef01ListOk := aiGatewayProviderConfigRef01ListResult.([]any)
		if !aiGatewayProviderConfigRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", aiGatewayProviderConfigRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(aiGatewayProviderConfigRef01List), map[string]any{"id": aiGatewayProviderConfigRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		aiGatewayProviderConfigRef01DataUp0Up := map[string]any{
			"id": aiGatewayProviderConfigRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"gateway_id": setup.idmap["gateway_id"],
		}

		aiGatewayProviderConfigRef01MarkdefUp0Name := "alias"
		aiGatewayProviderConfigRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ai_gateway_provider_config_ref01_%d", setup.now)
		aiGatewayProviderConfigRef01DataUp0Up[aiGatewayProviderConfigRef01MarkdefUp0Name] = aiGatewayProviderConfigRef01MarkdefUp0Value

		aiGatewayProviderConfigRef01ResdataUp0Result, err := aiGatewayProviderConfigRef01Ent.Update(aiGatewayProviderConfigRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		aiGatewayProviderConfigRef01ResdataUp0 := core.ToMapAny(entityData(aiGatewayProviderConfigRef01ResdataUp0Result))
		if aiGatewayProviderConfigRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if aiGatewayProviderConfigRef01ResdataUp0["id"] != aiGatewayProviderConfigRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if aiGatewayProviderConfigRef01ResdataUp0[aiGatewayProviderConfigRef01MarkdefUp0Name] != aiGatewayProviderConfigRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", aiGatewayProviderConfigRef01MarkdefUp0Name, aiGatewayProviderConfigRef01ResdataUp0[aiGatewayProviderConfigRef01MarkdefUp0Name])
		}

		// REMOVE
		aiGatewayProviderConfigRef01MatchRm0 := map[string]any{
			"id": aiGatewayProviderConfigRef01Data["id"],
		}
		_, err = aiGatewayProviderConfigRef01Ent.Remove(aiGatewayProviderConfigRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		aiGatewayProviderConfigRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
			"gateway_id": setup.idmap["gateway01"],
		}

		aiGatewayProviderConfigRef01ListRt0Result, err := aiGatewayProviderConfigRef01Ent.List(aiGatewayProviderConfigRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		aiGatewayProviderConfigRef01ListRt0, aiGatewayProviderConfigRef01ListRt0Ok := aiGatewayProviderConfigRef01ListRt0Result.([]any)
		if !aiGatewayProviderConfigRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", aiGatewayProviderConfigRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(aiGatewayProviderConfigRef01ListRt0), map[string]any{"id": aiGatewayProviderConfigRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func ai_gateway_provider_configBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ai_gateway_provider_config", "AiGatewayProviderConfigTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ai_gateway_provider_config test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ai_gateway_provider_config test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ai_gateway_provider_config01", "ai_gateway_provider_config02", "ai_gateway_provider_config03", "account01", "account02", "account03", "gateway01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_AI_TEST_AI_GATEWAY_PROVIDER_CONFIG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_AI_TEST_AI_GATEWAY_PROVIDER_CONFIG_ENTID": idmap,
		"CLOUDFLARE_AI_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_AI_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_AI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_AI_TEST_AI_GATEWAY_PROVIDER_CONFIG_ENTID"])
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
