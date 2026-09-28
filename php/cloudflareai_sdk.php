<?php
declare(strict_types=1);

// CloudflareAi SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareAiSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareAiUtility();
        $this->_utility = $utility;

        $config = CloudflareAiConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareAiHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareAiHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareAiFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareAiFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareAiUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareAiHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareAiHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareAiHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareAiSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareAiError($op . "_allow",
                "CloudflareAiSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareAiHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareAiHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareAiError("graphql_error",
                "CloudflareAiSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_account = null;

    // Canonical facade: $client->Account()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account()
    // resolves here too.
    public function Account($data = null)
    {
        require_once __DIR__ . '/entity/account_entity.php';
        if ($data === null) {
            if ($this->_account === null) {
                $this->_account = new AccountEntity($this, null);
            }
            return $this->_account;
        }
        return new AccountEntity($this, $data);
    }


    private $_ai_gateway = null;

    // Canonical facade: $client->AiGateway()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway()
    // resolves here too.
    public function AiGateway($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway === null) {
                $this->_ai_gateway = new AiGatewayEntity($this, null);
            }
            return $this->_ai_gateway;
        }
        return new AiGatewayEntity($this, $data);
    }


    private $_ai_gateway_custom_domain = null;

    // Canonical facade: $client->AiGatewayCustomDomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_custom_domain()
    // resolves here too.
    public function AiGatewayCustomDomain($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_custom_domain_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_custom_domain === null) {
                $this->_ai_gateway_custom_domain = new AiGatewayCustomDomainEntity($this, null);
            }
            return $this->_ai_gateway_custom_domain;
        }
        return new AiGatewayCustomDomainEntity($this, $data);
    }


    private $_ai_gateway_custom_provider = null;

    // Canonical facade: $client->AiGatewayCustomProvider()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_custom_provider()
    // resolves here too.
    public function AiGatewayCustomProvider($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_custom_provider_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_custom_provider === null) {
                $this->_ai_gateway_custom_provider = new AiGatewayCustomProviderEntity($this, null);
            }
            return $this->_ai_gateway_custom_provider;
        }
        return new AiGatewayCustomProviderEntity($this, $data);
    }


    private $_ai_gateway_custom_provider_cost = null;

    // Canonical facade: $client->AiGatewayCustomProviderCost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_custom_provider_cost()
    // resolves here too.
    public function AiGatewayCustomProviderCost($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_custom_provider_cost_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_custom_provider_cost === null) {
                $this->_ai_gateway_custom_provider_cost = new AiGatewayCustomProviderCostEntity($this, null);
            }
            return $this->_ai_gateway_custom_provider_cost;
        }
        return new AiGatewayCustomProviderCostEntity($this, $data);
    }


    private $_ai_gateway_dataset = null;

    // Canonical facade: $client->AiGatewayDataset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_dataset()
    // resolves here too.
    public function AiGatewayDataset($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_dataset_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_dataset === null) {
                $this->_ai_gateway_dataset = new AiGatewayDatasetEntity($this, null);
            }
            return $this->_ai_gateway_dataset;
        }
        return new AiGatewayDatasetEntity($this, $data);
    }


    private $_ai_gateway_dynamic_route = null;

    // Canonical facade: $client->AiGatewayDynamicRoute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_dynamic_route()
    // resolves here too.
    public function AiGatewayDynamicRoute($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_dynamic_route_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_dynamic_route === null) {
                $this->_ai_gateway_dynamic_route = new AiGatewayDynamicRouteEntity($this, null);
            }
            return $this->_ai_gateway_dynamic_route;
        }
        return new AiGatewayDynamicRouteEntity($this, $data);
    }


    private $_ai_gateway_evaluation = null;

    // Canonical facade: $client->AiGatewayEvaluation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_evaluation()
    // resolves here too.
    public function AiGatewayEvaluation($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_evaluation_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_evaluation === null) {
                $this->_ai_gateway_evaluation = new AiGatewayEvaluationEntity($this, null);
            }
            return $this->_ai_gateway_evaluation;
        }
        return new AiGatewayEvaluationEntity($this, $data);
    }


    private $_ai_gateway_gateway = null;

    // Canonical facade: $client->AiGatewayGateway()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_gateway()
    // resolves here too.
    public function AiGatewayGateway($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_gateway_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_gateway === null) {
                $this->_ai_gateway_gateway = new AiGatewayGatewayEntity($this, null);
            }
            return $this->_ai_gateway_gateway;
        }
        return new AiGatewayGatewayEntity($this, $data);
    }


    private $_ai_gateway_log = null;

    // Canonical facade: $client->AiGatewayLog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_log()
    // resolves here too.
    public function AiGatewayLog($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_log_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_log === null) {
                $this->_ai_gateway_log = new AiGatewayLogEntity($this, null);
            }
            return $this->_ai_gateway_log;
        }
        return new AiGatewayLogEntity($this, $data);
    }


    private $_ai_gateway_provider_config = null;

    // Canonical facade: $client->AiGatewayProviderConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_gateway_provider_config()
    // resolves here too.
    public function AiGatewayProviderConfig($data = null)
    {
        require_once __DIR__ . '/entity/ai_gateway_provider_config_entity.php';
        if ($data === null) {
            if ($this->_ai_gateway_provider_config === null) {
                $this->_ai_gateway_provider_config = new AiGatewayProviderConfigEntity($this, null);
            }
            return $this->_ai_gateway_provider_config;
        }
        return new AiGatewayProviderConfigEntity($this, $data);
    }


    private $_ai_search_account_search = null;

    // Canonical facade: $client->AiSearchAccountSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_search_account_search()
    // resolves here too.
    public function AiSearchAccountSearch($data = null)
    {
        require_once __DIR__ . '/entity/ai_search_account_search_entity.php';
        if ($data === null) {
            if ($this->_ai_search_account_search === null) {
                $this->_ai_search_account_search = new AiSearchAccountSearchEntity($this, null);
            }
            return $this->_ai_search_account_search;
        }
        return new AiSearchAccountSearchEntity($this, $data);
    }


    private $_ai_search_instance = null;

    // Canonical facade: $client->AiSearchInstance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_search_instance()
    // resolves here too.
    public function AiSearchInstance($data = null)
    {
        require_once __DIR__ . '/entity/ai_search_instance_entity.php';
        if ($data === null) {
            if ($this->_ai_search_instance === null) {
                $this->_ai_search_instance = new AiSearchInstanceEntity($this, null);
            }
            return $this->_ai_search_instance;
        }
        return new AiSearchInstanceEntity($this, $data);
    }


    private $_ai_search_instances_item = null;

    // Canonical facade: $client->AiSearchInstancesItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_search_instances_item()
    // resolves here too.
    public function AiSearchInstancesItem($data = null)
    {
        require_once __DIR__ . '/entity/ai_search_instances_item_entity.php';
        if ($data === null) {
            if ($this->_ai_search_instances_item === null) {
                $this->_ai_search_instances_item = new AiSearchInstancesItemEntity($this, null);
            }
            return $this->_ai_search_instances_item;
        }
        return new AiSearchInstancesItemEntity($this, $data);
    }


    private $_ai_search_instances_job = null;

    // Canonical facade: $client->AiSearchInstancesJob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_search_instances_job()
    // resolves here too.
    public function AiSearchInstancesJob($data = null)
    {
        require_once __DIR__ . '/entity/ai_search_instances_job_entity.php';
        if ($data === null) {
            if ($this->_ai_search_instances_job === null) {
                $this->_ai_search_instances_job = new AiSearchInstancesJobEntity($this, null);
            }
            return $this->_ai_search_instances_job;
        }
        return new AiSearchInstancesJobEntity($this, $data);
    }


    private $_ai_search_namespace = null;

    // Canonical facade: $client->AiSearchNamespace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_search_namespace()
    // resolves here too.
    public function AiSearchNamespace($data = null)
    {
        require_once __DIR__ . '/entity/ai_search_namespace_entity.php';
        if ($data === null) {
            if ($this->_ai_search_namespace === null) {
                $this->_ai_search_namespace = new AiSearchNamespaceEntity($this, null);
            }
            return $this->_ai_search_namespace;
        }
        return new AiSearchNamespaceEntity($this, $data);
    }


    private $_ai_search_token = null;

    // Canonical facade: $client->AiSearchToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_search_token()
    // resolves here too.
    public function AiSearchToken($data = null)
    {
        require_once __DIR__ . '/entity/ai_search_token_entity.php';
        if ($data === null) {
            if ($this->_ai_search_token === null) {
                $this->_ai_search_token = new AiSearchTokenEntity($this, null);
            }
            return $this->_ai_search_token;
        }
        return new AiSearchTokenEntity($this, $data);
    }


    private $_aig_billing_create_topup = null;

    // Canonical facade: $client->AigBillingCreateTopup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_create_topup()
    // resolves here too.
    public function AigBillingCreateTopup($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_create_topup_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_create_topup === null) {
                $this->_aig_billing_create_topup = new AigBillingCreateTopupEntity($this, null);
            }
            return $this->_aig_billing_create_topup;
        }
        return new AigBillingCreateTopupEntity($this, $data);
    }


    private $_aig_billing_delete_spending_limit = null;

    // Canonical facade: $client->AigBillingDeleteSpendingLimit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_delete_spending_limit()
    // resolves here too.
    public function AigBillingDeleteSpendingLimit($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_delete_spending_limit_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_delete_spending_limit === null) {
                $this->_aig_billing_delete_spending_limit = new AigBillingDeleteSpendingLimitEntity($this, null);
            }
            return $this->_aig_billing_delete_spending_limit;
        }
        return new AigBillingDeleteSpendingLimitEntity($this, $data);
    }


    private $_aig_billing_delete_topup_config = null;

    // Canonical facade: $client->AigBillingDeleteTopupConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_delete_topup_config()
    // resolves here too.
    public function AigBillingDeleteTopupConfig($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_delete_topup_config_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_delete_topup_config === null) {
                $this->_aig_billing_delete_topup_config = new AigBillingDeleteTopupConfigEntity($this, null);
            }
            return $this->_aig_billing_delete_topup_config;
        }
        return new AigBillingDeleteTopupConfigEntity($this, $data);
    }


    private $_aig_billing_get_credit_balance = null;

    // Canonical facade: $client->AigBillingGetCreditBalance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_get_credit_balance()
    // resolves here too.
    public function AigBillingGetCreditBalance($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_get_credit_balance_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_get_credit_balance === null) {
                $this->_aig_billing_get_credit_balance = new AigBillingGetCreditBalanceEntity($this, null);
            }
            return $this->_aig_billing_get_credit_balance;
        }
        return new AigBillingGetCreditBalanceEntity($this, $data);
    }


    private $_aig_billing_get_invoice_history = null;

    // Canonical facade: $client->AigBillingGetInvoiceHistory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_get_invoice_history()
    // resolves here too.
    public function AigBillingGetInvoiceHistory($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_get_invoice_history_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_get_invoice_history === null) {
                $this->_aig_billing_get_invoice_history = new AigBillingGetInvoiceHistoryEntity($this, null);
            }
            return $this->_aig_billing_get_invoice_history;
        }
        return new AigBillingGetInvoiceHistoryEntity($this, $data);
    }


    private $_aig_billing_get_invoice_preview = null;

    // Canonical facade: $client->AigBillingGetInvoicePreview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_get_invoice_preview()
    // resolves here too.
    public function AigBillingGetInvoicePreview($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_get_invoice_preview_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_get_invoice_preview === null) {
                $this->_aig_billing_get_invoice_preview = new AigBillingGetInvoicePreviewEntity($this, null);
            }
            return $this->_aig_billing_get_invoice_preview;
        }
        return new AigBillingGetInvoicePreviewEntity($this, $data);
    }


    private $_aig_billing_get_spending_limit = null;

    // Canonical facade: $client->AigBillingGetSpendingLimit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_get_spending_limit()
    // resolves here too.
    public function AigBillingGetSpendingLimit($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_get_spending_limit_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_get_spending_limit === null) {
                $this->_aig_billing_get_spending_limit = new AigBillingGetSpendingLimitEntity($this, null);
            }
            return $this->_aig_billing_get_spending_limit;
        }
        return new AigBillingGetSpendingLimitEntity($this, $data);
    }


    private $_aig_billing_get_topup_config = null;

    // Canonical facade: $client->AigBillingGetTopupConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_get_topup_config()
    // resolves here too.
    public function AigBillingGetTopupConfig($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_get_topup_config_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_get_topup_config === null) {
                $this->_aig_billing_get_topup_config = new AigBillingGetTopupConfigEntity($this, null);
            }
            return $this->_aig_billing_get_topup_config;
        }
        return new AigBillingGetTopupConfigEntity($this, $data);
    }


    private $_aig_billing_get_topup_eligibility = null;

    // Canonical facade: $client->AigBillingGetTopupEligibility()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_get_topup_eligibility()
    // resolves here too.
    public function AigBillingGetTopupEligibility($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_get_topup_eligibility_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_get_topup_eligibility === null) {
                $this->_aig_billing_get_topup_eligibility = new AigBillingGetTopupEligibilityEntity($this, null);
            }
            return $this->_aig_billing_get_topup_eligibility;
        }
        return new AigBillingGetTopupEligibilityEntity($this, $data);
    }


    private $_aig_billing_get_topup_limit = null;

    // Canonical facade: $client->AigBillingGetTopupLimit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_get_topup_limit()
    // resolves here too.
    public function AigBillingGetTopupLimit($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_get_topup_limit_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_get_topup_limit === null) {
                $this->_aig_billing_get_topup_limit = new AigBillingGetTopupLimitEntity($this, null);
            }
            return $this->_aig_billing_get_topup_limit;
        }
        return new AigBillingGetTopupLimitEntity($this, $data);
    }


    private $_aig_billing_get_usage_history = null;

    // Canonical facade: $client->AigBillingGetUsageHistory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_get_usage_history()
    // resolves here too.
    public function AigBillingGetUsageHistory($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_get_usage_history_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_get_usage_history === null) {
                $this->_aig_billing_get_usage_history = new AigBillingGetUsageHistoryEntity($this, null);
            }
            return $this->_aig_billing_get_usage_history;
        }
        return new AigBillingGetUsageHistoryEntity($this, $data);
    }


    private $_aig_billing_set_spending_limit = null;

    // Canonical facade: $client->AigBillingSetSpendingLimit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_set_spending_limit()
    // resolves here too.
    public function AigBillingSetSpendingLimit($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_set_spending_limit_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_set_spending_limit === null) {
                $this->_aig_billing_set_spending_limit = new AigBillingSetSpendingLimitEntity($this, null);
            }
            return $this->_aig_billing_set_spending_limit;
        }
        return new AigBillingSetSpendingLimitEntity($this, $data);
    }


    private $_aig_billing_set_topup_config = null;

    // Canonical facade: $client->AigBillingSetTopupConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_set_topup_config()
    // resolves here too.
    public function AigBillingSetTopupConfig($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_set_topup_config_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_set_topup_config === null) {
                $this->_aig_billing_set_topup_config = new AigBillingSetTopupConfigEntity($this, null);
            }
            return $this->_aig_billing_set_topup_config;
        }
        return new AigBillingSetTopupConfigEntity($this, $data);
    }


    private $_aig_billing_topup_status = null;

    // Canonical facade: $client->AigBillingTopupStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aig_billing_topup_status()
    // resolves here too.
    public function AigBillingTopupStatus($data = null)
    {
        require_once __DIR__ . '/entity/aig_billing_topup_status_entity.php';
        if ($data === null) {
            if ($this->_aig_billing_topup_status === null) {
                $this->_aig_billing_topup_status = new AigBillingTopupStatusEntity($this, null);
            }
            return $this->_aig_billing_topup_status;
        }
        return new AigBillingTopupStatusEntity($this, $data);
    }


    private $_auto_rag_job = null;

    // Canonical facade: $client->AutoRagJob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auto_rag_job()
    // resolves here too.
    public function AutoRagJob($data = null)
    {
        require_once __DIR__ . '/entity/auto_rag_job_entity.php';
        if ($data === null) {
            if ($this->_auto_rag_job === null) {
                $this->_auto_rag_job = new AutoRagJobEntity($this, null);
            }
            return $this->_auto_rag_job;
        }
        return new AutoRagJobEntity($this, $data);
    }


    private $_auto_rag_rag = null;

    // Canonical facade: $client->AutoRagRag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auto_rag_rag()
    // resolves here too.
    public function AutoRagRag($data = null)
    {
        require_once __DIR__ . '/entity/auto_rag_rag_entity.php';
        if ($data === null) {
            if ($this->_auto_rag_rag === null) {
                $this->_auto_rag_rag = new AutoRagRagEntity($this, null);
            }
            return $this->_auto_rag_rag;
        }
        return new AutoRagRagEntity($this, $data);
    }


    private $_auto_rag_rag_search = null;

    // Canonical facade: $client->AutoRagRagSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auto_rag_rag_search()
    // resolves here too.
    public function AutoRagRagSearch($data = null)
    {
        require_once __DIR__ . '/entity/auto_rag_rag_search_entity.php';
        if ($data === null) {
            if ($this->_auto_rag_rag_search === null) {
                $this->_auto_rag_rag_search = new AutoRagRagSearchEntity($this, null);
            }
            return $this->_auto_rag_rag_search;
        }
        return new AutoRagRagSearchEntity($this, $data);
    }


    private $_finetune_asset = null;

    // Canonical facade: $client->FinetuneAsset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->finetune_asset()
    // resolves here too.
    public function FinetuneAsset($data = null)
    {
        require_once __DIR__ . '/entity/finetune_asset_entity.php';
        if ($data === null) {
            if ($this->_finetune_asset === null) {
                $this->_finetune_asset = new FinetuneAssetEntity($this, null);
            }
            return $this->_finetune_asset;
        }
        return new FinetuneAssetEntity($this, $data);
    }


    private $_memory = null;

    // Canonical facade: $client->Memory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->memory()
    // resolves here too.
    public function Memory($data = null)
    {
        require_once __DIR__ . '/entity/memory_entity.php';
        if ($data === null) {
            if ($this->_memory === null) {
                $this->_memory = new MemoryEntity($this, null);
            }
            return $this->_memory;
        }
        return new MemoryEntity($this, $data);
    }


    private $_namespace = null;

    // Canonical facade: $client->Namespace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->namespace()
    // resolves here too.
    public function Namespace($data = null)
    {
        require_once __DIR__ . '/entity/namespace_entity.php';
        if ($data === null) {
            if ($this->_namespace === null) {
                $this->_namespace = new NamespaceEntity($this, null);
            }
            return $this->_namespace;
        }
        return new NamespaceEntity($this, $data);
    }


    private $_vectorize = null;

    // Canonical facade: $client->Vectorize()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vectorize()
    // resolves here too.
    public function Vectorize($data = null)
    {
        require_once __DIR__ . '/entity/vectorize_entity.php';
        if ($data === null) {
            if ($this->_vectorize === null) {
                $this->_vectorize = new VectorizeEntity($this, null);
            }
            return $this->_vectorize;
        }
        return new VectorizeEntity($this, $data);
    }


    private $_vectorize_beta__deprecated = null;

    // Canonical facade: $client->VectorizeBetaDeprecated()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vectorize_beta__deprecated()
    // resolves here too.
    public function VectorizeBetaDeprecated($data = null)
    {
        require_once __DIR__ . '/entity/vectorize_beta__deprecated_entity.php';
        if ($data === null) {
            if ($this->_vectorize_beta__deprecated === null) {
                $this->_vectorize_beta__deprecated = new VectorizeBetaDeprecatedEntity($this, null);
            }
            return $this->_vectorize_beta__deprecated;
        }
        return new VectorizeBetaDeprecatedEntity($this, $data);
    }


    private $_workers_ai = null;

    // Canonical facade: $client->WorkersAi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_ai()
    // resolves here too.
    public function WorkersAi($data = null)
    {
        require_once __DIR__ . '/entity/workers_ai_entity.php';
        if ($data === null) {
            if ($this->_workers_ai === null) {
                $this->_workers_ai = new WorkersAiEntity($this, null);
            }
            return $this->_workers_ai;
        }
        return new WorkersAiEntity($this, $data);
    }


    private $_workers_ai_finetune = null;

    // Canonical facade: $client->WorkersAiFinetune()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workers_ai_finetune()
    // resolves here too.
    public function WorkersAiFinetune($data = null)
    {
        require_once __DIR__ . '/entity/workers_ai_finetune_entity.php';
        if ($data === null) {
            if ($this->_workers_ai_finetune === null) {
                $this->_workers_ai_finetune = new WorkersAiFinetuneEntity($this, null);
            }
            return $this->_workers_ai_finetune;
        }
        return new WorkersAiFinetuneEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareAiSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
