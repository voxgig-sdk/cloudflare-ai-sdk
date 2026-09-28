# Cloudflare AI

Cloudflare AI: Workers AI inference, AI Gateway, AI Search, AutoRAG, and Vectorize.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 41 entities and 175 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Account](docs/api/account.html)

Results: Returns the account logging state; Returns the migrated account logging state.

SDK operations: `load`, `update`.

### [AiGateway](docs/api/ai_gateway.html)

Results: Web search results.

SDK operations: `create`.

### [AiGatewayCustomDomain](docs/api/ai_gateway_custom_domain.html)

Results: The created custom domain and the CNAME target to configure.; List objects; Returns a single object if found; Returns the Object if it was successfully deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `created_at`: epoch milliseconds
- `domain`: Custom hostname that you own, such as `ai.example.com`.
- `gateway_id`: Unique identifier of the AI Gateway within the account.
- `hostname`: Custom hostname that you own, such as `ai.example.com`.
- `modified_at`: epoch milliseconds

### [AiGatewayCustomProvider](docs/api/ai_gateway_custom_provider.html)

Results: Returns the created Object; List objects; Returns a single object if found; Returns the Object if it was successfully deleted; Returns the updated Object.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `headers`: JSON object of extra HTTP headers that AI Gateway sends to the provider. Values can contain credentials.

### [AiGatewayCustomProviderCost](docs/api/ai_gateway_custom_provider_cost.html)

Results: Returns the created Object; List objects; Returns a single object if found; Returns the Object if it was successfully deleted; Returns the updated Object.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `account_provider_id`: ID of the custom provider that the pricing rule applies to.

### [AiGatewayDataset](docs/api/ai_gateway_dataset.html)

Results: Returns the created Object; List objects; Returns a single object if found; Returns the Object if it was successfully deleted; Returns the updated Object.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `gateway_id`: Unique identifier of the AI Gateway within the account.

### [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html)

Results: Success.

SDK operations: `create`, `load`, `remove`, `update`.

### [AiGatewayEvaluation](docs/api/ai_gateway_evaluation.html)

Results: Returns the created Object; List objects; Returns a list of Evaluators; Returns a single object if found; Returns the Object if it was successfully deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `gateway_id`: Unique identifier of the AI Gateway within the account.

### [AiGatewayGateway](docs/api/ai_gateway_gateway.html)

Results: Returns the created Object; List objects; Returns the log details; Returns a single object if found; Returns the Object if it was successfully deleted; Returns the updated Object.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `byok_only`: Requires customer-provided provider credentials and prevents fallback to Unified Billing.
- `id`: Unique identifier of the AI Gateway within the account.
- `retry_backoff`: Backoff strategy for retry delays
- `retry_delay`: Delay between retry attempts in milliseconds (0-60000)
- `retry_max_attempts`: Maximum number of retry attempts for failed requests (1-5)

### [AiGatewayLog](docs/api/ai_gateway_log.html)

Results: Returns a list of Gateway Logs; Returns the log details; Returns the request body from a specific log; Returns the response body from a specific log; Returns if the delete was successful.

SDK operations: `list`, `load`, `remove`, `update`.

### [AiGatewayProviderConfig](docs/api/ai_gateway_provider_config.html)

Results: Returns the created Object; List objects; Returns the Object if it was successfully deleted; Returns the updated Object.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `gateway_id`: Unique identifier of the AI Gateway within the account.
- `secret`: Provider API key to store in the Secrets Store configured on the gateway.

### [AiSearchAccountSearch](docs/api/ai_search_account_search.html)

Results: Returns the merged search results from all instances.; Returns the chat completion result with merged chunks from all instances.

SDK operations: `create`.

Key fields to recognise:

- `messages`: OpenAI-compatible message array.
- `model`: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API.
- `query`: A simple text query string.

### [AiSearchInstance](docs/api/ai_search_instance.html)

Results: Returns the chat completions results with retrieved files.; Cache purged successfully.; Returns the search results.; Returns the new instance.; List of instances.; Returns the instance.; Returns the AI Search stats.; Returns the deleted instance.; Returns the updated instance.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `ai_search_model`: A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.
- `cache_ttl`: Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
- `degraded`: True when status counts are unavailable (for example legacy stats query exceeded D1 statement-size limit). Counts are omitted in this case.
- `engine`: Engine-specific metadata. Present only for managed (v3) instances.
- `hybrid_search_enabled`: Deprecated, use index_method instead. Defaults to true for new instances; set false to create a vector-only instance.

### [AiSearchInstancesItem](docs/api/ai_search_instances_item.html)

Results: Item uploaded successfully.; Returns the AI Search items.; Returns the AI Search item logs.; Returns the AI Search item chunks with text content.; Returns a AI Search Item detail.; Raw file content.; Item deleted successfully.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `key`: Item key / filename.
- `metadata`: Built-in, configured filterable, and retained source metadata for the item.
- `source_id`: Identifies which data source this item belongs to. &quot;builtin&quot; for uploaded files, &quot;&#123;type&#125;:&#123;source&#125;&quot; for external sources, null for legacy items.
- `wait_for_completion`: Wait for indexing to fully complete before responding.

### [AiSearchInstancesJob](docs/api/ai_search_instances_job.html)

Results: Returns the AI Search job id.; Returns a list of AI Search Job Logs.; Returns a list of AI Search Jobs.; Returns a AI Search Job Details.; Returns the updated AI Search Job.

SDK operations: `create`, `list`, `load`, `update`.

### [AiSearchNamespace](docs/api/ai_search_namespace.html)

Results: Namespace created.; List of namespaces.; Namespace details.; Instance moved.; Namespace deleted.; Returns the updated namespace.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `description`: Optional description for the namespace. Max 256 characters.
- `new_namespace`: Target namespace to move the instance into.

### [AiSearchToken](docs/api/ai_search_token.html)

Results: Token created.; List of tokens.; Token details.; Token deleted.; Returns the updated token.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [AigBillingCreateTopup](docs/api/aig_billing_create_topup.html)

Results: Top-up initiated successfully.

SDK operations: `create`.

Key fields to recognise:

- `amount`: Top-up amount in cents (min 1000).
- `payment_method_id`: Stripe PaymentMethod to charge instead of the customer&#39;s default payment method.

### [AigBillingDeleteSpendingLimit](docs/api/aig_billing_delete_spending_limit.html)

Results: Spending limit deleted.

SDK operations: `remove`.

### [AigBillingDeleteTopupConfig](docs/api/aig_billing_delete_topup_config.html)

Results: Auto top-up configuration deleted.

SDK operations: `remove`.

### [AigBillingGetCreditBalance](docs/api/aig_billing_get_credit_balance.html)

Results: Credit balance retrieved.

SDK operations: `list`.

### [AigBillingGetInvoiceHistory](docs/api/aig_billing_get_invoice_history.html)

Results: Invoice history retrieved.

SDK operations: `list`.

### [AigBillingGetInvoicePreview](docs/api/aig_billing_get_invoice_preview.html)

Results: Invoice preview retrieved.

SDK operations: `list`.

### [AigBillingGetSpendingLimit](docs/api/aig_billing_get_spending_limit.html)

Results: Spending limit configuration retrieved.

SDK operations: `list`.

### [AigBillingGetTopupConfig](docs/api/aig_billing_get_topup_config.html)

Results: Auto top-up configuration retrieved.

SDK operations: `list`.

### [AigBillingGetTopupEligibility](docs/api/aig_billing_get_topup_eligibility.html)

Results: Eligibility determined.

SDK operations: `create`.

Key fields to recognise:

- `payment_methods`: Account-level payment methods, forwarded by the dashboard.

### [AigBillingGetTopupLimit](docs/api/aig_billing_get_topup_limit.html)

Results: Top-up limits retrieved.

SDK operations: `list`.

### [AigBillingGetUsageHistory](docs/api/aig_billing_get_usage_history.html)

Results: Usage history retrieved.

SDK operations: `list`.

### [AigBillingSetSpendingLimit](docs/api/aig_billing_set_spending_limit.html)

Results: Spending limit created.

SDK operations: `create`.

Key fields to recognise:

- `amount`: Spending limit amount in cents (min 100).
- `duration`: Spending limit duration.
- `strategy`: Spending limit strategy.

### [AigBillingSetTopupConfig](docs/api/aig_billing_set_topup_config.html)

Results: Auto top-up configuration saved.

SDK operations: `create`.

Key fields to recognise:

- `amount`: Auto top-up amount in cents (min 1000).
- `threshold`: Balance threshold in cents that triggers auto top-up (min 500).

### [AigBillingTopupStatus](docs/api/aig_billing_topup_status.html)

Results: Top-up status retrieved.

SDK operations: `create`.

Key fields to recognise:

- `payment_intent_id`: Stripe invoice ID to check status for.

### [AutoRagJob](docs/api/auto_rag_job.html)

Results: Returns a list of AutoRAG Job Logs; Returns a list of AutoRAG Jobs; Returns a AutoRAG Job Details.

SDK operations: `list`, `load`.

### [AutoRagRag](docs/api/auto_rag_rag.html)

Results: Returns the AI Search files; Returns the autorag sync status.

SDK operations: `list`, `update`.

### [AutoRagRagSearch](docs/api/auto_rag_rag_search.html)

Results: Returns the log details.

SDK operations: `create`.

### [FinetuneAsset](docs/api/finetune_asset.html)

Results: Pre-signed download URL.

SDK operations: `load`.

### [Memory](docs/api/memory.html)

Results: Conversation ingested.; Recall result.; Memory stored.; Profile summary.; A page of memory metadata.; A page of profiles.; The requested memory.; The deleted memory.; Session deleted.; Profile deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `errors`: Always empty for a successful response.
- `id`: Unique identifier of the memory.
- `messages`: Informational, non-error messages, if any.
- `result`: Always null for an error response.
- `success`: Always true for a successful response.

### [Namespace](docs/api/namespace.html)

Results: Namespace created.; A List of namespaces.; The requested namespace.; Namespace deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `errors`: Always empty for a successful response.
- `id`: Unique identifier of the namespace.
- `messages`: Informational, non-error messages, if any.
- `name`: Namespace name.
- `result`: Always null for an error response.

### [Vectorize](docs/api/vectorize.html)

Results: Insert Vectors Response; Upsert Vectors Response; Create Metadata Index Response; Delete Metadata Index Response; Delete Vector Identifiers Response; Get Vectors By Identifier Response; Query Vectors Response; Create Vectorize Index Response; List Vectorize Index Response; List Vectors Response; List Metadata Index Response; Get Vectorize Index Response; Get Vectorize Index Info Response; Delete Vectorize Index Response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `description`: Specifies the description of the index.
- `ids`: A list of vector identifiers to delete from the index indicated by the path.
- `indexType`: Specifies the type of indexed metadata property.
- `propertyName`: Specifies the indexed metadata property.
- `result`: Array of vectors with matching ids.

### [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html)

Results: Delete Vector Identifiers Response; Get Vectors By Identifier Response; Insert Vectors Response; Query Vectors Response; Create Vectorize Index Response; List Vectorize Index Response; Get Vectorize Index Response; Delete Vectorize Index Response; Update Vectorize Index Response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `description`: Specifies the description of the index.
- `ids`: Array of vector identifiers of the vectors that were successfully processed for deletion.
- `result`: Array of vectors with matching ids.
- `success`: Whether the API call was successful

### [WorkersAi](docs/api/workers_ai.html)

Results: Model response; Conversion results for the uploaded files; Returns a list of authors.; Returns a list of tasks; Successful response; Returns a list of models. Default shape is the standard envelope; when `format` is supplied the marketplace-specific shape is returned instead.; Model Schema.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `input`: JSON object containing the selected model&#39;s input fields, such as prompt or messages.
- `model`: The AI model to execute (for example, @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7)
- `result`: Model-specific output. Format varies by model type.

### [WorkersAiFinetune](docs/api/workers_ai_finetune.html)

Results: Returns successfully if finetunes were uploaded.; Returns the created finetune.; Returns all public finetunes.; Returns all finetunes.; Finetune deleted successfully.

SDK operations: `create`, `list`, `load`, `remove`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Account](docs/api/account.html) | `load` | `GET /accounts/{account_id}/ai-gateway/logging-state` | Required |
| [Account](docs/api/account.html) | `update` | `PATCH /accounts/{account_id}/ai-gateway/logging-state` | Required |
| [AiGateway](docs/api/ai_gateway.html) | `create` | `POST /accounts/{account_id}/ai/websearch` | Required |
| [AiGatewayCustomDomain](docs/api/ai_gateway_custom_domain.html) | `create` | `POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains` | Required |
| [AiGatewayCustomDomain](docs/api/ai_gateway_custom_domain.html) | `list` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains` | Required |
| [AiGatewayCustomDomain](docs/api/ai_gateway_custom_domain.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}` | Required |
| [AiGatewayCustomDomain](docs/api/ai_gateway_custom_domain.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}` | Required |
| [AiGatewayCustomProvider](docs/api/ai_gateway_custom_provider.html) | `create` | `POST /accounts/{account_id}/ai-gateway/custom-providers` | Required |
| [AiGatewayCustomProvider](docs/api/ai_gateway_custom_provider.html) | `list` | `GET /accounts/{account_id}/ai-gateway/custom-providers` | Required |
| [AiGatewayCustomProvider](docs/api/ai_gateway_custom_provider.html) | `load` | `GET /accounts/{account_id}/ai-gateway/custom-providers/{id}` | Required |
| [AiGatewayCustomProvider](docs/api/ai_gateway_custom_provider.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/custom-providers/{id}` | Required |
| [AiGatewayCustomProvider](docs/api/ai_gateway_custom_provider.html) | `update` | `PATCH /accounts/{account_id}/ai-gateway/custom-providers/{id}` | Required |
| [AiGatewayCustomProviderCost](docs/api/ai_gateway_custom_provider_cost.html) | `create` | `POST /accounts/{account_id}/ai-gateway/custom-providers/costs` | Required |
| [AiGatewayCustomProviderCost](docs/api/ai_gateway_custom_provider_cost.html) | `list` | `GET /accounts/{account_id}/ai-gateway/custom-providers/costs` | Required |
| [AiGatewayCustomProviderCost](docs/api/ai_gateway_custom_provider_cost.html) | `load` | `GET /accounts/{account_id}/ai-gateway/custom-providers/costs/{id}` | Required |
| [AiGatewayCustomProviderCost](docs/api/ai_gateway_custom_provider_cost.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/custom-providers/costs/{id}` | Required |
| [AiGatewayCustomProviderCost](docs/api/ai_gateway_custom_provider_cost.html) | `update` | `PATCH /accounts/{account_id}/ai-gateway/custom-providers/costs/{id}` | Required |
| [AiGatewayDataset](docs/api/ai_gateway_dataset.html) | `create` | `POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets` | Required |
| [AiGatewayDataset](docs/api/ai_gateway_dataset.html) | `list` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets` | Required |
| [AiGatewayDataset](docs/api/ai_gateway_dataset.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}` | Required |
| [AiGatewayDataset](docs/api/ai_gateway_dataset.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}` | Required |
| [AiGatewayDataset](docs/api/ai_gateway_dataset.html) | `update` | `PUT /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `create` | `POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `create` | `POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `create` | `POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions/{version_id}` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}` | Required |
| [AiGatewayDynamicRoute](docs/api/ai_gateway_dynamic_route.html) | `update` | `PATCH /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}` | Required |
| [AiGatewayEvaluation](docs/api/ai_gateway_evaluation.html) | `create` | `POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations` | Required |
| [AiGatewayEvaluation](docs/api/ai_gateway_evaluation.html) | `list` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations` | Required |
| [AiGatewayEvaluation](docs/api/ai_gateway_evaluation.html) | `list` | `GET /accounts/{account_id}/ai-gateway/evaluation-types` | Required |
| [AiGatewayEvaluation](docs/api/ai_gateway_evaluation.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}` | Required |
| [AiGatewayEvaluation](docs/api/ai_gateway_evaluation.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}` | Required |
| [AiGatewayGateway](docs/api/ai_gateway_gateway.html) | `create` | `POST /accounts/{account_id}/ai-gateway/gateways` | Required |
| [AiGatewayGateway](docs/api/ai_gateway_gateway.html) | `list` | `GET /accounts/{account_id}/ai-gateway/gateways` | Required |
| [AiGatewayGateway](docs/api/ai_gateway_gateway.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}` | Required |
| [AiGatewayGateway](docs/api/ai_gateway_gateway.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{id}` | Required |
| [AiGatewayGateway](docs/api/ai_gateway_gateway.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/gateways/{id}` | Required |
| [AiGatewayGateway](docs/api/ai_gateway_gateway.html) | `update` | `PUT /accounts/{account_id}/ai-gateway/gateways/{id}` | Required |
| [AiGatewayLog](docs/api/ai_gateway_log.html) | `list` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs` | Required |
| [AiGatewayLog](docs/api/ai_gateway_log.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}` | Required |
| [AiGatewayLog](docs/api/ai_gateway_log.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/request` | Required |
| [AiGatewayLog](docs/api/ai_gateway_log.html) | `load` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/response` | Required |
| [AiGatewayLog](docs/api/ai_gateway_log.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs` | Required |
| [AiGatewayLog](docs/api/ai_gateway_log.html) | `update` | `PATCH /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}` | Required |
| [AiGatewayProviderConfig](docs/api/ai_gateway_provider_config.html) | `create` | `POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs` | Required |
| [AiGatewayProviderConfig](docs/api/ai_gateway_provider_config.html) | `list` | `GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs` | Required |
| [AiGatewayProviderConfig](docs/api/ai_gateway_provider_config.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}` | Required |
| [AiGatewayProviderConfig](docs/api/ai_gateway_provider_config.html) | `update` | `PUT /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}` | Required |
| [AiSearchAccountSearch](docs/api/ai_search_account_search.html) | `create` | `POST /accounts/{account_id}/ai-search/namespaces/{name}/search` | Required |
| [AiSearchAccountSearch](docs/api/ai_search_account_search.html) | `create` | `POST /accounts/{account_id}/ai-search/namespaces/{name}/chat/completions` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `create` | `POST /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/chat/completions` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `create` | `POST /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/purge_cache` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `create` | `POST /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/search` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `create` | `POST /accounts/{account_id}/ai-search/instances/{id}/chat/completions` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `create` | `POST /accounts/{account_id}/ai-search/instances/{id}/search` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `create` | `POST /accounts/{account_id}/ai-search/namespaces/{name}/instances` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `create` | `POST /accounts/{account_id}/ai-search/instances` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `list` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `list` | `GET /accounts/{account_id}/ai-search/instances` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `load` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `load` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/stats` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `load` | `GET /accounts/{account_id}/ai-search/instances/{id}` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `load` | `GET /accounts/{account_id}/ai-search/instances/{id}/stats` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `remove` | `DELETE /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `remove` | `DELETE /accounts/{account_id}/ai-search/instances/{id}` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `update` | `PUT /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}` | Required |
| [AiSearchInstance](docs/api/ai_search_instance.html) | `update` | `PUT /accounts/{account_id}/ai-search/instances/{id}` | Required |
| [AiSearchInstancesItem](docs/api/ai_search_instances_item.html) | `create` | `POST /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items` | Required |
| [AiSearchInstancesItem](docs/api/ai_search_instances_item.html) | `list` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items` | Required |
| [AiSearchInstancesItem](docs/api/ai_search_instances_item.html) | `list` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/logs` | Required |
| [AiSearchInstancesItem](docs/api/ai_search_instances_item.html) | `list` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/chunks` | Required |
| [AiSearchInstancesItem](docs/api/ai_search_instances_item.html) | `load` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}` | Required |
| [AiSearchInstancesItem](docs/api/ai_search_instances_item.html) | `load` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/download` | Required |
| [AiSearchInstancesItem](docs/api/ai_search_instances_item.html) | `patch` | `PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}` | Required |
| [AiSearchInstancesItem](docs/api/ai_search_instances_item.html) | `remove` | `DELETE /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}` | Required |
| [AiSearchInstancesItem](docs/api/ai_search_instances_item.html) | `update` | `PUT /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `create` | `POST /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `create` | `POST /accounts/{account_id}/ai-search/instances/{id}/jobs` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `list` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}/logs` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `list` | `GET /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `list` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `list` | `GET /accounts/{account_id}/ai-search/instances/{id}/jobs` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `load` | `GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `load` | `GET /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `update` | `PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}` | Required |
| [AiSearchInstancesJob](docs/api/ai_search_instances_job.html) | `update` | `PATCH /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}` | Required |
| [AiSearchNamespace](docs/api/ai_search_namespace.html) | `create` | `POST /accounts/{account_id}/ai-search/namespaces` | Required |
| [AiSearchNamespace](docs/api/ai_search_namespace.html) | `list` | `GET /accounts/{account_id}/ai-search/namespaces` | Required |
| [AiSearchNamespace](docs/api/ai_search_namespace.html) | `load` | `GET /accounts/{account_id}/ai-search/namespaces/{name}` | Required |
| [AiSearchNamespace](docs/api/ai_search_namespace.html) | `patch` | `PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}` | Required |
| [AiSearchNamespace](docs/api/ai_search_namespace.html) | `remove` | `DELETE /accounts/{account_id}/ai-search/namespaces/{name}` | Required |
| [AiSearchNamespace](docs/api/ai_search_namespace.html) | `update` | `PUT /accounts/{account_id}/ai-search/namespaces/{name}` | Required |
| [AiSearchToken](docs/api/ai_search_token.html) | `create` | `POST /accounts/{account_id}/ai-search/tokens` | Required |
| [AiSearchToken](docs/api/ai_search_token.html) | `list` | `GET /accounts/{account_id}/ai-search/tokens` | Required |
| [AiSearchToken](docs/api/ai_search_token.html) | `load` | `GET /accounts/{account_id}/ai-search/tokens/{id}` | Required |
| [AiSearchToken](docs/api/ai_search_token.html) | `remove` | `DELETE /accounts/{account_id}/ai-search/tokens/{id}` | Required |
| [AiSearchToken](docs/api/ai_search_token.html) | `update` | `PUT /accounts/{account_id}/ai-search/tokens/{id}` | Required |
| [AigBillingCreateTopup](docs/api/aig_billing_create_topup.html) | `create` | `POST /accounts/{account_id}/ai-gateway/billing/topup` | Required |
| [AigBillingDeleteSpendingLimit](docs/api/aig_billing_delete_spending_limit.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/billing/spending-limit` | Required |
| [AigBillingDeleteTopupConfig](docs/api/aig_billing_delete_topup_config.html) | `remove` | `DELETE /accounts/{account_id}/ai-gateway/billing/topup/config` | Required |
| [AigBillingGetCreditBalance](docs/api/aig_billing_get_credit_balance.html) | `list` | `GET /accounts/{account_id}/ai-gateway/billing/credit-balance` | Required |
| [AigBillingGetInvoiceHistory](docs/api/aig_billing_get_invoice_history.html) | `list` | `GET /accounts/{account_id}/ai-gateway/billing/invoice-history` | Required |
| [AigBillingGetInvoicePreview](docs/api/aig_billing_get_invoice_preview.html) | `list` | `GET /accounts/{account_id}/ai-gateway/billing/invoice-preview` | Required |
| [AigBillingGetSpendingLimit](docs/api/aig_billing_get_spending_limit.html) | `list` | `GET /accounts/{account_id}/ai-gateway/billing/spending-limit` | Required |
| [AigBillingGetTopupConfig](docs/api/aig_billing_get_topup_config.html) | `list` | `GET /accounts/{account_id}/ai-gateway/billing/topup/config` | Required |
| [AigBillingGetTopupEligibility](docs/api/aig_billing_get_topup_eligibility.html) | `create` | `POST /accounts/{account_id}/ai-gateway/billing/topup/eligibility` | Required |
| [AigBillingGetTopupLimit](docs/api/aig_billing_get_topup_limit.html) | `list` | `GET /accounts/{account_id}/ai-gateway/billing/topup/limits` | Required |
| [AigBillingGetUsageHistory](docs/api/aig_billing_get_usage_history.html) | `list` | `GET /accounts/{account_id}/ai-gateway/billing/usage-history` | Required |
| [AigBillingSetSpendingLimit](docs/api/aig_billing_set_spending_limit.html) | `create` | `POST /accounts/{account_id}/ai-gateway/billing/spending-limit` | Required |
| [AigBillingSetTopupConfig](docs/api/aig_billing_set_topup_config.html) | `create` | `POST /accounts/{account_id}/ai-gateway/billing/topup/config` | Required |
| [AigBillingTopupStatus](docs/api/aig_billing_topup_status.html) | `create` | `POST /accounts/{account_id}/ai-gateway/billing/topup/status` | Required |
| [AutoRagJob](docs/api/auto_rag_job.html) | `list` | `GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs` | Required |
| [AutoRagJob](docs/api/auto_rag_job.html) | `list` | `GET /accounts/{account_id}/autorag/rags/{id}/jobs` | Required |
| [AutoRagJob](docs/api/auto_rag_job.html) | `load` | `GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}` | Required |
| [AutoRagRag](docs/api/auto_rag_rag.html) | `list` | `GET /accounts/{account_id}/autorag/rags/{id}/files` | Required |
| [AutoRagRag](docs/api/auto_rag_rag.html) | `update` | `PATCH /accounts/{account_id}/autorag/rags/{id}/sync` | Required |
| [AutoRagRagSearch](docs/api/auto_rag_rag_search.html) | `create` | `POST /accounts/{account_id}/autorag/rags/{id}/ai-search` | Required |
| [AutoRagRagSearch](docs/api/auto_rag_rag_search.html) | `create` | `POST /accounts/{account_id}/autorag/rags/{id}/search` | Required |
| [FinetuneAsset](docs/api/finetune_asset.html) | `load` | `GET /accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets/{file_name}` | Required |
| [Memory](docs/api/memory.html) | `create` | `POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/ingest` | Required |
| [Memory](docs/api/memory.html) | `create` | `POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/recall` | Required |
| [Memory](docs/api/memory.html) | `create` | `POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/remember` | Required |
| [Memory](docs/api/memory.html) | `create` | `POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/summary` | Required |
| [Memory](docs/api/memory.html) | `list` | `GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories` | Required |
| [Memory](docs/api/memory.html) | `list` | `GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles` | Required |
| [Memory](docs/api/memory.html) | `load` | `GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}` | Required |
| [Memory](docs/api/memory.html) | `remove` | `DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}` | Required |
| [Memory](docs/api/memory.html) | `remove` | `DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/sessions/{session_id}` | Required |
| [Memory](docs/api/memory.html) | `remove` | `DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}` | Required |
| [Namespace](docs/api/namespace.html) | `create` | `POST /accounts/{account_id}/agent-memory/namespaces` | Required |
| [Namespace](docs/api/namespace.html) | `list` | `GET /accounts/{account_id}/agent-memory/namespaces` | Required |
| [Namespace](docs/api/namespace.html) | `load` | `GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}` | Required |
| [Namespace](docs/api/namespace.html) | `remove` | `DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}` | Required |
| [Vectorize](docs/api/vectorize.html) | `create` | `POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert` | Required |
| [Vectorize](docs/api/vectorize.html) | `create` | `POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/upsert` | Required |
| [Vectorize](docs/api/vectorize.html) | `create` | `POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/create` | Required |
| [Vectorize](docs/api/vectorize.html) | `create` | `POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/delete` | Required |
| [Vectorize](docs/api/vectorize.html) | `create` | `POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/delete_by_ids` | Required |
| [Vectorize](docs/api/vectorize.html) | `create` | `POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/get_by_ids` | Required |
| [Vectorize](docs/api/vectorize.html) | `create` | `POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/query` | Required |
| [Vectorize](docs/api/vectorize.html) | `create` | `POST /accounts/{account_id}/vectorize/v2/indexes` | Required |
| [Vectorize](docs/api/vectorize.html) | `list` | `GET /accounts/{account_id}/vectorize/v2/indexes` | Required |
| [Vectorize](docs/api/vectorize.html) | `load` | `GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}/list` | Required |
| [Vectorize](docs/api/vectorize.html) | `load` | `GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/list` | Required |
| [Vectorize](docs/api/vectorize.html) | `load` | `GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}` | Required |
| [Vectorize](docs/api/vectorize.html) | `load` | `GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}/info` | Required |
| [Vectorize](docs/api/vectorize.html) | `remove` | `DELETE /accounts/{account_id}/vectorize/v2/indexes/{index_name}` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `create` | `POST /accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `create` | `POST /accounts/{account_id}/vectorize/indexes/{index_name}/get-by-ids` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `create` | `POST /accounts/{account_id}/vectorize/indexes/{index_name}/insert` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `create` | `POST /accounts/{account_id}/vectorize/indexes/{index_name}/query` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `create` | `POST /accounts/{account_id}/vectorize/indexes/{index_name}/upsert` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `create` | `POST /accounts/{account_id}/vectorize/indexes` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `list` | `GET /accounts/{account_id}/vectorize/indexes` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `load` | `GET /accounts/{account_id}/vectorize/indexes/{index_name}` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `remove` | `DELETE /accounts/{account_id}/vectorize/indexes/{index_name}` | Required |
| [VectorizeBetaDeprecated](docs/api/vectorize_beta__deprecated.html) | `update` | `PUT /accounts/{account_id}/vectorize/indexes/{index_name}` | Required |
| [WorkersAi](docs/api/workers_ai.html) | `create` | `POST /accounts/{account_id}/ai/run/{model_name}` | Required |
| [WorkersAi](docs/api/workers_ai.html) | `create` | `POST /accounts/{account_id}/ai/run` | Required |
| [WorkersAi](docs/api/workers_ai.html) | `create` | `POST /accounts/{account_id}/ai/tomarkdown` | Required |
| [WorkersAi](docs/api/workers_ai.html) | `list` | `GET /accounts/{account_id}/ai/authors/search` | Required |
| [WorkersAi](docs/api/workers_ai.html) | `list` | `GET /accounts/{account_id}/ai/tasks/search` | Required |
| [WorkersAi](docs/api/workers_ai.html) | `list` | `GET /accounts/{account_id}/ai/tomarkdown/supported` | Required |
| [WorkersAi](docs/api/workers_ai.html) | `load` | `GET /accounts/{account_id}/ai/models/search` | Required |
| [WorkersAi](docs/api/workers_ai.html) | `load` | `GET /accounts/{account_id}/ai/models/schema` | Required |
| [WorkersAiFinetune](docs/api/workers_ai_finetune.html) | `create` | `POST /accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets` | Required |
| [WorkersAiFinetune](docs/api/workers_ai_finetune.html) | `create` | `POST /accounts/{account_id}/ai/finetunes` | Required |
| [WorkersAiFinetune](docs/api/workers_ai_finetune.html) | `list` | `GET /accounts/{account_id}/ai/finetunes/public` | Required |
| [WorkersAiFinetune](docs/api/workers_ai_finetune.html) | `load` | `GET /accounts/{account_id}/ai/finetunes` | Required |
| [WorkersAiFinetune](docs/api/workers_ai_finetune.html) | `remove` | `DELETE /accounts/{account_id}/ai/finetunes/{finetune_id}` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-ai_list`: List records for an entity. Supported entities: `ai_gateway_custom_domain`, `ai_gateway_custom_provider`, `ai_gateway_custom_provider_cost`, `ai_gateway_dataset`, `ai_gateway_evaluation`, `ai_gateway_gateway`, `ai_gateway_log`, `ai_gateway_provider_config`, `ai_search_instance`, `ai_search_instances_item`, `ai_search_instances_job`, `ai_search_namespace`, `ai_search_token`, `aig_billing_get_credit_balance`, `aig_billing_get_invoice_history`, `aig_billing_get_invoice_preview`, `aig_billing_get_spending_limit`, `aig_billing_get_topup_config`, `aig_billing_get_topup_limit`, `aig_billing_get_usage_history`, `auto_rag_job`, `auto_rag_rag`, `memory`, `namespace`, `vectorize`, `vectorize_beta__deprecated`, `workers_ai`, `workers_ai_finetune`.
- `cloudflare-ai_load`: Load one record for an entity. Supported entities: `account`, `ai_gateway_custom_domain`, `ai_gateway_custom_provider`, `ai_gateway_custom_provider_cost`, `ai_gateway_dataset`, `ai_gateway_dynamic_route`, `ai_gateway_evaluation`, `ai_gateway_gateway`, `ai_gateway_log`, `ai_search_instance`, `ai_search_instances_item`, `ai_search_instances_job`, `ai_search_namespace`, `ai_search_token`, `auto_rag_job`, `finetune_asset`, `memory`, `namespace`, `vectorize`, `vectorize_beta__deprecated`, `workers_ai`, `workers_ai_finetune`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

