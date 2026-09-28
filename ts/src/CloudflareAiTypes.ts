// Typed models for the CloudflareAi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Account {
  id?: string
}

export interface AccountLoadMatch {
  id: string

  // Selects a custom action instead of the plain load:
  //   'ai_gateway_logging_state'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AccountUpdateData {
  id: string

  // Selects a custom action instead of the plain update:
  //   'ai_gateway_logging_state'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AiGateway {
  byokAlias?: string
  items: any[]
  limit?: number
  metadata: Record<string, any>
  options: Record<string, any>
  provider?: string
  query: string
}

export interface AiGatewayCreateData {
  account_id: string
  byokAlias?: string
  items: any[]
  limit?: number
  metadata: Record<string, any>
  options: Record<string, any>
  provider?: string
  query: string
}

export interface AiGatewayCustomDomain {
  cname_target: string
  created_at: number
  domain: string
  gateway_id: string
  hostname: string
  id?: string
  minTLS?: string
  modified_at: number
  ssl_hostname_id: string
  status: string
  zone_id: string
}

export interface AiGatewayCustomDomainLoadMatch {
  account_id: string
  gateway_id: string
  id: string
}

export interface AiGatewayCustomDomainListMatch {
  account_id: string
  gateway_id: string
  page?: number
  per_page?: number
  search?: string
  status?: string
}

export interface AiGatewayCustomDomainCreateData {
  account_id: string
  gateway_id: string
  cname_target: string
  created_at: number
  domain: string
  hostname: string
  id?: string
  minTLS?: string
  modified_at: number
  ssl_hostname_id: string
  status: string
  zone_id: string
}

export interface AiGatewayCustomDomainRemoveMatch {
  account_id: string
  gateway_id: string
  id: string
}

export interface AiGatewayCustomProvider {
  base_url: string
  beta?: boolean
  created_at: string
  curl_example?: string
  description?: string
  enable?: boolean
  headers?: string
  id: string
  js_example?: string
  link?: string
  logo?: string
  modified_at: string
  name: string
  position?: number
  slug: string
}

export interface AiGatewayCustomProviderLoadMatch {
  account_id: string
  id: string
}

export interface AiGatewayCustomProviderListMatch {
  account_id: string
  beta?: boolean
  enable?: boolean
  page?: number
  per_page?: number
  search?: string
}

export interface AiGatewayCustomProviderCreateData {
  account_id: string
  base_url: string
  beta?: boolean
  created_at: string
  curl_example?: string
  description?: string
  enable?: boolean
  headers?: string
  id: string
  js_example?: string
  link?: string
  logo?: string
  modified_at: string
  name: string
  position?: number
  slug: string
}

export interface AiGatewayCustomProviderUpdateData {
  account_id: string
  id: string
  base_url?: string
  beta?: boolean
  created_at?: string
  curl_example?: string
  description?: string
  enable?: boolean
  headers?: string
  js_example?: string
  link?: string
  logo?: string
  modified_at?: string
  name?: string
  position?: number
  slug?: string
}

export interface AiGatewayCustomProviderRemoveMatch {
  account_id: string
  id: string
}

export interface AiGatewayCustomProviderCost {
  account_provider_id: string
  changed_by?: string
  cost_in?: number
  cost_out?: number
  cost_type?: string
  created_at: string
  enable?: boolean
  id: string
  model: string
  model_rule?: string
  modified_at: string
  token_pricing?: string
  weight?: number
}

export interface AiGatewayCustomProviderCostLoadMatch {
  account_id: string
  id: string
}

export interface AiGatewayCustomProviderCostListMatch {
  account_id: string
  account_provider_id?: string
  cost_type?: string
  enable?: boolean
  model_rule?: string
  page?: number
  per_page?: number
  search?: string
}

export interface AiGatewayCustomProviderCostCreateData {
  account_id: string
  account_provider_id: string
  changed_by?: string
  cost_in?: number
  cost_out?: number
  cost_type?: string
  created_at: string
  enable?: boolean
  id: string
  model: string
  model_rule?: string
  modified_at: string
  token_pricing?: string
  weight?: number
}

export interface AiGatewayCustomProviderCostUpdateData {
  account_id: string
  id: string
  account_provider_id?: string
  changed_by?: string
  cost_in?: number
  cost_out?: number
  cost_type?: string
  created_at?: string
  enable?: boolean
  model?: string
  model_rule?: string
  modified_at?: string
  token_pricing?: string
  weight?: number
}

export interface AiGatewayCustomProviderCostRemoveMatch {
  account_id: string
  id: string
}

export interface AiGatewayDataset {
  created_at: string
  enable: boolean
  filters: any[]
  gateway_id: string
  id: string
  modified_at: string
  name: string
}

export interface AiGatewayDatasetLoadMatch {
  account_id: string
  gateway_id: string
  id: string
}

export interface AiGatewayDatasetListMatch {
  account_id: string
  gateway_id: string
  enable?: boolean
  name?: string
  page?: number
  per_page?: number
  search?: string
}

export interface AiGatewayDatasetCreateData {
  account_id: string
  gateway_id: string
  created_at: string
  enable: boolean
  filters: any[]
  id: string
  modified_at: string
  name: string
}

export interface AiGatewayDatasetUpdateData {
  account_id: string
  gateway_id: string
  id: string
  created_at?: string
  enable?: boolean
  filters?: any[]
  modified_at?: string
  name?: string
}

export interface AiGatewayDatasetRemoveMatch {
  account_id: string
  gateway_id: string
  id: string
}

export interface AiGatewayDynamicRoute {
  account_tag: string
  active: boolean
  created_at: string
  data: string
  deployment: Record<string, any>
  deployments: any[]
  elements: any[]
  gateway_id: string
  id: string
  is_valid?: boolean
  modified_at: string
  name: string
  order_by: string
  order_by_direction: string
  page: number
  per_page: number
  routes: any[]
  version: Record<string, any>
  version_id: string
  versions: any[]
}

export interface AiGatewayDynamicRouteLoadMatch {
  account_id: string
  gateway_id: string
  page?: number
  per_page?: number
  route_id?: string
  version_id?: string
  id?: string
}

export interface AiGatewayDynamicRouteCreateData {
  account_id: string
  gateway_id: string
  route_id?: string
  account_tag: string
  active: boolean
  created_at: string
  data: string
  deployment: Record<string, any>
  deployments: any[]
  elements: any[]
  id: string
  is_valid?: boolean
  modified_at: string
  name: string
  order_by: string
  order_by_direction: string
  page: number
  per_page: number
  routes: any[]
  version: Record<string, any>
  version_id: string
  versions: any[]
}

export interface AiGatewayDynamicRouteUpdateData {
  account_id: string
  gateway_id: string
  id: string
  account_tag?: string
  active?: boolean
  created_at?: string
  data?: string
  deployment?: Record<string, any>
  deployments?: any[]
  elements?: any[]
  is_valid?: boolean
  modified_at?: string
  name?: string
  order_by?: string
  order_by_direction?: string
  page?: number
  per_page?: number
  routes?: any[]
  version?: Record<string, any>
  version_id?: string
  versions?: any[]
}

export interface AiGatewayDynamicRouteRemoveMatch {
  account_id: string
  gateway_id: string
  id: string
}

export interface AiGatewayEvaluation {
  created_at: string
  dataset_ids: any[]
  datasets: any[]
  description: string
  enable: boolean
  evaluation_type_ids: any[]
  gateway_id: string
  id: string
  mandatory: boolean
  modified_at: string
  name: string
  processed: boolean
  results: any[]
  total_logs: number
  type: string
}

export interface AiGatewayEvaluationLoadMatch {
  account_id: string
  gateway_id: string
  id: string
}

export interface AiGatewayEvaluationListMatch {
  account_id: string
  gateway_id?: string
  name?: string
  page?: number
  per_page?: number
  processed?: boolean
  search?: string
  order_by?: string
  order_by_direction?: string
}

export interface AiGatewayEvaluationCreateData {
  account_id: string
  gateway_id: string
  created_at: string
  dataset_ids: any[]
  datasets: any[]
  description: string
  enable: boolean
  evaluation_type_ids: any[]
  id: string
  mandatory: boolean
  modified_at: string
  name: string
  processed: boolean
  results: any[]
  total_logs: number
  type: string
}

export interface AiGatewayEvaluationRemoveMatch {
  account_id: string
  gateway_id: string
  id: string
}

export interface AiGatewayGateway {
  authentication?: boolean
  byok_only?: boolean
  cache_invalidate_on_update: boolean
  cache_ttl: number
  collect_logs: boolean
  created_at: string
  dlp?: any
  guardrails: Record<string, any>
  id: string
  is_default?: boolean
  log_classification?: boolean
  log_management?: number
  log_management_strategy?: string
  logpush?: boolean
  logpush_public_key?: string
  modified_at: string
  otel?: any[]
  rate_limiting_interval: number
  rate_limiting_limit: number
  rate_limiting_technique?: string
  result: string
  retry_backoff?: string
  retry_delay?: number
  retry_max_attempts?: number
  spend_limits?: Record<string, any>
  store_id?: string
  stripe: Record<string, any>
  success: boolean
  workers_ai_billing_mode?: string
  zdr?: boolean
}

export interface AiGatewayGatewayLoadMatch {
  account_id: string
  gateway_id?: string
  provider?: string
  id?: string
}

export interface AiGatewayGatewayListMatch {
  account_id: string
  page?: number
  per_page?: number
  search?: string
}

export interface AiGatewayGatewayCreateData {
  account_id: string
  authentication?: boolean
  byok_only?: boolean
  cache_invalidate_on_update: boolean
  cache_ttl: number
  collect_logs: boolean
  created_at: string
  dlp?: any
  guardrails: Record<string, any>
  id: string
  is_default?: boolean
  log_classification?: boolean
  log_management?: number
  log_management_strategy?: string
  logpush?: boolean
  logpush_public_key?: string
  modified_at: string
  otel?: any[]
  rate_limiting_interval: number
  rate_limiting_limit: number
  rate_limiting_technique?: string
  result: string
  retry_backoff?: string
  retry_delay?: number
  retry_max_attempts?: number
  spend_limits?: Record<string, any>
  store_id?: string
  stripe: Record<string, any>
  success: boolean
  workers_ai_billing_mode?: string
  zdr?: boolean
}

export interface AiGatewayGatewayUpdateData {
  account_id: string
  id: string
  authentication?: boolean
  byok_only?: boolean
  cache_invalidate_on_update?: boolean
  cache_ttl?: number
  collect_logs?: boolean
  created_at?: string
  dlp?: any
  guardrails?: Record<string, any>
  is_default?: boolean
  log_classification?: boolean
  log_management?: number
  log_management_strategy?: string
  logpush?: boolean
  logpush_public_key?: string
  modified_at?: string
  otel?: any[]
  rate_limiting_interval?: number
  rate_limiting_limit?: number
  rate_limiting_technique?: string
  result?: string
  retry_backoff?: string
  retry_delay?: number
  retry_max_attempts?: number
  spend_limits?: Record<string, any>
  store_id?: string
  stripe?: Record<string, any>
  success?: boolean
  workers_ai_billing_mode?: string
  zdr?: boolean
}

export interface AiGatewayGatewayRemoveMatch {
  account_id: string
  id: string
}

export interface AiGatewayLog {
  cached: boolean
  cost?: number
  created_at: string
  custom_cost?: boolean
  duration: number
  feedback?: number
  id: string
  metadata?: string
  model: string
  model_type?: string
  path: string
  provider: string
  request_content_type?: string
  request_head?: string
  request_head_complete?: boolean
  request_size?: number
  request_type?: string
  response_content_type?: string
  response_head?: string
  response_head_complete?: boolean
  response_size?: number
  score?: number
  status_code?: number
  step?: number
  success: boolean
  tokens_in: number
  tokens_out: number
}

export interface AiGatewayLogLoadMatch {
  account_id: string
  gateway_id: string
  id?: string
  log_id?: string
}

export interface AiGatewayLogListMatch {
  account_id: string
  gateway_id: string
  cached?: boolean
  direction?: string
  end_date?: string
  feedback?: any
  filter?: any[]
  max_cost?: number
  max_duration?: number
  max_tokens_in?: number
  max_tokens_out?: number
  max_total_token?: number
  meta_info?: boolean
  min_cost?: number
  min_duration?: number
  min_tokens_in?: number
  min_tokens_out?: number
  min_total_token?: number
  model?: string
  model_type?: string
  order_by?: string
  order_by_direction?: string
  page?: number
  per_page?: number
  provider?: string
  request_content_type?: string
  response_content_type?: string
  search?: string
  start_date?: string
  success?: boolean
}

export interface AiGatewayLogUpdateData {
  account_id: string
  gateway_id: string
  id: string
  cached?: boolean
  cost?: number
  created_at?: string
  custom_cost?: boolean
  duration?: number
  feedback?: number
  metadata?: string
  model?: string
  model_type?: string
  path?: string
  provider?: string
  request_content_type?: string
  request_head?: string
  request_head_complete?: boolean
  request_size?: number
  request_type?: string
  response_content_type?: string
  response_head?: string
  response_head_complete?: boolean
  response_size?: number
  score?: number
  status_code?: number
  step?: number
  success?: boolean
  tokens_in?: number
  tokens_out?: number
}

export interface AiGatewayLogRemoveMatch {
  account_id: string
  gateway_id: string
  filter?: any[]
  limit?: number
  order_by?: string
  order_by_direction?: string
}

export interface AiGatewayProviderConfig {
  alias: string
  default_config: boolean
  gateway_id: string
  id: string
  modified_at: string
  provider_slug: string
  rate_limit?: number
  rate_limit_period?: number
  secret?: string
  secret_id: string
  secret_preview: string
}

export interface AiGatewayProviderConfigListMatch {
  account_id: string
  gateway_id: string
  page?: number
  per_page?: number
}

export interface AiGatewayProviderConfigCreateData {
  account_id: string
  gateway_id: string
  alias: string
  default_config: boolean
  id: string
  modified_at: string
  provider_slug: string
  rate_limit?: number
  rate_limit_period?: number
  secret?: string
  secret_id: string
  secret_preview: string
}

export interface AiGatewayProviderConfigUpdateData {
  account_id: string
  gateway_id: string
  id: string
  alias?: string
  default_config?: boolean
  modified_at?: string
  provider_slug?: string
  rate_limit?: number
  rate_limit_period?: number
  secret?: string
  secret_id?: string
  secret_preview?: string
}

export interface AiGatewayProviderConfigRemoveMatch {
  account_id: string
  gateway_id: string
  id: string
}

export interface AiSearchAccountSearch {
  ai_search_options: Record<string, any>
  choices: any[]
  chunks: any[]
  errors?: any[]
  id?: string
  messages?: any[]
  model?: string
  object?: string
  query?: string
  query_kind: string
  search_query?: string
  stream?: boolean
}

export interface AiSearchAccountSearchCreateData {
  account_id: string
  name?: string
  namespace_id?: string
  ai_search_options: Record<string, any>
  choices: any[]
  chunks: any[]
  errors?: any[]
  id?: string
  messages?: any[]
  model?: string
  object?: string
  query?: string
  query_kind: string
  search_query?: string
  stream?: boolean
}

export interface AiSearchInstance {
  ai_gateway_id?: string
  ai_search_model?: string
  ai_search_options?: Record<string, any>
  cache?: boolean
  cache_threshold?: string
  cache_ttl?: any
  choices: any[]
  chunk?: boolean
  chunk_overlap?: number
  chunk_size?: number
  chunks: any[]
  completed?: number
  created_at: string
  created_by?: string
  custom_metadata?: any[]
  degraded?: boolean
  embedding_model?: string
  enable?: boolean
  engine?: Record<string, any>
  engine_version?: number
  error?: number
  file_embed_errors?: Record<string, any>
  fusion_method?: string
  hybrid_search_enabled?: boolean
  id: string
  index_method: Record<string, any>
  index_source_errors?: Record<string, any>
  indexing_options?: Record<string, any>
  last_activity?: string
  max_num_results?: number
  messages: any[]
  metadata?: Record<string, any>
  model?: string
  modified_at: string
  modified_by?: string
  namespace?: string
  object?: string
  outdated?: number
  paused?: boolean
  public_endpoint_id?: string
  public_endpoint_params?: Record<string, any>
  queued?: number
  reranking?: boolean
  reranking_model?: string
  retrieval_options?: Record<string, any>
  rewrite_model?: string
  rewrite_query?: boolean
  running?: number
  score_threshold?: number
  skipped?: number
  source?: string
  source_params?: Record<string, any>
  status?: string
  stream?: boolean
  summarization?: boolean
  summarization_model?: string
  sync_interval?: any
  system_prompt_ai_search?: string
  system_prompt_index_summarization?: string
  system_prompt_rewrite_query?: string
  token_id?: string
  type?: string
}

export interface AiSearchInstanceLoadMatch {
  account_id: string
  id?: string
  namespace_id?: string
  instance_id?: string
}

export interface AiSearchInstanceListMatch {
  account_id: string
  name?: string
  hostname?: string
  namespace?: string
  order_by?: string
  order_by_direction?: string
  page?: number
  per_page?: number
  search?: string
}

export interface AiSearchInstanceCreateData {
  account_id: string
  instance_id?: string
  namespace_id?: string
  name?: string
  ai_gateway_id?: string
  ai_search_model?: string
  ai_search_options?: Record<string, any>
  cache?: boolean
  cache_threshold?: string
  cache_ttl?: any
  choices: any[]
  chunk?: boolean
  chunk_overlap?: number
  chunk_size?: number
  chunks: any[]
  completed?: number
  created_at: string
  created_by?: string
  custom_metadata?: any[]
  degraded?: boolean
  embedding_model?: string
  enable?: boolean
  engine?: Record<string, any>
  engine_version?: number
  error?: number
  file_embed_errors?: Record<string, any>
  fusion_method?: string
  hybrid_search_enabled?: boolean
  id: string
  index_method: Record<string, any>
  index_source_errors?: Record<string, any>
  indexing_options?: Record<string, any>
  last_activity?: string
  max_num_results?: number
  messages: any[]
  metadata?: Record<string, any>
  model?: string
  modified_at: string
  modified_by?: string
  namespace?: string
  object?: string
  outdated?: number
  paused?: boolean
  public_endpoint_id?: string
  public_endpoint_params?: Record<string, any>
  queued?: number
  reranking?: boolean
  reranking_model?: string
  retrieval_options?: Record<string, any>
  rewrite_model?: string
  rewrite_query?: boolean
  running?: number
  score_threshold?: number
  skipped?: number
  source?: string
  source_params?: Record<string, any>
  status?: string
  stream?: boolean
  summarization?: boolean
  summarization_model?: string
  sync_interval?: any
  system_prompt_ai_search?: string
  system_prompt_index_summarization?: string
  system_prompt_rewrite_query?: string
  token_id?: string
  type?: string

  // Selects a custom action instead of the plain create:
  //   'purge_cache' | 'search' | 'search'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AiSearchInstanceUpdateData {
  account_id: string
  id: string
  namespace_id?: string
  ai_gateway_id?: string
  ai_search_model?: string
  ai_search_options?: Record<string, any>
  cache?: boolean
  cache_threshold?: string
  cache_ttl?: any
  choices?: any[]
  chunk?: boolean
  chunk_overlap?: number
  chunk_size?: number
  chunks?: any[]
  completed?: number
  created_at?: string
  created_by?: string
  custom_metadata?: any[]
  degraded?: boolean
  embedding_model?: string
  enable?: boolean
  engine?: Record<string, any>
  engine_version?: number
  error?: number
  file_embed_errors?: Record<string, any>
  fusion_method?: string
  hybrid_search_enabled?: boolean
  index_method?: Record<string, any>
  index_source_errors?: Record<string, any>
  indexing_options?: Record<string, any>
  last_activity?: string
  max_num_results?: number
  messages?: any[]
  metadata?: Record<string, any>
  model?: string
  modified_at?: string
  modified_by?: string
  namespace?: string
  object?: string
  outdated?: number
  paused?: boolean
  public_endpoint_id?: string
  public_endpoint_params?: Record<string, any>
  queued?: number
  reranking?: boolean
  reranking_model?: string
  retrieval_options?: Record<string, any>
  rewrite_model?: string
  rewrite_query?: boolean
  running?: number
  score_threshold?: number
  skipped?: number
  source?: string
  source_params?: Record<string, any>
  status?: string
  stream?: boolean
  summarization?: boolean
  summarization_model?: string
  sync_interval?: any
  system_prompt_ai_search?: string
  system_prompt_index_summarization?: string
  system_prompt_rewrite_query?: string
  token_id?: string
  type?: string
}

export interface AiSearchInstanceRemoveMatch {
  account_id: string
  id: string
  namespace_id?: string
}

export interface AiSearchInstancesItem {
  action: string
  checksum: string
  chunkCount: number
  chunks_count: number
  created_at: string
  end_byte?: number
  error?: string
  errorType: string
  fileKey: string
  file_size: number
  id: string
  item: Record<string, any>
  key: string
  last_seen_at: string
  message: string
  metadata: Record<string, any>
  namespace: string
  next_action: string
  processingTimeMs: number
  source_id: string
  start_byte?: number
  status: string
  text: string
  timestamp: string
  wait_for_completion?: boolean
  warnings?: any[]
}

export interface AiSearchInstancesItemLoadMatch {
  account_id: string
  id?: string
  instance_id: string
  namespace_id: string
  item_id?: string
}

export interface AiSearchInstancesItemListMatch {
  account_id: string
  instance_id: string
  namespace_id: string
  item_id?: string
  key?: string
  metadata_filter?: string
  page?: number
  per_page?: number
  search?: string
  sort_by?: string
  source?: string
  status?: string
  cursor?: string
  limit?: number
  offset?: number
}

export interface AiSearchInstancesItemCreateData {
  account_id: string
  instance_id: string
  namespace_id: string
  action: string
  checksum: string
  chunkCount: number
  chunks_count: number
  created_at: string
  end_byte?: number
  error?: string
  errorType: string
  fileKey: string
  file_size: number
  id: string
  item: Record<string, any>
  key: string
  last_seen_at: string
  message: string
  metadata: Record<string, any>
  namespace: string
  next_action: string
  processingTimeMs: number
  source_id: string
  start_byte?: number
  status: string
  text: string
  timestamp: string
  wait_for_completion?: boolean
  warnings?: any[]
}

export interface AiSearchInstancesItemUpdateData {
  account_id: string
  instance_id: string
  namespace_id: string
  action?: string
  checksum?: string
  chunkCount?: number
  chunks_count?: number
  created_at?: string
  end_byte?: number
  error?: string
  errorType?: string
  fileKey?: string
  file_size?: number
  id?: string
  item?: Record<string, any>
  key?: string
  last_seen_at?: string
  message?: string
  metadata?: Record<string, any>
  namespace?: string
  next_action?: string
  processingTimeMs?: number
  source_id?: string
  start_byte?: number
  status?: string
  text?: string
  timestamp?: string
  wait_for_completion?: boolean
  warnings?: any[]
}

export interface AiSearchInstancesItemRemoveMatch {
  account_id: string
  id: string
  instance_id: string
  namespace_id: string
}

export interface AiSearchInstancesJob {
  action: string
  created_at: number
  description?: string
  end_reason?: string
  ended_at?: string
  id: string
  last_seen_at?: string
  message: string
  message_type: number
  source: string
  started_at?: string
}

export interface AiSearchInstancesJobLoadMatch {
  account_id: string
  id: string
  instance_id: string
  namespace_id?: string
}

export interface AiSearchInstancesJobListMatch {
  account_id: string
  instance_id: string
  job_id?: string
  namespace_id?: string
  page?: number
  per_page?: number
}

export interface AiSearchInstancesJobCreateData {
  account_id: string
  instance_id: string
  namespace_id?: string
  action: string
  created_at: number
  description?: string
  end_reason?: string
  ended_at?: string
  id: string
  last_seen_at?: string
  message: string
  message_type: number
  source: string
  started_at?: string
}

export interface AiSearchInstancesJobUpdateData {
  account_id: string
  id: string
  instance_id: string
  namespace_id?: string
  action?: string
  created_at?: number
  description?: string
  end_reason?: string
  ended_at?: string
  last_seen_at?: string
  message?: string
  message_type?: number
  source?: string
  started_at?: string
}

export interface AiSearchNamespace {
  created_at: string
  description?: string
  id?: string
  name: string
  new_namespace: string
  public_endpoint_id?: string
  public_endpoint_params?: Record<string, any>
}

export interface AiSearchNamespaceLoadMatch {
  account_id: string
  id: string
}

export interface AiSearchNamespaceListMatch {
  account_id: string
  page?: number
  per_page?: number
  search?: string
}

export interface AiSearchNamespaceCreateData {
  account_id: string
  created_at: string
  description?: string
  id?: string
  name: string
  new_namespace: string
  public_endpoint_id?: string
  public_endpoint_params?: Record<string, any>
}

export interface AiSearchNamespaceUpdateData {
  account_id: string
  id: string
  created_at?: string
  description?: string
  name?: string
  new_namespace?: string
  public_endpoint_id?: string
  public_endpoint_params?: Record<string, any>
}

export interface AiSearchNamespaceRemoveMatch {
  account_id: string
  id: string
}

export interface AiSearchToken {
  cf_api_id: string
  cf_api_key: string
  created_at: string
  created_by?: string
  enabled?: boolean
  id: string
  legacy?: boolean
  modified_at: string
  modified_by?: string
  name: string
}

export interface AiSearchTokenLoadMatch {
  account_id: string
  id: string
}

export interface AiSearchTokenListMatch {
  account_id: string
  page?: number
  per_page?: number
  search?: string
}

export interface AiSearchTokenCreateData {
  account_id: string
  cf_api_id: string
  cf_api_key: string
  created_at: string
  created_by?: string
  enabled?: boolean
  id: string
  legacy?: boolean
  modified_at: string
  modified_by?: string
  name: string
}

export interface AiSearchTokenUpdateData {
  account_id: string
  id: string
  cf_api_id?: string
  cf_api_key?: string
  created_at?: string
  created_by?: string
  enabled?: boolean
  legacy?: boolean
  modified_at?: string
  modified_by?: string
  name?: string
}

export interface AiSearchTokenRemoveMatch {
  account_id: string
  id: string
}

export interface AigBillingCreateTopup {
  amount: number
  errors: any[]
  messages: any[]
  payment_method_id?: string
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingCreateTopupCreateData {
  account_id: string
  amount: number
  errors: any[]
  messages: any[]
  payment_method_id?: string
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingDeleteSpendingLimit {
}

export interface AigBillingDeleteSpendingLimitRemoveMatch {
  account_id: string
}

export interface AigBillingDeleteTopupConfig {
}

export interface AigBillingDeleteTopupConfigRemoveMatch {
  account_id: string
}

export interface AigBillingGetCreditBalance {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingGetCreditBalanceListMatch {
  account_id: string
}

export interface AigBillingGetInvoiceHistory {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingGetInvoiceHistoryListMatch {
  account_id: string
  type?: string
}

export interface AigBillingGetInvoicePreview {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingGetInvoicePreviewListMatch {
  account_id: string
}

export interface AigBillingGetSpendingLimit {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingGetSpendingLimitListMatch {
  account_id: string
}

export interface AigBillingGetTopupConfig {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingGetTopupConfigListMatch {
  account_id: string
}

export interface AigBillingGetTopupEligibility {
  errors: any[]
  messages: any[]
  payment_methods?: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingGetTopupEligibilityCreateData {
  account_id: string
  errors: any[]
  messages: any[]
  payment_methods?: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingGetTopupLimit {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingGetTopupLimitListMatch {
  account_id: string
}

export interface AigBillingGetUsageHistory {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingGetUsageHistoryListMatch {
  account_id: string
  end_time?: number
  start_time?: number
  value_grouping_window: string
}

export interface AigBillingSetSpendingLimit {
  amount: number
  duration: string
  strategy: string
}

export interface AigBillingSetSpendingLimitCreateData {
  account_id: string
  amount: number
  duration: string
  strategy: string
}

export interface AigBillingSetTopupConfig {
  amount: number
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
  threshold: number
}

export interface AigBillingSetTopupConfigCreateData {
  account_id: string
  amount: number
  errors: any[]
  messages: any[]
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
  threshold: number
}

export interface AigBillingTopupStatus {
  errors: any[]
  messages: any[]
  payment_intent_id: string
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AigBillingTopupStatusCreateData {
  account_id: string
  errors: any[]
  messages: any[]
  payment_intent_id: string
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
}

export interface AutoRagJob {
  created_at: number
  end_reason?: string
  ended_at?: string
  id: string
  last_seen_at?: string
  message: string
  message_type: number
  source: string
  started_at?: string
}

export interface AutoRagJobLoadMatch {
  account_id: string
  id: string
  rag_id: string
}

export interface AutoRagJobListMatch {
  account_id: string
  job_id?: string
  rag_id: string
  page?: number
  per_page?: number
}

export interface AutoRagRag {
  error: string
  job_id: string
  key: string
}

export interface AutoRagRagListMatch {
  account_id: string
  rag_id: string
  page?: number
  per_page?: number
  search?: string
  status?: string
}

export interface AutoRagRagUpdateData {
  account_id: string
  rag_id: string
  error?: string
  job_id?: string
  key?: string
}

export interface AutoRagRagSearch {
  data?: any[]
  filters?: any
  has_more?: boolean
  max_num_results?: number
  model?: any
  next_page?: string
  object?: string
  query: string
  ranking_options?: Record<string, any>
  reranking?: Record<string, any>
  response: string
  rewrite_query?: boolean
  search_query: string
  stream?: boolean
  system_prompt?: string
}

export interface AutoRagRagSearchCreateData {
  account_id: string
  rag_id: string
  data?: any[]
  filters?: any
  has_more?: boolean
  max_num_results?: number
  model?: any
  next_page?: string
  object?: string
  query: string
  ranking_options?: Record<string, any>
  reranking?: Record<string, any>
  response: string
  rewrite_query?: boolean
  search_query: string
  stream?: boolean
  system_prompt?: string
}

export interface FinetuneAsset {
  file_name: string
  file_url: string
  id?: string
}

export interface FinetuneAssetLoadMatch {
  account_id: string
  finetune_id: string
  id: string
}

export interface Vectorize {
  config: any
  description?: string
  errors: any[]
  ids?: any[]
  indexType: string
  messages: any[]
  name: string
  propertyName: string
  result: Record<string, any>
  success: boolean
}

export interface VectorizeLoadMatch {
  account_id: string
  index_name?: string
  count?: number
  cursor?: string
  index_id?: string
}

export interface VectorizeListMatch {
  account_id: string
}

export interface VectorizeCreateData {
  account_id: string
  index_id?: string
  index_name?: string
  config: any
  description?: string
  errors: any[]
  ids?: any[]
  indexType: string
  messages: any[]
  name: string
  propertyName: string
  result: Record<string, any>
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'insert' | 'query' | 'upsert'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface VectorizeRemoveMatch {
  account_id: string
  index_name: string
}

export interface VectorizeBetaDeprecated {
  config: any
  description?: string
  errors: any[]
  ids?: any[]
  messages: any[]
  name: string
  result?: Record<string, any>
  success: boolean
}

export interface VectorizeBetaDeprecatedLoadMatch {
  account_id: string
  index_name: string
}

export interface VectorizeBetaDeprecatedListMatch {
  account_id: string
}

export interface VectorizeBetaDeprecatedCreateData {
  account_id: string
  index_name?: string
  config: any
  description?: string
  errors: any[]
  ids?: any[]
  messages: any[]
  name: string
  result?: Record<string, any>
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'insert' | 'query' | 'upsert'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface VectorizeBetaDeprecatedUpdateData {
  account_id: string
  index_name: string
  config?: any
  description?: string
  errors?: any[]
  ids?: any[]
  messages?: any[]
  name?: string
  result?: Record<string, any>
  success?: boolean
}

export interface VectorizeBetaDeprecatedRemoveMatch {
  account_id: string
  index_name: string
}

export interface WorkersAi {
  errors: any[]
  extension: string
  input: Record<string, any>
  messages: any[]
  mimeType: string
  model: string
  options?: Record<string, any>
  output: Record<string, any>
  result?: Record<string, any>
  success: boolean
}

export interface WorkersAiLoadMatch {
  account_id: string
  author?: string
  format?: string
  hide_experimental?: boolean
  include_deprecated?: boolean
  page?: number
  per_page?: number
  search?: string
  source?: number
  task?: string
  model?: string
}

export interface WorkersAiListMatch {
  account_id: string
}

export interface WorkersAiCreateData {
  account_id: string
  model_name?: string
  errors: any[]
  extension: string
  input: Record<string, any>
  messages: any[]
  mimeType: string
  model: string
  options?: Record<string, any>
  output: Record<string, any>
  result?: Record<string, any>
  success: boolean
}

export interface WorkersAiFinetune {
  created_at: string
  description?: string
  id: string
  model: string
  modified_at: string
  name: string
  public: boolean
  success: boolean
}

export interface WorkersAiFinetuneLoadMatch {
  account_id: string
}

export interface WorkersAiFinetuneListMatch {
  account_id: string
  limit?: number
  offset?: number
  order_by?: string
}

export interface WorkersAiFinetuneCreateData {
  account_id: string
  finetune_id?: string
  created_at: string
  description?: string
  id: string
  model: string
  modified_at: string
  name: string
  public: boolean
  success: boolean
}

export interface WorkersAiFinetuneRemoveMatch {
  account_id: string
  id: string
}

