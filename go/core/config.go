package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareAi",
			"slug": "cloudflare-ai",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"account": map[string]any{},
				"ai_gateway": map[string]any{},
				"ai_gateway_custom_domain": map[string]any{},
				"ai_gateway_custom_provider": map[string]any{},
				"ai_gateway_custom_provider_cost": map[string]any{},
				"ai_gateway_dataset": map[string]any{},
				"ai_gateway_dynamic_route": map[string]any{},
				"ai_gateway_evaluation": map[string]any{},
				"ai_gateway_gateway": map[string]any{},
				"ai_gateway_log": map[string]any{},
				"ai_gateway_provider_config": map[string]any{},
				"ai_search_account_search": map[string]any{},
				"ai_search_instance": map[string]any{},
				"ai_search_instances_item": map[string]any{},
				"ai_search_instances_job": map[string]any{},
				"ai_search_namespace": map[string]any{},
				"ai_search_token": map[string]any{},
				"aig_billing_create_topup": map[string]any{},
				"aig_billing_delete_spending_limit": map[string]any{},
				"aig_billing_delete_topup_config": map[string]any{},
				"aig_billing_get_credit_balance": map[string]any{},
				"aig_billing_get_invoice_history": map[string]any{},
				"aig_billing_get_invoice_preview": map[string]any{},
				"aig_billing_get_spending_limit": map[string]any{},
				"aig_billing_get_topup_config": map[string]any{},
				"aig_billing_get_topup_eligibility": map[string]any{},
				"aig_billing_get_topup_limit": map[string]any{},
				"aig_billing_get_usage_history": map[string]any{},
				"aig_billing_set_spending_limit": map[string]any{},
				"aig_billing_set_topup_config": map[string]any{},
				"aig_billing_topup_status": map[string]any{},
				"auto_rag_job": map[string]any{},
				"auto_rag_rag": map[string]any{},
				"auto_rag_rag_search": map[string]any{},
				"finetune_asset": map[string]any{},
				"memory": map[string]any{},
				"namespace": map[string]any{},
				"vectorize": map[string]any{},
				"vectorize_beta__deprecated": map[string]any{},
				"workers_ai": map[string]any{},
				"workers_ai_finetune": map[string]any{},
			},
		},
		"entity": map[string]any{
			"account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "account",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/logging-state",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "logging-state",
									},
								},
								"parts": []any{
									"accounts",
									"{id}",
									"ai-gateway",
									"logging-state",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"account_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "ai_gateway_logging_state",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/ai-gateway/logging-state",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "logging-state",
									},
								},
								"parts": []any{
									"accounts",
									"{id}",
									"ai-gateway",
									"logging-state",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"account_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "ai_gateway_logging_state",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ai_gateway": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "byokAlias",
						"title": "Byok Alias",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "options",
						"title": "Options",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "query",
						"title": "Query",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "ai_gateway",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai/websearch",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "websearch",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"websearch",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"byokAlias": "`reqdata.byok_alia`",
										"limit": "`reqdata.limit`",
										"options": "`reqdata.option`",
										"provider": "`reqdata.provider`",
										"query": "`reqdata.query`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_gateway_custom_domain": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cname_target",
						"title": "Cname Target",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "epoch milliseconds",
					},
					map[string]any{
						"name": "domain",
						"title": "Domain",
						"type": "`$STRING`",
						"req": true,
						"short": "Custom hostname that you own, such as `ai.example.com`.",
					},
					map[string]any{
						"name": "gateway_id",
						"title": "Gateway Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the AI Gateway within the account.",
					},
					map[string]any{
						"name": "hostname",
						"title": "Hostname",
						"type": "`$STRING`",
						"req": true,
						"short": "Custom hostname that you own, such as `ai.example.com`.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "minTLS",
						"title": "Min Tls",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "epoch milliseconds",
					},
					map[string]any{
						"name": "ssl_hostname_id",
						"title": "Ssl Hostname Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "zone_id",
						"title": "Zone Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the Cloudflare zone that contains the custom hostname.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_gateway_custom_domain",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "custom-domains",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"custom-domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "custom-domains",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"custom-domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"page",
										"per_page",
										"search",
										"status",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "custom-domains",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"custom-domains",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hostname": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ai.acme.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "custom-domains",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"custom-domains",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hostname": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ai.acme.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_gateway_custom_provider": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "base_url",
						"title": "Base Url",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"format": "uri",
					},
					map[string]any{
						"name": "beta",
						"title": "Beta",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "curl_example",
						"title": "Curl Example",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enable",
						"title": "Enable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "headers",
						"title": "Headers",
						"type": "`$STRING`",
						"short": "JSON object of extra HTTP headers that AI Gateway sends to the provider.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "js_example",
						"title": "Js Example",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "link",
						"title": "Link",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logo",
						"title": "Logo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "position",
						"title": "Position",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_gateway_custom_provider",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
									},
									"query": []any{
										map[string]any{
											"name": "beta",
											"orig": "beta",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "enable",
											"orig": "enable",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"beta",
										"enable",
										"page",
										"per_page",
										"search",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_gateway_custom_provider_cost": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_provider_id",
						"title": "Account Provider Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the custom provider that the pricing rule applies to.",
						"format": "uuid",
					},
					map[string]any{
						"name": "changed_by",
						"title": "Changed By",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cost_in",
						"title": "Cost In",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "cost_out",
						"title": "Cost Out",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "cost_type",
						"title": "Cost Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "enable",
						"title": "Enable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "model_rule",
						"title": "Model Rule",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "token_pricing",
						"title": "Token Pricing",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weight",
						"title": "Weight",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_gateway_custom_provider_cost",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
									map[string]any{
										"lit": "costs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
									"costs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
									map[string]any{
										"lit": "costs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
									"costs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
									},
									"query": []any{
										map[string]any{
											"name": "account_provider_id",
											"orig": "account_provider_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "cost_type",
											"orig": "cost_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "tokens",
										},
										map[string]any{
											"name": "enable",
											"orig": "enable",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "model_rule",
											"orig": "model_rule",
											"type": "`$STRING`",
											"kind": "query",
											"example": "equals",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"account_provider_id",
										"cost_type",
										"enable",
										"model_rule",
										"page",
										"per_page",
										"search",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
									map[string]any{
										"lit": "costs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
									"costs",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
									map[string]any{
										"lit": "costs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
									"costs",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "custom-providers",
									},
									map[string]any{
										"lit": "costs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"custom-providers",
									"costs",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_gateway_dataset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "enable",
						"title": "Enable",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "filters",
						"title": "Filters",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "gateway_id",
						"title": "Gateway Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the AI Gateway within the account.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_gateway_dataset",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "datasets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"datasets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "datasets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"datasets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
									"query": []any{
										map[string]any{
											"name": "enable",
											"orig": "enable",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"enable",
										"gateway_id",
										"name",
										"page",
										"per_page",
										"search",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"datasets",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"datasets",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"datasets",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_gateway_dynamic_route": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_tag",
						"title": "Account Tag",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "deployment",
						"title": "Deployment",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "deployments",
						"title": "Deployments",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "elements",
						"title": "Elements",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "gateway_id",
						"title": "Gateway Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "is_valid",
						"title": "Is Valid",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "order_by",
						"title": "Order By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "order_by_direction",
						"title": "Order By Direction",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "page",
						"title": "Page",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "per_page",
						"title": "Per Page",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "routes",
						"title": "Routes",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "version_id",
						"title": "Version Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "versions",
						"title": "Versions",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_gateway_dynamic_route",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "route_id",
									},
									map[string]any{
										"lit": "deployments",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
									"{route_id}",
									"deployments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "route_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
										map[string]any{
											"name": "route_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"route_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "route_id",
									},
									map[string]any{
										"lit": "versions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
									"{route_id}",
									"versions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "route_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
										map[string]any{
											"name": "route_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"route_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions/{version_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "route_id",
									},
									map[string]any{
										"lit": "versions",
									},
									map[string]any{
										"var": "version_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
									"{route_id}",
									"versions",
									"{version_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "route_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
										map[string]any{
											"name": "route_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
										map[string]any{
											"name": "version_id",
											"orig": "version_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"route_id",
										"version_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "route_id",
									},
									map[string]any{
										"lit": "deployments",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
									"{route_id}",
									"deployments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "route_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
										map[string]any{
											"name": "route_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"route_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "route_id",
									},
									map[string]any{
										"lit": "versions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
									"{route_id}",
									"versions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "route_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
										map[string]any{
											"name": "route_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"route_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"routes",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.route`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "54442216",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_gateway_evaluation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "dataset_ids",
						"title": "Dataset Ids",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "datasets",
						"title": "Datasets",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "enable",
						"title": "Enable",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "evaluation_type_ids",
						"title": "Evaluation Type Ids",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "gateway_id",
						"title": "Gateway Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the AI Gateway within the account.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mandatory",
						"title": "Mandatory",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "processed",
						"title": "Processed",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "total_logs",
						"title": "Total Logs",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_gateway_evaluation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "evaluations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"evaluations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "evaluations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"evaluations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "processed",
											"orig": "processed",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"name",
										"page",
										"per_page",
										"processed",
										"search",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/evaluation-types",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "evaluation-types",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"evaluation-types",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "mandatory",
										},
										map[string]any{
											"name": "order_by_direction",
											"orig": "order_by_direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"order_by",
										"order_by_direction",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "evaluations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"evaluations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "evaluations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"evaluations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_gateway_gateway": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authentication",
						"title": "Authentication",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "byok_only",
						"title": "Byok Only",
						"type": "`$BOOLEAN`",
						"short": "Requires customer-provided provider credentials and prevents fallback to Unified Billing.",
					},
					map[string]any{
						"name": "cache_invalidate_on_update",
						"title": "Cache Invalidate On Update",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "cache_ttl",
						"title": "Cache Ttl",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "collect_logs",
						"title": "Collect Logs",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "dlp",
						"title": "Dlp",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "guardrails",
						"title": "Guardrails",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the AI Gateway within the account.",
					},
					map[string]any{
						"name": "is_default",
						"title": "Is Default",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "log_classification",
						"title": "Log Classification",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "log_management",
						"title": "Log Management",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "log_management_strategy",
						"title": "Log Management Strategy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logpush",
						"title": "Logpush",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "logpush_public_key",
						"title": "Logpush Public Key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "otel",
						"title": "Otel",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "rate_limiting_interval",
						"title": "Rate Limiting Interval",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "rate_limiting_limit",
						"title": "Rate Limiting Limit",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "rate_limiting_technique",
						"title": "Rate Limiting Technique",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "retry_backoff",
						"title": "Retry Backoff",
						"type": "`$STRING`",
						"short": "Backoff strategy for retry delays",
					},
					map[string]any{
						"name": "retry_delay",
						"title": "Retry Delay",
						"type": "`$INTEGER`",
						"short": "Delay between retry attempts in milliseconds (0-60000)",
					},
					map[string]any{
						"name": "retry_max_attempts",
						"title": "Retry Max Attempts",
						"type": "`$INTEGER`",
						"short": "Maximum number of retry attempts for failed requests (1-5)",
					},
					map[string]any{
						"name": "spend_limits",
						"title": "Spend Limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "store_id",
						"title": "Store Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stripe",
						"title": "Stripe",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "workers_ai_billing_mode",
						"title": "Workers Ai Billing Mode",
						"type": "`$STRING`",
						"short": "Controls how Workers AI inference calls routed through this gateway are billed.",
					},
					map[string]any{
						"name": "zdr",
						"title": "Zdr",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_gateway_gateway",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/gateways",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"search",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "url",
									},
									map[string]any{
										"var": "provider",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"url",
									"{provider}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "workers-ai",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"provider",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_gateway_log": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cached",
						"title": "Cached",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "cost",
						"title": "Cost",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "custom_cost",
						"title": "Custom Cost",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "feedback",
						"title": "Feedback",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "model_type",
						"title": "Model Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "path",
						"title": "Path",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "request_content_type",
						"title": "Request Content Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "request_head",
						"title": "Request Head",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "request_head_complete",
						"title": "Request Head Complete",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "request_size",
						"title": "Request Size",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "request_type",
						"title": "Request Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "response_content_type",
						"title": "Response Content Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "response_head",
						"title": "Response Head",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "response_head_complete",
						"title": "Response Head Complete",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "response_size",
						"title": "Response Size",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "score",
						"title": "Score",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "status_code",
						"title": "Status Code",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "step",
						"title": "Step",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "tokens_in",
						"title": "Tokens In",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "tokens_out",
						"title": "Tokens Out",
						"type": "`$INTEGER`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_gateway_log",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "logs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"logs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
									"query": []any{
										map[string]any{
											"name": "cached",
											"orig": "cached",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "feedback",
											"orig": "feedback",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_cost",
											"orig": "max_cost",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_duration",
											"orig": "max_duration",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_tokens_in",
											"orig": "max_tokens_in",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_tokens_out",
											"orig": "max_tokens_out",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_total_token",
											"orig": "max_total_token",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "meta_info",
											"orig": "meta_info",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_cost",
											"orig": "min_cost",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_duration",
											"orig": "min_duration",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_tokens_in",
											"orig": "min_tokens_in",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_tokens_out",
											"orig": "min_tokens_out",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_total_token",
											"orig": "min_total_token",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "model",
											"orig": "model",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "model_type",
											"orig": "model_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "created_at",
										},
										map[string]any{
											"name": "order_by_direction",
											"orig": "order_by_direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "request_content_type",
											"orig": "request_content_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "response_content_type",
											"orig": "response_content_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "success",
											"orig": "success",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cached",
										"direction",
										"end_date",
										"feedback",
										"filter",
										"gateway_id",
										"max_cost",
										"max_duration",
										"max_tokens_in",
										"max_tokens_out",
										"max_total_token",
										"meta_info",
										"min_cost",
										"min_duration",
										"min_tokens_in",
										"min_tokens_out",
										"min_total_token",
										"model",
										"model_type",
										"order_by",
										"order_by_direction",
										"page",
										"per_page",
										"provider",
										"request_content_type",
										"response_content_type",
										"search",
										"start_date",
										"success",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"logs",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/request",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"var": "log_id",
									},
									map[string]any{
										"lit": "request",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"logs",
									"{log_id}",
									"request",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "log_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "log_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"log_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/response",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"var": "log_id",
									},
									map[string]any{
										"lit": "response",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"logs",
									"{log_id}",
									"response",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "log_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "log_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"log_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "logs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"logs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10000,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "created_at",
										},
										map[string]any{
											"name": "order_by_direction",
											"orig": "order_by_direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "asc",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"filter",
										"gateway_id",
										"limit",
										"order_by",
										"order_by_direction",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"logs",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d37909e38d3e99c29fa2cd343ac421a",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_gateway_provider_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "alias",
						"title": "Alias",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "default_config",
						"title": "Default Config",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "gateway_id",
						"title": "Gateway Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the AI Gateway within the account.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "provider_slug",
						"title": "Provider Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "rate_limit",
						"title": "Rate Limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "rate_limit_period",
						"title": "Rate Limit Period",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "secret",
						"title": "Secret",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Provider API key to store in the Secrets Store configured on the gateway.",
					},
					map[string]any{
						"name": "secret_id",
						"title": "Secret Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "secret_preview",
						"title": "Secret Preview",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_gateway_provider_config",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "provider_configs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"provider_configs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "provider_configs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"provider_configs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "provider_configs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"provider_configs",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "gateways",
									},
									map[string]any{
										"var": "gateway_id",
									},
									map[string]any{
										"lit": "provider_configs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"gateways",
									"{gateway_id}",
									"provider_configs",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3ebbcb006d4d46d7bb6a8c7f14676cb0",
										},
										map[string]any{
											"name": "gateway_id",
											"orig": "gateway_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-gateway",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"gateway_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"ai_search_account_search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ai_search_options",
						"title": "Ai Search Options",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "choices",
						"title": "Choices",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "chunks",
						"title": "Chunks",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"short": "OpenAI-compatible message array.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"short": "A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "query",
						"title": "Query",
						"type": "`$STRING`",
						"short": "A simple text query string.",
					},
					map[string]any{
						"name": "query_kind",
						"title": "Query Kind",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "search_query",
						"title": "Search Query",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_search_account_search",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/search",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "name",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{name}",
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/chat/completions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "chat",
									},
									map[string]any{
										"lit": "completions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"chat",
									"completions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"namespace_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
					},
				},
			},
			"ai_search_instance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ai_gateway_id",
						"title": "Ai Gateway Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "ai_search_model",
						"title": "Ai Search Model",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API.",
					},
					map[string]any{
						"name": "ai_search_options",
						"title": "Ai Search Options",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "cache",
						"title": "Cache",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "cache_threshold",
						"title": "Cache Threshold",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "cache_ttl",
						"title": "Cache Ttl",
						"type": "`$ANY`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
						"short": "Cache entry TTL in seconds.",
					},
					map[string]any{
						"name": "choices",
						"title": "Choices",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "chunk",
						"title": "Chunk",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "chunk_overlap",
						"title": "Chunk Overlap",
						"type": "`$INTEGER`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$NUMBER`",
							},
						},
					},
					map[string]any{
						"name": "chunk_size",
						"title": "Chunk Size",
						"type": "`$INTEGER`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$NUMBER`",
							},
						},
					},
					map[string]any{
						"name": "chunks",
						"title": "Chunks",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "completed",
						"title": "Completed",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "created_by",
						"title": "Created By",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"readOnly": true,
					},
					map[string]any{
						"name": "custom_metadata",
						"title": "Custom Metadata",
						"type": "`$ARRAY`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "degraded",
						"title": "Degraded",
						"type": "`$BOOLEAN`",
						"short": "True when status counts are unavailable (e.g.",
					},
					map[string]any{
						"name": "embedding_model",
						"title": "Embedding Model",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "enable",
						"title": "Enable",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "engine",
						"title": "Engine",
						"type": "`$OBJECT`",
						"short": "Engine-specific metadata.",
					},
					map[string]any{
						"name": "engine_version",
						"title": "Engine Version",
						"type": "`$NUMBER`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$NUMBER`",
							},
						},
						"readOnly": true,
					},
					map[string]any{
						"name": "error",
						"title": "Error",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "file_embed_errors",
						"title": "File Embed Errors",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "fusion_method",
						"title": "Fusion Method",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "hybrid_search_enabled",
						"title": "Hybrid Search Enabled",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Deprecated — use index_method instead.",
						"deprecated": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "AI Search instance ID.",
					},
					map[string]any{
						"name": "index_method",
						"title": "Index Method",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Controls which storage backends are used during indexing.",
					},
					map[string]any{
						"name": "index_source_errors",
						"title": "Index Source Errors",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "indexing_options",
						"title": "Indexing Options",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "last_activity",
						"title": "Last Activity",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "max_num_results",
						"title": "Max Num Results",
						"type": "`$INTEGER`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$NUMBER`",
							},
						},
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"short": "A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API.",
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "modified_by",
						"title": "Modified By",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"readOnly": true,
					},
					map[string]any{
						"name": "namespace",
						"title": "Namespace",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"readOnly": true,
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "outdated",
						"title": "Outdated",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "paused",
						"title": "Paused",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "public_endpoint_id",
						"title": "Public Endpoint Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"readOnly": true,
					},
					map[string]any{
						"name": "public_endpoint_params",
						"title": "Public Endpoint Params",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "queued",
						"title": "Queued",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reranking",
						"title": "Reranking",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "reranking_model",
						"title": "Reranking Model",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "retrieval_options",
						"title": "Retrieval Options",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "rewrite_model",
						"title": "Rewrite Model",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API.",
					},
					map[string]any{
						"name": "rewrite_query",
						"title": "Rewrite Query",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "running",
						"title": "Running",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "score_threshold",
						"title": "Score Threshold",
						"type": "`$NUMBER`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$NUMBER`",
							},
						},
					},
					map[string]any{
						"name": "skipped",
						"title": "Skipped",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "source_params",
						"title": "Source Params",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"readOnly": true,
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "summarization",
						"title": "Summarization",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "summarization_model",
						"title": "Summarization Model",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "sync_interval",
						"title": "Sync Interval",
						"type": "`$ANY`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
						"short": "Interval between automatic syncs, in seconds.",
					},
					map[string]any{
						"name": "system_prompt_ai_search",
						"title": "System Prompt Ai Search",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "system_prompt_index_summarization",
						"title": "System Prompt Index Summarization",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "system_prompt_rewrite_query",
						"title": "System Prompt Rewrite Query",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "token_id",
						"title": "Token Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"format": "uuid",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Source type.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_search_instance",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/chat/completions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "chat",
									},
									map[string]any{
										"lit": "completions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"chat",
									"completions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/purge_cache",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "purge_cache",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"purge_cache",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"$action": "purge_cache",
									"exist": []any{
										"account_id",
										"instance_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/search",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"search",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"$action": "search",
									"exist": []any{
										"account_id",
										"instance_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}/chat/completions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "chat",
									},
									map[string]any{
										"lit": "completions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{instance_id}",
									"chat",
									"completions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}/search",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{instance_id}",
									"search",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
								},
								"select": map[string]any{
									"$action": "search",
									"exist": []any{
										"account_id",
										"instance_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "name",
									},
									map[string]any{
										"lit": "instances",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{name}",
									"instances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/instances",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "name",
									},
									map[string]any{
										"lit": "instances",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{name}",
									"instances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
									"query": []any{
										map[string]any{
											"name": "hostname",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "namespace",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "created_at",
										},
										map[string]any{
											"name": "order_by_direction",
											"orig": "order_by_direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"hostname",
										"name",
										"namespace",
										"order_by",
										"order_by_direction",
										"page",
										"per_page",
										"search",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/instances",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
									},
									"query": []any{
										map[string]any{
											"name": "hostname",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "namespace",
											"orig": "namespace",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "created_at",
										},
										map[string]any{
											"name": "order_by_direction",
											"orig": "order_by_direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"hostname",
										"namespace",
										"order_by",
										"order_by_direction",
										"page",
										"per_page",
										"search",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/stats",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "stats",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"stats",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}/stats",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "stats",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{instance_id}",
									"stats",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
					},
				},
			},
			"ai_search_instances_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"title": "Action",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "checksum",
						"title": "Checksum",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
					},
					map[string]any{
						"name": "chunkCount",
						"title": "Chunk Count",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "chunks_count",
						"title": "Chunks Count",
						"type": "`$INTEGER`",
						"req": true,
						"readOnly": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "end_byte",
						"title": "End Byte",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "error",
						"title": "Error",
						"type": "`$STRING`",
						"readOnly": true,
					},
					map[string]any{
						"name": "errorType",
						"title": "Error Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "fileKey",
						"title": "File Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "file_size",
						"title": "File Size",
						"type": "`$NUMBER`",
						"req": true,
						"readOnly": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
					},
					map[string]any{
						"name": "item",
						"title": "Item",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "Item key / filename.",
						"readOnly": true,
					},
					map[string]any{
						"name": "last_seen_at",
						"title": "Last Seen At",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Built-in, configured filterable, and retained source metadata for the item.",
						"readOnly": true,
					},
					map[string]any{
						"name": "namespace",
						"title": "Namespace",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
					},
					map[string]any{
						"name": "next_action",
						"title": "Next Action",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
					},
					map[string]any{
						"name": "processingTimeMs",
						"title": "Processing Time Ms",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "source_id",
						"title": "Source Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifies which data source this item belongs to.",
						"readOnly": true,
					},
					map[string]any{
						"name": "start_byte",
						"title": "Start Byte",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
					},
					map[string]any{
						"name": "text",
						"title": "Text",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "wait_for_completion",
						"title": "Wait For Completion",
						"type": "`$BOOLEAN`",
						"short": "Wait for indexing to fully complete before responding.",
					},
					map[string]any{
						"name": "warnings",
						"title": "Warnings",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_search_instances_item",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "items",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"items",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"namespace_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "items",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"items",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
									"query": []any{
										map[string]any{
											"name": "item_id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "metadata_filter",
											"orig": "metadata_filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "status",
										},
										map[string]any{
											"name": "source",
											"orig": "source",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"item_id",
										"key",
										"metadata_filter",
										"namespace_id",
										"page",
										"per_page",
										"search",
										"sort_by",
										"source",
										"status",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/logs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"var": "item_id",
									},
									map[string]any{
										"lit": "logs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"items",
									"{item_id}",
									"logs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "item_id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"instance_id",
										"item_id",
										"limit",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/chunks",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"var": "item_id",
									},
									map[string]any{
										"lit": "chunks",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"items",
									"{item_id}",
									"chunks",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "item_id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"item_id",
										"limit",
										"namespace_id",
										"offset",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"items",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"item_id": "id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"instance_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/download",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"var": "item_id",
									},
									map[string]any{
										"lit": "download",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"items",
									"{item_id}",
									"download",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "item_id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"item_id",
										"namespace_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"items",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"item_id": "id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"instance_id",
										"namespace_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"items",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"item_id": "id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"instance_id",
										"namespace_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "items",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"items",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"namespace_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
					},
				},
			},
			"ai_search_instances_job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"title": "Action",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "end_reason",
						"title": "End Reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ended_at",
						"title": "Ended At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "last_seen_at",
						"title": "Last Seen At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "message_type",
						"title": "Message Type",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "started_at",
						"title": "Started At",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_search_instances_job",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"jobs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{instance_id}",
									"jobs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}/logs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
									map[string]any{
										"lit": "logs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"jobs",
									"{job_id}",
									"logs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"job_id",
										"namespace_id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
									map[string]any{
										"lit": "logs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{instance_id}",
									"jobs",
									"{job_id}",
									"logs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"job_id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"jobs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"namespace_id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{instance_id}",
									"jobs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"instance_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"jobs",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"job_id": "id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"instance_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{instance_id}",
									"jobs",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"job_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"instance_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{instance_id}",
									"jobs",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"job_id": "id",
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-namespace",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"instance_id",
										"namespace_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "instance_id",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"instances",
									"{instance_id}",
									"jobs",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "instance_id",
										"job_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "instance_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-ai-search",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"instance_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
					},
				},
			},
			"ai_search_namespace": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Optional description for the namespace.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "new_namespace",
						"title": "New Namespace",
						"type": "`$STRING`",
						"req": true,
						"short": "Target namespace to move the instance into.",
					},
					map[string]any{
						"name": "public_endpoint_id",
						"title": "Public Endpoint Id",
						"type": "`$STRING`",
						"readOnly": true,
					},
					map[string]any{
						"name": "public_endpoint_params",
						"title": "Public Endpoint Params",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_search_namespace",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/namespaces",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
											"example": "prod",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"search",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{namespace_id}",
									"instances",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-blog",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"namespace_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/ai-search/namespaces/{name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"namespaces",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
					},
				},
			},
			"ai_search_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cf_api_id",
						"title": "Cf Api Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "cf_api_key",
						"title": "Cf Api Key",
						"type": "`$STRING`",
						"req": true,
						"writeOnly": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "created_by",
						"title": "Created By",
						"type": "`$STRING`",
						"readOnly": true,
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "legacy",
						"title": "Legacy",
						"type": "`$BOOLEAN`",
						"readOnly": true,
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "modified_by",
						"title": "Modified By",
						"type": "`$STRING`",
						"readOnly": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_search_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-search/tokens",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"tokens",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/tokens",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"tokens",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
											"example": "my-token",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"search",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-search/tokens/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "62af0db3-c410-40b2-9ee3-0e93f6dd1de0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-search/tokens/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "62af0db3-c410-40b2-9ee3-0e93f6dd1de0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/ai-search/tokens/{id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-search",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "62af0db3-c410-40b2-9ee3-0e93f6dd1de0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_create_topup": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amount",
						"title": "Amount",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Top-up amount in cents (min 1000).",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "payment_method_id",
						"title": "Payment Method Id",
						"type": "`$STRING`",
						"short": "Stripe PaymentMethod to charge instead of the customer's default payment method.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_create_topup",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/billing/topup",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "topup",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"topup",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"amount": "`reqdata.amount`",
										"payment_method_id": "`reqdata.payment_method_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_delete_spending_limit": map[string]any{
				"fields": []any{},
				"name": "aig_billing_delete_spending_limit",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/billing/spending-limit",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "spending-limit",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"spending-limit",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_delete_topup_config": map[string]any{
				"fields": []any{},
				"name": "aig_billing_delete_topup_config",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai-gateway/billing/topup/config",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "topup",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"topup",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_get_credit_balance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_get_credit_balance",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/billing/credit-balance",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "credit-balance",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"credit-balance",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_get_invoice_history": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_get_invoice_history",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/billing/invoice-history",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "invoice-history",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"invoice-history",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_get_invoice_preview": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_get_invoice_preview",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/billing/invoice-preview",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "invoice-preview",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"invoice-preview",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_get_spending_limit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_get_spending_limit",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/billing/spending-limit",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "spending-limit",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"spending-limit",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_get_topup_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_get_topup_config",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/billing/topup/config",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "topup",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"topup",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_get_topup_eligibility": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "payment_methods",
						"title": "Payment Methods",
						"type": "`$ARRAY`",
						"short": "Account-level payment methods, forwarded by the dashboard.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_get_topup_eligibility",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/billing/topup/eligibility",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "topup",
									},
									map[string]any{
										"lit": "eligibility",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"topup",
									"eligibility",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_get_topup_limit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_get_topup_limit",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/billing/topup/limits",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "topup",
									},
									map[string]any{
										"lit": "limits",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"topup",
									"limits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_get_usage_history": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_get_usage_history",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai-gateway/billing/usage-history",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "usage-history",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"usage-history",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "end_time",
											"orig": "end_time",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1700086400000,
										},
										map[string]any{
											"name": "start_time",
											"orig": "start_time",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1700000000000,
										},
										map[string]any{
											"name": "value_grouping_window",
											"orig": "value_grouping_window",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "day",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"end_time",
										"start_time",
										"value_grouping_window",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_set_spending_limit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amount",
						"title": "Amount",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Spending limit amount in cents (min 100).",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$STRING`",
						"req": true,
						"short": "Spending limit duration.",
					},
					map[string]any{
						"name": "strategy",
						"title": "Strategy",
						"type": "`$STRING`",
						"req": true,
						"short": "Spending limit strategy.",
					},
				},
				"name": "aig_billing_set_spending_limit",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/billing/spending-limit",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "spending-limit",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"spending-limit",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"amount": "`reqdata.amount`",
										"duration": "`reqdata.duration`",
										"strategy": "`reqdata.strategy`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_set_topup_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amount",
						"title": "Amount",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Auto top-up amount in cents (min 1000).",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "threshold",
						"title": "Threshold",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Balance threshold in cents that triggers auto top-up (min 500).",
					},
				},
				"name": "aig_billing_set_topup_config",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/billing/topup/config",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "topup",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"topup",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"amount": "`reqdata.amount`",
										"threshold": "`reqdata.threshold`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"aig_billing_topup_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "payment_intent_id",
						"title": "Payment Intent Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Stripe invoice ID to check status for.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "aig_billing_topup_status",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai-gateway/billing/topup/status",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai-gateway",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "topup",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai-gateway",
									"billing",
									"topup",
									"status",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"payment_intent_id": "`reqdata.payment_intent_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"auto_rag_job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "end_reason",
						"title": "End Reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ended_at",
						"title": "Ended At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "last_seen_at",
						"title": "Last Seen At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "message_type",
						"title": "Message Type",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "started_at",
						"title": "Started At",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "auto_rag_job",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "autorag",
									},
									map[string]any{
										"lit": "rags",
									},
									map[string]any{
										"var": "rag_id",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
									map[string]any{
										"lit": "logs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"autorag",
									"rags",
									"{rag_id}",
									"jobs",
									"{job_id}",
									"logs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "rag_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "rag_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-rag",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"job_id",
										"page",
										"per_page",
										"rag_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/autorag/rags/{id}/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "autorag",
									},
									map[string]any{
										"lit": "rags",
									},
									map[string]any{
										"var": "rag_id",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"autorag",
									"rags",
									"{rag_id}",
									"jobs",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "rag_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "rag_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-rag",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"rag_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "autorag",
									},
									map[string]any{
										"lit": "rags",
									},
									map[string]any{
										"var": "rag_id",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"autorag",
									"rags",
									"{rag_id}",
									"jobs",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "rag_id",
										"job_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "rag_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-rag",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"rag_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"auto_rag_rag": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "error",
						"title": "Error",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "job_id",
						"title": "Job Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "auto_rag_rag",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/autorag/rags/{id}/files",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "autorag",
									},
									map[string]any{
										"lit": "rags",
									},
									map[string]any{
										"var": "rag_id",
									},
									map[string]any{
										"lit": "files",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"autorag",
									"rags",
									"{rag_id}",
									"files",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "rag_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "rag_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-rag",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"rag_id",
										"search",
										"status",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/autorag/rags/{id}/sync",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "autorag",
									},
									map[string]any{
										"lit": "rags",
									},
									map[string]any{
										"var": "rag_id",
									},
									map[string]any{
										"lit": "sync",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"autorag",
									"rags",
									"{rag_id}",
									"sync",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "rag_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "rag_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-rag",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rag_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"auto_rag_rag_search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "filters",
						"title": "Filters",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "has_more",
						"title": "Has More",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "max_num_results",
						"title": "Max Num Results",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "next_page",
						"title": "Next Page",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "query",
						"title": "Query",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ranking_options",
						"title": "Ranking Options",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reranking",
						"title": "Reranking",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "response",
						"title": "Response",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "rewrite_query",
						"title": "Rewrite Query",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "search_query",
						"title": "Search Query",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "system_prompt",
						"title": "System Prompt",
						"type": "`$STRING`",
					},
				},
				"name": "auto_rag_rag_search",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/autorag/rags/{id}/ai-search",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "autorag",
									},
									map[string]any{
										"lit": "rags",
									},
									map[string]any{
										"var": "rag_id",
									},
									map[string]any{
										"lit": "ai-search",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"autorag",
									"rags",
									"{rag_id}",
									"ai-search",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "rag_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "rag_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-rag",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rag_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/autorag/rags/{id}/search",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "autorag",
									},
									map[string]any{
										"lit": "rags",
									},
									map[string]any{
										"var": "rag_id",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"autorag",
									"rags",
									"{rag_id}",
									"search",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "rag_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "c3dc5f0b34a14ff8e1b3ec04895e1b22",
										},
										map[string]any{
											"name": "rag_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-rag",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rag_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"finetune_asset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "file_name",
						"title": "File Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "file_url",
						"title": "File Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "finetune_asset",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets/{file_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "finetunes",
									},
									map[string]any{
										"var": "finetune_id",
									},
									map[string]any{
										"lit": "finetune-assets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"finetunes",
									"{finetune_id}",
									"finetune-assets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"file_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "finetune_id",
											"orig": "finetune_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "bc451aef-f723-4b26-a6b2-901afd2e7a8a",
										},
										map[string]any{
											"name": "id",
											"orig": "file_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "adapter_model.safetensors",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"finetune_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"memory": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Always empty for a successful response.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Informational, non-error messages, if any.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Always true for a successful response.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "memory",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/ingest",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "profile_name",
									},
									map[string]any{
										"lit": "ingest",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_id}",
									"profiles",
									"{profile_name}",
									"ingest",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace_name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
										map[string]any{
											"name": "profile_name",
											"orig": "profile_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-profile",
										},
									},
								},
								"select": map[string]any{
									"$action": "ingest",
									"exist": []any{
										"account_id",
										"namespace_id",
										"profile_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/recall",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "profile_name",
									},
									map[string]any{
										"lit": "recall",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_id}",
									"profiles",
									"{profile_name}",
									"recall",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace_name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
										map[string]any{
											"name": "profile_name",
											"orig": "profile_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-profile",
										},
									},
								},
								"select": map[string]any{
									"$action": "recall",
									"exist": []any{
										"account_id",
										"namespace_id",
										"profile_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/remember",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "profile_name",
									},
									map[string]any{
										"lit": "remember",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_id}",
									"profiles",
									"{profile_name}",
									"remember",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace_name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
										map[string]any{
											"name": "profile_name",
											"orig": "profile_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-profile",
										},
									},
								},
								"select": map[string]any{
									"$action": "remember",
									"exist": []any{
										"account_id",
										"namespace_id",
										"profile_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/summary",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "profile_name",
									},
									map[string]any{
										"lit": "summary",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_id}",
									"profiles",
									"{profile_name}",
									"summary",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace_name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
										map[string]any{
											"name": "profile_name",
											"orig": "profile_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-profile",
										},
									},
								},
								"select": map[string]any{
									"$action": "summary",
									"exist": []any{
										"account_id",
										"namespace_id",
										"profile_name",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "profile_name",
									},
									map[string]any{
										"lit": "memories",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_id}",
									"profiles",
									"{profile_name}",
									"memories",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace_name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
										map[string]any{
											"name": "profile_name",
											"orig": "profile_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-profile",
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "01JSGCEXAMP1E0000000000000",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "session_id",
											"orig": "session_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "chat-session-42",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "fact",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"namespace_id",
										"per_page",
										"profile_name",
										"session_id",
										"type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_name",
									},
									map[string]any{
										"lit": "profiles",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_name}",
									"profiles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_name",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "eyJ2IjoxLCJuIjoibXktcHJvZmlsZSJ9",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"namespace_name",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "profile_id",
									},
									map[string]any{
										"lit": "memories",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_id}",
									"profiles",
									"{profile_id}",
									"memories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"memory_id": "id",
										"namespace_name": "namespace_id",
										"profile_name": "profile_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "memory_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01JSGCEXAMP1E0000000000000",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
										map[string]any{
											"name": "profile_id",
											"orig": "profile_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-profile",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"namespace_id",
										"profile_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "profile_id",
									},
									map[string]any{
										"lit": "memories",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_id}",
									"profiles",
									"{profile_id}",
									"memories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"memory_id": "id",
										"namespace_name": "namespace_id",
										"profile_name": "profile_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "memory_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01JSGCEXAMP1E0000000000000",
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
										map[string]any{
											"name": "profile_id",
											"orig": "profile_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-profile",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"namespace_id",
										"profile_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/sessions/{session_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "profile_id",
									},
									map[string]any{
										"lit": "sessions",
									},
									map[string]any{
										"var": "session_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_id}",
									"profiles",
									"{profile_id}",
									"sessions",
									"{session_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace_name": "namespace_id",
										"profile_name": "profile_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
										map[string]any{
											"name": "profile_id",
											"orig": "profile_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-profile",
										},
										map[string]any{
											"name": "session_id",
											"orig": "session_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "chat-session-44",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"namespace_id",
										"profile_id",
										"session_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "namespace_id",
									},
									map[string]any{
										"lit": "profiles",
									},
									map[string]any{
										"var": "profile_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{namespace_id}",
									"profiles",
									"{profile_name}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace_name": "namespace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "namespace_id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
										map[string]any{
											"name": "profile_name",
											"orig": "profile_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-profile",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"namespace_id",
										"profile_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.namespace",
						},
					},
				},
			},
			"namespace": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Always empty for a successful response.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Informational, non-error messages, if any.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Namespace name.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Always true for a successful response.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "namespace",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/agent-memory/namespaces",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/agent-memory/namespaces",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "asc",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "id",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"direction",
										"order",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/agent-memory/namespaces/{namespace_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "agent-memory",
									},
									map[string]any{
										"lit": "namespaces",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"agent-memory",
									"namespaces",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"namespace_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "namespace_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "support-agent",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"vectorize": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Specifies the description of the index.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "ids",
						"title": "Ids",
						"type": "`$ARRAY`",
						"short": "A list of vector identifiers to delete from the index indicated by the path.",
					},
					map[string]any{
						"name": "indexType",
						"title": "Index Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Specifies the type of metadata property to index.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "propertyName",
						"title": "Property Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Specifies the metadata property to index.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "vectorize",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "insert",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_name}",
									"insert",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
									"query": []any{
										map[string]any{
											"name": "unparsable_behavior",
											"orig": "unparsable_behavior",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "insert",
									"exist": []any{
										"account_id",
										"index_name",
										"unparsable_behavior",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/upsert",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "upsert",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_name}",
									"upsert",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
									"query": []any{
										map[string]any{
											"name": "unparsable_behavior",
											"orig": "unparsable_behavior",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "upsert",
									"exist": []any{
										"account_id",
										"index_name",
										"unparsable_behavior",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/create",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_id",
									},
									map[string]any{
										"lit": "metadata_index",
									},
									map[string]any{
										"lit": "create",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_id}",
									"metadata_index",
									"create",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"index_name": "index_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_id",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/delete",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_id",
									},
									map[string]any{
										"lit": "metadata_index",
									},
									map[string]any{
										"lit": "delete",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_id}",
									"metadata_index",
									"delete",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"index_name": "index_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_id",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/delete_by_ids",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "delete_by_ids",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_name}",
									"delete_by_ids",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/get_by_ids",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "get_by_ids",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_name}",
									"get_by_ids",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/query",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "query",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_name}",
									"query",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"$action": "query",
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/list",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "list",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_name}",
									"list",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
									"query": []any{
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "suUTaDY5PFUiRweVccnzyt9n75suNPbXHPshvCzue5mHjtj7Letjvzlza9eGj099",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"count",
										"cursor",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/list",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_id",
									},
									map[string]any{
										"lit": "metadata_index",
									},
									map[string]any{
										"lit": "list",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_id}",
									"metadata_index",
									"list",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"index_name": "index_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_id",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/info",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "info",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_name}",
									"info",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"v2",
									"indexes",
									"{index_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"vectorize_beta__deprecated": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Specifies the description of the index.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "ids",
						"title": "Ids",
						"type": "`$ARRAY`",
						"short": "A list of vector identifiers to delete from the index indicated by the path.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "vectorize_beta__deprecated",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "delete-by-ids",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
									"{index_name}",
									"delete-by-ids",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/get-by-ids",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "get-by-ids",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
									"{index_name}",
									"get-by-ids",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/insert",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "insert",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
									"{index_name}",
									"insert",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"$action": "insert",
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/query",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "query",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
									"{index_name}",
									"query",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"$action": "query",
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/upsert",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
									map[string]any{
										"lit": "upsert",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
									"{index_name}",
									"upsert",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"$action": "upsert",
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/vectorize/indexes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/vectorize/indexes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/vectorize/indexes/{index_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
									"{index_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/vectorize/indexes/{index_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
									"{index_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/vectorize/indexes/{index_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "vectorize",
									},
									map[string]any{
										"lit": "indexes",
									},
									map[string]any{
										"var": "index_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"vectorize",
									"indexes",
									"{index_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "index_name",
											"orig": "index_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example-index",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"index_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"workers_ai": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "extension",
						"title": "Extension",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "JSON object containing the selected model's input fields, such as prompt or messages.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "mimeType",
						"title": "Mime Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"short": "The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7)",
					},
					map[string]any{
						"name": "options",
						"title": "Options",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "output",
						"title": "Output",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"short": "Model-specific output.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "workers_ai",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai/run/{model_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "run",
									},
									map[string]any{
										"var": "model_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"run",
									"{model_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "model_name",
											"orig": "model_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "@cf/meta/llama-3.1-8b-instruct",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"model_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai/run",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "run",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai/tomarkdown",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "tomarkdown",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"tomarkdown",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai/authors/search",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "authors",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"authors",
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai/tasks/search",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "tasks",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"tasks",
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai/tomarkdown/supported",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "tomarkdown",
									},
									map[string]any{
										"lit": "supported",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"tomarkdown",
									"supported",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai/models/search",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "models",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"models",
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "author",
											"orig": "author",
											"type": "`$STRING`",
											"kind": "query",
											"example": "",
										},
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "hide_experimental",
											"orig": "hide_experimental",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "include_deprecated",
											"orig": "include_deprecated",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
											"example": "",
										},
										map[string]any{
											"name": "source",
											"orig": "source",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "task",
											"orig": "task",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Text Generation",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"author",
										"format",
										"hide_experimental",
										"include_deprecated",
										"page",
										"per_page",
										"search",
										"source",
										"task",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai/models/schema",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "models",
									},
									map[string]any{
										"lit": "schema",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"models",
									"schema",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "model",
											"orig": "model",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "@cf/meta/llama-3.1-8b-instruct",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"model",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"workers_ai_finetune": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "modified_at",
						"title": "Modified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "public",
						"title": "Public",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "workers_ai_finetune",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "finetunes",
									},
									map[string]any{
										"var": "finetune_id",
									},
									map[string]any{
										"lit": "finetune-assets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"finetunes",
									"{finetune_id}",
									"finetune-assets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "finetune_id",
											"orig": "finetune_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "bc451aef-f723-4b26-a6b2-901afd2e7a8a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"finetune_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/ai/finetunes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "finetunes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"finetunes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai/finetunes/public",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "finetunes",
									},
									map[string]any{
										"lit": "public",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"finetunes",
									"public",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"limit",
										"offset",
										"order_by",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/ai/finetunes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "finetunes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"finetunes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/ai/finetunes/{finetune_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "finetunes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"ai",
									"finetunes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"finetune_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "finetune_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "bc451aef-f723-4b26-a6b2-901afd2e7a8a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
