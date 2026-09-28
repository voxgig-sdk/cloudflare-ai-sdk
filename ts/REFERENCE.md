# CloudflareAi TypeScript SDK Reference

Complete API reference for the CloudflareAi TypeScript SDK.


## CloudflareAiSDK

### Constructor

```ts
new CloudflareAiSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareAiSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareAiSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareAiSDK` instance in test mode.


### Instance Methods

#### `Account(data?: object)`

Create a new `Account` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountEntity` instance.

#### `AiGateway(data?: object)`

Create a new `AiGateway` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayEntity` instance.

#### `AiGatewayCustomDomain(data?: object)`

Create a new `AiGatewayCustomDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayCustomDomainEntity` instance.

#### `AiGatewayCustomProvider(data?: object)`

Create a new `AiGatewayCustomProvider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayCustomProviderEntity` instance.

#### `AiGatewayCustomProviderCost(data?: object)`

Create a new `AiGatewayCustomProviderCost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayCustomProviderCostEntity` instance.

#### `AiGatewayDataset(data?: object)`

Create a new `AiGatewayDataset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayDatasetEntity` instance.

#### `AiGatewayDynamicRoute(data?: object)`

Create a new `AiGatewayDynamicRoute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayDynamicRouteEntity` instance.

#### `AiGatewayEvaluation(data?: object)`

Create a new `AiGatewayEvaluation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayEvaluationEntity` instance.

#### `AiGatewayGateway(data?: object)`

Create a new `AiGatewayGateway` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayGatewayEntity` instance.

#### `AiGatewayLog(data?: object)`

Create a new `AiGatewayLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayLogEntity` instance.

#### `AiGatewayProviderConfig(data?: object)`

Create a new `AiGatewayProviderConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiGatewayProviderConfigEntity` instance.

#### `AiSearchAccountSearch(data?: object)`

Create a new `AiSearchAccountSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiSearchAccountSearchEntity` instance.

#### `AiSearchInstance(data?: object)`

Create a new `AiSearchInstance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiSearchInstanceEntity` instance.

#### `AiSearchInstancesItem(data?: object)`

Create a new `AiSearchInstancesItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiSearchInstancesItemEntity` instance.

#### `AiSearchInstancesJob(data?: object)`

Create a new `AiSearchInstancesJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiSearchInstancesJobEntity` instance.

#### `AiSearchNamespace(data?: object)`

Create a new `AiSearchNamespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiSearchNamespaceEntity` instance.

#### `AiSearchToken(data?: object)`

Create a new `AiSearchToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiSearchTokenEntity` instance.

#### `AigBillingCreateTopup(data?: object)`

Create a new `AigBillingCreateTopup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingCreateTopupEntity` instance.

#### `AigBillingDeleteSpendingLimit(data?: object)`

Create a new `AigBillingDeleteSpendingLimit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingDeleteSpendingLimitEntity` instance.

#### `AigBillingDeleteTopupConfig(data?: object)`

Create a new `AigBillingDeleteTopupConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingDeleteTopupConfigEntity` instance.

#### `AigBillingGetCreditBalance(data?: object)`

Create a new `AigBillingGetCreditBalance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingGetCreditBalanceEntity` instance.

#### `AigBillingGetInvoiceHistory(data?: object)`

Create a new `AigBillingGetInvoiceHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingGetInvoiceHistoryEntity` instance.

#### `AigBillingGetInvoicePreview(data?: object)`

Create a new `AigBillingGetInvoicePreview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingGetInvoicePreviewEntity` instance.

#### `AigBillingGetSpendingLimit(data?: object)`

Create a new `AigBillingGetSpendingLimit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingGetSpendingLimitEntity` instance.

#### `AigBillingGetTopupConfig(data?: object)`

Create a new `AigBillingGetTopupConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingGetTopupConfigEntity` instance.

#### `AigBillingGetTopupEligibility(data?: object)`

Create a new `AigBillingGetTopupEligibility` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingGetTopupEligibilityEntity` instance.

#### `AigBillingGetTopupLimit(data?: object)`

Create a new `AigBillingGetTopupLimit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingGetTopupLimitEntity` instance.

#### `AigBillingGetUsageHistory(data?: object)`

Create a new `AigBillingGetUsageHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingGetUsageHistoryEntity` instance.

#### `AigBillingSetSpendingLimit(data?: object)`

Create a new `AigBillingSetSpendingLimit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingSetSpendingLimitEntity` instance.

#### `AigBillingSetTopupConfig(data?: object)`

Create a new `AigBillingSetTopupConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingSetTopupConfigEntity` instance.

#### `AigBillingTopupStatus(data?: object)`

Create a new `AigBillingTopupStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AigBillingTopupStatusEntity` instance.

#### `AutoRagJob(data?: object)`

Create a new `AutoRagJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutoRagJobEntity` instance.

#### `AutoRagRag(data?: object)`

Create a new `AutoRagRag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutoRagRagEntity` instance.

#### `AutoRagRagSearch(data?: object)`

Create a new `AutoRagRagSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutoRagRagSearchEntity` instance.

#### `FinetuneAsset(data?: object)`

Create a new `FinetuneAsset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FinetuneAssetEntity` instance.

#### `Memory(data?: object)`

Create a new `Memory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemoryEntity` instance.

#### `Namespace(data?: object)`

Create a new `Namespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NamespaceEntity` instance.

#### `Vectorize(data?: object)`

Create a new `Vectorize` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VectorizeEntity` instance.

#### `VectorizeBetaDeprecated(data?: object)`

Create a new `VectorizeBetaDeprecated` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VectorizeBetaDeprecatedEntity` instance.

#### `WorkersAi(data?: object)`

Create a new `WorkersAi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersAiEntity` instance.

#### `WorkersAiFinetune(data?: object)`

Create a new `WorkersAiFinetune` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkersAiFinetuneEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareAiSDK.test()`.

**Returns:** `CloudflareAiSDK` instance in test mode.


---

## AccountEntity

```ts
const account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `ai_gateway_logging_state` | `/accounts/{account_id}/ai-gateway/logging-state` | `client.Account().load({ $action: 'ai_gateway_logging_state', ... })` |
| `ai_gateway_logging_state` | `/accounts/{account_id}/ai-gateway/logging-state` | `client.Account().update({ $action: 'ai_gateway_logging_state', ... })` |

An action returns that action's OWN response, which is not necessarily a
Account record — check the API definition for its shape.

```ts
const result = await client.Account().load({
  $action: 'ai_gateway_logging_state',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Account().load({ id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Account().update({
  id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayEntity

```ts
const ai_gateway = client.AiGateway()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byokAlias` | `string` | No |  |
| `items` | `any[]` | Yes |  |
| `limit` | `number` | No |  |
| `metadata` | `Record<string, any>` | Yes |  |
| `options` | `Record<string, any>` | Yes |  |
| `provider` | `string` | No |  |
| `query` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGateway().create({
  account_id: 'example_account_id',
  items: [],
  metadata: {},
  options: {},
  query: 'example_query',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayCustomDomainEntity

```ts
const ai_gateway_custom_domain = client.AiGatewayCustomDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cname_target` | `string` | Yes |  |
| `created_at` | `number` | Yes | epoch milliseconds |
| `domain` | `string` | Yes | Custom hostname that you own, such as `ai.example.com`. |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `hostname` | `string` | Yes | Custom hostname that you own, such as `ai.example.com`. |
| `id` | `string` | No |  |
| `minTLS` | `string` | No |  |
| `modified_at` | `number` | Yes | epoch milliseconds |
| `ssl_hostname_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `zone_id` | `string` | Yes | ID of the Cloudflare zone that contains the custom hostname. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayCustomDomain().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayCustomDomain().list({ account_id: "example", gateway_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiGatewayCustomDomain().load({ id: 'ai_gateway_custom_domain_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGatewayCustomDomain().remove({ id: 'ai_gateway_custom_domain_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayCustomDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayCustomProviderEntity

```ts
const ai_gateway_custom_provider = client.AiGatewayCustomProvider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `string` | Yes |  |
| `beta` | `boolean` | No |  |
| `created_at` | `string` | Yes |  |
| `curl_example` | `string` | No |  |
| `description` | `string` | No |  |
| `enable` | `boolean` | No |  |
| `headers` | `string` | No | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `id` | `string` | Yes |  |
| `js_example` | `string` | No |  |
| `link` | `string` | No |  |
| `logo` | `string` | No |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `number` | No |  |
| `slug` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `base_url` | - | - | - | Yes | - |
| `beta` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `curl_example` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `enable` | - | - | - | - | - |
| `headers` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `js_example` | - | - | - | - | - |
| `link` | - | - | - | - | - |
| `logo` | - | - | - | - | - |
| `modified_at` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `position` | - | - | - | - | - |
| `slug` | - | - | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayCustomProvider().create({
  account_id: 'example_account_id',
  base_url: 'example_base_url',
  created_at: 'example_created_at',
  id: 'example_id',
  modified_at: 'example_modified_at',
  name: 'example_name',
  slug: 'example_slug',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayCustomProvider().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiGatewayCustomProvider().load({ id: 'ai_gateway_custom_provider_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGatewayCustomProvider().remove({ id: 'ai_gateway_custom_provider_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiGatewayCustomProvider().update({
  id: 'ai_gateway_custom_provider_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayCustomProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayCustomProviderCostEntity

```ts
const ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_provider_id` | `string` | Yes | ID of the custom provider that the pricing rule applies to. |
| `changed_by` | `string` | No |  |
| `cost_in` | `number` | No |  |
| `cost_out` | `number` | No |  |
| `cost_type` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `enable` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `model_rule` | `string` | No |  |
| `modified_at` | `string` | Yes |  |
| `token_pricing` | `string` | No |  |
| `weight` | `number` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `account_provider_id` | - | - | - | - | - |
| `changed_by` | - | - | - | - | - |
| `cost_in` | - | - | - | - | - |
| `cost_out` | - | - | - | - | - |
| `cost_type` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `enable` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `model` | - | - | - | Yes | - |
| `model_rule` | - | - | - | - | - |
| `modified_at` | - | - | - | - | - |
| `token_pricing` | - | - | - | - | - |
| `weight` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayCustomProviderCost().create({
  account_id: 'example_account_id',
  account_provider_id: 'example_account_provider_id',
  created_at: 'example_created_at',
  id: 'example_id',
  model: 'example_model',
  modified_at: 'example_modified_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayCustomProviderCost().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiGatewayCustomProviderCost().load({ id: 'ai_gateway_custom_provider_cost_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGatewayCustomProviderCost().remove({ id: 'ai_gateway_custom_provider_cost_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiGatewayCustomProviderCost().update({
  id: 'ai_gateway_custom_provider_cost_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayCustomProviderCostEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayDatasetEntity

```ts
const ai_gateway_dataset = client.AiGatewayDataset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `enable` | `boolean` | Yes |  |
| `filters` | `any[]` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayDataset().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayDataset().list({ account_id: "example", gateway_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiGatewayDataset().load({ id: 'ai_gateway_dataset_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGatewayDataset().remove({ id: 'ai_gateway_dataset_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiGatewayDataset().update({
  id: 'ai_gateway_dataset_id',
  account_id: 'account_id',
  gateway_id: 'gateway_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayDatasetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayDynamicRouteEntity

```ts
const ai_gateway_dynamic_route = client.AiGatewayDynamicRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_tag` | `string` | Yes |  |
| `active` | `boolean` | Yes |  |
| `created_at` | `string` | Yes |  |
| `data` | `string` | Yes |  |
| `deployment` | `Record<string, any>` | Yes |  |
| `deployments` | `any[]` | Yes |  |
| `elements` | `any[]` | Yes |  |
| `gateway_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_valid` | `boolean` | No |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `order_by` | `string` | Yes |  |
| `order_by_direction` | `string` | Yes |  |
| `page` | `number` | Yes |  |
| `per_page` | `number` | Yes |  |
| `routes` | `any[]` | Yes |  |
| `version` | `Record<string, any>` | Yes |  |
| `version_id` | `string` | Yes |  |
| `versions` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayDynamicRoute().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiGatewayDynamicRoute().load({ id: 'ai_gateway_dynamic_route_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGatewayDynamicRoute().remove({ id: 'ai_gateway_dynamic_route_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiGatewayDynamicRoute().update({
  id: 'ai_gateway_dynamic_route_id',
  account_id: 'account_id',
  gateway_id: 'gateway_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayDynamicRouteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayEvaluationEntity

```ts
const ai_gateway_evaluation = client.AiGatewayEvaluation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `dataset_ids` | `any[]` | Yes |  |
| `datasets` | `any[]` | Yes |  |
| `description` | `string` | Yes |  |
| `enable` | `boolean` | Yes |  |
| `evaluation_type_ids` | `any[]` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `mandatory` | `boolean` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `processed` | `boolean` | Yes |  |
| `results` | `any[]` | Yes |  |
| `total_logs` | `number` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayEvaluation().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayEvaluation().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiGatewayEvaluation().load({ id: 'ai_gateway_evaluation_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGatewayEvaluation().remove({ id: 'ai_gateway_evaluation_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayEvaluationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayGatewayEntity

```ts
const ai_gateway_gateway = client.AiGatewayGateway()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication` | `boolean` | No |  |
| `byok_only` | `boolean` | No | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `cache_invalidate_on_update` | `boolean` | Yes |  |
| `cache_ttl` | `number` | Yes |  |
| `collect_logs` | `boolean` | Yes |  |
| `created_at` | `string` | Yes |  |
| `dlp` | `any` | No |  |
| `guardrails` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `is_default` | `boolean` | No |  |
| `log_classification` | `boolean` | No |  |
| `log_management` | `number` | No |  |
| `log_management_strategy` | `string` | No |  |
| `logpush` | `boolean` | No |  |
| `logpush_public_key` | `string` | No |  |
| `modified_at` | `string` | Yes |  |
| `otel` | `any[]` | No |  |
| `rate_limiting_interval` | `number` | Yes |  |
| `rate_limiting_limit` | `number` | Yes |  |
| `rate_limiting_technique` | `string` | No |  |
| `result` | `string` | Yes |  |
| `retry_backoff` | `string` | No | Backoff strategy for retry delays |
| `retry_delay` | `number` | No | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `number` | No | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `Record<string, any>` | No |  |
| `store_id` | `string` | No |  |
| `stripe` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |
| `workers_ai_billing_mode` | `string` | No | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayGateway().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayGateway().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiGatewayGateway().load({ id: 'ai_gateway_gateway_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGatewayGateway().remove({ id: 'ai_gateway_gateway_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiGatewayGateway().update({
  id: 'ai_gateway_gateway_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayGatewayEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayLogEntity

```ts
const ai_gateway_log = client.AiGatewayLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cached` | `boolean` | Yes |  |
| `cost` | `number` | No |  |
| `created_at` | `string` | Yes |  |
| `custom_cost` | `boolean` | No |  |
| `duration` | `number` | Yes |  |
| `feedback` | `number` | No |  |
| `id` | `string` | Yes |  |
| `metadata` | `string` | No |  |
| `model` | `string` | Yes |  |
| `model_type` | `string` | No |  |
| `path` | `string` | Yes |  |
| `provider` | `string` | Yes |  |
| `request_content_type` | `string` | No |  |
| `request_head` | `string` | No |  |
| `request_head_complete` | `boolean` | No |  |
| `request_size` | `number` | No |  |
| `request_type` | `string` | No |  |
| `response_content_type` | `string` | No |  |
| `response_head` | `string` | No |  |
| `response_head_complete` | `boolean` | No |  |
| `response_size` | `number` | No |  |
| `score` | `number` | No |  |
| `status_code` | `number` | No |  |
| `step` | `number` | No |  |
| `success` | `boolean` | Yes |  |
| `tokens_in` | `number` | Yes |  |
| `tokens_out` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayLog().list({ account_id: "example", gateway_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiGatewayLog().load({ id: 'ai_gateway_log_id', account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGatewayLog().remove({ account_id: 'account_id', gateway_id: 'gateway_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiGatewayLog().update({
  id: 'ai_gateway_log_id',
  account_id: 'account_id',
  gateway_id: 'gateway_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiGatewayProviderConfigEntity

```ts
const ai_gateway_provider_config = client.AiGatewayProviderConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes |  |
| `default_config` | `boolean` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `provider_slug` | `string` | Yes |  |
| `rate_limit` | `number` | No |  |
| `rate_limit_period` | `number` | No |  |
| `secret` | `string` | No | Provider API key to store in the Secrets Store configured on the gateway. |
| `secret_id` | `string` | Yes |  |
| `secret_preview` | `string` | Yes |  |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `alias` | - | - | - | - |
| `default_config` | - | - | - | - |
| `gateway_id` | - | - | - | - |
| `id` | - | - | - | - |
| `modified_at` | - | - | - | - |
| `provider_slug` | - | - | - | - |
| `rate_limit` | - | - | - | - |
| `rate_limit_period` | - | - | - | - |
| `secret` | - | - | Yes | - |
| `secret_id` | - | Yes | - | - |
| `secret_preview` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiGatewayProviderConfig().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiGatewayProviderConfig().list({ account_id: "example", gateway_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiGatewayProviderConfig().remove({ account_id: 'account_id', gateway_id: 'gateway_id', id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiGatewayProviderConfig().update({
  account_id: 'account_id',
  gateway_id: 'gateway_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiGatewayProviderConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiSearchAccountSearchEntity

```ts
const ai_search_account_search = client.AiSearchAccountSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_search_options` | `Record<string, any>` | Yes |  |
| `choices` | `any[]` | Yes |  |
| `chunks` | `any[]` | Yes |  |
| `errors` | `any[]` | No |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | No | OpenAI-compatible message array. |
| `model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `string` | No |  |
| `query` | `string` | No | A simple text query string. |
| `query_kind` | `string` | Yes |  |
| `search_query` | `string` | No |  |
| `stream` | `boolean` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `ai_search_options` | - |
| `choices` | - |
| `chunks` | - |
| `errors` | - |
| `id` | - |
| `messages` | Yes |
| `model` | - |
| `object` | - |
| `query` | - |
| `query_kind` | - |
| `search_query` | - |
| `stream` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiSearchAccountSearch().create({
  account_id: 'example_account_id',
  ai_search_options: {},
  choices: [],
  chunks: [],
  query_kind: 'example_query_kind',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiSearchAccountSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiSearchInstanceEntity

```ts
const ai_search_instance = client.AiSearchInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_gateway_id` | `string` | No |  |
| `ai_search_model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `Record<string, any>` | No |  |
| `cache` | `boolean` | No |  |
| `cache_threshold` | `string` | No |  |
| `cache_ttl` | `any` | No | Cache entry TTL in seconds. |
| `choices` | `any[]` | Yes |  |
| `chunk` | `boolean` | No |  |
| `chunk_overlap` | `number` | No |  |
| `chunk_size` | `number` | No |  |
| `chunks` | `any[]` | Yes |  |
| `completed` | `number` | No |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | No |  |
| `custom_metadata` | `any[]` | No |  |
| `degraded` | `boolean` | No | True when status counts are unavailable (e.g. |
| `embedding_model` | `string` | No |  |
| `enable` | `boolean` | No |  |
| `engine` | `Record<string, any>` | No | Engine-specific metadata. |
| `engine_version` | `number` | No |  |
| `error` | `number` | No |  |
| `file_embed_errors` | `Record<string, any>` | No |  |
| `fusion_method` | `string` | No |  |
| `hybrid_search_enabled` | `boolean` | No | Deprecated — use index_method instead. |
| `id` | `string` | Yes | AI Search instance ID. |
| `index_method` | `Record<string, any>` | Yes | Controls which storage backends are used during indexing. |
| `index_source_errors` | `Record<string, any>` | No |  |
| `indexing_options` | `Record<string, any>` | No |  |
| `last_activity` | `string` | No |  |
| `max_num_results` | `number` | No |  |
| `messages` | `any[]` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `string` | Yes |  |
| `modified_by` | `string` | No |  |
| `namespace` | `string` | No |  |
| `object` | `string` | No |  |
| `outdated` | `number` | No |  |
| `paused` | `boolean` | No |  |
| `public_endpoint_id` | `string` | No |  |
| `public_endpoint_params` | `Record<string, any>` | No |  |
| `queued` | `number` | No |  |
| `reranking` | `boolean` | No |  |
| `reranking_model` | `string` | No |  |
| `retrieval_options` | `Record<string, any>` | No |  |
| `rewrite_model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `boolean` | No |  |
| `running` | `number` | No |  |
| `score_threshold` | `number` | No |  |
| `skipped` | `number` | No |  |
| `source` | `string` | No |  |
| `source_params` | `Record<string, any>` | No |  |
| `status` | `string` | No |  |
| `stream` | `boolean` | No |  |
| `summarization` | `boolean` | No |  |
| `summarization_model` | `string` | No |  |
| `sync_interval` | `any` | No | Interval between automatic syncs, in seconds. |
| `system_prompt_ai_search` | `string` | No |  |
| `system_prompt_index_summarization` | `string` | No |  |
| `system_prompt_rewrite_query` | `string` | No |  |
| `token_id` | `string` | No |  |
| `type` | `string` | No | Source type. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `ai_gateway_id` | - | Yes | - | - | - |
| `ai_search_model` | - | Yes | - | - | - |
| `ai_search_options` | - | - | - | - | - |
| `cache` | - | Yes | - | - | - |
| `cache_threshold` | - | Yes | - | - | - |
| `cache_ttl` | - | Yes | - | - | - |
| `choices` | - | - | - | - | - |
| `chunk` | - | Yes | - | - | - |
| `chunk_overlap` | - | Yes | - | - | - |
| `chunk_size` | - | Yes | - | - | - |
| `chunks` | - | - | - | - | - |
| `completed` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `created_by` | - | Yes | - | - | - |
| `custom_metadata` | - | Yes | - | - | - |
| `degraded` | - | - | - | - | - |
| `embedding_model` | - | Yes | - | - | - |
| `enable` | - | Yes | - | - | - |
| `engine` | - | - | - | - | - |
| `engine_version` | - | Yes | - | - | - |
| `error` | - | - | - | - | - |
| `file_embed_errors` | - | - | - | - | - |
| `fusion_method` | - | Yes | - | - | - |
| `hybrid_search_enabled` | - | Yes | - | - | - |
| `id` | - | - | Yes | - | - |
| `index_method` | - | - | - | - | - |
| `index_source_errors` | - | - | - | - | - |
| `indexing_options` | - | Yes | - | - | - |
| `last_activity` | - | Yes | - | - | - |
| `max_num_results` | - | Yes | - | - | - |
| `messages` | - | - | - | - | - |
| `metadata` | - | Yes | - | - | - |
| `model` | - | - | - | - | - |
| `modified_at` | - | - | - | - | - |
| `modified_by` | - | Yes | - | - | - |
| `namespace` | - | Yes | - | - | - |
| `object` | - | - | - | - | - |
| `outdated` | - | - | - | - | - |
| `paused` | - | Yes | - | - | - |
| `public_endpoint_id` | - | Yes | - | - | - |
| `public_endpoint_params` | - | Yes | - | - | - |
| `queued` | - | - | - | - | - |
| `reranking` | - | Yes | - | - | - |
| `reranking_model` | - | Yes | - | - | - |
| `retrieval_options` | - | Yes | - | - | - |
| `rewrite_model` | - | Yes | - | - | - |
| `rewrite_query` | - | Yes | - | - | - |
| `running` | - | - | - | - | - |
| `score_threshold` | - | Yes | - | - | - |
| `skipped` | - | - | - | - | - |
| `source` | - | Yes | - | - | - |
| `source_params` | - | Yes | - | - | - |
| `status` | - | Yes | - | - | - |
| `stream` | - | - | - | - | - |
| `summarization` | - | Yes | - | - | - |
| `summarization_model` | - | Yes | - | - | - |
| `sync_interval` | - | Yes | - | - | - |
| `system_prompt_ai_search` | - | Yes | - | - | - |
| `system_prompt_index_summarization` | - | Yes | - | - | - |
| `system_prompt_rewrite_query` | - | Yes | - | - | - |
| `token_id` | - | Yes | - | - | - |
| `type` | - | Yes | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `purge_cache` | `/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/purge_cache` | `client.AiSearchInstance().create({ $action: 'purge_cache', ... })` |
| `search` | `/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/search` | `client.AiSearchInstance().create({ $action: 'search', ... })` |
| `search` | `/accounts/{account_id}/ai-search/instances/{id}/search` | `client.AiSearchInstance().create({ $action: 'search', ... })` |

An action returns that action's OWN response, which is not necessarily a
AiSearchInstance record — check the API definition for its shape.

```ts
const result = await client.AiSearchInstance().create({
  $action: 'purge_cache',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiSearchInstance().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiSearchInstance().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiSearchInstance().load({ id: 'ai_search_instance_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiSearchInstance().remove({ id: 'ai_search_instance_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiSearchInstance().update({
  id: 'ai_search_instance_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiSearchInstanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiSearchInstancesItemEntity

```ts
const ai_search_instances_item = client.AiSearchInstancesItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `checksum` | `string` | Yes |  |
| `chunkCount` | `number` | Yes |  |
| `chunks_count` | `number` | Yes |  |
| `created_at` | `string` | Yes |  |
| `end_byte` | `number` | No |  |
| `error` | `string` | No |  |
| `errorType` | `string` | Yes |  |
| `fileKey` | `string` | Yes |  |
| `file_size` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `item` | `Record<string, any>` | Yes |  |
| `key` | `string` | Yes | Item key / filename. |
| `last_seen_at` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `metadata` | `Record<string, any>` | Yes | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `string` | Yes |  |
| `next_action` | `string` | Yes |  |
| `processingTimeMs` | `number` | Yes |  |
| `source_id` | `string` | Yes | Identifies which data source this item belongs to. |
| `start_byte` | `number` | No |  |
| `status` | `string` | Yes |  |
| `text` | `string` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `wait_for_completion` | `boolean` | No | Wait for indexing to fully complete before responding. |
| `warnings` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiSearchInstancesItem().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiSearchInstancesItem().list({ account_id: "example", instance_id: "example", namespace_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiSearchInstancesItem().load({ id: 'ai_search_instances_item_id', account_id: 'account_id', instance_id: 'instance_id', namespace_id: 'namespace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiSearchInstancesItem().remove({ id: 'ai_search_instances_item_id', account_id: 'account_id', instance_id: 'instance_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiSearchInstancesItem().update({
  id: 'ai_search_instances_item_id',
  account_id: 'account_id',
  instance_id: 'instance_id',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiSearchInstancesItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiSearchInstancesJobEntity

```ts
const ai_search_instances_job = client.AiSearchInstancesJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `created_at` | `number` | Yes |  |
| `description` | `string` | No |  |
| `end_reason` | `string` | No |  |
| `ended_at` | `string` | No |  |
| `id` | `string` | Yes |  |
| `last_seen_at` | `string` | No |  |
| `message` | `string` | Yes |  |
| `message_type` | `number` | Yes |  |
| `source` | `string` | Yes |  |
| `started_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiSearchInstancesJob().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiSearchInstancesJob().list({ account_id: "example", instance_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiSearchInstancesJob().load({ id: 'ai_search_instances_job_id', account_id: 'account_id', instance_id: 'instance_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiSearchInstancesJob().update({
  id: 'ai_search_instances_job_id',
  account_id: 'account_id',
  instance_id: 'instance_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiSearchInstancesJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiSearchNamespaceEntity

```ts
const ai_search_namespace = client.AiSearchNamespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No | Optional description for the namespace. |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `new_namespace` | `string` | Yes | Target namespace to move the instance into. |
| `public_endpoint_id` | `string` | No |  |
| `public_endpoint_params` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiSearchNamespace().create({
  account_id: 'example_account_id',
  created_at: 'example_created_at',
  name: 'example_name',
  new_namespace: 'example_new_namespace',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiSearchNamespace().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiSearchNamespace().load({ id: 'ai_search_namespace_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiSearchNamespace().remove({ id: 'ai_search_namespace_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiSearchNamespace().update({
  id: 'ai_search_namespace_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiSearchNamespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiSearchTokenEntity

```ts
const ai_search_token = client.AiSearchToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cf_api_id` | `string` | Yes |  |
| `cf_api_key` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `legacy` | `boolean` | No |  |
| `modified_at` | `string` | Yes |  |
| `modified_by` | `string` | No |  |
| `name` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiSearchToken().create({
  account_id: 'example_account_id',
  cf_api_id: 'example_cf_api_id',
  cf_api_key: 'example_cf_api_key',
  created_at: 'example_created_at',
  id: 'example_id',
  modified_at: 'example_modified_at',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AiSearchToken().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiSearchToken().load({ id: 'ai_search_token_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiSearchToken().remove({ id: 'ai_search_token_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AiSearchToken().update({
  id: 'ai_search_token_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiSearchTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingCreateTopupEntity

```ts
const aig_billing_create_topup = client.AigBillingCreateTopup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Top-up amount in cents (min 1000). |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `payment_method_id` | `string` | No | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AigBillingCreateTopup().create({
  account_id: 'example_account_id',
  amount: 1,
  errors: [],
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingCreateTopupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingDeleteSpendingLimitEntity

```ts
const aig_billing_delete_spending_limit = client.AigBillingDeleteSpendingLimit()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AigBillingDeleteSpendingLimit().remove({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingDeleteSpendingLimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingDeleteTopupConfigEntity

```ts
const aig_billing_delete_topup_config = client.AigBillingDeleteTopupConfig()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AigBillingDeleteTopupConfig().remove({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingDeleteTopupConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingGetCreditBalanceEntity

```ts
const aig_billing_get_credit_balance = client.AigBillingGetCreditBalance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AigBillingGetCreditBalance().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingGetCreditBalanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingGetInvoiceHistoryEntity

```ts
const aig_billing_get_invoice_history = client.AigBillingGetInvoiceHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AigBillingGetInvoiceHistory().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingGetInvoiceHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingGetInvoicePreviewEntity

```ts
const aig_billing_get_invoice_preview = client.AigBillingGetInvoicePreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AigBillingGetInvoicePreview().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingGetInvoicePreviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingGetSpendingLimitEntity

```ts
const aig_billing_get_spending_limit = client.AigBillingGetSpendingLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AigBillingGetSpendingLimit().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingGetSpendingLimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingGetTopupConfigEntity

```ts
const aig_billing_get_topup_config = client.AigBillingGetTopupConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AigBillingGetTopupConfig().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingGetTopupConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingGetTopupEligibilityEntity

```ts
const aig_billing_get_topup_eligibility = client.AigBillingGetTopupEligibility()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `payment_methods` | `any[]` | No | Account-level payment methods, forwarded by the dashboard. |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AigBillingGetTopupEligibility().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingGetTopupEligibilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingGetTopupLimitEntity

```ts
const aig_billing_get_topup_limit = client.AigBillingGetTopupLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AigBillingGetTopupLimit().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingGetTopupLimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingGetUsageHistoryEntity

```ts
const aig_billing_get_usage_history = client.AigBillingGetUsageHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AigBillingGetUsageHistory().list({ account_id: "example", value_grouping_window: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingGetUsageHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingSetSpendingLimitEntity

```ts
const aig_billing_set_spending_limit = client.AigBillingSetSpendingLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Spending limit amount in cents (min 100). |
| `duration` | `string` | Yes | Spending limit duration. |
| `strategy` | `string` | Yes | Spending limit strategy. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AigBillingSetSpendingLimit().create({
  account_id: 'example_account_id',
  amount: 1,
  duration: 'example_duration',
  strategy: 'example_strategy',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingSetSpendingLimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingSetTopupConfigEntity

```ts
const aig_billing_set_topup_config = client.AigBillingSetTopupConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Auto top-up amount in cents (min 1000). |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |
| `threshold` | `number` | Yes | Balance threshold in cents that triggers auto top-up (min 500). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AigBillingSetTopupConfig().create({
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

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingSetTopupConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AigBillingTopupStatusEntity

```ts
const aig_billing_topup_status = client.AigBillingTopupStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `payment_intent_id` | `string` | Yes | Stripe invoice ID to check status for. |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AigBillingTopupStatus().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  payment_intent_id: 'example_payment_intent_id',
  result: {},
  result_info: {},
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AigBillingTopupStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutoRagJobEntity

```ts
const auto_rag_job = client.AutoRagJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | Yes |  |
| `end_reason` | `string` | No |  |
| `ended_at` | `string` | No |  |
| `id` | `string` | Yes |  |
| `last_seen_at` | `string` | No |  |
| `message` | `string` | Yes |  |
| `message_type` | `number` | Yes |  |
| `source` | `string` | Yes |  |
| `started_at` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AutoRagJob().list({ account_id: "example", rag_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AutoRagJob().load({ id: 'auto_rag_job_id', account_id: 'account_id', rag_id: 'rag_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutoRagJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutoRagRagEntity

```ts
const auto_rag_rag = client.AutoRagRag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `string` | Yes |  |
| `job_id` | `string` | Yes |  |
| `key` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AutoRagRag().list({ account_id: "example", rag_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AutoRagRag().update({
  account_id: 'account_id',
  rag_id: 'rag_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutoRagRagEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutoRagRagSearchEntity

```ts
const auto_rag_rag_search = client.AutoRagRagSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `filters` | `any` | No |  |
| `has_more` | `boolean` | No |  |
| `max_num_results` | `number` | No |  |
| `model` | `any` | No |  |
| `next_page` | `string` | No |  |
| `object` | `string` | No |  |
| `query` | `string` | Yes |  |
| `ranking_options` | `Record<string, any>` | No |  |
| `reranking` | `Record<string, any>` | No |  |
| `response` | `string` | Yes |  |
| `rewrite_query` | `boolean` | No |  |
| `search_query` | `string` | Yes |  |
| `stream` | `boolean` | No |  |
| `system_prompt` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AutoRagRagSearch().create({
  account_id: 'example_account_id',
  rag_id: 'example_rag_id',
  query: 'example_query',
  response: 'example_response',
  search_query: 'example_search_query',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutoRagRagSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FinetuneAssetEntity

```ts
const finetune_asset = client.FinetuneAsset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file_name` | `string` | Yes |  |
| `file_url` | `string` | Yes |  |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FinetuneAsset().load({ id: 'finetune_asset_id', account_id: 'account_id', finetune_id: 'finetune_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FinetuneAssetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemoryEntity

```ts
const memory = client.Memory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | Always empty for a successful response. |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes | Informational, non-error messages, if any. |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Always true for a successful response. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `ingest` | `/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/ingest` | `client.Memory().create({ $action: 'ingest', ... })` |
| `recall` | `/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/recall` | `client.Memory().create({ $action: 'recall', ... })` |
| `remember` | `/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/remember` | `client.Memory().create({ $action: 'remember', ... })` |
| `summary` | `/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/summary` | `client.Memory().create({ $action: 'summary', ... })` |

An action returns that action's OWN response, which is not necessarily a
Memory record — check the API definition for its shape.

```ts
const result = await client.Memory().create({
  $action: 'ingest',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Memory().create({
  account_id: 'example_account_id',
  namespace_id: 'example_namespace_id',
  profile_name: 'example_profile_name',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Memory().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Memory().load({ id: 'memory_id', account_id: 'account_id', namespace_id: 'namespace_id', profile_id: 'profile_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Memory().remove({ id: 'memory_id', account_id: 'account_id', namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NamespaceEntity

```ts
const namespace = client.Namespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | Always empty for a successful response. |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes | Informational, non-error messages, if any. |
| `name` | `string` | Yes | Namespace name. |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Always true for a successful response. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Namespace().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Namespace().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Namespace().load({ id: 'namespace_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Namespace().remove({ id: 'namespace_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VectorizeEntity

```ts
const vectorize = client.Vectorize()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | Yes |  |
| `description` | `string` | No | Specifies the description of the index. |
| `errors` | `any[]` | Yes |  |
| `ids` | `any[]` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `string` | Yes | Specifies the type of metadata property to index. |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `propertyName` | `string` | Yes | Specifies the metadata property to index. |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `config` | - | - | - | - |
| `description` | - | - | - | - |
| `errors` | - | - | - | - |
| `ids` | - | - | - | - |
| `indexType` | - | - | - | - |
| `messages` | - | - | - | - |
| `name` | - | - | - | - |
| `propertyName` | - | - | - | - |
| `result` | Yes | Yes | - | - |
| `success` | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `insert` | `/accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert` | `client.Vectorize().create({ $action: 'insert', ... })` |
| `query` | `/accounts/{account_id}/vectorize/v2/indexes/{index_name}/query` | `client.Vectorize().create({ $action: 'query', ... })` |
| `upsert` | `/accounts/{account_id}/vectorize/v2/indexes/{index_name}/upsert` | `client.Vectorize().create({ $action: 'upsert', ... })` |

An action returns that action's OWN response, which is not necessarily a
Vectorize record — check the API definition for its shape.

```ts
const result = await client.Vectorize().create({
  $action: 'insert',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Vectorize().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Vectorize().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Vectorize().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Vectorize().remove({ account_id: 'account_id', index_name: 'index_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VectorizeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VectorizeBetaDeprecatedEntity

```ts
const vectorize_beta__deprecated = client.VectorizeBetaDeprecated()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | Yes |  |
| `description` | `string` | No | Specifies the description of the index. |
| `errors` | `any[]` | Yes |  |
| `ids` | `any[]` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `config` | - | - | - | - | - |
| `description` | - | - | - | Yes | - |
| `errors` | - | - | - | - | - |
| `ids` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `success` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `insert` | `/accounts/{account_id}/vectorize/indexes/{index_name}/insert` | `client.VectorizeBetaDeprecated().create({ $action: 'insert', ... })` |
| `query` | `/accounts/{account_id}/vectorize/indexes/{index_name}/query` | `client.VectorizeBetaDeprecated().create({ $action: 'query', ... })` |
| `upsert` | `/accounts/{account_id}/vectorize/indexes/{index_name}/upsert` | `client.VectorizeBetaDeprecated().create({ $action: 'upsert', ... })` |

An action returns that action's OWN response, which is not necessarily a
VectorizeBetaDeprecated record — check the API definition for its shape.

```ts
const result = await client.VectorizeBetaDeprecated().create({
  $action: 'insert',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.VectorizeBetaDeprecated().create({
  account_id: 'example_account_id',
  config: 'example_config',
  errors: [],
  messages: [],
  name: 'example_name',
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VectorizeBetaDeprecated().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VectorizeBetaDeprecated().load({ account_id: 'account_id', index_name: 'index_name' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.VectorizeBetaDeprecated().remove({ account_id: 'account_id', index_name: 'index_name' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.VectorizeBetaDeprecated().update({
  account_id: 'account_id',
  index_name: 'index_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VectorizeBetaDeprecatedEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersAiEntity

```ts
const workers_ai = client.WorkersAi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `extension` | `string` | Yes |  |
| `input` | `Record<string, any>` | Yes | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `any[]` | Yes |  |
| `mimeType` | `string` | Yes |  |
| `model` | `string` | Yes | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `Record<string, any>` | No |  |
| `output` | `Record<string, any>` | Yes |  |
| `result` | `Record<string, any>` | No | Model-specific output. |
| `success` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `errors` | - | - | - |
| `extension` | - | - | - |
| `input` | - | - | - |
| `messages` | - | - | - |
| `mimeType` | - | - | - |
| `model` | - | - | - |
| `options` | - | - | - |
| `output` | - | - | - |
| `result` | - | Yes | Yes |
| `success` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkersAi().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersAi().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkersAi().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersAiEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkersAiFinetuneEntity

```ts
const workers_ai_finetune = client.WorkersAiFinetune()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `public` | `boolean` | Yes |  |
| `success` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `model` | - | - | - | - |
| `modified_at` | - | - | - | - |
| `name` | - | - | - | - |
| `public` | - | - | Yes | - |
| `success` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkersAiFinetune().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkersAiFinetune().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkersAiFinetune().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkersAiFinetune().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkersAiFinetuneEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareAiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareAiSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

