package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-ai-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"account | ai_gateway | ai_gateway_custom_domain | ai_gateway_custom_provider | ai_gateway_custom_provider_cost | ai_gateway_dataset | ai_gateway_dynamic_route | ai_gateway_evaluation | ai_gateway_gateway | ai_gateway_log | ai_gateway_provider_config | ai_search_account_search | ai_search_instance | ai_search_instances_item | ai_search_instances_job | ai_search_namespace | ai_search_token | aig_billing_create_topup | aig_billing_delete_spending_limit | aig_billing_delete_topup_config | aig_billing_get_credit_balance | aig_billing_get_invoice_history | aig_billing_get_invoice_preview | aig_billing_get_spending_limit | aig_billing_get_topup_config | aig_billing_get_topup_eligibility | aig_billing_get_topup_limit | aig_billing_get_usage_history | aig_billing_set_spending_limit | aig_billing_set_topup_config | aig_billing_topup_status | auto_rag_job | auto_rag_rag | auto_rag_rag_search | finetune_asset | memory | namespace | vectorize | vectorize_beta__deprecated | workers_ai | workers_ai_finetune"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareAiSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-ai_list",
		Description: "List records from CloudflareAi. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-ai_load",
		Description: "Load a single record from CloudflareAi. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareAiSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareAiSDK, name string) (sdk.CloudflareAiEntity, error) {
	switch strings.ToLower(name) {
	case "account":
		return client.Account(nil), nil
	case "ai_gateway":
		return client.AiGateway(nil), nil
	case "ai_gateway_custom_domain":
		return client.AiGatewayCustomDomain(nil), nil
	case "ai_gateway_custom_provider":
		return client.AiGatewayCustomProvider(nil), nil
	case "ai_gateway_custom_provider_cost":
		return client.AiGatewayCustomProviderCost(nil), nil
	case "ai_gateway_dataset":
		return client.AiGatewayDataset(nil), nil
	case "ai_gateway_dynamic_route":
		return client.AiGatewayDynamicRoute(nil), nil
	case "ai_gateway_evaluation":
		return client.AiGatewayEvaluation(nil), nil
	case "ai_gateway_gateway":
		return client.AiGatewayGateway(nil), nil
	case "ai_gateway_log":
		return client.AiGatewayLog(nil), nil
	case "ai_gateway_provider_config":
		return client.AiGatewayProviderConfig(nil), nil
	case "ai_search_account_search":
		return client.AiSearchAccountSearch(nil), nil
	case "ai_search_instance":
		return client.AiSearchInstance(nil), nil
	case "ai_search_instances_item":
		return client.AiSearchInstancesItem(nil), nil
	case "ai_search_instances_job":
		return client.AiSearchInstancesJob(nil), nil
	case "ai_search_namespace":
		return client.AiSearchNamespace(nil), nil
	case "ai_search_token":
		return client.AiSearchToken(nil), nil
	case "aig_billing_create_topup":
		return client.AigBillingCreateTopup(nil), nil
	case "aig_billing_delete_spending_limit":
		return client.AigBillingDeleteSpendingLimit(nil), nil
	case "aig_billing_delete_topup_config":
		return client.AigBillingDeleteTopupConfig(nil), nil
	case "aig_billing_get_credit_balance":
		return client.AigBillingGetCreditBalance(nil), nil
	case "aig_billing_get_invoice_history":
		return client.AigBillingGetInvoiceHistory(nil), nil
	case "aig_billing_get_invoice_preview":
		return client.AigBillingGetInvoicePreview(nil), nil
	case "aig_billing_get_spending_limit":
		return client.AigBillingGetSpendingLimit(nil), nil
	case "aig_billing_get_topup_config":
		return client.AigBillingGetTopupConfig(nil), nil
	case "aig_billing_get_topup_eligibility":
		return client.AigBillingGetTopupEligibility(nil), nil
	case "aig_billing_get_topup_limit":
		return client.AigBillingGetTopupLimit(nil), nil
	case "aig_billing_get_usage_history":
		return client.AigBillingGetUsageHistory(nil), nil
	case "aig_billing_set_spending_limit":
		return client.AigBillingSetSpendingLimit(nil), nil
	case "aig_billing_set_topup_config":
		return client.AigBillingSetTopupConfig(nil), nil
	case "aig_billing_topup_status":
		return client.AigBillingTopupStatus(nil), nil
	case "auto_rag_job":
		return client.AutoRagJob(nil), nil
	case "auto_rag_rag":
		return client.AutoRagRag(nil), nil
	case "auto_rag_rag_search":
		return client.AutoRagRagSearch(nil), nil
	case "finetune_asset":
		return client.FinetuneAsset(nil), nil
	case "memory":
		return client.Memory(nil), nil
	case "namespace":
		return client.Namespace(nil), nil
	case "vectorize":
		return client.Vectorize(nil), nil
	case "vectorize_beta__deprecated":
		return client.VectorizeBetaDeprecated(nil), nil
	case "workers_ai":
		return client.WorkersAi(nil), nil
	case "workers_ai_finetune":
		return client.WorkersAiFinetune(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
