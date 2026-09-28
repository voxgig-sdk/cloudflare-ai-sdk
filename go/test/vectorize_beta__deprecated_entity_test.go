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

func TestVectorizeBetaDeprecatedEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.VectorizeBetaDeprecated(nil)
		if ent == nil {
			t.Fatal("expected non-nil VectorizeBetaDeprecatedEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"vectorize_beta__deprecated": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.VectorizeBetaDeprecated(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.VectorizeBetaDeprecated(nil).Stream("list", nil, nil) {
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
		setup := vectorize_beta__deprecatedBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "vectorize_beta__deprecated." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_VECTORIZE_BETA_DEPRECATED_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		vectorizeBeta_DeprecatedRef01Ent := client.VectorizeBetaDeprecated(nil)
		vectorizeBeta_DeprecatedRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "vectorize_beta__deprecated"}), "vectorize_beta__deprecated_ref01"))
		vectorizeBeta_DeprecatedRef01Data["account_id"] = setup.idmap["account01"]

		vectorizeBeta_DeprecatedRef01DataResult, err := vectorizeBeta_DeprecatedRef01Ent.Create(vectorizeBeta_DeprecatedRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		vectorizeBeta_DeprecatedRef01Data = core.ToMapAny(entityData(vectorizeBeta_DeprecatedRef01DataResult))
		if vectorizeBeta_DeprecatedRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		vectorizeBeta_DeprecatedRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		vectorizeBeta_DeprecatedRef01ListResult, err := vectorizeBeta_DeprecatedRef01Ent.List(vectorizeBeta_DeprecatedRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, vectorizeBeta_DeprecatedRef01ListOk := vectorizeBeta_DeprecatedRef01ListResult.([]any)
		if !vectorizeBeta_DeprecatedRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", vectorizeBeta_DeprecatedRef01ListResult)
		}

		// UPDATE
		vectorizeBeta_DeprecatedRef01DataUp0Up := map[string]any{
			"account_id": setup.idmap["account_id"],
		}

		vectorizeBeta_DeprecatedRef01MarkdefUp0Name := "description"
		vectorizeBeta_DeprecatedRef01MarkdefUp0Value := fmt.Sprintf("Mark01-vectorize_beta__deprecated_ref01_%d", setup.now)
		vectorizeBeta_DeprecatedRef01DataUp0Up[vectorizeBeta_DeprecatedRef01MarkdefUp0Name] = vectorizeBeta_DeprecatedRef01MarkdefUp0Value

		vectorizeBeta_DeprecatedRef01ResdataUp0Result, err := vectorizeBeta_DeprecatedRef01Ent.Update(vectorizeBeta_DeprecatedRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		vectorizeBeta_DeprecatedRef01ResdataUp0 := core.ToMapAny(entityData(vectorizeBeta_DeprecatedRef01ResdataUp0Result))
		if vectorizeBeta_DeprecatedRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if vectorizeBeta_DeprecatedRef01ResdataUp0[vectorizeBeta_DeprecatedRef01MarkdefUp0Name] != vectorizeBeta_DeprecatedRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", vectorizeBeta_DeprecatedRef01MarkdefUp0Name, vectorizeBeta_DeprecatedRef01ResdataUp0[vectorizeBeta_DeprecatedRef01MarkdefUp0Name])
		}

		// LOAD
		vectorizeBeta_DeprecatedRef01MatchDt0 := map[string]any{}
		vectorizeBeta_DeprecatedRef01DataDt0Loaded, err := vectorizeBeta_DeprecatedRef01Ent.Load(vectorizeBeta_DeprecatedRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if vectorizeBeta_DeprecatedRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}


		// LIST
		vectorizeBeta_DeprecatedRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		vectorizeBeta_DeprecatedRef01ListRt0Result, err := vectorizeBeta_DeprecatedRef01Ent.List(vectorizeBeta_DeprecatedRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, vectorizeBeta_DeprecatedRef01ListRt0Ok := vectorizeBeta_DeprecatedRef01ListRt0Result.([]any)
		if !vectorizeBeta_DeprecatedRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", vectorizeBeta_DeprecatedRef01ListRt0Result)
		}

	})
}

func vectorize_beta__deprecatedBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "vectorize_beta__deprecated", "VectorizeBetaDeprecatedTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read vectorize_beta__deprecated test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse vectorize_beta__deprecated test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"vectorize_beta__deprecated01", "vectorize_beta__deprecated02", "vectorize_beta__deprecated03", "account01", "account02", "account03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_AI_TEST_VECTORIZE_BETA_DEPRECATED_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_AI_TEST_VECTORIZE_BETA_DEPRECATED_ENTID": idmap,
		"CLOUDFLARE_AI_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_AI_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_AI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_AI_TEST_VECTORIZE_BETA_DEPRECATED_ENTID"])
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
