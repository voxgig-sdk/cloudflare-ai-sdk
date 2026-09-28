
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'CloudflareAi',
        slug: "cloudflare-ai",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://api.cloudflare.com/client/v4",

    auth: {
      prefix: '',
      name: 'X-Auth-Email',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        account: {
        },
  
        ai_gateway: {
        },
  
        ai_gateway_custom_domain: {
        },
  
        ai_gateway_custom_provider: {
        },
  
        ai_gateway_custom_provider_cost: {
        },
  
        ai_gateway_dataset: {
        },
  
        ai_gateway_dynamic_route: {
        },
  
        ai_gateway_evaluation: {
        },
  
        ai_gateway_gateway: {
        },
  
        ai_gateway_log: {
        },
  
        ai_gateway_provider_config: {
        },
  
        ai_search_account_search: {
        },
  
        ai_search_instance: {
        },
  
        ai_search_instances_item: {
        },
  
        ai_search_instances_job: {
        },
  
        ai_search_namespace: {
        },
  
        ai_search_token: {
        },
  
        aig_billing_create_topup: {
        },
  
        aig_billing_delete_spending_limit: {
        },
  
        aig_billing_delete_topup_config: {
        },
  
        aig_billing_get_credit_balance: {
        },
  
        aig_billing_get_invoice_history: {
        },
  
        aig_billing_get_invoice_preview: {
        },
  
        aig_billing_get_spending_limit: {
        },
  
        aig_billing_get_topup_config: {
        },
  
        aig_billing_get_topup_eligibility: {
        },
  
        aig_billing_get_topup_limit: {
        },
  
        aig_billing_get_usage_history: {
        },
  
        aig_billing_set_spending_limit: {
        },
  
        aig_billing_set_topup_config: {
        },
  
        aig_billing_topup_status: {
        },
  
        auto_rag_job: {
        },
  
        auto_rag_rag: {
        },
  
        auto_rag_rag_search: {
        },
  
        finetune_asset: {
        },
  
        vectorize: {
        },
  
        vectorize_beta__deprecated: {
        },
  
        workers_ai: {
        },
  
        workers_ai_finetune: {
        },
  
    }
  }


  entity = {
    "account": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "account",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/logging-state",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "logging-state"
                }
              ],
              "parts": [
                "accounts",
                "{id}",
                "ai-gateway",
                "logging-state"
              ],
              "rename": {
                "param": {
                  "account_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "ai_gateway_logging_state",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/ai-gateway/logging-state",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "logging-state"
                }
              ],
              "parts": [
                "accounts",
                "{id}",
                "ai-gateway",
                "logging-state"
              ],
              "rename": {
                "param": {
                  "account_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "ai_gateway_logging_state",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "ai_gateway": {
      "fields": [
        {
          "name": "byokAlias",
          "title": "Byok Alias",
          "type": "`$STRING`"
        },
        {
          "name": "items",
          "title": "Items",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "limit",
          "title": "Limit",
          "type": "`$INTEGER`"
        },
        {
          "name": "metadata",
          "title": "Metadata",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "options",
          "title": "Options",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "provider",
          "title": "Provider",
          "type": "`$STRING`"
        },
        {
          "name": "query",
          "title": "Query",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "ai_gateway",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai/websearch",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "websearch"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "websearch"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "byokAlias": "`reqdata.byok_alia`",
                  "limit": "`reqdata.limit`",
                  "options": "`reqdata.option`",
                  "provider": "`reqdata.provider`",
                  "query": "`reqdata.query`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_gateway_custom_domain": {
      "fields": [
        {
          "name": "cname_target",
          "title": "Cname Target",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$INTEGER`",
          "req": true,
          "short": "epoch milliseconds"
        },
        {
          "name": "domain",
          "title": "Domain",
          "type": "`$STRING`",
          "req": true,
          "short": "Custom hostname that you own, such as `ai.example.com`."
        },
        {
          "name": "gateway_id",
          "title": "Gateway Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier of the AI Gateway within the account."
        },
        {
          "name": "hostname",
          "title": "Hostname",
          "type": "`$STRING`",
          "req": true,
          "short": "Custom hostname that you own, such as `ai.example.com`."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "minTLS",
          "title": "Min Tls",
          "type": "`$STRING`"
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$INTEGER`",
          "req": true,
          "short": "epoch milliseconds"
        },
        {
          "name": "ssl_hostname_id",
          "title": "Ssl Hostname Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "zone_id",
          "title": "Zone Id",
          "type": "`$STRING`",
          "req": true,
          "short": "ID of the Cloudflare zone that contains the custom hostname."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_gateway_custom_domain",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "custom-domains"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "custom-domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "custom-domains"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "custom-domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "page",
                  "per_page",
                  "search",
                  "status"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "custom-domains"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "custom-domains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "hostname": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "hostname",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "ai.acme.com"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "custom-domains"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "custom-domains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "hostname": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "hostname",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "ai.acme.com"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_gateway_custom_provider": {
      "fields": [
        {
          "name": "base_url",
          "title": "Base Url",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "format": "uri"
        },
        {
          "name": "beta",
          "title": "Beta",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "curl_example",
          "title": "Curl Example",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`"
        },
        {
          "name": "enable",
          "title": "Enable",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "headers",
          "title": "Headers",
          "type": "`$STRING`",
          "short": "JSON object of extra HTTP headers that AI Gateway sends to the provider."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "js_example",
          "title": "Js Example",
          "type": "`$STRING`"
        },
        {
          "name": "link",
          "title": "Link",
          "type": "`$STRING`"
        },
        {
          "name": "logo",
          "title": "Logo",
          "type": "`$STRING`"
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "position",
          "title": "Position",
          "type": "`$INTEGER`"
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_gateway_custom_provider",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  }
                ],
                "query": [
                  {
                    "name": "beta",
                    "orig": "beta",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "enable",
                    "orig": "enable",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "beta",
                  "enable",
                  "page",
                  "per_page",
                  "search"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_gateway_custom_provider_cost": {
      "fields": [
        {
          "name": "account_provider_id",
          "title": "Account Provider Id",
          "type": "`$STRING`",
          "req": true,
          "short": "ID of the custom provider that the pricing rule applies to.",
          "format": "uuid"
        },
        {
          "name": "changed_by",
          "title": "Changed By",
          "type": "`$STRING`"
        },
        {
          "name": "cost_in",
          "title": "Cost In",
          "type": "`$NUMBER`"
        },
        {
          "name": "cost_out",
          "title": "Cost Out",
          "type": "`$NUMBER`"
        },
        {
          "name": "cost_type",
          "title": "Cost Type",
          "type": "`$STRING`"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "enable",
          "title": "Enable",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "model",
          "title": "Model",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "model_rule",
          "title": "Model Rule",
          "type": "`$STRING`"
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "token_pricing",
          "title": "Token Pricing",
          "type": "`$STRING`"
        },
        {
          "name": "weight",
          "title": "Weight",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_gateway_custom_provider_cost",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                },
                {
                  "lit": "costs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers",
                "costs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                },
                {
                  "lit": "costs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers",
                "costs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  }
                ],
                "query": [
                  {
                    "name": "account_provider_id",
                    "orig": "account_provider_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "cost_type",
                    "orig": "cost_type",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "tokens"
                  },
                  {
                    "name": "enable",
                    "orig": "enable",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "model_rule",
                    "orig": "model_rule",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "equals"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "account_provider_id",
                  "cost_type",
                  "enable",
                  "model_rule",
                  "page",
                  "per_page",
                  "search"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                },
                {
                  "lit": "costs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers",
                "costs",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                },
                {
                  "lit": "costs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers",
                "costs",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/ai-gateway/custom-providers/costs/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "custom-providers"
                },
                {
                  "lit": "costs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "custom-providers",
                "costs",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_gateway_dataset": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "enable",
          "title": "Enable",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "filters",
          "title": "Filters",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "gateway_id",
          "title": "Gateway Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier of the AI Gateway within the account."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_gateway_dataset",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "datasets"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "datasets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "datasets"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "datasets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ],
                "query": [
                  {
                    "name": "enable",
                    "orig": "enable",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "enable",
                  "gateway_id",
                  "name",
                  "page",
                  "per_page",
                  "search"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "datasets"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "datasets",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "datasets"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "datasets",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "datasets"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "datasets",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_gateway_dynamic_route": {
      "fields": [
        {
          "name": "account_tag",
          "title": "Account Tag",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "active",
          "title": "Active",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "deployment",
          "title": "Deployment",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "deployments",
          "title": "Deployments",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "elements",
          "title": "Elements",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "gateway_id",
          "title": "Gateway Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "is_valid",
          "title": "Is Valid",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "order_by",
          "title": "Order By",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "order_by_direction",
          "title": "Order By Direction",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "page",
          "title": "Page",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "per_page",
          "title": "Per Page",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "routes",
          "title": "Routes",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "version",
          "title": "Version",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "version_id",
          "title": "Version Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "versions",
          "title": "Versions",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_gateway_dynamic_route",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "route_id"
                },
                {
                  "lit": "deployments"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes",
                "{route_id}",
                "deployments"
              ],
              "rename": {
                "param": {
                  "id": "route_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  },
                  {
                    "name": "route_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "route_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "route_id"
                },
                {
                  "lit": "versions"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes",
                "{route_id}",
                "versions"
              ],
              "rename": {
                "param": {
                  "id": "route_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  },
                  {
                    "name": "route_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "route_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "page",
                  "per_page"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions/{version_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "route_id"
                },
                {
                  "lit": "versions"
                },
                {
                  "var": "version_id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes",
                "{route_id}",
                "versions",
                "{version_id}"
              ],
              "rename": {
                "param": {
                  "id": "route_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  },
                  {
                    "name": "route_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  },
                  {
                    "name": "version_id",
                    "orig": "version_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "route_id",
                  "version_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "route_id"
                },
                {
                  "lit": "deployments"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes",
                "{route_id}",
                "deployments"
              ],
              "rename": {
                "param": {
                  "id": "route_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  },
                  {
                    "name": "route_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "route_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "route_id"
                },
                {
                  "lit": "versions"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes",
                "{route_id}",
                "versions"
              ],
              "rename": {
                "param": {
                  "id": "route_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  },
                  {
                    "name": "route_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "route_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "routes"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "routes",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.route`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "54442216"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_gateway_evaluation": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "dataset_ids",
          "title": "Dataset Ids",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "datasets",
          "title": "Datasets",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "enable",
          "title": "Enable",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "evaluation_type_ids",
          "title": "Evaluation Type Ids",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "gateway_id",
          "title": "Gateway Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier of the AI Gateway within the account."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "mandatory",
          "title": "Mandatory",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "processed",
          "title": "Processed",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "results",
          "title": "Results",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "total_logs",
          "title": "Total Logs",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_gateway_evaluation",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "evaluations"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "evaluations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "evaluations"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "evaluations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ],
                "query": [
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "processed",
                    "orig": "processed",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "name",
                  "page",
                  "per_page",
                  "processed",
                  "search"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/evaluation-types",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "evaluation-types"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "evaluation-types"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  }
                ],
                "query": [
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "mandatory"
                  },
                  {
                    "name": "order_by_direction",
                    "orig": "order_by_direction",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "desc"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "order_by",
                  "order_by_direction",
                  "page",
                  "per_page"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "evaluations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "evaluations",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "evaluations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "evaluations",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_gateway_gateway": {
      "fields": [
        {
          "name": "authentication",
          "title": "Authentication",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "byok_only",
          "title": "Byok Only",
          "type": "`$BOOLEAN`",
          "short": "Requires customer-provided provider credentials and prevents fallback to Unified Billing."
        },
        {
          "name": "cache_invalidate_on_update",
          "title": "Cache Invalidate On Update",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "cache_ttl",
          "title": "Cache Ttl",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "collect_logs",
          "title": "Collect Logs",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "dlp",
          "title": "Dlp",
          "type": "`$ANY`"
        },
        {
          "name": "guardrails",
          "title": "Guardrails",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier of the AI Gateway within the account."
        },
        {
          "name": "is_default",
          "title": "Is Default",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_classification",
          "title": "Log Classification",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_management",
          "title": "Log Management",
          "type": "`$INTEGER`"
        },
        {
          "name": "log_management_strategy",
          "title": "Log Management Strategy",
          "type": "`$STRING`"
        },
        {
          "name": "logpush",
          "title": "Logpush",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "logpush_public_key",
          "title": "Logpush Public Key",
          "type": "`$STRING`"
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "otel",
          "title": "Otel",
          "type": "`$ARRAY`"
        },
        {
          "name": "rate_limiting_interval",
          "title": "Rate Limiting Interval",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "rate_limiting_limit",
          "title": "Rate Limiting Limit",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "rate_limiting_technique",
          "title": "Rate Limiting Technique",
          "type": "`$STRING`"
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "retry_backoff",
          "title": "Retry Backoff",
          "type": "`$STRING`",
          "short": "Backoff strategy for retry delays"
        },
        {
          "name": "retry_delay",
          "title": "Retry Delay",
          "type": "`$INTEGER`",
          "short": "Delay between retry attempts in milliseconds (0-60000)"
        },
        {
          "name": "retry_max_attempts",
          "title": "Retry Max Attempts",
          "type": "`$INTEGER`",
          "short": "Maximum number of retry attempts for failed requests (1-5)"
        },
        {
          "name": "spend_limits",
          "title": "Spend Limits",
          "type": "`$OBJECT`"
        },
        {
          "name": "store_id",
          "title": "Store Id",
          "type": "`$STRING`"
        },
        {
          "name": "stripe",
          "title": "Stripe",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "workers_ai_billing_mode",
          "title": "Workers Ai Billing Mode",
          "type": "`$STRING`",
          "short": "Controls how Workers AI inference calls routed through this gateway are billed."
        },
        {
          "name": "zdr",
          "title": "Zdr",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_gateway_gateway",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/gateways",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "page",
                  "per_page",
                  "search"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "url"
                },
                {
                  "var": "provider"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "url",
                "{provider}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "provider",
                    "orig": "provider",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "workers-ai"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "provider"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_gateway_log": {
      "fields": [
        {
          "name": "cached",
          "title": "Cached",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "cost",
          "title": "Cost",
          "type": "`$NUMBER`"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "custom_cost",
          "title": "Custom Cost",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "duration",
          "title": "Duration",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "feedback",
          "title": "Feedback",
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "metadata",
          "title": "Metadata",
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "title": "Model",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "model_type",
          "title": "Model Type",
          "type": "`$STRING`"
        },
        {
          "name": "path",
          "title": "Path",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "provider",
          "title": "Provider",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "request_content_type",
          "title": "Request Content Type",
          "type": "`$STRING`"
        },
        {
          "name": "request_head",
          "title": "Request Head",
          "type": "`$STRING`"
        },
        {
          "name": "request_head_complete",
          "title": "Request Head Complete",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "request_size",
          "title": "Request Size",
          "type": "`$INTEGER`"
        },
        {
          "name": "request_type",
          "title": "Request Type",
          "type": "`$STRING`"
        },
        {
          "name": "response_content_type",
          "title": "Response Content Type",
          "type": "`$STRING`"
        },
        {
          "name": "response_head",
          "title": "Response Head",
          "type": "`$STRING`"
        },
        {
          "name": "response_head_complete",
          "title": "Response Head Complete",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "response_size",
          "title": "Response Size",
          "type": "`$INTEGER`"
        },
        {
          "name": "score",
          "title": "Score",
          "type": "`$NUMBER`"
        },
        {
          "name": "status_code",
          "title": "Status Code",
          "type": "`$INTEGER`"
        },
        {
          "name": "step",
          "title": "Step",
          "type": "`$INTEGER`"
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "tokens_in",
          "title": "Tokens In",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "tokens_out",
          "title": "Tokens Out",
          "type": "`$INTEGER`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_gateway_log",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "logs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ],
                "query": [
                  {
                    "name": "cached",
                    "orig": "cached",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "direction",
                    "orig": "direction",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "feedback",
                    "orig": "feedback",
                    "type": "`$ANY`",
                    "kind": "query"
                  },
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "max_cost",
                    "orig": "max_cost",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "max_duration",
                    "orig": "max_duration",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "max_tokens_in",
                    "orig": "max_tokens_in",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "max_tokens_out",
                    "orig": "max_tokens_out",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "max_total_token",
                    "orig": "max_total_token",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "meta_info",
                    "orig": "meta_info",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "min_cost",
                    "orig": "min_cost",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "min_duration",
                    "orig": "min_duration",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "min_tokens_in",
                    "orig": "min_tokens_in",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "min_tokens_out",
                    "orig": "min_tokens_out",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "min_total_token",
                    "orig": "min_total_token",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "model",
                    "orig": "model",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "model_type",
                    "orig": "model_type",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "created_at"
                  },
                  {
                    "name": "order_by_direction",
                    "orig": "order_by_direction",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "desc"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "provider",
                    "orig": "provider",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "request_content_type",
                    "orig": "request_content_type",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "response_content_type",
                    "orig": "response_content_type",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "success",
                    "orig": "success",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
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
                  "success"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "logs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "logs",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/request",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "logs"
                },
                {
                  "var": "log_id"
                },
                {
                  "lit": "request"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "logs",
                "{log_id}",
                "request"
              ],
              "rename": {
                "param": {
                  "id": "log_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "log_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "log_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/response",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "logs"
                },
                {
                  "var": "log_id"
                },
                {
                  "lit": "response"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "logs",
                "{log_id}",
                "response"
              ],
              "rename": {
                "param": {
                  "id": "log_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "log_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "log_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "logs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ],
                "query": [
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10000
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "created_at"
                  },
                  {
                    "name": "order_by_direction",
                    "orig": "order_by_direction",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "asc"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "filter",
                  "gateway_id",
                  "limit",
                  "order_by",
                  "order_by_direction"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "logs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "logs",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0d37909e38d3e99c29fa2cd343ac421a"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_gateway_provider_config": {
      "fields": [
        {
          "name": "alias",
          "title": "Alias",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "default_config",
          "title": "Default Config",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "gateway_id",
          "title": "Gateway Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier of the AI Gateway within the account."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "provider_slug",
          "title": "Provider Slug",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "rate_limit",
          "title": "Rate Limit",
          "type": "`$NUMBER`"
        },
        {
          "name": "rate_limit_period",
          "title": "Rate Limit Period",
          "type": "`$NUMBER`"
        },
        {
          "name": "secret",
          "title": "Secret",
          "type": "`$STRING`",
          "op": {
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Provider API key to store in the Secrets Store configured on the gateway."
        },
        {
          "name": "secret_id",
          "title": "Secret Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "secret_preview",
          "title": "Secret Preview",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_gateway_provider_config",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "provider_configs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "provider_configs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "provider_configs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "provider_configs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "page",
                  "per_page"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "provider_configs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "provider_configs",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "gateways"
                },
                {
                  "var": "gateway_id"
                },
                {
                  "lit": "provider_configs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "gateways",
                "{gateway_id}",
                "provider_configs",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0"
                  },
                  {
                    "name": "gateway_id",
                    "orig": "gateway_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-gateway"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "gateway_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_search_account_search": {
      "fields": [
        {
          "name": "ai_search_options",
          "title": "Ai Search Options",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "choices",
          "title": "Choices",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "chunks",
          "title": "Chunks",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "op": {
            "create": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "OpenAI-compatible message array."
        },
        {
          "name": "model",
          "title": "Model",
          "type": "`$STRING`",
          "short": "A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`"
        },
        {
          "name": "query",
          "title": "Query",
          "type": "`$STRING`",
          "short": "A simple text query string."
        },
        {
          "name": "query_kind",
          "title": "Query Kind",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "search_query",
          "title": "Search Query",
          "type": "`$STRING`"
        },
        {
          "name": "stream",
          "title": "Stream",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_search_account_search",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/search",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "name"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{name}",
                "search"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/chat/completions",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "chat"
                },
                {
                  "lit": "completions"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "chat",
                "completions"
              ],
              "rename": {
                "param": {
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "namespace_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_search_instance": {
      "fields": [
        {
          "name": "ai_gateway_id",
          "title": "Ai Gateway Id",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "ai_search_model",
          "title": "Ai Search Model",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API."
        },
        {
          "name": "ai_search_options",
          "title": "Ai Search Options",
          "type": "`$OBJECT`"
        },
        {
          "name": "cache",
          "title": "Cache",
          "type": "`$BOOLEAN`",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "cache_threshold",
          "title": "Cache Threshold",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "cache_ttl",
          "title": "Cache Ttl",
          "type": "`$ANY`",
          "op": {
            "list": {
              "req": true,
              "type": "`$ANY`"
            }
          },
          "short": "Cache entry TTL in seconds."
        },
        {
          "name": "choices",
          "title": "Choices",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "chunk",
          "title": "Chunk",
          "type": "`$BOOLEAN`",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "chunk_overlap",
          "title": "Chunk Overlap",
          "type": "`$INTEGER`",
          "op": {
            "list": {
              "req": true,
              "type": "`$NUMBER`"
            }
          }
        },
        {
          "name": "chunk_size",
          "title": "Chunk Size",
          "type": "`$INTEGER`",
          "op": {
            "list": {
              "req": true,
              "type": "`$NUMBER`"
            }
          }
        },
        {
          "name": "chunks",
          "title": "Chunks",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "completed",
          "title": "Completed",
          "type": "`$INTEGER`"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "date-time"
        },
        {
          "name": "created_by",
          "title": "Created By",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "readOnly": true
        },
        {
          "name": "custom_metadata",
          "title": "Custom Metadata",
          "type": "`$ARRAY`",
          "op": {
            "list": {
              "req": true,
              "type": "`$ARRAY`"
            }
          }
        },
        {
          "name": "degraded",
          "title": "Degraded",
          "type": "`$BOOLEAN`",
          "short": "True when status counts are unavailable (e.g."
        },
        {
          "name": "embedding_model",
          "title": "Embedding Model",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "enable",
          "title": "Enable",
          "type": "`$BOOLEAN`",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "engine",
          "title": "Engine",
          "type": "`$OBJECT`",
          "short": "Engine-specific metadata."
        },
        {
          "name": "engine_version",
          "title": "Engine Version",
          "type": "`$NUMBER`",
          "op": {
            "list": {
              "req": true,
              "type": "`$NUMBER`"
            }
          },
          "readOnly": true
        },
        {
          "name": "error",
          "title": "Error",
          "type": "`$INTEGER`"
        },
        {
          "name": "file_embed_errors",
          "title": "File Embed Errors",
          "type": "`$OBJECT`"
        },
        {
          "name": "fusion_method",
          "title": "Fusion Method",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hybrid_search_enabled",
          "title": "Hybrid Search Enabled",
          "type": "`$BOOLEAN`",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Deprecated — use index_method instead.",
          "deprecated": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "short": "AI Search instance ID."
        },
        {
          "name": "index_method",
          "title": "Index Method",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Controls which storage backends are used during indexing."
        },
        {
          "name": "index_source_errors",
          "title": "Index Source Errors",
          "type": "`$OBJECT`"
        },
        {
          "name": "indexing_options",
          "title": "Indexing Options",
          "type": "`$OBJECT`",
          "op": {
            "list": {
              "req": true,
              "type": "`$OBJECT`"
            }
          }
        },
        {
          "name": "last_activity",
          "title": "Last Activity",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "readOnly": true,
          "format": "date-time"
        },
        {
          "name": "max_num_results",
          "title": "Max Num Results",
          "type": "`$INTEGER`",
          "op": {
            "list": {
              "req": true,
              "type": "`$NUMBER`"
            }
          }
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "metadata",
          "title": "Metadata",
          "type": "`$OBJECT`",
          "op": {
            "list": {
              "req": true,
              "type": "`$OBJECT`"
            }
          }
        },
        {
          "name": "model",
          "title": "Model",
          "type": "`$STRING`",
          "short": "A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API."
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "date-time"
        },
        {
          "name": "modified_by",
          "title": "Modified By",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "readOnly": true
        },
        {
          "name": "namespace",
          "title": "Namespace",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "readOnly": true
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`"
        },
        {
          "name": "outdated",
          "title": "Outdated",
          "type": "`$INTEGER`"
        },
        {
          "name": "paused",
          "title": "Paused",
          "type": "`$BOOLEAN`",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "public_endpoint_id",
          "title": "Public Endpoint Id",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "readOnly": true
        },
        {
          "name": "public_endpoint_params",
          "title": "Public Endpoint Params",
          "type": "`$OBJECT`",
          "op": {
            "list": {
              "req": true,
              "type": "`$OBJECT`"
            }
          }
        },
        {
          "name": "queued",
          "title": "Queued",
          "type": "`$INTEGER`"
        },
        {
          "name": "reranking",
          "title": "Reranking",
          "type": "`$BOOLEAN`",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "reranking_model",
          "title": "Reranking Model",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "retrieval_options",
          "title": "Retrieval Options",
          "type": "`$OBJECT`",
          "op": {
            "list": {
              "req": true,
              "type": "`$OBJECT`"
            }
          }
        },
        {
          "name": "rewrite_model",
          "title": "Rewrite Model",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API."
        },
        {
          "name": "rewrite_query",
          "title": "Rewrite Query",
          "type": "`$BOOLEAN`",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "running",
          "title": "Running",
          "type": "`$INTEGER`"
        },
        {
          "name": "score_threshold",
          "title": "Score Threshold",
          "type": "`$NUMBER`",
          "op": {
            "list": {
              "req": true,
              "type": "`$NUMBER`"
            }
          }
        },
        {
          "name": "skipped",
          "title": "Skipped",
          "type": "`$INTEGER`"
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "source_params",
          "title": "Source Params",
          "type": "`$OBJECT`",
          "op": {
            "list": {
              "req": true,
              "type": "`$OBJECT`"
            }
          }
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "readOnly": true
        },
        {
          "name": "stream",
          "title": "Stream",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "summarization",
          "title": "Summarization",
          "type": "`$BOOLEAN`",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "summarization_model",
          "title": "Summarization Model",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sync_interval",
          "title": "Sync Interval",
          "type": "`$ANY`",
          "op": {
            "list": {
              "req": true,
              "type": "`$ANY`"
            }
          },
          "short": "Interval between automatic syncs, in seconds."
        },
        {
          "name": "system_prompt_ai_search",
          "title": "System Prompt Ai Search",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "system_prompt_index_summarization",
          "title": "System Prompt Index Summarization",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "system_prompt_rewrite_query",
          "title": "System Prompt Rewrite Query",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "token_id",
          "title": "Token Id",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "format": "uuid"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Source type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_search_instance",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/chat/completions",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "chat"
                },
                {
                  "lit": "completions"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "chat",
                "completions"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/purge_cache",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "purge_cache"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "purge_cache"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "$action": "purge_cache",
                "exist": [
                  "account_id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/search",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "search"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "$action": "search",
                "exist": [
                  "account_id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}/chat/completions",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "chat"
                },
                {
                  "lit": "completions"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{instance_id}",
                "chat",
                "completions"
              ],
              "rename": {
                "param": {
                  "id": "instance_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}/search",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{instance_id}",
                "search"
              ],
              "rename": {
                "param": {
                  "id": "instance_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ]
              },
              "select": {
                "$action": "search",
                "exist": [
                  "account_id",
                  "instance_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "name"
                },
                {
                  "lit": "instances"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{name}",
                "instances"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/instances",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "name"
                },
                {
                  "lit": "instances"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{name}",
                "instances"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ],
                "query": [
                  {
                    "name": "hostname",
                    "orig": "hostname",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "namespace",
                    "orig": "namespace",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "created_at"
                  },
                  {
                    "name": "order_by_direction",
                    "orig": "order_by_direction",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "desc"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "hostname",
                  "name",
                  "namespace",
                  "order_by",
                  "order_by_direction",
                  "page",
                  "per_page",
                  "search"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/instances",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  }
                ],
                "query": [
                  {
                    "name": "hostname",
                    "orig": "hostname",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "namespace",
                    "orig": "namespace",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "created_at"
                  },
                  {
                    "name": "order_by_direction",
                    "orig": "order_by_direction",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "desc"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "hostname",
                  "namespace",
                  "order_by",
                  "order_by_direction",
                  "page",
                  "per_page",
                  "search"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{id}"
              ],
              "rename": {
                "param": {
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/stats",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "stats"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "stats"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}/stats",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "stats"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{instance_id}",
                "stats"
              ],
              "rename": {
                "param": {
                  "id": "instance_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{id}"
              ],
              "rename": {
                "param": {
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{id}"
              ],
              "rename": {
                "param": {
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_search_instances_item": {
      "fields": [
        {
          "name": "action",
          "title": "Action",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "checksum",
          "title": "Checksum",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "chunkCount",
          "title": "Chunk Count",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "chunks_count",
          "title": "Chunks Count",
          "type": "`$INTEGER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "date-time"
        },
        {
          "name": "end_byte",
          "title": "End Byte",
          "type": "`$NUMBER`"
        },
        {
          "name": "error",
          "title": "Error",
          "type": "`$STRING`",
          "readOnly": true
        },
        {
          "name": "errorType",
          "title": "Error Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "fileKey",
          "title": "File Key",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "file_size",
          "title": "File Size",
          "type": "`$NUMBER`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "item",
          "title": "Item",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "req": true,
          "short": "Item key / filename.",
          "readOnly": true
        },
        {
          "name": "last_seen_at",
          "title": "Last Seen At",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "date-time"
        },
        {
          "name": "message",
          "title": "Message",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "metadata",
          "title": "Metadata",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Built-in, configured filterable, and retained source metadata for the item.",
          "readOnly": true
        },
        {
          "name": "namespace",
          "title": "Namespace",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "next_action",
          "title": "Next Action",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "processingTimeMs",
          "title": "Processing Time Ms",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "source_id",
          "title": "Source Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Identifies which data source this item belongs to.",
          "readOnly": true
        },
        {
          "name": "start_byte",
          "title": "Start Byte",
          "type": "`$NUMBER`"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "timestamp",
          "title": "Timestamp",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "wait_for_completion",
          "title": "Wait For Completion",
          "type": "`$BOOLEAN`",
          "short": "Wait for indexing to fully complete before responding."
        },
        {
          "name": "warnings",
          "title": "Warnings",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_search_instances_item",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "items"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "items"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "items"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "items"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ],
                "query": [
                  {
                    "name": "item_id",
                    "orig": "item_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "key",
                    "orig": "key",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "metadata_filter",
                    "orig": "metadata_filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort_by",
                    "orig": "sort_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "status"
                  },
                  {
                    "name": "source",
                    "orig": "source",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
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
                  "status"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/logs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "items"
                },
                {
                  "var": "item_id"
                },
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "items",
                "{item_id}",
                "logs"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "item_id",
                    "orig": "item_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ],
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 50
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "cursor",
                  "instance_id",
                  "item_id",
                  "limit",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/chunks",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "items"
                },
                {
                  "var": "item_id"
                },
                {
                  "lit": "chunks"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "items",
                "{item_id}",
                "chunks"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "item_id",
                    "orig": "item_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ],
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "item_id",
                  "limit",
                  "namespace_id",
                  "offset"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "items"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "items",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "item_id": "id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "item_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/download",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "items"
                },
                {
                  "var": "item_id"
                },
                {
                  "lit": "download"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "items",
                "{item_id}",
                "download"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "item_id",
                    "orig": "item_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "item_id",
                  "namespace_id"
                ]
              }
            }
          ]
        },
        "patch": {
          "input": "data",
          "name": "patch",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "items"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "items",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "item_id": "id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "item_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "items"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "items",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "item_id": "id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "item_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "items"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "items"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_search_instances_job": {
      "fields": [
        {
          "name": "action",
          "title": "Action",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`"
        },
        {
          "name": "end_reason",
          "title": "End Reason",
          "type": "`$STRING`"
        },
        {
          "name": "ended_at",
          "title": "Ended At",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "last_seen_at",
          "title": "Last Seen At",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "title": "Message",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "message_type",
          "title": "Message Type",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "started_at",
          "title": "Started At",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_search_instances_job",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "jobs"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{instance_id}",
                "jobs"
              ],
              "rename": {
                "param": {
                  "id": "instance_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}/logs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                },
                {
                  "var": "job_id"
                },
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "jobs",
                "{job_id}",
                "logs"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "job_id",
                    "orig": "job_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "job_id",
                  "namespace_id",
                  "page",
                  "per_page"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                },
                {
                  "var": "job_id"
                },
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{instance_id}",
                "jobs",
                "{job_id}",
                "logs"
              ],
              "rename": {
                "param": {
                  "id": "instance_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "job_id",
                    "orig": "job_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "job_id",
                  "page",
                  "per_page"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "jobs"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "namespace_id",
                  "page",
                  "per_page"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{instance_id}",
                "jobs"
              ],
              "rename": {
                "param": {
                  "id": "instance_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "instance_id",
                  "page",
                  "per_page"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "jobs",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "job_id": "id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "job_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{instance_id}",
                "jobs",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "job_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "job_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "instance_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{instance_id}",
                "jobs",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "job_id": "id",
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "job_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-namespace"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "instance_id",
                  "namespace_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "instance_id"
                },
                {
                  "lit": "jobs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "instances",
                "{instance_id}",
                "jobs",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "instance_id",
                  "job_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "job_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "instance_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-ai-search"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "instance_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_search_namespace": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "date-time"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Optional description for the namespace."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "new_namespace",
          "title": "New Namespace",
          "type": "`$STRING`",
          "req": true,
          "short": "Target namespace to move the instance into."
        },
        {
          "name": "public_endpoint_id",
          "title": "Public Endpoint Id",
          "type": "`$STRING`",
          "readOnly": true
        },
        {
          "name": "public_endpoint_params",
          "title": "Public Endpoint Params",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_search_namespace",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/namespaces",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "prod"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "page",
                  "per_page",
                  "search"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{id}"
              ],
              "rename": {
                "param": {
                  "name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "production"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "patch": {
          "input": "data",
          "name": "patch",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "namespace_id"
                },
                {
                  "lit": "instances"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{namespace_id}",
                "instances",
                "{id}"
              ],
              "rename": {
                "param": {
                  "name": "namespace_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-blog"
                  },
                  {
                    "name": "namespace_id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "production"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "namespace_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{id}"
              ],
              "rename": {
                "param": {
                  "name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "production"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/accounts/{account_id}/ai-search/namespaces/{name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "namespaces"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "namespaces",
                "{id}"
              ],
              "rename": {
                "param": {
                  "name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "production"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "ai_search_token": {
      "fields": [
        {
          "name": "cf_api_id",
          "title": "Cf Api Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "cf_api_key",
          "title": "Cf Api Key",
          "type": "`$STRING`",
          "req": true,
          "writeOnly": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "date-time"
        },
        {
          "name": "created_by",
          "title": "Created By",
          "type": "`$STRING`",
          "readOnly": true
        },
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "legacy",
          "title": "Legacy",
          "type": "`$BOOLEAN`",
          "readOnly": true
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "readOnly": true,
          "format": "date-time"
        },
        {
          "name": "modified_by",
          "title": "Modified By",
          "type": "`$STRING`",
          "readOnly": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ai_search_token",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-search/tokens",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "tokens"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "tokens"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/tokens",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "tokens"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "tokens"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "my-token"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "page",
                  "per_page",
                  "search"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-search/tokens/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "tokens"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "tokens",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "62af0db3-c410-40b2-9ee3-0e93f6dd1de0"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-search/tokens/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "tokens"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "tokens",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "62af0db3-c410-40b2-9ee3-0e93f6dd1de0"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/accounts/{account_id}/ai-search/tokens/{id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-search"
                },
                {
                  "lit": "tokens"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-search",
                "tokens",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "62af0db3-c410-40b2-9ee3-0e93f6dd1de0"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_create_topup": {
      "fields": [
        {
          "name": "amount",
          "title": "Amount",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Top-up amount in cents (min 1000)."
        },
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "payment_method_id",
          "title": "Payment Method Id",
          "type": "`$STRING`",
          "short": "Stripe PaymentMethod to charge instead of the customer's default payment method."
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_create_topup",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/billing/topup",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "topup"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "topup"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "amount": "`reqdata.amount`",
                  "payment_method_id": "`reqdata.payment_method_id`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_delete_spending_limit": {
      "fields": [],
      "name": "aig_billing_delete_spending_limit",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/billing/spending-limit",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "spending-limit"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "spending-limit"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_delete_topup_config": {
      "fields": [],
      "name": "aig_billing_delete_topup_config",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai-gateway/billing/topup/config",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "topup"
                },
                {
                  "lit": "config"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "topup",
                "config"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_get_credit_balance": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_get_credit_balance",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/billing/credit-balance",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "credit-balance"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "credit-balance"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_get_invoice_history": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_get_invoice_history",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/billing/invoice-history",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "invoice-history"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "invoice-history"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "all"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "type"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_get_invoice_preview": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_get_invoice_preview",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/billing/invoice-preview",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "invoice-preview"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "invoice-preview"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_get_spending_limit": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_get_spending_limit",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/billing/spending-limit",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "spending-limit"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "spending-limit"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_get_topup_config": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_get_topup_config",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/billing/topup/config",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "topup"
                },
                {
                  "lit": "config"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "topup",
                "config"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_get_topup_eligibility": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "payment_methods",
          "title": "Payment Methods",
          "type": "`$ARRAY`",
          "short": "Account-level payment methods, forwarded by the dashboard."
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_get_topup_eligibility",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/billing/topup/eligibility",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "topup"
                },
                {
                  "lit": "eligibility"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "topup",
                "eligibility"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_get_topup_limit": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_get_topup_limit",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/billing/topup/limits",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "topup"
                },
                {
                  "lit": "limits"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "topup",
                "limits"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_get_usage_history": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_get_usage_history",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai-gateway/billing/usage-history",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "usage-history"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "usage-history"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "end_time",
                    "orig": "end_time",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 1700086400000
                  },
                  {
                    "name": "start_time",
                    "orig": "start_time",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 1700000000000
                  },
                  {
                    "name": "value_grouping_window",
                    "orig": "value_grouping_window",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "day"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "end_time",
                  "start_time",
                  "value_grouping_window"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_set_spending_limit": {
      "fields": [
        {
          "name": "amount",
          "title": "Amount",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Spending limit amount in cents (min 100)."
        },
        {
          "name": "duration",
          "title": "Duration",
          "type": "`$STRING`",
          "req": true,
          "short": "Spending limit duration."
        },
        {
          "name": "strategy",
          "title": "Strategy",
          "type": "`$STRING`",
          "req": true,
          "short": "Spending limit strategy."
        }
      ],
      "name": "aig_billing_set_spending_limit",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/billing/spending-limit",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "spending-limit"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "spending-limit"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "amount": "`reqdata.amount`",
                  "duration": "`reqdata.duration`",
                  "strategy": "`reqdata.strategy`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_set_topup_config": {
      "fields": [
        {
          "name": "amount",
          "title": "Amount",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Auto top-up amount in cents (min 1000)."
        },
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "threshold",
          "title": "Threshold",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Balance threshold in cents that triggers auto top-up (min 500)."
        }
      ],
      "name": "aig_billing_set_topup_config",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/billing/topup/config",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "topup"
                },
                {
                  "lit": "config"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "topup",
                "config"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "amount": "`reqdata.amount`",
                  "threshold": "`reqdata.threshold`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "aig_billing_topup_status": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "payment_intent_id",
          "title": "Payment Intent Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Stripe invoice ID to check status for."
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result_info",
          "title": "Result Info",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "aig_billing_topup_status",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai-gateway/billing/topup/status",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai-gateway"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "topup"
                },
                {
                  "lit": "status"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai-gateway",
                "billing",
                "topup",
                "status"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "payment_intent_id": "`reqdata.payment_intent_id`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "auto_rag_job": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "end_reason",
          "title": "End Reason",
          "type": "`$STRING`"
        },
        {
          "name": "ended_at",
          "title": "Ended At",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "last_seen_at",
          "title": "Last Seen At",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "title": "Message",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "message_type",
          "title": "Message Type",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "started_at",
          "title": "Started At",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "auto_rag_job",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "autorag"
                },
                {
                  "lit": "rags"
                },
                {
                  "var": "rag_id"
                },
                {
                  "lit": "jobs"
                },
                {
                  "var": "job_id"
                },
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "autorag",
                "rags",
                "{rag_id}",
                "jobs",
                "{job_id}",
                "logs"
              ],
              "rename": {
                "param": {
                  "id": "rag_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "job_id",
                    "orig": "job_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "rag_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-rag"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "job_id",
                  "page",
                  "per_page",
                  "rag_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/autorag/rags/{id}/jobs",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "autorag"
                },
                {
                  "lit": "rags"
                },
                {
                  "var": "rag_id"
                },
                {
                  "lit": "jobs"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "autorag",
                "rags",
                "{rag_id}",
                "jobs"
              ],
              "rename": {
                "param": {
                  "id": "rag_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "rag_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-rag"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "page",
                  "per_page",
                  "rag_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "autorag"
                },
                {
                  "lit": "rags"
                },
                {
                  "var": "rag_id"
                },
                {
                  "lit": "jobs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "autorag",
                "rags",
                "{rag_id}",
                "jobs",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "rag_id",
                  "job_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "id",
                    "orig": "job_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "rag_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-rag"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id",
                  "rag_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "auto_rag_rag": {
      "fields": [
        {
          "name": "error",
          "title": "Error",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "job_id",
          "title": "Job Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "auto_rag_rag",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/autorag/rags/{id}/files",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "autorag"
                },
                {
                  "lit": "rags"
                },
                {
                  "var": "rag_id"
                },
                {
                  "lit": "files"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "autorag",
                "rags",
                "{rag_id}",
                "files"
              ],
              "rename": {
                "param": {
                  "id": "rag_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "rag_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-rag"
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "page",
                  "per_page",
                  "rag_id",
                  "search",
                  "status"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/accounts/{account_id}/autorag/rags/{id}/sync",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "autorag"
                },
                {
                  "lit": "rags"
                },
                {
                  "var": "rag_id"
                },
                {
                  "lit": "sync"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "autorag",
                "rags",
                "{rag_id}",
                "sync"
              ],
              "rename": {
                "param": {
                  "id": "rag_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "rag_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-rag"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "rag_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "auto_rag_rag_search": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "filters",
          "title": "Filters",
          "type": "`$ANY`"
        },
        {
          "name": "has_more",
          "title": "Has More",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "max_num_results",
          "title": "Max Num Results",
          "type": "`$INTEGER`"
        },
        {
          "name": "model",
          "title": "Model",
          "type": "`$ANY`"
        },
        {
          "name": "next_page",
          "title": "Next Page",
          "type": "`$STRING`"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`"
        },
        {
          "name": "query",
          "title": "Query",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "ranking_options",
          "title": "Ranking Options",
          "type": "`$OBJECT`"
        },
        {
          "name": "reranking",
          "title": "Reranking",
          "type": "`$OBJECT`"
        },
        {
          "name": "response",
          "title": "Response",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "rewrite_query",
          "title": "Rewrite Query",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "search_query",
          "title": "Search Query",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "stream",
          "title": "Stream",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "system_prompt",
          "title": "System Prompt",
          "type": "`$STRING`"
        }
      ],
      "name": "auto_rag_rag_search",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/autorag/rags/{id}/ai-search",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "autorag"
                },
                {
                  "lit": "rags"
                },
                {
                  "var": "rag_id"
                },
                {
                  "lit": "ai-search"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "autorag",
                "rags",
                "{rag_id}",
                "ai-search"
              ],
              "rename": {
                "param": {
                  "id": "rag_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "rag_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-rag"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "rag_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/autorag/rags/{id}/search",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "autorag"
                },
                {
                  "lit": "rags"
                },
                {
                  "var": "rag_id"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "autorag",
                "rags",
                "{rag_id}",
                "search"
              ],
              "rename": {
                "param": {
                  "id": "rag_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "c3dc5f0b34a14ff8e1b3ec04895e1b22"
                  },
                  {
                    "name": "rag_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "my-rag"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "rag_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "finetune_asset": {
      "fields": [
        {
          "name": "file_name",
          "title": "File Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "file_url",
          "title": "File Url",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "finetune_asset",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets/{file_name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "finetunes"
                },
                {
                  "var": "finetune_id"
                },
                {
                  "lit": "finetune-assets"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "finetunes",
                "{finetune_id}",
                "finetune-assets",
                "{id}"
              ],
              "rename": {
                "param": {
                  "file_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "finetune_id",
                    "orig": "finetune_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "bc451aef-f723-4b26-a6b2-901afd2e7a8a"
                  },
                  {
                    "name": "id",
                    "orig": "file_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "adapter_model.safetensors"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "finetune_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "vectorize": {
      "fields": [
        {
          "name": "config",
          "title": "Config",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Specifies the description of the index."
        },
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "ids",
          "title": "Ids",
          "type": "`$ARRAY`",
          "short": "A list of vector identifiers to delete from the index indicated by the path."
        },
        {
          "name": "indexType",
          "title": "Index Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Specifies the type of metadata property to index."
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "propertyName",
          "title": "Property Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Specifies the metadata property to index."
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "req": true,
          "op": {
            "list": {
              "type": "`$ARRAY`"
            },
            "load": {
              "type": "`$OBJECT`"
            }
          }
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the API call was successful"
        }
      ],
      "name": "vectorize",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "insert"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_name}",
                "insert"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ],
                "query": [
                  {
                    "name": "unparsable_behavior",
                    "orig": "unparsable_behavior",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "insert",
                "exist": [
                  "account_id",
                  "index_name",
                  "unparsable_behavior"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/upsert",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "upsert"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_name}",
                "upsert"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ],
                "query": [
                  {
                    "name": "unparsable_behavior",
                    "orig": "unparsable_behavior",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "upsert",
                "exist": [
                  "account_id",
                  "index_name",
                  "unparsable_behavior"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/create",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_id"
                },
                {
                  "lit": "metadata_index"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_id}",
                "metadata_index",
                "create"
              ],
              "rename": {
                "param": {
                  "index_name": "index_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_id",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/delete",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_id"
                },
                {
                  "lit": "metadata_index"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_id}",
                "metadata_index",
                "delete"
              ],
              "rename": {
                "param": {
                  "index_name": "index_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_id",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/delete_by_ids",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "delete_by_ids"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_name}",
                "delete_by_ids"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/get_by_ids",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "get_by_ids"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_name}",
                "get_by_ids"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/query",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "query"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_name}",
                "query"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "$action": "query",
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/list",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "list"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_name}",
                "list"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ],
                "query": [
                  {
                    "name": "count",
                    "orig": "count",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 50
                  },
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "suUTaDY5PFUiRweVccnzyt9n75suNPbXHPshvCzue5mHjtj7Letjvzlza9eGj099"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "count",
                  "cursor",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/list",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_id"
                },
                {
                  "lit": "metadata_index"
                },
                {
                  "lit": "list"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_id}",
                "metadata_index",
                "list"
              ],
              "rename": {
                "param": {
                  "index_name": "index_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_id",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_name}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}/info",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "info"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_name}",
                "info"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/vectorize/v2/indexes/{index_name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "v2",
                "indexes",
                "{index_name}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "vectorize_beta__deprecated": {
      "fields": [
        {
          "name": "config",
          "title": "Config",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "op": {
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Specifies the description of the index."
        },
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "ids",
          "title": "Ids",
          "type": "`$ARRAY`",
          "short": "A list of vector identifiers to delete from the index indicated by the path."
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "op": {
            "list": {
              "req": true,
              "type": "`$ARRAY`"
            }
          }
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the API call was successful"
        }
      ],
      "name": "vectorize_beta__deprecated",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "delete-by-ids"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes",
                "{index_name}",
                "delete-by-ids"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/get-by-ids",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "get-by-ids"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes",
                "{index_name}",
                "get-by-ids"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/insert",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "insert"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes",
                "{index_name}",
                "insert"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "$action": "insert",
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/query",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "query"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes",
                "{index_name}",
                "query"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "$action": "query",
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/indexes/{index_name}/upsert",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                },
                {
                  "lit": "upsert"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes",
                "{index_name}",
                "upsert"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "$action": "upsert",
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/vectorize/indexes",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/vectorize/indexes",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/vectorize/indexes/{index_name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes",
                "{index_name}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/vectorize/indexes/{index_name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes",
                "{index_name}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/accounts/{account_id}/vectorize/indexes/{index_name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "vectorize"
                },
                {
                  "lit": "indexes"
                },
                {
                  "var": "index_name"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "vectorize",
                "indexes",
                "{index_name}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "index_name",
                    "orig": "index_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "example-index"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "index_name"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "workers_ai": {
      "fields": [
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "extension",
          "title": "Extension",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "input",
          "title": "Input",
          "type": "`$OBJECT`",
          "req": true,
          "short": "JSON object containing the selected model's input fields, such as prompt or messages."
        },
        {
          "name": "messages",
          "title": "Messages",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "mimeType",
          "title": "Mime Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "model",
          "title": "Model",
          "type": "`$STRING`",
          "req": true,
          "short": "The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7)"
        },
        {
          "name": "options",
          "title": "Options",
          "type": "`$OBJECT`"
        },
        {
          "name": "output",
          "title": "Output",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$OBJECT`",
          "op": {
            "create": {
              "req": true,
              "type": "`$ARRAY`"
            },
            "list": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "Model-specific output."
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "workers_ai",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai/run/{model_name}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "run"
                },
                {
                  "var": "model_name"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "run",
                "{model_name}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "model_name",
                    "orig": "model_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "@cf/meta/llama-3.1-8b-instruct"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "model_name"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai/run",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "run"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "run"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai/tomarkdown",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "tomarkdown"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "tomarkdown"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai/authors/search",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "authors"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "authors",
                "search"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai/tasks/search",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "tasks"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "tasks",
                "search"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai/tomarkdown/supported",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "tomarkdown"
                },
                {
                  "lit": "supported"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "tomarkdown",
                "supported"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai/models/search",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "models"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "models",
                "search"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ],
                "query": [
                  {
                    "name": "author",
                    "orig": "author",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": ""
                  },
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "hide_experimental",
                    "orig": "hide_experimental",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": false
                  },
                  {
                    "name": "include_deprecated",
                    "orig": "include_deprecated",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": false
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 100
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": ""
                  },
                  {
                    "name": "source",
                    "orig": "source",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "task",
                    "orig": "task",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Text Generation"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "author",
                  "format",
                  "hide_experimental",
                  "include_deprecated",
                  "page",
                  "per_page",
                  "search",
                  "source",
                  "task"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai/models/schema",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "models"
                },
                {
                  "lit": "schema"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "models",
                "schema"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ],
                "query": [
                  {
                    "name": "model",
                    "orig": "model",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "@cf/meta/llama-3.1-8b-instruct"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "model"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    },
    "workers_ai_finetune": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "model",
          "title": "Model",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "modified_at",
          "title": "Modified At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "public",
          "title": "Public",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "workers_ai_finetune",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "finetunes"
                },
                {
                  "var": "finetune_id"
                },
                {
                  "lit": "finetune-assets"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "finetunes",
                "{finetune_id}",
                "finetune-assets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "finetune_id",
                    "orig": "finetune_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "bc451aef-f723-4b26-a6b2-901afd2e7a8a"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "finetune_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/accounts/{account_id}/ai/finetunes",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "finetunes"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "finetunes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai/finetunes/public",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "finetunes"
                },
                {
                  "lit": "public"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "finetunes",
                "public"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ],
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "limit",
                  "offset",
                  "order_by"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/accounts/{account_id}/ai/finetunes",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "finetunes"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "finetunes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/accounts/{account_id}/ai/finetunes/{finetune_id}",
              "segments": [
                {
                  "lit": "accounts"
                },
                {
                  "var": "account_id"
                },
                {
                  "lit": "ai"
                },
                {
                  "lit": "finetunes"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "accounts",
                "{account_id}",
                "ai",
                "finetunes",
                "{id}"
              ],
              "rename": {
                "param": {
                  "finetune_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "account_id",
                    "orig": "account_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "023e105f4ecef8ad9ca31a8372d0c353"
                  },
                  {
                    "name": "id",
                    "orig": "finetune_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "bc451aef-f723-4b26-a6b2-901afd2e7a8a"
                  }
                ]
              },
              "select": {
                "exist": [
                  "account_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.account"
          ],
          [
            "$.main.kit.entity.account"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

