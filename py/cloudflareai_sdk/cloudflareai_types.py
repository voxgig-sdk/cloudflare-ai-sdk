# Typed models for the CloudflareAi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Account(TypedDict, total=False):
    id: str


class AccountLoadMatch(TypedDict):
    id: str


class AccountUpdateData(TypedDict):
    id: str


class AiGatewayRequired(TypedDict):
    items: list
    metadata: dict
    options: dict
    query: str


class AiGateway(AiGatewayRequired, total=False):
    byokAlias: str
    limit: int
    provider: str


class AiGatewayCreateDataRequired(TypedDict):
    account_id: str
    items: list
    metadata: dict
    options: dict
    query: str


class AiGatewayCreateData(AiGatewayCreateDataRequired, total=False):
    byokAlias: str
    limit: int
    provider: str


class AiGatewayCustomDomainRequired(TypedDict):
    cname_target: str
    created_at: int
    domain: str
    gateway_id: str
    hostname: str
    modified_at: int
    ssl_hostname_id: str
    status: str
    zone_id: str


class AiGatewayCustomDomain(AiGatewayCustomDomainRequired, total=False):
    id: str
    minTLS: str


class AiGatewayCustomDomainLoadMatch(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayCustomDomainListMatchRequired(TypedDict):
    account_id: str
    gateway_id: str


class AiGatewayCustomDomainListMatch(AiGatewayCustomDomainListMatchRequired, total=False):
    page: int
    per_page: int
    search: str
    status: str


class AiGatewayCustomDomainCreateDataRequired(TypedDict):
    account_id: str
    gateway_id: str
    cname_target: str
    created_at: int
    domain: str
    hostname: str
    modified_at: int
    ssl_hostname_id: str
    status: str
    zone_id: str


class AiGatewayCustomDomainCreateData(AiGatewayCustomDomainCreateDataRequired, total=False):
    id: str
    minTLS: str


class AiGatewayCustomDomainRemoveMatch(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayCustomProviderRequired(TypedDict):
    base_url: str
    created_at: str
    id: str
    modified_at: str
    name: str
    slug: str


class AiGatewayCustomProvider(AiGatewayCustomProviderRequired, total=False):
    beta: bool
    curl_example: str
    description: str
    enable: bool
    headers: str
    js_example: str
    link: str
    logo: str
    position: int


class AiGatewayCustomProviderLoadMatch(TypedDict):
    account_id: str
    id: str


class AiGatewayCustomProviderListMatchRequired(TypedDict):
    account_id: str


class AiGatewayCustomProviderListMatch(AiGatewayCustomProviderListMatchRequired, total=False):
    beta: bool
    enable: bool
    page: int
    per_page: int
    search: str


class AiGatewayCustomProviderCreateDataRequired(TypedDict):
    account_id: str
    base_url: str
    created_at: str
    id: str
    modified_at: str
    name: str
    slug: str


class AiGatewayCustomProviderCreateData(AiGatewayCustomProviderCreateDataRequired, total=False):
    beta: bool
    curl_example: str
    description: str
    enable: bool
    headers: str
    js_example: str
    link: str
    logo: str
    position: int


class AiGatewayCustomProviderUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class AiGatewayCustomProviderUpdateData(AiGatewayCustomProviderUpdateDataRequired, total=False):
    base_url: str
    beta: bool
    created_at: str
    curl_example: str
    description: str
    enable: bool
    headers: str
    js_example: str
    link: str
    logo: str
    modified_at: str
    name: str
    position: int
    slug: str


class AiGatewayCustomProviderRemoveMatch(TypedDict):
    account_id: str
    id: str


class AiGatewayCustomProviderCostRequired(TypedDict):
    account_provider_id: str
    created_at: str
    id: str
    model: str
    modified_at: str


class AiGatewayCustomProviderCost(AiGatewayCustomProviderCostRequired, total=False):
    changed_by: str
    cost_in: float
    cost_out: float
    cost_type: str
    enable: bool
    model_rule: str
    token_pricing: str
    weight: int


class AiGatewayCustomProviderCostLoadMatch(TypedDict):
    account_id: str
    id: str


class AiGatewayCustomProviderCostListMatchRequired(TypedDict):
    account_id: str


class AiGatewayCustomProviderCostListMatch(AiGatewayCustomProviderCostListMatchRequired, total=False):
    account_provider_id: str
    cost_type: str
    enable: bool
    model_rule: str
    page: int
    per_page: int
    search: str


class AiGatewayCustomProviderCostCreateDataRequired(TypedDict):
    account_id: str
    account_provider_id: str
    created_at: str
    id: str
    model: str
    modified_at: str


class AiGatewayCustomProviderCostCreateData(AiGatewayCustomProviderCostCreateDataRequired, total=False):
    changed_by: str
    cost_in: float
    cost_out: float
    cost_type: str
    enable: bool
    model_rule: str
    token_pricing: str
    weight: int


class AiGatewayCustomProviderCostUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class AiGatewayCustomProviderCostUpdateData(AiGatewayCustomProviderCostUpdateDataRequired, total=False):
    account_provider_id: str
    changed_by: str
    cost_in: float
    cost_out: float
    cost_type: str
    created_at: str
    enable: bool
    model: str
    model_rule: str
    modified_at: str
    token_pricing: str
    weight: int


class AiGatewayCustomProviderCostRemoveMatch(TypedDict):
    account_id: str
    id: str


class AiGatewayDataset(TypedDict):
    created_at: str
    enable: bool
    filters: list
    gateway_id: str
    id: str
    modified_at: str
    name: str


class AiGatewayDatasetLoadMatch(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayDatasetListMatchRequired(TypedDict):
    account_id: str
    gateway_id: str


class AiGatewayDatasetListMatch(AiGatewayDatasetListMatchRequired, total=False):
    enable: bool
    name: str
    page: int
    per_page: int
    search: str


class AiGatewayDatasetCreateData(TypedDict):
    account_id: str
    gateway_id: str
    created_at: str
    enable: bool
    filters: list
    id: str
    modified_at: str
    name: str


class AiGatewayDatasetUpdateDataRequired(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayDatasetUpdateData(AiGatewayDatasetUpdateDataRequired, total=False):
    created_at: str
    enable: bool
    filters: list
    modified_at: str
    name: str


class AiGatewayDatasetRemoveMatch(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayDynamicRouteRequired(TypedDict):
    account_tag: str
    active: bool
    created_at: str
    data: str
    deployment: dict
    deployments: list
    elements: list
    gateway_id: str
    id: str
    modified_at: str
    name: str
    order_by: str
    order_by_direction: str
    page: float
    per_page: float
    routes: list
    version: dict
    version_id: str
    versions: list


class AiGatewayDynamicRoute(AiGatewayDynamicRouteRequired, total=False):
    is_valid: bool


class AiGatewayDynamicRouteLoadMatchRequired(TypedDict):
    account_id: str
    gateway_id: str


class AiGatewayDynamicRouteLoadMatch(AiGatewayDynamicRouteLoadMatchRequired, total=False):
    page: int
    per_page: int
    route_id: str
    version_id: str
    id: str


class AiGatewayDynamicRouteCreateDataRequired(TypedDict):
    account_id: str
    gateway_id: str
    account_tag: str
    active: bool
    created_at: str
    data: str
    deployment: dict
    deployments: list
    elements: list
    id: str
    modified_at: str
    name: str
    order_by: str
    order_by_direction: str
    page: float
    per_page: float
    routes: list
    version: dict
    version_id: str
    versions: list


class AiGatewayDynamicRouteCreateData(AiGatewayDynamicRouteCreateDataRequired, total=False):
    route_id: str
    is_valid: bool


class AiGatewayDynamicRouteUpdateDataRequired(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayDynamicRouteUpdateData(AiGatewayDynamicRouteUpdateDataRequired, total=False):
    account_tag: str
    active: bool
    created_at: str
    data: str
    deployment: dict
    deployments: list
    elements: list
    is_valid: bool
    modified_at: str
    name: str
    order_by: str
    order_by_direction: str
    page: float
    per_page: float
    routes: list
    version: dict
    version_id: str
    versions: list


class AiGatewayDynamicRouteRemoveMatch(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayEvaluation(TypedDict):
    created_at: str
    dataset_ids: list
    datasets: list
    description: str
    enable: bool
    evaluation_type_ids: list
    gateway_id: str
    id: str
    mandatory: bool
    modified_at: str
    name: str
    processed: bool
    results: list
    total_logs: float
    type: str


class AiGatewayEvaluationLoadMatch(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayEvaluationListMatchRequired(TypedDict):
    account_id: str


class AiGatewayEvaluationListMatch(AiGatewayEvaluationListMatchRequired, total=False):
    gateway_id: str
    name: str
    page: int
    per_page: int
    processed: bool
    search: str
    order_by: str
    order_by_direction: str


class AiGatewayEvaluationCreateData(TypedDict):
    account_id: str
    gateway_id: str
    created_at: str
    dataset_ids: list
    datasets: list
    description: str
    enable: bool
    evaluation_type_ids: list
    id: str
    mandatory: bool
    modified_at: str
    name: str
    processed: bool
    results: list
    total_logs: float
    type: str


class AiGatewayEvaluationRemoveMatch(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayGatewayRequired(TypedDict):
    cache_invalidate_on_update: bool
    cache_ttl: int
    collect_logs: bool
    created_at: str
    guardrails: dict
    id: str
    modified_at: str
    rate_limiting_interval: int
    rate_limiting_limit: int
    result: str
    stripe: dict
    success: bool


class AiGatewayGateway(AiGatewayGatewayRequired, total=False):
    authentication: bool
    byok_only: bool
    dlp: Any
    is_default: bool
    log_classification: bool
    log_management: int
    log_management_strategy: str
    logpush: bool
    logpush_public_key: str
    otel: list
    rate_limiting_technique: str
    retry_backoff: str
    retry_delay: int
    retry_max_attempts: int
    spend_limits: dict
    store_id: str
    workers_ai_billing_mode: str
    zdr: bool


class AiGatewayGatewayLoadMatchRequired(TypedDict):
    account_id: str


class AiGatewayGatewayLoadMatch(AiGatewayGatewayLoadMatchRequired, total=False):
    gateway_id: str
    provider: str
    id: str


class AiGatewayGatewayListMatchRequired(TypedDict):
    account_id: str


class AiGatewayGatewayListMatch(AiGatewayGatewayListMatchRequired, total=False):
    page: int
    per_page: int
    search: str


class AiGatewayGatewayCreateDataRequired(TypedDict):
    account_id: str
    cache_invalidate_on_update: bool
    cache_ttl: int
    collect_logs: bool
    created_at: str
    guardrails: dict
    id: str
    modified_at: str
    rate_limiting_interval: int
    rate_limiting_limit: int
    result: str
    stripe: dict
    success: bool


class AiGatewayGatewayCreateData(AiGatewayGatewayCreateDataRequired, total=False):
    authentication: bool
    byok_only: bool
    dlp: Any
    is_default: bool
    log_classification: bool
    log_management: int
    log_management_strategy: str
    logpush: bool
    logpush_public_key: str
    otel: list
    rate_limiting_technique: str
    retry_backoff: str
    retry_delay: int
    retry_max_attempts: int
    spend_limits: dict
    store_id: str
    workers_ai_billing_mode: str
    zdr: bool


class AiGatewayGatewayUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class AiGatewayGatewayUpdateData(AiGatewayGatewayUpdateDataRequired, total=False):
    authentication: bool
    byok_only: bool
    cache_invalidate_on_update: bool
    cache_ttl: int
    collect_logs: bool
    created_at: str
    dlp: Any
    guardrails: dict
    is_default: bool
    log_classification: bool
    log_management: int
    log_management_strategy: str
    logpush: bool
    logpush_public_key: str
    modified_at: str
    otel: list
    rate_limiting_interval: int
    rate_limiting_limit: int
    rate_limiting_technique: str
    result: str
    retry_backoff: str
    retry_delay: int
    retry_max_attempts: int
    spend_limits: dict
    store_id: str
    stripe: dict
    success: bool
    workers_ai_billing_mode: str
    zdr: bool


class AiGatewayGatewayRemoveMatch(TypedDict):
    account_id: str
    id: str


class AiGatewayLogRequired(TypedDict):
    cached: bool
    created_at: str
    duration: int
    id: str
    model: str
    path: str
    provider: str
    success: bool
    tokens_in: int
    tokens_out: int


class AiGatewayLog(AiGatewayLogRequired, total=False):
    cost: float
    custom_cost: bool
    feedback: float
    metadata: str
    model_type: str
    request_content_type: str
    request_head: str
    request_head_complete: bool
    request_size: int
    request_type: str
    response_content_type: str
    response_head: str
    response_head_complete: bool
    response_size: int
    score: float
    status_code: int
    step: int


class AiGatewayLogLoadMatchRequired(TypedDict):
    account_id: str
    gateway_id: str


class AiGatewayLogLoadMatch(AiGatewayLogLoadMatchRequired, total=False):
    id: str
    log_id: str


class AiGatewayLogListMatchRequired(TypedDict):
    account_id: str
    gateway_id: str


class AiGatewayLogListMatch(AiGatewayLogListMatchRequired, total=False):
    cached: bool
    direction: str
    end_date: str
    feedback: Any
    filter: list
    max_cost: float
    max_duration: float
    max_tokens_in: float
    max_tokens_out: float
    max_total_token: float
    meta_info: bool
    min_cost: float
    min_duration: float
    min_tokens_in: float
    min_tokens_out: float
    min_total_token: float
    model: str
    model_type: str
    order_by: str
    order_by_direction: str
    page: int
    per_page: int
    provider: str
    request_content_type: str
    response_content_type: str
    search: str
    start_date: str
    success: bool


class AiGatewayLogUpdateDataRequired(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayLogUpdateData(AiGatewayLogUpdateDataRequired, total=False):
    cached: bool
    cost: float
    created_at: str
    custom_cost: bool
    duration: int
    feedback: float
    metadata: str
    model: str
    model_type: str
    path: str
    provider: str
    request_content_type: str
    request_head: str
    request_head_complete: bool
    request_size: int
    request_type: str
    response_content_type: str
    response_head: str
    response_head_complete: bool
    response_size: int
    score: float
    status_code: int
    step: int
    success: bool
    tokens_in: int
    tokens_out: int


class AiGatewayLogRemoveMatchRequired(TypedDict):
    account_id: str
    gateway_id: str


class AiGatewayLogRemoveMatch(AiGatewayLogRemoveMatchRequired, total=False):
    filter: list
    limit: int
    order_by: str
    order_by_direction: str


class AiGatewayProviderConfigRequired(TypedDict):
    alias: str
    default_config: bool
    gateway_id: str
    id: str
    modified_at: str
    provider_slug: str
    secret_id: str
    secret_preview: str


class AiGatewayProviderConfig(AiGatewayProviderConfigRequired, total=False):
    rate_limit: float
    rate_limit_period: float
    secret: str


class AiGatewayProviderConfigListMatchRequired(TypedDict):
    account_id: str
    gateway_id: str


class AiGatewayProviderConfigListMatch(AiGatewayProviderConfigListMatchRequired, total=False):
    page: int
    per_page: int


class AiGatewayProviderConfigCreateDataRequired(TypedDict):
    account_id: str
    gateway_id: str
    alias: str
    default_config: bool
    id: str
    modified_at: str
    provider_slug: str
    secret_id: str
    secret_preview: str


class AiGatewayProviderConfigCreateData(AiGatewayProviderConfigCreateDataRequired, total=False):
    rate_limit: float
    rate_limit_period: float
    secret: str


class AiGatewayProviderConfigUpdateDataRequired(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiGatewayProviderConfigUpdateData(AiGatewayProviderConfigUpdateDataRequired, total=False):
    alias: str
    default_config: bool
    modified_at: str
    provider_slug: str
    rate_limit: float
    rate_limit_period: float
    secret: str
    secret_id: str
    secret_preview: str


class AiGatewayProviderConfigRemoveMatch(TypedDict):
    account_id: str
    gateway_id: str
    id: str


class AiSearchAccountSearchRequired(TypedDict):
    ai_search_options: dict
    choices: list
    chunks: list
    query_kind: str


class AiSearchAccountSearch(AiSearchAccountSearchRequired, total=False):
    errors: list
    id: str
    messages: list
    model: str
    object: str
    query: str
    search_query: str
    stream: bool


class AiSearchAccountSearchCreateDataRequired(TypedDict):
    account_id: str
    ai_search_options: dict
    choices: list
    chunks: list
    query_kind: str


class AiSearchAccountSearchCreateData(AiSearchAccountSearchCreateDataRequired, total=False):
    name: str
    namespace_id: str
    errors: list
    id: str
    messages: list
    model: str
    object: str
    query: str
    search_query: str
    stream: bool


class AiSearchInstanceRequired(TypedDict):
    choices: list
    chunks: list
    created_at: str
    id: str
    index_method: dict
    messages: list
    modified_at: str


class AiSearchInstance(AiSearchInstanceRequired, total=False):
    ai_gateway_id: str
    ai_search_model: str
    ai_search_options: dict
    cache: bool
    cache_threshold: str
    cache_ttl: Any
    chunk: bool
    chunk_overlap: int
    chunk_size: int
    completed: int
    created_by: str
    custom_metadata: list
    degraded: bool
    embedding_model: str
    enable: bool
    engine: dict
    engine_version: float
    error: int
    file_embed_errors: dict
    fusion_method: str
    hybrid_search_enabled: bool
    index_source_errors: dict
    indexing_options: dict
    last_activity: str
    max_num_results: int
    metadata: dict
    model: str
    modified_by: str
    namespace: str
    object: str
    outdated: int
    paused: bool
    public_endpoint_id: str
    public_endpoint_params: dict
    queued: int
    reranking: bool
    reranking_model: str
    retrieval_options: dict
    rewrite_model: str
    rewrite_query: bool
    running: int
    score_threshold: float
    skipped: int
    source: str
    source_params: dict
    status: str
    stream: bool
    summarization: bool
    summarization_model: str
    sync_interval: Any
    system_prompt_ai_search: str
    system_prompt_index_summarization: str
    system_prompt_rewrite_query: str
    token_id: str
    type: str


class AiSearchInstanceLoadMatchRequired(TypedDict):
    account_id: str


class AiSearchInstanceLoadMatch(AiSearchInstanceLoadMatchRequired, total=False):
    id: str
    namespace_id: str
    instance_id: str


class AiSearchInstanceListMatchRequired(TypedDict):
    account_id: str


class AiSearchInstanceListMatch(AiSearchInstanceListMatchRequired, total=False):
    name: str
    hostname: str
    namespace: str
    order_by: str
    order_by_direction: str
    page: int
    per_page: int
    search: str


class AiSearchInstanceCreateDataRequired(TypedDict):
    account_id: str
    choices: list
    chunks: list
    created_at: str
    id: str
    index_method: dict
    messages: list
    modified_at: str


class AiSearchInstanceCreateData(AiSearchInstanceCreateDataRequired, total=False):
    instance_id: str
    namespace_id: str
    name: str
    ai_gateway_id: str
    ai_search_model: str
    ai_search_options: dict
    cache: bool
    cache_threshold: str
    cache_ttl: Any
    chunk: bool
    chunk_overlap: int
    chunk_size: int
    completed: int
    created_by: str
    custom_metadata: list
    degraded: bool
    embedding_model: str
    enable: bool
    engine: dict
    engine_version: float
    error: int
    file_embed_errors: dict
    fusion_method: str
    hybrid_search_enabled: bool
    index_source_errors: dict
    indexing_options: dict
    last_activity: str
    max_num_results: int
    metadata: dict
    model: str
    modified_by: str
    namespace: str
    object: str
    outdated: int
    paused: bool
    public_endpoint_id: str
    public_endpoint_params: dict
    queued: int
    reranking: bool
    reranking_model: str
    retrieval_options: dict
    rewrite_model: str
    rewrite_query: bool
    running: int
    score_threshold: float
    skipped: int
    source: str
    source_params: dict
    status: str
    stream: bool
    summarization: bool
    summarization_model: str
    sync_interval: Any
    system_prompt_ai_search: str
    system_prompt_index_summarization: str
    system_prompt_rewrite_query: str
    token_id: str
    type: str


class AiSearchInstanceUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class AiSearchInstanceUpdateData(AiSearchInstanceUpdateDataRequired, total=False):
    namespace_id: str
    ai_gateway_id: str
    ai_search_model: str
    ai_search_options: dict
    cache: bool
    cache_threshold: str
    cache_ttl: Any
    choices: list
    chunk: bool
    chunk_overlap: int
    chunk_size: int
    chunks: list
    completed: int
    created_at: str
    created_by: str
    custom_metadata: list
    degraded: bool
    embedding_model: str
    enable: bool
    engine: dict
    engine_version: float
    error: int
    file_embed_errors: dict
    fusion_method: str
    hybrid_search_enabled: bool
    index_method: dict
    index_source_errors: dict
    indexing_options: dict
    last_activity: str
    max_num_results: int
    messages: list
    metadata: dict
    model: str
    modified_at: str
    modified_by: str
    namespace: str
    object: str
    outdated: int
    paused: bool
    public_endpoint_id: str
    public_endpoint_params: dict
    queued: int
    reranking: bool
    reranking_model: str
    retrieval_options: dict
    rewrite_model: str
    rewrite_query: bool
    running: int
    score_threshold: float
    skipped: int
    source: str
    source_params: dict
    status: str
    stream: bool
    summarization: bool
    summarization_model: str
    sync_interval: Any
    system_prompt_ai_search: str
    system_prompt_index_summarization: str
    system_prompt_rewrite_query: str
    token_id: str
    type: str


class AiSearchInstanceRemoveMatchRequired(TypedDict):
    account_id: str
    id: str


class AiSearchInstanceRemoveMatch(AiSearchInstanceRemoveMatchRequired, total=False):
    namespace_id: str


class AiSearchInstancesItemRequired(TypedDict):
    action: str
    checksum: str
    chunkCount: int
    chunks_count: int
    created_at: str
    errorType: str
    fileKey: str
    file_size: float
    id: str
    item: dict
    key: str
    last_seen_at: str
    message: str
    metadata: dict
    namespace: str
    next_action: str
    processingTimeMs: int
    source_id: str
    status: str
    text: str
    timestamp: str


class AiSearchInstancesItem(AiSearchInstancesItemRequired, total=False):
    end_byte: float
    error: str
    start_byte: float
    wait_for_completion: bool
    warnings: list


class AiSearchInstancesItemLoadMatchRequired(TypedDict):
    account_id: str
    instance_id: str
    namespace_id: str


class AiSearchInstancesItemLoadMatch(AiSearchInstancesItemLoadMatchRequired, total=False):
    id: str
    item_id: str


class AiSearchInstancesItemListMatchRequired(TypedDict):
    account_id: str
    instance_id: str
    namespace_id: str


class AiSearchInstancesItemListMatch(AiSearchInstancesItemListMatchRequired, total=False):
    item_id: str
    key: str
    metadata_filter: str
    page: int
    per_page: int
    search: str
    sort_by: str
    source: str
    status: str
    cursor: str
    limit: int
    offset: int


class AiSearchInstancesItemCreateDataRequired(TypedDict):
    account_id: str
    instance_id: str
    namespace_id: str
    action: str
    checksum: str
    chunkCount: int
    chunks_count: int
    created_at: str
    errorType: str
    fileKey: str
    file_size: float
    id: str
    item: dict
    key: str
    last_seen_at: str
    message: str
    metadata: dict
    namespace: str
    next_action: str
    processingTimeMs: int
    source_id: str
    status: str
    text: str
    timestamp: str


class AiSearchInstancesItemCreateData(AiSearchInstancesItemCreateDataRequired, total=False):
    end_byte: float
    error: str
    start_byte: float
    wait_for_completion: bool
    warnings: list


class AiSearchInstancesItemUpdateDataRequired(TypedDict):
    account_id: str
    instance_id: str
    namespace_id: str


class AiSearchInstancesItemUpdateData(AiSearchInstancesItemUpdateDataRequired, total=False):
    action: str
    checksum: str
    chunkCount: int
    chunks_count: int
    created_at: str
    end_byte: float
    error: str
    errorType: str
    fileKey: str
    file_size: float
    id: str
    item: dict
    key: str
    last_seen_at: str
    message: str
    metadata: dict
    namespace: str
    next_action: str
    processingTimeMs: int
    source_id: str
    start_byte: float
    status: str
    text: str
    timestamp: str
    wait_for_completion: bool
    warnings: list


class AiSearchInstancesItemRemoveMatch(TypedDict):
    account_id: str
    id: str
    instance_id: str
    namespace_id: str


class AiSearchInstancesJobRequired(TypedDict):
    action: str
    created_at: float
    id: str
    message: str
    message_type: int
    source: str


class AiSearchInstancesJob(AiSearchInstancesJobRequired, total=False):
    description: str
    end_reason: str
    ended_at: str
    last_seen_at: str
    started_at: str


class AiSearchInstancesJobLoadMatchRequired(TypedDict):
    account_id: str
    id: str
    instance_id: str


class AiSearchInstancesJobLoadMatch(AiSearchInstancesJobLoadMatchRequired, total=False):
    namespace_id: str


class AiSearchInstancesJobListMatchRequired(TypedDict):
    account_id: str
    instance_id: str


class AiSearchInstancesJobListMatch(AiSearchInstancesJobListMatchRequired, total=False):
    job_id: str
    namespace_id: str
    page: int
    per_page: int


class AiSearchInstancesJobCreateDataRequired(TypedDict):
    account_id: str
    instance_id: str
    action: str
    created_at: float
    id: str
    message: str
    message_type: int
    source: str


class AiSearchInstancesJobCreateData(AiSearchInstancesJobCreateDataRequired, total=False):
    namespace_id: str
    description: str
    end_reason: str
    ended_at: str
    last_seen_at: str
    started_at: str


class AiSearchInstancesJobUpdateDataRequired(TypedDict):
    account_id: str
    id: str
    instance_id: str


class AiSearchInstancesJobUpdateData(AiSearchInstancesJobUpdateDataRequired, total=False):
    namespace_id: str
    action: str
    created_at: float
    description: str
    end_reason: str
    ended_at: str
    last_seen_at: str
    message: str
    message_type: int
    source: str
    started_at: str


class AiSearchNamespaceRequired(TypedDict):
    created_at: str
    name: str
    new_namespace: str


class AiSearchNamespace(AiSearchNamespaceRequired, total=False):
    description: str
    id: str
    public_endpoint_id: str
    public_endpoint_params: dict


class AiSearchNamespaceLoadMatch(TypedDict):
    account_id: str
    id: str


class AiSearchNamespaceListMatchRequired(TypedDict):
    account_id: str


class AiSearchNamespaceListMatch(AiSearchNamespaceListMatchRequired, total=False):
    page: int
    per_page: int
    search: str


class AiSearchNamespaceCreateDataRequired(TypedDict):
    account_id: str
    created_at: str
    name: str
    new_namespace: str


class AiSearchNamespaceCreateData(AiSearchNamespaceCreateDataRequired, total=False):
    description: str
    id: str
    public_endpoint_id: str
    public_endpoint_params: dict


class AiSearchNamespaceUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class AiSearchNamespaceUpdateData(AiSearchNamespaceUpdateDataRequired, total=False):
    created_at: str
    description: str
    name: str
    new_namespace: str
    public_endpoint_id: str
    public_endpoint_params: dict


class AiSearchNamespaceRemoveMatch(TypedDict):
    account_id: str
    id: str


class AiSearchTokenRequired(TypedDict):
    cf_api_id: str
    cf_api_key: str
    created_at: str
    id: str
    modified_at: str
    name: str


class AiSearchToken(AiSearchTokenRequired, total=False):
    created_by: str
    enabled: bool
    legacy: bool
    modified_by: str


class AiSearchTokenLoadMatch(TypedDict):
    account_id: str
    id: str


class AiSearchTokenListMatchRequired(TypedDict):
    account_id: str


class AiSearchTokenListMatch(AiSearchTokenListMatchRequired, total=False):
    page: int
    per_page: int
    search: str


class AiSearchTokenCreateDataRequired(TypedDict):
    account_id: str
    cf_api_id: str
    cf_api_key: str
    created_at: str
    id: str
    modified_at: str
    name: str


class AiSearchTokenCreateData(AiSearchTokenCreateDataRequired, total=False):
    created_by: str
    enabled: bool
    legacy: bool
    modified_by: str


class AiSearchTokenUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class AiSearchTokenUpdateData(AiSearchTokenUpdateDataRequired, total=False):
    cf_api_id: str
    cf_api_key: str
    created_at: str
    created_by: str
    enabled: bool
    legacy: bool
    modified_at: str
    modified_by: str
    name: str


class AiSearchTokenRemoveMatch(TypedDict):
    account_id: str
    id: str


class AigBillingCreateTopupRequired(TypedDict):
    amount: int
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingCreateTopup(AigBillingCreateTopupRequired, total=False):
    payment_method_id: str


class AigBillingCreateTopupCreateDataRequired(TypedDict):
    account_id: str
    amount: int
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingCreateTopupCreateData(AigBillingCreateTopupCreateDataRequired, total=False):
    payment_method_id: str


class AigBillingDeleteSpendingLimit(TypedDict):
    pass


class AigBillingDeleteSpendingLimitRemoveMatch(TypedDict):
    account_id: str


class AigBillingDeleteTopupConfig(TypedDict):
    pass


class AigBillingDeleteTopupConfigRemoveMatch(TypedDict):
    account_id: str


class AigBillingGetCreditBalance(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingGetCreditBalanceListMatch(TypedDict):
    account_id: str


class AigBillingGetInvoiceHistory(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingGetInvoiceHistoryListMatchRequired(TypedDict):
    account_id: str


class AigBillingGetInvoiceHistoryListMatch(AigBillingGetInvoiceHistoryListMatchRequired, total=False):
    type: str


class AigBillingGetInvoicePreview(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingGetInvoicePreviewListMatch(TypedDict):
    account_id: str


class AigBillingGetSpendingLimit(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingGetSpendingLimitListMatch(TypedDict):
    account_id: str


class AigBillingGetTopupConfig(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingGetTopupConfigListMatch(TypedDict):
    account_id: str


class AigBillingGetTopupEligibilityRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingGetTopupEligibility(AigBillingGetTopupEligibilityRequired, total=False):
    payment_methods: list


class AigBillingGetTopupEligibilityCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingGetTopupEligibilityCreateData(AigBillingGetTopupEligibilityCreateDataRequired, total=False):
    payment_methods: list


class AigBillingGetTopupLimit(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingGetTopupLimitListMatch(TypedDict):
    account_id: str


class AigBillingGetUsageHistory(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class AigBillingGetUsageHistoryListMatchRequired(TypedDict):
    account_id: str
    value_grouping_window: str


class AigBillingGetUsageHistoryListMatch(AigBillingGetUsageHistoryListMatchRequired, total=False):
    end_time: float
    start_time: float


class AigBillingSetSpendingLimit(TypedDict):
    amount: int
    duration: str
    strategy: str


class AigBillingSetSpendingLimitCreateData(TypedDict):
    account_id: str
    amount: int
    duration: str
    strategy: str


class AigBillingSetTopupConfig(TypedDict):
    amount: int
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool
    threshold: int


class AigBillingSetTopupConfigCreateData(TypedDict):
    account_id: str
    amount: int
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool
    threshold: int


class AigBillingTopupStatus(TypedDict):
    errors: list
    messages: list
    payment_intent_id: str
    result: dict
    result_info: dict
    success: bool


class AigBillingTopupStatusCreateData(TypedDict):
    account_id: str
    errors: list
    messages: list
    payment_intent_id: str
    result: dict
    result_info: dict
    success: bool


class AutoRagJobRequired(TypedDict):
    created_at: float
    id: str
    message: str
    message_type: int
    source: str


class AutoRagJob(AutoRagJobRequired, total=False):
    end_reason: str
    ended_at: str
    last_seen_at: str
    started_at: str


class AutoRagJobLoadMatch(TypedDict):
    account_id: str
    id: str
    rag_id: str


class AutoRagJobListMatchRequired(TypedDict):
    account_id: str
    rag_id: str


class AutoRagJobListMatch(AutoRagJobListMatchRequired, total=False):
    job_id: str
    page: int
    per_page: int


class AutoRagRag(TypedDict):
    error: str
    job_id: str
    key: str


class AutoRagRagListMatchRequired(TypedDict):
    account_id: str
    rag_id: str


class AutoRagRagListMatch(AutoRagRagListMatchRequired, total=False):
    page: int
    per_page: int
    search: str
    status: str


class AutoRagRagUpdateDataRequired(TypedDict):
    account_id: str
    rag_id: str


class AutoRagRagUpdateData(AutoRagRagUpdateDataRequired, total=False):
    error: str
    job_id: str
    key: str


class AutoRagRagSearchRequired(TypedDict):
    query: str
    response: str
    search_query: str


class AutoRagRagSearch(AutoRagRagSearchRequired, total=False):
    data: list
    filters: Any
    has_more: bool
    max_num_results: int
    model: Any
    next_page: str
    object: str
    ranking_options: dict
    reranking: dict
    rewrite_query: bool
    stream: bool
    system_prompt: str


class AutoRagRagSearchCreateDataRequired(TypedDict):
    account_id: str
    rag_id: str
    query: str
    response: str
    search_query: str


class AutoRagRagSearchCreateData(AutoRagRagSearchCreateDataRequired, total=False):
    data: list
    filters: Any
    has_more: bool
    max_num_results: int
    model: Any
    next_page: str
    object: str
    ranking_options: dict
    reranking: dict
    rewrite_query: bool
    stream: bool
    system_prompt: str


class FinetuneAssetRequired(TypedDict):
    file_name: str
    file_url: str


class FinetuneAsset(FinetuneAssetRequired, total=False):
    id: str


class FinetuneAssetLoadMatch(TypedDict):
    account_id: str
    finetune_id: str
    id: str


class MemoryRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class Memory(MemoryRequired, total=False):
    id: str
    result_info: dict


class MemoryLoadMatch(TypedDict):
    account_id: str
    id: str
    namespace_id: str
    profile_id: str


class MemoryListMatchRequired(TypedDict):
    account_id: str


class MemoryListMatch(MemoryListMatchRequired, total=False):
    namespace_id: str
    profile_name: str
    cursor: str
    per_page: int
    session_id: str
    type: str
    namespace_name: str


class MemoryCreateDataRequired(TypedDict):
    account_id: str
    namespace_id: str
    profile_name: str
    errors: list
    messages: list
    result: dict
    success: bool


class MemoryCreateData(MemoryCreateDataRequired, total=False):
    id: str
    result_info: dict


class MemoryRemoveMatchRequired(TypedDict):
    account_id: str
    namespace_id: str


class MemoryRemoveMatch(MemoryRemoveMatchRequired, total=False):
    id: str
    profile_id: str
    session_id: str
    profile_name: str


class NamespaceRequired(TypedDict):
    errors: list
    messages: list
    name: str
    result: dict
    success: bool


class Namespace(NamespaceRequired, total=False):
    id: str
    result_info: dict


class NamespaceLoadMatch(TypedDict):
    account_id: str
    id: str


class NamespaceListMatchRequired(TypedDict):
    account_id: str


class NamespaceListMatch(NamespaceListMatchRequired, total=False):
    cursor: str
    direction: str
    order: str
    per_page: int


class NamespaceCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    name: str
    result: dict
    success: bool


class NamespaceCreateData(NamespaceCreateDataRequired, total=False):
    id: str
    result_info: dict


class NamespaceRemoveMatch(TypedDict):
    account_id: str
    id: str


class VectorizeRequired(TypedDict):
    config: Any
    errors: list
    indexType: str
    messages: list
    name: str
    propertyName: str
    result: dict
    success: bool


class Vectorize(VectorizeRequired, total=False):
    description: str
    ids: list


class VectorizeLoadMatchRequired(TypedDict):
    account_id: str


class VectorizeLoadMatch(VectorizeLoadMatchRequired, total=False):
    index_name: str
    count: int
    cursor: str
    index_id: str


class VectorizeListMatch(TypedDict):
    account_id: str


class VectorizeCreateDataRequired(TypedDict):
    account_id: str
    config: Any
    errors: list
    indexType: str
    messages: list
    name: str
    propertyName: str
    result: dict
    success: bool


class VectorizeCreateData(VectorizeCreateDataRequired, total=False):
    index_id: str
    index_name: str
    description: str
    ids: list


class VectorizeRemoveMatch(TypedDict):
    account_id: str
    index_name: str


class VectorizeBetaDeprecatedRequired(TypedDict):
    config: Any
    errors: list
    messages: list
    name: str
    success: bool


class VectorizeBetaDeprecated(VectorizeBetaDeprecatedRequired, total=False):
    description: str
    ids: list
    result: dict


class VectorizeBetaDeprecatedLoadMatch(TypedDict):
    account_id: str
    index_name: str


class VectorizeBetaDeprecatedListMatch(TypedDict):
    account_id: str


class VectorizeBetaDeprecatedCreateDataRequired(TypedDict):
    account_id: str
    config: Any
    errors: list
    messages: list
    name: str
    success: bool


class VectorizeBetaDeprecatedCreateData(VectorizeBetaDeprecatedCreateDataRequired, total=False):
    index_name: str
    description: str
    ids: list
    result: dict


class VectorizeBetaDeprecatedUpdateDataRequired(TypedDict):
    account_id: str
    index_name: str


class VectorizeBetaDeprecatedUpdateData(VectorizeBetaDeprecatedUpdateDataRequired, total=False):
    config: Any
    description: str
    errors: list
    ids: list
    messages: list
    name: str
    result: dict
    success: bool


class VectorizeBetaDeprecatedRemoveMatch(TypedDict):
    account_id: str
    index_name: str


class WorkersAiRequired(TypedDict):
    errors: list
    extension: str
    input: dict
    messages: list
    mimeType: str
    model: str
    output: dict
    success: bool


class WorkersAi(WorkersAiRequired, total=False):
    options: dict
    result: dict


class WorkersAiLoadMatchRequired(TypedDict):
    account_id: str


class WorkersAiLoadMatch(WorkersAiLoadMatchRequired, total=False):
    author: str
    format: str
    hide_experimental: bool
    include_deprecated: bool
    page: int
    per_page: int
    search: str
    source: float
    task: str
    model: str


class WorkersAiListMatch(TypedDict):
    account_id: str


class WorkersAiCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    extension: str
    input: dict
    messages: list
    mimeType: str
    model: str
    output: dict
    success: bool


class WorkersAiCreateData(WorkersAiCreateDataRequired, total=False):
    model_name: str
    options: dict
    result: dict


class WorkersAiFinetuneRequired(TypedDict):
    created_at: str
    id: str
    model: str
    modified_at: str
    name: str
    public: bool
    success: bool


class WorkersAiFinetune(WorkersAiFinetuneRequired, total=False):
    description: str


class WorkersAiFinetuneLoadMatch(TypedDict):
    account_id: str


class WorkersAiFinetuneListMatchRequired(TypedDict):
    account_id: str


class WorkersAiFinetuneListMatch(WorkersAiFinetuneListMatchRequired, total=False):
    limit: float
    offset: float
    order_by: str


class WorkersAiFinetuneCreateDataRequired(TypedDict):
    account_id: str
    created_at: str
    id: str
    model: str
    modified_at: str
    name: str
    public: bool
    success: bool


class WorkersAiFinetuneCreateData(WorkersAiFinetuneCreateDataRequired, total=False):
    finetune_id: str
    description: str


class WorkersAiFinetuneRemoveMatch(TypedDict):
    account_id: str
    id: str
