# CloudflareAi Ruby SDK Reference

Complete API reference for the CloudflareAi Ruby SDK.


## CloudflareAiSDK

### Constructor

```ruby
require_relative 'CloudflareAi_sdk'

client = CloudflareAiSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareAiSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareAiSDK.test
```


### Instance Methods

#### `Account(data = nil)`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AiGateway(data = nil)`

Create a new `AiGateway` entity instance. Pass `nil` for no initial data.

#### `AiGatewayCustomDomain(data = nil)`

Create a new `AiGatewayCustomDomain` entity instance. Pass `nil` for no initial data.

#### `AiGatewayCustomProvider(data = nil)`

Create a new `AiGatewayCustomProvider` entity instance. Pass `nil` for no initial data.

#### `AiGatewayCustomProviderCost(data = nil)`

Create a new `AiGatewayCustomProviderCost` entity instance. Pass `nil` for no initial data.

#### `AiGatewayDataset(data = nil)`

Create a new `AiGatewayDataset` entity instance. Pass `nil` for no initial data.

#### `AiGatewayDynamicRoute(data = nil)`

Create a new `AiGatewayDynamicRoute` entity instance. Pass `nil` for no initial data.

#### `AiGatewayEvaluation(data = nil)`

Create a new `AiGatewayEvaluation` entity instance. Pass `nil` for no initial data.

#### `AiGatewayGateway(data = nil)`

Create a new `AiGatewayGateway` entity instance. Pass `nil` for no initial data.

#### `AiGatewayLog(data = nil)`

Create a new `AiGatewayLog` entity instance. Pass `nil` for no initial data.

#### `AiGatewayProviderConfig(data = nil)`

Create a new `AiGatewayProviderConfig` entity instance. Pass `nil` for no initial data.

#### `AiSearchAccountSearch(data = nil)`

Create a new `AiSearchAccountSearch` entity instance. Pass `nil` for no initial data.

#### `AiSearchInstance(data = nil)`

Create a new `AiSearchInstance` entity instance. Pass `nil` for no initial data.

#### `AiSearchInstancesItem(data = nil)`

Create a new `AiSearchInstancesItem` entity instance. Pass `nil` for no initial data.

#### `AiSearchInstancesJob(data = nil)`

Create a new `AiSearchInstancesJob` entity instance. Pass `nil` for no initial data.

#### `AiSearchNamespace(data = nil)`

Create a new `AiSearchNamespace` entity instance. Pass `nil` for no initial data.

#### `AiSearchToken(data = nil)`

Create a new `AiSearchToken` entity instance. Pass `nil` for no initial data.

#### `AigBillingCreateTopup(data = nil)`

Create a new `AigBillingCreateTopup` entity instance. Pass `nil` for no initial data.

#### `AigBillingDeleteSpendingLimit(data = nil)`

Create a new `AigBillingDeleteSpendingLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingDeleteTopupConfig(data = nil)`

Create a new `AigBillingDeleteTopupConfig` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetCreditBalance(data = nil)`

Create a new `AigBillingGetCreditBalance` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetInvoiceHistory(data = nil)`

Create a new `AigBillingGetInvoiceHistory` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetInvoicePreview(data = nil)`

Create a new `AigBillingGetInvoicePreview` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetSpendingLimit(data = nil)`

Create a new `AigBillingGetSpendingLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetTopupConfig(data = nil)`

Create a new `AigBillingGetTopupConfig` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetTopupEligibility(data = nil)`

Create a new `AigBillingGetTopupEligibility` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetTopupLimit(data = nil)`

Create a new `AigBillingGetTopupLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetUsageHistory(data = nil)`

Create a new `AigBillingGetUsageHistory` entity instance. Pass `nil` for no initial data.

#### `AigBillingSetSpendingLimit(data = nil)`

Create a new `AigBillingSetSpendingLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingSetTopupConfig(data = nil)`

Create a new `AigBillingSetTopupConfig` entity instance. Pass `nil` for no initial data.

#### `AigBillingTopupStatus(data = nil)`

Create a new `AigBillingTopupStatus` entity instance. Pass `nil` for no initial data.

#### `AutoRagJob(data = nil)`

Create a new `AutoRagJob` entity instance. Pass `nil` for no initial data.

#### `AutoRagRag(data = nil)`

Create a new `AutoRagRag` entity instance. Pass `nil` for no initial data.

#### `AutoRagRagSearch(data = nil)`

Create a new `AutoRagRagSearch` entity instance. Pass `nil` for no initial data.

#### `FinetuneAsset(data = nil)`

Create a new `FinetuneAsset` entity instance. Pass `nil` for no initial data.

#### `Memory(data = nil)`

Create a new `Memory` entity instance. Pass `nil` for no initial data.

#### `Namespace(data = nil)`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `Vectorize(data = nil)`

Create a new `Vectorize` entity instance. Pass `nil` for no initial data.

#### `VectorizeBetaDeprecated(data = nil)`

Create a new `VectorizeBetaDeprecated` entity instance. Pass `nil` for no initial data.

#### `WorkersAi(data = nil)`

Create a new `WorkersAi` entity instance. Pass `nil` for no initial data.

#### `WorkersAiFinetune(data = nil)`

Create a new `WorkersAiFinetune` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AccountEntity

```ruby
account = client.Account
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Account.load({ "id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Account.update({
  "id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayEntity

```ruby
ai_gateway = client.AiGateway
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byokAlias` | `String` | No |  |
| `items` | `Array` | Yes |  |
| `limit` | `Integer` | No |  |
| `metadata` | `Hash` | Yes |  |
| `options` | `Hash` | Yes |  |
| `provider` | `String` | No |  |
| `query` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiGateway.create({
  "account_id" => "example_account_id", # String
  "items" => [], # Array
  "metadata" => {}, # Hash
  "options" => {}, # Hash
  "query" => "example_query", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayCustomDomainEntity

```ruby
ai_gateway_custom_domain = client.AiGatewayCustomDomain
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cname_target` | `String` | Yes |  |
| `created_at` | `Integer` | Yes | epoch milliseconds |
| `domain` | `String` | Yes | Custom hostname that you own, such as `ai.example.com`. |
| `gateway_id` | `String` | Yes | Unique identifier of the AI Gateway within the account. |
| `hostname` | `String` | Yes | Custom hostname that you own, such as `ai.example.com`. |
| `id` | `String` | No |  |
| `minTLS` | `String` | No |  |
| `modified_at` | `Integer` | Yes | epoch milliseconds |
| `ssl_hostname_id` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `zone_id` | `String` | Yes | ID of the Cloudflare zone that contains the custom hostname. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiGatewayCustomDomain.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiGatewayCustomDomain.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayCustomDomain.load({ "id" => "ai_gateway_custom_domain_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayCustomDomain.remove({ "id" => "ai_gateway_custom_domain_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayCustomDomainEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayCustomProviderEntity

```ruby
ai_gateway_custom_provider = client.AiGatewayCustomProvider
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `String` | Yes |  |
| `beta` | `Boolean` | No |  |
| `created_at` | `String` | Yes |  |
| `curl_example` | `String` | No |  |
| `description` | `String` | No |  |
| `enable` | `Boolean` | No |  |
| `headers` | `String` | No | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `id` | `String` | Yes |  |
| `js_example` | `String` | No |  |
| `link` | `String` | No |  |
| `logo` | `String` | No |  |
| `modified_at` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `position` | `Integer` | No |  |
| `slug` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiGatewayCustomProvider.create({
  "account_id" => "example_account_id", # String
  "base_url" => "example_base_url", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "modified_at" => "example_modified_at", # String
  "name" => "example_name", # String
  "slug" => "example_slug", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiGatewayCustomProvider.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayCustomProvider.load({ "id" => "ai_gateway_custom_provider_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayCustomProvider.remove({ "id" => "ai_gateway_custom_provider_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiGatewayCustomProvider.update({
  "id" => "ai_gateway_custom_provider_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayCustomProviderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayCustomProviderCostEntity

```ruby
ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_provider_id` | `String` | Yes | ID of the custom provider that the pricing rule applies to. |
| `changed_by` | `String` | No |  |
| `cost_in` | `Float` | No |  |
| `cost_out` | `Float` | No |  |
| `cost_type` | `String` | No |  |
| `created_at` | `String` | Yes |  |
| `enable` | `Boolean` | No |  |
| `id` | `String` | Yes |  |
| `model` | `String` | Yes |  |
| `model_rule` | `String` | No |  |
| `modified_at` | `String` | Yes |  |
| `token_pricing` | `String` | No |  |
| `weight` | `Integer` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiGatewayCustomProviderCost.create({
  "account_id" => "example_account_id", # String
  "account_provider_id" => "example_account_provider_id", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "model" => "example_model", # String
  "modified_at" => "example_modified_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiGatewayCustomProviderCost.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayCustomProviderCost.load({ "id" => "ai_gateway_custom_provider_cost_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayCustomProviderCost.remove({ "id" => "ai_gateway_custom_provider_cost_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiGatewayCustomProviderCost.update({
  "id" => "ai_gateway_custom_provider_cost_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayCustomProviderCostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayDatasetEntity

```ruby
ai_gateway_dataset = client.AiGatewayDataset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `enable` | `Boolean` | Yes |  |
| `filters` | `Array` | Yes |  |
| `gateway_id` | `String` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `String` | Yes |  |
| `modified_at` | `String` | Yes |  |
| `name` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiGatewayDataset.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiGatewayDataset.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayDataset.load({ "id" => "ai_gateway_dataset_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayDataset.remove({ "id" => "ai_gateway_dataset_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiGatewayDataset.update({
  "id" => "ai_gateway_dataset_id",
  "account_id" => "account_id",
  "gateway_id" => "gateway_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayDatasetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayDynamicRouteEntity

```ruby
ai_gateway_dynamic_route = client.AiGatewayDynamicRoute
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_tag` | `String` | Yes |  |
| `active` | `Boolean` | Yes |  |
| `created_at` | `String` | Yes |  |
| `data` | `String` | Yes |  |
| `deployment` | `Hash` | Yes |  |
| `deployments` | `Array` | Yes |  |
| `elements` | `Array` | Yes |  |
| `gateway_id` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `is_valid` | `Boolean` | No |  |
| `modified_at` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `order_by` | `String` | Yes |  |
| `order_by_direction` | `String` | Yes |  |
| `page` | `Float` | Yes |  |
| `per_page` | `Float` | Yes |  |
| `routes` | `Array` | Yes |  |
| `version` | `Hash` | Yes |  |
| `version_id` | `String` | Yes |  |
| `versions` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiGatewayDynamicRoute.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayDynamicRoute.load({ "id" => "ai_gateway_dynamic_route_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayDynamicRoute.remove({ "id" => "ai_gateway_dynamic_route_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiGatewayDynamicRoute.update({
  "id" => "ai_gateway_dynamic_route_id",
  "account_id" => "account_id",
  "gateway_id" => "gateway_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayDynamicRouteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayEvaluationEntity

```ruby
ai_gateway_evaluation = client.AiGatewayEvaluation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `dataset_ids` | `Array` | Yes |  |
| `datasets` | `Array` | Yes |  |
| `description` | `String` | Yes |  |
| `enable` | `Boolean` | Yes |  |
| `evaluation_type_ids` | `Array` | Yes |  |
| `gateway_id` | `String` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `String` | Yes |  |
| `mandatory` | `Boolean` | Yes |  |
| `modified_at` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `processed` | `Boolean` | Yes |  |
| `results` | `Array` | Yes |  |
| `total_logs` | `Float` | Yes |  |
| `type` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiGatewayEvaluation.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiGatewayEvaluation.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayEvaluation.load({ "id" => "ai_gateway_evaluation_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayEvaluation.remove({ "id" => "ai_gateway_evaluation_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayEvaluationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayGatewayEntity

```ruby
ai_gateway_gateway = client.AiGatewayGateway
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication` | `Boolean` | No |  |
| `byok_only` | `Boolean` | No | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `cache_invalidate_on_update` | `Boolean` | Yes |  |
| `cache_ttl` | `Integer` | Yes |  |
| `collect_logs` | `Boolean` | Yes |  |
| `created_at` | `String` | Yes |  |
| `dlp` | `Object` | No |  |
| `guardrails` | `Hash` | Yes |  |
| `id` | `String` | Yes | Unique identifier of the AI Gateway within the account. |
| `is_default` | `Boolean` | No |  |
| `log_classification` | `Boolean` | No |  |
| `log_management` | `Integer` | No |  |
| `log_management_strategy` | `String` | No |  |
| `logpush` | `Boolean` | No |  |
| `logpush_public_key` | `String` | No |  |
| `modified_at` | `String` | Yes |  |
| `otel` | `Array` | No |  |
| `rate_limiting_interval` | `Integer` | Yes |  |
| `rate_limiting_limit` | `Integer` | Yes |  |
| `rate_limiting_technique` | `String` | No |  |
| `result` | `String` | Yes |  |
| `retry_backoff` | `String` | No | Backoff strategy for retry delays |
| `retry_delay` | `Integer` | No | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `Integer` | No | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `Hash` | No |  |
| `store_id` | `String` | No |  |
| `stripe` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `workers_ai_billing_mode` | `String` | No | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiGatewayGateway.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiGatewayGateway.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayGateway.load({ "id" => "ai_gateway_gateway_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayGateway.remove({ "id" => "ai_gateway_gateway_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiGatewayGateway.update({
  "id" => "ai_gateway_gateway_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayGatewayEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayLogEntity

```ruby
ai_gateway_log = client.AiGatewayLog
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cached` | `Boolean` | Yes |  |
| `cost` | `Float` | No |  |
| `created_at` | `String` | Yes |  |
| `custom_cost` | `Boolean` | No |  |
| `duration` | `Integer` | Yes |  |
| `feedback` | `Float` | No |  |
| `id` | `String` | Yes |  |
| `metadata` | `String` | No |  |
| `model` | `String` | Yes |  |
| `model_type` | `String` | No |  |
| `path` | `String` | Yes |  |
| `provider` | `String` | Yes |  |
| `request_content_type` | `String` | No |  |
| `request_head` | `String` | No |  |
| `request_head_complete` | `Boolean` | No |  |
| `request_size` | `Integer` | No |  |
| `request_type` | `String` | No |  |
| `response_content_type` | `String` | No |  |
| `response_head` | `String` | No |  |
| `response_head_complete` | `Boolean` | No |  |
| `response_size` | `Integer` | No |  |
| `score` | `Float` | No |  |
| `status_code` | `Integer` | No |  |
| `step` | `Integer` | No |  |
| `success` | `Boolean` | Yes |  |
| `tokens_in` | `Integer` | Yes |  |
| `tokens_out` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiGatewayLog.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayLog.load({ "id" => "ai_gateway_log_id", "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayLog.remove({ "account_id" => "account_id", "gateway_id" => "gateway_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiGatewayLog.update({
  "id" => "ai_gateway_log_id",
  "account_id" => "account_id",
  "gateway_id" => "gateway_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayLogEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiGatewayProviderConfigEntity

```ruby
ai_gateway_provider_config = client.AiGatewayProviderConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `String` | Yes |  |
| `default_config` | `Boolean` | Yes |  |
| `gateway_id` | `String` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `String` | Yes |  |
| `modified_at` | `String` | Yes |  |
| `provider_slug` | `String` | Yes |  |
| `rate_limit` | `Float` | No |  |
| `rate_limit_period` | `Float` | No |  |
| `secret` | `String` | No | Provider API key to store in the Secrets Store configured on the gateway. |
| `secret_id` | `String` | Yes |  |
| `secret_preview` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiGatewayProviderConfig.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiGatewayProviderConfig.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiGatewayProviderConfig.remove({ "account_id" => "account_id", "gateway_id" => "gateway_id", "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiGatewayProviderConfig.update({
  "account_id" => "account_id",
  "gateway_id" => "gateway_id",
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiGatewayProviderConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiSearchAccountSearchEntity

```ruby
ai_search_account_search = client.AiSearchAccountSearch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_search_options` | `Hash` | Yes |  |
| `choices` | `Array` | Yes |  |
| `chunks` | `Array` | Yes |  |
| `errors` | `Array` | No |  |
| `id` | `String` | No |  |
| `messages` | `Array` | No | OpenAI-compatible message array. |
| `model` | `String` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `String` | No |  |
| `query` | `String` | No | A simple text query string. |
| `query_kind` | `String` | Yes |  |
| `search_query` | `String` | No |  |
| `stream` | `Boolean` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiSearchAccountSearch.create({
  "account_id" => "example_account_id", # String
  "ai_search_options" => {}, # Hash
  "choices" => [], # Array
  "chunks" => [], # Array
  "query_kind" => "example_query_kind", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiSearchAccountSearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiSearchInstanceEntity

```ruby
ai_search_instance = client.AiSearchInstance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_gateway_id` | `String` | No |  |
| `ai_search_model` | `String` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `Hash` | No |  |
| `cache` | `Boolean` | No |  |
| `cache_threshold` | `String` | No |  |
| `cache_ttl` | `Object` | No | Cache entry TTL in seconds. |
| `choices` | `Array` | Yes |  |
| `chunk` | `Boolean` | No |  |
| `chunk_overlap` | `Integer` | No |  |
| `chunk_size` | `Integer` | No |  |
| `chunks` | `Array` | Yes |  |
| `completed` | `Integer` | No |  |
| `created_at` | `String` | Yes |  |
| `created_by` | `String` | No |  |
| `custom_metadata` | `Array` | No |  |
| `degraded` | `Boolean` | No | True when status counts are unavailable (e.g. |
| `embedding_model` | `String` | No |  |
| `enable` | `Boolean` | No |  |
| `engine` | `Hash` | No | Engine-specific metadata. |
| `engine_version` | `Float` | No |  |
| `error` | `Integer` | No |  |
| `file_embed_errors` | `Hash` | No |  |
| `fusion_method` | `String` | No |  |
| `hybrid_search_enabled` | `Boolean` | No | Deprecated — use index_method instead. |
| `id` | `String` | Yes | AI Search instance ID. |
| `index_method` | `Hash` | Yes | Controls which storage backends are used during indexing. |
| `index_source_errors` | `Hash` | No |  |
| `indexing_options` | `Hash` | No |  |
| `last_activity` | `String` | No |  |
| `max_num_results` | `Integer` | No |  |
| `messages` | `Array` | Yes |  |
| `metadata` | `Hash` | No |  |
| `model` | `String` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `String` | Yes |  |
| `modified_by` | `String` | No |  |
| `namespace` | `String` | No |  |
| `object` | `String` | No |  |
| `outdated` | `Integer` | No |  |
| `paused` | `Boolean` | No |  |
| `public_endpoint_id` | `String` | No |  |
| `public_endpoint_params` | `Hash` | No |  |
| `queued` | `Integer` | No |  |
| `reranking` | `Boolean` | No |  |
| `reranking_model` | `String` | No |  |
| `retrieval_options` | `Hash` | No |  |
| `rewrite_model` | `String` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `Boolean` | No |  |
| `running` | `Integer` | No |  |
| `score_threshold` | `Float` | No |  |
| `skipped` | `Integer` | No |  |
| `source` | `String` | No |  |
| `source_params` | `Hash` | No |  |
| `status` | `String` | No |  |
| `stream` | `Boolean` | No |  |
| `summarization` | `Boolean` | No |  |
| `summarization_model` | `String` | No |  |
| `sync_interval` | `Object` | No | Interval between automatic syncs, in seconds. |
| `system_prompt_ai_search` | `String` | No |  |
| `system_prompt_index_summarization` | `String` | No |  |
| `system_prompt_rewrite_query` | `String` | No |  |
| `token_id` | `String` | No |  |
| `type` | `String` | No | Source type. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiSearchInstance.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiSearchInstance.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiSearchInstance.load({ "id" => "ai_search_instance_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiSearchInstance.remove({ "id" => "ai_search_instance_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiSearchInstance.update({
  "id" => "ai_search_instance_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiSearchInstanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiSearchInstancesItemEntity

```ruby
ai_search_instances_item = client.AiSearchInstancesItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `checksum` | `String` | Yes |  |
| `chunkCount` | `Integer` | Yes |  |
| `chunks_count` | `Integer` | Yes |  |
| `created_at` | `String` | Yes |  |
| `end_byte` | `Float` | No |  |
| `error` | `String` | No |  |
| `errorType` | `String` | Yes |  |
| `fileKey` | `String` | Yes |  |
| `file_size` | `Float` | Yes |  |
| `id` | `String` | Yes |  |
| `item` | `Hash` | Yes |  |
| `key` | `String` | Yes | Item key / filename. |
| `last_seen_at` | `String` | Yes |  |
| `message` | `String` | Yes |  |
| `metadata` | `Hash` | Yes | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `String` | Yes |  |
| `next_action` | `String` | Yes |  |
| `processingTimeMs` | `Integer` | Yes |  |
| `source_id` | `String` | Yes | Identifies which data source this item belongs to. |
| `start_byte` | `Float` | No |  |
| `status` | `String` | Yes |  |
| `text` | `String` | Yes |  |
| `timestamp` | `String` | Yes |  |
| `wait_for_completion` | `Boolean` | No | Wait for indexing to fully complete before responding. |
| `warnings` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiSearchInstancesItem.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiSearchInstancesItem.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiSearchInstancesItem.load({ "id" => "ai_search_instances_item_id", "account_id" => "account_id", "instance_id" => "instance_id", "namespace_id" => "namespace_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiSearchInstancesItem.remove({ "id" => "ai_search_instances_item_id", "account_id" => "account_id", "instance_id" => "instance_id", "namespace_id" => "namespace_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiSearchInstancesItem.update({
  "id" => "ai_search_instances_item_id",
  "account_id" => "account_id",
  "instance_id" => "instance_id",
  "namespace_id" => "namespace_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiSearchInstancesItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiSearchInstancesJobEntity

```ruby
ai_search_instances_job = client.AiSearchInstancesJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes |  |
| `created_at` | `Float` | Yes |  |
| `description` | `String` | No |  |
| `end_reason` | `String` | No |  |
| `ended_at` | `String` | No |  |
| `id` | `String` | Yes |  |
| `last_seen_at` | `String` | No |  |
| `message` | `String` | Yes |  |
| `message_type` | `Integer` | Yes |  |
| `source` | `String` | Yes |  |
| `started_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiSearchInstancesJob.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiSearchInstancesJob.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiSearchInstancesJob.load({ "id" => "ai_search_instances_job_id", "account_id" => "account_id", "instance_id" => "instance_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiSearchInstancesJob.update({
  "id" => "ai_search_instances_job_id",
  "account_id" => "account_id",
  "instance_id" => "instance_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiSearchInstancesJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiSearchNamespaceEntity

```ruby
ai_search_namespace = client.AiSearchNamespace
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `description` | `String` | No | Optional description for the namespace. |
| `id` | `String` | No |  |
| `name` | `String` | Yes |  |
| `new_namespace` | `String` | Yes | Target namespace to move the instance into. |
| `public_endpoint_id` | `String` | No |  |
| `public_endpoint_params` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiSearchNamespace.create({
  "account_id" => "example_account_id", # String
  "created_at" => "example_created_at", # String
  "name" => "example_name", # String
  "new_namespace" => "example_new_namespace", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiSearchNamespace.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiSearchNamespace.load({ "id" => "ai_search_namespace_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiSearchNamespace.remove({ "id" => "ai_search_namespace_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiSearchNamespace.update({
  "id" => "ai_search_namespace_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiSearchNamespaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AiSearchTokenEntity

```ruby
ai_search_token = client.AiSearchToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cf_api_id` | `String` | Yes |  |
| `cf_api_key` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `created_by` | `String` | No |  |
| `enabled` | `Boolean` | No |  |
| `id` | `String` | Yes |  |
| `legacy` | `Boolean` | No |  |
| `modified_at` | `String` | Yes |  |
| `modified_by` | `String` | No |  |
| `name` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AiSearchToken.create({
  "account_id" => "example_account_id", # String
  "cf_api_id" => "example_cf_api_id", # String
  "cf_api_key" => "example_cf_api_key", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "modified_at" => "example_modified_at", # String
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AiSearchToken.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AiSearchToken.load({ "id" => "ai_search_token_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AiSearchToken.remove({ "id" => "ai_search_token_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AiSearchToken.update({
  "id" => "ai_search_token_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AiSearchTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingCreateTopupEntity

```ruby
aig_billing_create_topup = client.AigBillingCreateTopup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `Integer` | Yes | Top-up amount in cents (min 1000). |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `payment_method_id` | `String` | No | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AigBillingCreateTopup.create({
  "account_id" => "example_account_id", # String
  "amount" => 1, # Integer
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingCreateTopupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingDeleteSpendingLimitEntity

```ruby
aig_billing_delete_spending_limit = client.AigBillingDeleteSpendingLimit
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AigBillingDeleteSpendingLimit.remove({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingDeleteSpendingLimitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingDeleteTopupConfigEntity

```ruby
aig_billing_delete_topup_config = client.AigBillingDeleteTopupConfig
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AigBillingDeleteTopupConfig.remove({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingDeleteTopupConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingGetCreditBalanceEntity

```ruby
aig_billing_get_credit_balance = client.AigBillingGetCreditBalance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AigBillingGetCreditBalance.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingGetCreditBalanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingGetInvoiceHistoryEntity

```ruby
aig_billing_get_invoice_history = client.AigBillingGetInvoiceHistory
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AigBillingGetInvoiceHistory.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingGetInvoiceHistoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingGetInvoicePreviewEntity

```ruby
aig_billing_get_invoice_preview = client.AigBillingGetInvoicePreview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AigBillingGetInvoicePreview.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingGetInvoicePreviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingGetSpendingLimitEntity

```ruby
aig_billing_get_spending_limit = client.AigBillingGetSpendingLimit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AigBillingGetSpendingLimit.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingGetSpendingLimitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingGetTopupConfigEntity

```ruby
aig_billing_get_topup_config = client.AigBillingGetTopupConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AigBillingGetTopupConfig.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingGetTopupConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingGetTopupEligibilityEntity

```ruby
aig_billing_get_topup_eligibility = client.AigBillingGetTopupEligibility
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `payment_methods` | `Array` | No | Account-level payment methods, forwarded by the dashboard. |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AigBillingGetTopupEligibility.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingGetTopupEligibilityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingGetTopupLimitEntity

```ruby
aig_billing_get_topup_limit = client.AigBillingGetTopupLimit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AigBillingGetTopupLimit.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingGetTopupLimitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingGetUsageHistoryEntity

```ruby
aig_billing_get_usage_history = client.AigBillingGetUsageHistory
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AigBillingGetUsageHistory.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingGetUsageHistoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingSetSpendingLimitEntity

```ruby
aig_billing_set_spending_limit = client.AigBillingSetSpendingLimit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `Integer` | Yes | Spending limit amount in cents (min 100). |
| `duration` | `String` | Yes | Spending limit duration. |
| `strategy` | `String` | Yes | Spending limit strategy. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AigBillingSetSpendingLimit.create({
  "account_id" => "example_account_id", # String
  "amount" => 1, # Integer
  "duration" => "example_duration", # String
  "strategy" => "example_strategy", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingSetSpendingLimitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingSetTopupConfigEntity

```ruby
aig_billing_set_topup_config = client.AigBillingSetTopupConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `Integer` | Yes | Auto top-up amount in cents (min 1000). |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |
| `threshold` | `Integer` | Yes | Balance threshold in cents that triggers auto top-up (min 500). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AigBillingSetTopupConfig.create({
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

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingSetTopupConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AigBillingTopupStatusEntity

```ruby
aig_billing_topup_status = client.AigBillingTopupStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `payment_intent_id` | `String` | Yes | Stripe invoice ID to check status for. |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AigBillingTopupStatus.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "payment_intent_id" => "example_payment_intent_id", # String
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AigBillingTopupStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AutoRagJobEntity

```ruby
auto_rag_job = client.AutoRagJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `Float` | Yes |  |
| `end_reason` | `String` | No |  |
| `ended_at` | `String` | No |  |
| `id` | `String` | Yes |  |
| `last_seen_at` | `String` | No |  |
| `message` | `String` | Yes |  |
| `message_type` | `Integer` | Yes |  |
| `source` | `String` | Yes |  |
| `started_at` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AutoRagJob.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AutoRagJob.load({ "id" => "auto_rag_job_id", "account_id" => "account_id", "rag_id" => "rag_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AutoRagJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AutoRagRagEntity

```ruby
auto_rag_rag = client.AutoRagRag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `String` | Yes |  |
| `job_id` | `String` | Yes |  |
| `key` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AutoRagRag.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AutoRagRag.update({
  "account_id" => "account_id",
  "rag_id" => "rag_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AutoRagRagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AutoRagRagSearchEntity

```ruby
auto_rag_rag_search = client.AutoRagRagSearch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `filters` | `Object` | No |  |
| `has_more` | `Boolean` | No |  |
| `max_num_results` | `Integer` | No |  |
| `model` | `Object` | No |  |
| `next_page` | `String` | No |  |
| `object` | `String` | No |  |
| `query` | `String` | Yes |  |
| `ranking_options` | `Hash` | No |  |
| `reranking` | `Hash` | No |  |
| `response` | `String` | Yes |  |
| `rewrite_query` | `Boolean` | No |  |
| `search_query` | `String` | Yes |  |
| `stream` | `Boolean` | No |  |
| `system_prompt` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AutoRagRagSearch.create({
  "account_id" => "example_account_id", # String
  "rag_id" => "example_rag_id", # String
  "query" => "example_query", # String
  "response" => "example_response", # String
  "search_query" => "example_search_query", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AutoRagRagSearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FinetuneAssetEntity

```ruby
finetune_asset = client.FinetuneAsset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file_name` | `String` | Yes |  |
| `file_url` | `String` | Yes |  |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FinetuneAsset.load({ "id" => "finetune_asset_id", "account_id" => "account_id", "finetune_id" => "finetune_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FinetuneAssetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemoryEntity

```ruby
memory = client.Memory
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | Always empty for a successful response. |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes | Informational, non-error messages, if any. |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Always true for a successful response. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Memory.create({
  "account_id" => "example_account_id", # String
  "namespace_id" => "example_namespace_id", # String
  "profile_name" => "example_profile_name", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Memory.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Memory.load({ "id" => "memory_id", "account_id" => "account_id", "namespace_id" => "namespace_id", "profile_id" => "profile_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Memory.remove({ "id" => "memory_id", "account_id" => "account_id", "namespace_id" => "namespace_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NamespaceEntity

```ruby
namespace = client.Namespace
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | Always empty for a successful response. |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes | Informational, non-error messages, if any. |
| `name` | `String` | Yes | Namespace name. |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Always true for a successful response. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Namespace.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Namespace.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Namespace.load({ "id" => "namespace_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Namespace.remove({ "id" => "namespace_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VectorizeEntity

```ruby
vectorize = client.Vectorize
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Object` | Yes |  |
| `description` | `String` | No | Specifies the description of the index. |
| `errors` | `Array` | Yes |  |
| `ids` | `Array` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `String` | Yes | Specifies the type of metadata property to index. |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `propertyName` | `String` | Yes | Specifies the metadata property to index. |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Vectorize.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Vectorize.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Vectorize.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Vectorize.remove({ "account_id" => "account_id", "index_name" => "index_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VectorizeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VectorizeBetaDeprecatedEntity

```ruby
vectorize_beta__deprecated = client.VectorizeBetaDeprecated
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Object` | Yes |  |
| `description` | `String` | No | Specifies the description of the index. |
| `errors` | `Array` | Yes |  |
| `ids` | `Array` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `result` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.VectorizeBetaDeprecated.create({
  "account_id" => "example_account_id", # String
  "config" => "example_config", # Object
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.VectorizeBetaDeprecated.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.VectorizeBetaDeprecated.load({ "account_id" => "account_id", "index_name" => "index_name" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.VectorizeBetaDeprecated.remove({ "account_id" => "account_id", "index_name" => "index_name" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.VectorizeBetaDeprecated.update({
  "account_id" => "account_id",
  "index_name" => "index_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VectorizeBetaDeprecatedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersAiEntity

```ruby
workers_ai = client.WorkersAi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `extension` | `String` | Yes |  |
| `input` | `Hash` | Yes | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `Array` | Yes |  |
| `mimeType` | `String` | Yes |  |
| `model` | `String` | Yes | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `Hash` | No |  |
| `output` | `Hash` | Yes |  |
| `result` | `Hash` | No | Model-specific output. |
| `success` | `Boolean` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkersAi.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersAi.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersAi.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersAiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkersAiFinetuneEntity

```ruby
workers_ai_finetune = client.WorkersAiFinetune
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `description` | `String` | No |  |
| `id` | `String` | Yes |  |
| `model` | `String` | Yes |  |
| `modified_at` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `public` | `Boolean` | Yes |  |
| `success` | `Boolean` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkersAiFinetune.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkersAiFinetune.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersAiFinetune.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.WorkersAiFinetune.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkersAiFinetuneEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareAiSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
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

