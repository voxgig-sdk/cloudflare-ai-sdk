# CloudflareAi PHP SDK



The PHP SDK for the CloudflareAi API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Account()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-ai-sdk/releases](https://github.com/voxgig-sdk/cloudflare-ai-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudflareai_sdk.php';

$client = new CloudflareAiSDK([
    "apikey" => getenv("CLOUDFLARE_AI_APIKEY"),
]);
```

### 3. Load an aigatewaycustomdomain

AiGatewayCustomDomain is nested under account, so provide the `account_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the AiGatewayCustomDomain record (throws on error).
    $aigatewaycustomdomain = $client->AiGatewayCustomDomain()->load(["account_id" => "example_account_id", "gateway_id" => "example_gateway_id", "id" => "example_id"]);
    print_r($aigatewaycustomdomain->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// Update
$client->Account()->update(["id" => "example_id"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $aisearchinstancesjobs = $client->AiSearchInstancesJob()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CloudflareAiSDK::test([
    "entity" => ["aisearchinstancesjob" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$aisearchinstancesjob = $client->AiSearchInstancesJob()->list();
print_r(array_map(fn($item) => $item->data_get(), $aisearchinstancesjob));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudflareAiSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_AI_TEST_LIVE=TRUE
CLOUDFLARE_AI_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudflareAiSDK

```php
require_once 'cloudflareai_sdk.php';
$client = new CloudflareAiSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudflareAiSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudflareAiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Account` | `($data): AccountEntity` | Create an Account entity instance. |
| `AiGateway` | `($data): AiGatewayEntity` | Create an AiGateway entity instance. |
| `AiGatewayCustomDomain` | `($data): AiGatewayCustomDomainEntity` | Create an AiGatewayCustomDomain entity instance. |
| `AiGatewayCustomProvider` | `($data): AiGatewayCustomProviderEntity` | Create an AiGatewayCustomProvider entity instance. |
| `AiGatewayCustomProviderCost` | `($data): AiGatewayCustomProviderCostEntity` | Create an AiGatewayCustomProviderCost entity instance. |
| `AiGatewayDataset` | `($data): AiGatewayDatasetEntity` | Create an AiGatewayDataset entity instance. |
| `AiGatewayDynamicRoute` | `($data): AiGatewayDynamicRouteEntity` | Create an AiGatewayDynamicRoute entity instance. |
| `AiGatewayEvaluation` | `($data): AiGatewayEvaluationEntity` | Create an AiGatewayEvaluation entity instance. |
| `AiGatewayGateway` | `($data): AiGatewayGatewayEntity` | Create an AiGatewayGateway entity instance. |
| `AiGatewayLog` | `($data): AiGatewayLogEntity` | Create an AiGatewayLog entity instance. |
| `AiGatewayProviderConfig` | `($data): AiGatewayProviderConfigEntity` | Create an AiGatewayProviderConfig entity instance. |
| `AiSearchAccountSearch` | `($data): AiSearchAccountSearchEntity` | Create an AiSearchAccountSearch entity instance. |
| `AiSearchInstance` | `($data): AiSearchInstanceEntity` | Create an AiSearchInstance entity instance. |
| `AiSearchInstancesItem` | `($data): AiSearchInstancesItemEntity` | Create an AiSearchInstancesItem entity instance. |
| `AiSearchInstancesJob` | `($data): AiSearchInstancesJobEntity` | Create an AiSearchInstancesJob entity instance. |
| `AiSearchNamespace` | `($data): AiSearchNamespaceEntity` | Create an AiSearchNamespace entity instance. |
| `AiSearchToken` | `($data): AiSearchTokenEntity` | Create an AiSearchToken entity instance. |
| `AigBillingCreateTopup` | `($data): AigBillingCreateTopupEntity` | Create an AigBillingCreateTopup entity instance. |
| `AigBillingDeleteSpendingLimit` | `($data): AigBillingDeleteSpendingLimitEntity` | Create an AigBillingDeleteSpendingLimit entity instance. |
| `AigBillingDeleteTopupConfig` | `($data): AigBillingDeleteTopupConfigEntity` | Create an AigBillingDeleteTopupConfig entity instance. |
| `AigBillingGetCreditBalance` | `($data): AigBillingGetCreditBalanceEntity` | Create an AigBillingGetCreditBalance entity instance. |
| `AigBillingGetInvoiceHistory` | `($data): AigBillingGetInvoiceHistoryEntity` | Create an AigBillingGetInvoiceHistory entity instance. |
| `AigBillingGetInvoicePreview` | `($data): AigBillingGetInvoicePreviewEntity` | Create an AigBillingGetInvoicePreview entity instance. |
| `AigBillingGetSpendingLimit` | `($data): AigBillingGetSpendingLimitEntity` | Create an AigBillingGetSpendingLimit entity instance. |
| `AigBillingGetTopupConfig` | `($data): AigBillingGetTopupConfigEntity` | Create an AigBillingGetTopupConfig entity instance. |
| `AigBillingGetTopupEligibility` | `($data): AigBillingGetTopupEligibilityEntity` | Create an AigBillingGetTopupEligibility entity instance. |
| `AigBillingGetTopupLimit` | `($data): AigBillingGetTopupLimitEntity` | Create an AigBillingGetTopupLimit entity instance. |
| `AigBillingGetUsageHistory` | `($data): AigBillingGetUsageHistoryEntity` | Create an AigBillingGetUsageHistory entity instance. |
| `AigBillingSetSpendingLimit` | `($data): AigBillingSetSpendingLimitEntity` | Create an AigBillingSetSpendingLimit entity instance. |
| `AigBillingSetTopupConfig` | `($data): AigBillingSetTopupConfigEntity` | Create an AigBillingSetTopupConfig entity instance. |
| `AigBillingTopupStatus` | `($data): AigBillingTopupStatusEntity` | Create an AigBillingTopupStatus entity instance. |
| `AutoRagJob` | `($data): AutoRagJobEntity` | Create an AutoRagJob entity instance. |
| `AutoRagRag` | `($data): AutoRagRagEntity` | Create an AutoRagRag entity instance. |
| `AutoRagRagSearch` | `($data): AutoRagRagSearchEntity` | Create an AutoRagRagSearch entity instance. |
| `FinetuneAsset` | `($data): FinetuneAssetEntity` | Create a FinetuneAsset entity instance. |
| `Vectorize` | `($data): VectorizeEntity` | Create a Vectorize entity instance. |
| `VectorizeBetaDeprecated` | `($data): VectorizeBetaDeprecatedEntity` | Create a VectorizeBetaDeprecated entity instance. |
| `WorkersAi` | `($data): WorkersAiEntity` | Create a WorkersAi entity instance. |
| `WorkersAiFinetune` | `($data): WorkersAiFinetuneEntity` | Create a WorkersAiFinetune entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$account = $client->Account();`

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

```php
// load() returns the ENTITY — call data_get() for the Account record (throws on error).
$account = $client->Account()->load(["id" => "account_id"]);
```


### AiGateway

Create an instance: `$ai_gateway = $client->AiGateway();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byokAlias` | `string` |  |
| `items` | `array` |  |
| `limit` | `int` |  |
| `metadata` | `array` |  |
| `options` | `array` |  |
| `provider` | `string` |  |
| `query` | `string` |  |

#### Example: Create

```php
$ai_gateway = $client->AiGateway()->create([
    "account_id" => null, // string
    "items" => null, // array
    "metadata" => null, // array
    "options" => null, // array
    "query" => null, // string
]);
```


### AiGatewayCustomDomain

Create an instance: `$ai_gateway_custom_domain = $client->AiGatewayCustomDomain();`

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

```php
// load() returns the ENTITY — call data_get() for the AiGatewayCustomDomain record (throws on error).
$ai_gateway_custom_domain = $client->AiGatewayCustomDomain()->load(["id" => "ai_gateway_custom_domain_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### Example: List

```php
// list() returns an array of AiGatewayCustomDomain records (throws on error).
$ai_gateway_custom_domains = $client->AiGatewayCustomDomain()->list();
```

#### Example: Create

```php
$ai_gateway_custom_domain = $client->AiGatewayCustomDomain()->create([
    "account_id" => null, // string
    "gateway_id" => null, // string
    "cname_target" => null, // string
    "created_at" => null, // int
    "domain" => null, // string
    "hostname" => null, // string
    "modified_at" => null, // int
    "ssl_hostname_id" => null, // string
    "status" => null, // string
    "zone_id" => null, // string
]);
```


### AiGatewayCustomProvider

Create an instance: `$ai_gateway_custom_provider = $client->AiGatewayCustomProvider();`

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

```php
// load() returns the ENTITY — call data_get() for the AiGatewayCustomProvider record (throws on error).
$ai_gateway_custom_provider = $client->AiGatewayCustomProvider()->load(["id" => "ai_gateway_custom_provider_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of AiGatewayCustomProvider records (throws on error).
$ai_gateway_custom_providers = $client->AiGatewayCustomProvider()->list();
```

#### Example: Create

```php
$ai_gateway_custom_provider = $client->AiGatewayCustomProvider()->create([
    "account_id" => null, // string
    "base_url" => null, // string
    "created_at" => null, // string
    "id" => null, // string
    "modified_at" => null, // string
    "name" => null, // string
    "slug" => null, // string
]);
```


### AiGatewayCustomProviderCost

Create an instance: `$ai_gateway_custom_provider_cost = $client->AiGatewayCustomProviderCost();`

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
| `cost_in` | `float` |  |
| `cost_out` | `float` |  |
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

```php
// load() returns the ENTITY — call data_get() for the AiGatewayCustomProviderCost record (throws on error).
$ai_gateway_custom_provider_cost = $client->AiGatewayCustomProviderCost()->load(["id" => "ai_gateway_custom_provider_cost_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of AiGatewayCustomProviderCost records (throws on error).
$ai_gateway_custom_provider_costs = $client->AiGatewayCustomProviderCost()->list();
```

#### Example: Create

```php
$ai_gateway_custom_provider_cost = $client->AiGatewayCustomProviderCost()->create([
    "account_id" => null, // string
    "account_provider_id" => null, // string
    "created_at" => null, // string
    "id" => null, // string
    "model" => null, // string
    "modified_at" => null, // string
]);
```


### AiGatewayDataset

Create an instance: `$ai_gateway_dataset = $client->AiGatewayDataset();`

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
| `enable` | `bool` |  |
| `filters` | `array` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiGatewayDataset record (throws on error).
$ai_gateway_dataset = $client->AiGatewayDataset()->load(["id" => "ai_gateway_dataset_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### Example: List

```php
// list() returns an array of AiGatewayDataset records (throws on error).
$ai_gateway_datasets = $client->AiGatewayDataset()->list();
```

#### Example: Create

```php
$ai_gateway_dataset = $client->AiGatewayDataset()->create([
    "account_id" => null, // string
    "gateway_id" => null, // string
    "created_at" => null, // string
    "enable" => null, // bool
    "filters" => null, // array
    "id" => null, // string
    "modified_at" => null, // string
    "name" => null, // string
]);
```


### AiGatewayDynamicRoute

Create an instance: `$ai_gateway_dynamic_route = $client->AiGatewayDynamicRoute();`

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
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `data` | `string` |  |
| `deployment` | `array` |  |
| `deployments` | `array` |  |
| `elements` | `array` |  |
| `gateway_id` | `string` |  |
| `id` | `string` |  |
| `is_valid` | `bool` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `order_by` | `string` |  |
| `order_by_direction` | `string` |  |
| `page` | `float` |  |
| `per_page` | `float` |  |
| `routes` | `array` |  |
| `version` | `array` |  |
| `version_id` | `string` |  |
| `versions` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiGatewayDynamicRoute record (throws on error).
$ai_gateway_dynamic_route = $client->AiGatewayDynamicRoute()->load(["id" => "ai_gateway_dynamic_route_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### Example: Create

```php
$ai_gateway_dynamic_route = $client->AiGatewayDynamicRoute()->create([
    "account_id" => null, // string
    "gateway_id" => null, // string
    "account_tag" => null, // string
    "active" => null, // bool
    "created_at" => null, // string
    "data" => null, // string
    "deployment" => null, // array
    "deployments" => null, // array
    "elements" => null, // array
    "id" => null, // string
    "modified_at" => null, // string
    "name" => null, // string
    "order_by" => null, // string
    "order_by_direction" => null, // string
    "page" => null, // float
    "per_page" => null, // float
    "routes" => null, // array
    "version" => null, // array
    "version_id" => null, // string
    "versions" => null, // array
]);
```


### AiGatewayEvaluation

Create an instance: `$ai_gateway_evaluation = $client->AiGatewayEvaluation();`

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
| `dataset_ids` | `array` |  |
| `datasets` | `array` |  |
| `description` | `string` |  |
| `enable` | `bool` |  |
| `evaluation_type_ids` | `array` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `mandatory` | `bool` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `processed` | `bool` |  |
| `results` | `array` |  |
| `total_logs` | `float` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiGatewayEvaluation record (throws on error).
$ai_gateway_evaluation = $client->AiGatewayEvaluation()->load(["id" => "ai_gateway_evaluation_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### Example: List

```php
// list() returns an array of AiGatewayEvaluation records (throws on error).
$ai_gateway_evaluations = $client->AiGatewayEvaluation()->list();
```

#### Example: Create

```php
$ai_gateway_evaluation = $client->AiGatewayEvaluation()->create([
    "account_id" => null, // string
    "gateway_id" => null, // string
    "created_at" => null, // string
    "dataset_ids" => null, // array
    "datasets" => null, // array
    "description" => null, // string
    "enable" => null, // bool
    "evaluation_type_ids" => null, // array
    "id" => null, // string
    "mandatory" => null, // bool
    "modified_at" => null, // string
    "name" => null, // string
    "processed" => null, // bool
    "results" => null, // array
    "total_logs" => null, // float
    "type" => null, // string
]);
```


### AiGatewayGateway

Create an instance: `$ai_gateway_gateway = $client->AiGatewayGateway();`

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
| `authentication` | `bool` |  |
| `byok_only` | `bool` | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `cache_invalidate_on_update` | `bool` |  |
| `cache_ttl` | `int` |  |
| `collect_logs` | `bool` |  |
| `created_at` | `string` |  |
| `dlp` | `mixed` |  |
| `guardrails` | `array` |  |
| `id` | `string` | Unique identifier of the AI Gateway within the account. |
| `is_default` | `bool` |  |
| `log_classification` | `bool` |  |
| `log_management` | `int` |  |
| `log_management_strategy` | `string` |  |
| `logpush` | `bool` |  |
| `logpush_public_key` | `string` |  |
| `modified_at` | `string` |  |
| `otel` | `array` |  |
| `rate_limiting_interval` | `int` |  |
| `rate_limiting_limit` | `int` |  |
| `rate_limiting_technique` | `string` |  |
| `result` | `string` |  |
| `retry_backoff` | `string` | Backoff strategy for retry delays |
| `retry_delay` | `int` | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `int` | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `array` |  |
| `store_id` | `string` |  |
| `stripe` | `array` |  |
| `success` | `bool` |  |
| `workers_ai_billing_mode` | `string` | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiGatewayGateway record (throws on error).
$ai_gateway_gateway = $client->AiGatewayGateway()->load(["id" => "ai_gateway_gateway_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of AiGatewayGateway records (throws on error).
$ai_gateway_gateways = $client->AiGatewayGateway()->list();
```

#### Example: Create

```php
$ai_gateway_gateway = $client->AiGatewayGateway()->create([
    "account_id" => null, // string
    "cache_invalidate_on_update" => null, // bool
    "cache_ttl" => null, // int
    "collect_logs" => null, // bool
    "created_at" => null, // string
    "guardrails" => null, // array
    "id" => null, // string
    "modified_at" => null, // string
    "rate_limiting_interval" => null, // int
    "rate_limiting_limit" => null, // int
    "result" => null, // string
    "stripe" => null, // array
    "success" => null, // bool
]);
```


### AiGatewayLog

Create an instance: `$ai_gateway_log = $client->AiGatewayLog();`

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
| `cached` | `bool` |  |
| `cost` | `float` |  |
| `created_at` | `string` |  |
| `custom_cost` | `bool` |  |
| `duration` | `int` |  |
| `feedback` | `float` |  |
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
| `score` | `float` |  |
| `status_code` | `int` |  |
| `step` | `int` |  |
| `success` | `bool` |  |
| `tokens_in` | `int` |  |
| `tokens_out` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiGatewayLog record (throws on error).
$ai_gateway_log = $client->AiGatewayLog()->load(["id" => "ai_gateway_log_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### Example: List

```php
// list() returns an array of AiGatewayLog records (throws on error).
$ai_gateway_logs = $client->AiGatewayLog()->list();
```


### AiGatewayProviderConfig

Create an instance: `$ai_gateway_provider_config = $client->AiGatewayProviderConfig();`

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
| `default_config` | `bool` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `modified_at` | `string` |  |
| `provider_slug` | `string` |  |
| `rate_limit` | `float` |  |
| `rate_limit_period` | `float` |  |
| `secret` | `string` | Provider API key to store in the Secrets Store configured on the gateway. |
| `secret_id` | `string` |  |
| `secret_preview` | `string` |  |

#### Example: List

```php
// list() returns an array of AiGatewayProviderConfig records (throws on error).
$ai_gateway_provider_configs = $client->AiGatewayProviderConfig()->list();
```

#### Example: Create

```php
$ai_gateway_provider_config = $client->AiGatewayProviderConfig()->create([
    "account_id" => null, // string
    "gateway_id" => null, // string
    "alias" => null, // string
    "default_config" => null, // bool
    "id" => null, // string
    "modified_at" => null, // string
    "provider_slug" => null, // string
    "secret_id" => null, // string
    "secret_preview" => null, // string
]);
```


### AiSearchAccountSearch

Create an instance: `$ai_search_account_search = $client->AiSearchAccountSearch();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_search_options` | `array` |  |
| `choices` | `array` |  |
| `chunks` | `array` |  |
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` | OpenAI-compatible message array. |
| `model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `string` |  |
| `query` | `string` | A simple text query string. |
| `query_kind` | `string` |  |
| `search_query` | `string` |  |
| `stream` | `bool` |  |

#### Example: Create

```php
$ai_search_account_search = $client->AiSearchAccountSearch()->create([
    "account_id" => null, // string
    "ai_search_options" => null, // array
    "choices" => null, // array
    "chunks" => null, // array
    "query_kind" => null, // string
]);
```


### AiSearchInstance

Create an instance: `$ai_search_instance = $client->AiSearchInstance();`

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
| `ai_search_options` | `array` |  |
| `cache` | `bool` |  |
| `cache_threshold` | `string` |  |
| `cache_ttl` | `mixed` | Cache entry TTL in seconds. |
| `choices` | `array` |  |
| `chunk` | `bool` |  |
| `chunk_overlap` | `int` |  |
| `chunk_size` | `int` |  |
| `chunks` | `array` |  |
| `completed` | `int` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `custom_metadata` | `array` |  |
| `degraded` | `bool` | True when status counts are unavailable (e.g. |
| `embedding_model` | `string` |  |
| `enable` | `bool` |  |
| `engine` | `array` | Engine-specific metadata. |
| `engine_version` | `float` |  |
| `error` | `int` |  |
| `file_embed_errors` | `array` |  |
| `fusion_method` | `string` |  |
| `hybrid_search_enabled` | `bool` | Deprecated — use index_method instead. |
| `id` | `string` | AI Search instance ID. |
| `index_method` | `array` | Controls which storage backends are used during indexing. |
| `index_source_errors` | `array` |  |
| `indexing_options` | `array` |  |
| `last_activity` | `string` |  |
| `max_num_results` | `int` |  |
| `messages` | `array` |  |
| `metadata` | `array` |  |
| `model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `string` |  |
| `modified_by` | `string` |  |
| `namespace` | `string` |  |
| `object` | `string` |  |
| `outdated` | `int` |  |
| `paused` | `bool` |  |
| `public_endpoint_id` | `string` |  |
| `public_endpoint_params` | `array` |  |
| `queued` | `int` |  |
| `reranking` | `bool` |  |
| `reranking_model` | `string` |  |
| `retrieval_options` | `array` |  |
| `rewrite_model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `bool` |  |
| `running` | `int` |  |
| `score_threshold` | `float` |  |
| `skipped` | `int` |  |
| `source` | `string` |  |
| `source_params` | `array` |  |
| `status` | `string` |  |
| `stream` | `bool` |  |
| `summarization` | `bool` |  |
| `summarization_model` | `string` |  |
| `sync_interval` | `mixed` | Interval between automatic syncs, in seconds. |
| `system_prompt_ai_search` | `string` |  |
| `system_prompt_index_summarization` | `string` |  |
| `system_prompt_rewrite_query` | `string` |  |
| `token_id` | `string` |  |
| `type` | `string` | Source type. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiSearchInstance record (throws on error).
$ai_search_instance = $client->AiSearchInstance()->load(["id" => "ai_search_instance_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of AiSearchInstance records (throws on error).
$ai_search_instances = $client->AiSearchInstance()->list();
```

#### Example: Create

```php
$ai_search_instance = $client->AiSearchInstance()->create([
    "account_id" => null, // string
    "choices" => null, // array
    "chunks" => null, // array
    "created_at" => null, // string
    "id" => null, // string
    "index_method" => null, // array
    "messages" => null, // array
    "modified_at" => null, // string
]);
```


### AiSearchInstancesItem

Create an instance: `$ai_search_instances_item = $client->AiSearchInstancesItem();`

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
| `chunkCount` | `int` |  |
| `chunks_count` | `int` |  |
| `created_at` | `string` |  |
| `end_byte` | `float` |  |
| `error` | `string` |  |
| `errorType` | `string` |  |
| `fileKey` | `string` |  |
| `file_size` | `float` |  |
| `id` | `string` |  |
| `item` | `array` |  |
| `key` | `string` | Item key / filename. |
| `last_seen_at` | `string` |  |
| `message` | `string` |  |
| `metadata` | `array` | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `string` |  |
| `next_action` | `string` |  |
| `processingTimeMs` | `int` |  |
| `source_id` | `string` | Identifies which data source this item belongs to. |
| `start_byte` | `float` |  |
| `status` | `string` |  |
| `text` | `string` |  |
| `timestamp` | `string` |  |
| `wait_for_completion` | `bool` | Wait for indexing to fully complete before responding. |
| `warnings` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiSearchInstancesItem record (throws on error).
$ai_search_instances_item = $client->AiSearchInstancesItem()->load(["id" => "ai_search_instances_item_id", "account_id" => "account_id", "instance_id" => "instance_id", "namespace_id" => "namespace_id"]);
```

#### Example: List

```php
// list() returns an array of AiSearchInstancesItem records (throws on error).
$ai_search_instances_items = $client->AiSearchInstancesItem()->list();
```

#### Example: Create

```php
$ai_search_instances_item = $client->AiSearchInstancesItem()->create([
    "account_id" => null, // string
    "instance_id" => null, // string
    "namespace_id" => null, // string
    "action" => null, // string
    "checksum" => null, // string
    "chunkCount" => null, // int
    "chunks_count" => null, // int
    "created_at" => null, // string
    "errorType" => null, // string
    "fileKey" => null, // string
    "file_size" => null, // float
    "id" => null, // string
    "item" => null, // array
    "key" => null, // string
    "last_seen_at" => null, // string
    "message" => null, // string
    "metadata" => null, // array
    "namespace" => null, // string
    "next_action" => null, // string
    "processingTimeMs" => null, // int
    "source_id" => null, // string
    "status" => null, // string
    "text" => null, // string
    "timestamp" => null, // string
]);
```


### AiSearchInstancesJob

Create an instance: `$ai_search_instances_job = $client->AiSearchInstancesJob();`

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
| `created_at` | `float` |  |
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

```php
// load() returns the ENTITY — call data_get() for the AiSearchInstancesJob record (throws on error).
$ai_search_instances_job = $client->AiSearchInstancesJob()->load(["id" => "ai_search_instances_job_id", "account_id" => "account_id", "instance_id" => "instance_id"]);
```

#### Example: List

```php
// list() returns an array of AiSearchInstancesJob records (throws on error).
$ai_search_instances_jobs = $client->AiSearchInstancesJob()->list();
```

#### Example: Create

```php
$ai_search_instances_job = $client->AiSearchInstancesJob()->create([
    "account_id" => null, // string
    "instance_id" => null, // string
    "action" => null, // string
    "created_at" => null, // float
    "id" => null, // string
    "message" => null, // string
    "message_type" => null, // int
    "source" => null, // string
]);
```


### AiSearchNamespace

Create an instance: `$ai_search_namespace = $client->AiSearchNamespace();`

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
| `public_endpoint_params` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiSearchNamespace record (throws on error).
$ai_search_namespace = $client->AiSearchNamespace()->load(["id" => "ai_search_namespace_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of AiSearchNamespace records (throws on error).
$ai_search_namespaces = $client->AiSearchNamespace()->list();
```

#### Example: Create

```php
$ai_search_namespace = $client->AiSearchNamespace()->create([
    "account_id" => null, // string
    "created_at" => null, // string
    "name" => null, // string
    "new_namespace" => null, // string
]);
```


### AiSearchToken

Create an instance: `$ai_search_token = $client->AiSearchToken();`

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
| `enabled` | `bool` |  |
| `id` | `string` |  |
| `legacy` | `bool` |  |
| `modified_at` | `string` |  |
| `modified_by` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiSearchToken record (throws on error).
$ai_search_token = $client->AiSearchToken()->load(["id" => "ai_search_token_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of AiSearchToken records (throws on error).
$ai_search_tokens = $client->AiSearchToken()->list();
```

#### Example: Create

```php
$ai_search_token = $client->AiSearchToken()->create([
    "account_id" => null, // string
    "cf_api_id" => null, // string
    "cf_api_key" => null, // string
    "created_at" => null, // string
    "id" => null, // string
    "modified_at" => null, // string
    "name" => null, // string
]);
```


### AigBillingCreateTopup

Create an instance: `$aig_billing_create_topup = $client->AigBillingCreateTopup();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Top-up amount in cents (min 1000). |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `payment_method_id` | `string` | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$aig_billing_create_topup = $client->AigBillingCreateTopup()->create([
    "account_id" => null, // string
    "amount" => null, // int
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "result_info" => null, // array
    "success" => null, // bool
]);
```


### AigBillingDeleteSpendingLimit

Create an instance: `$aig_billing_delete_spending_limit = $client->AigBillingDeleteSpendingLimit();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingDeleteTopupConfig

Create an instance: `$aig_billing_delete_topup_config = $client->AigBillingDeleteTopupConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingGetCreditBalance

Create an instance: `$aig_billing_get_credit_balance = $client->AigBillingGetCreditBalance();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of AigBillingGetCreditBalance records (throws on error).
$aig_billing_get_credit_balances = $client->AigBillingGetCreditBalance()->list();
```


### AigBillingGetInvoiceHistory

Create an instance: `$aig_billing_get_invoice_history = $client->AigBillingGetInvoiceHistory();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of AigBillingGetInvoiceHistory records (throws on error).
$aig_billing_get_invoice_historys = $client->AigBillingGetInvoiceHistory()->list();
```


### AigBillingGetInvoicePreview

Create an instance: `$aig_billing_get_invoice_preview = $client->AigBillingGetInvoicePreview();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of AigBillingGetInvoicePreview records (throws on error).
$aig_billing_get_invoice_previews = $client->AigBillingGetInvoicePreview()->list();
```


### AigBillingGetSpendingLimit

Create an instance: `$aig_billing_get_spending_limit = $client->AigBillingGetSpendingLimit();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of AigBillingGetSpendingLimit records (throws on error).
$aig_billing_get_spending_limits = $client->AigBillingGetSpendingLimit()->list();
```


### AigBillingGetTopupConfig

Create an instance: `$aig_billing_get_topup_config = $client->AigBillingGetTopupConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of AigBillingGetTopupConfig records (throws on error).
$aig_billing_get_topup_configs = $client->AigBillingGetTopupConfig()->list();
```


### AigBillingGetTopupEligibility

Create an instance: `$aig_billing_get_topup_eligibility = $client->AigBillingGetTopupEligibility();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `payment_methods` | `array` | Account-level payment methods, forwarded by the dashboard. |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$aig_billing_get_topup_eligibility = $client->AigBillingGetTopupEligibility()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "result_info" => null, // array
    "success" => null, // bool
]);
```


### AigBillingGetTopupLimit

Create an instance: `$aig_billing_get_topup_limit = $client->AigBillingGetTopupLimit();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of AigBillingGetTopupLimit records (throws on error).
$aig_billing_get_topup_limits = $client->AigBillingGetTopupLimit()->list();
```


### AigBillingGetUsageHistory

Create an instance: `$aig_billing_get_usage_history = $client->AigBillingGetUsageHistory();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: List

```php
// list() returns an array of AigBillingGetUsageHistory records (throws on error).
$aig_billing_get_usage_historys = $client->AigBillingGetUsageHistory()->list();
```


### AigBillingSetSpendingLimit

Create an instance: `$aig_billing_set_spending_limit = $client->AigBillingSetSpendingLimit();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Spending limit amount in cents (min 100). |
| `duration` | `string` | Spending limit duration. |
| `strategy` | `string` | Spending limit strategy. |

#### Example: Create

```php
$aig_billing_set_spending_limit = $client->AigBillingSetSpendingLimit()->create([
    "account_id" => null, // string
    "amount" => null, // int
    "duration" => null, // string
    "strategy" => null, // string
]);
```


### AigBillingSetTopupConfig

Create an instance: `$aig_billing_set_topup_config = $client->AigBillingSetTopupConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Auto top-up amount in cents (min 1000). |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |
| `threshold` | `int` | Balance threshold in cents that triggers auto top-up (min 500). |

#### Example: Create

```php
$aig_billing_set_topup_config = $client->AigBillingSetTopupConfig()->create([
    "account_id" => null, // string
    "amount" => null, // int
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "result_info" => null, // array
    "success" => null, // bool
    "threshold" => null, // int
]);
```


### AigBillingTopupStatus

Create an instance: `$aig_billing_topup_status = $client->AigBillingTopupStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `payment_intent_id` | `string` | Stripe invoice ID to check status for. |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$aig_billing_topup_status = $client->AigBillingTopupStatus()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "payment_intent_id" => null, // string
    "result" => null, // array
    "result_info" => null, // array
    "success" => null, // bool
]);
```


### AutoRagJob

Create an instance: `$auto_rag_job = $client->AutoRagJob();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `float` |  |
| `end_reason` | `string` |  |
| `ended_at` | `string` |  |
| `id` | `string` |  |
| `last_seen_at` | `string` |  |
| `message` | `string` |  |
| `message_type` | `int` |  |
| `source` | `string` |  |
| `started_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AutoRagJob record (throws on error).
$auto_rag_job = $client->AutoRagJob()->load(["id" => "auto_rag_job_id", "account_id" => "account_id", "rag_id" => "rag_id"]);
```

#### Example: List

```php
// list() returns an array of AutoRagJob records (throws on error).
$auto_rag_jobs = $client->AutoRagJob()->list();
```


### AutoRagRag

Create an instance: `$auto_rag_rag = $client->AutoRagRag();`

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

```php
// list() returns an array of AutoRagRag records (throws on error).
$auto_rag_rags = $client->AutoRagRag()->list();
```


### AutoRagRagSearch

Create an instance: `$auto_rag_rag_search = $client->AutoRagRagSearch();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `filters` | `mixed` |  |
| `has_more` | `bool` |  |
| `max_num_results` | `int` |  |
| `model` | `mixed` |  |
| `next_page` | `string` |  |
| `object` | `string` |  |
| `query` | `string` |  |
| `ranking_options` | `array` |  |
| `reranking` | `array` |  |
| `response` | `string` |  |
| `rewrite_query` | `bool` |  |
| `search_query` | `string` |  |
| `stream` | `bool` |  |
| `system_prompt` | `string` |  |

#### Example: Create

```php
$auto_rag_rag_search = $client->AutoRagRagSearch()->create([
    "account_id" => null, // string
    "rag_id" => null, // string
    "query" => null, // string
    "response" => null, // string
    "search_query" => null, // string
]);
```


### FinetuneAsset

Create an instance: `$finetune_asset = $client->FinetuneAsset();`

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

```php
// load() returns the ENTITY — call data_get() for the FinetuneAsset record (throws on error).
$finetune_asset = $client->FinetuneAsset()->load(["id" => "finetune_asset_id", "account_id" => "account_id", "finetune_id" => "finetune_id"]);
```


### Vectorize

Create an instance: `$vectorize = $client->Vectorize();`

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
| `config` | `mixed` |  |
| `description` | `string` | Specifies the description of the index. |
| `errors` | `array` |  |
| `ids` | `array` | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `string` | Specifies the type of metadata property to index. |
| `messages` | `array` |  |
| `name` | `string` |  |
| `propertyName` | `string` | Specifies the metadata property to index. |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Vectorize record (throws on error).
$vectorize = $client->Vectorize()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Vectorize records (throws on error).
$vectorizes = $client->Vectorize()->list();
```

#### Example: Create

```php
$vectorize = $client->Vectorize()->create([
    "account_id" => null, // string
    "config" => null, // mixed
    "errors" => null, // array
    "indexType" => null, // string
    "messages" => null, // array
    "name" => null, // string
    "propertyName" => null, // string
    "result" => null, // array
    "success" => null, // bool
]);
```


### VectorizeBetaDeprecated

Create an instance: `$vectorize_beta__deprecated = $client->VectorizeBetaDeprecated();`

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
| `config` | `mixed` |  |
| `description` | `string` | Specifies the description of the index. |
| `errors` | `array` |  |
| `ids` | `array` | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `array` |  |
| `name` | `string` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the VectorizeBetaDeprecated record (throws on error).
$vectorize_beta__deprecated = $client->VectorizeBetaDeprecated()->load(["account_id" => "account_id", "index_name" => "index_name"]);
```

#### Example: List

```php
// list() returns an array of VectorizeBetaDeprecated records (throws on error).
$vectorize_beta__deprecateds = $client->VectorizeBetaDeprecated()->list();
```

#### Example: Create

```php
$vectorize_beta__deprecated = $client->VectorizeBetaDeprecated()->create([
    "account_id" => null, // string
    "config" => null, // mixed
    "errors" => null, // array
    "messages" => null, // array
    "name" => null, // string
    "success" => null, // bool
]);
```


### WorkersAi

Create an instance: `$workers_ai = $client->WorkersAi();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `extension` | `string` |  |
| `input` | `array` | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `array` |  |
| `mimeType` | `string` |  |
| `model` | `string` | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `array` |  |
| `output` | `array` |  |
| `result` | `array` | Model-specific output. |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkersAi record (throws on error).
$workers_ai = $client->WorkersAi()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of WorkersAi records (throws on error).
$workers_ais = $client->WorkersAi()->list();
```

#### Example: Create

```php
$workers_ai = $client->WorkersAi()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "extension" => null, // string
    "input" => null, // array
    "messages" => null, // array
    "mimeType" => null, // string
    "model" => null, // string
    "output" => null, // array
    "success" => null, // bool
]);
```


### WorkersAiFinetune

Create an instance: `$workers_ai_finetune = $client->WorkersAiFinetune();`

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
| `public` | `bool` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkersAiFinetune record (throws on error).
$workers_ai_finetune = $client->WorkersAiFinetune()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of WorkersAiFinetune records (throws on error).
$workers_ai_finetunes = $client->WorkersAiFinetune()->list();
```

#### Example: Create

```php
$workers_ai_finetune = $client->WorkersAiFinetune()->create([
    "account_id" => null, // string
    "created_at" => null, // string
    "id" => null, // string
    "model" => null, // string
    "modified_at" => null, // string
    "name" => null, // string
    "public" => null, // bool
    "success" => null, // bool
]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudflareai_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudflareai_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$aisearchinstancesjob = $client->AiSearchInstancesJob();
$aisearchinstancesjob->list();

// $aisearchinstancesjob->data_get() now returns the aisearchinstancesjob data from the last list
// $aisearchinstancesjob->match_get() returns the last match criteria
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
