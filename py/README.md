# CloudflareAi Python SDK



The Python SDK for the CloudflareAi API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Account()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-ai-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflareai_sdk import CloudflareAiSDK

client = CloudflareAiSDK({
    "apikey": os.environ.get("CLOUDFLARE_AI_APIKEY"),
})
```

### 3. Load an aigatewaycustomdomain

AiGatewayCustomDomain is nested under account, so provide the `account_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    aigatewaycustomdomain = client.AiGatewayCustomDomain().load({"account_id": "example_account_id", "gateway_id": "example_gateway_id", "id": "example_id"})
    print(aigatewaycustomdomain)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Update
client.Account().update({"id": "example_id"})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    workersaifinetunes = client.WorkersAiFinetune().list()
    print(workersaifinetunes)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareAiSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
workersaifinetune = client.WorkersAiFinetune().list()
# workersaifinetune contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareAiSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CloudflareAiSDK

```python
from cloudflareai_sdk import CloudflareAiSDK

client = CloudflareAiSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareAiSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareAiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `Memory` | `(data) -> MemoryEntity` | Create a Memory entity instance. |
| `Namespace` | `(data) -> NamespaceEntity` | Create a Namespace entity instance. |
| `Vectorize` | `(data) -> VectorizeEntity` | Create a Vectorize entity instance. |
| `VectorizeBetaDeprecated` | `(data) -> VectorizeBetaDeprecatedEntity` | Create a VectorizeBetaDeprecated entity instance. |
| `WorkersAi` | `(data) -> WorkersAiEntity` | Create a WorkersAi entity instance. |
| `WorkersAiFinetune` | `(data) -> WorkersAiFinetuneEntity` | Create a WorkersAiFinetune entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

#### Memory

| Field | Description |
| --- | --- |
| `errors` | Always empty for a successful response. |
| `id` |  |
| `messages` | Informational, non-error messages, if any. |
| `result` |  |
| `result_info` |  |
| `success` | Always true for a successful response. |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/ingest`

#### Namespace

| Field | Description |
| --- | --- |
| `errors` | Always empty for a successful response. |
| `id` |  |
| `messages` | Informational, non-error messages, if any. |
| `name` | Namespace name. |
| `result` |  |
| `result_info` |  |
| `success` | Always true for a successful response. |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/agent-memory/namespaces`

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

Create an instance: `account = client.Account()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
account = client.Account().load({"id": "account_id"})
```


### AiGateway

Create an instance: `ai_gateway = client.AiGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byokAlias` | `str` |  |
| `items` | `list` |  |
| `limit` | `int` |  |
| `metadata` | `dict` |  |
| `options` | `dict` |  |
| `provider` | `str` |  |
| `query` | `str` |  |

#### Example: Create

```python
ai_gateway = client.AiGateway().create({
    "account_id": "example_account_id",  # str
    "items": [],  # list
    "metadata": {},  # dict
    "options": {},  # dict
    "query": "example_query",  # str
})
```


### AiGatewayCustomDomain

Create an instance: `ai_gateway_custom_domain = client.AiGatewayCustomDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cname_target` | `str` |  |
| `created_at` | `int` | epoch milliseconds |
| `domain` | `str` | Custom hostname that you own, such as `ai.example.com`. |
| `gateway_id` | `str` | Unique identifier of the AI Gateway within the account. |
| `hostname` | `str` | Custom hostname that you own, such as `ai.example.com`. |
| `id` | `str` |  |
| `minTLS` | `str` |  |
| `modified_at` | `int` | epoch milliseconds |
| `ssl_hostname_id` | `str` |  |
| `status` | `str` |  |
| `zone_id` | `str` | ID of the Cloudflare zone that contains the custom hostname. |

#### Example: Load

```python
ai_gateway_custom_domain = client.AiGatewayCustomDomain().load({"id": "ai_gateway_custom_domain_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### Example: List

```python
ai_gateway_custom_domains = client.AiGatewayCustomDomain().list({"account_id": "example", "gateway_id": "example"})
```

#### Example: Create

```python
ai_gateway_custom_domain = client.AiGatewayCustomDomain().create({
    "account_id": "example_account_id",  # str
    "gateway_id": "example_gateway_id",  # str
    "cname_target": "example_cname_target",  # str
    "created_at": 1,  # int
    "domain": "example_domain",  # str
    "hostname": "example_hostname",  # str
    "modified_at": 1,  # int
    "ssl_hostname_id": "example_ssl_hostname_id",  # str
    "status": "example_status",  # str
    "zone_id": "example_zone_id",  # str
})
```


### AiGatewayCustomProvider

Create an instance: `ai_gateway_custom_provider = client.AiGatewayCustomProvider()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_url` | `str` |  |
| `beta` | `bool` |  |
| `created_at` | `str` |  |
| `curl_example` | `str` |  |
| `description` | `str` |  |
| `enable` | `bool` |  |
| `headers` | `str` | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `id` | `str` |  |
| `js_example` | `str` |  |
| `link` | `str` |  |
| `logo` | `str` |  |
| `modified_at` | `str` |  |
| `name` | `str` |  |
| `position` | `int` |  |
| `slug` | `str` |  |

#### Example: Load

```python
ai_gateway_custom_provider = client.AiGatewayCustomProvider().load({"id": "ai_gateway_custom_provider_id", "account_id": "account_id"})
```

#### Example: List

```python
ai_gateway_custom_providers = client.AiGatewayCustomProvider().list({"account_id": "example"})
```

#### Example: Create

```python
ai_gateway_custom_provider = client.AiGatewayCustomProvider().create({
    "account_id": "example_account_id",  # str
    "base_url": "example_base_url",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "modified_at": "example_modified_at",  # str
    "name": "example_name",  # str
    "slug": "example_slug",  # str
})
```


### AiGatewayCustomProviderCost

Create an instance: `ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_provider_id` | `str` | ID of the custom provider that the pricing rule applies to. |
| `changed_by` | `str` |  |
| `cost_in` | `float` |  |
| `cost_out` | `float` |  |
| `cost_type` | `str` |  |
| `created_at` | `str` |  |
| `enable` | `bool` |  |
| `id` | `str` |  |
| `model` | `str` |  |
| `model_rule` | `str` |  |
| `modified_at` | `str` |  |
| `token_pricing` | `str` |  |
| `weight` | `int` |  |

#### Example: Load

```python
ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost().load({"id": "ai_gateway_custom_provider_cost_id", "account_id": "account_id"})
```

#### Example: List

```python
ai_gateway_custom_provider_costs = client.AiGatewayCustomProviderCost().list({"account_id": "example"})
```

#### Example: Create

```python
ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost().create({
    "account_id": "example_account_id",  # str
    "account_provider_id": "example_account_provider_id",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "model": "example_model",  # str
    "modified_at": "example_modified_at",  # str
})
```


### AiGatewayDataset

Create an instance: `ai_gateway_dataset = client.AiGatewayDataset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `enable` | `bool` |  |
| `filters` | `list` |  |
| `gateway_id` | `str` | Unique identifier of the AI Gateway within the account. |
| `id` | `str` |  |
| `modified_at` | `str` |  |
| `name` | `str` |  |

#### Example: Load

```python
ai_gateway_dataset = client.AiGatewayDataset().load({"id": "ai_gateway_dataset_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### Example: List

```python
ai_gateway_datasets = client.AiGatewayDataset().list({"account_id": "example", "gateway_id": "example"})
```

#### Example: Create

```python
ai_gateway_dataset = client.AiGatewayDataset().create({
    "account_id": "example_account_id",  # str
    "gateway_id": "example_gateway_id",  # str
    "created_at": "example_created_at",  # str
    "enable": True,  # bool
    "filters": [],  # list
    "id": "example_id",  # str
    "modified_at": "example_modified_at",  # str
    "name": "example_name",  # str
})
```


### AiGatewayDynamicRoute

Create an instance: `ai_gateway_dynamic_route = client.AiGatewayDynamicRoute()`

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
| `account_tag` | `str` |  |
| `active` | `bool` |  |
| `created_at` | `str` |  |
| `data` | `str` |  |
| `deployment` | `dict` |  |
| `deployments` | `list` |  |
| `elements` | `list` |  |
| `gateway_id` | `str` |  |
| `id` | `str` |  |
| `is_valid` | `bool` |  |
| `modified_at` | `str` |  |
| `name` | `str` |  |
| `order_by` | `str` |  |
| `order_by_direction` | `str` |  |
| `page` | `float` |  |
| `per_page` | `float` |  |
| `routes` | `list` |  |
| `version` | `dict` |  |
| `version_id` | `str` |  |
| `versions` | `list` |  |

#### Example: Load

```python
ai_gateway_dynamic_route = client.AiGatewayDynamicRoute().load({"id": "ai_gateway_dynamic_route_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### Example: Create

```python
ai_gateway_dynamic_route = client.AiGatewayDynamicRoute().create({
    "account_id": "example_account_id",  # str
    "gateway_id": "example_gateway_id",  # str
    "account_tag": "example_account_tag",  # str
    "active": True,  # bool
    "created_at": "example_created_at",  # str
    "data": "example_data",  # str
    "deployment": {},  # dict
    "deployments": [],  # list
    "elements": [],  # list
    "id": "example_id",  # str
    "modified_at": "example_modified_at",  # str
    "name": "example_name",  # str
    "order_by": "example_order_by",  # str
    "order_by_direction": "example_order_by_direction",  # str
    "page": 1,  # float
    "per_page": 1,  # float
    "routes": [],  # list
    "version": {},  # dict
    "version_id": "example_version_id",  # str
    "versions": [],  # list
})
```


### AiGatewayEvaluation

Create an instance: `ai_gateway_evaluation = client.AiGatewayEvaluation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `dataset_ids` | `list` |  |
| `datasets` | `list` |  |
| `description` | `str` |  |
| `enable` | `bool` |  |
| `evaluation_type_ids` | `list` |  |
| `gateway_id` | `str` | Unique identifier of the AI Gateway within the account. |
| `id` | `str` |  |
| `mandatory` | `bool` |  |
| `modified_at` | `str` |  |
| `name` | `str` |  |
| `processed` | `bool` |  |
| `results` | `list` |  |
| `total_logs` | `float` |  |
| `type` | `str` |  |

#### Example: Load

```python
ai_gateway_evaluation = client.AiGatewayEvaluation().load({"id": "ai_gateway_evaluation_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### Example: List

```python
ai_gateway_evaluations = client.AiGatewayEvaluation().list({"account_id": "example"})
```

#### Example: Create

```python
ai_gateway_evaluation = client.AiGatewayEvaluation().create({
    "account_id": "example_account_id",  # str
    "gateway_id": "example_gateway_id",  # str
    "created_at": "example_created_at",  # str
    "dataset_ids": [],  # list
    "datasets": [],  # list
    "description": "example_description",  # str
    "enable": True,  # bool
    "evaluation_type_ids": [],  # list
    "id": "example_id",  # str
    "mandatory": True,  # bool
    "modified_at": "example_modified_at",  # str
    "name": "example_name",  # str
    "processed": True,  # bool
    "results": [],  # list
    "total_logs": 1,  # float
    "type": "example_type",  # str
})
```


### AiGatewayGateway

Create an instance: `ai_gateway_gateway = client.AiGatewayGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
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
| `created_at` | `str` |  |
| `dlp` | `Any` |  |
| `guardrails` | `dict` |  |
| `id` | `str` | Unique identifier of the AI Gateway within the account. |
| `is_default` | `bool` |  |
| `log_classification` | `bool` |  |
| `log_management` | `int` |  |
| `log_management_strategy` | `str` |  |
| `logpush` | `bool` |  |
| `logpush_public_key` | `str` |  |
| `modified_at` | `str` |  |
| `otel` | `list` |  |
| `rate_limiting_interval` | `int` |  |
| `rate_limiting_limit` | `int` |  |
| `rate_limiting_technique` | `str` |  |
| `result` | `str` |  |
| `retry_backoff` | `str` | Backoff strategy for retry delays |
| `retry_delay` | `int` | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `int` | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `dict` |  |
| `store_id` | `str` |  |
| `stripe` | `dict` |  |
| `success` | `bool` |  |
| `workers_ai_billing_mode` | `str` | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `bool` |  |

#### Example: Load

```python
ai_gateway_gateway = client.AiGatewayGateway().load({"id": "ai_gateway_gateway_id", "account_id": "account_id"})
```

#### Example: List

```python
ai_gateway_gateways = client.AiGatewayGateway().list({"account_id": "example"})
```

#### Example: Create

```python
ai_gateway_gateway = client.AiGatewayGateway().create({
    "account_id": "example_account_id",  # str
    "cache_invalidate_on_update": True,  # bool
    "cache_ttl": 1,  # int
    "collect_logs": True,  # bool
    "created_at": "example_created_at",  # str
    "guardrails": {},  # dict
    "id": "example_id",  # str
    "modified_at": "example_modified_at",  # str
    "rate_limiting_interval": 1,  # int
    "rate_limiting_limit": 1,  # int
    "result": "example_result",  # str
    "stripe": {},  # dict
    "success": True,  # bool
})
```


### AiGatewayLog

Create an instance: `ai_gateway_log = client.AiGatewayLog()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cached` | `bool` |  |
| `cost` | `float` |  |
| `created_at` | `str` |  |
| `custom_cost` | `bool` |  |
| `duration` | `int` |  |
| `feedback` | `float` |  |
| `id` | `str` |  |
| `metadata` | `str` |  |
| `model` | `str` |  |
| `model_type` | `str` |  |
| `path` | `str` |  |
| `provider` | `str` |  |
| `request_content_type` | `str` |  |
| `request_head` | `str` |  |
| `request_head_complete` | `bool` |  |
| `request_size` | `int` |  |
| `request_type` | `str` |  |
| `response_content_type` | `str` |  |
| `response_head` | `str` |  |
| `response_head_complete` | `bool` |  |
| `response_size` | `int` |  |
| `score` | `float` |  |
| `status_code` | `int` |  |
| `step` | `int` |  |
| `success` | `bool` |  |
| `tokens_in` | `int` |  |
| `tokens_out` | `int` |  |

#### Example: Load

```python
ai_gateway_log = client.AiGatewayLog().load({"id": "ai_gateway_log_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### Example: List

```python
ai_gateway_logs = client.AiGatewayLog().list({"account_id": "example", "gateway_id": "example"})
```


### AiGatewayProviderConfig

Create an instance: `ai_gateway_provider_config = client.AiGatewayProviderConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `str` |  |
| `default_config` | `bool` |  |
| `gateway_id` | `str` | Unique identifier of the AI Gateway within the account. |
| `id` | `str` |  |
| `modified_at` | `str` |  |
| `provider_slug` | `str` |  |
| `rate_limit` | `float` |  |
| `rate_limit_period` | `float` |  |
| `secret` | `str` | Provider API key to store in the Secrets Store configured on the gateway. |
| `secret_id` | `str` |  |
| `secret_preview` | `str` |  |

#### Example: List

```python
ai_gateway_provider_configs = client.AiGatewayProviderConfig().list({"account_id": "example", "gateway_id": "example"})
```

#### Example: Create

```python
ai_gateway_provider_config = client.AiGatewayProviderConfig().create({
    "account_id": "example_account_id",  # str
    "gateway_id": "example_gateway_id",  # str
    "alias": "example_alias",  # str
    "default_config": True,  # bool
    "id": "example_id",  # str
    "modified_at": "example_modified_at",  # str
    "provider_slug": "example_provider_slug",  # str
    "secret_id": "example_secret_id",  # str
    "secret_preview": "example_secret_preview",  # str
})
```


### AiSearchAccountSearch

Create an instance: `ai_search_account_search = client.AiSearchAccountSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_search_options` | `dict` |  |
| `choices` | `list` |  |
| `chunks` | `list` |  |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` | OpenAI-compatible message array. |
| `model` | `str` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `str` |  |
| `query` | `str` | A simple text query string. |
| `query_kind` | `str` |  |
| `search_query` | `str` |  |
| `stream` | `bool` |  |

#### Example: Create

```python
ai_search_account_search = client.AiSearchAccountSearch().create({
    "account_id": "example_account_id",  # str
    "ai_search_options": {},  # dict
    "choices": [],  # list
    "chunks": [],  # list
    "query_kind": "example_query_kind",  # str
})
```


### AiSearchInstance

Create an instance: `ai_search_instance = client.AiSearchInstance()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_gateway_id` | `str` |  |
| `ai_search_model` | `str` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `dict` |  |
| `cache` | `bool` |  |
| `cache_threshold` | `str` |  |
| `cache_ttl` | `Any` | Cache entry TTL in seconds. |
| `choices` | `list` |  |
| `chunk` | `bool` |  |
| `chunk_overlap` | `int` |  |
| `chunk_size` | `int` |  |
| `chunks` | `list` |  |
| `completed` | `int` |  |
| `created_at` | `str` |  |
| `created_by` | `str` |  |
| `custom_metadata` | `list` |  |
| `degraded` | `bool` | True when status counts are unavailable (e.g. |
| `embedding_model` | `str` |  |
| `enable` | `bool` |  |
| `engine` | `dict` | Engine-specific metadata. |
| `engine_version` | `float` |  |
| `error` | `int` |  |
| `file_embed_errors` | `dict` |  |
| `fusion_method` | `str` |  |
| `hybrid_search_enabled` | `bool` | Deprecated — use index_method instead. |
| `id` | `str` | AI Search instance ID. |
| `index_method` | `dict` | Controls which storage backends are used during indexing. |
| `index_source_errors` | `dict` |  |
| `indexing_options` | `dict` |  |
| `last_activity` | `str` |  |
| `max_num_results` | `int` |  |
| `messages` | `list` |  |
| `metadata` | `dict` |  |
| `model` | `str` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `str` |  |
| `modified_by` | `str` |  |
| `namespace` | `str` |  |
| `object` | `str` |  |
| `outdated` | `int` |  |
| `paused` | `bool` |  |
| `public_endpoint_id` | `str` |  |
| `public_endpoint_params` | `dict` |  |
| `queued` | `int` |  |
| `reranking` | `bool` |  |
| `reranking_model` | `str` |  |
| `retrieval_options` | `dict` |  |
| `rewrite_model` | `str` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `bool` |  |
| `running` | `int` |  |
| `score_threshold` | `float` |  |
| `skipped` | `int` |  |
| `source` | `str` |  |
| `source_params` | `dict` |  |
| `status` | `str` |  |
| `stream` | `bool` |  |
| `summarization` | `bool` |  |
| `summarization_model` | `str` |  |
| `sync_interval` | `Any` | Interval between automatic syncs, in seconds. |
| `system_prompt_ai_search` | `str` |  |
| `system_prompt_index_summarization` | `str` |  |
| `system_prompt_rewrite_query` | `str` |  |
| `token_id` | `str` |  |
| `type` | `str` | Source type. |

#### Example: Load

```python
ai_search_instance = client.AiSearchInstance().load({"id": "ai_search_instance_id", "account_id": "account_id"})
```

#### Example: List

```python
ai_search_instances = client.AiSearchInstance().list({"account_id": "example"})
```

#### Example: Create

```python
ai_search_instance = client.AiSearchInstance().create({
    "account_id": "example_account_id",  # str
    "choices": [],  # list
    "chunks": [],  # list
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "index_method": {},  # dict
    "messages": [],  # list
    "modified_at": "example_modified_at",  # str
})
```


### AiSearchInstancesItem

Create an instance: `ai_search_instances_item = client.AiSearchInstancesItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `checksum` | `str` |  |
| `chunkCount` | `int` |  |
| `chunks_count` | `int` |  |
| `created_at` | `str` |  |
| `end_byte` | `float` |  |
| `error` | `str` |  |
| `errorType` | `str` |  |
| `fileKey` | `str` |  |
| `file_size` | `float` |  |
| `id` | `str` |  |
| `item` | `dict` |  |
| `key` | `str` | Item key / filename. |
| `last_seen_at` | `str` |  |
| `message` | `str` |  |
| `metadata` | `dict` | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `str` |  |
| `next_action` | `str` |  |
| `processingTimeMs` | `int` |  |
| `source_id` | `str` | Identifies which data source this item belongs to. |
| `start_byte` | `float` |  |
| `status` | `str` |  |
| `text` | `str` |  |
| `timestamp` | `str` |  |
| `wait_for_completion` | `bool` | Wait for indexing to fully complete before responding. |
| `warnings` | `list` |  |

#### Example: Load

```python
ai_search_instances_item = client.AiSearchInstancesItem().load({"id": "ai_search_instances_item_id", "account_id": "account_id", "instance_id": "instance_id", "namespace_id": "namespace_id"})
```

#### Example: List

```python
ai_search_instances_items = client.AiSearchInstancesItem().list({"account_id": "example", "instance_id": "example", "namespace_id": "example"})
```

#### Example: Create

```python
ai_search_instances_item = client.AiSearchInstancesItem().create({
    "account_id": "example_account_id",  # str
    "instance_id": "example_instance_id",  # str
    "namespace_id": "example_namespace_id",  # str
    "action": "example_action",  # str
    "checksum": "example_checksum",  # str
    "chunkCount": 1,  # int
    "chunks_count": 1,  # int
    "created_at": "example_created_at",  # str
    "errorType": "example_errorType",  # str
    "fileKey": "example_fileKey",  # str
    "file_size": 1,  # float
    "id": "example_id",  # str
    "item": {},  # dict
    "key": "example_key",  # str
    "last_seen_at": "example_last_seen_at",  # str
    "message": "example_message",  # str
    "metadata": {},  # dict
    "namespace": "example_namespace",  # str
    "next_action": "example_next_action",  # str
    "processingTimeMs": 1,  # int
    "source_id": "example_source_id",  # str
    "status": "example_status",  # str
    "text": "example_text",  # str
    "timestamp": "example_timestamp",  # str
})
```


### AiSearchInstancesJob

Create an instance: `ai_search_instances_job = client.AiSearchInstancesJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` |  |
| `created_at` | `float` |  |
| `description` | `str` |  |
| `end_reason` | `str` |  |
| `ended_at` | `str` |  |
| `id` | `str` |  |
| `last_seen_at` | `str` |  |
| `message` | `str` |  |
| `message_type` | `int` |  |
| `source` | `str` |  |
| `started_at` | `str` |  |

#### Example: Load

```python
ai_search_instances_job = client.AiSearchInstancesJob().load({"id": "ai_search_instances_job_id", "account_id": "account_id", "instance_id": "instance_id"})
```

#### Example: List

```python
ai_search_instances_jobs = client.AiSearchInstancesJob().list({"account_id": "example", "instance_id": "example"})
```

#### Example: Create

```python
ai_search_instances_job = client.AiSearchInstancesJob().create({
    "account_id": "example_account_id",  # str
    "instance_id": "example_instance_id",  # str
    "action": "example_action",  # str
    "created_at": 1,  # float
    "id": "example_id",  # str
    "message": "example_message",  # str
    "message_type": 1,  # int
    "source": "example_source",  # str
})
```


### AiSearchNamespace

Create an instance: `ai_search_namespace = client.AiSearchNamespace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `description` | `str` | Optional description for the namespace. |
| `id` | `str` |  |
| `name` | `str` |  |
| `new_namespace` | `str` | Target namespace to move the instance into. |
| `public_endpoint_id` | `str` |  |
| `public_endpoint_params` | `dict` |  |

#### Example: Load

```python
ai_search_namespace = client.AiSearchNamespace().load({"id": "ai_search_namespace_id", "account_id": "account_id"})
```

#### Example: List

```python
ai_search_namespaces = client.AiSearchNamespace().list({"account_id": "example"})
```

#### Example: Create

```python
ai_search_namespace = client.AiSearchNamespace().create({
    "account_id": "example_account_id",  # str
    "created_at": "example_created_at",  # str
    "name": "example_name",  # str
    "new_namespace": "example_new_namespace",  # str
})
```


### AiSearchToken

Create an instance: `ai_search_token = client.AiSearchToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cf_api_id` | `str` |  |
| `cf_api_key` | `str` |  |
| `created_at` | `str` |  |
| `created_by` | `str` |  |
| `enabled` | `bool` |  |
| `id` | `str` |  |
| `legacy` | `bool` |  |
| `modified_at` | `str` |  |
| `modified_by` | `str` |  |
| `name` | `str` |  |

#### Example: Load

```python
ai_search_token = client.AiSearchToken().load({"id": "ai_search_token_id", "account_id": "account_id"})
```

#### Example: List

```python
ai_search_tokens = client.AiSearchToken().list({"account_id": "example"})
```

#### Example: Create

```python
ai_search_token = client.AiSearchToken().create({
    "account_id": "example_account_id",  # str
    "cf_api_id": "example_cf_api_id",  # str
    "cf_api_key": "example_cf_api_key",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "modified_at": "example_modified_at",  # str
    "name": "example_name",  # str
})
```


### AigBillingCreateTopup

Create an instance: `aig_billing_create_topup = client.AigBillingCreateTopup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Top-up amount in cents (min 1000). |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `payment_method_id` | `str` | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: Create

```python
aig_billing_create_topup = client.AigBillingCreateTopup().create({
    "account_id": "example_account_id",  # str
    "amount": 1,  # int
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```


### AigBillingDeleteSpendingLimit

Create an instance: `aig_billing_delete_spending_limit = client.AigBillingDeleteSpendingLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingDeleteTopupConfig

Create an instance: `aig_billing_delete_topup_config = client.AigBillingDeleteTopupConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingGetCreditBalance

Create an instance: `aig_billing_get_credit_balance = client.AigBillingGetCreditBalance()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
aig_billing_get_credit_balances = client.AigBillingGetCreditBalance().list({"account_id": "example"})
```


### AigBillingGetInvoiceHistory

Create an instance: `aig_billing_get_invoice_history = client.AigBillingGetInvoiceHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
aig_billing_get_invoice_historys = client.AigBillingGetInvoiceHistory().list({"account_id": "example"})
```


### AigBillingGetInvoicePreview

Create an instance: `aig_billing_get_invoice_preview = client.AigBillingGetInvoicePreview()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
aig_billing_get_invoice_previews = client.AigBillingGetInvoicePreview().list({"account_id": "example"})
```


### AigBillingGetSpendingLimit

Create an instance: `aig_billing_get_spending_limit = client.AigBillingGetSpendingLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
aig_billing_get_spending_limits = client.AigBillingGetSpendingLimit().list({"account_id": "example"})
```


### AigBillingGetTopupConfig

Create an instance: `aig_billing_get_topup_config = client.AigBillingGetTopupConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
aig_billing_get_topup_configs = client.AigBillingGetTopupConfig().list({"account_id": "example"})
```


### AigBillingGetTopupEligibility

Create an instance: `aig_billing_get_topup_eligibility = client.AigBillingGetTopupEligibility()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `payment_methods` | `list` | Account-level payment methods, forwarded by the dashboard. |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: Create

```python
aig_billing_get_topup_eligibility = client.AigBillingGetTopupEligibility().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```


### AigBillingGetTopupLimit

Create an instance: `aig_billing_get_topup_limit = client.AigBillingGetTopupLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
aig_billing_get_topup_limits = client.AigBillingGetTopupLimit().list({"account_id": "example"})
```


### AigBillingGetUsageHistory

Create an instance: `aig_billing_get_usage_history = client.AigBillingGetUsageHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: List

```python
aig_billing_get_usage_historys = client.AigBillingGetUsageHistory().list({"account_id": "example", "value_grouping_window": "example"})
```


### AigBillingSetSpendingLimit

Create an instance: `aig_billing_set_spending_limit = client.AigBillingSetSpendingLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Spending limit amount in cents (min 100). |
| `duration` | `str` | Spending limit duration. |
| `strategy` | `str` | Spending limit strategy. |

#### Example: Create

```python
aig_billing_set_spending_limit = client.AigBillingSetSpendingLimit().create({
    "account_id": "example_account_id",  # str
    "amount": 1,  # int
    "duration": "example_duration",  # str
    "strategy": "example_strategy",  # str
})
```


### AigBillingSetTopupConfig

Create an instance: `aig_billing_set_topup_config = client.AigBillingSetTopupConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Auto top-up amount in cents (min 1000). |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |
| `threshold` | `int` | Balance threshold in cents that triggers auto top-up (min 500). |

#### Example: Create

```python
aig_billing_set_topup_config = client.AigBillingSetTopupConfig().create({
    "account_id": "example_account_id",  # str
    "amount": 1,  # int
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
    "threshold": 1,  # int
})
```


### AigBillingTopupStatus

Create an instance: `aig_billing_topup_status = client.AigBillingTopupStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `payment_intent_id` | `str` | Stripe invoice ID to check status for. |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: Create

```python
aig_billing_topup_status = client.AigBillingTopupStatus().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "payment_intent_id": "example_payment_intent_id",  # str
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```


### AutoRagJob

Create an instance: `auto_rag_job = client.AutoRagJob()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `float` |  |
| `end_reason` | `str` |  |
| `ended_at` | `str` |  |
| `id` | `str` |  |
| `last_seen_at` | `str` |  |
| `message` | `str` |  |
| `message_type` | `int` |  |
| `source` | `str` |  |
| `started_at` | `str` |  |

#### Example: Load

```python
auto_rag_job = client.AutoRagJob().load({"id": "auto_rag_job_id", "account_id": "account_id", "rag_id": "rag_id"})
```

#### Example: List

```python
auto_rag_jobs = client.AutoRagJob().list({"account_id": "example", "rag_id": "example"})
```


### AutoRagRag

Create an instance: `auto_rag_rag = client.AutoRagRag()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error` | `str` |  |
| `job_id` | `str` |  |
| `key` | `str` |  |

#### Example: List

```python
auto_rag_rags = client.AutoRagRag().list({"account_id": "example", "rag_id": "example"})
```


### AutoRagRagSearch

Create an instance: `auto_rag_rag_search = client.AutoRagRagSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `filters` | `Any` |  |
| `has_more` | `bool` |  |
| `max_num_results` | `int` |  |
| `model` | `Any` |  |
| `next_page` | `str` |  |
| `object` | `str` |  |
| `query` | `str` |  |
| `ranking_options` | `dict` |  |
| `reranking` | `dict` |  |
| `response` | `str` |  |
| `rewrite_query` | `bool` |  |
| `search_query` | `str` |  |
| `stream` | `bool` |  |
| `system_prompt` | `str` |  |

#### Example: Create

```python
auto_rag_rag_search = client.AutoRagRagSearch().create({
    "account_id": "example_account_id",  # str
    "rag_id": "example_rag_id",  # str
    "query": "example_query",  # str
    "response": "example_response",  # str
    "search_query": "example_search_query",  # str
})
```


### FinetuneAsset

Create an instance: `finetune_asset = client.FinetuneAsset()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file_name` | `str` |  |
| `file_url` | `str` |  |
| `id` | `str` |  |

#### Example: Load

```python
finetune_asset = client.FinetuneAsset().load({"id": "finetune_asset_id", "account_id": "account_id", "finetune_id": "finetune_id"})
```


### Memory

Create an instance: `memory = client.Memory()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | Always empty for a successful response. |
| `id` | `str` |  |
| `messages` | `list` | Informational, non-error messages, if any. |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` | Always true for a successful response. |

#### Example: Load

```python
memory = client.Memory().load({"id": "memory_id", "account_id": "account_id", "namespace_id": "namespace_id", "profile_id": "profile_id"})
```

#### Example: List

```python
memorys = client.Memory().list({"account_id": "example"})
```

#### Example: Create

```python
memory = client.Memory().create({
    "account_id": "example_account_id",  # str
    "namespace_id": "example_namespace_id",  # str
    "profile_name": "example_profile_name",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### Namespace

Create an instance: `namespace = client.Namespace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | Always empty for a successful response. |
| `id` | `str` |  |
| `messages` | `list` | Informational, non-error messages, if any. |
| `name` | `str` | Namespace name. |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` | Always true for a successful response. |

#### Example: Load

```python
namespace = client.Namespace().load({"id": "namespace_id", "account_id": "account_id"})
```

#### Example: List

```python
namespaces = client.Namespace().list({"account_id": "example"})
```

#### Example: Create

```python
namespace = client.Namespace().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```


### Vectorize

Create an instance: `vectorize = client.Vectorize()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Any` |  |
| `description` | `str` | Specifies the description of the index. |
| `errors` | `list` |  |
| `ids` | `list` | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `str` | Specifies the type of metadata property to index. |
| `messages` | `list` |  |
| `name` | `str` |  |
| `propertyName` | `str` | Specifies the metadata property to index. |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```python
vectorize = client.Vectorize().load({"account_id": "account_id"})
```

#### Example: List

```python
vectorizes = client.Vectorize().list({"account_id": "example"})
```

#### Example: Create

```python
vectorize = client.Vectorize().create({
    "account_id": "example_account_id",  # str
    "config": "example_config",  # Any
    "errors": [],  # list
    "indexType": "example_indexType",  # str
    "messages": [],  # list
    "name": "example_name",  # str
    "propertyName": "example_propertyName",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```


### VectorizeBetaDeprecated

Create an instance: `vectorize_beta__deprecated = client.VectorizeBetaDeprecated()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Any` |  |
| `description` | `str` | Specifies the description of the index. |
| `errors` | `list` |  |
| `ids` | `list` | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `list` |  |
| `name` | `str` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```python
vectorize_beta__deprecated = client.VectorizeBetaDeprecated().load({"account_id": "account_id", "index_name": "index_name"})
```

#### Example: List

```python
vectorize_beta__deprecateds = client.VectorizeBetaDeprecated().list({"account_id": "example"})
```

#### Example: Create

```python
vectorize_beta__deprecated = client.VectorizeBetaDeprecated().create({
    "account_id": "example_account_id",  # str
    "config": "example_config",  # Any
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "success": True,  # bool
})
```


### WorkersAi

Create an instance: `workers_ai = client.WorkersAi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `extension` | `str` |  |
| `input` | `dict` | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `list` |  |
| `mimeType` | `str` |  |
| `model` | `str` | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `dict` |  |
| `output` | `dict` |  |
| `result` | `dict` | Model-specific output. |
| `success` | `bool` |  |

#### Example: Load

```python
workers_ai = client.WorkersAi().load({"account_id": "account_id"})
```

#### Example: List

```python
workers_ais = client.WorkersAi().list({"account_id": "example"})
```

#### Example: Create

```python
workers_ai = client.WorkersAi().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "extension": "example_extension",  # str
    "input": {},  # dict
    "messages": [],  # list
    "mimeType": "example_mimeType",  # str
    "model": "example_model",  # str
    "output": {},  # dict
    "success": True,  # bool
})
```


### WorkersAiFinetune

Create an instance: `workers_ai_finetune = client.WorkersAiFinetune()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `model` | `str` |  |
| `modified_at` | `str` |  |
| `name` | `str` |  |
| `public` | `bool` |  |
| `success` | `bool` |  |

#### Example: Load

```python
workers_ai_finetune = client.WorkersAiFinetune().load({"account_id": "account_id"})
```

#### Example: List

```python
workers_ai_finetunes = client.WorkersAiFinetune().list({"account_id": "example"})
```

#### Example: Create

```python
workers_ai_finetune = client.WorkersAiFinetune().create({
    "account_id": "example_account_id",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "model": "example_model",  # str
    "modified_at": "example_modified_at",  # str
    "name": "example_name",  # str
    "public": True,  # bool
    "success": True,  # bool
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflareai_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflareai_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
workersaifinetune = client.WorkersAiFinetune()
workersaifinetune.list()

# workersaifinetune.data_get() now returns the workersaifinetune data from the last list
# workersaifinetune.match_get() returns the last match criteria
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
