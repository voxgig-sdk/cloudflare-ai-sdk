# CloudflareAi Lua SDK



The Lua SDK for the CloudflareAi API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Account()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-ai-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-ai_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_AI_APIKEY"),
})
```

### 3. Load an aigatewaycustomdomain

AiGatewayCustomDomain is nested under account, so provide the `account_id`.

```lua
local aigatewaycustomdomain, err = client:AiGatewayCustomDomain():load({ account_id = "example_account_id", gateway_id = "example_gateway_id", id = "example_id" })
if err then error(err) end
print(aigatewaycustomdomain)
```

### 4. Create, update, and remove

```lua
-- Update
client:Account():update({ id = "example_id" })

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local aisearchinstancesjobs, err = client:AiSearchInstancesJob():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:AiSearchInstancesJob():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### CloudflareAiSDK

```lua
local sdk = require("cloudflare-ai_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareAiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Account` | `(data) -> AccountEntity` | Create an Account entity instance. |
| `AiGateway` | `(data) -> AiGatewayEntity` | Create an AiGateway entity instance. |
| `AiGatewayCustomDomain` | `(data) -> AiGatewayCustomDomainEntity` | Create an AiGatewayCustomDomain entity instance. |
| `AiGatewayCustomProvider` | `(data) -> AiGatewayCustomProviderEntity` | Create an AiGatewayCustomProvider entity instance. |
| `AiGatewayCustomProviderCost` | `(data) -> AiGatewayCustomProviderCostEntity` | Create an AiGatewayCustomProviderCost entity instance. |
| `AiGatewayDataset` | `(data) -> AiGatewayDatasetEntity` | Create an AiGatewayDataset entity instance. |
| `AiGatewayDynamicRoute` | `(data) -> AiGatewayDynamicRouteEntity` | Create an AiGatewayDynamicRoute entity instance. |
| `AiGatewayEvaluation` | `(data) -> AiGatewayEvaluationEntity` | Create an AiGatewayEvaluation entity instance. |
| `AiGatewayGateway` | `(data) -> AiGatewayGatewayEntity` | Create an AiGatewayGateway entity instance. |
| `AiGatewayLog` | `(data) -> AiGatewayLogEntity` | Create an AiGatewayLog entity instance. |
| `AiGatewayProviderConfig` | `(data) -> AiGatewayProviderConfigEntity` | Create an AiGatewayProviderConfig entity instance. |
| `AiSearchAccountSearch` | `(data) -> AiSearchAccountSearchEntity` | Create an AiSearchAccountSearch entity instance. |
| `AiSearchInstance` | `(data) -> AiSearchInstanceEntity` | Create an AiSearchInstance entity instance. |
| `AiSearchInstancesItem` | `(data) -> AiSearchInstancesItemEntity` | Create an AiSearchInstancesItem entity instance. |
| `AiSearchInstancesJob` | `(data) -> AiSearchInstancesJobEntity` | Create an AiSearchInstancesJob entity instance. |
| `AiSearchNamespace` | `(data) -> AiSearchNamespaceEntity` | Create an AiSearchNamespace entity instance. |
| `AiSearchToken` | `(data) -> AiSearchTokenEntity` | Create an AiSearchToken entity instance. |
| `AigBillingCreateTopup` | `(data) -> AigBillingCreateTopupEntity` | Create an AigBillingCreateTopup entity instance. |
| `AigBillingDeleteSpendingLimit` | `(data) -> AigBillingDeleteSpendingLimitEntity` | Create an AigBillingDeleteSpendingLimit entity instance. |
| `AigBillingDeleteTopupConfig` | `(data) -> AigBillingDeleteTopupConfigEntity` | Create an AigBillingDeleteTopupConfig entity instance. |
| `AigBillingGetCreditBalance` | `(data) -> AigBillingGetCreditBalanceEntity` | Create an AigBillingGetCreditBalance entity instance. |
| `AigBillingGetInvoiceHistory` | `(data) -> AigBillingGetInvoiceHistoryEntity` | Create an AigBillingGetInvoiceHistory entity instance. |
| `AigBillingGetInvoicePreview` | `(data) -> AigBillingGetInvoicePreviewEntity` | Create an AigBillingGetInvoicePreview entity instance. |
| `AigBillingGetSpendingLimit` | `(data) -> AigBillingGetSpendingLimitEntity` | Create an AigBillingGetSpendingLimit entity instance. |
| `AigBillingGetTopupConfig` | `(data) -> AigBillingGetTopupConfigEntity` | Create an AigBillingGetTopupConfig entity instance. |
| `AigBillingGetTopupEligibility` | `(data) -> AigBillingGetTopupEligibilityEntity` | Create an AigBillingGetTopupEligibility entity instance. |
| `AigBillingGetTopupLimit` | `(data) -> AigBillingGetTopupLimitEntity` | Create an AigBillingGetTopupLimit entity instance. |
| `AigBillingGetUsageHistory` | `(data) -> AigBillingGetUsageHistoryEntity` | Create an AigBillingGetUsageHistory entity instance. |
| `AigBillingSetSpendingLimit` | `(data) -> AigBillingSetSpendingLimitEntity` | Create an AigBillingSetSpendingLimit entity instance. |
| `AigBillingSetTopupConfig` | `(data) -> AigBillingSetTopupConfigEntity` | Create an AigBillingSetTopupConfig entity instance. |
| `AigBillingTopupStatus` | `(data) -> AigBillingTopupStatusEntity` | Create an AigBillingTopupStatus entity instance. |
| `AutoRagJob` | `(data) -> AutoRagJobEntity` | Create an AutoRagJob entity instance. |
| `AutoRagRag` | `(data) -> AutoRagRagEntity` | Create an AutoRagRag entity instance. |
| `AutoRagRagSearch` | `(data) -> AutoRagRagSearchEntity` | Create an AutoRagRagSearch entity instance. |
| `FinetuneAsset` | `(data) -> FinetuneAssetEntity` | Create a FinetuneAsset entity instance. |
| `Vectorize` | `(data) -> VectorizeEntity` | Create a Vectorize entity instance. |
| `VectorizeBetaDeprecated` | `(data) -> VectorizeBetaDeprecatedEntity` | Create a VectorizeBetaDeprecated entity instance. |
| `WorkersAi` | `(data) -> WorkersAiEntity` | Create a WorkersAi entity instance. |
| `WorkersAiFinetune` | `(data) -> WorkersAiFinetuneEntity` | Create a WorkersAiFinetune entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local account, err = client:Account():load({ id = "example_id" })
    if err then error(err) end
    -- account is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Account

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Update.

API path: `/accounts/{account_id}/ai-gateway/logging-state`

#### AiGateway

| Field | Description |
| --- | --- |
| `byokAlias` |  |
| `items` |  |
| `limit` |  |
| `metadata` |  |
| `options` |  |
| `provider` |  |
| `query` |  |

Operations: Create.

API path: `/accounts/{account_id}/ai/websearch`

#### AiGatewayCustomDomain

| Field | Description |
| --- | --- |
| `cname_target` |  |
| `created_at` | epoch milliseconds |
| `domain` | Custom hostname that you own, such as `ai.example.com`. |
| `gateway_id` | Unique identifier of the AI Gateway within the account. |
| `hostname` | Custom hostname that you own, such as `ai.example.com`. |
| `id` |  |
| `minTLS` |  |
| `modified_at` | epoch milliseconds |
| `ssl_hostname_id` |  |
| `status` |  |
| `zone_id` | ID of the Cloudflare zone that contains the custom hostname. |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains`

#### AiGatewayCustomProvider

| Field | Description |
| --- | --- |
| `base_url` |  |
| `beta` |  |
| `created_at` |  |
| `curl_example` |  |
| `description` |  |
| `enable` |  |
| `headers` | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `id` |  |
| `js_example` |  |
| `link` |  |
| `logo` |  |
| `modified_at` |  |
| `name` |  |
| `position` |  |
| `slug` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/custom-providers`

#### AiGatewayCustomProviderCost

| Field | Description |
| --- | --- |
| `account_provider_id` | ID of the custom provider that the pricing rule applies to. |
| `changed_by` |  |
| `cost_in` |  |
| `cost_out` |  |
| `cost_type` |  |
| `created_at` |  |
| `enable` |  |
| `id` |  |
| `model` |  |
| `model_rule` |  |
| `modified_at` |  |
| `token_pricing` |  |
| `weight` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/custom-providers/costs`

#### AiGatewayDataset

| Field | Description |
| --- | --- |
| `created_at` |  |
| `enable` |  |
| `filters` |  |
| `gateway_id` | Unique identifier of the AI Gateway within the account. |
| `id` |  |
| `modified_at` |  |
| `name` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets`

#### AiGatewayDynamicRoute

| Field | Description |
| --- | --- |
| `account_tag` |  |
| `active` |  |
| `created_at` |  |
| `data` |  |
| `deployment` |  |
| `deployments` |  |
| `elements` |  |
| `gateway_id` |  |
| `id` |  |
| `is_valid` |  |
| `modified_at` |  |
| `name` |  |
| `order_by` |  |
| `order_by_direction` |  |
| `page` |  |
| `per_page` |  |
| `routes` |  |
| `version` |  |
| `version_id` |  |
| `versions` |  |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments`

#### AiGatewayEvaluation

| Field | Description |
| --- | --- |
| `created_at` |  |
| `dataset_ids` |  |
| `datasets` |  |
| `description` |  |
| `enable` |  |
| `evaluation_type_ids` |  |
| `gateway_id` | Unique identifier of the AI Gateway within the account. |
| `id` |  |
| `mandatory` |  |
| `modified_at` |  |
| `name` |  |
| `processed` |  |
| `results` |  |
| `total_logs` |  |
| `type` |  |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations`

#### AiGatewayGateway

| Field | Description |
| --- | --- |
| `authentication` |  |
| `byok_only` | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `cache_invalidate_on_update` |  |
| `cache_ttl` |  |
| `collect_logs` |  |
| `created_at` |  |
| `dlp` |  |
| `guardrails` |  |
| `id` | Unique identifier of the AI Gateway within the account. |
| `is_default` |  |
| `log_classification` |  |
| `log_management` |  |
| `log_management_strategy` |  |
| `logpush` |  |
| `logpush_public_key` |  |
| `modified_at` |  |
| `otel` |  |
| `rate_limiting_interval` |  |
| `rate_limiting_limit` |  |
| `rate_limiting_technique` |  |
| `result` |  |
| `retry_backoff` | Backoff strategy for retry delays |
| `retry_delay` | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` |  |
| `store_id` |  |
| `stripe` |  |
| `success` |  |
| `workers_ai_billing_mode` | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways`

#### AiGatewayLog

| Field | Description |
| --- | --- |
| `cached` |  |
| `cost` |  |
| `created_at` |  |
| `custom_cost` |  |
| `duration` |  |
| `feedback` |  |
| `id` |  |
| `metadata` |  |
| `model` |  |
| `model_type` |  |
| `path` |  |
| `provider` |  |
| `request_content_type` |  |
| `request_head` |  |
| `request_head_complete` |  |
| `request_size` |  |
| `request_type` |  |
| `response_content_type` |  |
| `response_head` |  |
| `response_head_complete` |  |
| `response_size` |  |
| `score` |  |
| `status_code` |  |
| `step` |  |
| `success` |  |
| `tokens_in` |  |
| `tokens_out` |  |

Operations: List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs`

#### AiGatewayProviderConfig

| Field | Description |
| --- | --- |
| `alias` |  |
| `default_config` |  |
| `gateway_id` | Unique identifier of the AI Gateway within the account. |
| `id` |  |
| `modified_at` |  |
| `provider_slug` |  |
| `rate_limit` |  |
| `rate_limit_period` |  |
| `secret` | Provider API key to store in the Secrets Store configured on the gateway. |
| `secret_id` |  |
| `secret_preview` |  |

Operations: Create, List, Remove, Update.

API path: `/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs`

#### AiSearchAccountSearch

| Field | Description |
| --- | --- |
| `ai_search_options` |  |
| `choices` |  |
| `chunks` |  |
| `errors` |  |
| `id` |  |
| `messages` | OpenAI-compatible message array. |
| `model` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` |  |
| `query` | A simple text query string. |
| `query_kind` |  |
| `search_query` |  |
| `stream` |  |

Operations: Create.

API path: `/accounts/{account_id}/ai-search/namespaces/{name}/search`

#### AiSearchInstance

| Field | Description |
| --- | --- |
| `ai_gateway_id` |  |
| `ai_search_model` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` |  |
| `cache` |  |
| `cache_threshold` |  |
| `cache_ttl` | Cache entry TTL in seconds. |
| `choices` |  |
| `chunk` |  |
| `chunk_overlap` |  |
| `chunk_size` |  |
| `chunks` |  |
| `completed` |  |
| `created_at` |  |
| `created_by` |  |
| `custom_metadata` |  |
| `degraded` | True when status counts are unavailable (e.g. |
| `embedding_model` |  |
| `enable` |  |
| `engine` | Engine-specific metadata. |
| `engine_version` |  |
| `error` |  |
| `file_embed_errors` |  |
| `fusion_method` |  |
| `hybrid_search_enabled` | Deprecated — use index_method instead. |
| `id` | AI Search instance ID. |
| `index_method` | Controls which storage backends are used during indexing. |
| `index_source_errors` |  |
| `indexing_options` |  |
| `last_activity` |  |
| `max_num_results` |  |
| `messages` |  |
| `metadata` |  |
| `model` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` |  |
| `modified_by` |  |
| `namespace` |  |
| `object` |  |
| `outdated` |  |
| `paused` |  |
| `public_endpoint_id` |  |
| `public_endpoint_params` |  |
| `queued` |  |
| `reranking` |  |
| `reranking_model` |  |
| `retrieval_options` |  |
| `rewrite_model` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` |  |
| `running` |  |
| `score_threshold` |  |
| `skipped` |  |
| `source` |  |
| `source_params` |  |
| `status` |  |
| `stream` |  |
| `summarization` |  |
| `summarization_model` |  |
| `sync_interval` | Interval between automatic syncs, in seconds. |
| `system_prompt_ai_search` |  |
| `system_prompt_index_summarization` |  |
| `system_prompt_rewrite_query` |  |
| `token_id` |  |
| `type` | Source type. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/chat/completions`

#### AiSearchInstancesItem

| Field | Description |
| --- | --- |
| `action` |  |
| `checksum` |  |
| `chunkCount` |  |
| `chunks_count` |  |
| `created_at` |  |
| `end_byte` |  |
| `error` |  |
| `errorType` |  |
| `fileKey` |  |
| `file_size` |  |
| `id` |  |
| `item` |  |
| `key` | Item key / filename. |
| `last_seen_at` |  |
| `message` |  |
| `metadata` | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` |  |
| `next_action` |  |
| `processingTimeMs` |  |
| `source_id` | Identifies which data source this item belongs to. |
| `start_byte` |  |
| `status` |  |
| `text` |  |
| `timestamp` |  |
| `wait_for_completion` | Wait for indexing to fully complete before responding. |
| `warnings` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items`

#### AiSearchInstancesJob

| Field | Description |
| --- | --- |
| `action` |  |
| `created_at` |  |
| `description` |  |
| `end_reason` |  |
| `ended_at` |  |
| `id` |  |
| `last_seen_at` |  |
| `message` |  |
| `message_type` |  |
| `source` |  |
| `started_at` |  |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs`

#### AiSearchNamespace

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` | Optional description for the namespace. |
| `id` |  |
| `name` |  |
| `new_namespace` | Target namespace to move the instance into. |
| `public_endpoint_id` |  |
| `public_endpoint_params` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/ai-search/namespaces`

#### AiSearchToken

| Field | Description |
| --- | --- |
| `cf_api_id` |  |
| `cf_api_key` |  |
| `created_at` |  |
| `created_by` |  |
| `enabled` |  |
| `id` |  |
| `legacy` |  |
| `modified_at` |  |
| `modified_by` |  |
| `name` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/ai-search/tokens`

#### AigBillingCreateTopup

| Field | Description |
| --- | --- |
| `amount` | Top-up amount in cents (min 1000). |
| `errors` |  |
| `messages` |  |
| `payment_method_id` | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` |  |
| `result_info` |  |
| `success` |  |

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
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/credit-balance`

#### AigBillingGetInvoiceHistory

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/invoice-history`

#### AigBillingGetInvoicePreview

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/invoice-preview`

#### AigBillingGetSpendingLimit

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/spending-limit`

#### AigBillingGetTopupConfig

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/config`

#### AigBillingGetTopupEligibility

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `payment_methods` | Account-level payment methods, forwarded by the dashboard. |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: Create.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/eligibility`

#### AigBillingGetTopupLimit

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/limits`

#### AigBillingGetUsageHistory

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/ai-gateway/billing/usage-history`

#### AigBillingSetSpendingLimit

| Field | Description |
| --- | --- |
| `amount` | Spending limit amount in cents (min 100). |
| `duration` | Spending limit duration. |
| `strategy` | Spending limit strategy. |

Operations: Create.

API path: `/accounts/{account_id}/ai-gateway/billing/spending-limit`

#### AigBillingSetTopupConfig

| Field | Description |
| --- | --- |
| `amount` | Auto top-up amount in cents (min 1000). |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |
| `threshold` | Balance threshold in cents that triggers auto top-up (min 500). |

Operations: Create.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/config`

#### AigBillingTopupStatus

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `payment_intent_id` | Stripe invoice ID to check status for. |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: Create.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/status`

#### AutoRagJob

| Field | Description |
| --- | --- |
| `created_at` |  |
| `end_reason` |  |
| `ended_at` |  |
| `id` |  |
| `last_seen_at` |  |
| `message` |  |
| `message_type` |  |
| `source` |  |
| `started_at` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs`

#### AutoRagRag

| Field | Description |
| --- | --- |
| `error` |  |
| `job_id` |  |
| `key` |  |

Operations: List, Update.

API path: `/accounts/{account_id}/autorag/rags/{id}/files`

#### AutoRagRagSearch

| Field | Description |
| --- | --- |
| `data` |  |
| `filters` |  |
| `has_more` |  |
| `max_num_results` |  |
| `model` |  |
| `next_page` |  |
| `object` |  |
| `query` |  |
| `ranking_options` |  |
| `reranking` |  |
| `response` |  |
| `rewrite_query` |  |
| `search_query` |  |
| `stream` |  |
| `system_prompt` |  |

Operations: Create.

API path: `/accounts/{account_id}/autorag/rags/{id}/ai-search`

#### FinetuneAsset

| Field | Description |
| --- | --- |
| `file_name` |  |
| `file_url` |  |
| `id` |  |

Operations: Load.

API path: `/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets/{file_name}`

#### Vectorize

| Field | Description |
| --- | --- |
| `config` |  |
| `description` | Specifies the description of the index. |
| `errors` |  |
| `ids` | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | Specifies the type of metadata property to index. |
| `messages` |  |
| `name` |  |
| `propertyName` | Specifies the metadata property to index. |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert`

#### VectorizeBetaDeprecated

| Field | Description |
| --- | --- |
| `config` |  |
| `description` | Specifies the description of the index. |
| `errors` |  |
| `ids` | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` |  |
| `name` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids`

#### WorkersAi

| Field | Description |
| --- | --- |
| `errors` |  |
| `extension` |  |
| `input` | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` |  |
| `mimeType` |  |
| `model` | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` |  |
| `output` |  |
| `result` | Model-specific output. |
| `success` |  |

Operations: Create, List, Load.

API path: `/accounts/{account_id}/ai/run/{model_name}`

#### WorkersAiFinetune

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `model` |  |
| `modified_at` |  |
| `name` |  |
| `public` |  |
| `success` |  |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets`



## Entities


### Account

Create an instance: `local account = client:Account(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local account, err = client:Account():load({ id = "account_id" })
```


### AiGateway

Create an instance: `local ai_gateway = client:AiGateway(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byokAlias` | `string` |  |
| `items` | `table` |  |
| `limit` | `number` |  |
| `metadata` | `table` |  |
| `options` | `table` |  |
| `provider` | `string` |  |
| `query` | `string` |  |

#### Example: Create

```lua
local ai_gateway, err = client:AiGateway():create({
  account_id = "example_account_id", -- string
  items = {}, -- table
  metadata = {}, -- table
  options = {}, -- table
  query = "example_query", -- string
})
```


### AiGatewayCustomDomain

Create an instance: `local ai_gateway_custom_domain = client:AiGatewayCustomDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cname_target` | `string` |  |
| `created_at` | `number` | epoch milliseconds |
| `domain` | `string` | Custom hostname that you own, such as `ai.example.com`. |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `hostname` | `string` | Custom hostname that you own, such as `ai.example.com`. |
| `id` | `string` |  |
| `minTLS` | `string` |  |
| `modified_at` | `number` | epoch milliseconds |
| `ssl_hostname_id` | `string` |  |
| `status` | `string` |  |
| `zone_id` | `string` | ID of the Cloudflare zone that contains the custom hostname. |

#### Example: Load

```lua
local ai_gateway_custom_domain, err = client:AiGatewayCustomDomain():load({ id = "ai_gateway_custom_domain_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### Example: List

```lua
local ai_gateway_custom_domains, err = client:AiGatewayCustomDomain():list()
```

#### Example: Create

```lua
local ai_gateway_custom_domain, err = client:AiGatewayCustomDomain():create({
  account_id = "example_account_id", -- string
  gateway_id = "example_gateway_id", -- string
  cname_target = "example_cname_target", -- string
  created_at = 1, -- number
  domain = "example_domain", -- string
  hostname = "example_hostname", -- string
  modified_at = 1, -- number
  ssl_hostname_id = "example_ssl_hostname_id", -- string
  status = "example_status", -- string
  zone_id = "example_zone_id", -- string
})
```


### AiGatewayCustomProvider

Create an instance: `local ai_gateway_custom_provider = client:AiGatewayCustomProvider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_url` | `string` |  |
| `beta` | `boolean` |  |
| `created_at` | `string` |  |
| `curl_example` | `string` |  |
| `description` | `string` |  |
| `enable` | `boolean` |  |
| `headers` | `string` | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `id` | `string` |  |
| `js_example` | `string` |  |
| `link` | `string` |  |
| `logo` | `string` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `position` | `number` |  |
| `slug` | `string` |  |

#### Example: Load

```lua
local ai_gateway_custom_provider, err = client:AiGatewayCustomProvider():load({ id = "ai_gateway_custom_provider_id", account_id = "account_id" })
```

#### Example: List

```lua
local ai_gateway_custom_providers, err = client:AiGatewayCustomProvider():list()
```

#### Example: Create

```lua
local ai_gateway_custom_provider, err = client:AiGatewayCustomProvider():create({
  account_id = "example_account_id", -- string
  base_url = "example_base_url", -- string
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  modified_at = "example_modified_at", -- string
  name = "example_name", -- string
  slug = "example_slug", -- string
})
```


### AiGatewayCustomProviderCost

Create an instance: `local ai_gateway_custom_provider_cost = client:AiGatewayCustomProviderCost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_provider_id` | `string` | ID of the custom provider that the pricing rule applies to. |
| `changed_by` | `string` |  |
| `cost_in` | `number` |  |
| `cost_out` | `number` |  |
| `cost_type` | `string` |  |
| `created_at` | `string` |  |
| `enable` | `boolean` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `model_rule` | `string` |  |
| `modified_at` | `string` |  |
| `token_pricing` | `string` |  |
| `weight` | `number` |  |

#### Example: Load

```lua
local ai_gateway_custom_provider_cost, err = client:AiGatewayCustomProviderCost():load({ id = "ai_gateway_custom_provider_cost_id", account_id = "account_id" })
```

#### Example: List

```lua
local ai_gateway_custom_provider_costs, err = client:AiGatewayCustomProviderCost():list()
```

#### Example: Create

```lua
local ai_gateway_custom_provider_cost, err = client:AiGatewayCustomProviderCost():create({
  account_id = "example_account_id", -- string
  account_provider_id = "example_account_provider_id", -- string
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  model = "example_model", -- string
  modified_at = "example_modified_at", -- string
})
```


### AiGatewayDataset

Create an instance: `local ai_gateway_dataset = client:AiGatewayDataset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `enable` | `boolean` |  |
| `filters` | `table` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```lua
local ai_gateway_dataset, err = client:AiGatewayDataset():load({ id = "ai_gateway_dataset_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### Example: List

```lua
local ai_gateway_datasets, err = client:AiGatewayDataset():list()
```

#### Example: Create

```lua
local ai_gateway_dataset, err = client:AiGatewayDataset():create({
  account_id = "example_account_id", -- string
  gateway_id = "example_gateway_id", -- string
  created_at = "example_created_at", -- string
  enable = true, -- boolean
  filters = {}, -- table
  id = "example_id", -- string
  modified_at = "example_modified_at", -- string
  name = "example_name", -- string
})
```


### AiGatewayDynamicRoute

Create an instance: `local ai_gateway_dynamic_route = client:AiGatewayDynamicRoute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_tag` | `string` |  |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `data` | `string` |  |
| `deployment` | `table` |  |
| `deployments` | `table` |  |
| `elements` | `table` |  |
| `gateway_id` | `string` |  |
| `id` | `string` |  |
| `is_valid` | `boolean` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `order_by` | `string` |  |
| `order_by_direction` | `string` |  |
| `page` | `number` |  |
| `per_page` | `number` |  |
| `routes` | `table` |  |
| `version` | `table` |  |
| `version_id` | `string` |  |
| `versions` | `table` |  |

#### Example: Load

```lua
local ai_gateway_dynamic_route, err = client:AiGatewayDynamicRoute():load({ id = "ai_gateway_dynamic_route_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### Example: Create

```lua
local ai_gateway_dynamic_route, err = client:AiGatewayDynamicRoute():create({
  account_id = "example_account_id", -- string
  gateway_id = "example_gateway_id", -- string
  account_tag = "example_account_tag", -- string
  active = true, -- boolean
  created_at = "example_created_at", -- string
  data = "example_data", -- string
  deployment = {}, -- table
  deployments = {}, -- table
  elements = {}, -- table
  id = "example_id", -- string
  modified_at = "example_modified_at", -- string
  name = "example_name", -- string
  order_by = "example_order_by", -- string
  order_by_direction = "example_order_by_direction", -- string
  page = 1, -- number
  per_page = 1, -- number
  routes = {}, -- table
  version = {}, -- table
  version_id = "example_version_id", -- string
  versions = {}, -- table
})
```


### AiGatewayEvaluation

Create an instance: `local ai_gateway_evaluation = client:AiGatewayEvaluation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `dataset_ids` | `table` |  |
| `datasets` | `table` |  |
| `description` | `string` |  |
| `enable` | `boolean` |  |
| `evaluation_type_ids` | `table` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `mandatory` | `boolean` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `processed` | `boolean` |  |
| `results` | `table` |  |
| `total_logs` | `number` |  |
| `type` | `string` |  |

#### Example: Load

```lua
local ai_gateway_evaluation, err = client:AiGatewayEvaluation():load({ id = "ai_gateway_evaluation_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### Example: List

```lua
local ai_gateway_evaluations, err = client:AiGatewayEvaluation():list()
```

#### Example: Create

```lua
local ai_gateway_evaluation, err = client:AiGatewayEvaluation():create({
  account_id = "example_account_id", -- string
  gateway_id = "example_gateway_id", -- string
  created_at = "example_created_at", -- string
  dataset_ids = {}, -- table
  datasets = {}, -- table
  description = "example_description", -- string
  enable = true, -- boolean
  evaluation_type_ids = {}, -- table
  id = "example_id", -- string
  mandatory = true, -- boolean
  modified_at = "example_modified_at", -- string
  name = "example_name", -- string
  processed = true, -- boolean
  results = {}, -- table
  total_logs = 1, -- number
  type = "example_type", -- string
})
```


### AiGatewayGateway

Create an instance: `local ai_gateway_gateway = client:AiGatewayGateway(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authentication` | `boolean` |  |
| `byok_only` | `boolean` | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `cache_invalidate_on_update` | `boolean` |  |
| `cache_ttl` | `number` |  |
| `collect_logs` | `boolean` |  |
| `created_at` | `string` |  |
| `dlp` | `any` |  |
| `guardrails` | `table` |  |
| `id` | `string` | Unique identifier of the AI Gateway within the account. |
| `is_default` | `boolean` |  |
| `log_classification` | `boolean` |  |
| `log_management` | `number` |  |
| `log_management_strategy` | `string` |  |
| `logpush` | `boolean` |  |
| `logpush_public_key` | `string` |  |
| `modified_at` | `string` |  |
| `otel` | `table` |  |
| `rate_limiting_interval` | `number` |  |
| `rate_limiting_limit` | `number` |  |
| `rate_limiting_technique` | `string` |  |
| `result` | `string` |  |
| `retry_backoff` | `string` | Backoff strategy for retry delays |
| `retry_delay` | `number` | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `number` | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `table` |  |
| `store_id` | `string` |  |
| `stripe` | `table` |  |
| `success` | `boolean` |  |
| `workers_ai_billing_mode` | `string` | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `boolean` |  |

#### Example: Load

```lua
local ai_gateway_gateway, err = client:AiGatewayGateway():load({ id = "ai_gateway_gateway_id", account_id = "account_id" })
```

#### Example: List

```lua
local ai_gateway_gateways, err = client:AiGatewayGateway():list()
```

#### Example: Create

```lua
local ai_gateway_gateway, err = client:AiGatewayGateway():create({
  account_id = "example_account_id", -- string
  cache_invalidate_on_update = true, -- boolean
  cache_ttl = 1, -- number
  collect_logs = true, -- boolean
  created_at = "example_created_at", -- string
  guardrails = {}, -- table
  id = "example_id", -- string
  modified_at = "example_modified_at", -- string
  rate_limiting_interval = 1, -- number
  rate_limiting_limit = 1, -- number
  result = "example_result", -- string
  stripe = {}, -- table
  success = true, -- boolean
})
```


### AiGatewayLog

Create an instance: `local ai_gateway_log = client:AiGatewayLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cached` | `boolean` |  |
| `cost` | `number` |  |
| `created_at` | `string` |  |
| `custom_cost` | `boolean` |  |
| `duration` | `number` |  |
| `feedback` | `number` |  |
| `id` | `string` |  |
| `metadata` | `string` |  |
| `model` | `string` |  |
| `model_type` | `string` |  |
| `path` | `string` |  |
| `provider` | `string` |  |
| `request_content_type` | `string` |  |
| `request_head` | `string` |  |
| `request_head_complete` | `boolean` |  |
| `request_size` | `number` |  |
| `request_type` | `string` |  |
| `response_content_type` | `string` |  |
| `response_head` | `string` |  |
| `response_head_complete` | `boolean` |  |
| `response_size` | `number` |  |
| `score` | `number` |  |
| `status_code` | `number` |  |
| `step` | `number` |  |
| `success` | `boolean` |  |
| `tokens_in` | `number` |  |
| `tokens_out` | `number` |  |

#### Example: Load

```lua
local ai_gateway_log, err = client:AiGatewayLog():load({ id = "ai_gateway_log_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### Example: List

```lua
local ai_gateway_logs, err = client:AiGatewayLog():list()
```


### AiGatewayProviderConfig

Create an instance: `local ai_gateway_provider_config = client:AiGatewayProviderConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` |  |
| `default_config` | `boolean` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `modified_at` | `string` |  |
| `provider_slug` | `string` |  |
| `rate_limit` | `number` |  |
| `rate_limit_period` | `number` |  |
| `secret` | `string` | Provider API key to store in the Secrets Store configured on the gateway. |
| `secret_id` | `string` |  |
| `secret_preview` | `string` |  |

#### Example: List

```lua
local ai_gateway_provider_configs, err = client:AiGatewayProviderConfig():list()
```

#### Example: Create

```lua
local ai_gateway_provider_config, err = client:AiGatewayProviderConfig():create({
  account_id = "example_account_id", -- string
  gateway_id = "example_gateway_id", -- string
  alias = "example_alias", -- string
  default_config = true, -- boolean
  id = "example_id", -- string
  modified_at = "example_modified_at", -- string
  provider_slug = "example_provider_slug", -- string
  secret_id = "example_secret_id", -- string
  secret_preview = "example_secret_preview", -- string
})
```


### AiSearchAccountSearch

Create an instance: `local ai_search_account_search = client:AiSearchAccountSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_search_options` | `table` |  |
| `choices` | `table` |  |
| `chunks` | `table` |  |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` | OpenAI-compatible message array. |
| `model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `string` |  |
| `query` | `string` | A simple text query string. |
| `query_kind` | `string` |  |
| `search_query` | `string` |  |
| `stream` | `boolean` |  |

#### Example: Create

```lua
local ai_search_account_search, err = client:AiSearchAccountSearch():create({
  account_id = "example_account_id", -- string
  ai_search_options = {}, -- table
  choices = {}, -- table
  chunks = {}, -- table
  query_kind = "example_query_kind", -- string
})
```


### AiSearchInstance

Create an instance: `local ai_search_instance = client:AiSearchInstance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_gateway_id` | `string` |  |
| `ai_search_model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `table` |  |
| `cache` | `boolean` |  |
| `cache_threshold` | `string` |  |
| `cache_ttl` | `any` | Cache entry TTL in seconds. |
| `choices` | `table` |  |
| `chunk` | `boolean` |  |
| `chunk_overlap` | `number` |  |
| `chunk_size` | `number` |  |
| `chunks` | `table` |  |
| `completed` | `number` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `custom_metadata` | `table` |  |
| `degraded` | `boolean` | True when status counts are unavailable (e.g. |
| `embedding_model` | `string` |  |
| `enable` | `boolean` |  |
| `engine` | `table` | Engine-specific metadata. |
| `engine_version` | `number` |  |
| `error` | `number` |  |
| `file_embed_errors` | `table` |  |
| `fusion_method` | `string` |  |
| `hybrid_search_enabled` | `boolean` | Deprecated — use index_method instead. |
| `id` | `string` | AI Search instance ID. |
| `index_method` | `table` | Controls which storage backends are used during indexing. |
| `index_source_errors` | `table` |  |
| `indexing_options` | `table` |  |
| `last_activity` | `string` |  |
| `max_num_results` | `number` |  |
| `messages` | `table` |  |
| `metadata` | `table` |  |
| `model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `string` |  |
| `modified_by` | `string` |  |
| `namespace` | `string` |  |
| `object` | `string` |  |
| `outdated` | `number` |  |
| `paused` | `boolean` |  |
| `public_endpoint_id` | `string` |  |
| `public_endpoint_params` | `table` |  |
| `queued` | `number` |  |
| `reranking` | `boolean` |  |
| `reranking_model` | `string` |  |
| `retrieval_options` | `table` |  |
| `rewrite_model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `boolean` |  |
| `running` | `number` |  |
| `score_threshold` | `number` |  |
| `skipped` | `number` |  |
| `source` | `string` |  |
| `source_params` | `table` |  |
| `status` | `string` |  |
| `stream` | `boolean` |  |
| `summarization` | `boolean` |  |
| `summarization_model` | `string` |  |
| `sync_interval` | `any` | Interval between automatic syncs, in seconds. |
| `system_prompt_ai_search` | `string` |  |
| `system_prompt_index_summarization` | `string` |  |
| `system_prompt_rewrite_query` | `string` |  |
| `token_id` | `string` |  |
| `type` | `string` | Source type. |

#### Example: Load

```lua
local ai_search_instance, err = client:AiSearchInstance():load({ id = "ai_search_instance_id", account_id = "account_id" })
```

#### Example: List

```lua
local ai_search_instances, err = client:AiSearchInstance():list()
```

#### Example: Create

```lua
local ai_search_instance, err = client:AiSearchInstance():create({
  account_id = "example_account_id", -- string
  choices = {}, -- table
  chunks = {}, -- table
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  index_method = {}, -- table
  messages = {}, -- table
  modified_at = "example_modified_at", -- string
})
```


### AiSearchInstancesItem

Create an instance: `local ai_search_instances_item = client:AiSearchInstancesItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `checksum` | `string` |  |
| `chunkCount` | `number` |  |
| `chunks_count` | `number` |  |
| `created_at` | `string` |  |
| `end_byte` | `number` |  |
| `error` | `string` |  |
| `errorType` | `string` |  |
| `fileKey` | `string` |  |
| `file_size` | `number` |  |
| `id` | `string` |  |
| `item` | `table` |  |
| `key` | `string` | Item key / filename. |
| `last_seen_at` | `string` |  |
| `message` | `string` |  |
| `metadata` | `table` | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `string` |  |
| `next_action` | `string` |  |
| `processingTimeMs` | `number` |  |
| `source_id` | `string` | Identifies which data source this item belongs to. |
| `start_byte` | `number` |  |
| `status` | `string` |  |
| `text` | `string` |  |
| `timestamp` | `string` |  |
| `wait_for_completion` | `boolean` | Wait for indexing to fully complete before responding. |
| `warnings` | `table` |  |

#### Example: Load

```lua
local ai_search_instances_item, err = client:AiSearchInstancesItem():load({ id = "ai_search_instances_item_id", account_id = "account_id", instance_id = "instance_id", namespace_id = "namespace_id" })
```

#### Example: List

```lua
local ai_search_instances_items, err = client:AiSearchInstancesItem():list()
```

#### Example: Create

```lua
local ai_search_instances_item, err = client:AiSearchInstancesItem():create({
  account_id = "example_account_id", -- string
  instance_id = "example_instance_id", -- string
  namespace_id = "example_namespace_id", -- string
  action = "example_action", -- string
  checksum = "example_checksum", -- string
  chunkCount = 1, -- number
  chunks_count = 1, -- number
  created_at = "example_created_at", -- string
  errorType = "example_errorType", -- string
  fileKey = "example_fileKey", -- string
  file_size = 1, -- number
  id = "example_id", -- string
  item = {}, -- table
  key = "example_key", -- string
  last_seen_at = "example_last_seen_at", -- string
  message = "example_message", -- string
  metadata = {}, -- table
  namespace = "example_namespace", -- string
  next_action = "example_next_action", -- string
  processingTimeMs = 1, -- number
  source_id = "example_source_id", -- string
  status = "example_status", -- string
  text = "example_text", -- string
  timestamp = "example_timestamp", -- string
})
```


### AiSearchInstancesJob

Create an instance: `local ai_search_instances_job = client:AiSearchInstancesJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `created_at` | `number` |  |
| `description` | `string` |  |
| `end_reason` | `string` |  |
| `ended_at` | `string` |  |
| `id` | `string` |  |
| `last_seen_at` | `string` |  |
| `message` | `string` |  |
| `message_type` | `number` |  |
| `source` | `string` |  |
| `started_at` | `string` |  |

#### Example: Load

```lua
local ai_search_instances_job, err = client:AiSearchInstancesJob():load({ id = "ai_search_instances_job_id", account_id = "account_id", instance_id = "instance_id" })
```

#### Example: List

```lua
local ai_search_instances_jobs, err = client:AiSearchInstancesJob():list()
```

#### Example: Create

```lua
local ai_search_instances_job, err = client:AiSearchInstancesJob():create({
  account_id = "example_account_id", -- string
  instance_id = "example_instance_id", -- string
  action = "example_action", -- string
  created_at = 1, -- number
  id = "example_id", -- string
  message = "example_message", -- string
  message_type = 1, -- number
  source = "example_source", -- string
})
```


### AiSearchNamespace

Create an instance: `local ai_search_namespace = client:AiSearchNamespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` | Optional description for the namespace. |
| `id` | `string` |  |
| `name` | `string` |  |
| `new_namespace` | `string` | Target namespace to move the instance into. |
| `public_endpoint_id` | `string` |  |
| `public_endpoint_params` | `table` |  |

#### Example: Load

```lua
local ai_search_namespace, err = client:AiSearchNamespace():load({ id = "ai_search_namespace_id", account_id = "account_id" })
```

#### Example: List

```lua
local ai_search_namespaces, err = client:AiSearchNamespace():list()
```

#### Example: Create

```lua
local ai_search_namespace, err = client:AiSearchNamespace():create({
  account_id = "example_account_id", -- string
  created_at = "example_created_at", -- string
  name = "example_name", -- string
  new_namespace = "example_new_namespace", -- string
})
```


### AiSearchToken

Create an instance: `local ai_search_token = client:AiSearchToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cf_api_id` | `string` |  |
| `cf_api_key` | `string` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `enabled` | `boolean` |  |
| `id` | `string` |  |
| `legacy` | `boolean` |  |
| `modified_at` | `string` |  |
| `modified_by` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```lua
local ai_search_token, err = client:AiSearchToken():load({ id = "ai_search_token_id", account_id = "account_id" })
```

#### Example: List

```lua
local ai_search_tokens, err = client:AiSearchToken():list()
```

#### Example: Create

```lua
local ai_search_token, err = client:AiSearchToken():create({
  account_id = "example_account_id", -- string
  cf_api_id = "example_cf_api_id", -- string
  cf_api_key = "example_cf_api_key", -- string
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  modified_at = "example_modified_at", -- string
  name = "example_name", -- string
})
```


### AigBillingCreateTopup

Create an instance: `local aig_billing_create_topup = client:AigBillingCreateTopup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Top-up amount in cents (min 1000). |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `payment_method_id` | `string` | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local aig_billing_create_topup, err = client:AigBillingCreateTopup():create({
  account_id = "example_account_id", -- string
  amount = 1, -- number
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
})
```


### AigBillingDeleteSpendingLimit

Create an instance: `local aig_billing_delete_spending_limit = client:AigBillingDeleteSpendingLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingDeleteTopupConfig

Create an instance: `local aig_billing_delete_topup_config = client:AigBillingDeleteTopupConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingGetCreditBalance

Create an instance: `local aig_billing_get_credit_balance = client:AigBillingGetCreditBalance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local aig_billing_get_credit_balances, err = client:AigBillingGetCreditBalance():list()
```


### AigBillingGetInvoiceHistory

Create an instance: `local aig_billing_get_invoice_history = client:AigBillingGetInvoiceHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local aig_billing_get_invoice_historys, err = client:AigBillingGetInvoiceHistory():list()
```


### AigBillingGetInvoicePreview

Create an instance: `local aig_billing_get_invoice_preview = client:AigBillingGetInvoicePreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local aig_billing_get_invoice_previews, err = client:AigBillingGetInvoicePreview():list()
```


### AigBillingGetSpendingLimit

Create an instance: `local aig_billing_get_spending_limit = client:AigBillingGetSpendingLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local aig_billing_get_spending_limits, err = client:AigBillingGetSpendingLimit():list()
```


### AigBillingGetTopupConfig

Create an instance: `local aig_billing_get_topup_config = client:AigBillingGetTopupConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local aig_billing_get_topup_configs, err = client:AigBillingGetTopupConfig():list()
```


### AigBillingGetTopupEligibility

Create an instance: `local aig_billing_get_topup_eligibility = client:AigBillingGetTopupEligibility(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `payment_methods` | `table` | Account-level payment methods, forwarded by the dashboard. |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local aig_billing_get_topup_eligibility, err = client:AigBillingGetTopupEligibility():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
})
```


### AigBillingGetTopupLimit

Create an instance: `local aig_billing_get_topup_limit = client:AigBillingGetTopupLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local aig_billing_get_topup_limits, err = client:AigBillingGetTopupLimit():list()
```


### AigBillingGetUsageHistory

Create an instance: `local aig_billing_get_usage_history = client:AigBillingGetUsageHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local aig_billing_get_usage_historys, err = client:AigBillingGetUsageHistory():list()
```


### AigBillingSetSpendingLimit

Create an instance: `local aig_billing_set_spending_limit = client:AigBillingSetSpendingLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Spending limit amount in cents (min 100). |
| `duration` | `string` | Spending limit duration. |
| `strategy` | `string` | Spending limit strategy. |

#### Example: Create

```lua
local aig_billing_set_spending_limit, err = client:AigBillingSetSpendingLimit():create({
  account_id = "example_account_id", -- string
  amount = 1, -- number
  duration = "example_duration", -- string
  strategy = "example_strategy", -- string
})
```


### AigBillingSetTopupConfig

Create an instance: `local aig_billing_set_topup_config = client:AigBillingSetTopupConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Auto top-up amount in cents (min 1000). |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |
| `threshold` | `number` | Balance threshold in cents that triggers auto top-up (min 500). |

#### Example: Create

```lua
local aig_billing_set_topup_config, err = client:AigBillingSetTopupConfig():create({
  account_id = "example_account_id", -- string
  amount = 1, -- number
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
  threshold = 1, -- number
})
```


### AigBillingTopupStatus

Create an instance: `local aig_billing_topup_status = client:AigBillingTopupStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `payment_intent_id` | `string` | Stripe invoice ID to check status for. |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: Create

```lua
local aig_billing_topup_status, err = client:AigBillingTopupStatus():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  payment_intent_id = "example_payment_intent_id", -- string
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
})
```


### AutoRagJob

Create an instance: `local auto_rag_job = client:AutoRagJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` |  |
| `end_reason` | `string` |  |
| `ended_at` | `string` |  |
| `id` | `string` |  |
| `last_seen_at` | `string` |  |
| `message` | `string` |  |
| `message_type` | `number` |  |
| `source` | `string` |  |
| `started_at` | `string` |  |

#### Example: Load

```lua
local auto_rag_job, err = client:AutoRagJob():load({ id = "auto_rag_job_id", account_id = "account_id", rag_id = "rag_id" })
```

#### Example: List

```lua
local auto_rag_jobs, err = client:AutoRagJob():list()
```


### AutoRagRag

Create an instance: `local auto_rag_rag = client:AutoRagRag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error` | `string` |  |
| `job_id` | `string` |  |
| `key` | `string` |  |

#### Example: List

```lua
local auto_rag_rags, err = client:AutoRagRag():list()
```


### AutoRagRagSearch

Create an instance: `local auto_rag_rag_search = client:AutoRagRagSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `filters` | `any` |  |
| `has_more` | `boolean` |  |
| `max_num_results` | `number` |  |
| `model` | `any` |  |
| `next_page` | `string` |  |
| `object` | `string` |  |
| `query` | `string` |  |
| `ranking_options` | `table` |  |
| `reranking` | `table` |  |
| `response` | `string` |  |
| `rewrite_query` | `boolean` |  |
| `search_query` | `string` |  |
| `stream` | `boolean` |  |
| `system_prompt` | `string` |  |

#### Example: Create

```lua
local auto_rag_rag_search, err = client:AutoRagRagSearch():create({
  account_id = "example_account_id", -- string
  rag_id = "example_rag_id", -- string
  query = "example_query", -- string
  response = "example_response", -- string
  search_query = "example_search_query", -- string
})
```


### FinetuneAsset

Create an instance: `local finetune_asset = client:FinetuneAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file_name` | `string` |  |
| `file_url` | `string` |  |
| `id` | `string` |  |

#### Example: Load

```lua
local finetune_asset, err = client:FinetuneAsset():load({ id = "finetune_asset_id", account_id = "account_id", finetune_id = "finetune_id" })
```


### Vectorize

Create an instance: `local vectorize = client:Vectorize(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `any` |  |
| `description` | `string` | Specifies the description of the index. |
| `errors` | `table` |  |
| `ids` | `table` | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `string` | Specifies the type of metadata property to index. |
| `messages` | `table` |  |
| `name` | `string` |  |
| `propertyName` | `string` | Specifies the metadata property to index. |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```lua
local vectorize, err = client:Vectorize():load({ account_id = "account_id" })
```

#### Example: List

```lua
local vectorizes, err = client:Vectorize():list()
```

#### Example: Create

```lua
local vectorize, err = client:Vectorize():create({
  account_id = "example_account_id", -- string
  config = "example_config", -- any
  errors = {}, -- table
  indexType = "example_indexType", -- string
  messages = {}, -- table
  name = "example_name", -- string
  propertyName = "example_propertyName", -- string
  result = {}, -- table
  success = true, -- boolean
})
```


### VectorizeBetaDeprecated

Create an instance: `local vectorize_beta__deprecated = client:VectorizeBetaDeprecated(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `any` |  |
| `description` | `string` | Specifies the description of the index. |
| `errors` | `table` |  |
| `ids` | `table` | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `table` |  |
| `name` | `string` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```lua
local vectorize_beta__deprecated, err = client:VectorizeBetaDeprecated():load({ account_id = "account_id", index_name = "index_name" })
```

#### Example: List

```lua
local vectorize_beta__deprecateds, err = client:VectorizeBetaDeprecated():list()
```

#### Example: Create

```lua
local vectorize_beta__deprecated, err = client:VectorizeBetaDeprecated():create({
  account_id = "example_account_id", -- string
  config = "example_config", -- any
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  success = true, -- boolean
})
```


### WorkersAi

Create an instance: `local workers_ai = client:WorkersAi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `extension` | `string` |  |
| `input` | `table` | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `table` |  |
| `mimeType` | `string` |  |
| `model` | `string` | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `table` |  |
| `output` | `table` |  |
| `result` | `table` | Model-specific output. |
| `success` | `boolean` |  |

#### Example: Load

```lua
local workers_ai, err = client:WorkersAi():load({ account_id = "account_id" })
```

#### Example: List

```lua
local workers_ais, err = client:WorkersAi():list()
```

#### Example: Create

```lua
local workers_ai, err = client:WorkersAi():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  extension = "example_extension", -- string
  input = {}, -- table
  messages = {}, -- table
  mimeType = "example_mimeType", -- string
  model = "example_model", -- string
  output = {}, -- table
  success = true, -- boolean
})
```


### WorkersAiFinetune

Create an instance: `local workers_ai_finetune = client:WorkersAiFinetune(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `public` | `boolean` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local workers_ai_finetune, err = client:WorkersAiFinetune():load({ account_id = "account_id" })
```

#### Example: List

```lua
local workers_ai_finetunes, err = client:WorkersAiFinetune():list()
```

#### Example: Create

```lua
local workers_ai_finetune, err = client:WorkersAiFinetune():create({
  account_id = "example_account_id", -- string
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  model = "example_model", -- string
  modified_at = "example_modified_at", -- string
  name = "example_name", -- string
  public = true, -- boolean
  success = true, -- boolean
})
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-ai_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-ai_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local aisearchinstancesjob = client:AiSearchInstancesJob()
aisearchinstancesjob:list()

-- aisearchinstancesjob:data_get() now returns the aisearchinstancesjob data from the last list
-- aisearchinstancesjob:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
