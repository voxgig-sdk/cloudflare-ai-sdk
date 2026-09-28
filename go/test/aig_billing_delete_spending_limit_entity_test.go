package sdktest

import (
	"encoding/json"
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

func TestAigBillingDeleteSpendingLimitEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AigBillingDeleteSpendingLimit(nil)
		if ent == nil {
			t.Fatal("expected non-nil AigBillingDeleteSpendingLimitEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := aig_billing_delete_spending_limitBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "aig_billing_delete_spending_limit." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_AI_TEST_AIG_BILLING_DELETE_SPENDING_LIMIT_ENTID JSON to run live")
			return
		}
		// Bootstrap entity data from existing test data (no create step in flow).
		aigBillingDeleteSpendingLimitRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.aig_billing_delete_spending_limit")))
		var aigBillingDeleteSpendingLimitRef01Data map[string]any
		if len(aigBillingDeleteSpendingLimitRef01DataRaw) > 0 {
			aigBillingDeleteSpendingLimitRef01Data = core.ToMapAny(aigBillingDeleteSpendingLimitRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = aigBillingDeleteSpendingLimitRef01Data

	})
}

func aig_billing_delete_spending_limitBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "aig_billing_delete_spending_limit", "AigBillingDeleteSpendingLimitTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read aig_billing_delete_spending_limit test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse aig_billing_delete_spending_limit test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"aig_billing_delete_spending_limit01", "aig_billing_delete_spending_limit02", "aig_billing_delete_spending_limit03", "account01", "account02", "account03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_AI_TEST_AIG_BILLING_DELETE_SPENDING_LIMIT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_AI_TEST_AIG_BILLING_DELETE_SPENDING_LIMIT_ENTID": idmap,
		"CLOUDFLARE_AI_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_AI_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_AI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_AI_TEST_AIG_BILLING_DELETE_SPENDING_LIMIT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
