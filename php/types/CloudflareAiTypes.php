<?php
declare(strict_types=1);

// Typed models for the CloudflareAi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Account entity data model. */
class Account
{
    public ?string $id = null;
}

/** Request payload for Account#load. */
class AccountLoadMatch
{
    public string $id;
}

/** Request payload for Account#update. */
class AccountUpdateData
{
    public string $id;
}

/** AiGateway entity data model. */
class AiGateway
{
    public ?string $byokAlias = null;
    public array $items;
    public ?int $limit = null;
    public array $metadata;
    public array $options;
    public ?string $provider = null;
    public string $query;
}

/** Request payload for AiGateway#create. */
class AiGatewayCreateData
{
    public string $account_id;
    public ?string $byokAlias = null;
    public array $items;
    public ?int $limit = null;
    public array $metadata;
    public array $options;
    public ?string $provider = null;
    public string $query;
}

/** AiGatewayCustomDomain entity data model. */
class AiGatewayCustomDomain
{
    public string $cname_target;
    public int $created_at;
    public string $domain;
    public string $gateway_id;
    public string $hostname;
    public ?string $id = null;
    public ?string $minTLS = null;
    public int $modified_at;
    public string $ssl_hostname_id;
    public string $status;
    public string $zone_id;
}

/** Request payload for AiGatewayCustomDomain#load. */
class AiGatewayCustomDomainLoadMatch
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
}

/** Request payload for AiGatewayCustomDomain#list. */
class AiGatewayCustomDomainListMatch
{
    public string $account_id;
    public string $gateway_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
    public ?string $status = null;
}

/** Request payload for AiGatewayCustomDomain#create. */
class AiGatewayCustomDomainCreateData
{
    public string $account_id;
    public string $gateway_id;
    public string $cname_target;
    public int $created_at;
    public string $domain;
    public string $hostname;
    public ?string $id = null;
    public ?string $minTLS = null;
    public int $modified_at;
    public string $ssl_hostname_id;
    public string $status;
    public string $zone_id;
}

/** Request payload for AiGatewayCustomDomain#remove. */
class AiGatewayCustomDomainRemoveMatch
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
}

/** AiGatewayCustomProvider entity data model. */
class AiGatewayCustomProvider
{
    public string $base_url;
    public ?bool $beta = null;
    public string $created_at;
    public ?string $curl_example = null;
    public ?string $description = null;
    public ?bool $enable = null;
    public ?string $headers = null;
    public string $id;
    public ?string $js_example = null;
    public ?string $link = null;
    public ?string $logo = null;
    public string $modified_at;
    public string $name;
    public ?int $position = null;
    public string $slug;
}

/** Request payload for AiGatewayCustomProvider#load. */
class AiGatewayCustomProviderLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for AiGatewayCustomProvider#list. */
class AiGatewayCustomProviderListMatch
{
    public string $account_id;
    public ?bool $beta = null;
    public ?bool $enable = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
}

/** Request payload for AiGatewayCustomProvider#create. */
class AiGatewayCustomProviderCreateData
{
    public string $account_id;
    public string $base_url;
    public ?bool $beta = null;
    public string $created_at;
    public ?string $curl_example = null;
    public ?string $description = null;
    public ?bool $enable = null;
    public ?string $headers = null;
    public string $id;
    public ?string $js_example = null;
    public ?string $link = null;
    public ?string $logo = null;
    public string $modified_at;
    public string $name;
    public ?int $position = null;
    public string $slug;
}

/** Request payload for AiGatewayCustomProvider#update. */
class AiGatewayCustomProviderUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $base_url = null;
    public ?bool $beta = null;
    public ?string $created_at = null;
    public ?string $curl_example = null;
    public ?string $description = null;
    public ?bool $enable = null;
    public ?string $headers = null;
    public ?string $js_example = null;
    public ?string $link = null;
    public ?string $logo = null;
    public ?string $modified_at = null;
    public ?string $name = null;
    public ?int $position = null;
    public ?string $slug = null;
}

/** Request payload for AiGatewayCustomProvider#remove. */
class AiGatewayCustomProviderRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** AiGatewayCustomProviderCost entity data model. */
class AiGatewayCustomProviderCost
{
    public string $account_provider_id;
    public ?string $changed_by = null;
    public ?float $cost_in = null;
    public ?float $cost_out = null;
    public ?string $cost_type = null;
    public string $created_at;
    public ?bool $enable = null;
    public string $id;
    public string $model;
    public ?string $model_rule = null;
    public string $modified_at;
    public ?string $token_pricing = null;
    public ?int $weight = null;
}

/** Request payload for AiGatewayCustomProviderCost#load. */
class AiGatewayCustomProviderCostLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for AiGatewayCustomProviderCost#list. */
class AiGatewayCustomProviderCostListMatch
{
    public string $account_id;
    public ?string $account_provider_id = null;
    public ?string $cost_type = null;
    public ?bool $enable = null;
    public ?string $model_rule = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
}

/** Request payload for AiGatewayCustomProviderCost#create. */
class AiGatewayCustomProviderCostCreateData
{
    public string $account_id;
    public string $account_provider_id;
    public ?string $changed_by = null;
    public ?float $cost_in = null;
    public ?float $cost_out = null;
    public ?string $cost_type = null;
    public string $created_at;
    public ?bool $enable = null;
    public string $id;
    public string $model;
    public ?string $model_rule = null;
    public string $modified_at;
    public ?string $token_pricing = null;
    public ?int $weight = null;
}

/** Request payload for AiGatewayCustomProviderCost#update. */
class AiGatewayCustomProviderCostUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $account_provider_id = null;
    public ?string $changed_by = null;
    public ?float $cost_in = null;
    public ?float $cost_out = null;
    public ?string $cost_type = null;
    public ?string $created_at = null;
    public ?bool $enable = null;
    public ?string $model = null;
    public ?string $model_rule = null;
    public ?string $modified_at = null;
    public ?string $token_pricing = null;
    public ?int $weight = null;
}

/** Request payload for AiGatewayCustomProviderCost#remove. */
class AiGatewayCustomProviderCostRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** AiGatewayDataset entity data model. */
class AiGatewayDataset
{
    public string $created_at;
    public bool $enable;
    public array $filters;
    public string $gateway_id;
    public string $id;
    public string $modified_at;
    public string $name;
}

/** Request payload for AiGatewayDataset#load. */
class AiGatewayDatasetLoadMatch
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
}

/** Request payload for AiGatewayDataset#list. */
class AiGatewayDatasetListMatch
{
    public string $account_id;
    public string $gateway_id;
    public ?bool $enable = null;
    public ?string $name = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
}

/** Request payload for AiGatewayDataset#create. */
class AiGatewayDatasetCreateData
{
    public string $account_id;
    public string $gateway_id;
    public string $created_at;
    public bool $enable;
    public array $filters;
    public string $id;
    public string $modified_at;
    public string $name;
}

/** Request payload for AiGatewayDataset#update. */
class AiGatewayDatasetUpdateData
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
    public ?string $created_at = null;
    public ?bool $enable = null;
    public ?array $filters = null;
    public ?string $modified_at = null;
    public ?string $name = null;
}

/** Request payload for AiGatewayDataset#remove. */
class AiGatewayDatasetRemoveMatch
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
}

/** AiGatewayDynamicRoute entity data model. */
class AiGatewayDynamicRoute
{
    public string $account_tag;
    public bool $active;
    public string $created_at;
    public string $data;
    public array $deployment;
    public array $deployments;
    public array $elements;
    public string $gateway_id;
    public string $id;
    public ?bool $is_valid = null;
    public string $modified_at;
    public string $name;
    public string $order_by;
    public string $order_by_direction;
    public float $page;
    public float $per_page;
    public array $routes;
    public array $version;
    public string $version_id;
    public array $versions;
}

/** Request payload for AiGatewayDynamicRoute#load. */
class AiGatewayDynamicRouteLoadMatch
{
    public string $account_id;
    public string $gateway_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $route_id = null;
    public ?string $version_id = null;
    public ?string $id = null;
}

/** Request payload for AiGatewayDynamicRoute#create. */
class AiGatewayDynamicRouteCreateData
{
    public string $account_id;
    public string $gateway_id;
    public ?string $route_id = null;
    public string $account_tag;
    public bool $active;
    public string $created_at;
    public string $data;
    public array $deployment;
    public array $deployments;
    public array $elements;
    public string $id;
    public ?bool $is_valid = null;
    public string $modified_at;
    public string $name;
    public string $order_by;
    public string $order_by_direction;
    public float $page;
    public float $per_page;
    public array $routes;
    public array $version;
    public string $version_id;
    public array $versions;
}

/** Request payload for AiGatewayDynamicRoute#update. */
class AiGatewayDynamicRouteUpdateData
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
    public ?string $account_tag = null;
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?string $data = null;
    public ?array $deployment = null;
    public ?array $deployments = null;
    public ?array $elements = null;
    public ?bool $is_valid = null;
    public ?string $modified_at = null;
    public ?string $name = null;
    public ?string $order_by = null;
    public ?string $order_by_direction = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?array $routes = null;
    public ?array $version = null;
    public ?string $version_id = null;
    public ?array $versions = null;
}

/** Request payload for AiGatewayDynamicRoute#remove. */
class AiGatewayDynamicRouteRemoveMatch
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
}

/** AiGatewayEvaluation entity data model. */
class AiGatewayEvaluation
{
    public string $created_at;
    public array $dataset_ids;
    public array $datasets;
    public string $description;
    public bool $enable;
    public array $evaluation_type_ids;
    public string $gateway_id;
    public string $id;
    public bool $mandatory;
    public string $modified_at;
    public string $name;
    public bool $processed;
    public array $results;
    public float $total_logs;
    public string $type;
}

/** Request payload for AiGatewayEvaluation#load. */
class AiGatewayEvaluationLoadMatch
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
}

/** Request payload for AiGatewayEvaluation#list. */
class AiGatewayEvaluationListMatch
{
    public string $account_id;
    public ?string $gateway_id = null;
    public ?string $name = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?bool $processed = null;
    public ?string $search = null;
    public ?string $order_by = null;
    public ?string $order_by_direction = null;
}

/** Request payload for AiGatewayEvaluation#create. */
class AiGatewayEvaluationCreateData
{
    public string $account_id;
    public string $gateway_id;
    public string $created_at;
    public array $dataset_ids;
    public array $datasets;
    public string $description;
    public bool $enable;
    public array $evaluation_type_ids;
    public string $id;
    public bool $mandatory;
    public string $modified_at;
    public string $name;
    public bool $processed;
    public array $results;
    public float $total_logs;
    public string $type;
}

/** Request payload for AiGatewayEvaluation#remove. */
class AiGatewayEvaluationRemoveMatch
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
}

/** AiGatewayGateway entity data model. */
class AiGatewayGateway
{
    public ?bool $authentication = null;
    public ?bool $byok_only = null;
    public bool $cache_invalidate_on_update;
    public int $cache_ttl;
    public bool $collect_logs;
    public string $created_at;
    public mixed $dlp = null;
    public array $guardrails;
    public string $id;
    public ?bool $is_default = null;
    public ?bool $log_classification = null;
    public ?int $log_management = null;
    public ?string $log_management_strategy = null;
    public ?bool $logpush = null;
    public ?string $logpush_public_key = null;
    public string $modified_at;
    public ?array $otel = null;
    public int $rate_limiting_interval;
    public int $rate_limiting_limit;
    public ?string $rate_limiting_technique = null;
    public string $result;
    public ?string $retry_backoff = null;
    public ?int $retry_delay = null;
    public ?int $retry_max_attempts = null;
    public ?array $spend_limits = null;
    public ?string $store_id = null;
    public array $stripe;
    public bool $success;
    public ?string $workers_ai_billing_mode = null;
    public ?bool $zdr = null;
}

/** Request payload for AiGatewayGateway#load. */
class AiGatewayGatewayLoadMatch
{
    public string $account_id;
    public ?string $gateway_id = null;
    public ?string $provider = null;
    public ?string $id = null;
}

/** Request payload for AiGatewayGateway#list. */
class AiGatewayGatewayListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
}

/** Request payload for AiGatewayGateway#create. */
class AiGatewayGatewayCreateData
{
    public string $account_id;
    public ?bool $authentication = null;
    public ?bool $byok_only = null;
    public bool $cache_invalidate_on_update;
    public int $cache_ttl;
    public bool $collect_logs;
    public string $created_at;
    public mixed $dlp = null;
    public array $guardrails;
    public string $id;
    public ?bool $is_default = null;
    public ?bool $log_classification = null;
    public ?int $log_management = null;
    public ?string $log_management_strategy = null;
    public ?bool $logpush = null;
    public ?string $logpush_public_key = null;
    public string $modified_at;
    public ?array $otel = null;
    public int $rate_limiting_interval;
    public int $rate_limiting_limit;
    public ?string $rate_limiting_technique = null;
    public string $result;
    public ?string $retry_backoff = null;
    public ?int $retry_delay = null;
    public ?int $retry_max_attempts = null;
    public ?array $spend_limits = null;
    public ?string $store_id = null;
    public array $stripe;
    public bool $success;
    public ?string $workers_ai_billing_mode = null;
    public ?bool $zdr = null;
}

/** Request payload for AiGatewayGateway#update. */
class AiGatewayGatewayUpdateData
{
    public string $account_id;
    public string $id;
    public ?bool $authentication = null;
    public ?bool $byok_only = null;
    public ?bool $cache_invalidate_on_update = null;
    public ?int $cache_ttl = null;
    public ?bool $collect_logs = null;
    public ?string $created_at = null;
    public mixed $dlp = null;
    public ?array $guardrails = null;
    public ?bool $is_default = null;
    public ?bool $log_classification = null;
    public ?int $log_management = null;
    public ?string $log_management_strategy = null;
    public ?bool $logpush = null;
    public ?string $logpush_public_key = null;
    public ?string $modified_at = null;
    public ?array $otel = null;
    public ?int $rate_limiting_interval = null;
    public ?int $rate_limiting_limit = null;
    public ?string $rate_limiting_technique = null;
    public ?string $result = null;
    public ?string $retry_backoff = null;
    public ?int $retry_delay = null;
    public ?int $retry_max_attempts = null;
    public ?array $spend_limits = null;
    public ?string $store_id = null;
    public ?array $stripe = null;
    public ?bool $success = null;
    public ?string $workers_ai_billing_mode = null;
    public ?bool $zdr = null;
}

/** Request payload for AiGatewayGateway#remove. */
class AiGatewayGatewayRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** AiGatewayLog entity data model. */
class AiGatewayLog
{
    public bool $cached;
    public ?float $cost = null;
    public string $created_at;
    public ?bool $custom_cost = null;
    public int $duration;
    public ?float $feedback = null;
    public string $id;
    public ?string $metadata = null;
    public string $model;
    public ?string $model_type = null;
    public string $path;
    public string $provider;
    public ?string $request_content_type = null;
    public ?string $request_head = null;
    public ?bool $request_head_complete = null;
    public ?int $request_size = null;
    public ?string $request_type = null;
    public ?string $response_content_type = null;
    public ?string $response_head = null;
    public ?bool $response_head_complete = null;
    public ?int $response_size = null;
    public ?float $score = null;
    public ?int $status_code = null;
    public ?int $step = null;
    public bool $success;
    public int $tokens_in;
    public int $tokens_out;
}

/** Request payload for AiGatewayLog#load. */
class AiGatewayLogLoadMatch
{
    public string $account_id;
    public string $gateway_id;
    public ?string $id = null;
    public ?string $log_id = null;
}

/** Request payload for AiGatewayLog#list. */
class AiGatewayLogListMatch
{
    public string $account_id;
    public string $gateway_id;
    public ?bool $cached = null;
    public ?string $direction = null;
    public ?string $end_date = null;
    public mixed $feedback = null;
    public ?array $filter = null;
    public ?float $max_cost = null;
    public ?float $max_duration = null;
    public ?float $max_tokens_in = null;
    public ?float $max_tokens_out = null;
    public ?float $max_total_token = null;
    public ?bool $meta_info = null;
    public ?float $min_cost = null;
    public ?float $min_duration = null;
    public ?float $min_tokens_in = null;
    public ?float $min_tokens_out = null;
    public ?float $min_total_token = null;
    public ?string $model = null;
    public ?string $model_type = null;
    public ?string $order_by = null;
    public ?string $order_by_direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $provider = null;
    public ?string $request_content_type = null;
    public ?string $response_content_type = null;
    public ?string $search = null;
    public ?string $start_date = null;
    public ?bool $success = null;
}

/** Request payload for AiGatewayLog#update. */
class AiGatewayLogUpdateData
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
    public ?bool $cached = null;
    public ?float $cost = null;
    public ?string $created_at = null;
    public ?bool $custom_cost = null;
    public ?int $duration = null;
    public ?float $feedback = null;
    public ?string $metadata = null;
    public ?string $model = null;
    public ?string $model_type = null;
    public ?string $path = null;
    public ?string $provider = null;
    public ?string $request_content_type = null;
    public ?string $request_head = null;
    public ?bool $request_head_complete = null;
    public ?int $request_size = null;
    public ?string $request_type = null;
    public ?string $response_content_type = null;
    public ?string $response_head = null;
    public ?bool $response_head_complete = null;
    public ?int $response_size = null;
    public ?float $score = null;
    public ?int $status_code = null;
    public ?int $step = null;
    public ?bool $success = null;
    public ?int $tokens_in = null;
    public ?int $tokens_out = null;
}

/** Request payload for AiGatewayLog#remove. */
class AiGatewayLogRemoveMatch
{
    public string $account_id;
    public string $gateway_id;
    public ?array $filter = null;
    public ?int $limit = null;
    public ?string $order_by = null;
    public ?string $order_by_direction = null;
}

/** AiGatewayProviderConfig entity data model. */
class AiGatewayProviderConfig
{
    public string $alias;
    public bool $default_config;
    public string $gateway_id;
    public string $id;
    public string $modified_at;
    public string $provider_slug;
    public ?float $rate_limit = null;
    public ?float $rate_limit_period = null;
    public ?string $secret = null;
    public string $secret_id;
    public string $secret_preview;
}

/** Request payload for AiGatewayProviderConfig#list. */
class AiGatewayProviderConfigListMatch
{
    public string $account_id;
    public string $gateway_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for AiGatewayProviderConfig#create. */
class AiGatewayProviderConfigCreateData
{
    public string $account_id;
    public string $gateway_id;
    public string $alias;
    public bool $default_config;
    public string $id;
    public string $modified_at;
    public string $provider_slug;
    public ?float $rate_limit = null;
    public ?float $rate_limit_period = null;
    public ?string $secret = null;
    public string $secret_id;
    public string $secret_preview;
}

/** Request payload for AiGatewayProviderConfig#update. */
class AiGatewayProviderConfigUpdateData
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
    public ?string $alias = null;
    public ?bool $default_config = null;
    public ?string $modified_at = null;
    public ?string $provider_slug = null;
    public ?float $rate_limit = null;
    public ?float $rate_limit_period = null;
    public ?string $secret = null;
    public ?string $secret_id = null;
    public ?string $secret_preview = null;
}

/** Request payload for AiGatewayProviderConfig#remove. */
class AiGatewayProviderConfigRemoveMatch
{
    public string $account_id;
    public string $gateway_id;
    public string $id;
}

/** AiSearchAccountSearch entity data model. */
class AiSearchAccountSearch
{
    public array $ai_search_options;
    public array $choices;
    public array $chunks;
    public ?array $errors = null;
    public ?string $id = null;
    public ?array $messages = null;
    public ?string $model = null;
    public ?string $object = null;
    public ?string $query = null;
    public string $query_kind;
    public ?string $search_query = null;
    public ?bool $stream = null;
}

/** Request payload for AiSearchAccountSearch#create. */
class AiSearchAccountSearchCreateData
{
    public string $account_id;
    public ?string $name = null;
    public ?string $namespace_id = null;
    public array $ai_search_options;
    public array $choices;
    public array $chunks;
    public ?array $errors = null;
    public ?string $id = null;
    public ?array $messages = null;
    public ?string $model = null;
    public ?string $object = null;
    public ?string $query = null;
    public string $query_kind;
    public ?string $search_query = null;
    public ?bool $stream = null;
}

/** AiSearchInstance entity data model. */
class AiSearchInstance
{
    public ?string $ai_gateway_id = null;
    public ?string $ai_search_model = null;
    public ?array $ai_search_options = null;
    public ?bool $cache = null;
    public ?string $cache_threshold = null;
    public mixed $cache_ttl = null;
    public array $choices;
    public ?bool $chunk = null;
    public ?int $chunk_overlap = null;
    public ?int $chunk_size = null;
    public array $chunks;
    public ?int $completed = null;
    public string $created_at;
    public ?string $created_by = null;
    public ?array $custom_metadata = null;
    public ?bool $degraded = null;
    public ?string $embedding_model = null;
    public ?bool $enable = null;
    public ?array $engine = null;
    public ?float $engine_version = null;
    public ?int $error = null;
    public ?array $file_embed_errors = null;
    public ?string $fusion_method = null;
    public ?bool $hybrid_search_enabled = null;
    public string $id;
    public array $index_method;
    public ?array $index_source_errors = null;
    public ?array $indexing_options = null;
    public ?string $last_activity = null;
    public ?int $max_num_results = null;
    public array $messages;
    public ?array $metadata = null;
    public ?string $model = null;
    public string $modified_at;
    public ?string $modified_by = null;
    public ?string $namespace = null;
    public ?string $object = null;
    public ?int $outdated = null;
    public ?bool $paused = null;
    public ?string $public_endpoint_id = null;
    public ?array $public_endpoint_params = null;
    public ?int $queued = null;
    public ?bool $reranking = null;
    public ?string $reranking_model = null;
    public ?array $retrieval_options = null;
    public ?string $rewrite_model = null;
    public ?bool $rewrite_query = null;
    public ?int $running = null;
    public ?float $score_threshold = null;
    public ?int $skipped = null;
    public ?string $source = null;
    public ?array $source_params = null;
    public ?string $status = null;
    public ?bool $stream = null;
    public ?bool $summarization = null;
    public ?string $summarization_model = null;
    public mixed $sync_interval = null;
    public ?string $system_prompt_ai_search = null;
    public ?string $system_prompt_index_summarization = null;
    public ?string $system_prompt_rewrite_query = null;
    public ?string $token_id = null;
    public ?string $type = null;
}

/** Request payload for AiSearchInstance#load. */
class AiSearchInstanceLoadMatch
{
    public string $account_id;
    public ?string $id = null;
    public ?string $namespace_id = null;
    public ?string $instance_id = null;
}

/** Request payload for AiSearchInstance#list. */
class AiSearchInstanceListMatch
{
    public string $account_id;
    public ?string $name = null;
    public ?string $hostname = null;
    public ?string $namespace = null;
    public ?string $order_by = null;
    public ?string $order_by_direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
}

/** Request payload for AiSearchInstance#create. */
class AiSearchInstanceCreateData
{
    public string $account_id;
    public ?string $instance_id = null;
    public ?string $namespace_id = null;
    public ?string $name = null;
    public ?string $ai_gateway_id = null;
    public ?string $ai_search_model = null;
    public ?array $ai_search_options = null;
    public ?bool $cache = null;
    public ?string $cache_threshold = null;
    public mixed $cache_ttl = null;
    public array $choices;
    public ?bool $chunk = null;
    public ?int $chunk_overlap = null;
    public ?int $chunk_size = null;
    public array $chunks;
    public ?int $completed = null;
    public string $created_at;
    public ?string $created_by = null;
    public ?array $custom_metadata = null;
    public ?bool $degraded = null;
    public ?string $embedding_model = null;
    public ?bool $enable = null;
    public ?array $engine = null;
    public ?float $engine_version = null;
    public ?int $error = null;
    public ?array $file_embed_errors = null;
    public ?string $fusion_method = null;
    public ?bool $hybrid_search_enabled = null;
    public string $id;
    public array $index_method;
    public ?array $index_source_errors = null;
    public ?array $indexing_options = null;
    public ?string $last_activity = null;
    public ?int $max_num_results = null;
    public array $messages;
    public ?array $metadata = null;
    public ?string $model = null;
    public string $modified_at;
    public ?string $modified_by = null;
    public ?string $namespace = null;
    public ?string $object = null;
    public ?int $outdated = null;
    public ?bool $paused = null;
    public ?string $public_endpoint_id = null;
    public ?array $public_endpoint_params = null;
    public ?int $queued = null;
    public ?bool $reranking = null;
    public ?string $reranking_model = null;
    public ?array $retrieval_options = null;
    public ?string $rewrite_model = null;
    public ?bool $rewrite_query = null;
    public ?int $running = null;
    public ?float $score_threshold = null;
    public ?int $skipped = null;
    public ?string $source = null;
    public ?array $source_params = null;
    public ?string $status = null;
    public ?bool $stream = null;
    public ?bool $summarization = null;
    public ?string $summarization_model = null;
    public mixed $sync_interval = null;
    public ?string $system_prompt_ai_search = null;
    public ?string $system_prompt_index_summarization = null;
    public ?string $system_prompt_rewrite_query = null;
    public ?string $token_id = null;
    public ?string $type = null;
}

/** Request payload for AiSearchInstance#update. */
class AiSearchInstanceUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $namespace_id = null;
    public ?string $ai_gateway_id = null;
    public ?string $ai_search_model = null;
    public ?array $ai_search_options = null;
    public ?bool $cache = null;
    public ?string $cache_threshold = null;
    public mixed $cache_ttl = null;
    public ?array $choices = null;
    public ?bool $chunk = null;
    public ?int $chunk_overlap = null;
    public ?int $chunk_size = null;
    public ?array $chunks = null;
    public ?int $completed = null;
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?array $custom_metadata = null;
    public ?bool $degraded = null;
    public ?string $embedding_model = null;
    public ?bool $enable = null;
    public ?array $engine = null;
    public ?float $engine_version = null;
    public ?int $error = null;
    public ?array $file_embed_errors = null;
    public ?string $fusion_method = null;
    public ?bool $hybrid_search_enabled = null;
    public ?array $index_method = null;
    public ?array $index_source_errors = null;
    public ?array $indexing_options = null;
    public ?string $last_activity = null;
    public ?int $max_num_results = null;
    public ?array $messages = null;
    public ?array $metadata = null;
    public ?string $model = null;
    public ?string $modified_at = null;
    public ?string $modified_by = null;
    public ?string $namespace = null;
    public ?string $object = null;
    public ?int $outdated = null;
    public ?bool $paused = null;
    public ?string $public_endpoint_id = null;
    public ?array $public_endpoint_params = null;
    public ?int $queued = null;
    public ?bool $reranking = null;
    public ?string $reranking_model = null;
    public ?array $retrieval_options = null;
    public ?string $rewrite_model = null;
    public ?bool $rewrite_query = null;
    public ?int $running = null;
    public ?float $score_threshold = null;
    public ?int $skipped = null;
    public ?string $source = null;
    public ?array $source_params = null;
    public ?string $status = null;
    public ?bool $stream = null;
    public ?bool $summarization = null;
    public ?string $summarization_model = null;
    public mixed $sync_interval = null;
    public ?string $system_prompt_ai_search = null;
    public ?string $system_prompt_index_summarization = null;
    public ?string $system_prompt_rewrite_query = null;
    public ?string $token_id = null;
    public ?string $type = null;
}

/** Request payload for AiSearchInstance#remove. */
class AiSearchInstanceRemoveMatch
{
    public string $account_id;
    public string $id;
    public ?string $namespace_id = null;
}

/** AiSearchInstancesItem entity data model. */
class AiSearchInstancesItem
{
    public string $action;
    public string $checksum;
    public int $chunkCount;
    public int $chunks_count;
    public string $created_at;
    public ?float $end_byte = null;
    public ?string $error = null;
    public string $errorType;
    public string $fileKey;
    public float $file_size;
    public string $id;
    public array $item;
    public string $key;
    public string $last_seen_at;
    public string $message;
    public array $metadata;
    public string $namespace;
    public string $next_action;
    public int $processingTimeMs;
    public string $source_id;
    public ?float $start_byte = null;
    public string $status;
    public string $text;
    public string $timestamp;
    public ?bool $wait_for_completion = null;
    public ?array $warnings = null;
}

/** Request payload for AiSearchInstancesItem#load. */
class AiSearchInstancesItemLoadMatch
{
    public string $account_id;
    public ?string $id = null;
    public string $instance_id;
    public string $namespace_id;
    public ?string $item_id = null;
}

/** Request payload for AiSearchInstancesItem#list. */
class AiSearchInstancesItemListMatch
{
    public string $account_id;
    public string $instance_id;
    public string $namespace_id;
    public ?string $item_id = null;
    public ?string $key = null;
    public ?string $metadata_filter = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
    public ?string $sort_by = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $cursor = null;
    public ?int $limit = null;
    public ?int $offset = null;
}

/** Request payload for AiSearchInstancesItem#create. */
class AiSearchInstancesItemCreateData
{
    public string $account_id;
    public string $instance_id;
    public string $namespace_id;
    public string $action;
    public string $checksum;
    public int $chunkCount;
    public int $chunks_count;
    public string $created_at;
    public ?float $end_byte = null;
    public ?string $error = null;
    public string $errorType;
    public string $fileKey;
    public float $file_size;
    public string $id;
    public array $item;
    public string $key;
    public string $last_seen_at;
    public string $message;
    public array $metadata;
    public string $namespace;
    public string $next_action;
    public int $processingTimeMs;
    public string $source_id;
    public ?float $start_byte = null;
    public string $status;
    public string $text;
    public string $timestamp;
    public ?bool $wait_for_completion = null;
    public ?array $warnings = null;
}

/** Request payload for AiSearchInstancesItem#update. */
class AiSearchInstancesItemUpdateData
{
    public string $account_id;
    public string $instance_id;
    public string $namespace_id;
    public ?string $action = null;
    public ?string $checksum = null;
    public ?int $chunkCount = null;
    public ?int $chunks_count = null;
    public ?string $created_at = null;
    public ?float $end_byte = null;
    public ?string $error = null;
    public ?string $errorType = null;
    public ?string $fileKey = null;
    public ?float $file_size = null;
    public ?string $id = null;
    public ?array $item = null;
    public ?string $key = null;
    public ?string $last_seen_at = null;
    public ?string $message = null;
    public ?array $metadata = null;
    public ?string $namespace = null;
    public ?string $next_action = null;
    public ?int $processingTimeMs = null;
    public ?string $source_id = null;
    public ?float $start_byte = null;
    public ?string $status = null;
    public ?string $text = null;
    public ?string $timestamp = null;
    public ?bool $wait_for_completion = null;
    public ?array $warnings = null;
}

/** Request payload for AiSearchInstancesItem#remove. */
class AiSearchInstancesItemRemoveMatch
{
    public string $account_id;
    public string $id;
    public string $instance_id;
    public string $namespace_id;
}

/** AiSearchInstancesJob entity data model. */
class AiSearchInstancesJob
{
    public string $action;
    public float $created_at;
    public ?string $description = null;
    public ?string $end_reason = null;
    public ?string $ended_at = null;
    public string $id;
    public ?string $last_seen_at = null;
    public string $message;
    public int $message_type;
    public string $source;
    public ?string $started_at = null;
}

/** Request payload for AiSearchInstancesJob#load. */
class AiSearchInstancesJobLoadMatch
{
    public string $account_id;
    public string $id;
    public string $instance_id;
    public ?string $namespace_id = null;
}

/** Request payload for AiSearchInstancesJob#list. */
class AiSearchInstancesJobListMatch
{
    public string $account_id;
    public string $instance_id;
    public ?string $job_id = null;
    public ?string $namespace_id = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for AiSearchInstancesJob#create. */
class AiSearchInstancesJobCreateData
{
    public string $account_id;
    public string $instance_id;
    public ?string $namespace_id = null;
    public string $action;
    public float $created_at;
    public ?string $description = null;
    public ?string $end_reason = null;
    public ?string $ended_at = null;
    public string $id;
    public ?string $last_seen_at = null;
    public string $message;
    public int $message_type;
    public string $source;
    public ?string $started_at = null;
}

/** Request payload for AiSearchInstancesJob#update. */
class AiSearchInstancesJobUpdateData
{
    public string $account_id;
    public string $id;
    public string $instance_id;
    public ?string $namespace_id = null;
    public ?string $action = null;
    public ?float $created_at = null;
    public ?string $description = null;
    public ?string $end_reason = null;
    public ?string $ended_at = null;
    public ?string $last_seen_at = null;
    public ?string $message = null;
    public ?int $message_type = null;
    public ?string $source = null;
    public ?string $started_at = null;
}

/** AiSearchNamespace entity data model. */
class AiSearchNamespace
{
    public string $created_at;
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public string $new_namespace;
    public ?string $public_endpoint_id = null;
    public ?array $public_endpoint_params = null;
}

/** Request payload for AiSearchNamespace#load. */
class AiSearchNamespaceLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for AiSearchNamespace#list. */
class AiSearchNamespaceListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
}

/** Request payload for AiSearchNamespace#create. */
class AiSearchNamespaceCreateData
{
    public string $account_id;
    public string $created_at;
    public ?string $description = null;
    public ?string $id = null;
    public string $name;
    public string $new_namespace;
    public ?string $public_endpoint_id = null;
    public ?array $public_endpoint_params = null;
}

/** Request payload for AiSearchNamespace#update. */
class AiSearchNamespaceUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?string $new_namespace = null;
    public ?string $public_endpoint_id = null;
    public ?array $public_endpoint_params = null;
}

/** Request payload for AiSearchNamespace#remove. */
class AiSearchNamespaceRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** AiSearchToken entity data model. */
class AiSearchToken
{
    public string $cf_api_id;
    public string $cf_api_key;
    public string $created_at;
    public ?string $created_by = null;
    public ?bool $enabled = null;
    public string $id;
    public ?bool $legacy = null;
    public string $modified_at;
    public ?string $modified_by = null;
    public string $name;
}

/** Request payload for AiSearchToken#load. */
class AiSearchTokenLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for AiSearchToken#list. */
class AiSearchTokenListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
}

/** Request payload for AiSearchToken#create. */
class AiSearchTokenCreateData
{
    public string $account_id;
    public string $cf_api_id;
    public string $cf_api_key;
    public string $created_at;
    public ?string $created_by = null;
    public ?bool $enabled = null;
    public string $id;
    public ?bool $legacy = null;
    public string $modified_at;
    public ?string $modified_by = null;
    public string $name;
}

/** Request payload for AiSearchToken#update. */
class AiSearchTokenUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $cf_api_id = null;
    public ?string $cf_api_key = null;
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?bool $enabled = null;
    public ?bool $legacy = null;
    public ?string $modified_at = null;
    public ?string $modified_by = null;
    public ?string $name = null;
}

/** Request payload for AiSearchToken#remove. */
class AiSearchTokenRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** AigBillingCreateTopup entity data model. */
class AigBillingCreateTopup
{
    public int $amount;
    public array $errors;
    public array $messages;
    public ?string $payment_method_id = null;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingCreateTopup#create. */
class AigBillingCreateTopupCreateData
{
    public string $account_id;
    public int $amount;
    public array $errors;
    public array $messages;
    public ?string $payment_method_id = null;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** AigBillingDeleteSpendingLimit entity data model. */
class AigBillingDeleteSpendingLimit
{
}

/** Request payload for AigBillingDeleteSpendingLimit#remove. */
class AigBillingDeleteSpendingLimitRemoveMatch
{
    public string $account_id;
}

/** AigBillingDeleteTopupConfig entity data model. */
class AigBillingDeleteTopupConfig
{
}

/** Request payload for AigBillingDeleteTopupConfig#remove. */
class AigBillingDeleteTopupConfigRemoveMatch
{
    public string $account_id;
}

/** AigBillingGetCreditBalance entity data model. */
class AigBillingGetCreditBalance
{
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingGetCreditBalance#list. */
class AigBillingGetCreditBalanceListMatch
{
    public string $account_id;
}

/** AigBillingGetInvoiceHistory entity data model. */
class AigBillingGetInvoiceHistory
{
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingGetInvoiceHistory#list. */
class AigBillingGetInvoiceHistoryListMatch
{
    public string $account_id;
    public ?string $type = null;
}

/** AigBillingGetInvoicePreview entity data model. */
class AigBillingGetInvoicePreview
{
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingGetInvoicePreview#list. */
class AigBillingGetInvoicePreviewListMatch
{
    public string $account_id;
}

/** AigBillingGetSpendingLimit entity data model. */
class AigBillingGetSpendingLimit
{
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingGetSpendingLimit#list. */
class AigBillingGetSpendingLimitListMatch
{
    public string $account_id;
}

/** AigBillingGetTopupConfig entity data model. */
class AigBillingGetTopupConfig
{
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingGetTopupConfig#list. */
class AigBillingGetTopupConfigListMatch
{
    public string $account_id;
}

/** AigBillingGetTopupEligibility entity data model. */
class AigBillingGetTopupEligibility
{
    public array $errors;
    public array $messages;
    public ?array $payment_methods = null;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingGetTopupEligibility#create. */
class AigBillingGetTopupEligibilityCreateData
{
    public string $account_id;
    public array $errors;
    public array $messages;
    public ?array $payment_methods = null;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** AigBillingGetTopupLimit entity data model. */
class AigBillingGetTopupLimit
{
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingGetTopupLimit#list. */
class AigBillingGetTopupLimitListMatch
{
    public string $account_id;
}

/** AigBillingGetUsageHistory entity data model. */
class AigBillingGetUsageHistory
{
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingGetUsageHistory#list. */
class AigBillingGetUsageHistoryListMatch
{
    public string $account_id;
    public ?float $end_time = null;
    public ?float $start_time = null;
    public string $value_grouping_window;
}

/** AigBillingSetSpendingLimit entity data model. */
class AigBillingSetSpendingLimit
{
    public int $amount;
    public string $duration;
    public string $strategy;
}

/** Request payload for AigBillingSetSpendingLimit#create. */
class AigBillingSetSpendingLimitCreateData
{
    public string $account_id;
    public int $amount;
    public string $duration;
    public string $strategy;
}

/** AigBillingSetTopupConfig entity data model. */
class AigBillingSetTopupConfig
{
    public int $amount;
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
    public int $threshold;
}

/** Request payload for AigBillingSetTopupConfig#create. */
class AigBillingSetTopupConfigCreateData
{
    public string $account_id;
    public int $amount;
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
    public int $threshold;
}

/** AigBillingTopupStatus entity data model. */
class AigBillingTopupStatus
{
    public array $errors;
    public array $messages;
    public string $payment_intent_id;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AigBillingTopupStatus#create. */
class AigBillingTopupStatusCreateData
{
    public string $account_id;
    public array $errors;
    public array $messages;
    public string $payment_intent_id;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** AutoRagJob entity data model. */
class AutoRagJob
{
    public float $created_at;
    public ?string $end_reason = null;
    public ?string $ended_at = null;
    public string $id;
    public ?string $last_seen_at = null;
    public string $message;
    public int $message_type;
    public string $source;
    public ?string $started_at = null;
}

/** Request payload for AutoRagJob#load. */
class AutoRagJobLoadMatch
{
    public string $account_id;
    public string $id;
    public string $rag_id;
}

/** Request payload for AutoRagJob#list. */
class AutoRagJobListMatch
{
    public string $account_id;
    public ?string $job_id = null;
    public string $rag_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** AutoRagRag entity data model. */
class AutoRagRag
{
    public string $error;
    public string $job_id;
    public string $key;
}

/** Request payload for AutoRagRag#list. */
class AutoRagRagListMatch
{
    public string $account_id;
    public string $rag_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
    public ?string $status = null;
}

/** Request payload for AutoRagRag#update. */
class AutoRagRagUpdateData
{
    public string $account_id;
    public string $rag_id;
    public ?string $error = null;
    public ?string $job_id = null;
    public ?string $key = null;
}

/** AutoRagRagSearch entity data model. */
class AutoRagRagSearch
{
    public ?array $data = null;
    public mixed $filters = null;
    public ?bool $has_more = null;
    public ?int $max_num_results = null;
    public mixed $model = null;
    public ?string $next_page = null;
    public ?string $object = null;
    public string $query;
    public ?array $ranking_options = null;
    public ?array $reranking = null;
    public string $response;
    public ?bool $rewrite_query = null;
    public string $search_query;
    public ?bool $stream = null;
    public ?string $system_prompt = null;
}

/** Request payload for AutoRagRagSearch#create. */
class AutoRagRagSearchCreateData
{
    public string $account_id;
    public string $rag_id;
    public ?array $data = null;
    public mixed $filters = null;
    public ?bool $has_more = null;
    public ?int $max_num_results = null;
    public mixed $model = null;
    public ?string $next_page = null;
    public ?string $object = null;
    public string $query;
    public ?array $ranking_options = null;
    public ?array $reranking = null;
    public string $response;
    public ?bool $rewrite_query = null;
    public string $search_query;
    public ?bool $stream = null;
    public ?string $system_prompt = null;
}

/** FinetuneAsset entity data model. */
class FinetuneAsset
{
    public string $file_name;
    public string $file_url;
    public ?string $id = null;
}

/** Request payload for FinetuneAsset#load. */
class FinetuneAssetLoadMatch
{
    public string $account_id;
    public string $finetune_id;
    public string $id;
}

/** Memory entity data model. */
class Memory
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for Memory#load. */
class MemoryLoadMatch
{
    public string $account_id;
    public string $id;
    public string $namespace_id;
    public string $profile_id;
}

/** Request payload for Memory#list. */
class MemoryListMatch
{
    public string $account_id;
    public ?string $namespace_id = null;
    public ?string $profile_name = null;
    public ?string $cursor = null;
    public ?int $per_page = null;
    public ?string $session_id = null;
    public ?string $type = null;
    public ?string $namespace_name = null;
}

/** Request payload for Memory#create. */
class MemoryCreateData
{
    public string $account_id;
    public string $namespace_id;
    public string $profile_name;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for Memory#remove. */
class MemoryRemoveMatch
{
    public string $account_id;
    public ?string $id = null;
    public string $namespace_id;
    public ?string $profile_id = null;
    public ?string $session_id = null;
    public ?string $profile_name = null;
}

/** Namespace entity data model. */
class NamespaceType
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for Namespace#load. */
class NamespaceLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Namespace#list. */
class NamespaceListMatch
{
    public string $account_id;
    public ?string $cursor = null;
    public ?string $direction = null;
    public ?string $order = null;
    public ?int $per_page = null;
}

/** Request payload for Namespace#create. */
class NamespaceCreateData
{
    public string $account_id;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $result;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for Namespace#remove. */
class NamespaceRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Vectorize entity data model. */
class Vectorize
{
    public mixed $config;
    public ?string $description = null;
    public array $errors;
    public ?array $ids = null;
    public string $indexType;
    public array $messages;
    public string $name;
    public string $propertyName;
    public array $result;
    public bool $success;
}

/** Request payload for Vectorize#load. */
class VectorizeLoadMatch
{
    public string $account_id;
    public ?string $index_name = null;
    public ?int $count = null;
    public ?string $cursor = null;
    public ?string $index_id = null;
}

/** Request payload for Vectorize#list. */
class VectorizeListMatch
{
    public string $account_id;
}

/** Request payload for Vectorize#create. */
class VectorizeCreateData
{
    public string $account_id;
    public ?string $index_id = null;
    public ?string $index_name = null;
    public mixed $config;
    public ?string $description = null;
    public array $errors;
    public ?array $ids = null;
    public string $indexType;
    public array $messages;
    public string $name;
    public string $propertyName;
    public array $result;
    public bool $success;
}

/** Request payload for Vectorize#remove. */
class VectorizeRemoveMatch
{
    public string $account_id;
    public string $index_name;
}

/** VectorizeBetaDeprecated entity data model. */
class VectorizeBetaDeprecated
{
    public mixed $config;
    public ?string $description = null;
    public array $errors;
    public ?array $ids = null;
    public array $messages;
    public string $name;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for VectorizeBetaDeprecated#load. */
class VectorizeBetaDeprecatedLoadMatch
{
    public string $account_id;
    public string $index_name;
}

/** Request payload for VectorizeBetaDeprecated#list. */
class VectorizeBetaDeprecatedListMatch
{
    public string $account_id;
}

/** Request payload for VectorizeBetaDeprecated#create. */
class VectorizeBetaDeprecatedCreateData
{
    public string $account_id;
    public ?string $index_name = null;
    public mixed $config;
    public ?string $description = null;
    public array $errors;
    public ?array $ids = null;
    public array $messages;
    public string $name;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for VectorizeBetaDeprecated#update. */
class VectorizeBetaDeprecatedUpdateData
{
    public string $account_id;
    public string $index_name;
    public mixed $config = null;
    public ?string $description = null;
    public ?array $errors = null;
    public ?array $ids = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for VectorizeBetaDeprecated#remove. */
class VectorizeBetaDeprecatedRemoveMatch
{
    public string $account_id;
    public string $index_name;
}

/** WorkersAi entity data model. */
class WorkersAi
{
    public array $errors;
    public string $extension;
    public array $input;
    public array $messages;
    public string $mimeType;
    public string $model;
    public ?array $options = null;
    public array $output;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for WorkersAi#load. */
class WorkersAiLoadMatch
{
    public string $account_id;
    public ?string $author = null;
    public ?string $format = null;
    public ?bool $hide_experimental = null;
    public ?bool $include_deprecated = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $search = null;
    public ?float $source = null;
    public ?string $task = null;
    public ?string $model = null;
}

/** Request payload for WorkersAi#list. */
class WorkersAiListMatch
{
    public string $account_id;
}

/** Request payload for WorkersAi#create. */
class WorkersAiCreateData
{
    public string $account_id;
    public ?string $model_name = null;
    public array $errors;
    public string $extension;
    public array $input;
    public array $messages;
    public string $mimeType;
    public string $model;
    public ?array $options = null;
    public array $output;
    public ?array $result = null;
    public bool $success;
}

/** WorkersAiFinetune entity data model. */
class WorkersAiFinetune
{
    public string $created_at;
    public ?string $description = null;
    public string $id;
    public string $model;
    public string $modified_at;
    public string $name;
    public bool $public;
    public bool $success;
}

/** Request payload for WorkersAiFinetune#load. */
class WorkersAiFinetuneLoadMatch
{
    public string $account_id;
}

/** Request payload for WorkersAiFinetune#list. */
class WorkersAiFinetuneListMatch
{
    public string $account_id;
    public ?float $limit = null;
    public ?float $offset = null;
    public ?string $order_by = null;
}

/** Request payload for WorkersAiFinetune#create. */
class WorkersAiFinetuneCreateData
{
    public string $account_id;
    public ?string $finetune_id = null;
    public string $created_at;
    public ?string $description = null;
    public string $id;
    public string $model;
    public string $modified_at;
    public string $name;
    public bool $public;
    public bool $success;
}

/** Request payload for WorkersAiFinetune#remove. */
class WorkersAiFinetuneRemoveMatch
{
    public string $account_id;
    public string $id;
}

