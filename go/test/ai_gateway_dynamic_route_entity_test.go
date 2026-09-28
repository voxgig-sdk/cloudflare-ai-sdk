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

func TestAiGatewayDynamicRouteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AiGatewayDynamicRoute(nil)
		if ent == nil {
			t.Fatal("expected non-nil AiGatewayDynamicRouteEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := ai_gateway_dynamic_routeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ai_gateway_dynamic_route." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		aiGatewayDynamicRouteRef01Ent := client.AiGatewayDynamicRoute(nil)
		aiGatewayDynamicRouteRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ai_gateway_dynamic_route"}), "ai_gateway_dynamic_route_ref01"))
		aiGatewayDynamicRouteRef01Data["account_id"] = setup.idmap["account01"]
		aiGatewayDynamicRouteRef01Data["gateway_id"] = setup.idmap["gateway01"]
		aiGatewayDynamicRouteRef01Data["route_id"] = setup.idmap["route01"]

		aiGatewayDynamicRouteRef01DataResult, err := aiGatewayDynamicRouteRef01Ent.Create(aiGatewayDynamicRouteRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		aiGatewayDynamicRouteRef01Data = core.ToMapAny(entityData(aiGatewayDynamicRouteRef01DataResult))
		if aiGatewayDynamicRouteRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if aiGatewayDynamicRouteRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		aiGatewayDynamicRouteRef01DataUp0Up := map[string]any{
			"id": aiGatewayDynamicRouteRef01Data["id"],
			"account_id": setup.idmap["account_id"],
			"gateway_id": setup.idmap["gateway_id"],
		}

		aiGatewayDynamicRouteRef01MarkdefUp0Name := "account_tag"
		aiGatewayDynamicRouteRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ai_gateway_dynamic_route_ref01_%d", setup.now)
		aiGatewayDynamicRouteRef01DataUp0Up[aiGatewayDynamicRouteRef01MarkdefUp0Name] = aiGatewayDynamicRouteRef01MarkdefUp0Value

		aiGatewayDynamicRouteRef01ResdataUp0Result, err := aiGatewayDynamicRouteRef01Ent.Update(aiGatewayDynamicRouteRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		aiGatewayDynamicRouteRef01ResdataUp0 := core.ToMapAny(entityData(aiGatewayDynamicRouteRef01ResdataUp0Result))
		if aiGatewayDynamicRouteRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if aiGatewayDynamicRouteRef01ResdataUp0["id"] != aiGatewayDynamicRouteRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if aiGatewayDynamicRouteRef01ResdataUp0[aiGatewayDynamicRouteRef01MarkdefUp0Name] != aiGatewayDynamicRouteRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", aiGatewayDynamicRouteRef01MarkdefUp0Name, aiGatewayDynamicRouteRef01ResdataUp0[aiGatewayDynamicRouteRef01MarkdefUp0Name])
		}

		// LOAD
		aiGatewayDynamicRouteRef01MatchDt0 := map[string]any{
			"id": aiGatewayDynamicRouteRef01Data["id"],
		}
		aiGatewayDynamicRouteRef01DataDt0Loaded, err := aiGatewayDynamicRouteRef01Ent.Load(aiGatewayDynamicRouteRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		aiGatewayDynamicRouteRef01DataDt0LoadResult := core.ToMapAny(entityData(aiGatewayDynamicRouteRef01DataDt0Loaded))
		if aiGatewayDynamicRouteRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if aiGatewayDynamicRouteRef01DataDt0LoadResult["id"] != aiGatewayDynamicRouteRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		aiGatewayDynamicRouteRef01MatchRm0 := map[string]any{
			"id": aiGatewayDynamicRouteRef01Data["id"],
		}
		_, err = aiGatewayDynamicRouteRef01Ent.Remove(aiGatewayDynamicRouteRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func ai_gateway_dynamic_routeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ai_gateway_dynamic_route", "AiGatewayDynamicRouteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ai_gateway_dynamic_route test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ai_gateway_dynamic_route test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ai_gateway_dynamic_route01", "ai_gateway_dynamic_route02", "ai_gateway_dynamic_route03", "account01", "account02", "account03", "gateway01", "route01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID": idmap,
		"CLOUDFLARE_AI_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_AI_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_AI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID"])
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
