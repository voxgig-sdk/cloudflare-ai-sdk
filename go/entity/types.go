// Typed models for the CloudflareAi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-ai-sdk/go/core"
)

// Account is the typed data model for the account entity.
type Account struct {
}

// AccountLoadMatch is the typed request payload for Account.LoadTyped.
type AccountLoadMatch struct {
	Id string `json:"id"`
}

// AccountUpdateData is the typed request payload for Account.UpdateTyped.
type AccountUpdateData struct {
	Id string `json:"id"`
}

// AiGateway is the typed data model for the ai_gateway entity.
type AiGateway struct {
}

// AiGatewayCreateData is the typed request payload for AiGateway.CreateTyped.
type AiGatewayCreateData struct {
	AccountId string `json:"account_id"`
	ByokAlias *string `json:"byokAlias,omitempty"`
	Items []any `json:"items"`
	Limit *int `json:"limit,omitempty"`
	Metadata map[string]any `json:"metadata"`
	Options map[string]any `json:"options"`
	Provider *string `json:"provider,omitempty"`
	Query string `json:"query"`
}

// AiGatewayCustomDomain is the typed data model for the ai_gateway_custom_domain entity.
type AiGatewayCustomDomain struct {
}

// AiGatewayCustomDomainLoadMatch is the typed request payload for AiGatewayCustomDomain.LoadTyped.
type AiGatewayCustomDomainLoadMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
}

// AiGatewayCustomDomainListMatch is the typed request payload for AiGatewayCustomDomain.ListTyped.
type AiGatewayCustomDomainListMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	Status *string `json:"status,omitempty"`
}

// AiGatewayCustomDomainCreateData is the typed request payload for AiGatewayCustomDomain.CreateTyped.
type AiGatewayCustomDomainCreateData struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	CnameTarget string `json:"cname_target"`
	CreatedAt int `json:"created_at"`
	Domain string `json:"domain"`
	Hostname string `json:"hostname"`
	Id *string `json:"id,omitempty"`
	MinTLS *string `json:"minTLS,omitempty"`
	ModifiedAt int `json:"modified_at"`
	SslHostnameId string `json:"ssl_hostname_id"`
	Status string `json:"status"`
	ZoneId string `json:"zone_id"`
}

// AiGatewayCustomDomainRemoveMatch is the typed request payload for AiGatewayCustomDomain.RemoveTyped.
type AiGatewayCustomDomainRemoveMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
}

// AiGatewayCustomProvider is the typed data model for the ai_gateway_custom_provider entity.
type AiGatewayCustomProvider struct {
}

// AiGatewayCustomProviderLoadMatch is the typed request payload for AiGatewayCustomProvider.LoadTyped.
type AiGatewayCustomProviderLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AiGatewayCustomProviderListMatch is the typed request payload for AiGatewayCustomProvider.ListTyped.
type AiGatewayCustomProviderListMatch struct {
	AccountId string `json:"account_id"`
	Beta *bool `json:"beta,omitempty"`
	Enable *bool `json:"enable,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
}

// AiGatewayCustomProviderCreateData is the typed request payload for AiGatewayCustomProvider.CreateTyped.
type AiGatewayCustomProviderCreateData struct {
	AccountId string `json:"account_id"`
	BaseUrl string `json:"base_url"`
	Beta *bool `json:"beta,omitempty"`
	CreatedAt string `json:"created_at"`
	CurlExample *string `json:"curl_example,omitempty"`
	Description *string `json:"description,omitempty"`
	Enable *bool `json:"enable,omitempty"`
	Headers *string `json:"headers,omitempty"`
	Id string `json:"id"`
	JsExample *string `json:"js_example,omitempty"`
	Link *string `json:"link,omitempty"`
	Logo *string `json:"logo,omitempty"`
	ModifiedAt string `json:"modified_at"`
	Name string `json:"name"`
	Position *int `json:"position,omitempty"`
	Slug string `json:"slug"`
}

// AiGatewayCustomProviderUpdateData is the typed request payload for AiGatewayCustomProvider.UpdateTyped.
type AiGatewayCustomProviderUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	BaseUrl *string `json:"base_url,omitempty"`
	Beta *bool `json:"beta,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurlExample *string `json:"curl_example,omitempty"`
	Description *string `json:"description,omitempty"`
	Enable *bool `json:"enable,omitempty"`
	Headers *string `json:"headers,omitempty"`
	JsExample *string `json:"js_example,omitempty"`
	Link *string `json:"link,omitempty"`
	Logo *string `json:"logo,omitempty"`
	ModifiedAt *string `json:"modified_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *int `json:"position,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// AiGatewayCustomProviderRemoveMatch is the typed request payload for AiGatewayCustomProvider.RemoveTyped.
type AiGatewayCustomProviderRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AiGatewayCustomProviderCost is the typed data model for the ai_gateway_custom_provider_cost entity.
type AiGatewayCustomProviderCost struct {
}

// AiGatewayCustomProviderCostLoadMatch is the typed request payload for AiGatewayCustomProviderCost.LoadTyped.
type AiGatewayCustomProviderCostLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AiGatewayCustomProviderCostListMatch is the typed request payload for AiGatewayCustomProviderCost.ListTyped.
type AiGatewayCustomProviderCostListMatch struct {
	AccountId string `json:"account_id"`
	AccountProviderId *string `json:"account_provider_id,omitempty"`
	CostType *string `json:"cost_type,omitempty"`
	Enable *bool `json:"enable,omitempty"`
	ModelRule *string `json:"model_rule,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
}

// AiGatewayCustomProviderCostCreateData is the typed request payload for AiGatewayCustomProviderCost.CreateTyped.
type AiGatewayCustomProviderCostCreateData struct {
	AccountId string `json:"account_id"`
	AccountProviderId string `json:"account_provider_id"`
	ChangedBy *string `json:"changed_by,omitempty"`
	CostIn *float64 `json:"cost_in,omitempty"`
	CostOut *float64 `json:"cost_out,omitempty"`
	CostType *string `json:"cost_type,omitempty"`
	CreatedAt string `json:"created_at"`
	Enable *bool `json:"enable,omitempty"`
	Id string `json:"id"`
	Model string `json:"model"`
	ModelRule *string `json:"model_rule,omitempty"`
	ModifiedAt string `json:"modified_at"`
	TokenPricing *string `json:"token_pricing,omitempty"`
	Weight *int `json:"weight,omitempty"`
}

// AiGatewayCustomProviderCostUpdateData is the typed request payload for AiGatewayCustomProviderCost.UpdateTyped.
type AiGatewayCustomProviderCostUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	AccountProviderId *string `json:"account_provider_id,omitempty"`
	ChangedBy *string `json:"changed_by,omitempty"`
	CostIn *float64 `json:"cost_in,omitempty"`
	CostOut *float64 `json:"cost_out,omitempty"`
	CostType *string `json:"cost_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enable *bool `json:"enable,omitempty"`
	Model *string `json:"model,omitempty"`
	ModelRule *string `json:"model_rule,omitempty"`
	ModifiedAt *string `json:"modified_at,omitempty"`
	TokenPricing *string `json:"token_pricing,omitempty"`
	Weight *int `json:"weight,omitempty"`
}

// AiGatewayCustomProviderCostRemoveMatch is the typed request payload for AiGatewayCustomProviderCost.RemoveTyped.
type AiGatewayCustomProviderCostRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AiGatewayDataset is the typed data model for the ai_gateway_dataset entity.
type AiGatewayDataset struct {
}

// AiGatewayDatasetLoadMatch is the typed request payload for AiGatewayDataset.LoadTyped.
type AiGatewayDatasetLoadMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
}

// AiGatewayDatasetListMatch is the typed request payload for AiGatewayDataset.ListTyped.
type AiGatewayDatasetListMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Enable *bool `json:"enable,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
}

// AiGatewayDatasetCreateData is the typed request payload for AiGatewayDataset.CreateTyped.
type AiGatewayDatasetCreateData struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	CreatedAt string `json:"created_at"`
	Enable bool `json:"enable"`
	Filters []any `json:"filters"`
	Id string `json:"id"`
	ModifiedAt string `json:"modified_at"`
	Name string `json:"name"`
}

// AiGatewayDatasetUpdateData is the typed request payload for AiGatewayDataset.UpdateTyped.
type AiGatewayDatasetUpdateData struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enable *bool `json:"enable,omitempty"`
	Filters *[]any `json:"filters,omitempty"`
	ModifiedAt *string `json:"modified_at,omitempty"`
	Name *string `json:"name,omitempty"`
}

// AiGatewayDatasetRemoveMatch is the typed request payload for AiGatewayDataset.RemoveTyped.
type AiGatewayDatasetRemoveMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
}

// AiGatewayDynamicRoute is the typed data model for the ai_gateway_dynamic_route entity.
type AiGatewayDynamicRoute struct {
}

// AiGatewayDynamicRouteLoadMatch is the typed request payload for AiGatewayDynamicRoute.LoadTyped.
type AiGatewayDynamicRouteLoadMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	RouteId *string `json:"route_id,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// AiGatewayDynamicRouteCreateData is the typed request payload for AiGatewayDynamicRoute.CreateTyped.
type AiGatewayDynamicRouteCreateData struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	RouteId *string `json:"route_id,omitempty"`
	AccountTag string `json:"account_tag"`
	Active bool `json:"active"`
	CreatedAt string `json:"created_at"`
	Data string `json:"data"`
	Deployment map[string]any `json:"deployment"`
	Deployments []any `json:"deployments"`
	Elements []any `json:"elements"`
	Id string `json:"id"`
	IsValid *bool `json:"is_valid,omitempty"`
	ModifiedAt string `json:"modified_at"`
	Name string `json:"name"`
	OrderBy string `json:"order_by"`
	OrderByDirection string `json:"order_by_direction"`
	Page float64 `json:"page"`
	PerPage float64 `json:"per_page"`
	Routes []any `json:"routes"`
	Version map[string]any `json:"version"`
	VersionId string `json:"version_id"`
	Versions []any `json:"versions"`
}

// AiGatewayDynamicRouteUpdateData is the typed request payload for AiGatewayDynamicRoute.UpdateTyped.
type AiGatewayDynamicRouteUpdateData struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
	AccountTag *string `json:"account_tag,omitempty"`
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Data *string `json:"data,omitempty"`
	Deployment *map[string]any `json:"deployment,omitempty"`
	Deployments *[]any `json:"deployments,omitempty"`
	Elements *[]any `json:"elements,omitempty"`
	IsValid *bool `json:"is_valid,omitempty"`
	ModifiedAt *string `json:"modified_at,omitempty"`
	Name *string `json:"name,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderByDirection *string `json:"order_by_direction,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Routes *[]any `json:"routes,omitempty"`
	Version *map[string]any `json:"version,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
	Versions *[]any `json:"versions,omitempty"`
}

// AiGatewayDynamicRouteRemoveMatch is the typed request payload for AiGatewayDynamicRoute.RemoveTyped.
type AiGatewayDynamicRouteRemoveMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
}

// AiGatewayEvaluation is the typed data model for the ai_gateway_evaluation entity.
type AiGatewayEvaluation struct {
}

// AiGatewayEvaluationLoadMatch is the typed request payload for AiGatewayEvaluation.LoadTyped.
type AiGatewayEvaluationLoadMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
}

// AiGatewayEvaluationListMatch is the typed request payload for AiGatewayEvaluation.ListTyped.
type AiGatewayEvaluationListMatch struct {
	AccountId string `json:"account_id"`
	GatewayId *string `json:"gateway_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Processed *bool `json:"processed,omitempty"`
	Search *string `json:"search,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderByDirection *string `json:"order_by_direction,omitempty"`
}

// AiGatewayEvaluationCreateData is the typed request payload for AiGatewayEvaluation.CreateTyped.
type AiGatewayEvaluationCreateData struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	CreatedAt string `json:"created_at"`
	DatasetIds []any `json:"dataset_ids"`
	Datasets []any `json:"datasets"`
	Description string `json:"description"`
	Enable bool `json:"enable"`
	EvaluationTypeIds []any `json:"evaluation_type_ids"`
	Id string `json:"id"`
	Mandatory bool `json:"mandatory"`
	ModifiedAt string `json:"modified_at"`
	Name string `json:"name"`
	Processed bool `json:"processed"`
	Results []any `json:"results"`
	TotalLogs float64 `json:"total_logs"`
	Type string `json:"type"`
}

// AiGatewayEvaluationRemoveMatch is the typed request payload for AiGatewayEvaluation.RemoveTyped.
type AiGatewayEvaluationRemoveMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
}

// AiGatewayGateway is the typed data model for the ai_gateway_gateway entity.
type AiGatewayGateway struct {
}

// AiGatewayGatewayLoadMatch is the typed request payload for AiGatewayGateway.LoadTyped.
type AiGatewayGatewayLoadMatch struct {
	AccountId string `json:"account_id"`
	GatewayId *string `json:"gateway_id,omitempty"`
	Provider *string `json:"provider,omitempty"`
	Id *string `json:"id,omitempty"`
}

// AiGatewayGatewayListMatch is the typed request payload for AiGatewayGateway.ListTyped.
type AiGatewayGatewayListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
}

// AiGatewayGatewayCreateData is the typed request payload for AiGatewayGateway.CreateTyped.
type AiGatewayGatewayCreateData struct {
	AccountId string `json:"account_id"`
	Authentication *bool `json:"authentication,omitempty"`
	ByokOnly *bool `json:"byok_only,omitempty"`
	CacheInvalidateOnUpdate bool `json:"cache_invalidate_on_update"`
	CacheTtl int `json:"cache_ttl"`
	CollectLogs bool `json:"collect_logs"`
	CreatedAt string `json:"created_at"`
	Dlp *any `json:"dlp,omitempty"`
	Guardrails map[string]any `json:"guardrails"`
	Id string `json:"id"`
	IsDefault *bool `json:"is_default,omitempty"`
	LogClassification *bool `json:"log_classification,omitempty"`
	LogManagement *int `json:"log_management,omitempty"`
	LogManagementStrategy *string `json:"log_management_strategy,omitempty"`
	Logpush *bool `json:"logpush,omitempty"`
	LogpushPublicKey *string `json:"logpush_public_key,omitempty"`
	ModifiedAt string `json:"modified_at"`
	Otel *[]any `json:"otel,omitempty"`
	RateLimitingInterval int `json:"rate_limiting_interval"`
	RateLimitingLimit int `json:"rate_limiting_limit"`
	RateLimitingTechnique *string `json:"rate_limiting_technique,omitempty"`
	Result string `json:"result"`
	RetryBackoff *string `json:"retry_backoff,omitempty"`
	RetryDelay *int `json:"retry_delay,omitempty"`
	RetryMaxAttempts *int `json:"retry_max_attempts,omitempty"`
	SpendLimits *map[string]any `json:"spend_limits,omitempty"`
	StoreId *string `json:"store_id,omitempty"`
	Stripe map[string]any `json:"stripe"`
	Success bool `json:"success"`
	WorkersAiBillingMode *string `json:"workers_ai_billing_mode,omitempty"`
	Zdr *bool `json:"zdr,omitempty"`
}

// AiGatewayGatewayUpdateData is the typed request payload for AiGatewayGateway.UpdateTyped.
type AiGatewayGatewayUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Authentication *bool `json:"authentication,omitempty"`
	ByokOnly *bool `json:"byok_only,omitempty"`
	CacheInvalidateOnUpdate *bool `json:"cache_invalidate_on_update,omitempty"`
	CacheTtl *int `json:"cache_ttl,omitempty"`
	CollectLogs *bool `json:"collect_logs,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Dlp *any `json:"dlp,omitempty"`
	Guardrails *map[string]any `json:"guardrails,omitempty"`
	IsDefault *bool `json:"is_default,omitempty"`
	LogClassification *bool `json:"log_classification,omitempty"`
	LogManagement *int `json:"log_management,omitempty"`
	LogManagementStrategy *string `json:"log_management_strategy,omitempty"`
	Logpush *bool `json:"logpush,omitempty"`
	LogpushPublicKey *string `json:"logpush_public_key,omitempty"`
	ModifiedAt *string `json:"modified_at,omitempty"`
	Otel *[]any `json:"otel,omitempty"`
	RateLimitingInterval *int `json:"rate_limiting_interval,omitempty"`
	RateLimitingLimit *int `json:"rate_limiting_limit,omitempty"`
	RateLimitingTechnique *string `json:"rate_limiting_technique,omitempty"`
	Result *string `json:"result,omitempty"`
	RetryBackoff *string `json:"retry_backoff,omitempty"`
	RetryDelay *int `json:"retry_delay,omitempty"`
	RetryMaxAttempts *int `json:"retry_max_attempts,omitempty"`
	SpendLimits *map[string]any `json:"spend_limits,omitempty"`
	StoreId *string `json:"store_id,omitempty"`
	Stripe *map[string]any `json:"stripe,omitempty"`
	Success *bool `json:"success,omitempty"`
	WorkersAiBillingMode *string `json:"workers_ai_billing_mode,omitempty"`
	Zdr *bool `json:"zdr,omitempty"`
}

// AiGatewayGatewayRemoveMatch is the typed request payload for AiGatewayGateway.RemoveTyped.
type AiGatewayGatewayRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AiGatewayLog is the typed data model for the ai_gateway_log entity.
type AiGatewayLog struct {
}

// AiGatewayLogLoadMatch is the typed request payload for AiGatewayLog.LoadTyped.
type AiGatewayLogLoadMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id *string `json:"id,omitempty"`
	LogId *string `json:"log_id,omitempty"`
}

// AiGatewayLogListMatch is the typed request payload for AiGatewayLog.ListTyped.
type AiGatewayLogListMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Cached *bool `json:"cached,omitempty"`
	Direction *string `json:"direction,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Feedback *any `json:"feedback,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	MaxCost *float64 `json:"max_cost,omitempty"`
	MaxDuration *float64 `json:"max_duration,omitempty"`
	MaxTokensIn *float64 `json:"max_tokens_in,omitempty"`
	MaxTokensOut *float64 `json:"max_tokens_out,omitempty"`
	MaxTotalToken *float64 `json:"max_total_token,omitempty"`
	MetaInfo *bool `json:"meta_info,omitempty"`
	MinCost *float64 `json:"min_cost,omitempty"`
	MinDuration *float64 `json:"min_duration,omitempty"`
	MinTokensIn *float64 `json:"min_tokens_in,omitempty"`
	MinTokensOut *float64 `json:"min_tokens_out,omitempty"`
	MinTotalToken *float64 `json:"min_total_token,omitempty"`
	Model *string `json:"model,omitempty"`
	ModelType *string `json:"model_type,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderByDirection *string `json:"order_by_direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Provider *string `json:"provider,omitempty"`
	RequestContentType *string `json:"request_content_type,omitempty"`
	ResponseContentType *string `json:"response_content_type,omitempty"`
	Search *string `json:"search,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AiGatewayLogUpdateData is the typed request payload for AiGatewayLog.UpdateTyped.
type AiGatewayLogUpdateData struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
	Cached *bool `json:"cached,omitempty"`
	Cost *float64 `json:"cost,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomCost *bool `json:"custom_cost,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Feedback *float64 `json:"feedback,omitempty"`
	Metadata *string `json:"metadata,omitempty"`
	Model *string `json:"model,omitempty"`
	ModelType *string `json:"model_type,omitempty"`
	Path *string `json:"path,omitempty"`
	Provider *string `json:"provider,omitempty"`
	RequestContentType *string `json:"request_content_type,omitempty"`
	RequestHead *string `json:"request_head,omitempty"`
	RequestHeadComplete *bool `json:"request_head_complete,omitempty"`
	RequestSize *int `json:"request_size,omitempty"`
	RequestType *string `json:"request_type,omitempty"`
	ResponseContentType *string `json:"response_content_type,omitempty"`
	ResponseHead *string `json:"response_head,omitempty"`
	ResponseHeadComplete *bool `json:"response_head_complete,omitempty"`
	ResponseSize *int `json:"response_size,omitempty"`
	Score *float64 `json:"score,omitempty"`
	StatusCode *int `json:"status_code,omitempty"`
	Step *int `json:"step,omitempty"`
	Success *bool `json:"success,omitempty"`
	TokensIn *int `json:"tokens_in,omitempty"`
	TokensOut *int `json:"tokens_out,omitempty"`
}

// AiGatewayLogRemoveMatch is the typed request payload for AiGatewayLog.RemoveTyped.
type AiGatewayLogRemoveMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Filter *[]any `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderByDirection *string `json:"order_by_direction,omitempty"`
}

// AiGatewayProviderConfig is the typed data model for the ai_gateway_provider_config entity.
type AiGatewayProviderConfig struct {
}

// AiGatewayProviderConfigListMatch is the typed request payload for AiGatewayProviderConfig.ListTyped.
type AiGatewayProviderConfigListMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// AiGatewayProviderConfigCreateData is the typed request payload for AiGatewayProviderConfig.CreateTyped.
type AiGatewayProviderConfigCreateData struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Alias string `json:"alias"`
	DefaultConfig bool `json:"default_config"`
	Id string `json:"id"`
	ModifiedAt string `json:"modified_at"`
	ProviderSlug string `json:"provider_slug"`
	RateLimit *float64 `json:"rate_limit,omitempty"`
	RateLimitPeriod *float64 `json:"rate_limit_period,omitempty"`
	Secret *string `json:"secret,omitempty"`
	SecretId string `json:"secret_id"`
	SecretPreview string `json:"secret_preview"`
}

// AiGatewayProviderConfigUpdateData is the typed request payload for AiGatewayProviderConfig.UpdateTyped.
type AiGatewayProviderConfigUpdateData struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
	Alias *string `json:"alias,omitempty"`
	DefaultConfig *bool `json:"default_config,omitempty"`
	ModifiedAt *string `json:"modified_at,omitempty"`
	ProviderSlug *string `json:"provider_slug,omitempty"`
	RateLimit *float64 `json:"rate_limit,omitempty"`
	RateLimitPeriod *float64 `json:"rate_limit_period,omitempty"`
	Secret *string `json:"secret,omitempty"`
	SecretId *string `json:"secret_id,omitempty"`
	SecretPreview *string `json:"secret_preview,omitempty"`
}

// AiGatewayProviderConfigRemoveMatch is the typed request payload for AiGatewayProviderConfig.RemoveTyped.
type AiGatewayProviderConfigRemoveMatch struct {
	AccountId string `json:"account_id"`
	GatewayId string `json:"gateway_id"`
	Id string `json:"id"`
}

// AiSearchAccountSearch is the typed data model for the ai_search_account_search entity.
type AiSearchAccountSearch struct {
}

// AiSearchAccountSearchCreateData is the typed request payload for AiSearchAccountSearch.CreateTyped.
type AiSearchAccountSearchCreateData struct {
	AccountId string `json:"account_id"`
	Name *string `json:"name,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	AiSearchOptions map[string]any `json:"ai_search_options"`
	Choices []any `json:"choices"`
	Chunks []any `json:"chunks"`
	Errors *[]any `json:"errors,omitempty"`
	Id *string `json:"id,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Model *string `json:"model,omitempty"`
	Object *string `json:"object,omitempty"`
	Query *string `json:"query,omitempty"`
	QueryKind string `json:"query_kind"`
	SearchQuery *string `json:"search_query,omitempty"`
	Stream *bool `json:"stream,omitempty"`
}

// AiSearchInstance is the typed data model for the ai_search_instance entity.
type AiSearchInstance struct {
}

// AiSearchInstanceLoadMatch is the typed request payload for AiSearchInstance.LoadTyped.
type AiSearchInstanceLoadMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	InstanceId *string `json:"instance_id,omitempty"`
}

// AiSearchInstanceListMatch is the typed request payload for AiSearchInstance.ListTyped.
type AiSearchInstanceListMatch struct {
	AccountId string `json:"account_id"`
	Name *string `json:"name,omitempty"`
	Hostname *string `json:"hostname,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	OrderByDirection *string `json:"order_by_direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
}

// AiSearchInstanceCreateData is the typed request payload for AiSearchInstance.CreateTyped.
type AiSearchInstanceCreateData struct {
	AccountId string `json:"account_id"`
	InstanceId *string `json:"instance_id,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Name *string `json:"name,omitempty"`
	AiGatewayId *string `json:"ai_gateway_id,omitempty"`
	AiSearchModel *string `json:"ai_search_model,omitempty"`
	AiSearchOptions *map[string]any `json:"ai_search_options,omitempty"`
	Cache *bool `json:"cache,omitempty"`
	CacheThreshold *string `json:"cache_threshold,omitempty"`
	CacheTtl *any `json:"cache_ttl,omitempty"`
	Choices []any `json:"choices"`
	Chunk *bool `json:"chunk,omitempty"`
	ChunkOverlap *int `json:"chunk_overlap,omitempty"`
	ChunkSize *int `json:"chunk_size,omitempty"`
	Chunks []any `json:"chunks"`
	Completed *int `json:"completed,omitempty"`
	CreatedAt string `json:"created_at"`
	CreatedBy *string `json:"created_by,omitempty"`
	CustomMetadata *[]any `json:"custom_metadata,omitempty"`
	Degraded *bool `json:"degraded,omitempty"`
	EmbeddingModel *string `json:"embedding_model,omitempty"`
	Enable *bool `json:"enable,omitempty"`
	Engine *map[string]any `json:"engine,omitempty"`
	EngineVersion *float64 `json:"engine_version,omitempty"`
	Error *int `json:"error,omitempty"`
	FileEmbedErrors *map[string]any `json:"file_embed_errors,omitempty"`
	FusionMethod *string `json:"fusion_method,omitempty"`
	HybridSearchEnabled *bool `json:"hybrid_search_enabled,omitempty"`
	Id string `json:"id"`
	IndexMethod map[string]any `json:"index_method"`
	IndexSourceErrors *map[string]any `json:"index_source_errors,omitempty"`
	IndexingOptions *map[string]any `json:"indexing_options,omitempty"`
	LastActivity *string `json:"last_activity,omitempty"`
	MaxNumResults *int `json:"max_num_results,omitempty"`
	Messages []any `json:"messages"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Model *string `json:"model,omitempty"`
	ModifiedAt string `json:"modified_at"`
	ModifiedBy *string `json:"modified_by,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	Object *string `json:"object,omitempty"`
	Outdated *int `json:"outdated,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	PublicEndpointId *string `json:"public_endpoint_id,omitempty"`
	PublicEndpointParams *map[string]any `json:"public_endpoint_params,omitempty"`
	Queued *int `json:"queued,omitempty"`
	Reranking *bool `json:"reranking,omitempty"`
	RerankingModel *string `json:"reranking_model,omitempty"`
	RetrievalOptions *map[string]any `json:"retrieval_options,omitempty"`
	RewriteModel *string `json:"rewrite_model,omitempty"`
	RewriteQuery *bool `json:"rewrite_query,omitempty"`
	Running *int `json:"running,omitempty"`
	ScoreThreshold *float64 `json:"score_threshold,omitempty"`
	Skipped *int `json:"skipped,omitempty"`
	Source *string `json:"source,omitempty"`
	SourceParams *map[string]any `json:"source_params,omitempty"`
	Status *string `json:"status,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	Summarization *bool `json:"summarization,omitempty"`
	SummarizationModel *string `json:"summarization_model,omitempty"`
	SyncInterval *any `json:"sync_interval,omitempty"`
	SystemPromptAiSearch *string `json:"system_prompt_ai_search,omitempty"`
	SystemPromptIndexSummarization *string `json:"system_prompt_index_summarization,omitempty"`
	SystemPromptRewriteQuery *string `json:"system_prompt_rewrite_query,omitempty"`
	TokenId *string `json:"token_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AiSearchInstanceUpdateData is the typed request payload for AiSearchInstance.UpdateTyped.
type AiSearchInstanceUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	AiGatewayId *string `json:"ai_gateway_id,omitempty"`
	AiSearchModel *string `json:"ai_search_model,omitempty"`
	AiSearchOptions *map[string]any `json:"ai_search_options,omitempty"`
	Cache *bool `json:"cache,omitempty"`
	CacheThreshold *string `json:"cache_threshold,omitempty"`
	CacheTtl *any `json:"cache_ttl,omitempty"`
	Choices *[]any `json:"choices,omitempty"`
	Chunk *bool `json:"chunk,omitempty"`
	ChunkOverlap *int `json:"chunk_overlap,omitempty"`
	ChunkSize *int `json:"chunk_size,omitempty"`
	Chunks *[]any `json:"chunks,omitempty"`
	Completed *int `json:"completed,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CustomMetadata *[]any `json:"custom_metadata,omitempty"`
	Degraded *bool `json:"degraded,omitempty"`
	EmbeddingModel *string `json:"embedding_model,omitempty"`
	Enable *bool `json:"enable,omitempty"`
	Engine *map[string]any `json:"engine,omitempty"`
	EngineVersion *float64 `json:"engine_version,omitempty"`
	Error *int `json:"error,omitempty"`
	FileEmbedErrors *map[string]any `json:"file_embed_errors,omitempty"`
	FusionMethod *string `json:"fusion_method,omitempty"`
	HybridSearchEnabled *bool `json:"hybrid_search_enabled,omitempty"`
	IndexMethod *map[string]any `json:"index_method,omitempty"`
	IndexSourceErrors *map[string]any `json:"index_source_errors,omitempty"`
	IndexingOptions *map[string]any `json:"indexing_options,omitempty"`
	LastActivity *string `json:"last_activity,omitempty"`
	MaxNumResults *int `json:"max_num_results,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Model *string `json:"model,omitempty"`
	ModifiedAt *string `json:"modified_at,omitempty"`
	ModifiedBy *string `json:"modified_by,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	Object *string `json:"object,omitempty"`
	Outdated *int `json:"outdated,omitempty"`
	Paused *bool `json:"paused,omitempty"`
	PublicEndpointId *string `json:"public_endpoint_id,omitempty"`
	PublicEndpointParams *map[string]any `json:"public_endpoint_params,omitempty"`
	Queued *int `json:"queued,omitempty"`
	Reranking *bool `json:"reranking,omitempty"`
	RerankingModel *string `json:"reranking_model,omitempty"`
	RetrievalOptions *map[string]any `json:"retrieval_options,omitempty"`
	RewriteModel *string `json:"rewrite_model,omitempty"`
	RewriteQuery *bool `json:"rewrite_query,omitempty"`
	Running *int `json:"running,omitempty"`
	ScoreThreshold *float64 `json:"score_threshold,omitempty"`
	Skipped *int `json:"skipped,omitempty"`
	Source *string `json:"source,omitempty"`
	SourceParams *map[string]any `json:"source_params,omitempty"`
	Status *string `json:"status,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	Summarization *bool `json:"summarization,omitempty"`
	SummarizationModel *string `json:"summarization_model,omitempty"`
	SyncInterval *any `json:"sync_interval,omitempty"`
	SystemPromptAiSearch *string `json:"system_prompt_ai_search,omitempty"`
	SystemPromptIndexSummarization *string `json:"system_prompt_index_summarization,omitempty"`
	SystemPromptRewriteQuery *string `json:"system_prompt_rewrite_query,omitempty"`
	TokenId *string `json:"token_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AiSearchInstanceRemoveMatch is the typed request payload for AiSearchInstance.RemoveTyped.
type AiSearchInstanceRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
}

// AiSearchInstancesItem is the typed data model for the ai_search_instances_item entity.
type AiSearchInstancesItem struct {
}

// AiSearchInstancesItemLoadMatch is the typed request payload for AiSearchInstancesItem.LoadTyped.
type AiSearchInstancesItemLoadMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	InstanceId string `json:"instance_id"`
	NamespaceId string `json:"namespace_id"`
	ItemId *string `json:"item_id,omitempty"`
}

// AiSearchInstancesItemListMatch is the typed request payload for AiSearchInstancesItem.ListTyped.
type AiSearchInstancesItemListMatch struct {
	AccountId string `json:"account_id"`
	InstanceId string `json:"instance_id"`
	NamespaceId string `json:"namespace_id"`
	ItemId *string `json:"item_id,omitempty"`
	Key *string `json:"key,omitempty"`
	MetadataFilter *string `json:"metadata_filter,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
}

// AiSearchInstancesItemCreateData is the typed request payload for AiSearchInstancesItem.CreateTyped.
type AiSearchInstancesItemCreateData struct {
	AccountId string `json:"account_id"`
	InstanceId string `json:"instance_id"`
	NamespaceId string `json:"namespace_id"`
	Action string `json:"action"`
	Checksum string `json:"checksum"`
	ChunkCount int `json:"chunkCount"`
	ChunksCount int `json:"chunks_count"`
	CreatedAt string `json:"created_at"`
	EndByte *float64 `json:"end_byte,omitempty"`
	Error *string `json:"error,omitempty"`
	ErrorType string `json:"errorType"`
	FileKey string `json:"fileKey"`
	FileSize float64 `json:"file_size"`
	Id string `json:"id"`
	Item map[string]any `json:"item"`
	Key string `json:"key"`
	LastSeenAt string `json:"last_seen_at"`
	Message string `json:"message"`
	Metadata map[string]any `json:"metadata"`
	Namespace string `json:"namespace"`
	NextAction string `json:"next_action"`
	ProcessingTimeMs int `json:"processingTimeMs"`
	SourceId string `json:"source_id"`
	StartByte *float64 `json:"start_byte,omitempty"`
	Status string `json:"status"`
	Text string `json:"text"`
	Timestamp string `json:"timestamp"`
	WaitForCompletion *bool `json:"wait_for_completion,omitempty"`
	Warnings *[]any `json:"warnings,omitempty"`
}

// AiSearchInstancesItemUpdateData is the typed request payload for AiSearchInstancesItem.UpdateTyped.
type AiSearchInstancesItemUpdateData struct {
	AccountId string `json:"account_id"`
	InstanceId string `json:"instance_id"`
	NamespaceId string `json:"namespace_id"`
	Action *string `json:"action,omitempty"`
	Checksum *string `json:"checksum,omitempty"`
	ChunkCount *int `json:"chunkCount,omitempty"`
	ChunksCount *int `json:"chunks_count,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EndByte *float64 `json:"end_byte,omitempty"`
	Error *string `json:"error,omitempty"`
	ErrorType *string `json:"errorType,omitempty"`
	FileKey *string `json:"fileKey,omitempty"`
	FileSize *float64 `json:"file_size,omitempty"`
	Id *string `json:"id,omitempty"`
	Item *map[string]any `json:"item,omitempty"`
	Key *string `json:"key,omitempty"`
	LastSeenAt *string `json:"last_seen_at,omitempty"`
	Message *string `json:"message,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	NextAction *string `json:"next_action,omitempty"`
	ProcessingTimeMs *int `json:"processingTimeMs,omitempty"`
	SourceId *string `json:"source_id,omitempty"`
	StartByte *float64 `json:"start_byte,omitempty"`
	Status *string `json:"status,omitempty"`
	Text *string `json:"text,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	WaitForCompletion *bool `json:"wait_for_completion,omitempty"`
	Warnings *[]any `json:"warnings,omitempty"`
}

// AiSearchInstancesItemRemoveMatch is the typed request payload for AiSearchInstancesItem.RemoveTyped.
type AiSearchInstancesItemRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	InstanceId string `json:"instance_id"`
	NamespaceId string `json:"namespace_id"`
}

// AiSearchInstancesJob is the typed data model for the ai_search_instances_job entity.
type AiSearchInstancesJob struct {
}

// AiSearchInstancesJobLoadMatch is the typed request payload for AiSearchInstancesJob.LoadTyped.
type AiSearchInstancesJobLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	InstanceId string `json:"instance_id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
}

// AiSearchInstancesJobListMatch is the typed request payload for AiSearchInstancesJob.ListTyped.
type AiSearchInstancesJobListMatch struct {
	AccountId string `json:"account_id"`
	InstanceId string `json:"instance_id"`
	JobId *string `json:"job_id,omitempty"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// AiSearchInstancesJobCreateData is the typed request payload for AiSearchInstancesJob.CreateTyped.
type AiSearchInstancesJobCreateData struct {
	AccountId string `json:"account_id"`
	InstanceId string `json:"instance_id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Action string `json:"action"`
	CreatedAt float64 `json:"created_at"`
	Description *string `json:"description,omitempty"`
	EndReason *string `json:"end_reason,omitempty"`
	EndedAt *string `json:"ended_at,omitempty"`
	Id string `json:"id"`
	LastSeenAt *string `json:"last_seen_at,omitempty"`
	Message string `json:"message"`
	MessageType int `json:"message_type"`
	Source string `json:"source"`
	StartedAt *string `json:"started_at,omitempty"`
}

// AiSearchInstancesJobUpdateData is the typed request payload for AiSearchInstancesJob.UpdateTyped.
type AiSearchInstancesJobUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	InstanceId string `json:"instance_id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	Action *string `json:"action,omitempty"`
	CreatedAt *float64 `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EndReason *string `json:"end_reason,omitempty"`
	EndedAt *string `json:"ended_at,omitempty"`
	LastSeenAt *string `json:"last_seen_at,omitempty"`
	Message *string `json:"message,omitempty"`
	MessageType *int `json:"message_type,omitempty"`
	Source *string `json:"source,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
}

// AiSearchNamespace is the typed data model for the ai_search_namespace entity.
type AiSearchNamespace struct {
}

// AiSearchNamespaceLoadMatch is the typed request payload for AiSearchNamespace.LoadTyped.
type AiSearchNamespaceLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AiSearchNamespaceListMatch is the typed request payload for AiSearchNamespace.ListTyped.
type AiSearchNamespaceListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
}

// AiSearchNamespaceCreateData is the typed request payload for AiSearchNamespace.CreateTyped.
type AiSearchNamespaceCreateData struct {
	AccountId string `json:"account_id"`
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	NewNamespace string `json:"new_namespace"`
	PublicEndpointId *string `json:"public_endpoint_id,omitempty"`
	PublicEndpointParams *map[string]any `json:"public_endpoint_params,omitempty"`
}

// AiSearchNamespaceUpdateData is the typed request payload for AiSearchNamespace.UpdateTyped.
type AiSearchNamespaceUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	NewNamespace *string `json:"new_namespace,omitempty"`
	PublicEndpointId *string `json:"public_endpoint_id,omitempty"`
	PublicEndpointParams *map[string]any `json:"public_endpoint_params,omitempty"`
}

// AiSearchNamespaceRemoveMatch is the typed request payload for AiSearchNamespace.RemoveTyped.
type AiSearchNamespaceRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AiSearchToken is the typed data model for the ai_search_token entity.
type AiSearchToken struct {
}

// AiSearchTokenLoadMatch is the typed request payload for AiSearchToken.LoadTyped.
type AiSearchTokenLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AiSearchTokenListMatch is the typed request payload for AiSearchToken.ListTyped.
type AiSearchTokenListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
}

// AiSearchTokenCreateData is the typed request payload for AiSearchToken.CreateTyped.
type AiSearchTokenCreateData struct {
	AccountId string `json:"account_id"`
	CfApiId string `json:"cf_api_id"`
	CfApiKey string `json:"cf_api_key"`
	CreatedAt string `json:"created_at"`
	CreatedBy *string `json:"created_by,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Id string `json:"id"`
	Legacy *bool `json:"legacy,omitempty"`
	ModifiedAt string `json:"modified_at"`
	ModifiedBy *string `json:"modified_by,omitempty"`
	Name string `json:"name"`
}

// AiSearchTokenUpdateData is the typed request payload for AiSearchToken.UpdateTyped.
type AiSearchTokenUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	CfApiId *string `json:"cf_api_id,omitempty"`
	CfApiKey *string `json:"cf_api_key,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Legacy *bool `json:"legacy,omitempty"`
	ModifiedAt *string `json:"modified_at,omitempty"`
	ModifiedBy *string `json:"modified_by,omitempty"`
	Name *string `json:"name,omitempty"`
}

// AiSearchTokenRemoveMatch is the typed request payload for AiSearchToken.RemoveTyped.
type AiSearchTokenRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AigBillingCreateTopup is the typed data model for the aig_billing_create_topup entity.
type AigBillingCreateTopup struct {
}

// AigBillingCreateTopupCreateData is the typed request payload for AigBillingCreateTopup.CreateTyped.
type AigBillingCreateTopupCreateData struct {
	AccountId string `json:"account_id"`
	Amount int `json:"amount"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	PaymentMethodId *string `json:"payment_method_id,omitempty"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
}

// AigBillingDeleteSpendingLimit is the typed data model for the aig_billing_delete_spending_limit entity.
type AigBillingDeleteSpendingLimit struct {
}

// AigBillingDeleteSpendingLimitRemoveMatch is the typed request payload for AigBillingDeleteSpendingLimit.RemoveTyped.
type AigBillingDeleteSpendingLimitRemoveMatch struct {
	AccountId string `json:"account_id"`
}

// AigBillingDeleteTopupConfig is the typed data model for the aig_billing_delete_topup_config entity.
type AigBillingDeleteTopupConfig struct {
}

// AigBillingDeleteTopupConfigRemoveMatch is the typed request payload for AigBillingDeleteTopupConfig.RemoveTyped.
type AigBillingDeleteTopupConfigRemoveMatch struct {
	AccountId string `json:"account_id"`
}

// AigBillingGetCreditBalance is the typed data model for the aig_billing_get_credit_balance entity.
type AigBillingGetCreditBalance struct {
}

// AigBillingGetCreditBalanceListMatch is the typed request payload for AigBillingGetCreditBalance.ListTyped.
type AigBillingGetCreditBalanceListMatch struct {
	AccountId string `json:"account_id"`
}

// AigBillingGetInvoiceHistory is the typed data model for the aig_billing_get_invoice_history entity.
type AigBillingGetInvoiceHistory struct {
}

// AigBillingGetInvoiceHistoryListMatch is the typed request payload for AigBillingGetInvoiceHistory.ListTyped.
type AigBillingGetInvoiceHistoryListMatch struct {
	AccountId string `json:"account_id"`
	Type *string `json:"type,omitempty"`
}

// AigBillingGetInvoicePreview is the typed data model for the aig_billing_get_invoice_preview entity.
type AigBillingGetInvoicePreview struct {
}

// AigBillingGetInvoicePreviewListMatch is the typed request payload for AigBillingGetInvoicePreview.ListTyped.
type AigBillingGetInvoicePreviewListMatch struct {
	AccountId string `json:"account_id"`
}

// AigBillingGetSpendingLimit is the typed data model for the aig_billing_get_spending_limit entity.
type AigBillingGetSpendingLimit struct {
}

// AigBillingGetSpendingLimitListMatch is the typed request payload for AigBillingGetSpendingLimit.ListTyped.
type AigBillingGetSpendingLimitListMatch struct {
	AccountId string `json:"account_id"`
}

// AigBillingGetTopupConfig is the typed data model for the aig_billing_get_topup_config entity.
type AigBillingGetTopupConfig struct {
}

// AigBillingGetTopupConfigListMatch is the typed request payload for AigBillingGetTopupConfig.ListTyped.
type AigBillingGetTopupConfigListMatch struct {
	AccountId string `json:"account_id"`
}

// AigBillingGetTopupEligibility is the typed data model for the aig_billing_get_topup_eligibility entity.
type AigBillingGetTopupEligibility struct {
}

// AigBillingGetTopupEligibilityCreateData is the typed request payload for AigBillingGetTopupEligibility.CreateTyped.
type AigBillingGetTopupEligibilityCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	PaymentMethods *[]any `json:"payment_methods,omitempty"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
}

// AigBillingGetTopupLimit is the typed data model for the aig_billing_get_topup_limit entity.
type AigBillingGetTopupLimit struct {
}

// AigBillingGetTopupLimitListMatch is the typed request payload for AigBillingGetTopupLimit.ListTyped.
type AigBillingGetTopupLimitListMatch struct {
	AccountId string `json:"account_id"`
}

// AigBillingGetUsageHistory is the typed data model for the aig_billing_get_usage_history entity.
type AigBillingGetUsageHistory struct {
}

// AigBillingGetUsageHistoryListMatch is the typed request payload for AigBillingGetUsageHistory.ListTyped.
type AigBillingGetUsageHistoryListMatch struct {
	AccountId string `json:"account_id"`
	EndTime *float64 `json:"end_time,omitempty"`
	StartTime *float64 `json:"start_time,omitempty"`
	ValueGroupingWindow string `json:"value_grouping_window"`
}

// AigBillingSetSpendingLimit is the typed data model for the aig_billing_set_spending_limit entity.
type AigBillingSetSpendingLimit struct {
}

// AigBillingSetSpendingLimitCreateData is the typed request payload for AigBillingSetSpendingLimit.CreateTyped.
type AigBillingSetSpendingLimitCreateData struct {
	AccountId string `json:"account_id"`
	Amount int `json:"amount"`
	Duration string `json:"duration"`
	Strategy string `json:"strategy"`
}

// AigBillingSetTopupConfig is the typed data model for the aig_billing_set_topup_config entity.
type AigBillingSetTopupConfig struct {
}

// AigBillingSetTopupConfigCreateData is the typed request payload for AigBillingSetTopupConfig.CreateTyped.
type AigBillingSetTopupConfigCreateData struct {
	AccountId string `json:"account_id"`
	Amount int `json:"amount"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
	Threshold int `json:"threshold"`
}

// AigBillingTopupStatus is the typed data model for the aig_billing_topup_status entity.
type AigBillingTopupStatus struct {
}

// AigBillingTopupStatusCreateData is the typed request payload for AigBillingTopupStatus.CreateTyped.
type AigBillingTopupStatusCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	PaymentIntentId string `json:"payment_intent_id"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
}

// AutoRagJob is the typed data model for the auto_rag_job entity.
type AutoRagJob struct {
}

// AutoRagJobLoadMatch is the typed request payload for AutoRagJob.LoadTyped.
type AutoRagJobLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	RagId string `json:"rag_id"`
}

// AutoRagJobListMatch is the typed request payload for AutoRagJob.ListTyped.
type AutoRagJobListMatch struct {
	AccountId string `json:"account_id"`
	JobId *string `json:"job_id,omitempty"`
	RagId string `json:"rag_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// AutoRagRag is the typed data model for the auto_rag_rag entity.
type AutoRagRag struct {
}

// AutoRagRagListMatch is the typed request payload for AutoRagRag.ListTyped.
type AutoRagRagListMatch struct {
	AccountId string `json:"account_id"`
	RagId string `json:"rag_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	Status *string `json:"status,omitempty"`
}

// AutoRagRagUpdateData is the typed request payload for AutoRagRag.UpdateTyped.
type AutoRagRagUpdateData struct {
	AccountId string `json:"account_id"`
	RagId string `json:"rag_id"`
	Error *string `json:"error,omitempty"`
	JobId *string `json:"job_id,omitempty"`
	Key *string `json:"key,omitempty"`
}

// AutoRagRagSearch is the typed data model for the auto_rag_rag_search entity.
type AutoRagRagSearch struct {
}

// AutoRagRagSearchCreateData is the typed request payload for AutoRagRagSearch.CreateTyped.
type AutoRagRagSearchCreateData struct {
	AccountId string `json:"account_id"`
	RagId string `json:"rag_id"`
	Data *[]any `json:"data,omitempty"`
	Filters *any `json:"filters,omitempty"`
	HasMore *bool `json:"has_more,omitempty"`
	MaxNumResults *int `json:"max_num_results,omitempty"`
	Model *any `json:"model,omitempty"`
	NextPage *string `json:"next_page,omitempty"`
	Object *string `json:"object,omitempty"`
	Query string `json:"query"`
	RankingOptions *map[string]any `json:"ranking_options,omitempty"`
	Reranking *map[string]any `json:"reranking,omitempty"`
	Response string `json:"response"`
	RewriteQuery *bool `json:"rewrite_query,omitempty"`
	SearchQuery string `json:"search_query"`
	Stream *bool `json:"stream,omitempty"`
	SystemPrompt *string `json:"system_prompt,omitempty"`
}

// FinetuneAsset is the typed data model for the finetune_asset entity.
type FinetuneAsset struct {
}

// FinetuneAssetLoadMatch is the typed request payload for FinetuneAsset.LoadTyped.
type FinetuneAssetLoadMatch struct {
	AccountId string `json:"account_id"`
	FinetuneId string `json:"finetune_id"`
	Id string `json:"id"`
}

// Memory is the typed data model for the memory entity.
type Memory struct {
}

// MemoryLoadMatch is the typed request payload for Memory.LoadTyped.
type MemoryLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	NamespaceId string `json:"namespace_id"`
	ProfileId string `json:"profile_id"`
}

// MemoryListMatch is the typed request payload for Memory.ListTyped.
type MemoryListMatch struct {
	AccountId string `json:"account_id"`
	NamespaceId *string `json:"namespace_id,omitempty"`
	ProfileName *string `json:"profile_name,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	Type *string `json:"type,omitempty"`
	NamespaceName *string `json:"namespace_name,omitempty"`
}

// MemoryCreateData is the typed request payload for Memory.CreateTyped.
type MemoryCreateData struct {
	AccountId string `json:"account_id"`
	NamespaceId string `json:"namespace_id"`
	ProfileName string `json:"profile_name"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success bool `json:"success"`
}

// MemoryRemoveMatch is the typed request payload for Memory.RemoveTyped.
type MemoryRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	NamespaceId string `json:"namespace_id"`
	ProfileId *string `json:"profile_id,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	ProfileName *string `json:"profile_name,omitempty"`
}

// Namespace is the typed data model for the namespace entity.
type Namespace struct {
}

// NamespaceLoadMatch is the typed request payload for Namespace.LoadTyped.
type NamespaceLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// NamespaceListMatch is the typed request payload for Namespace.ListTyped.
type NamespaceListMatch struct {
	AccountId string `json:"account_id"`
	Cursor *string `json:"cursor,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Order *string `json:"order,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// NamespaceCreateData is the typed request payload for Namespace.CreateTyped.
type NamespaceCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success bool `json:"success"`
}

// NamespaceRemoveMatch is the typed request payload for Namespace.RemoveTyped.
type NamespaceRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Vectorize is the typed data model for the vectorize entity.
type Vectorize struct {
}

// VectorizeLoadMatch is the typed request payload for Vectorize.LoadTyped.
type VectorizeLoadMatch struct {
	AccountId string `json:"account_id"`
	IndexName *string `json:"index_name,omitempty"`
	Count *int `json:"count,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	IndexId *string `json:"index_id,omitempty"`
}

// VectorizeListMatch is the typed request payload for Vectorize.ListTyped.
type VectorizeListMatch struct {
	AccountId string `json:"account_id"`
}

// VectorizeCreateData is the typed request payload for Vectorize.CreateTyped.
type VectorizeCreateData struct {
	AccountId string `json:"account_id"`
	IndexId *string `json:"index_id,omitempty"`
	IndexName *string `json:"index_name,omitempty"`
	Config any `json:"config"`
	Description *string `json:"description,omitempty"`
	Errors []any `json:"errors"`
	Ids *[]any `json:"ids,omitempty"`
	IndexType string `json:"indexType"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	PropertyName string `json:"propertyName"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// VectorizeRemoveMatch is the typed request payload for Vectorize.RemoveTyped.
type VectorizeRemoveMatch struct {
	AccountId string `json:"account_id"`
	IndexName string `json:"index_name"`
}

// VectorizeBetaDeprecated is the typed data model for the vectorize_beta__deprecated entity.
type VectorizeBetaDeprecated struct {
}

// VectorizeBetaDeprecatedLoadMatch is the typed request payload for VectorizeBetaDeprecated.LoadTyped.
type VectorizeBetaDeprecatedLoadMatch struct {
	AccountId string `json:"account_id"`
	IndexName string `json:"index_name"`
}

// VectorizeBetaDeprecatedListMatch is the typed request payload for VectorizeBetaDeprecated.ListTyped.
type VectorizeBetaDeprecatedListMatch struct {
	AccountId string `json:"account_id"`
}

// VectorizeBetaDeprecatedCreateData is the typed request payload for VectorizeBetaDeprecated.CreateTyped.
type VectorizeBetaDeprecatedCreateData struct {
	AccountId string `json:"account_id"`
	IndexName *string `json:"index_name,omitempty"`
	Config any `json:"config"`
	Description *string `json:"description,omitempty"`
	Errors []any `json:"errors"`
	Ids *[]any `json:"ids,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Result *map[string]any `json:"result,omitempty"`
	Success bool `json:"success"`
}

// VectorizeBetaDeprecatedUpdateData is the typed request payload for VectorizeBetaDeprecated.UpdateTyped.
type VectorizeBetaDeprecatedUpdateData struct {
	AccountId string `json:"account_id"`
	IndexName string `json:"index_name"`
	Config *any `json:"config,omitempty"`
	Description *string `json:"description,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Ids *[]any `json:"ids,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// VectorizeBetaDeprecatedRemoveMatch is the typed request payload for VectorizeBetaDeprecated.RemoveTyped.
type VectorizeBetaDeprecatedRemoveMatch struct {
	AccountId string `json:"account_id"`
	IndexName string `json:"index_name"`
}

// WorkersAi is the typed data model for the workers_ai entity.
type WorkersAi struct {
}

// WorkersAiLoadMatch is the typed request payload for WorkersAi.LoadTyped.
type WorkersAiLoadMatch struct {
	AccountId string `json:"account_id"`
	Author *string `json:"author,omitempty"`
	Format *string `json:"format,omitempty"`
	HideExperimental *bool `json:"hide_experimental,omitempty"`
	IncludeDeprecated *bool `json:"include_deprecated,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	Source *float64 `json:"source,omitempty"`
	Task *string `json:"task,omitempty"`
	Model *string `json:"model,omitempty"`
}

// WorkersAiListMatch is the typed request payload for WorkersAi.ListTyped.
type WorkersAiListMatch struct {
	AccountId string `json:"account_id"`
}

// WorkersAiCreateData is the typed request payload for WorkersAi.CreateTyped.
type WorkersAiCreateData struct {
	AccountId string `json:"account_id"`
	ModelName *string `json:"model_name,omitempty"`
	Errors []any `json:"errors"`
	Extension string `json:"extension"`
	Input map[string]any `json:"input"`
	Messages []any `json:"messages"`
	MimeType string `json:"mimeType"`
	Model string `json:"model"`
	Options *map[string]any `json:"options,omitempty"`
	Output map[string]any `json:"output"`
	Result *map[string]any `json:"result,omitempty"`
	Success bool `json:"success"`
}

// WorkersAiFinetune is the typed data model for the workers_ai_finetune entity.
type WorkersAiFinetune struct {
}

// WorkersAiFinetuneLoadMatch is the typed request payload for WorkersAiFinetune.LoadTyped.
type WorkersAiFinetuneLoadMatch struct {
	AccountId string `json:"account_id"`
}

// WorkersAiFinetuneListMatch is the typed request payload for WorkersAiFinetune.ListTyped.
type WorkersAiFinetuneListMatch struct {
	AccountId string `json:"account_id"`
	Limit *float64 `json:"limit,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
}

// WorkersAiFinetuneCreateData is the typed request payload for WorkersAiFinetune.CreateTyped.
type WorkersAiFinetuneCreateData struct {
	AccountId string `json:"account_id"`
	FinetuneId *string `json:"finetune_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Model string `json:"model"`
	ModifiedAt string `json:"modified_at"`
	Name string `json:"name"`
	Public bool `json:"public"`
	Success bool `json:"success"`
}

// WorkersAiFinetuneRemoveMatch is the typed request payload for WorkersAiFinetune.RemoveTyped.
type WorkersAiFinetuneRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
