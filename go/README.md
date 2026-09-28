# CloudflareAi Golang SDK



The Golang SDK for the CloudflareAi API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Account(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-ai-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-ai-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-ai-sdk/go=../cloudflare-ai-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-ai-sdk/go"
)

func main() {
    client := sdk.NewCloudflareAiSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_AI_APIKEY"),
    })

    // Load a single account — the value is the loaded record.
    account, err := client.Account(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(account)

    // Update a account.
    updated, err := client.Account(nil).Update(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
aisearchinstancesjobs, err := client.AiSearchInstancesJob(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = aisearchinstancesjobs
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

aiSearchInstancesJob, err := client.AiSearchInstancesJob(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchInstancesJob) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareAiSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_AI_TEST_LIVE=TRUE
CLOUDFLARE_AI_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewCloudflareAiSDK

```go
func NewCloudflareAiSDK(options map[string]any) *CloudflareAiSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareAiSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareAiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Account` | `(data map[string]any) CloudflareAiEntity` | Create an Account entity instance. |
| `AiGateway` | `(data map[string]any) CloudflareAiEntity` | Create an AiGateway entity instance. |
| `AiGatewayCustomDomain` | `(data map[string]any) CloudflareAiEntity` | Create an AiGatewayCustomDomain entity instance. |
| `AiGatewayCustomProvider` | `(data map[string]any) CloudflareAiEntity` | Create an AiGatewayCustomProvider entity instance. |
| `AiGatewayCustomProviderCost` | `(data map[string]any) CloudflareAiEntity` | Create an AiGatewayCustomProviderCost entity instance. |
| `AiGatewayDataset` | `(data map[string]any) CloudflareAiEntity` | Create an AiGatewayDataset entity instance. |
| `AiGatewayDynamicRoute` | `(data map[string]any) CloudflareAiEntity` | Create an AiGatewayDynamicRoute entity instance. |
| `AiGatewayEvaluation` | `(data map[string]any) CloudflareAiEntity` | Create an AiGatewayEvaluation entity instance. |
| `AiGatewayGateway` | `(data map[string]any) CloudflareAiEntity` | Create an AiGatewayGateway entity instance. |
| `AiGatewayLog` | `(data map[string]any) CloudflareAiEntity` | Create an AiGatewayLog entity instance. |
| `AiGatewayProviderConfig` | `(data map[string]any) CloudflareAiEntity` | Create an AiGatewayProviderConfig entity instance. |
| `AiSearchAccountSearch` | `(data map[string]any) CloudflareAiEntity` | Create an AiSearchAccountSearch entity instance. |
| `AiSearchInstance` | `(data map[string]any) CloudflareAiEntity` | Create an AiSearchInstance entity instance. |
| `AiSearchInstancesItem` | `(data map[string]any) CloudflareAiEntity` | Create an AiSearchInstancesItem entity instance. |
| `AiSearchInstancesJob` | `(data map[string]any) CloudflareAiEntity` | Create an AiSearchInstancesJob entity instance. |
| `AiSearchNamespace` | `(data map[string]any) CloudflareAiEntity` | Create an AiSearchNamespace entity instance. |
| `AiSearchToken` | `(data map[string]any) CloudflareAiEntity` | Create an AiSearchToken entity instance. |
| `AigBillingCreateTopup` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingCreateTopup entity instance. |
| `AigBillingDeleteSpendingLimit` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingDeleteSpendingLimit entity instance. |
| `AigBillingDeleteTopupConfig` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingDeleteTopupConfig entity instance. |
| `AigBillingGetCreditBalance` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingGetCreditBalance entity instance. |
| `AigBillingGetInvoiceHistory` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingGetInvoiceHistory entity instance. |
| `AigBillingGetInvoicePreview` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingGetInvoicePreview entity instance. |
| `AigBillingGetSpendingLimit` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingGetSpendingLimit entity instance. |
| `AigBillingGetTopupConfig` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingGetTopupConfig entity instance. |
| `AigBillingGetTopupEligibility` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingGetTopupEligibility entity instance. |
| `AigBillingGetTopupLimit` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingGetTopupLimit entity instance. |
| `AigBillingGetUsageHistory` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingGetUsageHistory entity instance. |
| `AigBillingSetSpendingLimit` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingSetSpendingLimit entity instance. |
| `AigBillingSetTopupConfig` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingSetTopupConfig entity instance. |
| `AigBillingTopupStatus` | `(data map[string]any) CloudflareAiEntity` | Create an AigBillingTopupStatus entity instance. |
| `AutoRagJob` | `(data map[string]any) CloudflareAiEntity` | Create an AutoRagJob entity instance. |
| `AutoRagRag` | `(data map[string]any) CloudflareAiEntity` | Create an AutoRagRag entity instance. |
| `AutoRagRagSearch` | `(data map[string]any) CloudflareAiEntity` | Create an AutoRagRagSearch entity instance. |
| `FinetuneAsset` | `(data map[string]any) CloudflareAiEntity` | Create a FinetuneAsset entity instance. |
| `Vectorize` | `(data map[string]any) CloudflareAiEntity` | Create a Vectorize entity instance. |
| `VectorizeBetaDeprecated` | `(data map[string]any) CloudflareAiEntity` | Create a VectorizeBetaDeprecated entity instance. |
| `WorkersAi` | `(data map[string]any) CloudflareAiEntity` | Create a WorkersAi entity instance. |
| `WorkersAiFinetune` | `(data map[string]any) CloudflareAiEntity` | Create a WorkersAiFinetune entity instance. |

### Entity interface (CloudflareAiEntity)

All entities implement the `CloudflareAiEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    account, err := client.Account(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // account is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Account

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load, Update.

API path: `/accounts/{account_id}/ai-gateway/logging-state`

#### AiGateway

| Field | Description |
| --- | --- |
| `"byokAlias"` |  |
| `"items"` |  |
| `"limit"` |  |
| `"metadata"` |  |
| `"options"` |  |
| `"provider"` |  |
| `"query"` |  |

Operations: Create.

API path: `/accounts/{account_id}/ai/websearch`

#### AiGatewayCustomDomain

| Field | Description |
| --- | --- |
| `"cname_target"` |  |
| `"created_at"` | epoch milliseconds |
| `"domain"` | Custom hostname that you own, such as `ai.example.com`. |
| `"gateway_id"` | Unique identifier of the AI Gateway within the account. |
| `"hostname"` | Custom hostname that you own, such as `ai.example.com`. |
| `"id"` |  |
| `"minTLS"` |  |
| `"modified_at"` | epoch milliseconds |
| `"ssl_hostname_id"` |  |
| `"status"` |  |
| `"zone_id"` | ID of the Cloudflare zone that contains the custom hostname. |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains`

#### AiGatewayCustomProvider

| Field | Description |
| --- | --- |
| `"base_url"` |  |
| `"beta"` |  |
| `"created_at"` |  |
| `"curl_example"` |  |
| `"description"` |  |
| `"enable"` |  |
| `"headers"` | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `"id"` |  |
| `"js_example"` |  |
| `"link"` |  |
| `"logo"` |  |
| `"modified_at"` |  |
| `"name"` |  |
| `"position"` |  |
| `"slug"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/custom-providers`

#### AiGatewayCustomProviderCost

| Field | Description |
| --- | --- |
| `"account_provider_id"` | ID of the custom provider that the pricing rule applies to. |
| `"changed_by"` |  |
| `"cost_in"` |  |
| `"cost_out"` |  |
| `"cost_type"` |  |
| `"created_at"` |  |
| `"enable"` |  |
| `"id"` |  |
| `"model"` |  |
| `"model_rule"` |  |
| `"modified_at"` |  |
| `"token_pricing"` |  |
| `"weight"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/custom-providers/costs`

#### AiGatewayDataset

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"enable"` |  |
| `"filters"` |  |
| `"gateway_id"` | Unique identifier of the AI Gateway within the account. |
| `"id"` |  |
| `"modified_at"` |  |
| `"name"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets`

#### AiGatewayDynamicRoute

| Field | Description |
| --- | --- |
| `"account_tag"` |  |
| `"active"` |  |
| `"created_at"` |  |
| `"data"` |  |
| `"deployment"` |  |
| `"deployments"` |  |
| `"elements"` |  |
| `"gateway_id"` |  |
| `"id"` |  |
| `"is_valid"` |  |
| `"modified_at"` |  |
| `"name"` |  |
| `"order_by"` |  |
| `"order_by_direction"` |  |
| `"page"` |  |
| `"per_page"` |  |
| `"routes"` |  |
| `"version"` |  |
| `"version_id"` |  |
| `"versions"` |  |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments`

#### AiGatewayEvaluation

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"dataset_ids"` |  |
| `"datasets"` |  |
| `"description"` |  |
| `"enable"` |  |
| `"evaluation_type_ids"` |  |
| `"gateway_id"` | Unique identifier of the AI Gateway within the account. |
| `"id"` |  |
| `"mandatory"` |  |
| `"modified_at"` |  |
| `"name"` |  |
| `"processed"` |  |
| `"results"` |  |
| `"total_logs"` |  |
| `"type"` |  |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations`

#### AiGatewayGateway

| Field | Description |
| --- | --- |
| `"authentication"` |  |
| `"byok_only"` | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `"cache_invalidate_on_update"` |  |
| `"cache_ttl"` |  |
| `"collect_logs"` |  |
| `"created_at"` |  |
| `"dlp"` |  |
| `"guardrails"` |  |
| `"id"` | Unique identifier of the AI Gateway within the account. |
| `"is_default"` |  |
| `"log_classification"` |  |
| `"log_management"` |  |
| `"log_management_strategy"` |  |
| `"logpush"` |  |
| `"logpush_public_key"` |  |
| `"modified_at"` |  |
| `"otel"` |  |
| `"rate_limiting_interval"` |  |
| `"rate_limiting_limit"` |  |
| `"rate_limiting_technique"` |  |
| `"result"` |  |
| `"retry_backoff"` | Backoff strategy for retry delays |
| `"retry_delay"` | Delay between retry attempts in milliseconds (0-60000) |
| `"retry_max_attempts"` | Maximum number of retry attempts for failed requests (1-5) |
| `"spend_limits"` |  |
| `"store_id"` |  |
| `"stripe"` |  |
| `"success"` |  |
| `"workers_ai_billing_mode"` | Controls how Workers AI inference calls routed through this gateway are billed. |
| `"zdr"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways`

#### AiGatewayLog

| Field | Description |
| --- | --- |
| `"cached"` |  |
| `"cost"` |  |
| `"created_at"` |  |
| `"custom_cost"` |  |
| `"duration"` |  |
| `"feedback"` |  |
| `"id"` |  |
| `"metadata"` |  |
| `"model"` |  |
| `"model_type"` |  |
| `"path"` |  |
| `"provider"` |  |
| `"request_content_type"` |  |
| `"request_head"` |  |
| `"request_head_complete"` |  |
| `"request_size"` |  |
| `"request_type"` |  |
| `"response_content_type"` |  |
| `"response_head"` |  |
| `"response_head_complete"` |  |
| `"response_size"` |  |
| `"score"` |  |
| `"status_code"` |  |
| `"step"` |  |
| `"success"` |  |
| `"tokens_in"` |  |
| `"tokens_out"` |  |

Operations: List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs`

#### AiGatewayProviderConfig

| Field | Description |
| --- | --- |
| `"alias"` |  |
| `"default_config"` |  |
| `"gateway_id"` | Unique identifier of the AI Gateway within the account. |
| `"id"` |  |
| `"modified_at"` |  |
| `"provider_slug"` |  |
| `"rate_limit"` |  |
| `"rate_limit_period"` |  |
| `"secret"` | Provider API key to store in the Secrets Store configured on the gateway. |
| `"secret_id"` |  |
| `"secret_preview"` |  |

Operations: Create, List, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs`

#### AiSearchAccountSearch

| Field | Description |
| --- | --- |
| `"ai_search_options"` |  |
| `"choices"` |  |
| `"chunks"` |  |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` | OpenAI-compatible message array. |
| `"model"` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `"object"` |  |
| `"query"` | A simple text query string. |
| `"query_kind"` |  |
| `"search_query"` |  |
| `"stream"` |  |

Operations: Create.

API path: `/accounts/{account_id}/ai-search/namespaces/{name}/search`

#### AiSearchInstance

| Field | Description |
| --- | --- |
| `"ai_gateway_id"` |  |
| `"ai_search_model"` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `"ai_search_options"` |  |
| `"cache"` |  |
| `"cache_threshold"` |  |
| `"cache_ttl"` | Cache entry TTL in seconds. |
| `"choices"` |  |
| `"chunk"` |  |
| `"chunk_overlap"` |  |
| `"chunk_size"` |  |
| `"chunks"` |  |
| `"completed"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"custom_metadata"` |  |
| `"degraded"` | True when status counts are unavailable (e.g. |
| `"embedding_model"` |  |
| `"enable"` |  |
| `"engine"` | Engine-specific metadata. |
| `"engine_version"` |  |
| `"error"` |  |
| `"file_embed_errors"` |  |
| `"fusion_method"` |  |
| `"hybrid_search_enabled"` | Deprecated — use index_method instead. |
| `"id"` | AI Search instance ID. |
| `"index_method"` | Controls which storage backends are used during indexing. |
| `"index_source_errors"` |  |
| `"indexing_options"` |  |
| `"last_activity"` |  |
| `"max_num_results"` |  |
| `"messages"` |  |
| `"metadata"` |  |
| `"model"` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `"modified_at"` |  |
| `"modified_by"` |  |
| `"namespace"` |  |
| `"object"` |  |
| `"outdated"` |  |
| `"paused"` |  |
| `"public_endpoint_id"` |  |
| `"public_endpoint_params"` |  |
| `"queued"` |  |
| `"reranking"` |  |
| `"reranking_model"` |  |
| `"retrieval_options"` |  |
| `"rewrite_model"` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `"rewrite_query"` |  |
| `"running"` |  |
| `"score_threshold"` |  |
| `"skipped"` |  |
| `"source"` |  |
| `"source_params"` |  |
| `"status"` |  |
| `"stream"` |  |
| `"summarization"` |  |
| `"summarization_model"` |  |
| `"sync_interval"` | Interval between automatic syncs, in seconds. |
| `"system_prompt_ai_search"` |  |
| `"system_prompt_index_summarization"` |  |
| `"system_prompt_rewrite_query"` |  |
| `"token_id"` |  |
| `"type"` | Source type. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/chat/completions`

#### AiSearchInstancesItem

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"checksum"` |  |
| `"chunkCount"` |  |
| `"chunks_count"` |  |
| `"created_at"` |  |
| `"end_byte"` |  |
| `"error"` |  |
| `"errorType"` |  |
| `"fileKey"` |  |
| `"file_size"` |  |
| `"id"` |  |
| `"item"` |  |
| `"key"` | Item key / filename. |
| `"last_seen_at"` |  |
| `"message"` |  |
| `"metadata"` | Built-in, configured filterable, and retained source metadata for the item. |
| `"namespace"` |  |
| `"next_action"` |  |
| `"processingTimeMs"` |  |
| `"source_id"` | Identifies which data source this item belongs to. |
| `"start_byte"` |  |
| `"status"` |  |
| `"text"` |  |
| `"timestamp"` |  |
| `"wait_for_completion"` | Wait for indexing to fully complete before responding. |
| `"warnings"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items`

#### AiSearchInstancesJob

| Field | Description |
| --- | --- |
| `"action"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"end_reason"` |  |
| `"ended_at"` |  |
| `"id"` |  |
| `"last_seen_at"` |  |
| `"message"` |  |
| `"message_type"` |  |
| `"source"` |  |
| `"started_at"` |  |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs`

#### AiSearchNamespace

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` | Optional description for the namespace. |
| `"id"` |  |
| `"name"` |  |
| `"new_namespace"` | Target namespace to move the instance into. |
| `"public_endpoint_id"` |  |
| `"public_endpoint_params"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/ai-search/namespaces`

#### AiSearchToken

| Field | Description |
| --- | --- |
| `"cf_api_id"` |  |
| `"cf_api_key"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"enabled"` |  |
| `"id"` |  |
| `"legacy"` |  |
| `"modified_at"` |  |
| `"modified_by"` |  |
| `"name"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-search/tokens`

#### AigBillingCreateTopup

| Field | Description |
| --- | --- |
| `"amount"` | Top-up amount in cents (min 1000). |
| `"errors"` |  |
| `"messages"` |  |
| `"payment_method_id"` | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: Create.

API path: `/accounts/{account_id}/ai-gateway/billing/topup`

#### AigBillingDeleteSpendingLimit

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/ai-gateway/billing/spending-limit`

#### AigBillingDeleteTopupConfig

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/config`

#### AigBillingGetCreditBalance

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/credit-balance`

#### AigBillingGetInvoiceHistory

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/invoice-history`

#### AigBillingGetInvoicePreview

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/invoice-preview`

#### AigBillingGetSpendingLimit

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/spending-limit`

#### AigBillingGetTopupConfig

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/config`

#### AigBillingGetTopupEligibility

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"payment_methods"` | Account-level payment methods, forwarded by the dashboard. |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: Create.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/eligibility`

#### AigBillingGetTopupLimit

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/limits`

#### AigBillingGetUsageHistory

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/usage-history`

#### AigBillingSetSpendingLimit

| Field | Description |
| --- | --- |
| `"amount"` | Spending limit amount in cents (min 100). |
| `"duration"` | Spending limit duration. |
| `"strategy"` | Spending limit strategy. |

Operations: Create.

API path: `/accounts/{account_id}/ai-gateway/billing/spending-limit`

#### AigBillingSetTopupConfig

| Field | Description |
| --- | --- |
| `"amount"` | Auto top-up amount in cents (min 1000). |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |
| `"threshold"` | Balance threshold in cents that triggers auto top-up (min 500). |

Operations: Create.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/config`

#### AigBillingTopupStatus

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"payment_intent_id"` | Stripe invoice ID to check status for. |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: Create.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/status`

#### AutoRagJob

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"end_reason"` |  |
| `"ended_at"` |  |
| `"id"` |  |
| `"last_seen_at"` |  |
| `"message"` |  |
| `"message_type"` |  |
| `"source"` |  |
| `"started_at"` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs`

#### AutoRagRag

| Field | Description |
| --- | --- |
| `"error"` |  |
| `"job_id"` |  |
| `"key"` |  |

Operations: List, Update.

API path: `/accounts/{account_id}/autorag/rags/{id}/files`

#### AutoRagRagSearch

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"filters"` |  |
| `"has_more"` |  |
| `"max_num_results"` |  |
| `"model"` |  |
| `"next_page"` |  |
| `"object"` |  |
| `"query"` |  |
| `"ranking_options"` |  |
| `"reranking"` |  |
| `"response"` |  |
| `"rewrite_query"` |  |
| `"search_query"` |  |
| `"stream"` |  |
| `"system_prompt"` |  |

Operations: Create.

API path: `/accounts/{account_id}/autorag/rags/{id}/ai-search`

#### FinetuneAsset

| Field | Description |
| --- | --- |
| `"file_name"` |  |
| `"file_url"` |  |
| `"id"` |  |

Operations: Load.

API path: `/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets/{file_name}`

#### Vectorize

| Field | Description |
| --- | --- |
| `"config"` |  |
| `"description"` | Specifies the description of the index. |
| `"errors"` |  |
| `"ids"` | A list of vector identifiers to delete from the index indicated by the path. |
| `"indexType"` | Specifies the type of metadata property to index. |
| `"messages"` |  |
| `"name"` |  |
| `"propertyName"` | Specifies the metadata property to index. |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert`

#### VectorizeBetaDeprecated

| Field | Description |
| --- | --- |
| `"config"` |  |
| `"description"` | Specifies the description of the index. |
| `"errors"` |  |
| `"ids"` | A list of vector identifiers to delete from the index indicated by the path. |
| `"messages"` |  |
| `"name"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids`

#### WorkersAi

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"extension"` |  |
| `"input"` | JSON object containing the selected model's input fields, such as prompt or messages. |
| `"messages"` |  |
| `"mimeType"` |  |
| `"model"` | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `"options"` |  |
| `"output"` |  |
| `"result"` | Model-specific output. |
| `"success"` |  |

Operations: Create, List, Load.

API path: `/accounts/{account_id}/ai/run/{model_name}`

#### WorkersAiFinetune

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` |  |
| `"id"` |  |
| `"model"` |  |
| `"modified_at"` |  |
| `"name"` |  |
| `"public"` |  |
| `"success"` |  |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets`



## Entities


### Account

Create an instance: `account := client.Account(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
account, err := client.Account(nil).Load(map[string]any{"id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(account) // the loaded record
```


### AiGateway

Create an instance: `aiGateway := client.AiGateway(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byokAlias` | `string` |  |
| `items` | `[]any` |  |
| `limit` | `int` |  |
| `metadata` | `map[string]any` |  |
| `options` | `map[string]any` |  |
| `provider` | `string` |  |
| `query` | `string` |  |

#### Example: Create

```go
result, err := client.AiGateway(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "items": []any{},
    "metadata": map[string]any{},
    "options": map[string]any{},
    "query": "example_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiGatewayCustomDomain

Create an instance: `aiGatewayCustomDomain := client.AiGatewayCustomDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cname_target` | `string` |  |
| `created_at` | `int` | epoch milliseconds |
| `domain` | `string` | Custom hostname that you own, such as `ai.example.com`. |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `hostname` | `string` | Custom hostname that you own, such as `ai.example.com`. |
| `id` | `string` |  |
| `minTLS` | `string` |  |
| `modified_at` | `int` | epoch milliseconds |
| `ssl_hostname_id` | `string` |  |
| `status` | `string` |  |
| `zone_id` | `string` | ID of the Cloudflare zone that contains the custom hostname. |

#### Example: Load

```go
aiGatewayCustomDomain, err := client.AiGatewayCustomDomain(nil).Load(map[string]any{"id": "ai_gateway_custom_domain_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayCustomDomain) // the loaded record
```

#### Example: List

```go
aiGatewayCustomDomains, err := client.AiGatewayCustomDomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayCustomDomains) // the array of records
```

#### Example: Create

```go
result, err := client.AiGatewayCustomDomain(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "gateway_id": "example_gateway_id",
    "cname_target": "example_cname_target",
    "created_at": 1,
    "domain": "example_domain",
    "hostname": "example_hostname",
    "modified_at": 1,
    "ssl_hostname_id": "example_ssl_hostname_id",
    "status": "example_status",
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiGatewayCustomProvider

Create an instance: `aiGatewayCustomProvider := client.AiGatewayCustomProvider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_url` | `string` |  |
| `beta` | `bool` |  |
| `created_at` | `string` |  |
| `curl_example` | `string` |  |
| `description` | `string` |  |
| `enable` | `bool` |  |
| `headers` | `string` | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `id` | `string` |  |
| `js_example` | `string` |  |
| `link` | `string` |  |
| `logo` | `string` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `position` | `int` |  |
| `slug` | `string` |  |

#### Example: Load

```go
aiGatewayCustomProvider, err := client.AiGatewayCustomProvider(nil).Load(map[string]any{"id": "ai_gateway_custom_provider_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayCustomProvider) // the loaded record
```

#### Example: List

```go
aiGatewayCustomProviders, err := client.AiGatewayCustomProvider(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayCustomProviders) // the array of records
```

#### Example: Create

```go
result, err := client.AiGatewayCustomProvider(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "base_url": "example_base_url",
    "created_at": "example_created_at",
    "id": "example_id",
    "modified_at": "example_modified_at",
    "name": "example_name",
    "slug": "example_slug",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiGatewayCustomProviderCost

Create an instance: `aiGatewayCustomProviderCost := client.AiGatewayCustomProviderCost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_provider_id` | `string` | ID of the custom provider that the pricing rule applies to. |
| `changed_by` | `string` |  |
| `cost_in` | `float64` |  |
| `cost_out` | `float64` |  |
| `cost_type` | `string` |  |
| `created_at` | `string` |  |
| `enable` | `bool` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `model_rule` | `string` |  |
| `modified_at` | `string` |  |
| `token_pricing` | `string` |  |
| `weight` | `int` |  |

#### Example: Load

```go
aiGatewayCustomProviderCost, err := client.AiGatewayCustomProviderCost(nil).Load(map[string]any{"id": "ai_gateway_custom_provider_cost_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayCustomProviderCost) // the loaded record
```

#### Example: List

```go
aiGatewayCustomProviderCosts, err := client.AiGatewayCustomProviderCost(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayCustomProviderCosts) // the array of records
```

#### Example: Create

```go
result, err := client.AiGatewayCustomProviderCost(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "account_provider_id": "example_account_provider_id",
    "created_at": "example_created_at",
    "id": "example_id",
    "model": "example_model",
    "modified_at": "example_modified_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiGatewayDataset

Create an instance: `aiGatewayDataset := client.AiGatewayDataset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `enable` | `bool` |  |
| `filters` | `[]any` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```go
aiGatewayDataset, err := client.AiGatewayDataset(nil).Load(map[string]any{"id": "ai_gateway_dataset_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayDataset) // the loaded record
```

#### Example: List

```go
aiGatewayDatasets, err := client.AiGatewayDataset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayDatasets) // the array of records
```

#### Example: Create

```go
result, err := client.AiGatewayDataset(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "gateway_id": "example_gateway_id",
    "created_at": "example_created_at",
    "enable": true,
    "filters": []any{},
    "id": "example_id",
    "modified_at": "example_modified_at",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiGatewayDynamicRoute

Create an instance: `aiGatewayDynamicRoute := client.AiGatewayDynamicRoute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_tag` | `string` |  |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `data` | `string` |  |
| `deployment` | `map[string]any` |  |
| `deployments` | `[]any` |  |
| `elements` | `[]any` |  |
| `gateway_id` | `string` |  |
| `id` | `string` |  |
| `is_valid` | `bool` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `order_by` | `string` |  |
| `order_by_direction` | `string` |  |
| `page` | `float64` |  |
| `per_page` | `float64` |  |
| `routes` | `[]any` |  |
| `version` | `map[string]any` |  |
| `version_id` | `string` |  |
| `versions` | `[]any` |  |

#### Example: Load

```go
aiGatewayDynamicRoute, err := client.AiGatewayDynamicRoute(nil).Load(map[string]any{"id": "ai_gateway_dynamic_route_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayDynamicRoute) // the loaded record
```

#### Example: Create

```go
result, err := client.AiGatewayDynamicRoute(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "gateway_id": "example_gateway_id",
    "account_tag": "example_account_tag",
    "active": true,
    "created_at": "example_created_at",
    "data": "example_data",
    "deployment": map[string]any{},
    "deployments": []any{},
    "elements": []any{},
    "id": "example_id",
    "modified_at": "example_modified_at",
    "name": "example_name",
    "order_by": "example_order_by",
    "order_by_direction": "example_order_by_direction",
    "page": 1,
    "per_page": 1,
    "routes": []any{},
    "version": map[string]any{},
    "version_id": "example_version_id",
    "versions": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiGatewayEvaluation

Create an instance: `aiGatewayEvaluation := client.AiGatewayEvaluation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `dataset_ids` | `[]any` |  |
| `datasets` | `[]any` |  |
| `description` | `string` |  |
| `enable` | `bool` |  |
| `evaluation_type_ids` | `[]any` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `mandatory` | `bool` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `processed` | `bool` |  |
| `results` | `[]any` |  |
| `total_logs` | `float64` |  |
| `type` | `string` |  |

#### Example: Load

```go
aiGatewayEvaluation, err := client.AiGatewayEvaluation(nil).Load(map[string]any{"id": "ai_gateway_evaluation_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayEvaluation) // the loaded record
```

#### Example: List

```go
aiGatewayEvaluations, err := client.AiGatewayEvaluation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayEvaluations) // the array of records
```

#### Example: Create

```go
result, err := client.AiGatewayEvaluation(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "gateway_id": "example_gateway_id",
    "created_at": "example_created_at",
    "dataset_ids": []any{},
    "datasets": []any{},
    "description": "example_description",
    "enable": true,
    "evaluation_type_ids": []any{},
    "id": "example_id",
    "mandatory": true,
    "modified_at": "example_modified_at",
    "name": "example_name",
    "processed": true,
    "results": []any{},
    "total_logs": 1,
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiGatewayGateway

Create an instance: `aiGatewayGateway := client.AiGatewayGateway(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authentication` | `bool` |  |
| `byok_only` | `bool` | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `cache_invalidate_on_update` | `bool` |  |
| `cache_ttl` | `int` |  |
| `collect_logs` | `bool` |  |
| `created_at` | `string` |  |
| `dlp` | `any` |  |
| `guardrails` | `map[string]any` |  |
| `id` | `string` | Unique identifier of the AI Gateway within the account. |
| `is_default` | `bool` |  |
| `log_classification` | `bool` |  |
| `log_management` | `int` |  |
| `log_management_strategy` | `string` |  |
| `logpush` | `bool` |  |
| `logpush_public_key` | `string` |  |
| `modified_at` | `string` |  |
| `otel` | `[]any` |  |
| `rate_limiting_interval` | `int` |  |
| `rate_limiting_limit` | `int` |  |
| `rate_limiting_technique` | `string` |  |
| `result` | `string` |  |
| `retry_backoff` | `string` | Backoff strategy for retry delays |
| `retry_delay` | `int` | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `int` | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `map[string]any` |  |
| `store_id` | `string` |  |
| `stripe` | `map[string]any` |  |
| `success` | `bool` |  |
| `workers_ai_billing_mode` | `string` | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `bool` |  |

#### Example: Load

```go
aiGatewayGateway, err := client.AiGatewayGateway(nil).Load(map[string]any{"id": "ai_gateway_gateway_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayGateway) // the loaded record
```

#### Example: List

```go
aiGatewayGateways, err := client.AiGatewayGateway(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayGateways) // the array of records
```

#### Example: Create

```go
result, err := client.AiGatewayGateway(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "cache_invalidate_on_update": true,
    "cache_ttl": 1,
    "collect_logs": true,
    "created_at": "example_created_at",
    "guardrails": map[string]any{},
    "id": "example_id",
    "modified_at": "example_modified_at",
    "rate_limiting_interval": 1,
    "rate_limiting_limit": 1,
    "result": "example_result",
    "stripe": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiGatewayLog

Create an instance: `aiGatewayLog := client.AiGatewayLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cached` | `bool` |  |
| `cost` | `float64` |  |
| `created_at` | `string` |  |
| `custom_cost` | `bool` |  |
| `duration` | `int` |  |
| `feedback` | `float64` |  |
| `id` | `string` |  |
| `metadata` | `string` |  |
| `model` | `string` |  |
| `model_type` | `string` |  |
| `path` | `string` |  |
| `provider` | `string` |  |
| `request_content_type` | `string` |  |
| `request_head` | `string` |  |
| `request_head_complete` | `bool` |  |
| `request_size` | `int` |  |
| `request_type` | `string` |  |
| `response_content_type` | `string` |  |
| `response_head` | `string` |  |
| `response_head_complete` | `bool` |  |
| `response_size` | `int` |  |
| `score` | `float64` |  |
| `status_code` | `int` |  |
| `step` | `int` |  |
| `success` | `bool` |  |
| `tokens_in` | `int` |  |
| `tokens_out` | `int` |  |

#### Example: Load

```go
aiGatewayLog, err := client.AiGatewayLog(nil).Load(map[string]any{"id": "ai_gateway_log_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayLog) // the loaded record
```

#### Example: List

```go
aiGatewayLogs, err := client.AiGatewayLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayLogs) // the array of records
```


### AiGatewayProviderConfig

Create an instance: `aiGatewayProviderConfig := client.AiGatewayProviderConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` |  |
| `default_config` | `bool` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `modified_at` | `string` |  |
| `provider_slug` | `string` |  |
| `rate_limit` | `float64` |  |
| `rate_limit_period` | `float64` |  |
| `secret` | `string` | Provider API key to store in the Secrets Store configured on the gateway. |
| `secret_id` | `string` |  |
| `secret_preview` | `string` |  |

#### Example: List

```go
aiGatewayProviderConfigs, err := client.AiGatewayProviderConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiGatewayProviderConfigs) // the array of records
```

#### Example: Create

```go
result, err := client.AiGatewayProviderConfig(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "gateway_id": "example_gateway_id",
    "alias": "example_alias",
    "default_config": true,
    "id": "example_id",
    "modified_at": "example_modified_at",
    "provider_slug": "example_provider_slug",
    "secret_id": "example_secret_id",
    "secret_preview": "example_secret_preview",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiSearchAccountSearch

Create an instance: `aiSearchAccountSearch := client.AiSearchAccountSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_search_options` | `map[string]any` |  |
| `choices` | `[]any` |  |
| `chunks` | `[]any` |  |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` | OpenAI-compatible message array. |
| `model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `string` |  |
| `query` | `string` | A simple text query string. |
| `query_kind` | `string` |  |
| `search_query` | `string` |  |
| `stream` | `bool` |  |

#### Example: Create

```go
result, err := client.AiSearchAccountSearch(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "ai_search_options": map[string]any{},
    "choices": []any{},
    "chunks": []any{},
    "query_kind": "example_query_kind",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiSearchInstance

Create an instance: `aiSearchInstance := client.AiSearchInstance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_gateway_id` | `string` |  |
| `ai_search_model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `map[string]any` |  |
| `cache` | `bool` |  |
| `cache_threshold` | `string` |  |
| `cache_ttl` | `any` | Cache entry TTL in seconds. |
| `choices` | `[]any` |  |
| `chunk` | `bool` |  |
| `chunk_overlap` | `int` |  |
| `chunk_size` | `int` |  |
| `chunks` | `[]any` |  |
| `completed` | `int` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `custom_metadata` | `[]any` |  |
| `degraded` | `bool` | True when status counts are unavailable (e.g. |
| `embedding_model` | `string` |  |
| `enable` | `bool` |  |
| `engine` | `map[string]any` | Engine-specific metadata. |
| `engine_version` | `float64` |  |
| `error` | `int` |  |
| `file_embed_errors` | `map[string]any` |  |
| `fusion_method` | `string` |  |
| `hybrid_search_enabled` | `bool` | Deprecated — use index_method instead. |
| `id` | `string` | AI Search instance ID. |
| `index_method` | `map[string]any` | Controls which storage backends are used during indexing. |
| `index_source_errors` | `map[string]any` |  |
| `indexing_options` | `map[string]any` |  |
| `last_activity` | `string` |  |
| `max_num_results` | `int` |  |
| `messages` | `[]any` |  |
| `metadata` | `map[string]any` |  |
| `model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `string` |  |
| `modified_by` | `string` |  |
| `namespace` | `string` |  |
| `object` | `string` |  |
| `outdated` | `int` |  |
| `paused` | `bool` |  |
| `public_endpoint_id` | `string` |  |
| `public_endpoint_params` | `map[string]any` |  |
| `queued` | `int` |  |
| `reranking` | `bool` |  |
| `reranking_model` | `string` |  |
| `retrieval_options` | `map[string]any` |  |
| `rewrite_model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `bool` |  |
| `running` | `int` |  |
| `score_threshold` | `float64` |  |
| `skipped` | `int` |  |
| `source` | `string` |  |
| `source_params` | `map[string]any` |  |
| `status` | `string` |  |
| `stream` | `bool` |  |
| `summarization` | `bool` |  |
| `summarization_model` | `string` |  |
| `sync_interval` | `any` | Interval between automatic syncs, in seconds. |
| `system_prompt_ai_search` | `string` |  |
| `system_prompt_index_summarization` | `string` |  |
| `system_prompt_rewrite_query` | `string` |  |
| `token_id` | `string` |  |
| `type` | `string` | Source type. |

#### Example: Load

```go
aiSearchInstance, err := client.AiSearchInstance(nil).Load(map[string]any{"id": "ai_search_instance_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchInstance) // the loaded record
```

#### Example: List

```go
aiSearchInstances, err := client.AiSearchInstance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchInstances) // the array of records
```

#### Example: Create

```go
result, err := client.AiSearchInstance(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "choices": []any{},
    "chunks": []any{},
    "created_at": "example_created_at",
    "id": "example_id",
    "index_method": map[string]any{},
    "messages": []any{},
    "modified_at": "example_modified_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiSearchInstancesItem

Create an instance: `aiSearchInstancesItem := client.AiSearchInstancesItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `checksum` | `string` |  |
| `chunkCount` | `int` |  |
| `chunks_count` | `int` |  |
| `created_at` | `string` |  |
| `end_byte` | `float64` |  |
| `error` | `string` |  |
| `errorType` | `string` |  |
| `fileKey` | `string` |  |
| `file_size` | `float64` |  |
| `id` | `string` |  |
| `item` | `map[string]any` |  |
| `key` | `string` | Item key / filename. |
| `last_seen_at` | `string` |  |
| `message` | `string` |  |
| `metadata` | `map[string]any` | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `string` |  |
| `next_action` | `string` |  |
| `processingTimeMs` | `int` |  |
| `source_id` | `string` | Identifies which data source this item belongs to. |
| `start_byte` | `float64` |  |
| `status` | `string` |  |
| `text` | `string` |  |
| `timestamp` | `string` |  |
| `wait_for_completion` | `bool` | Wait for indexing to fully complete before responding. |
| `warnings` | `[]any` |  |

#### Example: Load

```go
aiSearchInstancesItem, err := client.AiSearchInstancesItem(nil).Load(map[string]any{"id": "ai_search_instances_item_id", "account_id": "account_id", "instance_id": "instance_id", "namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchInstancesItem) // the loaded record
```

#### Example: List

```go
aiSearchInstancesItems, err := client.AiSearchInstancesItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchInstancesItems) // the array of records
```

#### Example: Create

```go
result, err := client.AiSearchInstancesItem(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "instance_id": "example_instance_id",
    "namespace_id": "example_namespace_id",
    "action": "example_action",
    "checksum": "example_checksum",
    "chunkCount": 1,
    "chunks_count": 1,
    "created_at": "example_created_at",
    "errorType": "example_errorType",
    "fileKey": "example_fileKey",
    "file_size": 1,
    "id": "example_id",
    "item": map[string]any{},
    "key": "example_key",
    "last_seen_at": "example_last_seen_at",
    "message": "example_message",
    "metadata": map[string]any{},
    "namespace": "example_namespace",
    "next_action": "example_next_action",
    "processingTimeMs": 1,
    "source_id": "example_source_id",
    "status": "example_status",
    "text": "example_text",
    "timestamp": "example_timestamp",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiSearchInstancesJob

Create an instance: `aiSearchInstancesJob := client.AiSearchInstancesJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `created_at` | `float64` |  |
| `description` | `string` |  |
| `end_reason` | `string` |  |
| `ended_at` | `string` |  |
| `id` | `string` |  |
| `last_seen_at` | `string` |  |
| `message` | `string` |  |
| `message_type` | `int` |  |
| `source` | `string` |  |
| `started_at` | `string` |  |

#### Example: Load

```go
aiSearchInstancesJob, err := client.AiSearchInstancesJob(nil).Load(map[string]any{"id": "ai_search_instances_job_id", "account_id": "account_id", "instance_id": "instance_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchInstancesJob) // the loaded record
```

#### Example: List

```go
aiSearchInstancesJobs, err := client.AiSearchInstancesJob(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchInstancesJobs) // the array of records
```

#### Example: Create

```go
result, err := client.AiSearchInstancesJob(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "instance_id": "example_instance_id",
    "action": "example_action",
    "created_at": 1,
    "id": "example_id",
    "message": "example_message",
    "message_type": 1,
    "source": "example_source",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiSearchNamespace

Create an instance: `aiSearchNamespace := client.AiSearchNamespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` | Optional description for the namespace. |
| `id` | `string` |  |
| `name` | `string` |  |
| `new_namespace` | `string` | Target namespace to move the instance into. |
| `public_endpoint_id` | `string` |  |
| `public_endpoint_params` | `map[string]any` |  |

#### Example: Load

```go
aiSearchNamespace, err := client.AiSearchNamespace(nil).Load(map[string]any{"id": "ai_search_namespace_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchNamespace) // the loaded record
```

#### Example: List

```go
aiSearchNamespaces, err := client.AiSearchNamespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchNamespaces) // the array of records
```

#### Example: Create

```go
result, err := client.AiSearchNamespace(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "created_at": "example_created_at",
    "name": "example_name",
    "new_namespace": "example_new_namespace",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AiSearchToken

Create an instance: `aiSearchToken := client.AiSearchToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cf_api_id` | `string` |  |
| `cf_api_key` | `string` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `enabled` | `bool` |  |
| `id` | `string` |  |
| `legacy` | `bool` |  |
| `modified_at` | `string` |  |
| `modified_by` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```go
aiSearchToken, err := client.AiSearchToken(nil).Load(map[string]any{"id": "ai_search_token_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchToken) // the loaded record
```

#### Example: List

```go
aiSearchTokens, err := client.AiSearchToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiSearchTokens) // the array of records
```

#### Example: Create

```go
result, err := client.AiSearchToken(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "cf_api_id": "example_cf_api_id",
    "cf_api_key": "example_cf_api_key",
    "created_at": "example_created_at",
    "id": "example_id",
    "modified_at": "example_modified_at",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AigBillingCreateTopup

Create an instance: `aigBillingCreateTopup := client.AigBillingCreateTopup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Top-up amount in cents (min 1000). |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `payment_method_id` | `string` | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.AigBillingCreateTopup(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "amount": 1,
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AigBillingDeleteSpendingLimit

Create an instance: `aigBillingDeleteSpendingLimit := client.AigBillingDeleteSpendingLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### AigBillingDeleteTopupConfig

Create an instance: `aigBillingDeleteTopupConfig := client.AigBillingDeleteTopupConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### AigBillingGetCreditBalance

Create an instance: `aigBillingGetCreditBalance := client.AigBillingGetCreditBalance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
aigBillingGetCreditBalances, err := client.AigBillingGetCreditBalance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aigBillingGetCreditBalances) // the array of records
```


### AigBillingGetInvoiceHistory

Create an instance: `aigBillingGetInvoiceHistory := client.AigBillingGetInvoiceHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
aigBillingGetInvoiceHistorys, err := client.AigBillingGetInvoiceHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aigBillingGetInvoiceHistorys) // the array of records
```


### AigBillingGetInvoicePreview

Create an instance: `aigBillingGetInvoicePreview := client.AigBillingGetInvoicePreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
aigBillingGetInvoicePreviews, err := client.AigBillingGetInvoicePreview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aigBillingGetInvoicePreviews) // the array of records
```


### AigBillingGetSpendingLimit

Create an instance: `aigBillingGetSpendingLimit := client.AigBillingGetSpendingLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
aigBillingGetSpendingLimits, err := client.AigBillingGetSpendingLimit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aigBillingGetSpendingLimits) // the array of records
```


### AigBillingGetTopupConfig

Create an instance: `aigBillingGetTopupConfig := client.AigBillingGetTopupConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
aigBillingGetTopupConfigs, err := client.AigBillingGetTopupConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aigBillingGetTopupConfigs) // the array of records
```


### AigBillingGetTopupEligibility

Create an instance: `aigBillingGetTopupEligibility := client.AigBillingGetTopupEligibility(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `payment_methods` | `[]any` | Account-level payment methods, forwarded by the dashboard. |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.AigBillingGetTopupEligibility(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AigBillingGetTopupLimit

Create an instance: `aigBillingGetTopupLimit := client.AigBillingGetTopupLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
aigBillingGetTopupLimits, err := client.AigBillingGetTopupLimit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aigBillingGetTopupLimits) // the array of records
```


### AigBillingGetUsageHistory

Create an instance: `aigBillingGetUsageHistory := client.AigBillingGetUsageHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
aigBillingGetUsageHistorys, err := client.AigBillingGetUsageHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aigBillingGetUsageHistorys) // the array of records
```


### AigBillingSetSpendingLimit

Create an instance: `aigBillingSetSpendingLimit := client.AigBillingSetSpendingLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Spending limit amount in cents (min 100). |
| `duration` | `string` | Spending limit duration. |
| `strategy` | `string` | Spending limit strategy. |

#### Example: Create

```go
result, err := client.AigBillingSetSpendingLimit(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "amount": 1,
    "duration": "example_duration",
    "strategy": "example_strategy",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AigBillingSetTopupConfig

Create an instance: `aigBillingSetTopupConfig := client.AigBillingSetTopupConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Auto top-up amount in cents (min 1000). |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |
| `threshold` | `int` | Balance threshold in cents that triggers auto top-up (min 500). |

#### Example: Create

```go
result, err := client.AigBillingSetTopupConfig(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "amount": 1,
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
    "threshold": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AigBillingTopupStatus

Create an instance: `aigBillingTopupStatus := client.AigBillingTopupStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `payment_intent_id` | `string` | Stripe invoice ID to check status for. |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Create

```go
result, err := client.AigBillingTopupStatus(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "payment_intent_id": "example_payment_intent_id",
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AutoRagJob

Create an instance: `autoRagJob := client.AutoRagJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `float64` |  |
| `end_reason` | `string` |  |
| `ended_at` | `string` |  |
| `id` | `string` |  |
| `last_seen_at` | `string` |  |
| `message` | `string` |  |
| `message_type` | `int` |  |
| `source` | `string` |  |
| `started_at` | `string` |  |

#### Example: Load

```go
autoRagJob, err := client.AutoRagJob(nil).Load(map[string]any{"id": "auto_rag_job_id", "account_id": "account_id", "rag_id": "rag_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(autoRagJob) // the loaded record
```

#### Example: List

```go
autoRagJobs, err := client.AutoRagJob(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(autoRagJobs) // the array of records
```


### AutoRagRag

Create an instance: `autoRagRag := client.AutoRagRag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error` | `string` |  |
| `job_id` | `string` |  |
| `key` | `string` |  |

#### Example: List

```go
autoRagRags, err := client.AutoRagRag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(autoRagRags) // the array of records
```


### AutoRagRagSearch

Create an instance: `autoRagRagSearch := client.AutoRagRagSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `filters` | `any` |  |
| `has_more` | `bool` |  |
| `max_num_results` | `int` |  |
| `model` | `any` |  |
| `next_page` | `string` |  |
| `object` | `string` |  |
| `query` | `string` |  |
| `ranking_options` | `map[string]any` |  |
| `reranking` | `map[string]any` |  |
| `response` | `string` |  |
| `rewrite_query` | `bool` |  |
| `search_query` | `string` |  |
| `stream` | `bool` |  |
| `system_prompt` | `string` |  |

#### Example: Create

```go
result, err := client.AutoRagRagSearch(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "rag_id": "example_rag_id",
    "query": "example_query",
    "response": "example_response",
    "search_query": "example_search_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### FinetuneAsset

Create an instance: `finetuneAsset := client.FinetuneAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file_name` | `string` |  |
| `file_url` | `string` |  |
| `id` | `string` |  |

#### Example: Load

```go
finetuneAsset, err := client.FinetuneAsset(nil).Load(map[string]any{"id": "finetune_asset_id", "account_id": "account_id", "finetune_id": "finetune_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(finetuneAsset) // the loaded record
```


### Vectorize

Create an instance: `vectorize := client.Vectorize(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `any` |  |
| `description` | `string` | Specifies the description of the index. |
| `errors` | `[]any` |  |
| `ids` | `[]any` | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `string` | Specifies the type of metadata property to index. |
| `messages` | `[]any` |  |
| `name` | `string` |  |
| `propertyName` | `string` | Specifies the metadata property to index. |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```go
vectorize, err := client.Vectorize(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(vectorize) // the loaded record
```

#### Example: List

```go
vectorizes, err := client.Vectorize(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(vectorizes) // the array of records
```

#### Example: Create

```go
result, err := client.Vectorize(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "config": "example_config",
    "errors": []any{},
    "indexType": "example_indexType",
    "messages": []any{},
    "name": "example_name",
    "propertyName": "example_propertyName",
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### VectorizeBetaDeprecated

Create an instance: `vectorizeBetaDeprecated := client.VectorizeBetaDeprecated(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `any` |  |
| `description` | `string` | Specifies the description of the index. |
| `errors` | `[]any` |  |
| `ids` | `[]any` | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `[]any` |  |
| `name` | `string` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```go
vectorizeBetaDeprecated, err := client.VectorizeBetaDeprecated(nil).Load(map[string]any{"account_id": "account_id", "index_name": "index_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(vectorizeBetaDeprecated) // the loaded record
```

#### Example: List

```go
vectorizeBetaDeprecateds, err := client.VectorizeBetaDeprecated(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(vectorizeBetaDeprecateds) // the array of records
```

#### Example: Create

```go
result, err := client.VectorizeBetaDeprecated(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "config": "example_config",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkersAi

Create an instance: `workersAi := client.WorkersAi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `extension` | `string` |  |
| `input` | `map[string]any` | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `[]any` |  |
| `mimeType` | `string` |  |
| `model` | `string` | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `map[string]any` |  |
| `output` | `map[string]any` |  |
| `result` | `map[string]any` | Model-specific output. |
| `success` | `bool` |  |

#### Example: Load

```go
workersAi, err := client.WorkersAi(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersAi) // the loaded record
```

#### Example: List

```go
workersAis, err := client.WorkersAi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersAis) // the array of records
```

#### Example: Create

```go
result, err := client.WorkersAi(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "extension": "example_extension",
    "input": map[string]any{},
    "messages": []any{},
    "mimeType": "example_mimeType",
    "model": "example_model",
    "output": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkersAiFinetune

Create an instance: `workersAiFinetune := client.WorkersAiFinetune(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `public` | `bool` |  |
| `success` | `bool` |  |

#### Example: Load

```go
workersAiFinetune, err := client.WorkersAiFinetune(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersAiFinetune) // the loaded record
```

#### Example: List

```go
workersAiFinetunes, err := client.WorkersAiFinetune(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workersAiFinetunes) // the array of records
```

#### Example: Create

```go
result, err := client.WorkersAiFinetune(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "created_at": "example_created_at",
    "id": "example_id",
    "model": "example_model",
    "modified_at": "example_modified_at",
    "name": "example_name",
    "public": true,
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

15 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `workers_ai` | `result` | 13 | 2 levels |
| `ai_search_instance` | `cache_ttl` | 10 | 0 levels |
| `ai_search_instance` | `sync_interval` | 8 | 0 levels |
| `ai_gateway_dynamic_route` | `elements` | 6 | 1 level |
| `ai_gateway_dynamic_route` | `routes` | 6 | 4 levels |
| `ai_gateway_dataset` | `filters` | 3 | 4 levels |
| `ai_gateway_evaluation` | `datasets` | 3 | 7 levels |
| `ai_search_account_search` | `ai_search_options` | 3 | 3 levels |
| `ai_search_account_search` | `choices` | 3 | 8 levels |
| `ai_search_account_search` | `messages` | 3 | 6 levels |
| `ai_search_instance` | `ai_search_options` | 3 | 3 levels |
| `ai_search_instance` | `choices` | 3 | 8 levels |
| `ai_search_instance` | `messages` | 3 | 6 levels |
| `ai_search_instances_item` | `metadata` | 3 | 1 level |
| `auto_rag_rag_search` | `filters` | 3 | 7 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-ai-sdk/go/
├── cloudflare-ai.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-ai-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
aisearchinstancesjob := client.AiSearchInstancesJob(nil)
aisearchinstancesjob.List(nil, nil)

// aisearchinstancesjob.Data() now returns the aisearchinstancesjob data from the last list
// aisearchinstancesjob.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
