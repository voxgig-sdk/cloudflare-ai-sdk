# CloudflareAi Golang SDK Reference

Complete API reference for the CloudflareAi Golang SDK.


## CloudflareAiSDK

### Constructor

```go
func NewCloudflareAiSDK(options map[string]any) *CloudflareAiSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareAiSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareAiSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Account(data map[string]any) CloudflareAiEntity`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AiGateway(data map[string]any) CloudflareAiEntity`

Create a new `AiGateway` entity instance. Pass `nil` for no initial data.

#### `AiGatewayCustomDomain(data map[string]any) CloudflareAiEntity`

Create a new `AiGatewayCustomDomain` entity instance. Pass `nil` for no initial data.

#### `AiGatewayCustomProvider(data map[string]any) CloudflareAiEntity`

Create a new `AiGatewayCustomProvider` entity instance. Pass `nil` for no initial data.

#### `AiGatewayCustomProviderCost(data map[string]any) CloudflareAiEntity`

Create a new `AiGatewayCustomProviderCost` entity instance. Pass `nil` for no initial data.

#### `AiGatewayDataset(data map[string]any) CloudflareAiEntity`

Create a new `AiGatewayDataset` entity instance. Pass `nil` for no initial data.

#### `AiGatewayDynamicRoute(data map[string]any) CloudflareAiEntity`

Create a new `AiGatewayDynamicRoute` entity instance. Pass `nil` for no initial data.

#### `AiGatewayEvaluation(data map[string]any) CloudflareAiEntity`

Create a new `AiGatewayEvaluation` entity instance. Pass `nil` for no initial data.

#### `AiGatewayGateway(data map[string]any) CloudflareAiEntity`

Create a new `AiGatewayGateway` entity instance. Pass `nil` for no initial data.

#### `AiGatewayLog(data map[string]any) CloudflareAiEntity`

Create a new `AiGatewayLog` entity instance. Pass `nil` for no initial data.

#### `AiGatewayProviderConfig(data map[string]any) CloudflareAiEntity`

Create a new `AiGatewayProviderConfig` entity instance. Pass `nil` for no initial data.

#### `AiSearchAccountSearch(data map[string]any) CloudflareAiEntity`

Create a new `AiSearchAccountSearch` entity instance. Pass `nil` for no initial data.

#### `AiSearchInstance(data map[string]any) CloudflareAiEntity`

Create a new `AiSearchInstance` entity instance. Pass `nil` for no initial data.

#### `AiSearchInstancesItem(data map[string]any) CloudflareAiEntity`

Create a new `AiSearchInstancesItem` entity instance. Pass `nil` for no initial data.

#### `AiSearchInstancesJob(data map[string]any) CloudflareAiEntity`

Create a new `AiSearchInstancesJob` entity instance. Pass `nil` for no initial data.

#### `AiSearchNamespace(data map[string]any) CloudflareAiEntity`

Create a new `AiSearchNamespace` entity instance. Pass `nil` for no initial data.

#### `AiSearchToken(data map[string]any) CloudflareAiEntity`

Create a new `AiSearchToken` entity instance. Pass `nil` for no initial data.

#### `AigBillingCreateTopup(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingCreateTopup` entity instance. Pass `nil` for no initial data.

#### `AigBillingDeleteSpendingLimit(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingDeleteSpendingLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingDeleteTopupConfig(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingDeleteTopupConfig` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetCreditBalance(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingGetCreditBalance` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetInvoiceHistory(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingGetInvoiceHistory` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetInvoicePreview(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingGetInvoicePreview` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetSpendingLimit(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingGetSpendingLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetTopupConfig(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingGetTopupConfig` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetTopupEligibility(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingGetTopupEligibility` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetTopupLimit(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingGetTopupLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingGetUsageHistory(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingGetUsageHistory` entity instance. Pass `nil` for no initial data.

#### `AigBillingSetSpendingLimit(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingSetSpendingLimit` entity instance. Pass `nil` for no initial data.

#### `AigBillingSetTopupConfig(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingSetTopupConfig` entity instance. Pass `nil` for no initial data.

#### `AigBillingTopupStatus(data map[string]any) CloudflareAiEntity`

Create a new `AigBillingTopupStatus` entity instance. Pass `nil` for no initial data.

#### `AutoRagJob(data map[string]any) CloudflareAiEntity`

Create a new `AutoRagJob` entity instance. Pass `nil` for no initial data.

#### `AutoRagRag(data map[string]any) CloudflareAiEntity`

Create a new `AutoRagRag` entity instance. Pass `nil` for no initial data.

#### `AutoRagRagSearch(data map[string]any) CloudflareAiEntity`

Create a new `AutoRagRagSearch` entity instance. Pass `nil` for no initial data.

#### `FinetuneAsset(data map[string]any) CloudflareAiEntity`

Create a new `FinetuneAsset` entity instance. Pass `nil` for no initial data.

#### `Memory(data map[string]any) CloudflareAiEntity`

Create a new `Memory` entity instance. Pass `nil` for no initial data.

#### `Namespace(data map[string]any) CloudflareAiEntity`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `Vectorize(data map[string]any) CloudflareAiEntity`

Create a new `Vectorize` entity instance. Pass `nil` for no initial data.

#### `VectorizeBetaDeprecated(data map[string]any) CloudflareAiEntity`

Create a new `VectorizeBetaDeprecated` entity instance. Pass `nil` for no initial data.

#### `WorkersAi(data map[string]any) CloudflareAiEntity`

Create a new `WorkersAi` entity instance. Pass `nil` for no initial data.

#### `WorkersAiFinetune(data map[string]any) CloudflareAiEntity`

Create a new `WorkersAiFinetune` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccountEntity

```go
account := client.Account(nil)
fmt.Println(account.GetName()) // "account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Account(nil).Load(map[string]any{"id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Account(nil).Update(map[string]any{
    "id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayEntity

```go
aiGateway := client.AiGateway(nil)
fmt.Println(aiGateway.GetName()) // "ai_gateway"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byokAlias` | `string` | No |  |
| `items` | `[]any` | Yes |  |
| `limit` | `int` | No |  |
| `metadata` | `map[string]any` | Yes |  |
| `options` | `map[string]any` | Yes |  |
| `provider` | `string` | No |  |
| `query` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayCustomDomainEntity

```go
aiGatewayCustomDomain := client.AiGatewayCustomDomain(nil)
fmt.Println(aiGatewayCustomDomain.GetName()) // "ai_gateway_custom_domain"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayCustomDomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiGatewayCustomDomain(nil).Load(map[string]any{"id": "ai_gateway_custom_domain_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGatewayCustomDomain(nil).Remove(map[string]any{"id": "ai_gateway_custom_domain_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayCustomDomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayCustomProviderEntity

```go
aiGatewayCustomProvider := client.AiGatewayCustomProvider(nil)
fmt.Println(aiGatewayCustomProvider.GetName()) // "ai_gateway_custom_provider"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayCustomProvider(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiGatewayCustomProvider(nil).Load(map[string]any{"id": "ai_gateway_custom_provider_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiGatewayCustomProvider(nil).Update(map[string]any{
    "id": "ai_gateway_custom_provider_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGatewayCustomProvider(nil).Remove(map[string]any{"id": "ai_gateway_custom_provider_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayCustomProviderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayCustomProviderCostEntity

```go
aiGatewayCustomProviderCost := client.AiGatewayCustomProviderCost(nil)
fmt.Println(aiGatewayCustomProviderCost.GetName()) // "ai_gateway_custom_provider_cost"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_provider_id` | `string` | Yes | ID of the custom provider that the pricing rule applies to. |
| `changed_by` | `string` | No |  |
| `cost_in` | `float64` | No |  |
| `cost_out` | `float64` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayCustomProviderCost(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiGatewayCustomProviderCost(nil).Load(map[string]any{"id": "ai_gateway_custom_provider_cost_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiGatewayCustomProviderCost(nil).Update(map[string]any{
    "id": "ai_gateway_custom_provider_cost_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGatewayCustomProviderCost(nil).Remove(map[string]any{"id": "ai_gateway_custom_provider_cost_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayCustomProviderCostEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayDatasetEntity

```go
aiGatewayDataset := client.AiGatewayDataset(nil)
fmt.Println(aiGatewayDataset.GetName()) // "ai_gateway_dataset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `enable` | `bool` | Yes |  |
| `filters` | `[]any` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayDataset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiGatewayDataset(nil).Load(map[string]any{"id": "ai_gateway_dataset_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiGatewayDataset(nil).Update(map[string]any{
    "id": "ai_gateway_dataset_id",
    "account_id": "account_id",
    "gateway_id": "gateway_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGatewayDataset(nil).Remove(map[string]any{"id": "ai_gateway_dataset_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayDatasetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayDynamicRouteEntity

```go
aiGatewayDynamicRoute := client.AiGatewayDynamicRoute(nil)
fmt.Println(aiGatewayDynamicRoute.GetName()) // "ai_gateway_dynamic_route"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_tag` | `string` | Yes |  |
| `active` | `bool` | Yes |  |
| `created_at` | `string` | Yes |  |
| `data` | `string` | Yes |  |
| `deployment` | `map[string]any` | Yes |  |
| `deployments` | `[]any` | Yes |  |
| `elements` | `[]any` | Yes |  |
| `gateway_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_valid` | `bool` | No |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `order_by` | `string` | Yes |  |
| `order_by_direction` | `string` | Yes |  |
| `page` | `float64` | Yes |  |
| `per_page` | `float64` | Yes |  |
| `routes` | `[]any` | Yes |  |
| `version` | `map[string]any` | Yes |  |
| `version_id` | `string` | Yes |  |
| `versions` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiGatewayDynamicRoute(nil).Load(map[string]any{"id": "ai_gateway_dynamic_route_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiGatewayDynamicRoute(nil).Update(map[string]any{
    "id": "ai_gateway_dynamic_route_id",
    "account_id": "account_id",
    "gateway_id": "gateway_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGatewayDynamicRoute(nil).Remove(map[string]any{"id": "ai_gateway_dynamic_route_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayDynamicRouteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayEvaluationEntity

```go
aiGatewayEvaluation := client.AiGatewayEvaluation(nil)
fmt.Println(aiGatewayEvaluation.GetName()) // "ai_gateway_evaluation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `dataset_ids` | `[]any` | Yes |  |
| `datasets` | `[]any` | Yes |  |
| `description` | `string` | Yes |  |
| `enable` | `bool` | Yes |  |
| `evaluation_type_ids` | `[]any` | Yes |  |
| `gateway_id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `string` | Yes |  |
| `mandatory` | `bool` | Yes |  |
| `modified_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `processed` | `bool` | Yes |  |
| `results` | `[]any` | Yes |  |
| `total_logs` | `float64` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayEvaluation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiGatewayEvaluation(nil).Load(map[string]any{"id": "ai_gateway_evaluation_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGatewayEvaluation(nil).Remove(map[string]any{"id": "ai_gateway_evaluation_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayEvaluationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayGatewayEntity

```go
aiGatewayGateway := client.AiGatewayGateway(nil)
fmt.Println(aiGatewayGateway.GetName()) // "ai_gateway_gateway"
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
| `dlp` | `any` | No |  |
| `guardrails` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the AI Gateway within the account. |
| `is_default` | `bool` | No |  |
| `log_classification` | `bool` | No |  |
| `log_management` | `int` | No |  |
| `log_management_strategy` | `string` | No |  |
| `logpush` | `bool` | No |  |
| `logpush_public_key` | `string` | No |  |
| `modified_at` | `string` | Yes |  |
| `otel` | `[]any` | No |  |
| `rate_limiting_interval` | `int` | Yes |  |
| `rate_limiting_limit` | `int` | Yes |  |
| `rate_limiting_technique` | `string` | No |  |
| `result` | `string` | Yes |  |
| `retry_backoff` | `string` | No | Backoff strategy for retry delays |
| `retry_delay` | `int` | No | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `int` | No | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `map[string]any` | No |  |
| `store_id` | `string` | No |  |
| `stripe` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |
| `workers_ai_billing_mode` | `string` | No | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayGateway(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiGatewayGateway(nil).Load(map[string]any{"id": "ai_gateway_gateway_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiGatewayGateway(nil).Update(map[string]any{
    "id": "ai_gateway_gateway_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGatewayGateway(nil).Remove(map[string]any{"id": "ai_gateway_gateway_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayGatewayEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayLogEntity

```go
aiGatewayLog := client.AiGatewayLog(nil)
fmt.Println(aiGatewayLog.GetName()) // "ai_gateway_log"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cached` | `bool` | Yes |  |
| `cost` | `float64` | No |  |
| `created_at` | `string` | Yes |  |
| `custom_cost` | `bool` | No |  |
| `duration` | `int` | Yes |  |
| `feedback` | `float64` | No |  |
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
| `score` | `float64` | No |  |
| `status_code` | `int` | No |  |
| `step` | `int` | No |  |
| `success` | `bool` | Yes |  |
| `tokens_in` | `int` | Yes |  |
| `tokens_out` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiGatewayLog(nil).Load(map[string]any{"id": "ai_gateway_log_id", "account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiGatewayLog(nil).Update(map[string]any{
    "id": "ai_gateway_log_id",
    "account_id": "account_id",
    "gateway_id": "gateway_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGatewayLog(nil).Remove(map[string]any{"account_id": "account_id", "gateway_id": "gateway_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayLogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiGatewayProviderConfigEntity

```go
aiGatewayProviderConfig := client.AiGatewayProviderConfig(nil)
fmt.Println(aiGatewayProviderConfig.GetName()) // "ai_gateway_provider_config"
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
| `rate_limit` | `float64` | No |  |
| `rate_limit_period` | `float64` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiGatewayProviderConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiGatewayProviderConfig(nil).Update(map[string]any{
    "account_id": "account_id",
    "gateway_id": "gateway_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiGatewayProviderConfig(nil).Remove(map[string]any{"account_id": "account_id", "gateway_id": "gateway_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiGatewayProviderConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiSearchAccountSearchEntity

```go
aiSearchAccountSearch := client.AiSearchAccountSearch(nil)
fmt.Println(aiSearchAccountSearch.GetName()) // "ai_search_account_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_search_options` | `map[string]any` | Yes |  |
| `choices` | `[]any` | Yes |  |
| `chunks` | `[]any` | Yes |  |
| `errors` | `[]any` | No |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | No | OpenAI-compatible message array. |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiSearchAccountSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiSearchInstanceEntity

```go
aiSearchInstance := client.AiSearchInstance(nil)
fmt.Println(aiSearchInstance.GetName()) // "ai_search_instance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_gateway_id` | `string` | No |  |
| `ai_search_model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `map[string]any` | No |  |
| `cache` | `bool` | No |  |
| `cache_threshold` | `string` | No |  |
| `cache_ttl` | `any` | No | Cache entry TTL in seconds. |
| `choices` | `[]any` | Yes |  |
| `chunk` | `bool` | No |  |
| `chunk_overlap` | `int` | No |  |
| `chunk_size` | `int` | No |  |
| `chunks` | `[]any` | Yes |  |
| `completed` | `int` | No |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | No |  |
| `custom_metadata` | `[]any` | No |  |
| `degraded` | `bool` | No | True when status counts are unavailable (e.g. |
| `embedding_model` | `string` | No |  |
| `enable` | `bool` | No |  |
| `engine` | `map[string]any` | No | Engine-specific metadata. |
| `engine_version` | `float64` | No |  |
| `error` | `int` | No |  |
| `file_embed_errors` | `map[string]any` | No |  |
| `fusion_method` | `string` | No |  |
| `hybrid_search_enabled` | `bool` | No | Deprecated — use index_method instead. |
| `id` | `string` | Yes | AI Search instance ID. |
| `index_method` | `map[string]any` | Yes | Controls which storage backends are used during indexing. |
| `index_source_errors` | `map[string]any` | No |  |
| `indexing_options` | `map[string]any` | No |  |
| `last_activity` | `string` | No |  |
| `max_num_results` | `int` | No |  |
| `messages` | `[]any` | Yes |  |
| `metadata` | `map[string]any` | No |  |
| `model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `string` | Yes |  |
| `modified_by` | `string` | No |  |
| `namespace` | `string` | No |  |
| `object` | `string` | No |  |
| `outdated` | `int` | No |  |
| `paused` | `bool` | No |  |
| `public_endpoint_id` | `string` | No |  |
| `public_endpoint_params` | `map[string]any` | No |  |
| `queued` | `int` | No |  |
| `reranking` | `bool` | No |  |
| `reranking_model` | `string` | No |  |
| `retrieval_options` | `map[string]any` | No |  |
| `rewrite_model` | `string` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `bool` | No |  |
| `running` | `int` | No |  |
| `score_threshold` | `float64` | No |  |
| `skipped` | `int` | No |  |
| `source` | `string` | No |  |
| `source_params` | `map[string]any` | No |  |
| `status` | `string` | No |  |
| `stream` | `bool` | No |  |
| `summarization` | `bool` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiSearchInstance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiSearchInstance(nil).Load(map[string]any{"id": "ai_search_instance_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiSearchInstance(nil).Update(map[string]any{
    "id": "ai_search_instance_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiSearchInstance(nil).Remove(map[string]any{"id": "ai_search_instance_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiSearchInstanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiSearchInstancesItemEntity

```go
aiSearchInstancesItem := client.AiSearchInstancesItem(nil)
fmt.Println(aiSearchInstancesItem.GetName()) // "ai_search_instances_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `checksum` | `string` | Yes |  |
| `chunkCount` | `int` | Yes |  |
| `chunks_count` | `int` | Yes |  |
| `created_at` | `string` | Yes |  |
| `end_byte` | `float64` | No |  |
| `error` | `string` | No |  |
| `errorType` | `string` | Yes |  |
| `fileKey` | `string` | Yes |  |
| `file_size` | `float64` | Yes |  |
| `id` | `string` | Yes |  |
| `item` | `map[string]any` | Yes |  |
| `key` | `string` | Yes | Item key / filename. |
| `last_seen_at` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `metadata` | `map[string]any` | Yes | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `string` | Yes |  |
| `next_action` | `string` | Yes |  |
| `processingTimeMs` | `int` | Yes |  |
| `source_id` | `string` | Yes | Identifies which data source this item belongs to. |
| `start_byte` | `float64` | No |  |
| `status` | `string` | Yes |  |
| `text` | `string` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `wait_for_completion` | `bool` | No | Wait for indexing to fully complete before responding. |
| `warnings` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiSearchInstancesItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiSearchInstancesItem(nil).Load(map[string]any{"id": "ai_search_instances_item_id", "account_id": "account_id", "instance_id": "instance_id", "namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiSearchInstancesItem(nil).Update(map[string]any{
    "id": "ai_search_instances_item_id",
    "account_id": "account_id",
    "instance_id": "instance_id",
    "namespace_id": "namespace_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiSearchInstancesItem(nil).Remove(map[string]any{"id": "ai_search_instances_item_id", "account_id": "account_id", "instance_id": "instance_id", "namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiSearchInstancesItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiSearchInstancesJobEntity

```go
aiSearchInstancesJob := client.AiSearchInstancesJob(nil)
fmt.Println(aiSearchInstancesJob.GetName()) // "ai_search_instances_job"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes |  |
| `created_at` | `float64` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiSearchInstancesJob(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiSearchInstancesJob(nil).Load(map[string]any{"id": "ai_search_instances_job_id", "account_id": "account_id", "instance_id": "instance_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiSearchInstancesJob(nil).Update(map[string]any{
    "id": "ai_search_instances_job_id",
    "account_id": "account_id",
    "instance_id": "instance_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiSearchInstancesJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiSearchNamespaceEntity

```go
aiSearchNamespace := client.AiSearchNamespace(nil)
fmt.Println(aiSearchNamespace.GetName()) // "ai_search_namespace"
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
| `public_endpoint_params` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiSearchNamespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiSearchNamespace(nil).Load(map[string]any{"id": "ai_search_namespace_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiSearchNamespace(nil).Update(map[string]any{
    "id": "ai_search_namespace_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiSearchNamespace(nil).Remove(map[string]any{"id": "ai_search_namespace_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiSearchNamespaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiSearchTokenEntity

```go
aiSearchToken := client.AiSearchToken(nil)
fmt.Println(aiSearchToken.GetName()) // "ai_search_token"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AiSearchToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiSearchToken(nil).Load(map[string]any{"id": "ai_search_token_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AiSearchToken(nil).Update(map[string]any{
    "id": "ai_search_token_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiSearchToken(nil).Remove(map[string]any{"id": "ai_search_token_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiSearchTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingCreateTopupEntity

```go
aigBillingCreateTopup := client.AigBillingCreateTopup(nil)
fmt.Println(aigBillingCreateTopup.GetName()) // "aig_billing_create_topup"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Top-up amount in cents (min 1000). |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `payment_method_id` | `string` | No | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingCreateTopupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingDeleteSpendingLimitEntity

```go
aigBillingDeleteSpendingLimit := client.AigBillingDeleteSpendingLimit(nil)
fmt.Println(aigBillingDeleteSpendingLimit.GetName()) // "aig_billing_delete_spending_limit"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AigBillingDeleteSpendingLimit(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingDeleteSpendingLimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingDeleteTopupConfigEntity

```go
aigBillingDeleteTopupConfig := client.AigBillingDeleteTopupConfig(nil)
fmt.Println(aigBillingDeleteTopupConfig.GetName()) // "aig_billing_delete_topup_config"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AigBillingDeleteTopupConfig(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingDeleteTopupConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingGetCreditBalanceEntity

```go
aigBillingGetCreditBalance := client.AigBillingGetCreditBalance(nil)
fmt.Println(aigBillingGetCreditBalance.GetName()) // "aig_billing_get_credit_balance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AigBillingGetCreditBalance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingGetCreditBalanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingGetInvoiceHistoryEntity

```go
aigBillingGetInvoiceHistory := client.AigBillingGetInvoiceHistory(nil)
fmt.Println(aigBillingGetInvoiceHistory.GetName()) // "aig_billing_get_invoice_history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AigBillingGetInvoiceHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingGetInvoiceHistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingGetInvoicePreviewEntity

```go
aigBillingGetInvoicePreview := client.AigBillingGetInvoicePreview(nil)
fmt.Println(aigBillingGetInvoicePreview.GetName()) // "aig_billing_get_invoice_preview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AigBillingGetInvoicePreview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingGetInvoicePreviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingGetSpendingLimitEntity

```go
aigBillingGetSpendingLimit := client.AigBillingGetSpendingLimit(nil)
fmt.Println(aigBillingGetSpendingLimit.GetName()) // "aig_billing_get_spending_limit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AigBillingGetSpendingLimit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingGetSpendingLimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingGetTopupConfigEntity

```go
aigBillingGetTopupConfig := client.AigBillingGetTopupConfig(nil)
fmt.Println(aigBillingGetTopupConfig.GetName()) // "aig_billing_get_topup_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AigBillingGetTopupConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingGetTopupConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingGetTopupEligibilityEntity

```go
aigBillingGetTopupEligibility := client.AigBillingGetTopupEligibility(nil)
fmt.Println(aigBillingGetTopupEligibility.GetName()) // "aig_billing_get_topup_eligibility"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `payment_methods` | `[]any` | No | Account-level payment methods, forwarded by the dashboard. |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingGetTopupEligibilityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingGetTopupLimitEntity

```go
aigBillingGetTopupLimit := client.AigBillingGetTopupLimit(nil)
fmt.Println(aigBillingGetTopupLimit.GetName()) // "aig_billing_get_topup_limit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AigBillingGetTopupLimit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingGetTopupLimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingGetUsageHistoryEntity

```go
aigBillingGetUsageHistory := client.AigBillingGetUsageHistory(nil)
fmt.Println(aigBillingGetUsageHistory.GetName()) // "aig_billing_get_usage_history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AigBillingGetUsageHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingGetUsageHistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingSetSpendingLimitEntity

```go
aigBillingSetSpendingLimit := client.AigBillingSetSpendingLimit(nil)
fmt.Println(aigBillingSetSpendingLimit.GetName()) // "aig_billing_set_spending_limit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Spending limit amount in cents (min 100). |
| `duration` | `string` | Yes | Spending limit duration. |
| `strategy` | `string` | Yes | Spending limit strategy. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingSetSpendingLimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingSetTopupConfigEntity

```go
aigBillingSetTopupConfig := client.AigBillingSetTopupConfig(nil)
fmt.Println(aigBillingSetTopupConfig.GetName()) // "aig_billing_set_topup_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Auto top-up amount in cents (min 1000). |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |
| `threshold` | `int` | Yes | Balance threshold in cents that triggers auto top-up (min 500). |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingSetTopupConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AigBillingTopupStatusEntity

```go
aigBillingTopupStatus := client.AigBillingTopupStatus(nil)
fmt.Println(aigBillingTopupStatus.GetName()) // "aig_billing_topup_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `payment_intent_id` | `string` | Yes | Stripe invoice ID to check status for. |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AigBillingTopupStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutoRagJobEntity

```go
autoRagJob := client.AutoRagJob(nil)
fmt.Println(autoRagJob.GetName()) // "auto_rag_job"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `float64` | Yes |  |
| `end_reason` | `string` | No |  |
| `ended_at` | `string` | No |  |
| `id` | `string` | Yes |  |
| `last_seen_at` | `string` | No |  |
| `message` | `string` | Yes |  |
| `message_type` | `int` | Yes |  |
| `source` | `string` | Yes |  |
| `started_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AutoRagJob(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AutoRagJob(nil).Load(map[string]any{"id": "auto_rag_job_id", "account_id": "account_id", "rag_id": "rag_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutoRagJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutoRagRagEntity

```go
autoRagRag := client.AutoRagRag(nil)
fmt.Println(autoRagRag.GetName()) // "auto_rag_rag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `string` | Yes |  |
| `job_id` | `string` | Yes |  |
| `key` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AutoRagRag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AutoRagRag(nil).Update(map[string]any{
    "account_id": "account_id",
    "rag_id": "rag_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutoRagRagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutoRagRagSearchEntity

```go
autoRagRagSearch := client.AutoRagRagSearch(nil)
fmt.Println(autoRagRagSearch.GetName()) // "auto_rag_rag_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `filters` | `any` | No |  |
| `has_more` | `bool` | No |  |
| `max_num_results` | `int` | No |  |
| `model` | `any` | No |  |
| `next_page` | `string` | No |  |
| `object` | `string` | No |  |
| `query` | `string` | Yes |  |
| `ranking_options` | `map[string]any` | No |  |
| `reranking` | `map[string]any` | No |  |
| `response` | `string` | Yes |  |
| `rewrite_query` | `bool` | No |  |
| `search_query` | `string` | Yes |  |
| `stream` | `bool` | No |  |
| `system_prompt` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutoRagRagSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FinetuneAssetEntity

```go
finetuneAsset := client.FinetuneAsset(nil)
fmt.Println(finetuneAsset.GetName()) // "finetune_asset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file_name` | `string` | Yes |  |
| `file_url` | `string` | Yes |  |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FinetuneAsset(nil).Load(map[string]any{"id": "finetune_asset_id", "account_id": "account_id", "finetune_id": "finetune_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FinetuneAssetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemoryEntity

```go
memory := client.Memory(nil)
fmt.Println(memory.GetName()) // "memory"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | Always empty for a successful response. |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes | Informational, non-error messages, if any. |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Always true for a successful response. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Memory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Memory(nil).Load(map[string]any{"id": "memory_id", "account_id": "account_id", "namespace_id": "namespace_id", "profile_id": "profile_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Memory(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "namespace_id": "example_namespace_id",
    "profile_name": "example_profile_name",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Memory(nil).Remove(map[string]any{"id": "memory_id", "account_id": "account_id", "namespace_id": "namespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NamespaceEntity

```go
namespace := client.Namespace(nil)
fmt.Println(namespace.GetName()) // "namespace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | Always empty for a successful response. |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes | Informational, non-error messages, if any. |
| `name` | `string` | Yes | Namespace name. |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Always true for a successful response. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Namespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Namespace(nil).Load(map[string]any{"id": "namespace_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Namespace(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Namespace(nil).Remove(map[string]any{"id": "namespace_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VectorizeEntity

```go
vectorize := client.Vectorize(nil)
fmt.Println(vectorize.GetName()) // "vectorize"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | Yes |  |
| `description` | `string` | No | Specifies the description of the index. |
| `errors` | `[]any` | Yes |  |
| `ids` | `[]any` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `string` | Yes | Specifies the type of metadata property to index. |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `propertyName` | `string` | Yes | Specifies the metadata property to index. |
| `result` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Vectorize(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Vectorize(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Vectorize(nil).Remove(map[string]any{"account_id": "account_id", "index_name": "index_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VectorizeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VectorizeBetaDeprecatedEntity

```go
vectorizeBetaDeprecated := client.VectorizeBetaDeprecated(nil)
fmt.Println(vectorizeBetaDeprecated.GetName()) // "vectorize_beta__deprecated"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | Yes |  |
| `description` | `string` | No | Specifies the description of the index. |
| `errors` | `[]any` | Yes |  |
| `ids` | `[]any` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `result` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.VectorizeBetaDeprecated(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.VectorizeBetaDeprecated(nil).Load(map[string]any{"account_id": "account_id", "index_name": "index_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.VectorizeBetaDeprecated(nil).Update(map[string]any{
    "account_id": "account_id",
    "index_name": "index_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.VectorizeBetaDeprecated(nil).Remove(map[string]any{"account_id": "account_id", "index_name": "index_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VectorizeBetaDeprecatedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersAiEntity

```go
workersAi := client.WorkersAi(nil)
fmt.Println(workersAi.GetName()) // "workers_ai"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `extension` | `string` | Yes |  |
| `input` | `map[string]any` | Yes | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `[]any` | Yes |  |
| `mimeType` | `string` | Yes |  |
| `model` | `string` | Yes | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `map[string]any` | No |  |
| `output` | `map[string]any` | Yes |  |
| `result` | `map[string]any` | No | Model-specific output. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersAi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkersAi(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersAiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkersAiFinetuneEntity

```go
workersAiFinetune := client.WorkersAiFinetune(nil)
fmt.Println(workersAiFinetune.GetName()) // "workers_ai_finetune"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkersAiFinetune(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkersAiFinetune(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.WorkersAiFinetune(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkersAiFinetuneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareAiSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

