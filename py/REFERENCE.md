# CloudflareAi Python SDK Reference

Complete API reference for the CloudflareAi Python SDK.


## CloudflareAiSDK

### Constructor

```python
from cloudflareai_sdk import CloudflareAiSDK

client = CloudflareAiSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareAiSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareAiSDK.test()
```


### Instance Methods

#### `Account(data=None)`

Create a new `AccountEntity` instance. Pass `None` for no initial data.

#### `AiGateway(data=None)`

Create a new `AiGatewayEntity` instance. Pass `None` for no initial data.

#### `AiGatewayCustomDomain(data=None)`

Create a new `AiGatewayCustomDomainEntity` instance. Pass `None` for no initial data.

#### `AiGatewayCustomProvider(data=None)`

Create a new `AiGatewayCustomProviderEntity` instance. Pass `None` for no initial data.

#### `AiGatewayCustomProviderCost(data=None)`

Create a new `AiGatewayCustomProviderCostEntity` instance. Pass `None` for no initial data.

#### `AiGatewayDataset(data=None)`

Create a new `AiGatewayDatasetEntity` instance. Pass `None` for no initial data.

#### `AiGatewayDynamicRoute(data=None)`

Create a new `AiGatewayDynamicRouteEntity` instance. Pass `None` for no initial data.

#### `AiGatewayEvaluation(data=None)`

Create a new `AiGatewayEvaluationEntity` instance. Pass `None` for no initial data.

#### `AiGatewayGateway(data=None)`

Create a new `AiGatewayGatewayEntity` instance. Pass `None` for no initial data.

#### `AiGatewayLog(data=None)`

Create a new `AiGatewayLogEntity` instance. Pass `None` for no initial data.

#### `AiGatewayProviderConfig(data=None)`

Create a new `AiGatewayProviderConfigEntity` instance. Pass `None` for no initial data.

#### `AiSearchAccountSearch(data=None)`

Create a new `AiSearchAccountSearchEntity` instance. Pass `None` for no initial data.

#### `AiSearchInstance(data=None)`

Create a new `AiSearchInstanceEntity` instance. Pass `None` for no initial data.

#### `AiSearchInstancesItem(data=None)`

Create a new `AiSearchInstancesItemEntity` instance. Pass `None` for no initial data.

#### `AiSearchInstancesJob(data=None)`

Create a new `AiSearchInstancesJobEntity` instance. Pass `None` for no initial data.

#### `AiSearchNamespace(data=None)`

Create a new `AiSearchNamespaceEntity` instance. Pass `None` for no initial data.

#### `AiSearchToken(data=None)`

Create a new `AiSearchTokenEntity` instance. Pass `None` for no initial data.

#### `AigBillingCreateTopup(data=None)`

Create a new `AigBillingCreateTopupEntity` instance. Pass `None` for no initial data.

#### `AigBillingDeleteSpendingLimit(data=None)`

Create a new `AigBillingDeleteSpendingLimitEntity` instance. Pass `None` for no initial data.

#### `AigBillingDeleteTopupConfig(data=None)`

Create a new `AigBillingDeleteTopupConfigEntity` instance. Pass `None` for no initial data.

#### `AigBillingGetCreditBalance(data=None)`

Create a new `AigBillingGetCreditBalanceEntity` instance. Pass `None` for no initial data.

#### `AigBillingGetInvoiceHistory(data=None)`

Create a new `AigBillingGetInvoiceHistoryEntity` instance. Pass `None` for no initial data.

#### `AigBillingGetInvoicePreview(data=None)`

Create a new `AigBillingGetInvoicePreviewEntity` instance. Pass `None` for no initial data.

#### `AigBillingGetSpendingLimit(data=None)`

Create a new `AigBillingGetSpendingLimitEntity` instance. Pass `None` for no initial data.

#### `AigBillingGetTopupConfig(data=None)`

Create a new `AigBillingGetTopupConfigEntity` instance. Pass `None` for no initial data.

#### `AigBillingGetTopupEligibility(data=None)`

Create a new `AigBillingGetTopupEligibilityEntity` instance. Pass `None` for no initial data.

#### `AigBillingGetTopupLimit(data=None)`

Create a new `AigBillingGetTopupLimitEntity` instance. Pass `None` for no initial data.

#### `AigBillingGetUsageHistory(data=None)`

Create a new `AigBillingGetUsageHistoryEntity` instance. Pass `None` for no initial data.

#### `AigBillingSetSpendingLimit(data=None)`

Create a new `AigBillingSetSpendingLimitEntity` instance. Pass `None` for no initial data.

#### `AigBillingSetTopupConfig(data=None)`

Create a new `AigBillingSetTopupConfigEntity` instance. Pass `None` for no initial data.

#### `AigBillingTopupStatus(data=None)`

Create a new `AigBillingTopupStatusEntity` instance. Pass `None` for no initial data.

#### `AutoRagJob(data=None)`

Create a new `AutoRagJobEntity` instance. Pass `None` for no initial data.

#### `AutoRagRag(data=None)`

Create a new `AutoRagRagEntity` instance. Pass `None` for no initial data.

#### `AutoRagRagSearch(data=None)`

Create a new `AutoRagRagSearchEntity` instance. Pass `None` for no initial data.

#### `FinetuneAsset(data=None)`

Create a new `FinetuneAssetEntity` instance. Pass `None` for no initial data.

#### `Memory(data=None)`

Create a new `MemoryEntity` instance. Pass `None` for no initial data.

#### `Namespace(data=None)`

Create a new `NamespaceEntity` instance. Pass `None` for no initial data.

#### `Vectorize(data=None)`

Create a new `VectorizeEntity` instance. Pass `None` for no initial data.

#### `VectorizeBetaDeprecated(data=None)`

Create a new `VectorizeBetaDeprecatedEntity` instance. Pass `None` for no initial data.

#### `WorkersAi(data=None)`

Create a new `WorkersAiEntity` instance. Pass `None` for no initial data.

#### `WorkersAiFinetune(data=None)`

Create a new `WorkersAiFinetuneEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccountEntity

```python
account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Account().load({"id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Account().update({
    "id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayEntity

```python
ai_gateway = client.AiGateway()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byokAlias` | `str` | No |  |
| `items` | `list` | Yes |  |
| `limit` | `int` | No |  |
| `metadata` | `dict` | Yes |  |
| `options` | `dict` | Yes |  |
| `provider` | `str` | No |  |
| `query` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGateway().create({
    "account_id": "example_account_id",  # str
    "items": [],  # list
    "metadata": {},  # dict
    "options": {},  # dict
    "query": "example_query",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayCustomDomainEntity

```python
ai_gateway_custom_domain = client.AiGatewayCustomDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cname_target` | `str` | Yes |  |
| `created_at` | `int` | Yes | epoch milliseconds |
| `domain` | `str` | Yes | Custom hostname that you own, such as `ai.example.com`. |
| `gateway_id` | `str` | Yes | Unique identifier of the AI Gateway within the account. |
| `hostname` | `str` | Yes | Custom hostname that you own, such as `ai.example.com`. |
| `id` | `str` | No |  |
| `minTLS` | `str` | No |  |
| `modified_at` | `int` | Yes | epoch milliseconds |
| `ssl_hostname_id` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `zone_id` | `str` | Yes | ID of the Cloudflare zone that contains the custom hostname. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayCustomDomain().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayCustomDomain().list({"account_id": "example", "gateway_id": "example"})
for ai_gateway_custom_domain in results:
    print(ai_gateway_custom_domain)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiGatewayCustomDomain().load({"id": "ai_gateway_custom_domain_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGatewayCustomDomain().remove({"id": "ai_gateway_custom_domain_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayCustomDomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayCustomProviderEntity

```python
ai_gateway_custom_provider = client.AiGatewayCustomProvider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `str` | Yes |  |
| `beta` | `bool` | No |  |
| `created_at` | `str` | Yes |  |
| `curl_example` | `str` | No |  |
| `description` | `str` | No |  |
| `enable` | `bool` | No |  |
| `headers` | `str` | No | JSON object of extra HTTP headers that AI Gateway sends to the provider. |
| `id` | `str` | Yes |  |
| `js_example` | `str` | No |  |
| `link` | `str` | No |  |
| `logo` | `str` | No |  |
| `modified_at` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `position` | `int` | No |  |
| `slug` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayCustomProvider().create({
    "account_id": "example_account_id",  # str
    "base_url": "example_base_url",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "modified_at": "example_modified_at",  # str
    "name": "example_name",  # str
    "slug": "example_slug",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayCustomProvider().list({"account_id": "example"})
for ai_gateway_custom_provider in results:
    print(ai_gateway_custom_provider)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiGatewayCustomProvider().load({"id": "ai_gateway_custom_provider_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGatewayCustomProvider().remove({"id": "ai_gateway_custom_provider_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiGatewayCustomProvider().update({
    "id": "ai_gateway_custom_provider_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayCustomProviderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayCustomProviderCostEntity

```python
ai_gateway_custom_provider_cost = client.AiGatewayCustomProviderCost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_provider_id` | `str` | Yes | ID of the custom provider that the pricing rule applies to. |
| `changed_by` | `str` | No |  |
| `cost_in` | `float` | No |  |
| `cost_out` | `float` | No |  |
| `cost_type` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `enable` | `bool` | No |  |
| `id` | `str` | Yes |  |
| `model` | `str` | Yes |  |
| `model_rule` | `str` | No |  |
| `modified_at` | `str` | Yes |  |
| `token_pricing` | `str` | No |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayCustomProviderCost().create({
    "account_id": "example_account_id",  # str
    "account_provider_id": "example_account_provider_id",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "model": "example_model",  # str
    "modified_at": "example_modified_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayCustomProviderCost().list({"account_id": "example"})
for ai_gateway_custom_provider_cost in results:
    print(ai_gateway_custom_provider_cost)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiGatewayCustomProviderCost().load({"id": "ai_gateway_custom_provider_cost_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGatewayCustomProviderCost().remove({"id": "ai_gateway_custom_provider_cost_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiGatewayCustomProviderCost().update({
    "id": "ai_gateway_custom_provider_cost_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayCustomProviderCostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayDatasetEntity

```python
ai_gateway_dataset = client.AiGatewayDataset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `enable` | `bool` | Yes |  |
| `filters` | `list` | Yes |  |
| `gateway_id` | `str` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `str` | Yes |  |
| `modified_at` | `str` | Yes |  |
| `name` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayDataset().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayDataset().list({"account_id": "example", "gateway_id": "example"})
for ai_gateway_dataset in results:
    print(ai_gateway_dataset)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiGatewayDataset().load({"id": "ai_gateway_dataset_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGatewayDataset().remove({"id": "ai_gateway_dataset_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiGatewayDataset().update({
    "id": "ai_gateway_dataset_id",
    "account_id": "account_id",
    "gateway_id": "gateway_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayDatasetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayDynamicRouteEntity

```python
ai_gateway_dynamic_route = client.AiGatewayDynamicRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_tag` | `str` | Yes |  |
| `active` | `bool` | Yes |  |
| `created_at` | `str` | Yes |  |
| `data` | `str` | Yes |  |
| `deployment` | `dict` | Yes |  |
| `deployments` | `list` | Yes |  |
| `elements` | `list` | Yes |  |
| `gateway_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `is_valid` | `bool` | No |  |
| `modified_at` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `order_by` | `str` | Yes |  |
| `order_by_direction` | `str` | Yes |  |
| `page` | `float` | Yes |  |
| `per_page` | `float` | Yes |  |
| `routes` | `list` | Yes |  |
| `version` | `dict` | Yes |  |
| `version_id` | `str` | Yes |  |
| `versions` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayDynamicRoute().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiGatewayDynamicRoute().load({"id": "ai_gateway_dynamic_route_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGatewayDynamicRoute().remove({"id": "ai_gateway_dynamic_route_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiGatewayDynamicRoute().update({
    "id": "ai_gateway_dynamic_route_id",
    "account_id": "account_id",
    "gateway_id": "gateway_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayDynamicRouteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayEvaluationEntity

```python
ai_gateway_evaluation = client.AiGatewayEvaluation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `dataset_ids` | `list` | Yes |  |
| `datasets` | `list` | Yes |  |
| `description` | `str` | Yes |  |
| `enable` | `bool` | Yes |  |
| `evaluation_type_ids` | `list` | Yes |  |
| `gateway_id` | `str` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `str` | Yes |  |
| `mandatory` | `bool` | Yes |  |
| `modified_at` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `processed` | `bool` | Yes |  |
| `results` | `list` | Yes |  |
| `total_logs` | `float` | Yes |  |
| `type` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayEvaluation().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayEvaluation().list({"account_id": "example"})
for ai_gateway_evaluation in results:
    print(ai_gateway_evaluation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiGatewayEvaluation().load({"id": "ai_gateway_evaluation_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGatewayEvaluation().remove({"id": "ai_gateway_evaluation_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayEvaluationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayGatewayEntity

```python
ai_gateway_gateway = client.AiGatewayGateway()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication` | `bool` | No |  |
| `byok_only` | `bool` | No | Requires customer-provided provider credentials and prevents fallback to Unified Billing. |
| `cache_invalidate_on_update` | `bool` | Yes |  |
| `cache_ttl` | `int` | Yes |  |
| `collect_logs` | `bool` | Yes |  |
| `created_at` | `str` | Yes |  |
| `dlp` | `Any` | No |  |
| `guardrails` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier of the AI Gateway within the account. |
| `is_default` | `bool` | No |  |
| `log_classification` | `bool` | No |  |
| `log_management` | `int` | No |  |
| `log_management_strategy` | `str` | No |  |
| `logpush` | `bool` | No |  |
| `logpush_public_key` | `str` | No |  |
| `modified_at` | `str` | Yes |  |
| `otel` | `list` | No |  |
| `rate_limiting_interval` | `int` | Yes |  |
| `rate_limiting_limit` | `int` | Yes |  |
| `rate_limiting_technique` | `str` | No |  |
| `result` | `str` | Yes |  |
| `retry_backoff` | `str` | No | Backoff strategy for retry delays |
| `retry_delay` | `int` | No | Delay between retry attempts in milliseconds (0-60000) |
| `retry_max_attempts` | `int` | No | Maximum number of retry attempts for failed requests (1-5) |
| `spend_limits` | `dict` | No |  |
| `store_id` | `str` | No |  |
| `stripe` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |
| `workers_ai_billing_mode` | `str` | No | Controls how Workers AI inference calls routed through this gateway are billed. |
| `zdr` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayGateway().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayGateway().list({"account_id": "example"})
for ai_gateway_gateway in results:
    print(ai_gateway_gateway)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiGatewayGateway().load({"id": "ai_gateway_gateway_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGatewayGateway().remove({"id": "ai_gateway_gateway_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiGatewayGateway().update({
    "id": "ai_gateway_gateway_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayGatewayEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayLogEntity

```python
ai_gateway_log = client.AiGatewayLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cached` | `bool` | Yes |  |
| `cost` | `float` | No |  |
| `created_at` | `str` | Yes |  |
| `custom_cost` | `bool` | No |  |
| `duration` | `int` | Yes |  |
| `feedback` | `float` | No |  |
| `id` | `str` | Yes |  |
| `metadata` | `str` | No |  |
| `model` | `str` | Yes |  |
| `model_type` | `str` | No |  |
| `path` | `str` | Yes |  |
| `provider` | `str` | Yes |  |
| `request_content_type` | `str` | No |  |
| `request_head` | `str` | No |  |
| `request_head_complete` | `bool` | No |  |
| `request_size` | `int` | No |  |
| `request_type` | `str` | No |  |
| `response_content_type` | `str` | No |  |
| `response_head` | `str` | No |  |
| `response_head_complete` | `bool` | No |  |
| `response_size` | `int` | No |  |
| `score` | `float` | No |  |
| `status_code` | `int` | No |  |
| `step` | `int` | No |  |
| `success` | `bool` | Yes |  |
| `tokens_in` | `int` | Yes |  |
| `tokens_out` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayLog().list({"account_id": "example", "gateway_id": "example"})
for ai_gateway_log in results:
    print(ai_gateway_log)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiGatewayLog().load({"id": "ai_gateway_log_id", "account_id": "account_id", "gateway_id": "gateway_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGatewayLog().remove({"account_id": "account_id", "gateway_id": "gateway_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiGatewayLog().update({
    "id": "ai_gateway_log_id",
    "account_id": "account_id",
    "gateway_id": "gateway_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayLogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiGatewayProviderConfigEntity

```python
ai_gateway_provider_config = client.AiGatewayProviderConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `str` | Yes |  |
| `default_config` | `bool` | Yes |  |
| `gateway_id` | `str` | Yes | Unique identifier of the AI Gateway within the account. |
| `id` | `str` | Yes |  |
| `modified_at` | `str` | Yes |  |
| `provider_slug` | `str` | Yes |  |
| `rate_limit` | `float` | No |  |
| `rate_limit_period` | `float` | No |  |
| `secret` | `str` | No | Provider API key to store in the Secrets Store configured on the gateway. |
| `secret_id` | `str` | Yes |  |
| `secret_preview` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiGatewayProviderConfig().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiGatewayProviderConfig().list({"account_id": "example", "gateway_id": "example"})
for ai_gateway_provider_config in results:
    print(ai_gateway_provider_config)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiGatewayProviderConfig().remove({"account_id": "account_id", "gateway_id": "gateway_id", "id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiGatewayProviderConfig().update({
    "account_id": "account_id",
    "gateway_id": "gateway_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiGatewayProviderConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiSearchAccountSearchEntity

```python
ai_search_account_search = client.AiSearchAccountSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_search_options` | `dict` | Yes |  |
| `choices` | `list` | Yes |  |
| `chunks` | `list` | Yes |  |
| `errors` | `list` | No |  |
| `id` | `str` | No |  |
| `messages` | `list` | No | OpenAI-compatible message array. |
| `model` | `str` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `object` | `str` | No |  |
| `query` | `str` | No | A simple text query string. |
| `query_kind` | `str` | Yes |  |
| `search_query` | `str` | No |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiSearchAccountSearch().create({
    "account_id": "example_account_id",  # str
    "ai_search_options": {},  # dict
    "choices": [],  # list
    "chunks": [],  # list
    "query_kind": "example_query_kind",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchAccountSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiSearchInstanceEntity

```python
ai_search_instance = client.AiSearchInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_gateway_id` | `str` | No |  |
| `ai_search_model` | `str` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `ai_search_options` | `dict` | No |  |
| `cache` | `bool` | No |  |
| `cache_threshold` | `str` | No |  |
| `cache_ttl` | `Any` | No | Cache entry TTL in seconds. |
| `choices` | `list` | Yes |  |
| `chunk` | `bool` | No |  |
| `chunk_overlap` | `int` | No |  |
| `chunk_size` | `int` | No |  |
| `chunks` | `list` | Yes |  |
| `completed` | `int` | No |  |
| `created_at` | `str` | Yes |  |
| `created_by` | `str` | No |  |
| `custom_metadata` | `list` | No |  |
| `degraded` | `bool` | No | True when status counts are unavailable (e.g. |
| `embedding_model` | `str` | No |  |
| `enable` | `bool` | No |  |
| `engine` | `dict` | No | Engine-specific metadata. |
| `engine_version` | `float` | No |  |
| `error` | `int` | No |  |
| `file_embed_errors` | `dict` | No |  |
| `fusion_method` | `str` | No |  |
| `hybrid_search_enabled` | `bool` | No | Deprecated — use index_method instead. |
| `id` | `str` | Yes | AI Search instance ID. |
| `index_method` | `dict` | Yes | Controls which storage backends are used during indexing. |
| `index_source_errors` | `dict` | No |  |
| `indexing_options` | `dict` | No |  |
| `last_activity` | `str` | No |  |
| `max_num_results` | `int` | No |  |
| `messages` | `list` | Yes |  |
| `metadata` | `dict` | No |  |
| `model` | `str` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `modified_at` | `str` | Yes |  |
| `modified_by` | `str` | No |  |
| `namespace` | `str` | No |  |
| `object` | `str` | No |  |
| `outdated` | `int` | No |  |
| `paused` | `bool` | No |  |
| `public_endpoint_id` | `str` | No |  |
| `public_endpoint_params` | `dict` | No |  |
| `queued` | `int` | No |  |
| `reranking` | `bool` | No |  |
| `reranking_model` | `str` | No |  |
| `retrieval_options` | `dict` | No |  |
| `rewrite_model` | `str` | No | A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. |
| `rewrite_query` | `bool` | No |  |
| `running` | `int` | No |  |
| `score_threshold` | `float` | No |  |
| `skipped` | `int` | No |  |
| `source` | `str` | No |  |
| `source_params` | `dict` | No |  |
| `status` | `str` | No |  |
| `stream` | `bool` | No |  |
| `summarization` | `bool` | No |  |
| `summarization_model` | `str` | No |  |
| `sync_interval` | `Any` | No | Interval between automatic syncs, in seconds. |
| `system_prompt_ai_search` | `str` | No |  |
| `system_prompt_index_summarization` | `str` | No |  |
| `system_prompt_rewrite_query` | `str` | No |  |
| `token_id` | `str` | No |  |
| `type` | `str` | No | Source type. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiSearchInstance().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiSearchInstance().list({"account_id": "example"})
for ai_search_instance in results:
    print(ai_search_instance)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiSearchInstance().load({"id": "ai_search_instance_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiSearchInstance().remove({"id": "ai_search_instance_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiSearchInstance().update({
    "id": "ai_search_instance_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchInstanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiSearchInstancesItemEntity

```python
ai_search_instances_item = client.AiSearchInstancesItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes |  |
| `checksum` | `str` | Yes |  |
| `chunkCount` | `int` | Yes |  |
| `chunks_count` | `int` | Yes |  |
| `created_at` | `str` | Yes |  |
| `end_byte` | `float` | No |  |
| `error` | `str` | No |  |
| `errorType` | `str` | Yes |  |
| `fileKey` | `str` | Yes |  |
| `file_size` | `float` | Yes |  |
| `id` | `str` | Yes |  |
| `item` | `dict` | Yes |  |
| `key` | `str` | Yes | Item key / filename. |
| `last_seen_at` | `str` | Yes |  |
| `message` | `str` | Yes |  |
| `metadata` | `dict` | Yes | Built-in, configured filterable, and retained source metadata for the item. |
| `namespace` | `str` | Yes |  |
| `next_action` | `str` | Yes |  |
| `processingTimeMs` | `int` | Yes |  |
| `source_id` | `str` | Yes | Identifies which data source this item belongs to. |
| `start_byte` | `float` | No |  |
| `status` | `str` | Yes |  |
| `text` | `str` | Yes |  |
| `timestamp` | `str` | Yes |  |
| `wait_for_completion` | `bool` | No | Wait for indexing to fully complete before responding. |
| `warnings` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiSearchInstancesItem().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiSearchInstancesItem().list({"account_id": "example", "instance_id": "example", "namespace_id": "example"})
for ai_search_instances_item in results:
    print(ai_search_instances_item)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiSearchInstancesItem().load({"id": "ai_search_instances_item_id", "account_id": "account_id", "instance_id": "instance_id", "namespace_id": "namespace_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiSearchInstancesItem().remove({"id": "ai_search_instances_item_id", "account_id": "account_id", "instance_id": "instance_id", "namespace_id": "namespace_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiSearchInstancesItem().update({
    "id": "ai_search_instances_item_id",
    "account_id": "account_id",
    "instance_id": "instance_id",
    "namespace_id": "namespace_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchInstancesItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiSearchInstancesJobEntity

```python
ai_search_instances_job = client.AiSearchInstancesJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes |  |
| `created_at` | `float` | Yes |  |
| `description` | `str` | No |  |
| `end_reason` | `str` | No |  |
| `ended_at` | `str` | No |  |
| `id` | `str` | Yes |  |
| `last_seen_at` | `str` | No |  |
| `message` | `str` | Yes |  |
| `message_type` | `int` | Yes |  |
| `source` | `str` | Yes |  |
| `started_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiSearchInstancesJob().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiSearchInstancesJob().list({"account_id": "example", "instance_id": "example"})
for ai_search_instances_job in results:
    print(ai_search_instances_job)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiSearchInstancesJob().load({"id": "ai_search_instances_job_id", "account_id": "account_id", "instance_id": "instance_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiSearchInstancesJob().update({
    "id": "ai_search_instances_job_id",
    "account_id": "account_id",
    "instance_id": "instance_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchInstancesJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiSearchNamespaceEntity

```python
ai_search_namespace = client.AiSearchNamespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `description` | `str` | No | Optional description for the namespace. |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `new_namespace` | `str` | Yes | Target namespace to move the instance into. |
| `public_endpoint_id` | `str` | No |  |
| `public_endpoint_params` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiSearchNamespace().create({
    "account_id": "example_account_id",  # str
    "created_at": "example_created_at",  # str
    "name": "example_name",  # str
    "new_namespace": "example_new_namespace",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiSearchNamespace().list({"account_id": "example"})
for ai_search_namespace in results:
    print(ai_search_namespace)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiSearchNamespace().load({"id": "ai_search_namespace_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiSearchNamespace().remove({"id": "ai_search_namespace_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiSearchNamespace().update({
    "id": "ai_search_namespace_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchNamespaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiSearchTokenEntity

```python
ai_search_token = client.AiSearchToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cf_api_id` | `str` | Yes |  |
| `cf_api_key` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `created_by` | `str` | No |  |
| `enabled` | `bool` | No |  |
| `id` | `str` | Yes |  |
| `legacy` | `bool` | No |  |
| `modified_at` | `str` | Yes |  |
| `modified_by` | `str` | No |  |
| `name` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiSearchToken().create({
    "account_id": "example_account_id",  # str
    "cf_api_id": "example_cf_api_id",  # str
    "cf_api_key": "example_cf_api_key",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "modified_at": "example_modified_at",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AiSearchToken().list({"account_id": "example"})
for ai_search_token in results:
    print(ai_search_token)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiSearchToken().load({"id": "ai_search_token_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiSearchToken().remove({"id": "ai_search_token_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AiSearchToken().update({
    "id": "ai_search_token_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiSearchTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingCreateTopupEntity

```python
aig_billing_create_topup = client.AigBillingCreateTopup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Top-up amount in cents (min 1000). |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `payment_method_id` | `str` | No | Stripe PaymentMethod to charge instead of the customer's default payment method. |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AigBillingCreateTopup().create({
    "account_id": "example_account_id",  # str
    "amount": 1,  # int
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingCreateTopupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingDeleteSpendingLimitEntity

```python
aig_billing_delete_spending_limit = client.AigBillingDeleteSpendingLimit()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AigBillingDeleteSpendingLimit().remove({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingDeleteSpendingLimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingDeleteTopupConfigEntity

```python
aig_billing_delete_topup_config = client.AigBillingDeleteTopupConfig()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AigBillingDeleteTopupConfig().remove({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingDeleteTopupConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingGetCreditBalanceEntity

```python
aig_billing_get_credit_balance = client.AigBillingGetCreditBalance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AigBillingGetCreditBalance().list({"account_id": "example"})
for aig_billing_get_credit_balance in results:
    print(aig_billing_get_credit_balance)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetCreditBalanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingGetInvoiceHistoryEntity

```python
aig_billing_get_invoice_history = client.AigBillingGetInvoiceHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AigBillingGetInvoiceHistory().list({"account_id": "example"})
for aig_billing_get_invoice_history in results:
    print(aig_billing_get_invoice_history)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetInvoiceHistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingGetInvoicePreviewEntity

```python
aig_billing_get_invoice_preview = client.AigBillingGetInvoicePreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AigBillingGetInvoicePreview().list({"account_id": "example"})
for aig_billing_get_invoice_preview in results:
    print(aig_billing_get_invoice_preview)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetInvoicePreviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingGetSpendingLimitEntity

```python
aig_billing_get_spending_limit = client.AigBillingGetSpendingLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AigBillingGetSpendingLimit().list({"account_id": "example"})
for aig_billing_get_spending_limit in results:
    print(aig_billing_get_spending_limit)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetSpendingLimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingGetTopupConfigEntity

```python
aig_billing_get_topup_config = client.AigBillingGetTopupConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AigBillingGetTopupConfig().list({"account_id": "example"})
for aig_billing_get_topup_config in results:
    print(aig_billing_get_topup_config)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetTopupConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingGetTopupEligibilityEntity

```python
aig_billing_get_topup_eligibility = client.AigBillingGetTopupEligibility()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `payment_methods` | `list` | No | Account-level payment methods, forwarded by the dashboard. |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AigBillingGetTopupEligibility().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetTopupEligibilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingGetTopupLimitEntity

```python
aig_billing_get_topup_limit = client.AigBillingGetTopupLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AigBillingGetTopupLimit().list({"account_id": "example"})
for aig_billing_get_topup_limit in results:
    print(aig_billing_get_topup_limit)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetTopupLimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingGetUsageHistoryEntity

```python
aig_billing_get_usage_history = client.AigBillingGetUsageHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AigBillingGetUsageHistory().list({"account_id": "example", "value_grouping_window": "example"})
for aig_billing_get_usage_history in results:
    print(aig_billing_get_usage_history)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingGetUsageHistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingSetSpendingLimitEntity

```python
aig_billing_set_spending_limit = client.AigBillingSetSpendingLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Spending limit amount in cents (min 100). |
| `duration` | `str` | Yes | Spending limit duration. |
| `strategy` | `str` | Yes | Spending limit strategy. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AigBillingSetSpendingLimit().create({
    "account_id": "example_account_id",  # str
    "amount": 1,  # int
    "duration": "example_duration",  # str
    "strategy": "example_strategy",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingSetSpendingLimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingSetTopupConfigEntity

```python
aig_billing_set_topup_config = client.AigBillingSetTopupConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Auto top-up amount in cents (min 1000). |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |
| `threshold` | `int` | Yes | Balance threshold in cents that triggers auto top-up (min 500). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AigBillingSetTopupConfig().create({
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

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingSetTopupConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AigBillingTopupStatusEntity

```python
aig_billing_topup_status = client.AigBillingTopupStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `payment_intent_id` | `str` | Yes | Stripe invoice ID to check status for. |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AigBillingTopupStatus().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "payment_intent_id": "example_payment_intent_id",  # str
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AigBillingTopupStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutoRagJobEntity

```python
auto_rag_job = client.AutoRagJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `float` | Yes |  |
| `end_reason` | `str` | No |  |
| `ended_at` | `str` | No |  |
| `id` | `str` | Yes |  |
| `last_seen_at` | `str` | No |  |
| `message` | `str` | Yes |  |
| `message_type` | `int` | Yes |  |
| `source` | `str` | Yes |  |
| `started_at` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AutoRagJob().list({"account_id": "example", "rag_id": "example"})
for auto_rag_job in results:
    print(auto_rag_job)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AutoRagJob().load({"id": "auto_rag_job_id", "account_id": "account_id", "rag_id": "rag_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutoRagJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutoRagRagEntity

```python
auto_rag_rag = client.AutoRagRag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `str` | Yes |  |
| `job_id` | `str` | Yes |  |
| `key` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AutoRagRag().list({"account_id": "example", "rag_id": "example"})
for auto_rag_rag in results:
    print(auto_rag_rag)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AutoRagRag().update({
    "account_id": "account_id",
    "rag_id": "rag_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutoRagRagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutoRagRagSearchEntity

```python
auto_rag_rag_search = client.AutoRagRagSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `filters` | `Any` | No |  |
| `has_more` | `bool` | No |  |
| `max_num_results` | `int` | No |  |
| `model` | `Any` | No |  |
| `next_page` | `str` | No |  |
| `object` | `str` | No |  |
| `query` | `str` | Yes |  |
| `ranking_options` | `dict` | No |  |
| `reranking` | `dict` | No |  |
| `response` | `str` | Yes |  |
| `rewrite_query` | `bool` | No |  |
| `search_query` | `str` | Yes |  |
| `stream` | `bool` | No |  |
| `system_prompt` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AutoRagRagSearch().create({
    "account_id": "example_account_id",  # str
    "rag_id": "example_rag_id",  # str
    "query": "example_query",  # str
    "response": "example_response",  # str
    "search_query": "example_search_query",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutoRagRagSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FinetuneAssetEntity

```python
finetune_asset = client.FinetuneAsset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file_name` | `str` | Yes |  |
| `file_url` | `str` | Yes |  |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FinetuneAsset().load({"id": "finetune_asset_id", "account_id": "account_id", "finetune_id": "finetune_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinetuneAssetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemoryEntity

```python
memory = client.Memory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | Always empty for a successful response. |
| `id` | `str` | No |  |
| `messages` | `list` | Yes | Informational, non-error messages, if any. |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | No |  |
| `success` | `bool` | Yes | Always true for a successful response. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Memory().create({
    "account_id": "example_account_id",  # str
    "namespace_id": "example_namespace_id",  # str
    "profile_name": "example_profile_name",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Memory().list({"account_id": "example"})
for memory in results:
    print(memory)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Memory().load({"id": "memory_id", "account_id": "account_id", "namespace_id": "namespace_id", "profile_id": "profile_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Memory().remove({"id": "memory_id", "account_id": "account_id", "namespace_id": "namespace_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NamespaceEntity

```python
namespace = client.Namespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | Always empty for a successful response. |
| `id` | `str` | No |  |
| `messages` | `list` | Yes | Informational, non-error messages, if any. |
| `name` | `str` | Yes | Namespace name. |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | No |  |
| `success` | `bool` | Yes | Always true for a successful response. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Namespace().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Namespace().list({"account_id": "example"})
for namespace in results:
    print(namespace)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Namespace().load({"id": "namespace_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Namespace().remove({"id": "namespace_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VectorizeEntity

```python
vectorize = client.Vectorize()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Any` | Yes |  |
| `description` | `str` | No | Specifies the description of the index. |
| `errors` | `list` | Yes |  |
| `ids` | `list` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `indexType` | `str` | Yes | Specifies the type of metadata property to index. |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `propertyName` | `str` | Yes | Specifies the metadata property to index. |
| `result` | `dict` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Vectorize().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Vectorize().list({"account_id": "example"})
for vectorize in results:
    print(vectorize)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Vectorize().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Vectorize().remove({"account_id": "account_id", "index_name": "index_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VectorizeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VectorizeBetaDeprecatedEntity

```python
vectorize_beta__deprecated = client.VectorizeBetaDeprecated()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Any` | Yes |  |
| `description` | `str` | No | Specifies the description of the index. |
| `errors` | `list` | Yes |  |
| `ids` | `list` | No | A list of vector identifiers to delete from the index indicated by the path. |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `result` | `dict` | No |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.VectorizeBetaDeprecated().create({
    "account_id": "example_account_id",  # str
    "config": "example_config",  # Any
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.VectorizeBetaDeprecated().list({"account_id": "example"})
for vectorize_beta__deprecated in results:
    print(vectorize_beta__deprecated)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.VectorizeBetaDeprecated().load({"account_id": "account_id", "index_name": "index_name"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.VectorizeBetaDeprecated().remove({"account_id": "account_id", "index_name": "index_name"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.VectorizeBetaDeprecated().update({
    "account_id": "account_id",
    "index_name": "index_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VectorizeBetaDeprecatedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersAiEntity

```python
workers_ai = client.WorkersAi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `extension` | `str` | Yes |  |
| `input` | `dict` | Yes | JSON object containing the selected model's input fields, such as prompt or messages. |
| `messages` | `list` | Yes |  |
| `mimeType` | `str` | Yes |  |
| `model` | `str` | Yes | The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7) |
| `options` | `dict` | No |  |
| `output` | `dict` | Yes |  |
| `result` | `dict` | No | Model-specific output. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkersAi().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersAi().list({"account_id": "example"})
for workers_ai in results:
    print(workers_ai)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkersAi().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersAiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkersAiFinetuneEntity

```python
workers_ai_finetune = client.WorkersAiFinetune()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `description` | `str` | No |  |
| `id` | `str` | Yes |  |
| `model` | `str` | Yes |  |
| `modified_at` | `str` | Yes |  |
| `name` | `str` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkersAiFinetune().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkersAiFinetune().list({"account_id": "example"})
for workers_ai_finetune in results:
    print(workers_ai_finetune)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkersAiFinetune().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.WorkersAiFinetune().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkersAiFinetuneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareAiSDK({
    "feature": {
        "test": {"active": True},
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

