# CloudflareAi Ruby SDK



The Ruby SDK for the CloudflareAi API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Account` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-ai-sdk/releases](https://github.com/voxgig-sdk/cloudflare-ai-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CloudflareAi_sdk"

client = CloudflareAiSDK.new({
  "apikey" => ENV["CLOUDFLARE_AI_APIKEY"],
})
```

### 3. Load an aigatewaycustomdomain

AiGatewayCustomDomain is nested under account, so provide the `account_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the AiGatewayCustomDomain record (raises on error).
  aigatewaycustomdomain = client.AiGatewayCustomDomain.load({ "account_id" => "example_account_id", "gateway_id" => "example_gateway_id", "id" => "example_id" })
  puts aigatewaycustomdomain
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# Update
client.Account.update({ "id" => "example_id" })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  aisearchinstancesjobs = client.AiSearchInstancesJob.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = CloudflareAiSDK.test({
  "entity" => { "aisearchinstancesjob" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
aisearchinstancesjob = client.AiSearchInstancesJob.list()
puts aisearchinstancesjob
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CloudflareAiSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CloudflareAiSDK

```ruby
require_relative "CloudflareAi_sdk"
client = CloudflareAiSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CloudflareAiSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareAiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CloudflareAiError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `account = client.Account`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Account record (raises on error).
account = client.Account.load({ "id" => "account_id" })
```


### AiGateway

Create an instance: `ai_gateway = client.AiGateway`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byokAlias` | `String` |  |
| `items` | `Array` |  |
| `limit` | `Integer` |  |
| `metadata` | `Hash` |  |
| `options` | `Hash` |  |
| `provider` | `String` |  |
| `query` | `String` |  |

#### Example: Create

```ruby
ai_gateway = client.AiGateway.create({
  "account_id" => "example_account_id", # String
  "items" => [], # Array
  "metadata" => {}, # Hash
  "options" => {}, # Hash
  "query" => "example_query", # String
})
```


### AiGatewayCustomDomain

Create an instance: `ai_gateway_custom_domain = client.AiGatewayCustomDomain`

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
| `cname_target` | `String` |  |
| `created_at` | `Integer` | epoch milliseconds |
| `domain` | `String` | Custom hostname that you own, such as `ai.example.com`. |
| `gateway_id` | `String` | Unique identifier of the AI Gateway within the account. |
| `hostname` | `String` | Custom hostname that you own, such as `ai.example.com`. |
| `id` | `String` |  |
| `minTLS` | `String` |  |
| `modified_at` | `Integer` | epoch milliseconds |
| `ssl_hostname_id` | `String` |  |
| `status` | `String` |  |
| `zone_id` | `String` | ID of the Cloudflare zone that contains the custom hostname. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiGatewayCustomDomain record (raises on error).
ai_gateway_custom_domain = client.AiGatewayCustomDomain.load({ "id" => "ai_gateway_custom_domain_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### Example: List

```ruby
# list returns an Array of AiGatewayCustomDomain records (raises on error).
ai_gateway_custom_domains = client.AiGatewayCustomDomain.list
```

#### Example: Create

```ruby
ai_gateway_custom_domain = client.AiGatewayCustomDomain.create({
  "account_id" => "example_account_id", # String
  "gateway_id" => "example_gateway_id", # String
  "cname_target" => "example_cname_target", # String
  "created_at" => 1, # Integer
  "domain" => "example_domain", # String
  "hostname" => "example_hostname", # String
  "modified_at" => 1, # Integer
  "ssl_hostname_id" => "example_ssl_hostname_id", # String
  "status" => "example_status", # String
  "zone_id" => "example_zone_id", # String
})
```


### AiGatewayCustomProvider

Create an instance: `ai_gateway_custom_provider = client.AiGatewayCustomProvider`

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
| `base_url` | `String` |  |
| `beta` | `Boolean` |  |
| `created_at` | `String` |  |
| `curl_example` | `String` |  |
| `description` | `String` |  |
| `enable` | `Boolean` |  |
| `headers` | `String` | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `id` | `String` |  |
| `js_example` | `String` |  |
| `link` | `String` |  |
| `logo` | `String` |  |
| `modified_at` | `String` |  |
| `name` | `String` |  |
| `position` | `Integer` |  |
| `slug` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiGatewayCustomProvider record (raises on error).
ai_gateway_custom_provider = client.AiGatewayCustomProvider.load({ "id" => "ai_gateway_custom_provider_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of AiGatewayCustomProvider records (raises on error).
ai_gateway_custom_providers = client.AiGatewayCustomProvider.list
```

#### Example: Create

```ruby
ai_gateway_custom_provider = client.AiGatewayCustomProvider.create({
  "account_id" => "example_account_id", # String
  "base_url" => "example_base_url", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "modified_at" => "example_modified_at", # String
  "name" => "example_name", # String
  "slug" => "example_slug", # String
})
```


### AiGatewayCustomProviderCost

Create an instance: `ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost`

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
| `account_provider_id` | `String` | ID of the custom provider that the pricing rule applies to. |
| `changed_by` | `String` |  |
| `cost_in` | `Float` |  |
| `cost_out` | `Float` |  |
| `cost_type` | `String` |  |
| `created_at` | `String` |  |
| `enable` | `Boolean` |  |
| `id` | `String` |  |
| `model` | `String` |  |
| `model_rule` | `String` |  |
| `modified_at` | `String` |  |
| `token_pricing` | `String` |  |
| `weight` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiGatewayCustomProviderCost record (raises on error).
ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost.load({ "id" => "ai_gateway_custom_provider_cost_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of AiGatewayCustomProviderCost records (raises on error).
ai_gateway_custom_provider_costs = client.AiGatewayCustomProviderCost.list
```

#### Example: Create

```ruby
ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost.create({
  "account_id" => "example_account_id", # String
  "account_provider_id" => "example_account_provider_id", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "model" => "example_model", # String
  "modified_at" => "example_modified_at", # String
})
```


### AiGatewayDataset

Create an instance: `ai_gateway_dataset = client.AiGatewayDataset`

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
| `created_at` | `String` |  |
| `enable` | `Boolean` |  |
| `filters` | `Array` |  |
| `gateway_id` | `String` | Unique identifier of the AI Gateway within the account. |
| `id` | `String` |  |
| `modified_at` | `String` |  |
| `name` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiGatewayDataset record (raises on error).
ai_gateway_dataset = client.AiGatewayDataset.load({ "id" => "ai_gateway_dataset_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### Example: List

```ruby
# list returns an Array of AiGatewayDataset records (raises on error).
ai_gateway_datasets = client.AiGatewayDataset.list
```

#### Example: Create

```ruby
ai_gateway_dataset = client.AiGatewayDataset.create({
  "account_id" => "example_account_id", # String
  "gateway_id" => "example_gateway_id", # String
  "created_at" => "example_created_at", # String
  "enable" => true, # Boolean
  "filters" => [], # Array
  "id" => "example_id", # String
  "modified_at" => "example_modified_at", # String
  "name" => "example_name", # String
})
```


### AiGatewayDynamicRoute

Create an instance: `ai_gateway_dynamic_route = client.AiGatewayDynamicRoute`

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
| `account_tag` | `String` |  |
| `active` | `Boolean` |  |
| `created_at` | `String` |  |
| `data` | `String` |  |
| `deployment` | `Hash` |  |
| `deployments` | `Array` |  |
| `elements` | `Array` |  |
| `gateway_id` | `String` |  |
| `id` | `String` |  |
| `is_valid` | `Boolean` |  |
| `modified_at` | `String` |  |
| `name` | `String` |  |
| `order_by` | `String` |  |
| `order_by_direction` | `String` |  |
| `page` | `Float` |  |
| `per_page` | `Float` |  |
| `routes` | `Array` |  |
| `version` | `Hash` |  |
| `version_id` | `String` |  |
| `versions` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiGatewayDynamicRoute record (raises on error).
ai_gateway_dynamic_route = client.AiGatewayDynamicRoute.load({ "id" => "ai_gateway_dynamic_route_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### Example: Create

```ruby
ai_gateway_dynamic_route = client.AiGatewayDynamicRoute.create({
  "account_id" => "example_account_id", # String
  "gateway_id" => "example_gateway_id", # String
  "account_tag" => "example_account_tag", # String
  "active" => true, # Boolean
  "created_at" => "example_created_at", # String
  "data" => "example_data", # String
  "deployment" => {}, # Hash
  "deployments" => [], # Array
  "elements" => [], # Array
  "id" => "example_id", # String
  "modified_at" => "example_modified_at", # String
  "name" => "example_name", # String
  "order_by" => "example_order_by", # String
  "order_by_direction" => "example_order_by_direction", # String
  "page" => 1, # Float
  "per_page" => 1, # Float
  "routes" => [], # Array
  "version" => {}, # Hash
  "version_id" => "example_version_id", # String
  "versions" => [], # Array
})
```


### AiGatewayEvaluation

Create an instance: `ai_gateway_evaluation = client.AiGatewayEvaluation`

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
| `created_at` | `String` |  |
| `dataset_ids` | `Array` |  |
| `datasets` | `Array` |  |
| `description` | `String` |  |
| `enable` | `Boolean` |  |
| `evaluation_type_ids` | `Array` |  |
| `gateway_id` | `String` | Unique identifier of the AI Gateway within the account. |
| `id` | `String` |  |
| `mandatory` | `Boolean` |  |
| `modified_at` | `String` |  |
| `name` | `String` |  |
| `processed` | `Boolean` |  |
| `results` | `Array` |  |
| `total_logs` | `Float` |  |
| `type` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiGatewayEvaluation record (raises on error).
ai_gateway_evaluation = client.AiGatewayEvaluation.load({ "id" => "ai_gateway_evaluation_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### Example: List

```ruby
# list returns an Array of AiGatewayEvaluation records (raises on error).
ai_gateway_evaluations = client.AiGatewayEvaluation.list
```

#### Example: Create

```ruby
ai_gateway_evaluation = client.AiGatewayEvaluation.create({
  "account_id" => "example_account_id", # String
  "gateway_id" => "example_gateway_id", # String
  "created_at" => "example_created_at", # String
  "dataset_ids" => [], # Array
  "datasets" => [], # Array
  "description" => "example_description", # String
  "enable" => true, # Boolean
  "evaluation_type_ids" => [], # Array
  "id" => "example_id", # String
  "mandatory" => true, # Boolean
  "modified_at" => "example_modified_at", # String
  "name" => "example_name", # String
  "processed" => true, # Boolean
  "results" => [], # Array
  "total_logs" => 1, # Float
  "type" => "example_type", # String
})
```


### AiGatewayGateway

Create an instance: `ai_gateway_gateway = client.AiGatewayGateway`

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
| `authentication` | `Boolean` |  |
| `byok_only` | `Boolean` | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `cache_invalidate_on_update` | `Boolean` |  |
| `cache_ttl` | `Integer` |  |
| `collect_logs` | `Boolean` |  |
| `created_at` | `String` |  |
| `dlp` | `Object` |  |
| `guardrails` | `Hash` |  |
| `id` | `String` | Unique identifier of the AI Gateway within the account. |
| `is_default` | `Boolean` |  |
| `log_classification` | `Boolean` |  |
| `log_management` | `Integer` |  |
| `log_management_strategy` | `String` |  |
| `logpush` | `Boolean` |  |
| `logpush_public_key` | `String` |  |
| `modified_at` | `String` |  |
| `otel` | `Array` |  |
| `rate_limiting_interval` | `Integer` |  |
| `rate_limiting_limit` | `Integer` |  |
| `rate_limiting_technique` | `String` |  |
| `result` | `String` |  |
| `retry_backoff` | `String` | Backoff strategy for retry delays |
| `retry_delay` | `Integer` | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `Integer` | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `Hash` |  |
| `store_id` | `String` |  |
| `stripe` | `Hash` |  |
| `success` | `Boolean` |  |
| `workers_ai_billing_mode` | `String` | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiGatewayGateway record (raises on error).
ai_gateway_gateway = client.AiGatewayGateway.load({ "id" => "ai_gateway_gateway_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of AiGatewayGateway records (raises on error).
ai_gateway_gateways = client.AiGatewayGateway.list
```

#### Example: Create

```ruby
ai_gateway_gateway = client.AiGatewayGateway.create({
  "account_id" => "example_account_id", # String
  "cache_invalidate_on_update" => true, # Boolean
  "cache_ttl" => 1, # Integer
  "collect_logs" => true, # Boolean
  "created_at" => "example_created_at", # String
  "guardrails" => {}, # Hash
  "id" => "example_id", # String
  "modified_at" => "example_modified_at", # String
  "rate_limiting_interval" => 1, # Integer
  "rate_limiting_limit" => 1, # Integer
  "result" => "example_result", # String
  "stripe" => {}, # Hash
  "success" => true, # Boolean
})
```


### AiGatewayLog

Create an instance: `ai_gateway_log = client.AiGatewayLog`

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
| `cached` | `Boolean` |  |
| `cost` | `Float` |  |
| `created_at` | `String` |  |
| `custom_cost` | `Boolean` |  |
| `duration` | `Integer` |  |
| `feedback` | `Float` |  |
| `id` | `String` |  |
| `metadata` | `String` |  |
| `model` | `String` |  |
| `model_type` | `String` |  |
| `path` | `String` |  |
| `provider` | `String` |  |
| `request_content_type` | `String` |  |
| `request_head` | `String` |  |
| `request_head_complete` | `Boolean` |  |
| `request_size` | `Integer` |  |
| `request_type` | `String` |  |
| `response_content_type` | `String` |  |
| `response_head` | `String` |  |
| `response_head_complete` | `Boolean` |  |
| `response_size` | `Integer` |  |
| `score` | `Float` |  |
| `status_code` | `Integer` |  |
| `step` | `Integer` |  |
| `success` | `Boolean` |  |
| `tokens_in` | `Integer` |  |
| `tokens_out` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiGatewayLog record (raises on error).
ai_gateway_log = client.AiGatewayLog.load({ "id" => "ai_gateway_log_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### Example: List

```ruby
# list returns an Array of AiGatewayLog records (raises on error).
ai_gateway_logs = client.AiGatewayLog.list
```


### AiGatewayProviderConfig

Create an instance: `ai_gateway_provider_config = client.AiGatewayProviderConfig`

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
| `alias` | `String` |  |
| `default_config` | `Boolean` |  |
| `gateway_id` | `String` | Unique identifier of the AI Gateway within the account. |
| `id` | `String` |  |
| `modified_at` | `String` |  |
| `provider_slug` | `String` |  |
| `rate_limit` | `Float` |  |
| `rate_limit_period` | `Float` |  |
| `secret` | `String` | Provider API key to store in the Secrets Store configured on the gateway. |
| `secret_id` | `String` |  |
| `secret_preview` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AiGatewayProviderConfig records (raises on error).
ai_gateway_provider_configs = client.AiGatewayProviderConfig.list
```

#### Example: Create

```ruby
ai_gateway_provider_config = client.AiGatewayProviderConfig.create({
  "account_id" => "example_account_id", # String
  "gateway_id" => "example_gateway_id", # String
  "alias" => "example_alias", # String
  "default_config" => true, # Boolean
  "id" => "example_id", # String
  "modified_at" => "example_modified_at", # String
  "provider_slug" => "example_provider_slug", # String
  "secret_id" => "example_secret_id", # String
  "secret_preview" => "example_secret_preview", # String
})
```


### AiSearchAccountSearch

Create an instance: `ai_search_account_search = client.AiSearchAccountSearch`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_search_options` | `Hash` |  |
| `choices` | `Array` |  |
| `chunks` | `Array` |  |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` | OpenAI-compatible message array. |
| `model` | `String` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `String` |  |
| `query` | `String` | A simple text query string. |
| `query_kind` | `String` |  |
| `search_query` | `String` |  |
| `stream` | `Boolean` |  |

#### Example: Create

```ruby
ai_search_account_search = client.AiSearchAccountSearch.create({
  "account_id" => "example_account_id", # String
  "ai_search_options" => {}, # Hash
  "choices" => [], # Array
  "chunks" => [], # Array
  "query_kind" => "example_query_kind", # String
})
```


### AiSearchInstance

Create an instance: `ai_search_instance = client.AiSearchInstance`

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
| `ai_gateway_id` | `String` |  |
| `ai_search_model` | `String` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `Hash` |  |
| `cache` | `Boolean` |  |
| `cache_threshold` | `String` |  |
| `cache_ttl` | `Object` | Cache entry TTL in seconds. |
| `choices` | `Array` |  |
| `chunk` | `Boolean` |  |
| `chunk_overlap` | `Integer` |  |
| `chunk_size` | `Integer` |  |
| `chunks` | `Array` |  |
| `completed` | `Integer` |  |
| `created_at` | `String` |  |
| `created_by` | `String` |  |
| `custom_metadata` | `Array` |  |
| `degraded` | `Boolean` | True when status counts are unavailable (e.g. |
| `embedding_model` | `String` |  |
| `enable` | `Boolean` |  |
| `engine` | `Hash` | Engine-specific metadata. |
| `engine_version` | `Float` |  |
| `error` | `Integer` |  |
| `file_embed_errors` | `Hash` |  |
| `fusion_method` | `String` |  |
| `hybrid_search_enabled` | `Boolean` | Deprecated — use index_method instead. |
| `id` | `String` | AI Search instance ID. |
| `index_method` | `Hash` | Controls which storage backends are used during indexing. |
| `index_source_errors` | `Hash` |  |
| `indexing_options` | `Hash` |  |
| `last_activity` | `String` |  |
| `max_num_results` | `Integer` |  |
| `messages` | `Array` |  |
| `metadata` | `Hash` |  |
| `model` | `String` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `String` |  |
| `modified_by` | `String` |  |
| `namespace` | `String` |  |
| `object` | `String` |  |
| `outdated` | `Integer` |  |
| `paused` | `Boolean` |  |
| `public_endpoint_id` | `String` |  |
| `public_endpoint_params` | `Hash` |  |
| `queued` | `Integer` |  |
| `reranking` | `Boolean` |  |
| `reranking_model` | `String` |  |
| `retrieval_options` | `Hash` |  |
| `rewrite_model` | `String` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `Boolean` |  |
| `running` | `Integer` |  |
| `score_threshold` | `Float` |  |
| `skipped` | `Integer` |  |
| `source` | `String` |  |
| `source_params` | `Hash` |  |
| `status` | `String` |  |
| `stream` | `Boolean` |  |
| `summarization` | `Boolean` |  |
| `summarization_model` | `String` |  |
| `sync_interval` | `Object` | Interval between automatic syncs, in seconds. |
| `system_prompt_ai_search` | `String` |  |
| `system_prompt_index_summarization` | `String` |  |
| `system_prompt_rewrite_query` | `String` |  |
| `token_id` | `String` |  |
| `type` | `String` | Source type. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiSearchInstance record (raises on error).
ai_search_instance = client.AiSearchInstance.load({ "id" => "ai_search_instance_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of AiSearchInstance records (raises on error).
ai_search_instances = client.AiSearchInstance.list
```

#### Example: Create

```ruby
ai_search_instance = client.AiSearchInstance.create({
  "account_id" => "example_account_id", # String
  "choices" => [], # Array
  "chunks" => [], # Array
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "index_method" => {}, # Hash
  "messages" => [], # Array
  "modified_at" => "example_modified_at", # String
})
```


### AiSearchInstancesItem

Create an instance: `ai_search_instances_item = client.AiSearchInstancesItem`

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
| `action` | `String` |  |
| `checksum` | `String` |  |
| `chunkCount` | `Integer` |  |
| `chunks_count` | `Integer` |  |
| `created_at` | `String` |  |
| `end_byte` | `Float` |  |
| `error` | `String` |  |
| `errorType` | `String` |  |
| `fileKey` | `String` |  |
| `file_size` | `Float` |  |
| `id` | `String` |  |
| `item` | `Hash` |  |
| `key` | `String` | Item key / filename. |
| `last_seen_at` | `String` |  |
| `message` | `String` |  |
| `metadata` | `Hash` | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `String` |  |
| `next_action` | `String` |  |
| `processingTimeMs` | `Integer` |  |
| `source_id` | `String` | Identifies which data source this item belongs to. |
| `start_byte` | `Float` |  |
| `status` | `String` |  |
| `text` | `String` |  |
| `timestamp` | `String` |  |
| `wait_for_completion` | `Boolean` | Wait for indexing to fully complete before responding. |
| `warnings` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiSearchInstancesItem record (raises on error).
ai_search_instances_item = client.AiSearchInstancesItem.load({ "id" => "ai_search_instances_item_id", "account_id" => "account_id", "instance_id" => "instance_id", "namespace_id" => "namespace_id" })
```

#### Example: List

```ruby
# list returns an Array of AiSearchInstancesItem records (raises on error).
ai_search_instances_items = client.AiSearchInstancesItem.list
```

#### Example: Create

```ruby
ai_search_instances_item = client.AiSearchInstancesItem.create({
  "account_id" => "example_account_id", # String
  "instance_id" => "example_instance_id", # String
  "namespace_id" => "example_namespace_id", # String
  "action" => "example_action", # String
  "checksum" => "example_checksum", # String
  "chunkCount" => 1, # Integer
  "chunks_count" => 1, # Integer
  "created_at" => "example_created_at", # String
  "errorType" => "example_errorType", # String
  "fileKey" => "example_fileKey", # String
  "file_size" => 1, # Float
  "id" => "example_id", # String
  "item" => {}, # Hash
  "key" => "example_key", # String
  "last_seen_at" => "example_last_seen_at", # String
  "message" => "example_message", # String
  "metadata" => {}, # Hash
  "namespace" => "example_namespace", # String
  "next_action" => "example_next_action", # String
  "processingTimeMs" => 1, # Integer
  "source_id" => "example_source_id", # String
  "status" => "example_status", # String
  "text" => "example_text", # String
  "timestamp" => "example_timestamp", # String
})
```


### AiSearchInstancesJob

Create an instance: `ai_search_instances_job = client.AiSearchInstancesJob`

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
| `action` | `String` |  |
| `created_at` | `Float` |  |
| `description` | `String` |  |
| `end_reason` | `String` |  |
| `ended_at` | `String` |  |
| `id` | `String` |  |
| `last_seen_at` | `String` |  |
| `message` | `String` |  |
| `message_type` | `Integer` |  |
| `source` | `String` |  |
| `started_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiSearchInstancesJob record (raises on error).
ai_search_instances_job = client.AiSearchInstancesJob.load({ "id" => "ai_search_instances_job_id", "account_id" => "account_id", "instance_id" => "instance_id" })
```

#### Example: List

```ruby
# list returns an Array of AiSearchInstancesJob records (raises on error).
ai_search_instances_jobs = client.AiSearchInstancesJob.list
```

#### Example: Create

```ruby
ai_search_instances_job = client.AiSearchInstancesJob.create({
  "account_id" => "example_account_id", # String
  "instance_id" => "example_instance_id", # String
  "action" => "example_action", # String
  "created_at" => 1, # Float
  "id" => "example_id", # String
  "message" => "example_message", # String
  "message_type" => 1, # Integer
  "source" => "example_source", # String
})
```


### AiSearchNamespace

Create an instance: `ai_search_namespace = client.AiSearchNamespace`

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
| `created_at` | `String` |  |
| `description` | `String` | Optional description for the namespace. |
| `id` | `String` |  |
| `name` | `String` |  |
| `new_namespace` | `String` | Target namespace to move the instance into. |
| `public_endpoint_id` | `String` |  |
| `public_endpoint_params` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiSearchNamespace record (raises on error).
ai_search_namespace = client.AiSearchNamespace.load({ "id" => "ai_search_namespace_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of AiSearchNamespace records (raises on error).
ai_search_namespaces = client.AiSearchNamespace.list
```

#### Example: Create

```ruby
ai_search_namespace = client.AiSearchNamespace.create({
  "account_id" => "example_account_id", # String
  "created_at" => "example_created_at", # String
  "name" => "example_name", # String
  "new_namespace" => "example_new_namespace", # String
})
```


### AiSearchToken

Create an instance: `ai_search_token = client.AiSearchToken`

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
| `cf_api_id` | `String` |  |
| `cf_api_key` | `String` |  |
| `created_at` | `String` |  |
| `created_by` | `String` |  |
| `enabled` | `Boolean` |  |
| `id` | `String` |  |
| `legacy` | `Boolean` |  |
| `modified_at` | `String` |  |
| `modified_by` | `String` |  |
| `name` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AiSearchToken record (raises on error).
ai_search_token = client.AiSearchToken.load({ "id" => "ai_search_token_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of AiSearchToken records (raises on error).
ai_search_tokens = client.AiSearchToken.list
```

#### Example: Create

```ruby
ai_search_token = client.AiSearchToken.create({
  "account_id" => "example_account_id", # String
  "cf_api_id" => "example_cf_api_id", # String
  "cf_api_key" => "example_cf_api_key", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "modified_at" => "example_modified_at", # String
  "name" => "example_name", # String
})
```


### AigBillingCreateTopup

Create an instance: `aig_billing_create_topup = client.AigBillingCreateTopup`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `Integer` | Top-up amount in cents (min 1000). |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `payment_method_id` | `String` | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
aig_billing_create_topup = client.AigBillingCreateTopup.create({
  "account_id" => "example_account_id", # String
  "amount" => 1, # Integer
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```


### AigBillingDeleteSpendingLimit

Create an instance: `aig_billing_delete_spending_limit = client.AigBillingDeleteSpendingLimit`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingDeleteTopupConfig

Create an instance: `aig_billing_delete_topup_config = client.AigBillingDeleteTopupConfig`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingGetCreditBalance

Create an instance: `aig_billing_get_credit_balance = client.AigBillingGetCreditBalance`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of AigBillingGetCreditBalance records (raises on error).
aig_billing_get_credit_balances = client.AigBillingGetCreditBalance.list
```


### AigBillingGetInvoiceHistory

Create an instance: `aig_billing_get_invoice_history = client.AigBillingGetInvoiceHistory`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of AigBillingGetInvoiceHistory records (raises on error).
aig_billing_get_invoice_historys = client.AigBillingGetInvoiceHistory.list
```


### AigBillingGetInvoicePreview

Create an instance: `aig_billing_get_invoice_preview = client.AigBillingGetInvoicePreview`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of AigBillingGetInvoicePreview records (raises on error).
aig_billing_get_invoice_previews = client.AigBillingGetInvoicePreview.list
```


### AigBillingGetSpendingLimit

Create an instance: `aig_billing_get_spending_limit = client.AigBillingGetSpendingLimit`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of AigBillingGetSpendingLimit records (raises on error).
aig_billing_get_spending_limits = client.AigBillingGetSpendingLimit.list
```


### AigBillingGetTopupConfig

Create an instance: `aig_billing_get_topup_config = client.AigBillingGetTopupConfig`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of AigBillingGetTopupConfig records (raises on error).
aig_billing_get_topup_configs = client.AigBillingGetTopupConfig.list
```


### AigBillingGetTopupEligibility

Create an instance: `aig_billing_get_topup_eligibility = client.AigBillingGetTopupEligibility`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `payment_methods` | `Array` | Account-level payment methods, forwarded by the dashboard. |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
aig_billing_get_topup_eligibility = client.AigBillingGetTopupEligibility.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```


### AigBillingGetTopupLimit

Create an instance: `aig_billing_get_topup_limit = client.AigBillingGetTopupLimit`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of AigBillingGetTopupLimit records (raises on error).
aig_billing_get_topup_limits = client.AigBillingGetTopupLimit.list
```


### AigBillingGetUsageHistory

Create an instance: `aig_billing_get_usage_history = client.AigBillingGetUsageHistory`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of AigBillingGetUsageHistory records (raises on error).
aig_billing_get_usage_historys = client.AigBillingGetUsageHistory.list
```


### AigBillingSetSpendingLimit

Create an instance: `aig_billing_set_spending_limit = client.AigBillingSetSpendingLimit`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `Integer` | Spending limit amount in cents (min 100). |
| `duration` | `String` | Spending limit duration. |
| `strategy` | `String` | Spending limit strategy. |

#### Example: Create

```ruby
aig_billing_set_spending_limit = client.AigBillingSetSpendingLimit.create({
  "account_id" => "example_account_id", # String
  "amount" => 1, # Integer
  "duration" => "example_duration", # String
  "strategy" => "example_strategy", # String
})
```


### AigBillingSetTopupConfig

Create an instance: `aig_billing_set_topup_config = client.AigBillingSetTopupConfig`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `Integer` | Auto top-up amount in cents (min 1000). |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |
| `threshold` | `Integer` | Balance threshold in cents that triggers auto top-up (min 500). |

#### Example: Create

```ruby
aig_billing_set_topup_config = client.AigBillingSetTopupConfig.create({
  "account_id" => "example_account_id", # String
  "amount" => 1, # Integer
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
  "threshold" => 1, # Integer
})
```


### AigBillingTopupStatus

Create an instance: `aig_billing_topup_status = client.AigBillingTopupStatus`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `payment_intent_id` | `String` | Stripe invoice ID to check status for. |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Create

```ruby
aig_billing_topup_status = client.AigBillingTopupStatus.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "payment_intent_id" => "example_payment_intent_id", # String
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```


### AutoRagJob

Create an instance: `auto_rag_job = client.AutoRagJob`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `Float` |  |
| `end_reason` | `String` |  |
| `ended_at` | `String` |  |
| `id` | `String` |  |
| `last_seen_at` | `String` |  |
| `message` | `String` |  |
| `message_type` | `Integer` |  |
| `source` | `String` |  |
| `started_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AutoRagJob record (raises on error).
auto_rag_job = client.AutoRagJob.load({ "id" => "auto_rag_job_id", "account_id" => "account_id", "rag_id" => "rag_id" })
```

#### Example: List

```ruby
# list returns an Array of AutoRagJob records (raises on error).
auto_rag_jobs = client.AutoRagJob.list
```


### AutoRagRag

Create an instance: `auto_rag_rag = client.AutoRagRag`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error` | `String` |  |
| `job_id` | `String` |  |
| `key` | `String` |  |

#### Example: List

```ruby
# list returns an Array of AutoRagRag records (raises on error).
auto_rag_rags = client.AutoRagRag.list
```


### AutoRagRagSearch

Create an instance: `auto_rag_rag_search = client.AutoRagRagSearch`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `filters` | `Object` |  |
| `has_more` | `Boolean` |  |
| `max_num_results` | `Integer` |  |
| `model` | `Object` |  |
| `next_page` | `String` |  |
| `object` | `String` |  |
| `query` | `String` |  |
| `ranking_options` | `Hash` |  |
| `reranking` | `Hash` |  |
| `response` | `String` |  |
| `rewrite_query` | `Boolean` |  |
| `search_query` | `String` |  |
| `stream` | `Boolean` |  |
| `system_prompt` | `String` |  |

#### Example: Create

```ruby
auto_rag_rag_search = client.AutoRagRagSearch.create({
  "account_id" => "example_account_id", # String
  "rag_id" => "example_rag_id", # String
  "query" => "example_query", # String
  "response" => "example_response", # String
  "search_query" => "example_search_query", # String
})
```


### FinetuneAsset

Create an instance: `finetune_asset = client.FinetuneAsset`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file_name` | `String` |  |
| `file_url` | `String` |  |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the FinetuneAsset record (raises on error).
finetune_asset = client.FinetuneAsset.load({ "id" => "finetune_asset_id", "account_id" => "account_id", "finetune_id" => "finetune_id" })
```


### Vectorize

Create an instance: `vectorize = client.Vectorize`

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
| `config` | `Object` |  |
| `description` | `String` | Specifies the description of the index. |
| `errors` | `Array` |  |
| `ids` | `Array` | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `String` | Specifies the type of metadata property to index. |
| `messages` | `Array` |  |
| `name` | `String` |  |
| `propertyName` | `String` | Specifies the metadata property to index. |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Vectorize record (raises on error).
vectorize = client.Vectorize.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Vectorize records (raises on error).
vectorizes = client.Vectorize.list
```

#### Example: Create

```ruby
vectorize = client.Vectorize.create({
  "account_id" => "example_account_id", # String
  "config" => "example_config", # Object
  "errors" => [], # Array
  "indexType" => "example_indexType", # String
  "messages" => [], # Array
  "name" => "example_name", # String
  "propertyName" => "example_propertyName", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### VectorizeBetaDeprecated

Create an instance: `vectorize_beta__deprecated = client.VectorizeBetaDeprecated`

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
| `config` | `Object` |  |
| `description` | `String` | Specifies the description of the index. |
| `errors` | `Array` |  |
| `ids` | `Array` | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `Array` |  |
| `name` | `String` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the VectorizeBetaDeprecated record (raises on error).
vectorize_beta__deprecated = client.VectorizeBetaDeprecated.load({ "account_id" => "account_id", "index_name" => "index_name" })
```

#### Example: List

```ruby
# list returns an Array of VectorizeBetaDeprecated records (raises on error).
vectorize_beta__deprecateds = client.VectorizeBetaDeprecated.list
```

#### Example: Create

```ruby
vectorize_beta__deprecated = client.VectorizeBetaDeprecated.create({
  "account_id" => "example_account_id", # String
  "config" => "example_config", # Object
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "success" => true, # Boolean
})
```


### WorkersAi

Create an instance: `workers_ai = client.WorkersAi`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `extension` | `String` |  |
| `input` | `Hash` | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `Array` |  |
| `mimeType` | `String` |  |
| `model` | `String` | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `Hash` |  |
| `output` | `Hash` |  |
| `result` | `Hash` | Model-specific output. |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkersAi record (raises on error).
workers_ai = client.WorkersAi.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of WorkersAi records (raises on error).
workers_ais = client.WorkersAi.list
```

#### Example: Create

```ruby
workers_ai = client.WorkersAi.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "extension" => "example_extension", # String
  "input" => {}, # Hash
  "messages" => [], # Array
  "mimeType" => "example_mimeType", # String
  "model" => "example_model", # String
  "output" => {}, # Hash
  "success" => true, # Boolean
})
```


### WorkersAiFinetune

Create an instance: `workers_ai_finetune = client.WorkersAiFinetune`

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
| `created_at` | `String` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `model` | `String` |  |
| `modified_at` | `String` |  |
| `name` | `String` |  |
| `public` | `Boolean` |  |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkersAiFinetune record (raises on error).
workers_ai_finetune = client.WorkersAiFinetune.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of WorkersAiFinetune records (raises on error).
workers_ai_finetunes = client.WorkersAiFinetune.list
```

#### Example: Create

```ruby
workers_ai_finetune = client.WorkersAiFinetune.create({
  "account_id" => "example_account_id", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "model" => "example_model", # String
  "modified_at" => "example_modified_at", # String
  "name" => "example_name", # String
  "public" => true, # Boolean
  "success" => true, # Boolean
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CloudflareAi_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CloudflareAi_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
aisearchinstancesjob = client.AiSearchInstancesJob
aisearchinstancesjob.list()

# aisearchinstancesjob.data_get now returns the aisearchinstancesjob data from the last list
# aisearchinstancesjob.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
