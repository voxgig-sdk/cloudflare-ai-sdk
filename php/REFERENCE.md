# CloudflareAi PHP SDK Reference

Complete API reference for the CloudflareAi PHP SDK.


## CloudflareAiSDK

### Constructor

```php
require_once __DIR__ . '/cloudflareai_sdk.php';

$client = new CloudflareAiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareAiSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareAiSDK::test();
```


### Instance Methods

#### `Account($data = null)`

Create a new `AccountEntity` instance. Pass `null` for no initial data.

#### `AiGateway($data = null)`

Create a new `AiGatewayEntity` instance. Pass `null` for no initial data.

#### `AiGatewayCustomDomain($data = null)`

Create a new `AiGatewayCustomDomainEntity` instance. Pass `null` for no initial data.

#### `AiGatewayCustomProvider($data = null)`

Create a new `AiGatewayCustomProviderEntity` instance. Pass `null` for no initial data.

#### `AiGatewayCustomProviderCost($data = null)`

Create a new `AiGatewayCustomProviderCostEntity` instance. Pass `null` for no initial data.

#### `AiGatewayDataset($data = null)`

Create a new `AiGatewayDatasetEntity` instance. Pass `null` for no initial data.

#### `AiGatewayDynamicRoute($data = null)`

Create a new `AiGatewayDynamicRouteEntity` instance. Pass `null` for no initial data.

#### `AiGatewayEvaluation($data = null)`

Create a new `AiGatewayEvaluationEntity` instance. Pass `null` for no initial data.

#### `AiGatewayGateway($data = null)`

Create a new `AiGatewayGatewayEntity` instance. Pass `null` for no initial data.

#### `AiGatewayLog($data = null)`

Create a new `AiGatewayLogEntity` instance. Pass `null` for no initial data.

#### `AiGatewayProviderConfig($data = null)`

Create a new `AiGatewayProviderConfigEntity` instance. Pass `null` for no initial data.

#### `AiSearchAccountSearch($data = null)`

Create a new `AiSearchAccountSearchEntity` instance. Pass `null` for no initial data.

#### `AiSearchInstance($data = null)`

Create a new `AiSearchInstanceEntity` instance. Pass `null` for no initial data.

#### `AiSearchInstancesItem($data = null)`

Create a new `AiSearchInstancesItemEntity` instance. Pass `null` for no initial data.

#### `AiSearchInstancesJob($data = null)`

Create a new `AiSearchInstancesJobEntity` instance. Pass `null` for no initial data.

#### `AiSearchNamespace($data = null)`

Create a new `AiSearchNamespaceEntity` instance. Pass `null` for no initial data.

#### `AiSearchToken($data = null)`

Create a new `AiSearchTokenEntity` instance. Pass `null` for no initial data.

#### `AigBillingCreateTopup($data = null)`

Create a new `AigBillingCreateTopupEntity` instance. Pass `null` for no initial data.

#### `AigBillingDeleteSpendingLimit($data = null)`

Create a new `AigBillingDeleteSpendingLimitEntity` instance. Pass `null` for no initial data.

#### `AigBillingDeleteTopupConfig($data = null)`

Create a new `AigBillingDeleteTopupConfigEntity` instance. Pass `null` for no initial data.

#### `AigBillingGetCreditBalance($data = null)`

Create a new `AigBillingGetCreditBalanceEntity` instance. Pass `null` for no initial data.

#### `AigBillingGetInvoiceHistory($data = null)`

Create a new `AigBillingGetInvoiceHistoryEntity` instance. Pass `null` for no initial data.

#### `AigBillingGetInvoicePreview($data = null)`

Create a new `AigBillingGetInvoicePreviewEntity` instance. Pass `null` for no initial data.

#### `AigBillingGetSpendingLimit($data = null)`

Create a new `AigBillingGetSpendingLimitEntity` instance. Pass `null` for no initial data.

#### `AigBillingGetTopupConfig($data = null)`

Create a new `AigBillingGetTopupConfigEntity` instance. Pass `null` for no initial data.

#### `AigBillingGetTopupEligibility($data = null)`

Create a new `AigBillingGetTopupEligibilityEntity` instance. Pass `null` for no initial data.

#### `AigBillingGetTopupLimit($data = null)`

Create a new `AigBillingGetTopupLimitEntity` instance. Pass `null` for no initial data.

#### `AigBillingGetUsageHistory($data = null)`

Create a new `AigBillingGetUsageHistoryEntity` instance. Pass `null` for no initial data.

#### `AigBillingSetSpendingLimit($data = null)`

Create a new `AigBillingSetSpendingLimitEntity` instance. Pass `null` for no initial data.

#### `AigBillingSetTopupConfig($data = null)`

Create a new `AigBillingSetTopupConfigEntity` instance. Pass `null` for no initial data.

#### `AigBillingTopupStatus($data = null)`

Create a new `AigBillingTopupStatusEntity` instance. Pass `null` for no initial data.

#### `AutoRagJob($data = null)`

Create a new `AutoRagJobEntity` instance. Pass `null` for no initial data.

#### `AutoRagRag($data = null)`

Create a new `AutoRagRagEntity` instance. Pass `null` for no initial data.

#### `AutoRagRagSearch($data = null)`

Create a new `AutoRagRagSearchEntity` instance. Pass `null` for no initial data.

#### `FinetuneAsset($data = null)`

Create a new `FinetuneAssetEntity` instance. Pass `null` for no initial data.

#### `Memory($data = null)`

Create a new `MemoryEntity` instance. Pass `null` for no initial data.

#### `Namespace($data = null)`

Create a new `NamespaceEntity` instance. Pass `null` for no initial data.

#### `Vectorize($data = null)`

Create a new `VectorizeEntity` instance. Pass `null` for no initial data.

#### `VectorizeBetaDeprecated($data = null)`

Create a new `VectorizeBetaDeprecatedEntity` instance. Pass `null` for no initial data.

#### `WorkersAi($data = null)`

Create a new `WorkersAiEntity` instance. Pass `null` for no initial data.

#### `WorkersAiFinetune($data = null)`

Create a new `WorkersAiFinetuneEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareAiUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccountEntity

```php
$account = $client->Account();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Account()->load(["id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Account()->update([
  "id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountEntity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayEntity

```php
$ai_gateway = $client->AiGateway();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byokAlias` | `string` | No |  |
| `items` | `array` | Yes |  |
| `limit` | `int` | No |  |
| `metadata` | `array` | Yes |  |
| `options` | `array` | Yes |  |
| `provider` | `string` | No |  |
| `query` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGateway()->create([
  "account_id" => null, // string
  "items" => null, // array
  "metadata" => null, // array
  "options" => null, // array
  "query" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayEntity`

Create a new `AiGatewayEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayCustomDomainEntity

```php
$ai_gateway_custom_domain = $client->AiGatewayCustomDomain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cname_target` | `string` | Yes |  |
| `created_at` | `int` | Yes | epoch milliseconds |
| `domain` | `string` | Yes | Custom hostname that you own, such as `ai.example.com`. |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `hostname` | `string` | Yes | Custom hostname that you own, such as `ai.example.com`. |
| `id` | `string` | No |  |
| `minTLS` | `string` | No |  |
| `modified_at` | `int` | Yes | epoch milliseconds |
| `ssl_hostname_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `zone_id` | `string` | Yes | ID of the Cloudflare zone that contains the custom hostname. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayCustomDomain()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayCustomDomain()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayCustomDomain()->load(["id" => "ai_gateway_custom_domain_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayCustomDomain()->remove(["id" => "ai_gateway_custom_domain_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayCustomDomainEntity`

Create a new `AiGatewayCustomDomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayCustomProviderEntity

```php
$ai_gateway_custom_provider = $client->AiGatewayCustomProvider();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `string` | Yes |  |
| `beta` | `bool` | No |  |
| `created_at` | `string` | Yes |  |
| `curl_example` | `string` | No |  |
| `description` | `string` | No |  |
| `enable` | `bool` | No |  |
| `headers` | `string` | No | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `id` | `string` | Yes |  |
| `js_example` | `string` | No |  |
| `link` | `string` | No |  |
| `logo` | `string` | No |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `int` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayCustomProvider()->create([
  "account_id" => null, // string
  "base_url" => null, // string
  "created_at" => null, // string
  "id" => null, // string
  "modified_at" => null, // string
  "name" => null, // string
  "slug" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayCustomProvider()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayCustomProvider()->load(["id" => "ai_gateway_custom_provider_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayCustomProvider()->remove(["id" => "ai_gateway_custom_provider_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiGatewayCustomProvider()->update([
  "id" => "ai_gateway_custom_provider_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayCustomProviderEntity`

Create a new `AiGatewayCustomProviderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayCustomProviderCostEntity

```php
$ai_gateway_custom_provider_cost = $client->AiGatewayCustomProviderCost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_provider_id` | `string` | Yes | ID of the custom provider that the pricing rule applies to. |
| `changed_by` | `string` | No |  |
| `cost_in` | `float` | No |  |
| `cost_out` | `float` | No |  |
| `cost_type` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `enable` | `bool` | No |  |
| `id` | `string` | Yes |  |
| `model` | `string` | Yes |  |
| `model_rule` | `string` | No |  |
| `modified_at` | `string` | Yes |  |
| `token_pricing` | `string` | No |  |
| `weight` | `int` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayCustomProviderCost()->create([
  "account_id" => null, // string
  "account_provider_id" => null, // string
  "created_at" => null, // string
  "id" => null, // string
  "model" => null, // string
  "modified_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayCustomProviderCost()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayCustomProviderCost()->load(["id" => "ai_gateway_custom_provider_cost_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayCustomProviderCost()->remove(["id" => "ai_gateway_custom_provider_cost_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiGatewayCustomProviderCost()->update([
  "id" => "ai_gateway_custom_provider_cost_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayCustomProviderCostEntity`

Create a new `AiGatewayCustomProviderCostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayDatasetEntity

```php
$ai_gateway_dataset = $client->AiGatewayDataset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `enable` | `bool` | Yes |  |
| `filters` | `array` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayDataset()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayDataset()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayDataset()->load(["id" => "ai_gateway_dataset_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayDataset()->remove(["id" => "ai_gateway_dataset_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiGatewayDataset()->update([
  "id" => "ai_gateway_dataset_id",
  "account_id" => "account_id",
  "gateway_id" => "gateway_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayDatasetEntity`

Create a new `AiGatewayDatasetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayDynamicRouteEntity

```php
$ai_gateway_dynamic_route = $client->AiGatewayDynamicRoute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_tag` | `string` | Yes |  |
| `active` | `bool` | Yes |  |
| `created_at` | `string` | Yes |  |
| `data` | `string` | Yes |  |
| `deployment` | `array` | Yes |  |
| `deployments` | `array` | Yes |  |
| `elements` | `array` | Yes |  |
| `gateway_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_valid` | `bool` | No |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `order_by` | `string` | Yes |  |
| `order_by_direction` | `string` | Yes |  |
| `page` | `float` | Yes |  |
| `per_page` | `float` | Yes |  |
| `routes` | `array` | Yes |  |
| `version` | `array` | Yes |  |
| `version_id` | `string` | Yes |  |
| `versions` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayDynamicRoute()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayDynamicRoute()->load(["id" => "ai_gateway_dynamic_route_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayDynamicRoute()->remove(["id" => "ai_gateway_dynamic_route_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiGatewayDynamicRoute()->update([
  "id" => "ai_gateway_dynamic_route_id",
  "account_id" => "account_id",
  "gateway_id" => "gateway_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayDynamicRouteEntity`

Create a new `AiGatewayDynamicRouteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayEvaluationEntity

```php
$ai_gateway_evaluation = $client->AiGatewayEvaluation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `dataset_ids` | `array` | Yes |  |
| `datasets` | `array` | Yes |  |
| `description` | `string` | Yes |  |
| `enable` | `bool` | Yes |  |
| `evaluation_type_ids` | `array` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `mandatory` | `bool` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `processed` | `bool` | Yes |  |
| `results` | `array` | Yes |  |
| `total_logs` | `float` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayEvaluation()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayEvaluation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayEvaluation()->load(["id" => "ai_gateway_evaluation_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayEvaluation()->remove(["id" => "ai_gateway_evaluation_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayEvaluationEntity`

Create a new `AiGatewayEvaluationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayGatewayEntity

```php
$ai_gateway_gateway = $client->AiGatewayGateway();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication` | `bool` | No |  |
| `byok_only` | `bool` | No | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `cache_invalidate_on_update` | `bool` | Yes |  |
| `cache_ttl` | `int` | Yes |  |
| `collect_logs` | `bool` | Yes |  |
| `created_at` | `string` | Yes |  |
| `dlp` | `mixed` | No |  |
| `guardrails` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `is_default` | `bool` | No |  |
| `log_classification` | `bool` | No |  |
| `log_management` | `int` | No |  |
| `log_management_strategy` | `string` | No |  |
| `logpush` | `bool` | No |  |
| `logpush_public_key` | `string` | No |  |
| `modified_at` | `string` | Yes |  |
| `otel` | `array` | No |  |
| `rate_limiting_interval` | `int` | Yes |  |
| `rate_limiting_limit` | `int` | Yes |  |
| `rate_limiting_technique` | `string` | No |  |
| `result` | `string` | Yes |  |
| `retry_backoff` | `string` | No | Backoff strategy for retry delays |
| `retry_delay` | `int` | No | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `int` | No | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `array` | No |  |
| `store_id` | `string` | No |  |
| `stripe` | `array` | Yes |  |
| `success` | `bool` | Yes |  |
| `workers_ai_billing_mode` | `string` | No | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayGateway()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayGateway()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayGateway()->load(["id" => "ai_gateway_gateway_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayGateway()->remove(["id" => "ai_gateway_gateway_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiGatewayGateway()->update([
  "id" => "ai_gateway_gateway_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayGatewayEntity`

Create a new `AiGatewayGatewayEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayLogEntity

```php
$ai_gateway_log = $client->AiGatewayLog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cached` | `bool` | Yes |  |
| `cost` | `float` | No |  |
| `created_at` | `string` | Yes |  |
| `custom_cost` | `bool` | No |  |
| `duration` | `int` | Yes |  |
| `feedback` | `float` | No |  |
| `id` | `string` | Yes |  |
| `metadata` | `string` | No |  |
| `model` | `string` | Yes |  |
| `model_type` | `string` | No |  |
| `path` | `string` | Yes |  |
| `provider` | `string` | Yes |  |
| `request_content_type` | `string` | No |  |
| `request_head` | `string` | No |  |
| `request_head_complete` | `bool` | No |  |
| `request_size` | `int` | No |  |
| `request_type` | `string` | No |  |
| `response_content_type` | `string` | No |  |
| `response_head` | `string` | No |  |
| `response_head_complete` | `bool` | No |  |
| `response_size` | `int` | No |  |
| `score` | `float` | No |  |
| `status_code` | `int` | No |  |
| `step` | `int` | No |  |
| `success` | `bool` | Yes |  |
| `tokens_in` | `int` | Yes |  |
| `tokens_out` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayLog()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayLog()->load(["id" => "ai_gateway_log_id", "account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayLog()->remove(["account_id" => "account_id", "gateway_id" => "gateway_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiGatewayLog()->update([
  "id" => "ai_gateway_log_id",
  "account_id" => "account_id",
  "gateway_id" => "gateway_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayLogEntity`

Create a new `AiGatewayLogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiGatewayProviderConfigEntity

```php
$ai_gateway_provider_config = $client->AiGatewayProviderConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes |  |
| `default_config` | `bool` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `provider_slug` | `string` | Yes |  |
| `rate_limit` | `float` | No |  |
| `rate_limit_period` | `float` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiGatewayProviderConfig()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiGatewayProviderConfig()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiGatewayProviderConfig()->remove(["account_id" => "account_id", "gateway_id" => "gateway_id", "id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiGatewayProviderConfig()->update([
  "account_id" => "account_id",
  "gateway_id" => "gateway_id",
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiGatewayProviderConfigEntity`

Create a new `AiGatewayProviderConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiSearchAccountSearchEntity

```php
$ai_search_account_search = $client->AiSearchAccountSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_search_options` | `array` | Yes |  |
| `choices` | `array` | Yes |  |
| `chunks` | `array` | Yes |  |
| `errors` | `array` | No |  |
| `id` | `string` | No |  |
| `messages` | `array` | No | OpenAI-compatible message array. |
| `model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `string` | No |  |
| `query` | `string` | No | A simple text query string. |
| `query_kind` | `string` | Yes |  |
| `search_query` | `string` | No |  |
| `stream` | `bool` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiSearchAccountSearch()->create([
  "account_id" => null, // string
  "ai_search_options" => null, // array
  "choices" => null, // array
  "chunks" => null, // array
  "query_kind" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiSearchAccountSearchEntity`

Create a new `AiSearchAccountSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiSearchInstanceEntity

```php
$ai_search_instance = $client->AiSearchInstance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_gateway_id` | `string` | No |  |
| `ai_search_model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `array` | No |  |
| `cache` | `bool` | No |  |
| `cache_threshold` | `string` | No |  |
| `cache_ttl` | `mixed` | No | Cache entry TTL in seconds. |
| `choices` | `array` | Yes |  |
| `chunk` | `bool` | No |  |
| `chunk_overlap` | `int` | No |  |
| `chunk_size` | `int` | No |  |
| `chunks` | `array` | Yes |  |
| `completed` | `int` | No |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | No |  |
| `custom_metadata` | `array` | No |  |
| `degraded` | `bool` | No | True when status counts are unavailable (e.g. |
| `embedding_model` | `string` | No |  |
| `enable` | `bool` | No |  |
| `engine` | `array` | No | Engine-specific metadata. |
| `engine_version` | `float` | No |  |
| `error` | `int` | No |  |
| `file_embed_errors` | `array` | No |  |
| `fusion_method` | `string` | No |  |
| `hybrid_search_enabled` | `bool` | No | Deprecated — use index_method instead. |
| `id` | `string` | Yes | AI Search instance ID. |
| `index_method` | `array` | Yes | Controls which storage backends are used during indexing. |
| `index_source_errors` | `array` | No |  |
| `indexing_options` | `array` | No |  |
| `last_activity` | `string` | No |  |
| `max_num_results` | `int` | No |  |
| `messages` | `array` | Yes |  |
| `metadata` | `array` | No |  |
| `model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `string` | Yes |  |
| `modified_by` | `string` | No |  |
| `namespace` | `string` | No |  |
| `object` | `string` | No |  |
| `outdated` | `int` | No |  |
| `paused` | `bool` | No |  |
| `public_endpoint_id` | `string` | No |  |
| `public_endpoint_params` | `array` | No |  |
| `queued` | `int` | No |  |
| `reranking` | `bool` | No |  |
| `reranking_model` | `string` | No |  |
| `retrieval_options` | `array` | No |  |
| `rewrite_model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `bool` | No |  |
| `running` | `int` | No |  |
| `score_threshold` | `float` | No |  |
| `skipped` | `int` | No |  |
| `source` | `string` | No |  |
| `source_params` | `array` | No |  |
| `status` | `string` | No |  |
| `stream` | `bool` | No |  |
| `summarization` | `bool` | No |  |
| `summarization_model` | `string` | No |  |
| `sync_interval` | `mixed` | No | Interval between automatic syncs, in seconds. |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiSearchInstance()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiSearchInstance()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiSearchInstance()->load(["id" => "ai_search_instance_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiSearchInstance()->remove(["id" => "ai_search_instance_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiSearchInstance()->update([
  "id" => "ai_search_instance_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiSearchInstanceEntity`

Create a new `AiSearchInstanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiSearchInstancesItemEntity

```php
$ai_search_instances_item = $client->AiSearchInstancesItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `checksum` | `string` | Yes |  |
| `chunkCount` | `int` | Yes |  |
| `chunks_count` | `int` | Yes |  |
| `created_at` | `string` | Yes |  |
| `end_byte` | `float` | No |  |
| `error` | `string` | No |  |
| `errorType` | `string` | Yes |  |
| `fileKey` | `string` | Yes |  |
| `file_size` | `float` | Yes |  |
| `id` | `string` | Yes |  |
| `item` | `array` | Yes |  |
| `key` | `string` | Yes | Item key / filename. |
| `last_seen_at` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `metadata` | `array` | Yes | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `string` | Yes |  |
| `next_action` | `string` | Yes |  |
| `processingTimeMs` | `int` | Yes |  |
| `source_id` | `string` | Yes | Identifies which data source this item belongs to. |
| `start_byte` | `float` | No |  |
| `status` | `string` | Yes |  |
| `text` | `string` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `wait_for_completion` | `bool` | No | Wait for indexing to fully complete before responding. |
| `warnings` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiSearchInstancesItem()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiSearchInstancesItem()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiSearchInstancesItem()->load(["id" => "ai_search_instances_item_id", "account_id" => "account_id", "instance_id" => "instance_id", "namespace_id" => "namespace_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiSearchInstancesItem()->remove(["id" => "ai_search_instances_item_id", "account_id" => "account_id", "instance_id" => "instance_id", "namespace_id" => "namespace_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiSearchInstancesItem()->update([
  "id" => "ai_search_instances_item_id",
  "account_id" => "account_id",
  "instance_id" => "instance_id",
  "namespace_id" => "namespace_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiSearchInstancesItemEntity`

Create a new `AiSearchInstancesItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiSearchInstancesJobEntity

```php
$ai_search_instances_job = $client->AiSearchInstancesJob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `created_at` | `float` | Yes |  |
| `description` | `string` | No |  |
| `end_reason` | `string` | No |  |
| `ended_at` | `string` | No |  |
| `id` | `string` | Yes |  |
| `last_seen_at` | `string` | No |  |
| `message` | `string` | Yes |  |
| `message_type` | `int` | Yes |  |
| `source` | `string` | Yes |  |
| `started_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiSearchInstancesJob()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiSearchInstancesJob()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiSearchInstancesJob()->load(["id" => "ai_search_instances_job_id", "account_id" => "account_id", "instance_id" => "instance_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiSearchInstancesJob()->update([
  "id" => "ai_search_instances_job_id",
  "account_id" => "account_id",
  "instance_id" => "instance_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiSearchInstancesJobEntity`

Create a new `AiSearchInstancesJobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiSearchNamespaceEntity

```php
$ai_search_namespace = $client->AiSearchNamespace();
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
| `public_endpoint_params` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiSearchNamespace()->create([
  "account_id" => null, // string
  "created_at" => null, // string
  "name" => null, // string
  "new_namespace" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiSearchNamespace()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiSearchNamespace()->load(["id" => "ai_search_namespace_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiSearchNamespace()->remove(["id" => "ai_search_namespace_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiSearchNamespace()->update([
  "id" => "ai_search_namespace_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiSearchNamespaceEntity`

Create a new `AiSearchNamespaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiSearchTokenEntity

```php
$ai_search_token = $client->AiSearchToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cf_api_id` | `string` | Yes |  |
| `cf_api_key` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `id` | `string` | Yes |  |
| `legacy` | `bool` | No |  |
| `modified_at` | `string` | Yes |  |
| `modified_by` | `string` | No |  |
| `name` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiSearchToken()->create([
  "account_id" => null, // string
  "cf_api_id" => null, // string
  "cf_api_key" => null, // string
  "created_at" => null, // string
  "id" => null, // string
  "modified_at" => null, // string
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AiSearchToken()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiSearchToken()->load(["id" => "ai_search_token_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiSearchToken()->remove(["id" => "ai_search_token_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AiSearchToken()->update([
  "id" => "ai_search_token_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiSearchTokenEntity`

Create a new `AiSearchTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingCreateTopupEntity

```php
$aig_billing_create_topup = $client->AigBillingCreateTopup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Top-up amount in cents (min 1000). |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `payment_method_id` | `string` | No | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AigBillingCreateTopup()->create([
  "account_id" => null, // string
  "amount" => null, // int
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "result_info" => null, // array
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingCreateTopupEntity`

Create a new `AigBillingCreateTopupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingDeleteSpendingLimitEntity

```php
$aig_billing_delete_spending_limit = $client->AigBillingDeleteSpendingLimit();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AigBillingDeleteSpendingLimit()->remove(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingDeleteSpendingLimitEntity`

Create a new `AigBillingDeleteSpendingLimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingDeleteTopupConfigEntity

```php
$aig_billing_delete_topup_config = $client->AigBillingDeleteTopupConfig();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AigBillingDeleteTopupConfig()->remove(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingDeleteTopupConfigEntity`

Create a new `AigBillingDeleteTopupConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingGetCreditBalanceEntity

```php
$aig_billing_get_credit_balance = $client->AigBillingGetCreditBalance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AigBillingGetCreditBalance()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingGetCreditBalanceEntity`

Create a new `AigBillingGetCreditBalanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingGetInvoiceHistoryEntity

```php
$aig_billing_get_invoice_history = $client->AigBillingGetInvoiceHistory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AigBillingGetInvoiceHistory()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingGetInvoiceHistoryEntity`

Create a new `AigBillingGetInvoiceHistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingGetInvoicePreviewEntity

```php
$aig_billing_get_invoice_preview = $client->AigBillingGetInvoicePreview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AigBillingGetInvoicePreview()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingGetInvoicePreviewEntity`

Create a new `AigBillingGetInvoicePreviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingGetSpendingLimitEntity

```php
$aig_billing_get_spending_limit = $client->AigBillingGetSpendingLimit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AigBillingGetSpendingLimit()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingGetSpendingLimitEntity`

Create a new `AigBillingGetSpendingLimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingGetTopupConfigEntity

```php
$aig_billing_get_topup_config = $client->AigBillingGetTopupConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AigBillingGetTopupConfig()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingGetTopupConfigEntity`

Create a new `AigBillingGetTopupConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingGetTopupEligibilityEntity

```php
$aig_billing_get_topup_eligibility = $client->AigBillingGetTopupEligibility();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `payment_methods` | `array` | No | Account-level payment methods, forwarded by the dashboard. |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AigBillingGetTopupEligibility()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "result_info" => null, // array
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingGetTopupEligibilityEntity`

Create a new `AigBillingGetTopupEligibilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingGetTopupLimitEntity

```php
$aig_billing_get_topup_limit = $client->AigBillingGetTopupLimit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AigBillingGetTopupLimit()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingGetTopupLimitEntity`

Create a new `AigBillingGetTopupLimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingGetUsageHistoryEntity

```php
$aig_billing_get_usage_history = $client->AigBillingGetUsageHistory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AigBillingGetUsageHistory()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingGetUsageHistoryEntity`

Create a new `AigBillingGetUsageHistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingSetSpendingLimitEntity

```php
$aig_billing_set_spending_limit = $client->AigBillingSetSpendingLimit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Spending limit amount in cents (min 100). |
| `duration` | `string` | Yes | Spending limit duration. |
| `strategy` | `string` | Yes | Spending limit strategy. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AigBillingSetSpendingLimit()->create([
  "account_id" => null, // string
  "amount" => null, // int
  "duration" => null, // string
  "strategy" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingSetSpendingLimitEntity`

Create a new `AigBillingSetSpendingLimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingSetTopupConfigEntity

```php
$aig_billing_set_topup_config = $client->AigBillingSetTopupConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Auto top-up amount in cents (min 1000). |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |
| `threshold` | `int` | Yes | Balance threshold in cents that triggers auto top-up (min 500). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AigBillingSetTopupConfig()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingSetTopupConfigEntity`

Create a new `AigBillingSetTopupConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AigBillingTopupStatusEntity

```php
$aig_billing_topup_status = $client->AigBillingTopupStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `payment_intent_id` | `string` | Yes | Stripe invoice ID to check status for. |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AigBillingTopupStatus()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "payment_intent_id" => null, // string
  "result" => null, // array
  "result_info" => null, // array
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AigBillingTopupStatusEntity`

Create a new `AigBillingTopupStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutoRagJobEntity

```php
$auto_rag_job = $client->AutoRagJob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `float` | Yes |  |
| `end_reason` | `string` | No |  |
| `ended_at` | `string` | No |  |
| `id` | `string` | Yes |  |
| `last_seen_at` | `string` | No |  |
| `message` | `string` | Yes |  |
| `message_type` | `int` | Yes |  |
| `source` | `string` | Yes |  |
| `started_at` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AutoRagJob()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AutoRagJob()->load(["id" => "auto_rag_job_id", "account_id" => "account_id", "rag_id" => "rag_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutoRagJobEntity`

Create a new `AutoRagJobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutoRagRagEntity

```php
$auto_rag_rag = $client->AutoRagRag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `string` | Yes |  |
| `job_id` | `string` | Yes |  |
| `key` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AutoRagRag()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AutoRagRag()->update([
  "account_id" => "account_id",
  "rag_id" => "rag_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutoRagRagEntity`

Create a new `AutoRagRagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutoRagRagSearchEntity

```php
$auto_rag_rag_search = $client->AutoRagRagSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `filters` | `mixed` | No |  |
| `has_more` | `bool` | No |  |
| `max_num_results` | `int` | No |  |
| `model` | `mixed` | No |  |
| `next_page` | `string` | No |  |
| `object` | `string` | No |  |
| `query` | `string` | Yes |  |
| `ranking_options` | `array` | No |  |
| `reranking` | `array` | No |  |
| `response` | `string` | Yes |  |
| `rewrite_query` | `bool` | No |  |
| `search_query` | `string` | Yes |  |
| `stream` | `bool` | No |  |
| `system_prompt` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AutoRagRagSearch()->create([
  "account_id" => null, // string
  "rag_id" => null, // string
  "query" => null, // string
  "response" => null, // string
  "search_query" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutoRagRagSearchEntity`

Create a new `AutoRagRagSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FinetuneAssetEntity

```php
$finetune_asset = $client->FinetuneAsset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file_name` | `string` | Yes |  |
| `file_url` | `string` | Yes |  |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FinetuneAsset()->load(["id" => "finetune_asset_id", "account_id" => "account_id", "finetune_id" => "finetune_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FinetuneAssetEntity`

Create a new `FinetuneAssetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemoryEntity

```php
$memory = $client->Memory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | Always empty for a successful response. |
| `id` | `string` | No |  |
| `messages` | `array` | Yes | Informational, non-error messages, if any. |
| `result` | `array` | Yes |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes | Always true for a successful response. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Memory()->create([
  "account_id" => null, // string
  "namespace_id" => null, // string
  "profile_name" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Memory()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Memory()->load(["id" => "memory_id", "account_id" => "account_id", "namespace_id" => "namespace_id", "profile_id" => "profile_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Memory()->remove(["id" => "memory_id", "account_id" => "account_id", "namespace_id" => "namespace_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemoryEntity`

Create a new `MemoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NamespaceEntity

```php
$namespace = $client->Namespace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | Always empty for a successful response. |
| `id` | `string` | No |  |
| `messages` | `array` | Yes | Informational, non-error messages, if any. |
| `name` | `string` | Yes | Namespace name. |
| `result` | `array` | Yes |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes | Always true for a successful response. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Namespace()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "name" => null, // string
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Namespace()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Namespace()->load(["id" => "namespace_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Namespace()->remove(["id" => "namespace_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NamespaceEntity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VectorizeEntity

```php
$vectorize = $client->Vectorize();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `mixed` | Yes |  |
| `description` | `string` | No | Specifies the description of the index. |
| `errors` | `array` | Yes |  |
| `ids` | `array` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `string` | Yes | Specifies the type of metadata property to index. |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `propertyName` | `string` | Yes | Specifies the metadata property to index. |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Vectorize()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Vectorize()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Vectorize()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Vectorize()->remove(["account_id" => "account_id", "index_name" => "index_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VectorizeEntity`

Create a new `VectorizeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VectorizeBetaDeprecatedEntity

```php
$vectorize_beta__deprecated = $client->VectorizeBetaDeprecated();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `mixed` | Yes |  |
| `description` | `string` | No | Specifies the description of the index. |
| `errors` | `array` | Yes |  |
| `ids` | `array` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful |

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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->VectorizeBetaDeprecated()->create([
  "account_id" => null, // string
  "config" => null, // mixed
  "errors" => null, // array
  "messages" => null, // array
  "name" => null, // string
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->VectorizeBetaDeprecated()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->VectorizeBetaDeprecated()->load(["account_id" => "account_id", "index_name" => "index_name"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->VectorizeBetaDeprecated()->remove(["account_id" => "account_id", "index_name" => "index_name"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->VectorizeBetaDeprecated()->update([
  "account_id" => "account_id",
  "index_name" => "index_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VectorizeBetaDeprecatedEntity`

Create a new `VectorizeBetaDeprecatedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersAiEntity

```php
$workers_ai = $client->WorkersAi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `extension` | `string` | Yes |  |
| `input` | `array` | Yes | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `array` | Yes |  |
| `mimeType` | `string` | Yes |  |
| `model` | `string` | Yes | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `array` | No |  |
| `output` | `array` | Yes |  |
| `result` | `array` | No | Model-specific output. |
| `success` | `bool` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkersAi()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersAi()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersAi()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersAiEntity`

Create a new `WorkersAiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkersAiFinetuneEntity

```php
$workers_ai_finetune = $client->WorkersAiFinetune();
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
| `public` | `bool` | Yes |  |
| `success` | `bool` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkersAiFinetune()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkersAiFinetune()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersAiFinetune()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->WorkersAiFinetune()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkersAiFinetuneEntity`

Create a new `WorkersAiFinetuneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareAiSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

