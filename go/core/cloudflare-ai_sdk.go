package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-ai-sdk/go/utility/struct"
)

type CloudflareAiSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareAiSDK(options map[string]any) *CloudflareAiSDK {
	sdk := &CloudflareAiSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareAiSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareAiSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareAiSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareAiSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareAiSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareAiSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareAiSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareAiSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareAiSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareAiSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareAiSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Account returns a Account entity bound to this client.
// Idiomatic usage: client.Account(nil).List(nil, nil) or
// client.Account(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) Account(data map[string]any) CloudflareAiEntity {
	return NewAccountEntityFunc(sdk, data)
}


// AiGateway returns a AiGateway entity bound to this client.
// Idiomatic usage: client.AiGateway(nil).List(nil, nil) or
// client.AiGateway(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGateway(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayEntityFunc(sdk, data)
}


// AiGatewayCustomDomain returns a AiGatewayCustomDomain entity bound to this client.
// Idiomatic usage: client.AiGatewayCustomDomain(nil).List(nil, nil) or
// client.AiGatewayCustomDomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGatewayCustomDomain(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayCustomDomainEntityFunc(sdk, data)
}


// AiGatewayCustomProvider returns a AiGatewayCustomProvider entity bound to this client.
// Idiomatic usage: client.AiGatewayCustomProvider(nil).List(nil, nil) or
// client.AiGatewayCustomProvider(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGatewayCustomProvider(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayCustomProviderEntityFunc(sdk, data)
}


// AiGatewayCustomProviderCost returns a AiGatewayCustomProviderCost entity bound to this client.
// Idiomatic usage: client.AiGatewayCustomProviderCost(nil).List(nil, nil) or
// client.AiGatewayCustomProviderCost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGatewayCustomProviderCost(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayCustomProviderCostEntityFunc(sdk, data)
}


// AiGatewayDataset returns a AiGatewayDataset entity bound to this client.
// Idiomatic usage: client.AiGatewayDataset(nil).List(nil, nil) or
// client.AiGatewayDataset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGatewayDataset(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayDatasetEntityFunc(sdk, data)
}


// AiGatewayDynamicRoute returns a AiGatewayDynamicRoute entity bound to this client.
// Idiomatic usage: client.AiGatewayDynamicRoute(nil).List(nil, nil) or
// client.AiGatewayDynamicRoute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGatewayDynamicRoute(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayDynamicRouteEntityFunc(sdk, data)
}


// AiGatewayEvaluation returns a AiGatewayEvaluation entity bound to this client.
// Idiomatic usage: client.AiGatewayEvaluation(nil).List(nil, nil) or
// client.AiGatewayEvaluation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGatewayEvaluation(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayEvaluationEntityFunc(sdk, data)
}


// AiGatewayGateway returns a AiGatewayGateway entity bound to this client.
// Idiomatic usage: client.AiGatewayGateway(nil).List(nil, nil) or
// client.AiGatewayGateway(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGatewayGateway(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayGatewayEntityFunc(sdk, data)
}


// AiGatewayLog returns a AiGatewayLog entity bound to this client.
// Idiomatic usage: client.AiGatewayLog(nil).List(nil, nil) or
// client.AiGatewayLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGatewayLog(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayLogEntityFunc(sdk, data)
}


// AiGatewayProviderConfig returns a AiGatewayProviderConfig entity bound to this client.
// Idiomatic usage: client.AiGatewayProviderConfig(nil).List(nil, nil) or
// client.AiGatewayProviderConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiGatewayProviderConfig(data map[string]any) CloudflareAiEntity {
	return NewAiGatewayProviderConfigEntityFunc(sdk, data)
}


// AiSearchAccountSearch returns a AiSearchAccountSearch entity bound to this client.
// Idiomatic usage: client.AiSearchAccountSearch(nil).List(nil, nil) or
// client.AiSearchAccountSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiSearchAccountSearch(data map[string]any) CloudflareAiEntity {
	return NewAiSearchAccountSearchEntityFunc(sdk, data)
}


// AiSearchInstance returns a AiSearchInstance entity bound to this client.
// Idiomatic usage: client.AiSearchInstance(nil).List(nil, nil) or
// client.AiSearchInstance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiSearchInstance(data map[string]any) CloudflareAiEntity {
	return NewAiSearchInstanceEntityFunc(sdk, data)
}


// AiSearchInstancesItem returns a AiSearchInstancesItem entity bound to this client.
// Idiomatic usage: client.AiSearchInstancesItem(nil).List(nil, nil) or
// client.AiSearchInstancesItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiSearchInstancesItem(data map[string]any) CloudflareAiEntity {
	return NewAiSearchInstancesItemEntityFunc(sdk, data)
}


// AiSearchInstancesJob returns a AiSearchInstancesJob entity bound to this client.
// Idiomatic usage: client.AiSearchInstancesJob(nil).List(nil, nil) or
// client.AiSearchInstancesJob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiSearchInstancesJob(data map[string]any) CloudflareAiEntity {
	return NewAiSearchInstancesJobEntityFunc(sdk, data)
}


// AiSearchNamespace returns a AiSearchNamespace entity bound to this client.
// Idiomatic usage: client.AiSearchNamespace(nil).List(nil, nil) or
// client.AiSearchNamespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiSearchNamespace(data map[string]any) CloudflareAiEntity {
	return NewAiSearchNamespaceEntityFunc(sdk, data)
}


// AiSearchToken returns a AiSearchToken entity bound to this client.
// Idiomatic usage: client.AiSearchToken(nil).List(nil, nil) or
// client.AiSearchToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AiSearchToken(data map[string]any) CloudflareAiEntity {
	return NewAiSearchTokenEntityFunc(sdk, data)
}


// AigBillingCreateTopup returns a AigBillingCreateTopup entity bound to this client.
// Idiomatic usage: client.AigBillingCreateTopup(nil).List(nil, nil) or
// client.AigBillingCreateTopup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingCreateTopup(data map[string]any) CloudflareAiEntity {
	return NewAigBillingCreateTopupEntityFunc(sdk, data)
}


// AigBillingDeleteSpendingLimit returns a AigBillingDeleteSpendingLimit entity bound to this client.
// Idiomatic usage: client.AigBillingDeleteSpendingLimit(nil).List(nil, nil) or
// client.AigBillingDeleteSpendingLimit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingDeleteSpendingLimit(data map[string]any) CloudflareAiEntity {
	return NewAigBillingDeleteSpendingLimitEntityFunc(sdk, data)
}


// AigBillingDeleteTopupConfig returns a AigBillingDeleteTopupConfig entity bound to this client.
// Idiomatic usage: client.AigBillingDeleteTopupConfig(nil).List(nil, nil) or
// client.AigBillingDeleteTopupConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingDeleteTopupConfig(data map[string]any) CloudflareAiEntity {
	return NewAigBillingDeleteTopupConfigEntityFunc(sdk, data)
}


// AigBillingGetCreditBalance returns a AigBillingGetCreditBalance entity bound to this client.
// Idiomatic usage: client.AigBillingGetCreditBalance(nil).List(nil, nil) or
// client.AigBillingGetCreditBalance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingGetCreditBalance(data map[string]any) CloudflareAiEntity {
	return NewAigBillingGetCreditBalanceEntityFunc(sdk, data)
}


// AigBillingGetInvoiceHistory returns a AigBillingGetInvoiceHistory entity bound to this client.
// Idiomatic usage: client.AigBillingGetInvoiceHistory(nil).List(nil, nil) or
// client.AigBillingGetInvoiceHistory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingGetInvoiceHistory(data map[string]any) CloudflareAiEntity {
	return NewAigBillingGetInvoiceHistoryEntityFunc(sdk, data)
}


// AigBillingGetInvoicePreview returns a AigBillingGetInvoicePreview entity bound to this client.
// Idiomatic usage: client.AigBillingGetInvoicePreview(nil).List(nil, nil) or
// client.AigBillingGetInvoicePreview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingGetInvoicePreview(data map[string]any) CloudflareAiEntity {
	return NewAigBillingGetInvoicePreviewEntityFunc(sdk, data)
}


// AigBillingGetSpendingLimit returns a AigBillingGetSpendingLimit entity bound to this client.
// Idiomatic usage: client.AigBillingGetSpendingLimit(nil).List(nil, nil) or
// client.AigBillingGetSpendingLimit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingGetSpendingLimit(data map[string]any) CloudflareAiEntity {
	return NewAigBillingGetSpendingLimitEntityFunc(sdk, data)
}


// AigBillingGetTopupConfig returns a AigBillingGetTopupConfig entity bound to this client.
// Idiomatic usage: client.AigBillingGetTopupConfig(nil).List(nil, nil) or
// client.AigBillingGetTopupConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingGetTopupConfig(data map[string]any) CloudflareAiEntity {
	return NewAigBillingGetTopupConfigEntityFunc(sdk, data)
}


// AigBillingGetTopupEligibility returns a AigBillingGetTopupEligibility entity bound to this client.
// Idiomatic usage: client.AigBillingGetTopupEligibility(nil).List(nil, nil) or
// client.AigBillingGetTopupEligibility(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingGetTopupEligibility(data map[string]any) CloudflareAiEntity {
	return NewAigBillingGetTopupEligibilityEntityFunc(sdk, data)
}


// AigBillingGetTopupLimit returns a AigBillingGetTopupLimit entity bound to this client.
// Idiomatic usage: client.AigBillingGetTopupLimit(nil).List(nil, nil) or
// client.AigBillingGetTopupLimit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingGetTopupLimit(data map[string]any) CloudflareAiEntity {
	return NewAigBillingGetTopupLimitEntityFunc(sdk, data)
}


// AigBillingGetUsageHistory returns a AigBillingGetUsageHistory entity bound to this client.
// Idiomatic usage: client.AigBillingGetUsageHistory(nil).List(nil, nil) or
// client.AigBillingGetUsageHistory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingGetUsageHistory(data map[string]any) CloudflareAiEntity {
	return NewAigBillingGetUsageHistoryEntityFunc(sdk, data)
}


// AigBillingSetSpendingLimit returns a AigBillingSetSpendingLimit entity bound to this client.
// Idiomatic usage: client.AigBillingSetSpendingLimit(nil).List(nil, nil) or
// client.AigBillingSetSpendingLimit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingSetSpendingLimit(data map[string]any) CloudflareAiEntity {
	return NewAigBillingSetSpendingLimitEntityFunc(sdk, data)
}


// AigBillingSetTopupConfig returns a AigBillingSetTopupConfig entity bound to this client.
// Idiomatic usage: client.AigBillingSetTopupConfig(nil).List(nil, nil) or
// client.AigBillingSetTopupConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingSetTopupConfig(data map[string]any) CloudflareAiEntity {
	return NewAigBillingSetTopupConfigEntityFunc(sdk, data)
}


// AigBillingTopupStatus returns a AigBillingTopupStatus entity bound to this client.
// Idiomatic usage: client.AigBillingTopupStatus(nil).List(nil, nil) or
// client.AigBillingTopupStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AigBillingTopupStatus(data map[string]any) CloudflareAiEntity {
	return NewAigBillingTopupStatusEntityFunc(sdk, data)
}


// AutoRagJob returns a AutoRagJob entity bound to this client.
// Idiomatic usage: client.AutoRagJob(nil).List(nil, nil) or
// client.AutoRagJob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AutoRagJob(data map[string]any) CloudflareAiEntity {
	return NewAutoRagJobEntityFunc(sdk, data)
}


// AutoRagRag returns a AutoRagRag entity bound to this client.
// Idiomatic usage: client.AutoRagRag(nil).List(nil, nil) or
// client.AutoRagRag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AutoRagRag(data map[string]any) CloudflareAiEntity {
	return NewAutoRagRagEntityFunc(sdk, data)
}


// AutoRagRagSearch returns a AutoRagRagSearch entity bound to this client.
// Idiomatic usage: client.AutoRagRagSearch(nil).List(nil, nil) or
// client.AutoRagRagSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) AutoRagRagSearch(data map[string]any) CloudflareAiEntity {
	return NewAutoRagRagSearchEntityFunc(sdk, data)
}


// FinetuneAsset returns a FinetuneAsset entity bound to this client.
// Idiomatic usage: client.FinetuneAsset(nil).List(nil, nil) or
// client.FinetuneAsset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) FinetuneAsset(data map[string]any) CloudflareAiEntity {
	return NewFinetuneAssetEntityFunc(sdk, data)
}


// Memory returns a Memory entity bound to this client.
// Idiomatic usage: client.Memory(nil).List(nil, nil) or
// client.Memory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) Memory(data map[string]any) CloudflareAiEntity {
	return NewMemoryEntityFunc(sdk, data)
}


// Namespace returns a Namespace entity bound to this client.
// Idiomatic usage: client.Namespace(nil).List(nil, nil) or
// client.Namespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) Namespace(data map[string]any) CloudflareAiEntity {
	return NewNamespaceEntityFunc(sdk, data)
}


// Vectorize returns a Vectorize entity bound to this client.
// Idiomatic usage: client.Vectorize(nil).List(nil, nil) or
// client.Vectorize(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) Vectorize(data map[string]any) CloudflareAiEntity {
	return NewVectorizeEntityFunc(sdk, data)
}


// VectorizeBetaDeprecated returns a VectorizeBetaDeprecated entity bound to this client.
// Idiomatic usage: client.VectorizeBetaDeprecated(nil).List(nil, nil) or
// client.VectorizeBetaDeprecated(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) VectorizeBetaDeprecated(data map[string]any) CloudflareAiEntity {
	return NewVectorizeBetaDeprecatedEntityFunc(sdk, data)
}


// WorkersAi returns a WorkersAi entity bound to this client.
// Idiomatic usage: client.WorkersAi(nil).List(nil, nil) or
// client.WorkersAi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) WorkersAi(data map[string]any) CloudflareAiEntity {
	return NewWorkersAiEntityFunc(sdk, data)
}


// WorkersAiFinetune returns a WorkersAiFinetune entity bound to this client.
// Idiomatic usage: client.WorkersAiFinetune(nil).List(nil, nil) or
// client.WorkersAiFinetune(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareAiSDK) WorkersAiFinetune(data map[string]any) CloudflareAiEntity {
	return NewWorkersAiFinetuneEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareAiSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareAiSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
