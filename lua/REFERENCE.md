# CloudflareAi Lua SDK Reference

Complete API reference for the CloudflareAi Lua SDK.


## CloudflareAiSDK

### Constructor

```lua
local sdk = require("cloudflare-ai_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Account(data)`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AiGateway(data)`

Create a new `AiGateway` entity instance. Pass `nil` for no initial data.

#### `AiGatewayCustomDomain(data)`

Create a new `AiGatewayCustomDomain` entity instance. Pass `nil` for no initial data.

#### `AiGatewayCustomProvider(data)`

Create a new `AiGatewayCustomProvider` entity instance. Pass `nil` for no initial data.

#### `AiGatewayCustomProviderCost(data)`

Create a new `AiGatewayCustomProviderCost` entity instance. Pass `nil` for no initial data.

#### `AiGatewayDataset(data)`

Create a new `AiGatewayDataset` entity instance. Pass `nil` for no initial data.

#### `AiGatewayDynamicRoute(data)`

Create a new `AiGatewayDynamicRoute` entity instance. Pass `nil` for no initial data.

#### `AiGatewayEvaluation(data)`

Create a new `AiGatewayEvaluation` entity instance. Pass `nil` for no initial data.

#### `AiGatewayGateway(data)`

Create a new `AiGatewayGateway` entity instance. Pass `nil` for no initial data.

#### `AiGatewayLog(data)`

Create a new `AiGatewayLog` entity instance. Pass `nil` for no initial data.

#### `AiGatewayProviderConfig(data)`

Create a new `AiGatewayProviderConfig` entity instance. Pass `nil` for no initial data.

#### `AiSearchAccountSearch(data)`

Create a new `AiSearchAccountSearch` entity instance. Pass `nil` for no initial data.

#### `AiSearchInstance(data)`

Create a new `AiSearchInstance` entity instance. Pass `nil` for no initial data.

#### `AiSearchInstancesItem(data)`

Create a new `AiSearchInstancesItem` entity instance. Pass `nil` for no initial data.

#### `AiSearchInstancesJob(data)`

Create a new `AiSearchInstancesJob` entity instance. Pass `nil` for no initial data.

#### `AiSearchNamespace(data)`

Create a new `AiSearchNamespace` entity instance. Pass `nil` for no initial data.

#### `AiSearchToken(data)`

Create a new `AiSearchToken` entity instance. Pass `nil` for no initial data.

#### `AigBillingCreateTopup(data)`

Create a new `AigBillingCreateTopup` entity instance. Pass `nil` for no initial data.

#### `AigBillingDeleteSpendingLimit(data)`

Create a new `AigBillingDeleteSpendingLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingDeleteTopupConfig(data)`

Create a new `AigBillingDeleteTopupConfig` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetCreditBalance(data)`

Create a new `AigBillingGetCreditBalance` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetInvoiceHistory(data)`

Create a new `AigBillingGetInvoiceHistory` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetInvoicePreview(data)`

Create a new `AigBillingGetInvoicePreview` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetSpendingLimit(data)`

Create a new `AigBillingGetSpendingLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetTopupConfig(data)`

Create a new `AigBillingGetTopupConfig` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetTopupEligibility(data)`

Create a new `AigBillingGetTopupEligibility` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetTopupLimit(data)`

Create a new `AigBillingGetTopupLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetUsageHistory(data)`

Create a new `AigBillingGetUsageHistory` entity instance. Pass `nil` for no initial data.

#### `AigBillingSetSpendingLimit(data)`

Create a new `AigBillingSetSpendingLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingSetTopupConfig(data)`

Create a new `AigBillingSetTopupConfig` entity instance. Pass `nil` for no initial data.

#### `AigBillingTopupStatus(data)`

Create a new `AigBillingTopupStatus` entity instance. Pass `nil` for no initial data.

#### `AutoRagJob(data)`

Create a new `AutoRagJob` entity instance. Pass `nil` for no initial data.

#### `AutoRagRag(data)`

Create a new `AutoRagRag` entity instance. Pass `nil` for no initial data.

#### `AutoRagRagSearch(data)`

Create a new `AutoRagRagSearch` entity instance. Pass `nil` for no initial data.

#### `FinetuneAsset(data)`

Create a new `FinetuneAsset` entity instance. Pass `nil` for no initial data.

#### `Memory(data)`

Create a new `Memory` entity instance. Pass `nil` for no initial data.

#### `Namespace(data)`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `Vectorize(data)`

Create a new `Vectorize` entity instance. Pass `nil` for no initial data.

#### `VectorizeBetaDeprecated(data)`

Create a new `VectorizeBetaDeprecated` entity instance. Pass `nil` for no initial data.

#### `WorkersAi(data)`

Create a new `WorkersAi` entity instance. Pass `nil` for no initial data.

#### `WorkersAiFinetune(data)`

Create a new `WorkersAiFinetune` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccountEntity

```lua
local account = client:Account(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Account():load({ id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Account():update({
  id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayEntity

```lua
local ai_gateway = client:AiGateway(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byokAlias` | `string` | No |  |
| `items` | `table` | Yes |  |
| `limit` | `number` | No |  |
| `metadata` | `table` | Yes |  |
| `options` | `table` | Yes |  |
| `provider` | `string` | No |  |
| `query` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGateway():create({
  account_id = --[[ string ]],
  items = --[[ table ]],
  metadata = --[[ table ]],
  options = --[[ table ]],
  query = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayCustomDomainEntity

```lua
local ai_gateway_custom_domain = client:AiGatewayCustomDomain(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayCustomDomain():create({
  account_id = --[[ string ]],
  gateway_id = --[[ string ]],
  cname_target = --[[ string ]],
  created_at = --[[ number ]],
  domain = --[[ string ]],
  hostname = --[[ string ]],
  modified_at = --[[ number ]],
  ssl_hostname_id = --[[ string ]],
  status = --[[ string ]],
  zone_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayCustomDomain():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiGatewayCustomDomain():load({ id = "ai_gateway_custom_domain_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGatewayCustomDomain():remove({ id = "ai_gateway_custom_domain_id", account_id = "account_id", gateway_id = "gateway_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayCustomDomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayCustomProviderEntity

```lua
local ai_gateway_custom_provider = client:AiGatewayCustomProvider(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayCustomProvider():create({
  account_id = --[[ string ]],
  base_url = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  modified_at = --[[ string ]],
  name = --[[ string ]],
  slug = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayCustomProvider():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiGatewayCustomProvider():load({ id = "ai_gateway_custom_provider_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGatewayCustomProvider():remove({ id = "ai_gateway_custom_provider_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiGatewayCustomProvider():update({
  id = "ai_gateway_custom_provider_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayCustomProviderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayCustomProviderCostEntity

```lua
local ai_gateway_custom_provider_cost = client:AiGatewayCustomProviderCost(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayCustomProviderCost():create({
  account_id = --[[ string ]],
  account_provider_id = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  model = --[[ string ]],
  modified_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayCustomProviderCost():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiGatewayCustomProviderCost():load({ id = "ai_gateway_custom_provider_cost_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGatewayCustomProviderCost():remove({ id = "ai_gateway_custom_provider_cost_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiGatewayCustomProviderCost():update({
  id = "ai_gateway_custom_provider_cost_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayCustomProviderCostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayDatasetEntity

```lua
local ai_gateway_dataset = client:AiGatewayDataset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `enable` | `boolean` | Yes |  |
| `filters` | `table` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayDataset():create({
  account_id = --[[ string ]],
  gateway_id = --[[ string ]],
  created_at = --[[ string ]],
  enable = --[[ boolean ]],
  filters = --[[ table ]],
  id = --[[ string ]],
  modified_at = --[[ string ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayDataset():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiGatewayDataset():load({ id = "ai_gateway_dataset_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGatewayDataset():remove({ id = "ai_gateway_dataset_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiGatewayDataset():update({
  id = "ai_gateway_dataset_id",
  account_id = "account_id",
  gateway_id = "gateway_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayDatasetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayDynamicRouteEntity

```lua
local ai_gateway_dynamic_route = client:AiGatewayDynamicRoute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_tag` | `string` | Yes |  |
| `active` | `boolean` | Yes |  |
| `created_at` | `string` | Yes |  |
| `data` | `string` | Yes |  |
| `deployment` | `table` | Yes |  |
| `deployments` | `table` | Yes |  |
| `elements` | `table` | Yes |  |
| `gateway_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_valid` | `boolean` | No |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `order_by` | `string` | Yes |  |
| `order_by_direction` | `string` | Yes |  |
| `page` | `number` | Yes |  |
| `per_page` | `number` | Yes |  |
| `routes` | `table` | Yes |  |
| `version` | `table` | Yes |  |
| `version_id` | `string` | Yes |  |
| `versions` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayDynamicRoute():create({
  account_id = --[[ string ]],
  gateway_id = --[[ string ]],
  account_tag = --[[ string ]],
  active = --[[ boolean ]],
  created_at = --[[ string ]],
  data = --[[ string ]],
  deployment = --[[ table ]],
  deployments = --[[ table ]],
  elements = --[[ table ]],
  id = --[[ string ]],
  modified_at = --[[ string ]],
  name = --[[ string ]],
  order_by = --[[ string ]],
  order_by_direction = --[[ string ]],
  page = --[[ number ]],
  per_page = --[[ number ]],
  routes = --[[ table ]],
  version = --[[ table ]],
  version_id = --[[ string ]],
  versions = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiGatewayDynamicRoute():load({ id = "ai_gateway_dynamic_route_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGatewayDynamicRoute():remove({ id = "ai_gateway_dynamic_route_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiGatewayDynamicRoute():update({
  id = "ai_gateway_dynamic_route_id",
  account_id = "account_id",
  gateway_id = "gateway_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayDynamicRouteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayEvaluationEntity

```lua
local ai_gateway_evaluation = client:AiGatewayEvaluation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `dataset_ids` | `table` | Yes |  |
| `datasets` | `table` | Yes |  |
| `description` | `string` | Yes |  |
| `enable` | `boolean` | Yes |  |
| `evaluation_type_ids` | `table` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `mandatory` | `boolean` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `processed` | `boolean` | Yes |  |
| `results` | `table` | Yes |  |
| `total_logs` | `number` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayEvaluation():create({
  account_id = --[[ string ]],
  gateway_id = --[[ string ]],
  created_at = --[[ string ]],
  dataset_ids = --[[ table ]],
  datasets = --[[ table ]],
  description = --[[ string ]],
  enable = --[[ boolean ]],
  evaluation_type_ids = --[[ table ]],
  id = --[[ string ]],
  mandatory = --[[ boolean ]],
  modified_at = --[[ string ]],
  name = --[[ string ]],
  processed = --[[ boolean ]],
  results = --[[ table ]],
  total_logs = --[[ number ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayEvaluation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiGatewayEvaluation():load({ id = "ai_gateway_evaluation_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGatewayEvaluation():remove({ id = "ai_gateway_evaluation_id", account_id = "account_id", gateway_id = "gateway_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayEvaluationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayGatewayEntity

```lua
local ai_gateway_gateway = client:AiGatewayGateway(nil)
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
| `guardrails` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `is_default` | `boolean` | No |  |
| `log_classification` | `boolean` | No |  |
| `log_management` | `number` | No |  |
| `log_management_strategy` | `string` | No |  |
| `logpush` | `boolean` | No |  |
| `logpush_public_key` | `string` | No |  |
| `modified_at` | `string` | Yes |  |
| `otel` | `table` | No |  |
| `rate_limiting_interval` | `number` | Yes |  |
| `rate_limiting_limit` | `number` | Yes |  |
| `rate_limiting_technique` | `string` | No |  |
| `result` | `string` | Yes |  |
| `retry_backoff` | `string` | No | Backoff strategy for retry delays |
| `retry_delay` | `number` | No | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `number` | No | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `table` | No |  |
| `store_id` | `string` | No |  |
| `stripe` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |
| `workers_ai_billing_mode` | `string` | No | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayGateway():create({
  account_id = --[[ string ]],
  cache_invalidate_on_update = --[[ boolean ]],
  cache_ttl = --[[ number ]],
  collect_logs = --[[ boolean ]],
  created_at = --[[ string ]],
  guardrails = --[[ table ]],
  id = --[[ string ]],
  modified_at = --[[ string ]],
  rate_limiting_interval = --[[ number ]],
  rate_limiting_limit = --[[ number ]],
  result = --[[ string ]],
  stripe = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayGateway():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiGatewayGateway():load({ id = "ai_gateway_gateway_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGatewayGateway():remove({ id = "ai_gateway_gateway_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiGatewayGateway():update({
  id = "ai_gateway_gateway_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayGatewayEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayLogEntity

```lua
local ai_gateway_log = client:AiGatewayLog(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayLog():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiGatewayLog():load({ id = "ai_gateway_log_id", account_id = "account_id", gateway_id = "gateway_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGatewayLog():remove({ account_id = "account_id", gateway_id = "gateway_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiGatewayLog():update({
  id = "ai_gateway_log_id",
  account_id = "account_id",
  gateway_id = "gateway_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayLogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiGatewayProviderConfigEntity

```lua
local ai_gateway_provider_config = client:AiGatewayProviderConfig(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiGatewayProviderConfig():create({
  account_id = --[[ string ]],
  gateway_id = --[[ string ]],
  alias = --[[ string ]],
  default_config = --[[ boolean ]],
  id = --[[ string ]],
  modified_at = --[[ string ]],
  provider_slug = --[[ string ]],
  secret_id = --[[ string ]],
  secret_preview = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiGatewayProviderConfig():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiGatewayProviderConfig():remove({ account_id = "account_id", gateway_id = "gateway_id", id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiGatewayProviderConfig():update({
  account_id = "account_id",
  gateway_id = "gateway_id",
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayProviderConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiSearchAccountSearchEntity

```lua
local ai_search_account_search = client:AiSearchAccountSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_search_options` | `table` | Yes |  |
| `choices` | `table` | Yes |  |
| `chunks` | `table` | Yes |  |
| `errors` | `table` | No |  |
| `id` | `string` | No |  |
| `messages` | `table` | No | OpenAI-compatible message array. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiSearchAccountSearch():create({
  account_id = --[[ string ]],
  ai_search_options = --[[ table ]],
  choices = --[[ table ]],
  chunks = --[[ table ]],
  query_kind = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchAccountSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiSearchInstanceEntity

```lua
local ai_search_instance = client:AiSearchInstance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_gateway_id` | `string` | No |  |
| `ai_search_model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `table` | No |  |
| `cache` | `boolean` | No |  |
| `cache_threshold` | `string` | No |  |
| `cache_ttl` | `any` | No | Cache entry TTL in seconds. |
| `choices` | `table` | Yes |  |
| `chunk` | `boolean` | No |  |
| `chunk_overlap` | `number` | No |  |
| `chunk_size` | `number` | No |  |
| `chunks` | `table` | Yes |  |
| `completed` | `number` | No |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | No |  |
| `custom_metadata` | `table` | No |  |
| `degraded` | `boolean` | No | True when status counts are unavailable (e.g. |
| `embedding_model` | `string` | No |  |
| `enable` | `boolean` | No |  |
| `engine` | `table` | No | Engine-specific metadata. |
| `engine_version` | `number` | No |  |
| `error` | `number` | No |  |
| `file_embed_errors` | `table` | No |  |
| `fusion_method` | `string` | No |  |
| `hybrid_search_enabled` | `boolean` | No | Deprecated — use index_method instead. |
| `id` | `string` | Yes | AI Search instance ID. |
| `index_method` | `table` | Yes | Controls which storage backends are used during indexing. |
| `index_source_errors` | `table` | No |  |
| `indexing_options` | `table` | No |  |
| `last_activity` | `string` | No |  |
| `max_num_results` | `number` | No |  |
| `messages` | `table` | Yes |  |
| `metadata` | `table` | No |  |
| `model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `string` | Yes |  |
| `modified_by` | `string` | No |  |
| `namespace` | `string` | No |  |
| `object` | `string` | No |  |
| `outdated` | `number` | No |  |
| `paused` | `boolean` | No |  |
| `public_endpoint_id` | `string` | No |  |
| `public_endpoint_params` | `table` | No |  |
| `queued` | `number` | No |  |
| `reranking` | `boolean` | No |  |
| `reranking_model` | `string` | No |  |
| `retrieval_options` | `table` | No |  |
| `rewrite_model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `boolean` | No |  |
| `running` | `number` | No |  |
| `score_threshold` | `number` | No |  |
| `skipped` | `number` | No |  |
| `source` | `string` | No |  |
| `source_params` | `table` | No |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiSearchInstance():create({
  account_id = --[[ string ]],
  choices = --[[ table ]],
  chunks = --[[ table ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  index_method = --[[ table ]],
  messages = --[[ table ]],
  modified_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiSearchInstance():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiSearchInstance():load({ id = "ai_search_instance_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiSearchInstance():remove({ id = "ai_search_instance_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiSearchInstance():update({
  id = "ai_search_instance_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchInstanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiSearchInstancesItemEntity

```lua
local ai_search_instances_item = client:AiSearchInstancesItem(nil)
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
| `item` | `table` | Yes |  |
| `key` | `string` | Yes | Item key / filename. |
| `last_seen_at` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `metadata` | `table` | Yes | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `string` | Yes |  |
| `next_action` | `string` | Yes |  |
| `processingTimeMs` | `number` | Yes |  |
| `source_id` | `string` | Yes | Identifies which data source this item belongs to. |
| `start_byte` | `number` | No |  |
| `status` | `string` | Yes |  |
| `text` | `string` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `wait_for_completion` | `boolean` | No | Wait for indexing to fully complete before responding. |
| `warnings` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiSearchInstancesItem():create({
  account_id = --[[ string ]],
  instance_id = --[[ string ]],
  namespace_id = --[[ string ]],
  action = --[[ string ]],
  checksum = --[[ string ]],
  chunkCount = --[[ number ]],
  chunks_count = --[[ number ]],
  created_at = --[[ string ]],
  errorType = --[[ string ]],
  fileKey = --[[ string ]],
  file_size = --[[ number ]],
  id = --[[ string ]],
  item = --[[ table ]],
  key = --[[ string ]],
  last_seen_at = --[[ string ]],
  message = --[[ string ]],
  metadata = --[[ table ]],
  namespace = --[[ string ]],
  next_action = --[[ string ]],
  processingTimeMs = --[[ number ]],
  source_id = --[[ string ]],
  status = --[[ string ]],
  text = --[[ string ]],
  timestamp = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiSearchInstancesItem():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiSearchInstancesItem():load({ id = "ai_search_instances_item_id", account_id = "account_id", instance_id = "instance_id", namespace_id = "namespace_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiSearchInstancesItem():remove({ id = "ai_search_instances_item_id", account_id = "account_id", instance_id = "instance_id", namespace_id = "namespace_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiSearchInstancesItem():update({
  id = "ai_search_instances_item_id",
  account_id = "account_id",
  instance_id = "instance_id",
  namespace_id = "namespace_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchInstancesItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiSearchInstancesJobEntity

```lua
local ai_search_instances_job = client:AiSearchInstancesJob(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiSearchInstancesJob():create({
  account_id = --[[ string ]],
  instance_id = --[[ string ]],
  action = --[[ string ]],
  created_at = --[[ number ]],
  id = --[[ string ]],
  message = --[[ string ]],
  message_type = --[[ number ]],
  source = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiSearchInstancesJob():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiSearchInstancesJob():load({ id = "ai_search_instances_job_id", account_id = "account_id", instance_id = "instance_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiSearchInstancesJob():update({
  id = "ai_search_instances_job_id",
  account_id = "account_id",
  instance_id = "instance_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchInstancesJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiSearchNamespaceEntity

```lua
local ai_search_namespace = client:AiSearchNamespace(nil)
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
| `public_endpoint_params` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiSearchNamespace():create({
  account_id = --[[ string ]],
  created_at = --[[ string ]],
  name = --[[ string ]],
  new_namespace = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiSearchNamespace():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiSearchNamespace():load({ id = "ai_search_namespace_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiSearchNamespace():remove({ id = "ai_search_namespace_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiSearchNamespace():update({
  id = "ai_search_namespace_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchNamespaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiSearchTokenEntity

```lua
local ai_search_token = client:AiSearchToken(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiSearchToken():create({
  account_id = --[[ string ]],
  cf_api_id = --[[ string ]],
  cf_api_key = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  modified_at = --[[ string ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AiSearchToken():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiSearchToken():load({ id = "ai_search_token_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiSearchToken():remove({ id = "ai_search_token_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AiSearchToken():update({
  id = "ai_search_token_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingCreateTopupEntity

```lua
local aig_billing_create_topup = client:AigBillingCreateTopup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Top-up amount in cents (min 1000). |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `payment_method_id` | `string` | No | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AigBillingCreateTopup():create({
  account_id = --[[ string ]],
  amount = --[[ number ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingCreateTopupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingDeleteSpendingLimitEntity

```lua
local aig_billing_delete_spending_limit = client:AigBillingDeleteSpendingLimit(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AigBillingDeleteSpendingLimit():remove({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingDeleteSpendingLimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingDeleteTopupConfigEntity

```lua
local aig_billing_delete_topup_config = client:AigBillingDeleteTopupConfig(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AigBillingDeleteTopupConfig():remove({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingDeleteTopupConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingGetCreditBalanceEntity

```lua
local aig_billing_get_credit_balance = client:AigBillingGetCreditBalance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AigBillingGetCreditBalance():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetCreditBalanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingGetInvoiceHistoryEntity

```lua
local aig_billing_get_invoice_history = client:AigBillingGetInvoiceHistory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AigBillingGetInvoiceHistory():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetInvoiceHistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingGetInvoicePreviewEntity

```lua
local aig_billing_get_invoice_preview = client:AigBillingGetInvoicePreview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AigBillingGetInvoicePreview():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetInvoicePreviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingGetSpendingLimitEntity

```lua
local aig_billing_get_spending_limit = client:AigBillingGetSpendingLimit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AigBillingGetSpendingLimit():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetSpendingLimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingGetTopupConfigEntity

```lua
local aig_billing_get_topup_config = client:AigBillingGetTopupConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AigBillingGetTopupConfig():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetTopupConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingGetTopupEligibilityEntity

```lua
local aig_billing_get_topup_eligibility = client:AigBillingGetTopupEligibility(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `payment_methods` | `table` | No | Account-level payment methods, forwarded by the dashboard. |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AigBillingGetTopupEligibility():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetTopupEligibilityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingGetTopupLimitEntity

```lua
local aig_billing_get_topup_limit = client:AigBillingGetTopupLimit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AigBillingGetTopupLimit():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetTopupLimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingGetUsageHistoryEntity

```lua
local aig_billing_get_usage_history = client:AigBillingGetUsageHistory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AigBillingGetUsageHistory():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetUsageHistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingSetSpendingLimitEntity

```lua
local aig_billing_set_spending_limit = client:AigBillingSetSpendingLimit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Spending limit amount in cents (min 100). |
| `duration` | `string` | Yes | Spending limit duration. |
| `strategy` | `string` | Yes | Spending limit strategy. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AigBillingSetSpendingLimit():create({
  account_id = --[[ string ]],
  amount = --[[ number ]],
  duration = --[[ string ]],
  strategy = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingSetSpendingLimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingSetTopupConfigEntity

```lua
local aig_billing_set_topup_config = client:AigBillingSetTopupConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Auto top-up amount in cents (min 1000). |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |
| `threshold` | `number` | Yes | Balance threshold in cents that triggers auto top-up (min 500). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AigBillingSetTopupConfig():create({
  account_id = --[[ string ]],
  amount = --[[ number ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
  threshold = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingSetTopupConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AigBillingTopupStatusEntity

```lua
local aig_billing_topup_status = client:AigBillingTopupStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `payment_intent_id` | `string` | Yes | Stripe invoice ID to check status for. |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AigBillingTopupStatus():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  payment_intent_id = --[[ string ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingTopupStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutoRagJobEntity

```lua
local auto_rag_job = client:AutoRagJob(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AutoRagJob():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AutoRagJob():load({ id = "auto_rag_job_id", account_id = "account_id", rag_id = "rag_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutoRagJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutoRagRagEntity

```lua
local auto_rag_rag = client:AutoRagRag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `string` | Yes |  |
| `job_id` | `string` | Yes |  |
| `key` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AutoRagRag():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AutoRagRag():update({
  account_id = "account_id",
  rag_id = "rag_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutoRagRagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutoRagRagSearchEntity

```lua
local auto_rag_rag_search = client:AutoRagRagSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `filters` | `any` | No |  |
| `has_more` | `boolean` | No |  |
| `max_num_results` | `number` | No |  |
| `model` | `any` | No |  |
| `next_page` | `string` | No |  |
| `object` | `string` | No |  |
| `query` | `string` | Yes |  |
| `ranking_options` | `table` | No |  |
| `reranking` | `table` | No |  |
| `response` | `string` | Yes |  |
| `rewrite_query` | `boolean` | No |  |
| `search_query` | `string` | Yes |  |
| `stream` | `boolean` | No |  |
| `system_prompt` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AutoRagRagSearch():create({
  account_id = --[[ string ]],
  rag_id = --[[ string ]],
  query = --[[ string ]],
  response = --[[ string ]],
  search_query = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutoRagRagSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FinetuneAssetEntity

```lua
local finetune_asset = client:FinetuneAsset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file_name` | `string` | Yes |  |
| `file_url` | `string` | Yes |  |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FinetuneAsset():load({ id = "finetune_asset_id", account_id = "account_id", finetune_id = "finetune_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinetuneAssetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemoryEntity

```lua
local memory = client:Memory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | Always empty for a successful response. |
| `id` | `string` | No |  |
| `messages` | `table` | Yes | Informational, non-error messages, if any. |
| `result` | `table` | Yes |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes | Always true for a successful response. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Memory():create({
  account_id = --[[ string ]],
  namespace_id = --[[ string ]],
  profile_name = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Memory():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Memory():load({ id = "memory_id", account_id = "account_id", namespace_id = "namespace_id", profile_id = "profile_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Memory():remove({ id = "memory_id", account_id = "account_id", namespace_id = "namespace_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NamespaceEntity

```lua
local namespace = client:Namespace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | Always empty for a successful response. |
| `id` | `string` | No |  |
| `messages` | `table` | Yes | Informational, non-error messages, if any. |
| `name` | `string` | Yes | Namespace name. |
| `result` | `table` | Yes |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes | Always true for a successful response. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Namespace():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Namespace():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Namespace():load({ id = "namespace_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Namespace():remove({ id = "namespace_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VectorizeEntity

```lua
local vectorize = client:Vectorize(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | Yes |  |
| `description` | `string` | No | Specifies the description of the index. |
| `errors` | `table` | Yes |  |
| `ids` | `table` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `string` | Yes | Specifies the type of metadata property to index. |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `propertyName` | `string` | Yes | Specifies the metadata property to index. |
| `result` | `table` | Yes |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Vectorize():create({
  account_id = --[[ string ]],
  config = --[[ any ]],
  errors = --[[ table ]],
  indexType = --[[ string ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  propertyName = --[[ string ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Vectorize():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Vectorize():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Vectorize():remove({ account_id = "account_id", index_name = "index_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VectorizeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VectorizeBetaDeprecatedEntity

```lua
local vectorize_beta__deprecated = client:VectorizeBetaDeprecated(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | Yes |  |
| `description` | `string` | No | Specifies the description of the index. |
| `errors` | `table` | Yes |  |
| `ids` | `table` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `table` | No |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:VectorizeBetaDeprecated():create({
  account_id = --[[ string ]],
  config = --[[ any ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:VectorizeBetaDeprecated():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:VectorizeBetaDeprecated():load({ account_id = "account_id", index_name = "index_name" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:VectorizeBetaDeprecated():remove({ account_id = "account_id", index_name = "index_name" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:VectorizeBetaDeprecated():update({
  account_id = "account_id",
  index_name = "index_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VectorizeBetaDeprecatedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersAiEntity

```lua
local workers_ai = client:WorkersAi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `extension` | `string` | Yes |  |
| `input` | `table` | Yes | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `table` | Yes |  |
| `mimeType` | `string` | Yes |  |
| `model` | `string` | Yes | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `table` | No |  |
| `output` | `table` | Yes |  |
| `result` | `table` | No | Model-specific output. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkersAi():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  extension = --[[ string ]],
  input = --[[ table ]],
  messages = --[[ table ]],
  mimeType = --[[ string ]],
  model = --[[ string ]],
  output = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersAi():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkersAi():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersAiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkersAiFinetuneEntity

```lua
local workers_ai_finetune = client:WorkersAiFinetune(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkersAiFinetune():create({
  account_id = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  model = --[[ string ]],
  modified_at = --[[ string ]],
  name = --[[ string ]],
  public = --[[ boolean ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkersAiFinetune():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkersAiFinetune():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:WorkersAiFinetune():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersAiFinetuneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
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

