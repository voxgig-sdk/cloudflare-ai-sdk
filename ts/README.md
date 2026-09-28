# CloudflareAi TypeScript SDK



The TypeScript SDK for the CloudflareAi API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Account()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-ai-sdk/releases](https://github.com/voxgig-sdk/cloudflare-ai-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareAiSDK } from '@voxgig-sdk/cloudflare-ai-sdk'

const client = new CloudflareAiSDK({
  apikey: process.env.CLOUDFLARE_AI_APIKEY,
})
```

### 3. Load an aigatewaycustomdomain

AiGatewayCustomDomain is nested under account, so provide the `account_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const aigatewaycustomdomain = await client.AiGatewayCustomDomain().load({
    account_id: 'example_account_id',
    gateway_id: 'example_gateway_id',
    id: 'example_id',
  })
  console.log(aigatewaycustomdomain)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Update
const updated = await client.Account().update({
  id: 'example_id',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const workersaifinetunes = await client.WorkersAiFinetune().list()
  console.log(workersaifinetunes)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareAiSDK.test()

const workersaifinetune = await client.WorkersAiFinetune().list()
// workersaifinetune is the entity, populated with mock response data
// — call workersaifinetune.data() for the record itself
console.log(workersaifinetune)
```

You can also use the instance method:

```ts
const client = new CloudflareAiSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.WorkersAiFinetune()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareAiSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareAiSDK

#### Constructor

```ts
new CloudflareAiSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Account(data?)` | `AccountEntity` | Create an Account entity instance. |
| `AiGateway(data?)` | `AiGatewayEntity` | Create an AiGateway entity instance. |
| `AiGatewayCustomDomain(data?)` | `AiGatewayCustomDomainEntity` | Create an AiGatewayCustomDomain entity instance. |
| `AiGatewayCustomProvider(data?)` | `AiGatewayCustomProviderEntity` | Create an AiGatewayCustomProvider entity instance. |
| `AiGatewayCustomProviderCost(data?)` | `AiGatewayCustomProviderCostEntity` | Create an AiGatewayCustomProviderCost entity instance. |
| `AiGatewayDataset(data?)` | `AiGatewayDatasetEntity` | Create an AiGatewayDataset entity instance. |
| `AiGatewayDynamicRoute(data?)` | `AiGatewayDynamicRouteEntity` | Create an AiGatewayDynamicRoute entity instance. |
| `AiGatewayEvaluation(data?)` | `AiGatewayEvaluationEntity` | Create an AiGatewayEvaluation entity instance. |
| `AiGatewayGateway(data?)` | `AiGatewayGatewayEntity` | Create an AiGatewayGateway entity instance. |
| `AiGatewayLog(data?)` | `AiGatewayLogEntity` | Create an AiGatewayLog entity instance. |
| `AiGatewayProviderConfig(data?)` | `AiGatewayProviderConfigEntity` | Create an AiGatewayProviderConfig entity instance. |
| `AiSearchAccountSearch(data?)` | `AiSearchAccountSearchEntity` | Create an AiSearchAccountSearch entity instance. |
| `AiSearchInstance(data?)` | `AiSearchInstanceEntity` | Create an AiSearchInstance entity instance. |
| `AiSearchInstancesItem(data?)` | `AiSearchInstancesItemEntity` | Create an AiSearchInstancesItem entity instance. |
| `AiSearchInstancesJob(data?)` | `AiSearchInstancesJobEntity` | Create an AiSearchInstancesJob entity instance. |
| `AiSearchNamespace(data?)` | `AiSearchNamespaceEntity` | Create an AiSearchNamespace entity instance. |
| `AiSearchToken(data?)` | `AiSearchTokenEntity` | Create an AiSearchToken entity instance. |
| `AigBillingCreateTopup(data?)` | `AigBillingCreateTopupEntity` | Create an AigBillingCreateTopup entity instance. |
| `AigBillingDeleteSpendingLimit(data?)` | `AigBillingDeleteSpendingLimitEntity` | Create an AigBillingDeleteSpendingLimit entity instance. |
| `AigBillingDeleteTopupConfig(data?)` | `AigBillingDeleteTopupConfigEntity` | Create an AigBillingDeleteTopupConfig entity instance. |
| `AigBillingGetCreditBalance(data?)` | `AigBillingGetCreditBalanceEntity` | Create an AigBillingGetCreditBalance entity instance. |
| `AigBillingGetInvoiceHistory(data?)` | `AigBillingGetInvoiceHistoryEntity` | Create an AigBillingGetInvoiceHistory entity instance. |
| `AigBillingGetInvoicePreview(data?)` | `AigBillingGetInvoicePreviewEntity` | Create an AigBillingGetInvoicePreview entity instance. |
| `AigBillingGetSpendingLimit(data?)` | `AigBillingGetSpendingLimitEntity` | Create an AigBillingGetSpendingLimit entity instance. |
| `AigBillingGetTopupConfig(data?)` | `AigBillingGetTopupConfigEntity` | Create an AigBillingGetTopupConfig entity instance. |
| `AigBillingGetTopupEligibility(data?)` | `AigBillingGetTopupEligibilityEntity` | Create an AigBillingGetTopupEligibility entity instance. |
| `AigBillingGetTopupLimit(data?)` | `AigBillingGetTopupLimitEntity` | Create an AigBillingGetTopupLimit entity instance. |
| `AigBillingGetUsageHistory(data?)` | `AigBillingGetUsageHistoryEntity` | Create an AigBillingGetUsageHistory entity instance. |
| `AigBillingSetSpendingLimit(data?)` | `AigBillingSetSpendingLimitEntity` | Create an AigBillingSetSpendingLimit entity instance. |
| `AigBillingSetTopupConfig(data?)` | `AigBillingSetTopupConfigEntity` | Create an AigBillingSetTopupConfig entity instance. |
| `AigBillingTopupStatus(data?)` | `AigBillingTopupStatusEntity` | Create an AigBillingTopupStatus entity instance. |
| `AutoRagJob(data?)` | `AutoRagJobEntity` | Create an AutoRagJob entity instance. |
| `AutoRagRag(data?)` | `AutoRagRagEntity` | Create an AutoRagRag entity instance. |
| `AutoRagRagSearch(data?)` | `AutoRagRagSearchEntity` | Create an AutoRagRagSearch entity instance. |
| `FinetuneAsset(data?)` | `FinetuneAssetEntity` | Create a FinetuneAsset entity instance. |
| `Memory(data?)` | `MemoryEntity` | Create a Memory entity instance. |
| `Namespace(data?)` | `NamespaceEntity` | Create a Namespace entity instance. |
| `Vectorize(data?)` | `VectorizeEntity` | Create a Vectorize entity instance. |
| `VectorizeBetaDeprecated(data?)` | `VectorizeBetaDeprecatedEntity` | Create a VectorizeBetaDeprecated entity instance. |
| `WorkersAi(data?)` | `WorkersAiEntity` | Create a WorkersAi entity instance. |
| `WorkersAiFinetune(data?)` | `WorkersAiFinetuneEntity` | Create a WorkersAiFinetune entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareAiSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareAiSDK.test(testopts?, sdkopts?)` | `CloudflareAiSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareAiSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Account

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, update.

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

Operations: create.

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

Operations: create, list, load, remove.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, load, remove, update.

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

Operations: create, list, load, remove.

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

Operations: create, list, load, remove, update.

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

Operations: list, load, remove, update.

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

Operations: create, list, remove, update.

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

Operations: create.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, patch, remove, update.

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

Operations: create, list, load, update.

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

Operations: create, list, load, patch, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create.

API path: `/accounts/{account_id}/ai-gateway/billing/topup`

#### AigBillingDeleteSpendingLimit

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/ai-gateway/billing/spending-limit`

#### AigBillingDeleteTopupConfig

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/config`

#### AigBillingGetCreditBalance

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list.

API path: `/accounts/{account_id}/ai-gateway/billing/credit-balance`

#### AigBillingGetInvoiceHistory

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list.

API path: `/accounts/{account_id}/ai-gateway/billing/invoice-history`

#### AigBillingGetInvoicePreview

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list.

API path: `/accounts/{account_id}/ai-gateway/billing/invoice-preview`

#### AigBillingGetSpendingLimit

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list.

API path: `/accounts/{account_id}/ai-gateway/billing/spending-limit`

#### AigBillingGetTopupConfig

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list.

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

Operations: create.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/eligibility`

#### AigBillingGetTopupLimit

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list.

API path: `/accounts/{account_id}/ai-gateway/billing/topup/limits`

#### AigBillingGetUsageHistory

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: list.

API path: `/accounts/{account_id}/ai-gateway/billing/usage-history`

#### AigBillingSetSpendingLimit

| Field | Description |
| --- | --- |
| `amount` | Spending limit amount in cents (min 100). |
| `duration` | Spending limit duration. |
| `strategy` | Spending limit strategy. |

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: list, load.

API path: `/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs`

#### AutoRagRag

| Field | Description |
| --- | --- |
| `error` |  |
| `job_id` |  |
| `key` |  |

Operations: list, update.

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

Operations: create.

API path: `/accounts/{account_id}/autorag/rags/{id}/ai-search`

#### FinetuneAsset

| Field | Description |
| --- | --- |
| `file_name` |  |
| `file_url` |  |
| `id` |  |

Operations: load.

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

Operations: create, list, load, remove.

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

Operations: create, list, load, remove.

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

Operations: create, list, load, remove.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load.

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

Operations: create, list, load, remove.

API path: `/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets`



## Entities


### Account

Create an instance: `const account = client.Account()`

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

```ts
const account = await client.Account().load({ id: 'account_id' })
```


### AiGateway

Create an instance: `const ai_gateway = client.AiGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byokAlias` | `string` |  |
| `items` | `any[]` |  |
| `limit` | `number` |  |
| `metadata` | `Record<string, any>` |  |
| `options` | `Record<string, any>` |  |
| `provider` | `string` |  |
| `query` | `string` |  |

#### Example: Create

```ts
const ai_gateway = await client.AiGateway().create({
  account_id: 'example_account_id',
  items: [],
  metadata: {},
  options: {},
  query: 'example_query',
})
```


### AiGatewayCustomDomain

Create an instance: `const ai_gateway_custom_domain = client.AiGatewayCustomDomain()`

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

```ts
const ai_gateway_custom_domain = await client.AiGatewayCustomDomain().load({ id: 'ai_gateway_custom_domain_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### Example: List

```ts
const ai_gateway_custom_domains = await client.AiGatewayCustomDomain().list({ account_id: "example", gateway_id: "example" })
```

#### Example: Create

```ts
const ai_gateway_custom_domain = await client.AiGatewayCustomDomain().create({
  account_id: 'example_account_id',
  gateway_id: 'example_gateway_id',
  cname_target: 'example_cname_target',
  created_at: 1,
  domain: 'example_domain',
  hostname: 'example_hostname',
  modified_at: 1,
  ssl_hostname_id: 'example_ssl_hostname_id',
  status: 'example_status',
  zone_id: 'example_zone_id',
})
```


### AiGatewayCustomProvider

Create an instance: `const ai_gateway_custom_provider = client.AiGatewayCustomProvider()`

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

```ts
const ai_gateway_custom_provider = await client.AiGatewayCustomProvider().load({ id: 'ai_gateway_custom_provider_id', account_id: 'account_id' })
```

#### Example: List

```ts
const ai_gateway_custom_providers = await client.AiGatewayCustomProvider().list({ account_id: "example" })
```

#### Example: Create

```ts
const ai_gateway_custom_provider = await client.AiGatewayCustomProvider().create({
  account_id: 'example_account_id',
  base_url: 'example_base_url',
  created_at: 'example_created_at',
  id: 'example_id',
  modified_at: 'example_modified_at',
  name: 'example_name',
  slug: 'example_slug',
})
```


### AiGatewayCustomProviderCost

Create an instance: `const ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost()`

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

```ts
const ai_gateway_custom_provider_cost = await client.AiGatewayCustomProviderCost().load({ id: 'ai_gateway_custom_provider_cost_id', account_id: 'account_id' })
```

#### Example: List

```ts
const ai_gateway_custom_provider_costs = await client.AiGatewayCustomProviderCost().list({ account_id: "example" })
```

#### Example: Create

```ts
const ai_gateway_custom_provider_cost = await client.AiGatewayCustomProviderCost().create({
  account_id: 'example_account_id',
  account_provider_id: 'example_account_provider_id',
  created_at: 'example_created_at',
  id: 'example_id',
  model: 'example_model',
  modified_at: 'example_modified_at',
})
```


### AiGatewayDataset

Create an instance: `const ai_gateway_dataset = client.AiGatewayDataset()`

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
| `filters` | `any[]` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |

#### Example: Load

```ts
const ai_gateway_dataset = await client.AiGatewayDataset().load({ id: 'ai_gateway_dataset_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### Example: List

```ts
const ai_gateway_datasets = await client.AiGatewayDataset().list({ account_id: "example", gateway_id: "example" })
```

#### Example: Create

```ts
const ai_gateway_dataset = await client.AiGatewayDataset().create({
  account_id: 'example_account_id',
  gateway_id: 'example_gateway_id',
  created_at: 'example_created_at',
  enable: true,
  filters: [],
  id: 'example_id',
  modified_at: 'example_modified_at',
  name: 'example_name',
})
```


### AiGatewayDynamicRoute

Create an instance: `const ai_gateway_dynamic_route = client.AiGatewayDynamicRoute()`

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
| `deployment` | `Record<string, any>` |  |
| `deployments` | `any[]` |  |
| `elements` | `any[]` |  |
| `gateway_id` | `string` |  |
| `id` | `string` |  |
| `is_valid` | `boolean` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `order_by` | `string` |  |
| `order_by_direction` | `string` |  |
| `page` | `number` |  |
| `per_page` | `number` |  |
| `routes` | `any[]` |  |
| `version` | `Record<string, any>` |  |
| `version_id` | `string` |  |
| `versions` | `any[]` |  |

#### Example: Load

```ts
const ai_gateway_dynamic_route = await client.AiGatewayDynamicRoute().load({ id: 'ai_gateway_dynamic_route_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### Example: Create

```ts
const ai_gateway_dynamic_route = await client.AiGatewayDynamicRoute().create({
  account_id: 'example_account_id',
  gateway_id: 'example_gateway_id',
  account_tag: 'example_account_tag',
  active: true,
  created_at: 'example_created_at',
  data: 'example_data',
  deployment: {},
  deployments: [],
  elements: [],
  id: 'example_id',
  modified_at: 'example_modified_at',
  name: 'example_name',
  order_by: 'example_order_by',
  order_by_direction: 'example_order_by_direction',
  page: 1,
  per_page: 1,
  routes: [],
  version: {},
  version_id: 'example_version_id',
  versions: [],
})
```


### AiGatewayEvaluation

Create an instance: `const ai_gateway_evaluation = client.AiGatewayEvaluation()`

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
| `dataset_ids` | `any[]` |  |
| `datasets` | `any[]` |  |
| `description` | `string` |  |
| `enable` | `boolean` |  |
| `evaluation_type_ids` | `any[]` |  |
| `gateway_id` | `string` | Unique identifier of the AI Gateway within the account. |
| `id` | `string` |  |
| `mandatory` | `boolean` |  |
| `modified_at` | `string` |  |
| `name` | `string` |  |
| `processed` | `boolean` |  |
| `results` | `any[]` |  |
| `total_logs` | `number` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const ai_gateway_evaluation = await client.AiGatewayEvaluation().load({ id: 'ai_gateway_evaluation_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### Example: List

```ts
const ai_gateway_evaluations = await client.AiGatewayEvaluation().list({ account_id: "example" })
```

#### Example: Create

```ts
const ai_gateway_evaluation = await client.AiGatewayEvaluation().create({
  account_id: 'example_account_id',
  gateway_id: 'example_gateway_id',
  created_at: 'example_created_at',
  dataset_ids: [],
  datasets: [],
  description: 'example_description',
  enable: true,
  evaluation_type_ids: [],
  id: 'example_id',
  mandatory: true,
  modified_at: 'example_modified_at',
  name: 'example_name',
  processed: true,
  results: [],
  total_logs: 1,
  type: 'example_type',
})
```


### AiGatewayGateway

Create an instance: `const ai_gateway_gateway = client.AiGatewayGateway()`

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
| `guardrails` | `Record<string, any>` |  |
| `id` | `string` | Unique identifier of the AI Gateway within the account. |
| `is_default` | `boolean` |  |
| `log_classification` | `boolean` |  |
| `log_management` | `number` |  |
| `log_management_strategy` | `string` |  |
| `logpush` | `boolean` |  |
| `logpush_public_key` | `string` |  |
| `modified_at` | `string` |  |
| `otel` | `any[]` |  |
| `rate_limiting_interval` | `number` |  |
| `rate_limiting_limit` | `number` |  |
| `rate_limiting_technique` | `string` |  |
| `result` | `string` |  |
| `retry_backoff` | `string` | Backoff strategy for retry delays |
| `retry_delay` | `number` | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `number` | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `Record<string, any>` |  |
| `store_id` | `string` |  |
| `stripe` | `Record<string, any>` |  |
| `success` | `boolean` |  |
| `workers_ai_billing_mode` | `string` | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `boolean` |  |

#### Example: Load

```ts
const ai_gateway_gateway = await client.AiGatewayGateway().load({ id: 'ai_gateway_gateway_id', account_id: 'account_id' })
```

#### Example: List

```ts
const ai_gateway_gateways = await client.AiGatewayGateway().list({ account_id: "example" })
```

#### Example: Create

```ts
const ai_gateway_gateway = await client.AiGatewayGateway().create({
  account_id: 'example_account_id',
  cache_invalidate_on_update: true,
  cache_ttl: 1,
  collect_logs: true,
  created_at: 'example_created_at',
  guardrails: {},
  id: 'example_id',
  modified_at: 'example_modified_at',
  rate_limiting_interval: 1,
  rate_limiting_limit: 1,
  result: 'example_result',
  stripe: {},
  success: true,
})
```


### AiGatewayLog

Create an instance: `const ai_gateway_log = client.AiGatewayLog()`

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

```ts
const ai_gateway_log = await client.AiGatewayLog().load({ id: 'ai_gateway_log_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### Example: List

```ts
const ai_gateway_logs = await client.AiGatewayLog().list({ account_id: "example", gateway_id: "example" })
```


### AiGatewayProviderConfig

Create an instance: `const ai_gateway_provider_config = client.AiGatewayProviderConfig()`

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

```ts
const ai_gateway_provider_configs = await client.AiGatewayProviderConfig().list({ account_id: "example", gateway_id: "example" })
```

#### Example: Create

```ts
const ai_gateway_provider_config = await client.AiGatewayProviderConfig().create({
  account_id: 'example_account_id',
  gateway_id: 'example_gateway_id',
  alias: 'example_alias',
  default_config: true,
  id: 'example_id',
  modified_at: 'example_modified_at',
  provider_slug: 'example_provider_slug',
  secret_id: 'example_secret_id',
  secret_preview: 'example_secret_preview',
})
```


### AiSearchAccountSearch

Create an instance: `const ai_search_account_search = client.AiSearchAccountSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_search_options` | `Record<string, any>` |  |
| `choices` | `any[]` |  |
| `chunks` | `any[]` |  |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` | OpenAI-compatible message array. |
| `model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `string` |  |
| `query` | `string` | A simple text query string. |
| `query_kind` | `string` |  |
| `search_query` | `string` |  |
| `stream` | `boolean` |  |

#### Example: Create

```ts
const ai_search_account_search = await client.AiSearchAccountSearch().create({
  account_id: 'example_account_id',
  ai_search_options: {},
  choices: [],
  chunks: [],
  query_kind: 'example_query_kind',
})
```


### AiSearchInstance

Create an instance: `const ai_search_instance = client.AiSearchInstance()`

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
| `ai_search_options` | `Record<string, any>` |  |
| `cache` | `boolean` |  |
| `cache_threshold` | `string` |  |
| `cache_ttl` | `any` | Cache entry TTL in seconds. |
| `choices` | `any[]` |  |
| `chunk` | `boolean` |  |
| `chunk_overlap` | `number` |  |
| `chunk_size` | `number` |  |
| `chunks` | `any[]` |  |
| `completed` | `number` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `custom_metadata` | `any[]` |  |
| `degraded` | `boolean` | True when status counts are unavailable (e.g. |
| `embedding_model` | `string` |  |
| `enable` | `boolean` |  |
| `engine` | `Record<string, any>` | Engine-specific metadata. |
| `engine_version` | `number` |  |
| `error` | `number` |  |
| `file_embed_errors` | `Record<string, any>` |  |
| `fusion_method` | `string` |  |
| `hybrid_search_enabled` | `boolean` | Deprecated — use index_method instead. |
| `id` | `string` | AI Search instance ID. |
| `index_method` | `Record<string, any>` | Controls which storage backends are used during indexing. |
| `index_source_errors` | `Record<string, any>` |  |
| `indexing_options` | `Record<string, any>` |  |
| `last_activity` | `string` |  |
| `max_num_results` | `number` |  |
| `messages` | `any[]` |  |
| `metadata` | `Record<string, any>` |  |
| `model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `string` |  |
| `modified_by` | `string` |  |
| `namespace` | `string` |  |
| `object` | `string` |  |
| `outdated` | `number` |  |
| `paused` | `boolean` |  |
| `public_endpoint_id` | `string` |  |
| `public_endpoint_params` | `Record<string, any>` |  |
| `queued` | `number` |  |
| `reranking` | `boolean` |  |
| `reranking_model` | `string` |  |
| `retrieval_options` | `Record<string, any>` |  |
| `rewrite_model` | `string` | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `boolean` |  |
| `running` | `number` |  |
| `score_threshold` | `number` |  |
| `skipped` | `number` |  |
| `source` | `string` |  |
| `source_params` | `Record<string, any>` |  |
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

```ts
const ai_search_instance = await client.AiSearchInstance().load({ id: 'ai_search_instance_id', account_id: 'account_id' })
```

#### Example: List

```ts
const ai_search_instances = await client.AiSearchInstance().list({ account_id: "example" })
```

#### Example: Create

```ts
const ai_search_instance = await client.AiSearchInstance().create({
  account_id: 'example_account_id',
  choices: [],
  chunks: [],
  created_at: 'example_created_at',
  id: 'example_id',
  index_method: {},
  messages: [],
  modified_at: 'example_modified_at',
})
```


### AiSearchInstancesItem

Create an instance: `const ai_search_instances_item = client.AiSearchInstancesItem()`

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
| `item` | `Record<string, any>` |  |
| `key` | `string` | Item key / filename. |
| `last_seen_at` | `string` |  |
| `message` | `string` |  |
| `metadata` | `Record<string, any>` | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `string` |  |
| `next_action` | `string` |  |
| `processingTimeMs` | `number` |  |
| `source_id` | `string` | Identifies which data source this item belongs to. |
| `start_byte` | `number` |  |
| `status` | `string` |  |
| `text` | `string` |  |
| `timestamp` | `string` |  |
| `wait_for_completion` | `boolean` | Wait for indexing to fully complete before responding. |
| `warnings` | `any[]` |  |

#### Example: Load

```ts
const ai_search_instances_item = await client.AiSearchInstancesItem().load({ id: 'ai_search_instances_item_id', account_id: 'account_id', instance_id: 'instance_id', namespace_id: 'namespace_id' })
```

#### Example: List

```ts
const ai_search_instances_items = await client.AiSearchInstancesItem().list({ account_id: "example", instance_id: "example", namespace_id: "example" })
```

#### Example: Create

```ts
const ai_search_instances_item = await client.AiSearchInstancesItem().create({
  account_id: 'example_account_id',
  instance_id: 'example_instance_id',
  namespace_id: 'example_namespace_id',
  action: 'example_action',
  checksum: 'example_checksum',
  chunkCount: 1,
  chunks_count: 1,
  created_at: 'example_created_at',
  errorType: 'example_errorType',
  fileKey: 'example_fileKey',
  file_size: 1,
  id: 'example_id',
  item: {},
  key: 'example_key',
  last_seen_at: 'example_last_seen_at',
  message: 'example_message',
  metadata: {},
  namespace: 'example_namespace',
  next_action: 'example_next_action',
  processingTimeMs: 1,
  source_id: 'example_source_id',
  status: 'example_status',
  text: 'example_text',
  timestamp: 'example_timestamp',
})
```


### AiSearchInstancesJob

Create an instance: `const ai_search_instances_job = client.AiSearchInstancesJob()`

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

```ts
const ai_search_instances_job = await client.AiSearchInstancesJob().load({ id: 'ai_search_instances_job_id', account_id: 'account_id', instance_id: 'instance_id' })
```

#### Example: List

```ts
const ai_search_instances_jobs = await client.AiSearchInstancesJob().list({ account_id: "example", instance_id: "example" })
```

#### Example: Create

```ts
const ai_search_instances_job = await client.AiSearchInstancesJob().create({
  account_id: 'example_account_id',
  instance_id: 'example_instance_id',
  action: 'example_action',
  created_at: 1,
  id: 'example_id',
  message: 'example_message',
  message_type: 1,
  source: 'example_source',
})
```


### AiSearchNamespace

Create an instance: `const ai_search_namespace = client.AiSearchNamespace()`

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
| `public_endpoint_params` | `Record<string, any>` |  |

#### Example: Load

```ts
const ai_search_namespace = await client.AiSearchNamespace().load({ id: 'ai_search_namespace_id', account_id: 'account_id' })
```

#### Example: List

```ts
const ai_search_namespaces = await client.AiSearchNamespace().list({ account_id: "example" })
```

#### Example: Create

```ts
const ai_search_namespace = await client.AiSearchNamespace().create({
  account_id: 'example_account_id',
  created_at: 'example_created_at',
  name: 'example_name',
  new_namespace: 'example_new_namespace',
})
```


### AiSearchToken

Create an instance: `const ai_search_token = client.AiSearchToken()`

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

```ts
const ai_search_token = await client.AiSearchToken().load({ id: 'ai_search_token_id', account_id: 'account_id' })
```

#### Example: List

```ts
const ai_search_tokens = await client.AiSearchToken().list({ account_id: "example" })
```

#### Example: Create

```ts
const ai_search_token = await client.AiSearchToken().create({
  account_id: 'example_account_id',
  cf_api_id: 'example_cf_api_id',
  cf_api_key: 'example_cf_api_key',
  created_at: 'example_created_at',
  id: 'example_id',
  modified_at: 'example_modified_at',
  name: 'example_name',
})
```


### AigBillingCreateTopup

Create an instance: `const aig_billing_create_topup = client.AigBillingCreateTopup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Top-up amount in cents (min 1000). |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `payment_method_id` | `string` | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Create

```ts
const aig_billing_create_topup = await client.AigBillingCreateTopup().create({
  account_id: 'example_account_id',
  amount: 1,
  errors: [],
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```


### AigBillingDeleteSpendingLimit

Create an instance: `const aig_billing_delete_spending_limit = client.AigBillingDeleteSpendingLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingDeleteTopupConfig

Create an instance: `const aig_billing_delete_topup_config = client.AigBillingDeleteTopupConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AigBillingGetCreditBalance

Create an instance: `const aig_billing_get_credit_balance = client.AigBillingGetCreditBalance()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const aig_billing_get_credit_balances = await client.AigBillingGetCreditBalance().list({ account_id: "example" })
```


### AigBillingGetInvoiceHistory

Create an instance: `const aig_billing_get_invoice_history = client.AigBillingGetInvoiceHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const aig_billing_get_invoice_historys = await client.AigBillingGetInvoiceHistory().list({ account_id: "example" })
```


### AigBillingGetInvoicePreview

Create an instance: `const aig_billing_get_invoice_preview = client.AigBillingGetInvoicePreview()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const aig_billing_get_invoice_previews = await client.AigBillingGetInvoicePreview().list({ account_id: "example" })
```


### AigBillingGetSpendingLimit

Create an instance: `const aig_billing_get_spending_limit = client.AigBillingGetSpendingLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const aig_billing_get_spending_limits = await client.AigBillingGetSpendingLimit().list({ account_id: "example" })
```


### AigBillingGetTopupConfig

Create an instance: `const aig_billing_get_topup_config = client.AigBillingGetTopupConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const aig_billing_get_topup_configs = await client.AigBillingGetTopupConfig().list({ account_id: "example" })
```


### AigBillingGetTopupEligibility

Create an instance: `const aig_billing_get_topup_eligibility = client.AigBillingGetTopupEligibility()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `payment_methods` | `any[]` | Account-level payment methods, forwarded by the dashboard. |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Create

```ts
const aig_billing_get_topup_eligibility = await client.AigBillingGetTopupEligibility().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```


### AigBillingGetTopupLimit

Create an instance: `const aig_billing_get_topup_limit = client.AigBillingGetTopupLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const aig_billing_get_topup_limits = await client.AigBillingGetTopupLimit().list({ account_id: "example" })
```


### AigBillingGetUsageHistory

Create an instance: `const aig_billing_get_usage_history = client.AigBillingGetUsageHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const aig_billing_get_usage_historys = await client.AigBillingGetUsageHistory().list({ account_id: "example", value_grouping_window: "example" })
```


### AigBillingSetSpendingLimit

Create an instance: `const aig_billing_set_spending_limit = client.AigBillingSetSpendingLimit()`

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

```ts
const aig_billing_set_spending_limit = await client.AigBillingSetSpendingLimit().create({
  account_id: 'example_account_id',
  amount: 1,
  duration: 'example_duration',
  strategy: 'example_strategy',
})
```


### AigBillingSetTopupConfig

Create an instance: `const aig_billing_set_topup_config = client.AigBillingSetTopupConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Auto top-up amount in cents (min 1000). |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |
| `threshold` | `number` | Balance threshold in cents that triggers auto top-up (min 500). |

#### Example: Create

```ts
const aig_billing_set_topup_config = await client.AigBillingSetTopupConfig().create({
  account_id: 'example_account_id',
  amount: 1,
  errors: [],
  messages: [],
  result: {},
  result_info: {},
  success: true,
  threshold: 1,
})
```


### AigBillingTopupStatus

Create an instance: `const aig_billing_topup_status = client.AigBillingTopupStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `payment_intent_id` | `string` | Stripe invoice ID to check status for. |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Create

```ts
const aig_billing_topup_status = await client.AigBillingTopupStatus().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  payment_intent_id: 'example_payment_intent_id',
  result: {},
  result_info: {},
  success: true,
})
```


### AutoRagJob

Create an instance: `const auto_rag_job = client.AutoRagJob()`

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

```ts
const auto_rag_job = await client.AutoRagJob().load({ id: 'auto_rag_job_id', account_id: 'account_id', rag_id: 'rag_id' })
```

#### Example: List

```ts
const auto_rag_jobs = await client.AutoRagJob().list({ account_id: "example", rag_id: "example" })
```


### AutoRagRag

Create an instance: `const auto_rag_rag = client.AutoRagRag()`

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

```ts
const auto_rag_rags = await client.AutoRagRag().list({ account_id: "example", rag_id: "example" })
```


### AutoRagRagSearch

Create an instance: `const auto_rag_rag_search = client.AutoRagRagSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `filters` | `any` |  |
| `has_more` | `boolean` |  |
| `max_num_results` | `number` |  |
| `model` | `any` |  |
| `next_page` | `string` |  |
| `object` | `string` |  |
| `query` | `string` |  |
| `ranking_options` | `Record<string, any>` |  |
| `reranking` | `Record<string, any>` |  |
| `response` | `string` |  |
| `rewrite_query` | `boolean` |  |
| `search_query` | `string` |  |
| `stream` | `boolean` |  |
| `system_prompt` | `string` |  |

#### Example: Create

```ts
const auto_rag_rag_search = await client.AutoRagRagSearch().create({
  account_id: 'example_account_id',
  rag_id: 'example_rag_id',
  query: 'example_query',
  response: 'example_response',
  search_query: 'example_search_query',
})
```


### FinetuneAsset

Create an instance: `const finetune_asset = client.FinetuneAsset()`

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

```ts
const finetune_asset = await client.FinetuneAsset().load({ id: 'finetune_asset_id', account_id: 'account_id', finetune_id: 'finetune_id' })
```


### Memory

Create an instance: `const memory = client.Memory()`

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
| `errors` | `any[]` | Always empty for a successful response. |
| `id` | `string` |  |
| `messages` | `any[]` | Informational, non-error messages, if any. |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` | Always true for a successful response. |

#### Example: Load

```ts
const memory = await client.Memory().load({ id: 'memory_id', account_id: 'account_id', namespace_id: 'namespace_id', profile_id: 'profile_id' })
```

#### Example: List

```ts
const memorys = await client.Memory().list({ account_id: "example" })
```

#### Example: Create

```ts
const memory = await client.Memory().create({
  account_id: 'example_account_id',
  namespace_id: 'example_namespace_id',
  profile_name: 'example_profile_name',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### Namespace

Create an instance: `const namespace = client.Namespace()`

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
| `errors` | `any[]` | Always empty for a successful response. |
| `id` | `string` |  |
| `messages` | `any[]` | Informational, non-error messages, if any. |
| `name` | `string` | Namespace name. |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` | Always true for a successful response. |

#### Example: Load

```ts
const namespace = await client.Namespace().load({ id: 'namespace_id', account_id: 'account_id' })
```

#### Example: List

```ts
const namespaces = await client.Namespace().list({ account_id: "example" })
```

#### Example: Create

```ts
const namespace = await client.Namespace().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: {},
  success: true,
})
```


### Vectorize

Create an instance: `const vectorize = client.Vectorize()`

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
| `errors` | `any[]` |  |
| `ids` | `any[]` | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `string` | Specifies the type of metadata property to index. |
| `messages` | `any[]` |  |
| `name` | `string` |  |
| `propertyName` | `string` | Specifies the metadata property to index. |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```ts
const vectorize = await client.Vectorize().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const vectorizes = await client.Vectorize().list({ account_id: "example" })
```

#### Example: Create

```ts
const vectorize = await client.Vectorize().create({
  account_id: 'example_account_id',
  config: 'example_config',
  errors: [],
  indexType: 'example_indexType',
  messages: [],
  name: 'example_name',
  propertyName: 'example_propertyName',
  result: {},
  success: true,
})
```


### VectorizeBetaDeprecated

Create an instance: `const vectorize_beta__deprecated = client.VectorizeBetaDeprecated()`

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
| `errors` | `any[]` |  |
| `ids` | `any[]` | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `any[]` |  |
| `name` | `string` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```ts
const vectorize_beta__deprecated = await client.VectorizeBetaDeprecated().load({ account_id: 'account_id', index_name: 'index_name' })
```

#### Example: List

```ts
const vectorize_beta__deprecateds = await client.VectorizeBetaDeprecated().list({ account_id: "example" })
```

#### Example: Create

```ts
const vectorize_beta__deprecated = await client.VectorizeBetaDeprecated().create({
  account_id: 'example_account_id',
  config: 'example_config',
  errors: [],
  messages: [],
  name: 'example_name',
  success: true,
})
```


### WorkersAi

Create an instance: `const workers_ai = client.WorkersAi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `extension` | `string` |  |
| `input` | `Record<string, any>` | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `any[]` |  |
| `mimeType` | `string` |  |
| `model` | `string` | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `Record<string, any>` |  |
| `output` | `Record<string, any>` |  |
| `result` | `Record<string, any>` | Model-specific output. |
| `success` | `boolean` |  |

#### Example: Load

```ts
const workers_ai = await client.WorkersAi().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const workers_ais = await client.WorkersAi().list({ account_id: "example" })
```

#### Example: Create

```ts
const workers_ai = await client.WorkersAi().create({
  account_id: 'example_account_id',
  errors: [],
  extension: 'example_extension',
  input: {},
  messages: [],
  mimeType: 'example_mimeType',
  model: 'example_model',
  output: {},
  success: true,
})
```


### WorkersAiFinetune

Create an instance: `const workers_ai_finetune = client.WorkersAiFinetune()`

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

```ts
const workers_ai_finetune = await client.WorkersAiFinetune().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const workers_ai_finetunes = await client.WorkersAiFinetune().list({ account_id: "example" })
```

#### Example: Create

```ts
const workers_ai_finetune = await client.WorkersAiFinetune().create({
  account_id: 'example_account_id',
  created_at: 'example_created_at',
  id: 'example_id',
  model: 'example_model',
  modified_at: 'example_modified_at',
  name: 'example_name',
  public: true,
  success: true,
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-ai/
├── src/
│   ├── CloudflareAiSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareAiSDK } from '@voxgig-sdk/cloudflare-ai-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const workersaifinetune = client.WorkersAiFinetune()
await workersaifinetune.list()

// workersaifinetune.data() now returns the workersaifinetune data from the last `list`
// workersaifinetune.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
