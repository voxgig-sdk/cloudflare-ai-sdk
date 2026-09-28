# frozen_string_literal: true

# Typed models for the CloudflareAi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Account entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Account = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Account#load.
#
# @!attribute [rw] id
#   @return [String]
AccountLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Account#update.
#
# @!attribute [rw] id
#   @return [String]
AccountUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# AiGateway entity data model.
#
# @!attribute [rw] byokAlias
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] options
#   @return [Hash]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
AiGateway = Struct.new(
  :byokAlias,
  :items,
  :limit,
  :metadata,
  :options,
  :provider,
  :query,
  keyword_init: true
)

# Request payload for AiGateway#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] byokAlias
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] options
#   @return [Hash]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
AiGatewayCreateData = Struct.new(
  :account_id,
  :byokAlias,
  :items,
  :limit,
  :metadata,
  :options,
  :provider,
  :query,
  keyword_init: true
)

# AiGatewayCustomDomain entity data model.
#
# @!attribute [rw] cname_target
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] hostname
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] minTLS
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [Integer]
#
# @!attribute [rw] ssl_hostname_id
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
AiGatewayCustomDomain = Struct.new(
  :cname_target,
  :created_at,
  :domain,
  :gateway_id,
  :hostname,
  :id,
  :minTLS,
  :modified_at,
  :ssl_hostname_id,
  :status,
  :zone_id,
  keyword_init: true
)

# Request payload for AiGatewayCustomDomain#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayCustomDomainLoadMatch = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  keyword_init: true
)

# Request payload for AiGatewayCustomDomain#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
AiGatewayCustomDomainListMatch = Struct.new(
  :account_id,
  :gateway_id,
  :page,
  :per_page,
  :search,
  :status,
  keyword_init: true
)

# Request payload for AiGatewayCustomDomain#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] cname_target
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [Integer]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] hostname
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] minTLS
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [Integer]
#
# @!attribute [rw] ssl_hostname_id
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
AiGatewayCustomDomainCreateData = Struct.new(
  :account_id,
  :gateway_id,
  :cname_target,
  :created_at,
  :domain,
  :hostname,
  :id,
  :minTLS,
  :modified_at,
  :ssl_hostname_id,
  :status,
  :zone_id,
  keyword_init: true
)

# Request payload for AiGatewayCustomDomain#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayCustomDomainRemoveMatch = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  keyword_init: true
)

# AiGatewayCustomProvider entity data model.
#
# @!attribute [rw] base_url
#   @return [String]
#
# @!attribute [rw] beta
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] curl_example
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] headers
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] js_example
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] slug
#   @return [String]
AiGatewayCustomProvider = Struct.new(
  :base_url,
  :beta,
  :created_at,
  :curl_example,
  :description,
  :enable,
  :headers,
  :id,
  :js_example,
  :link,
  :logo,
  :modified_at,
  :name,
  :position,
  :slug,
  keyword_init: true
)

# Request payload for AiGatewayCustomProvider#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayCustomProviderLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for AiGatewayCustomProvider#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] beta
#   @return [Boolean, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
AiGatewayCustomProviderListMatch = Struct.new(
  :account_id,
  :beta,
  :enable,
  :page,
  :per_page,
  :search,
  keyword_init: true
)

# Request payload for AiGatewayCustomProvider#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] base_url
#   @return [String]
#
# @!attribute [rw] beta
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] curl_example
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] headers
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] js_example
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] slug
#   @return [String]
AiGatewayCustomProviderCreateData = Struct.new(
  :account_id,
  :base_url,
  :beta,
  :created_at,
  :curl_example,
  :description,
  :enable,
  :headers,
  :id,
  :js_example,
  :link,
  :logo,
  :modified_at,
  :name,
  :position,
  :slug,
  keyword_init: true
)

# Request payload for AiGatewayCustomProvider#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] base_url
#   @return [String, nil]
#
# @!attribute [rw] beta
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] curl_example
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] headers
#   @return [String, nil]
#
# @!attribute [rw] js_example
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
AiGatewayCustomProviderUpdateData = Struct.new(
  :account_id,
  :id,
  :base_url,
  :beta,
  :created_at,
  :curl_example,
  :description,
  :enable,
  :headers,
  :js_example,
  :link,
  :logo,
  :modified_at,
  :name,
  :position,
  :slug,
  keyword_init: true
)

# Request payload for AiGatewayCustomProvider#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayCustomProviderRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# AiGatewayCustomProviderCost entity data model.
#
# @!attribute [rw] account_provider_id
#   @return [String]
#
# @!attribute [rw] changed_by
#   @return [String, nil]
#
# @!attribute [rw] cost_in
#   @return [Float, nil]
#
# @!attribute [rw] cost_out
#   @return [Float, nil]
#
# @!attribute [rw] cost_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] model_rule
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] token_pricing
#   @return [String, nil]
#
# @!attribute [rw] weight
#   @return [Integer, nil]
AiGatewayCustomProviderCost = Struct.new(
  :account_provider_id,
  :changed_by,
  :cost_in,
  :cost_out,
  :cost_type,
  :created_at,
  :enable,
  :id,
  :model,
  :model_rule,
  :modified_at,
  :token_pricing,
  :weight,
  keyword_init: true
)

# Request payload for AiGatewayCustomProviderCost#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayCustomProviderCostLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for AiGatewayCustomProviderCost#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account_provider_id
#   @return [String, nil]
#
# @!attribute [rw] cost_type
#   @return [String, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] model_rule
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
AiGatewayCustomProviderCostListMatch = Struct.new(
  :account_id,
  :account_provider_id,
  :cost_type,
  :enable,
  :model_rule,
  :page,
  :per_page,
  :search,
  keyword_init: true
)

# Request payload for AiGatewayCustomProviderCost#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account_provider_id
#   @return [String]
#
# @!attribute [rw] changed_by
#   @return [String, nil]
#
# @!attribute [rw] cost_in
#   @return [Float, nil]
#
# @!attribute [rw] cost_out
#   @return [Float, nil]
#
# @!attribute [rw] cost_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] model_rule
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] token_pricing
#   @return [String, nil]
#
# @!attribute [rw] weight
#   @return [Integer, nil]
AiGatewayCustomProviderCostCreateData = Struct.new(
  :account_id,
  :account_provider_id,
  :changed_by,
  :cost_in,
  :cost_out,
  :cost_type,
  :created_at,
  :enable,
  :id,
  :model,
  :model_rule,
  :modified_at,
  :token_pricing,
  :weight,
  keyword_init: true
)

# Request payload for AiGatewayCustomProviderCost#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] account_provider_id
#   @return [String, nil]
#
# @!attribute [rw] changed_by
#   @return [String, nil]
#
# @!attribute [rw] cost_in
#   @return [Float, nil]
#
# @!attribute [rw] cost_out
#   @return [Float, nil]
#
# @!attribute [rw] cost_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] model_rule
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String, nil]
#
# @!attribute [rw] token_pricing
#   @return [String, nil]
#
# @!attribute [rw] weight
#   @return [Integer, nil]
AiGatewayCustomProviderCostUpdateData = Struct.new(
  :account_id,
  :id,
  :account_provider_id,
  :changed_by,
  :cost_in,
  :cost_out,
  :cost_type,
  :created_at,
  :enable,
  :model,
  :model_rule,
  :modified_at,
  :token_pricing,
  :weight,
  keyword_init: true
)

# Request payload for AiGatewayCustomProviderCost#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayCustomProviderCostRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# AiGatewayDataset entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] enable
#   @return [Boolean]
#
# @!attribute [rw] filters
#   @return [Array]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
AiGatewayDataset = Struct.new(
  :created_at,
  :enable,
  :filters,
  :gateway_id,
  :id,
  :modified_at,
  :name,
  keyword_init: true
)

# Request payload for AiGatewayDataset#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayDatasetLoadMatch = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  keyword_init: true
)

# Request payload for AiGatewayDataset#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
AiGatewayDatasetListMatch = Struct.new(
  :account_id,
  :gateway_id,
  :enable,
  :name,
  :page,
  :per_page,
  :search,
  keyword_init: true
)

# Request payload for AiGatewayDataset#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] enable
#   @return [Boolean]
#
# @!attribute [rw] filters
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
AiGatewayDatasetCreateData = Struct.new(
  :account_id,
  :gateway_id,
  :created_at,
  :enable,
  :filters,
  :id,
  :modified_at,
  :name,
  keyword_init: true
)

# Request payload for AiGatewayDataset#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] modified_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
AiGatewayDatasetUpdateData = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  :created_at,
  :enable,
  :filters,
  :modified_at,
  :name,
  keyword_init: true
)

# Request payload for AiGatewayDataset#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayDatasetRemoveMatch = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  keyword_init: true
)

# AiGatewayDynamicRoute entity data model.
#
# @!attribute [rw] account_tag
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [String]
#
# @!attribute [rw] deployment
#   @return [Hash]
#
# @!attribute [rw] deployments
#   @return [Array]
#
# @!attribute [rw] elements
#   @return [Array]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_valid
#   @return [Boolean, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] order_by
#   @return [String]
#
# @!attribute [rw] order_by_direction
#   @return [String]
#
# @!attribute [rw] page
#   @return [Float]
#
# @!attribute [rw] per_page
#   @return [Float]
#
# @!attribute [rw] routes
#   @return [Array]
#
# @!attribute [rw] version
#   @return [Hash]
#
# @!attribute [rw] version_id
#   @return [String]
#
# @!attribute [rw] versions
#   @return [Array]
AiGatewayDynamicRoute = Struct.new(
  :account_tag,
  :active,
  :created_at,
  :data,
  :deployment,
  :deployments,
  :elements,
  :gateway_id,
  :id,
  :is_valid,
  :modified_at,
  :name,
  :order_by,
  :order_by_direction,
  :page,
  :per_page,
  :routes,
  :version,
  :version_id,
  :versions,
  keyword_init: true
)

# Request payload for AiGatewayDynamicRoute#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] route_id
#   @return [String, nil]
#
# @!attribute [rw] version_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
AiGatewayDynamicRouteLoadMatch = Struct.new(
  :account_id,
  :gateway_id,
  :page,
  :per_page,
  :route_id,
  :version_id,
  :id,
  keyword_init: true
)

# Request payload for AiGatewayDynamicRoute#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] route_id
#   @return [String, nil]
#
# @!attribute [rw] account_tag
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data
#   @return [String]
#
# @!attribute [rw] deployment
#   @return [Hash]
#
# @!attribute [rw] deployments
#   @return [Array]
#
# @!attribute [rw] elements
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_valid
#   @return [Boolean, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] order_by
#   @return [String]
#
# @!attribute [rw] order_by_direction
#   @return [String]
#
# @!attribute [rw] page
#   @return [Float]
#
# @!attribute [rw] per_page
#   @return [Float]
#
# @!attribute [rw] routes
#   @return [Array]
#
# @!attribute [rw] version
#   @return [Hash]
#
# @!attribute [rw] version_id
#   @return [String]
#
# @!attribute [rw] versions
#   @return [Array]
AiGatewayDynamicRouteCreateData = Struct.new(
  :account_id,
  :gateway_id,
  :route_id,
  :account_tag,
  :active,
  :created_at,
  :data,
  :deployment,
  :deployments,
  :elements,
  :id,
  :is_valid,
  :modified_at,
  :name,
  :order_by,
  :order_by_direction,
  :page,
  :per_page,
  :routes,
  :version,
  :version_id,
  :versions,
  keyword_init: true
)

# Request payload for AiGatewayDynamicRoute#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] account_tag
#   @return [String, nil]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] deployment
#   @return [Hash, nil]
#
# @!attribute [rw] deployments
#   @return [Array, nil]
#
# @!attribute [rw] elements
#   @return [Array, nil]
#
# @!attribute [rw] is_valid
#   @return [Boolean, nil]
#
# @!attribute [rw] modified_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_by_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] routes
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [Hash, nil]
#
# @!attribute [rw] version_id
#   @return [String, nil]
#
# @!attribute [rw] versions
#   @return [Array, nil]
AiGatewayDynamicRouteUpdateData = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  :account_tag,
  :active,
  :created_at,
  :data,
  :deployment,
  :deployments,
  :elements,
  :is_valid,
  :modified_at,
  :name,
  :order_by,
  :order_by_direction,
  :page,
  :per_page,
  :routes,
  :version,
  :version_id,
  :versions,
  keyword_init: true
)

# Request payload for AiGatewayDynamicRoute#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayDynamicRouteRemoveMatch = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  keyword_init: true
)

# AiGatewayEvaluation entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] dataset_ids
#   @return [Array]
#
# @!attribute [rw] datasets
#   @return [Array]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] enable
#   @return [Boolean]
#
# @!attribute [rw] evaluation_type_ids
#   @return [Array]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mandatory
#   @return [Boolean]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] processed
#   @return [Boolean]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] total_logs
#   @return [Float]
#
# @!attribute [rw] type
#   @return [String]
AiGatewayEvaluation = Struct.new(
  :created_at,
  :dataset_ids,
  :datasets,
  :description,
  :enable,
  :evaluation_type_ids,
  :gateway_id,
  :id,
  :mandatory,
  :modified_at,
  :name,
  :processed,
  :results,
  :total_logs,
  :type,
  keyword_init: true
)

# Request payload for AiGatewayEvaluation#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayEvaluationLoadMatch = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  keyword_init: true
)

# Request payload for AiGatewayEvaluation#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] processed
#   @return [Boolean, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_by_direction
#   @return [String, nil]
AiGatewayEvaluationListMatch = Struct.new(
  :account_id,
  :gateway_id,
  :name,
  :page,
  :per_page,
  :processed,
  :search,
  :order_by,
  :order_by_direction,
  keyword_init: true
)

# Request payload for AiGatewayEvaluation#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] dataset_ids
#   @return [Array]
#
# @!attribute [rw] datasets
#   @return [Array]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] enable
#   @return [Boolean]
#
# @!attribute [rw] evaluation_type_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mandatory
#   @return [Boolean]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] processed
#   @return [Boolean]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] total_logs
#   @return [Float]
#
# @!attribute [rw] type
#   @return [String]
AiGatewayEvaluationCreateData = Struct.new(
  :account_id,
  :gateway_id,
  :created_at,
  :dataset_ids,
  :datasets,
  :description,
  :enable,
  :evaluation_type_ids,
  :id,
  :mandatory,
  :modified_at,
  :name,
  :processed,
  :results,
  :total_logs,
  :type,
  keyword_init: true
)

# Request payload for AiGatewayEvaluation#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayEvaluationRemoveMatch = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  keyword_init: true
)

# AiGatewayGateway entity data model.
#
# @!attribute [rw] authentication
#   @return [Boolean, nil]
#
# @!attribute [rw] byok_only
#   @return [Boolean, nil]
#
# @!attribute [rw] cache_invalidate_on_update
#   @return [Boolean]
#
# @!attribute [rw] cache_ttl
#   @return [Integer]
#
# @!attribute [rw] collect_logs
#   @return [Boolean]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] dlp
#   @return [Object, nil]
#
# @!attribute [rw] guardrails
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_default
#   @return [Boolean, nil]
#
# @!attribute [rw] log_classification
#   @return [Boolean, nil]
#
# @!attribute [rw] log_management
#   @return [Integer, nil]
#
# @!attribute [rw] log_management_strategy
#   @return [String, nil]
#
# @!attribute [rw] logpush
#   @return [Boolean, nil]
#
# @!attribute [rw] logpush_public_key
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] otel
#   @return [Array, nil]
#
# @!attribute [rw] rate_limiting_interval
#   @return [Integer]
#
# @!attribute [rw] rate_limiting_limit
#   @return [Integer]
#
# @!attribute [rw] rate_limiting_technique
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] retry_backoff
#   @return [String, nil]
#
# @!attribute [rw] retry_delay
#   @return [Integer, nil]
#
# @!attribute [rw] retry_max_attempts
#   @return [Integer, nil]
#
# @!attribute [rw] spend_limits
#   @return [Hash, nil]
#
# @!attribute [rw] store_id
#   @return [String, nil]
#
# @!attribute [rw] stripe
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] workers_ai_billing_mode
#   @return [String, nil]
#
# @!attribute [rw] zdr
#   @return [Boolean, nil]
AiGatewayGateway = Struct.new(
  :authentication,
  :byok_only,
  :cache_invalidate_on_update,
  :cache_ttl,
  :collect_logs,
  :created_at,
  :dlp,
  :guardrails,
  :id,
  :is_default,
  :log_classification,
  :log_management,
  :log_management_strategy,
  :logpush,
  :logpush_public_key,
  :modified_at,
  :otel,
  :rate_limiting_interval,
  :rate_limiting_limit,
  :rate_limiting_technique,
  :result,
  :retry_backoff,
  :retry_delay,
  :retry_max_attempts,
  :spend_limits,
  :store_id,
  :stripe,
  :success,
  :workers_ai_billing_mode,
  :zdr,
  keyword_init: true
)

# Request payload for AiGatewayGateway#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
AiGatewayGatewayLoadMatch = Struct.new(
  :account_id,
  :gateway_id,
  :provider,
  :id,
  keyword_init: true
)

# Request payload for AiGatewayGateway#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
AiGatewayGatewayListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  :search,
  keyword_init: true
)

# Request payload for AiGatewayGateway#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] authentication
#   @return [Boolean, nil]
#
# @!attribute [rw] byok_only
#   @return [Boolean, nil]
#
# @!attribute [rw] cache_invalidate_on_update
#   @return [Boolean]
#
# @!attribute [rw] cache_ttl
#   @return [Integer]
#
# @!attribute [rw] collect_logs
#   @return [Boolean]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] dlp
#   @return [Object, nil]
#
# @!attribute [rw] guardrails
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_default
#   @return [Boolean, nil]
#
# @!attribute [rw] log_classification
#   @return [Boolean, nil]
#
# @!attribute [rw] log_management
#   @return [Integer, nil]
#
# @!attribute [rw] log_management_strategy
#   @return [String, nil]
#
# @!attribute [rw] logpush
#   @return [Boolean, nil]
#
# @!attribute [rw] logpush_public_key
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] otel
#   @return [Array, nil]
#
# @!attribute [rw] rate_limiting_interval
#   @return [Integer]
#
# @!attribute [rw] rate_limiting_limit
#   @return [Integer]
#
# @!attribute [rw] rate_limiting_technique
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] retry_backoff
#   @return [String, nil]
#
# @!attribute [rw] retry_delay
#   @return [Integer, nil]
#
# @!attribute [rw] retry_max_attempts
#   @return [Integer, nil]
#
# @!attribute [rw] spend_limits
#   @return [Hash, nil]
#
# @!attribute [rw] store_id
#   @return [String, nil]
#
# @!attribute [rw] stripe
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] workers_ai_billing_mode
#   @return [String, nil]
#
# @!attribute [rw] zdr
#   @return [Boolean, nil]
AiGatewayGatewayCreateData = Struct.new(
  :account_id,
  :authentication,
  :byok_only,
  :cache_invalidate_on_update,
  :cache_ttl,
  :collect_logs,
  :created_at,
  :dlp,
  :guardrails,
  :id,
  :is_default,
  :log_classification,
  :log_management,
  :log_management_strategy,
  :logpush,
  :logpush_public_key,
  :modified_at,
  :otel,
  :rate_limiting_interval,
  :rate_limiting_limit,
  :rate_limiting_technique,
  :result,
  :retry_backoff,
  :retry_delay,
  :retry_max_attempts,
  :spend_limits,
  :store_id,
  :stripe,
  :success,
  :workers_ai_billing_mode,
  :zdr,
  keyword_init: true
)

# Request payload for AiGatewayGateway#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] authentication
#   @return [Boolean, nil]
#
# @!attribute [rw] byok_only
#   @return [Boolean, nil]
#
# @!attribute [rw] cache_invalidate_on_update
#   @return [Boolean, nil]
#
# @!attribute [rw] cache_ttl
#   @return [Integer, nil]
#
# @!attribute [rw] collect_logs
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] dlp
#   @return [Object, nil]
#
# @!attribute [rw] guardrails
#   @return [Hash, nil]
#
# @!attribute [rw] is_default
#   @return [Boolean, nil]
#
# @!attribute [rw] log_classification
#   @return [Boolean, nil]
#
# @!attribute [rw] log_management
#   @return [Integer, nil]
#
# @!attribute [rw] log_management_strategy
#   @return [String, nil]
#
# @!attribute [rw] logpush
#   @return [Boolean, nil]
#
# @!attribute [rw] logpush_public_key
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String, nil]
#
# @!attribute [rw] otel
#   @return [Array, nil]
#
# @!attribute [rw] rate_limiting_interval
#   @return [Integer, nil]
#
# @!attribute [rw] rate_limiting_limit
#   @return [Integer, nil]
#
# @!attribute [rw] rate_limiting_technique
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] retry_backoff
#   @return [String, nil]
#
# @!attribute [rw] retry_delay
#   @return [Integer, nil]
#
# @!attribute [rw] retry_max_attempts
#   @return [Integer, nil]
#
# @!attribute [rw] spend_limits
#   @return [Hash, nil]
#
# @!attribute [rw] store_id
#   @return [String, nil]
#
# @!attribute [rw] stripe
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] workers_ai_billing_mode
#   @return [String, nil]
#
# @!attribute [rw] zdr
#   @return [Boolean, nil]
AiGatewayGatewayUpdateData = Struct.new(
  :account_id,
  :id,
  :authentication,
  :byok_only,
  :cache_invalidate_on_update,
  :cache_ttl,
  :collect_logs,
  :created_at,
  :dlp,
  :guardrails,
  :is_default,
  :log_classification,
  :log_management,
  :log_management_strategy,
  :logpush,
  :logpush_public_key,
  :modified_at,
  :otel,
  :rate_limiting_interval,
  :rate_limiting_limit,
  :rate_limiting_technique,
  :result,
  :retry_backoff,
  :retry_delay,
  :retry_max_attempts,
  :spend_limits,
  :store_id,
  :stripe,
  :success,
  :workers_ai_billing_mode,
  :zdr,
  keyword_init: true
)

# Request payload for AiGatewayGateway#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayGatewayRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# AiGatewayLog entity data model.
#
# @!attribute [rw] cached
#   @return [Boolean]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] custom_cost
#   @return [Boolean, nil]
#
# @!attribute [rw] duration
#   @return [Integer]
#
# @!attribute [rw] feedback
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] model_type
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] request_content_type
#   @return [String, nil]
#
# @!attribute [rw] request_head
#   @return [String, nil]
#
# @!attribute [rw] request_head_complete
#   @return [Boolean, nil]
#
# @!attribute [rw] request_size
#   @return [Integer, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] response_content_type
#   @return [String, nil]
#
# @!attribute [rw] response_head
#   @return [String, nil]
#
# @!attribute [rw] response_head_complete
#   @return [Boolean, nil]
#
# @!attribute [rw] response_size
#   @return [Integer, nil]
#
# @!attribute [rw] score
#   @return [Float, nil]
#
# @!attribute [rw] status_code
#   @return [Integer, nil]
#
# @!attribute [rw] step
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tokens_in
#   @return [Integer]
#
# @!attribute [rw] tokens_out
#   @return [Integer]
AiGatewayLog = Struct.new(
  :cached,
  :cost,
  :created_at,
  :custom_cost,
  :duration,
  :feedback,
  :id,
  :metadata,
  :model,
  :model_type,
  :path,
  :provider,
  :request_content_type,
  :request_head,
  :request_head_complete,
  :request_size,
  :request_type,
  :response_content_type,
  :response_head,
  :response_head_complete,
  :response_size,
  :score,
  :status_code,
  :step,
  :success,
  :tokens_in,
  :tokens_out,
  keyword_init: true
)

# Request payload for AiGatewayLog#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] log_id
#   @return [String, nil]
AiGatewayLogLoadMatch = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  :log_id,
  keyword_init: true
)

# Request payload for AiGatewayLog#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] cached
#   @return [Boolean, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] feedback
#   @return [Object, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] max_cost
#   @return [Float, nil]
#
# @!attribute [rw] max_duration
#   @return [Float, nil]
#
# @!attribute [rw] max_tokens_in
#   @return [Float, nil]
#
# @!attribute [rw] max_tokens_out
#   @return [Float, nil]
#
# @!attribute [rw] max_total_token
#   @return [Float, nil]
#
# @!attribute [rw] meta_info
#   @return [Boolean, nil]
#
# @!attribute [rw] min_cost
#   @return [Float, nil]
#
# @!attribute [rw] min_duration
#   @return [Float, nil]
#
# @!attribute [rw] min_tokens_in
#   @return [Float, nil]
#
# @!attribute [rw] min_tokens_out
#   @return [Float, nil]
#
# @!attribute [rw] min_total_token
#   @return [Float, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] model_type
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_by_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] request_content_type
#   @return [String, nil]
#
# @!attribute [rw] response_content_type
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
AiGatewayLogListMatch = Struct.new(
  :account_id,
  :gateway_id,
  :cached,
  :direction,
  :end_date,
  :feedback,
  :filter,
  :max_cost,
  :max_duration,
  :max_tokens_in,
  :max_tokens_out,
  :max_total_token,
  :meta_info,
  :min_cost,
  :min_duration,
  :min_tokens_in,
  :min_tokens_out,
  :min_total_token,
  :model,
  :model_type,
  :order_by,
  :order_by_direction,
  :page,
  :per_page,
  :provider,
  :request_content_type,
  :response_content_type,
  :search,
  :start_date,
  :success,
  keyword_init: true
)

# Request payload for AiGatewayLog#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] cached
#   @return [Boolean, nil]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_cost
#   @return [Boolean, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] feedback
#   @return [Float, nil]
#
# @!attribute [rw] metadata
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] model_type
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] request_content_type
#   @return [String, nil]
#
# @!attribute [rw] request_head
#   @return [String, nil]
#
# @!attribute [rw] request_head_complete
#   @return [Boolean, nil]
#
# @!attribute [rw] request_size
#   @return [Integer, nil]
#
# @!attribute [rw] request_type
#   @return [String, nil]
#
# @!attribute [rw] response_content_type
#   @return [String, nil]
#
# @!attribute [rw] response_head
#   @return [String, nil]
#
# @!attribute [rw] response_head_complete
#   @return [Boolean, nil]
#
# @!attribute [rw] response_size
#   @return [Integer, nil]
#
# @!attribute [rw] score
#   @return [Float, nil]
#
# @!attribute [rw] status_code
#   @return [Integer, nil]
#
# @!attribute [rw] step
#   @return [Integer, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tokens_in
#   @return [Integer, nil]
#
# @!attribute [rw] tokens_out
#   @return [Integer, nil]
AiGatewayLogUpdateData = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  :cached,
  :cost,
  :created_at,
  :custom_cost,
  :duration,
  :feedback,
  :metadata,
  :model,
  :model_type,
  :path,
  :provider,
  :request_content_type,
  :request_head,
  :request_head_complete,
  :request_size,
  :request_type,
  :response_content_type,
  :response_head,
  :response_head_complete,
  :response_size,
  :score,
  :status_code,
  :step,
  :success,
  :tokens_in,
  :tokens_out,
  keyword_init: true
)

# Request payload for AiGatewayLog#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_by_direction
#   @return [String, nil]
AiGatewayLogRemoveMatch = Struct.new(
  :account_id,
  :gateway_id,
  :filter,
  :limit,
  :order_by,
  :order_by_direction,
  keyword_init: true
)

# AiGatewayProviderConfig entity data model.
#
# @!attribute [rw] alias
#   @return [String]
#
# @!attribute [rw] default_config
#   @return [Boolean]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] provider_slug
#   @return [String]
#
# @!attribute [rw] rate_limit
#   @return [Float, nil]
#
# @!attribute [rw] rate_limit_period
#   @return [Float, nil]
#
# @!attribute [rw] secret
#   @return [String, nil]
#
# @!attribute [rw] secret_id
#   @return [String]
#
# @!attribute [rw] secret_preview
#   @return [String]
AiGatewayProviderConfig = Struct.new(
  :alias,
  :default_config,
  :gateway_id,
  :id,
  :modified_at,
  :provider_slug,
  :rate_limit,
  :rate_limit_period,
  :secret,
  :secret_id,
  :secret_preview,
  keyword_init: true
)

# Request payload for AiGatewayProviderConfig#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
AiGatewayProviderConfigListMatch = Struct.new(
  :account_id,
  :gateway_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for AiGatewayProviderConfig#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] alias
#   @return [String]
#
# @!attribute [rw] default_config
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] provider_slug
#   @return [String]
#
# @!attribute [rw] rate_limit
#   @return [Float, nil]
#
# @!attribute [rw] rate_limit_period
#   @return [Float, nil]
#
# @!attribute [rw] secret
#   @return [String, nil]
#
# @!attribute [rw] secret_id
#   @return [String]
#
# @!attribute [rw] secret_preview
#   @return [String]
AiGatewayProviderConfigCreateData = Struct.new(
  :account_id,
  :gateway_id,
  :alias,
  :default_config,
  :id,
  :modified_at,
  :provider_slug,
  :rate_limit,
  :rate_limit_period,
  :secret,
  :secret_id,
  :secret_preview,
  keyword_init: true
)

# Request payload for AiGatewayProviderConfig#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] alias
#   @return [String, nil]
#
# @!attribute [rw] default_config
#   @return [Boolean, nil]
#
# @!attribute [rw] modified_at
#   @return [String, nil]
#
# @!attribute [rw] provider_slug
#   @return [String, nil]
#
# @!attribute [rw] rate_limit
#   @return [Float, nil]
#
# @!attribute [rw] rate_limit_period
#   @return [Float, nil]
#
# @!attribute [rw] secret
#   @return [String, nil]
#
# @!attribute [rw] secret_id
#   @return [String, nil]
#
# @!attribute [rw] secret_preview
#   @return [String, nil]
AiGatewayProviderConfigUpdateData = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  :alias,
  :default_config,
  :modified_at,
  :provider_slug,
  :rate_limit,
  :rate_limit_period,
  :secret,
  :secret_id,
  :secret_preview,
  keyword_init: true
)

# Request payload for AiGatewayProviderConfig#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] gateway_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiGatewayProviderConfigRemoveMatch = Struct.new(
  :account_id,
  :gateway_id,
  :id,
  keyword_init: true
)

# AiSearchAccountSearch entity data model.
#
# @!attribute [rw] ai_search_options
#   @return [Hash]
#
# @!attribute [rw] choices
#   @return [Array]
#
# @!attribute [rw] chunks
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
#
# @!attribute [rw] query_kind
#   @return [String]
#
# @!attribute [rw] search_query
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
AiSearchAccountSearch = Struct.new(
  :ai_search_options,
  :choices,
  :chunks,
  :errors,
  :id,
  :messages,
  :model,
  :object,
  :query,
  :query_kind,
  :search_query,
  :stream,
  keyword_init: true
)

# Request payload for AiSearchAccountSearch#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] ai_search_options
#   @return [Hash]
#
# @!attribute [rw] choices
#   @return [Array]
#
# @!attribute [rw] chunks
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
#
# @!attribute [rw] query_kind
#   @return [String]
#
# @!attribute [rw] search_query
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
AiSearchAccountSearchCreateData = Struct.new(
  :account_id,
  :name,
  :namespace_id,
  :ai_search_options,
  :choices,
  :chunks,
  :errors,
  :id,
  :messages,
  :model,
  :object,
  :query,
  :query_kind,
  :search_query,
  :stream,
  keyword_init: true
)

# AiSearchInstance entity data model.
#
# @!attribute [rw] ai_gateway_id
#   @return [String, nil]
#
# @!attribute [rw] ai_search_model
#   @return [String, nil]
#
# @!attribute [rw] ai_search_options
#   @return [Hash, nil]
#
# @!attribute [rw] cache
#   @return [Boolean, nil]
#
# @!attribute [rw] cache_threshold
#   @return [String, nil]
#
# @!attribute [rw] cache_ttl
#   @return [Object, nil]
#
# @!attribute [rw] choices
#   @return [Array]
#
# @!attribute [rw] chunk
#   @return [Boolean, nil]
#
# @!attribute [rw] chunk_overlap
#   @return [Integer, nil]
#
# @!attribute [rw] chunk_size
#   @return [Integer, nil]
#
# @!attribute [rw] chunks
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] custom_metadata
#   @return [Array, nil]
#
# @!attribute [rw] degraded
#   @return [Boolean, nil]
#
# @!attribute [rw] embedding_model
#   @return [String, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] engine
#   @return [Hash, nil]
#
# @!attribute [rw] engine_version
#   @return [Float, nil]
#
# @!attribute [rw] error
#   @return [Integer, nil]
#
# @!attribute [rw] file_embed_errors
#   @return [Hash, nil]
#
# @!attribute [rw] fusion_method
#   @return [String, nil]
#
# @!attribute [rw] hybrid_search_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] index_method
#   @return [Hash]
#
# @!attribute [rw] index_source_errors
#   @return [Hash, nil]
#
# @!attribute [rw] indexing_options
#   @return [Hash, nil]
#
# @!attribute [rw] last_activity
#   @return [String, nil]
#
# @!attribute [rw] max_num_results
#   @return [Integer, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] modified_by
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] outdated
#   @return [Integer, nil]
#
# @!attribute [rw] paused
#   @return [Boolean, nil]
#
# @!attribute [rw] public_endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] public_endpoint_params
#   @return [Hash, nil]
#
# @!attribute [rw] queued
#   @return [Integer, nil]
#
# @!attribute [rw] reranking
#   @return [Boolean, nil]
#
# @!attribute [rw] reranking_model
#   @return [String, nil]
#
# @!attribute [rw] retrieval_options
#   @return [Hash, nil]
#
# @!attribute [rw] rewrite_model
#   @return [String, nil]
#
# @!attribute [rw] rewrite_query
#   @return [Boolean, nil]
#
# @!attribute [rw] running
#   @return [Integer, nil]
#
# @!attribute [rw] score_threshold
#   @return [Float, nil]
#
# @!attribute [rw] skipped
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] source_params
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] summarization
#   @return [Boolean, nil]
#
# @!attribute [rw] summarization_model
#   @return [String, nil]
#
# @!attribute [rw] sync_interval
#   @return [Object, nil]
#
# @!attribute [rw] system_prompt_ai_search
#   @return [String, nil]
#
# @!attribute [rw] system_prompt_index_summarization
#   @return [String, nil]
#
# @!attribute [rw] system_prompt_rewrite_query
#   @return [String, nil]
#
# @!attribute [rw] token_id
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
AiSearchInstance = Struct.new(
  :ai_gateway_id,
  :ai_search_model,
  :ai_search_options,
  :cache,
  :cache_threshold,
  :cache_ttl,
  :choices,
  :chunk,
  :chunk_overlap,
  :chunk_size,
  :chunks,
  :completed,
  :created_at,
  :created_by,
  :custom_metadata,
  :degraded,
  :embedding_model,
  :enable,
  :engine,
  :engine_version,
  :error,
  :file_embed_errors,
  :fusion_method,
  :hybrid_search_enabled,
  :id,
  :index_method,
  :index_source_errors,
  :indexing_options,
  :last_activity,
  :max_num_results,
  :messages,
  :metadata,
  :model,
  :modified_at,
  :modified_by,
  :namespace,
  :object,
  :outdated,
  :paused,
  :public_endpoint_id,
  :public_endpoint_params,
  :queued,
  :reranking,
  :reranking_model,
  :retrieval_options,
  :rewrite_model,
  :rewrite_query,
  :running,
  :score_threshold,
  :skipped,
  :source,
  :source_params,
  :status,
  :stream,
  :summarization,
  :summarization_model,
  :sync_interval,
  :system_prompt_ai_search,
  :system_prompt_index_summarization,
  :system_prompt_rewrite_query,
  :token_id,
  :type,
  keyword_init: true
)

# Request payload for AiSearchInstance#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] instance_id
#   @return [String, nil]
AiSearchInstanceLoadMatch = Struct.new(
  :account_id,
  :id,
  :namespace_id,
  :instance_id,
  keyword_init: true
)

# Request payload for AiSearchInstance#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] hostname
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] order_by_direction
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
AiSearchInstanceListMatch = Struct.new(
  :account_id,
  :name,
  :hostname,
  :namespace,
  :order_by,
  :order_by_direction,
  :page,
  :per_page,
  :search,
  keyword_init: true
)

# Request payload for AiSearchInstance#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] ai_gateway_id
#   @return [String, nil]
#
# @!attribute [rw] ai_search_model
#   @return [String, nil]
#
# @!attribute [rw] ai_search_options
#   @return [Hash, nil]
#
# @!attribute [rw] cache
#   @return [Boolean, nil]
#
# @!attribute [rw] cache_threshold
#   @return [String, nil]
#
# @!attribute [rw] cache_ttl
#   @return [Object, nil]
#
# @!attribute [rw] choices
#   @return [Array]
#
# @!attribute [rw] chunk
#   @return [Boolean, nil]
#
# @!attribute [rw] chunk_overlap
#   @return [Integer, nil]
#
# @!attribute [rw] chunk_size
#   @return [Integer, nil]
#
# @!attribute [rw] chunks
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] custom_metadata
#   @return [Array, nil]
#
# @!attribute [rw] degraded
#   @return [Boolean, nil]
#
# @!attribute [rw] embedding_model
#   @return [String, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] engine
#   @return [Hash, nil]
#
# @!attribute [rw] engine_version
#   @return [Float, nil]
#
# @!attribute [rw] error
#   @return [Integer, nil]
#
# @!attribute [rw] file_embed_errors
#   @return [Hash, nil]
#
# @!attribute [rw] fusion_method
#   @return [String, nil]
#
# @!attribute [rw] hybrid_search_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] index_method
#   @return [Hash]
#
# @!attribute [rw] index_source_errors
#   @return [Hash, nil]
#
# @!attribute [rw] indexing_options
#   @return [Hash, nil]
#
# @!attribute [rw] last_activity
#   @return [String, nil]
#
# @!attribute [rw] max_num_results
#   @return [Integer, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] modified_by
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] outdated
#   @return [Integer, nil]
#
# @!attribute [rw] paused
#   @return [Boolean, nil]
#
# @!attribute [rw] public_endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] public_endpoint_params
#   @return [Hash, nil]
#
# @!attribute [rw] queued
#   @return [Integer, nil]
#
# @!attribute [rw] reranking
#   @return [Boolean, nil]
#
# @!attribute [rw] reranking_model
#   @return [String, nil]
#
# @!attribute [rw] retrieval_options
#   @return [Hash, nil]
#
# @!attribute [rw] rewrite_model
#   @return [String, nil]
#
# @!attribute [rw] rewrite_query
#   @return [Boolean, nil]
#
# @!attribute [rw] running
#   @return [Integer, nil]
#
# @!attribute [rw] score_threshold
#   @return [Float, nil]
#
# @!attribute [rw] skipped
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] source_params
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] summarization
#   @return [Boolean, nil]
#
# @!attribute [rw] summarization_model
#   @return [String, nil]
#
# @!attribute [rw] sync_interval
#   @return [Object, nil]
#
# @!attribute [rw] system_prompt_ai_search
#   @return [String, nil]
#
# @!attribute [rw] system_prompt_index_summarization
#   @return [String, nil]
#
# @!attribute [rw] system_prompt_rewrite_query
#   @return [String, nil]
#
# @!attribute [rw] token_id
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
AiSearchInstanceCreateData = Struct.new(
  :account_id,
  :instance_id,
  :namespace_id,
  :name,
  :ai_gateway_id,
  :ai_search_model,
  :ai_search_options,
  :cache,
  :cache_threshold,
  :cache_ttl,
  :choices,
  :chunk,
  :chunk_overlap,
  :chunk_size,
  :chunks,
  :completed,
  :created_at,
  :created_by,
  :custom_metadata,
  :degraded,
  :embedding_model,
  :enable,
  :engine,
  :engine_version,
  :error,
  :file_embed_errors,
  :fusion_method,
  :hybrid_search_enabled,
  :id,
  :index_method,
  :index_source_errors,
  :indexing_options,
  :last_activity,
  :max_num_results,
  :messages,
  :metadata,
  :model,
  :modified_at,
  :modified_by,
  :namespace,
  :object,
  :outdated,
  :paused,
  :public_endpoint_id,
  :public_endpoint_params,
  :queued,
  :reranking,
  :reranking_model,
  :retrieval_options,
  :rewrite_model,
  :rewrite_query,
  :running,
  :score_threshold,
  :skipped,
  :source,
  :source_params,
  :status,
  :stream,
  :summarization,
  :summarization_model,
  :sync_interval,
  :system_prompt_ai_search,
  :system_prompt_index_summarization,
  :system_prompt_rewrite_query,
  :token_id,
  :type,
  keyword_init: true
)

# Request payload for AiSearchInstance#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] ai_gateway_id
#   @return [String, nil]
#
# @!attribute [rw] ai_search_model
#   @return [String, nil]
#
# @!attribute [rw] ai_search_options
#   @return [Hash, nil]
#
# @!attribute [rw] cache
#   @return [Boolean, nil]
#
# @!attribute [rw] cache_threshold
#   @return [String, nil]
#
# @!attribute [rw] cache_ttl
#   @return [Object, nil]
#
# @!attribute [rw] choices
#   @return [Array, nil]
#
# @!attribute [rw] chunk
#   @return [Boolean, nil]
#
# @!attribute [rw] chunk_overlap
#   @return [Integer, nil]
#
# @!attribute [rw] chunk_size
#   @return [Integer, nil]
#
# @!attribute [rw] chunks
#   @return [Array, nil]
#
# @!attribute [rw] completed
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] custom_metadata
#   @return [Array, nil]
#
# @!attribute [rw] degraded
#   @return [Boolean, nil]
#
# @!attribute [rw] embedding_model
#   @return [String, nil]
#
# @!attribute [rw] enable
#   @return [Boolean, nil]
#
# @!attribute [rw] engine
#   @return [Hash, nil]
#
# @!attribute [rw] engine_version
#   @return [Float, nil]
#
# @!attribute [rw] error
#   @return [Integer, nil]
#
# @!attribute [rw] file_embed_errors
#   @return [Hash, nil]
#
# @!attribute [rw] fusion_method
#   @return [String, nil]
#
# @!attribute [rw] hybrid_search_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] index_method
#   @return [Hash, nil]
#
# @!attribute [rw] index_source_errors
#   @return [Hash, nil]
#
# @!attribute [rw] indexing_options
#   @return [Hash, nil]
#
# @!attribute [rw] last_activity
#   @return [String, nil]
#
# @!attribute [rw] max_num_results
#   @return [Integer, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] modified_at
#   @return [String, nil]
#
# @!attribute [rw] modified_by
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] outdated
#   @return [Integer, nil]
#
# @!attribute [rw] paused
#   @return [Boolean, nil]
#
# @!attribute [rw] public_endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] public_endpoint_params
#   @return [Hash, nil]
#
# @!attribute [rw] queued
#   @return [Integer, nil]
#
# @!attribute [rw] reranking
#   @return [Boolean, nil]
#
# @!attribute [rw] reranking_model
#   @return [String, nil]
#
# @!attribute [rw] retrieval_options
#   @return [Hash, nil]
#
# @!attribute [rw] rewrite_model
#   @return [String, nil]
#
# @!attribute [rw] rewrite_query
#   @return [Boolean, nil]
#
# @!attribute [rw] running
#   @return [Integer, nil]
#
# @!attribute [rw] score_threshold
#   @return [Float, nil]
#
# @!attribute [rw] skipped
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] source_params
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] summarization
#   @return [Boolean, nil]
#
# @!attribute [rw] summarization_model
#   @return [String, nil]
#
# @!attribute [rw] sync_interval
#   @return [Object, nil]
#
# @!attribute [rw] system_prompt_ai_search
#   @return [String, nil]
#
# @!attribute [rw] system_prompt_index_summarization
#   @return [String, nil]
#
# @!attribute [rw] system_prompt_rewrite_query
#   @return [String, nil]
#
# @!attribute [rw] token_id
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
AiSearchInstanceUpdateData = Struct.new(
  :account_id,
  :id,
  :namespace_id,
  :ai_gateway_id,
  :ai_search_model,
  :ai_search_options,
  :cache,
  :cache_threshold,
  :cache_ttl,
  :choices,
  :chunk,
  :chunk_overlap,
  :chunk_size,
  :chunks,
  :completed,
  :created_at,
  :created_by,
  :custom_metadata,
  :degraded,
  :embedding_model,
  :enable,
  :engine,
  :engine_version,
  :error,
  :file_embed_errors,
  :fusion_method,
  :hybrid_search_enabled,
  :index_method,
  :index_source_errors,
  :indexing_options,
  :last_activity,
  :max_num_results,
  :messages,
  :metadata,
  :model,
  :modified_at,
  :modified_by,
  :namespace,
  :object,
  :outdated,
  :paused,
  :public_endpoint_id,
  :public_endpoint_params,
  :queued,
  :reranking,
  :reranking_model,
  :retrieval_options,
  :rewrite_model,
  :rewrite_query,
  :running,
  :score_threshold,
  :skipped,
  :source,
  :source_params,
  :status,
  :stream,
  :summarization,
  :summarization_model,
  :sync_interval,
  :system_prompt_ai_search,
  :system_prompt_index_summarization,
  :system_prompt_rewrite_query,
  :token_id,
  :type,
  keyword_init: true
)

# Request payload for AiSearchInstance#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
AiSearchInstanceRemoveMatch = Struct.new(
  :account_id,
  :id,
  :namespace_id,
  keyword_init: true
)

# AiSearchInstancesItem entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] checksum
#   @return [String]
#
# @!attribute [rw] chunkCount
#   @return [Integer]
#
# @!attribute [rw] chunks_count
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] end_byte
#   @return [Float, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] errorType
#   @return [String]
#
# @!attribute [rw] fileKey
#   @return [String]
#
# @!attribute [rw] file_size
#   @return [Float]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] item
#   @return [Hash]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] last_seen_at
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] namespace
#   @return [String]
#
# @!attribute [rw] next_action
#   @return [String]
#
# @!attribute [rw] processingTimeMs
#   @return [Integer]
#
# @!attribute [rw] source_id
#   @return [String]
#
# @!attribute [rw] start_byte
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] timestamp
#   @return [String]
#
# @!attribute [rw] wait_for_completion
#   @return [Boolean, nil]
#
# @!attribute [rw] warnings
#   @return [Array, nil]
AiSearchInstancesItem = Struct.new(
  :action,
  :checksum,
  :chunkCount,
  :chunks_count,
  :created_at,
  :end_byte,
  :error,
  :errorType,
  :fileKey,
  :file_size,
  :id,
  :item,
  :key,
  :last_seen_at,
  :message,
  :metadata,
  :namespace,
  :next_action,
  :processingTimeMs,
  :source_id,
  :start_byte,
  :status,
  :text,
  :timestamp,
  :wait_for_completion,
  :warnings,
  keyword_init: true
)

# Request payload for AiSearchInstancesItem#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] instance_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] item_id
#   @return [String, nil]
AiSearchInstancesItemLoadMatch = Struct.new(
  :account_id,
  :id,
  :instance_id,
  :namespace_id,
  :item_id,
  keyword_init: true
)

# Request payload for AiSearchInstancesItem#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] item_id
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] metadata_filter
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
AiSearchInstancesItemListMatch = Struct.new(
  :account_id,
  :instance_id,
  :namespace_id,
  :item_id,
  :key,
  :metadata_filter,
  :page,
  :per_page,
  :search,
  :sort_by,
  :source,
  :status,
  :cursor,
  :limit,
  :offset,
  keyword_init: true
)

# Request payload for AiSearchInstancesItem#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] checksum
#   @return [String]
#
# @!attribute [rw] chunkCount
#   @return [Integer]
#
# @!attribute [rw] chunks_count
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] end_byte
#   @return [Float, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] errorType
#   @return [String]
#
# @!attribute [rw] fileKey
#   @return [String]
#
# @!attribute [rw] file_size
#   @return [Float]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] item
#   @return [Hash]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] last_seen_at
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] namespace
#   @return [String]
#
# @!attribute [rw] next_action
#   @return [String]
#
# @!attribute [rw] processingTimeMs
#   @return [Integer]
#
# @!attribute [rw] source_id
#   @return [String]
#
# @!attribute [rw] start_byte
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] timestamp
#   @return [String]
#
# @!attribute [rw] wait_for_completion
#   @return [Boolean, nil]
#
# @!attribute [rw] warnings
#   @return [Array, nil]
AiSearchInstancesItemCreateData = Struct.new(
  :account_id,
  :instance_id,
  :namespace_id,
  :action,
  :checksum,
  :chunkCount,
  :chunks_count,
  :created_at,
  :end_byte,
  :error,
  :errorType,
  :fileKey,
  :file_size,
  :id,
  :item,
  :key,
  :last_seen_at,
  :message,
  :metadata,
  :namespace,
  :next_action,
  :processingTimeMs,
  :source_id,
  :start_byte,
  :status,
  :text,
  :timestamp,
  :wait_for_completion,
  :warnings,
  keyword_init: true
)

# Request payload for AiSearchInstancesItem#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] checksum
#   @return [String, nil]
#
# @!attribute [rw] chunkCount
#   @return [Integer, nil]
#
# @!attribute [rw] chunks_count
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] end_byte
#   @return [Float, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] errorType
#   @return [String, nil]
#
# @!attribute [rw] fileKey
#   @return [String, nil]
#
# @!attribute [rw] file_size
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] item
#   @return [Hash, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] last_seen_at
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] next_action
#   @return [String, nil]
#
# @!attribute [rw] processingTimeMs
#   @return [Integer, nil]
#
# @!attribute [rw] source_id
#   @return [String, nil]
#
# @!attribute [rw] start_byte
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] wait_for_completion
#   @return [Boolean, nil]
#
# @!attribute [rw] warnings
#   @return [Array, nil]
AiSearchInstancesItemUpdateData = Struct.new(
  :account_id,
  :instance_id,
  :namespace_id,
  :action,
  :checksum,
  :chunkCount,
  :chunks_count,
  :created_at,
  :end_byte,
  :error,
  :errorType,
  :fileKey,
  :file_size,
  :id,
  :item,
  :key,
  :last_seen_at,
  :message,
  :metadata,
  :namespace,
  :next_action,
  :processingTimeMs,
  :source_id,
  :start_byte,
  :status,
  :text,
  :timestamp,
  :wait_for_completion,
  :warnings,
  keyword_init: true
)

# Request payload for AiSearchInstancesItem#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
AiSearchInstancesItemRemoveMatch = Struct.new(
  :account_id,
  :id,
  :instance_id,
  :namespace_id,
  keyword_init: true
)

# AiSearchInstancesJob entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [Float]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] end_reason
#   @return [String, nil]
#
# @!attribute [rw] ended_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_seen_at
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] message_type
#   @return [Integer]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [String, nil]
AiSearchInstancesJob = Struct.new(
  :action,
  :created_at,
  :description,
  :end_reason,
  :ended_at,
  :id,
  :last_seen_at,
  :message,
  :message_type,
  :source,
  :started_at,
  keyword_init: true
)

# Request payload for AiSearchInstancesJob#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
AiSearchInstancesJobLoadMatch = Struct.new(
  :account_id,
  :id,
  :instance_id,
  :namespace_id,
  keyword_init: true
)

# Request payload for AiSearchInstancesJob#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
AiSearchInstancesJobListMatch = Struct.new(
  :account_id,
  :instance_id,
  :job_id,
  :namespace_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for AiSearchInstancesJob#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [Float]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] end_reason
#   @return [String, nil]
#
# @!attribute [rw] ended_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_seen_at
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] message_type
#   @return [Integer]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [String, nil]
AiSearchInstancesJobCreateData = Struct.new(
  :account_id,
  :instance_id,
  :namespace_id,
  :action,
  :created_at,
  :description,
  :end_reason,
  :ended_at,
  :id,
  :last_seen_at,
  :message,
  :message_type,
  :source,
  :started_at,
  keyword_init: true
)

# Request payload for AiSearchInstancesJob#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instance_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [Float, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] end_reason
#   @return [String, nil]
#
# @!attribute [rw] ended_at
#   @return [String, nil]
#
# @!attribute [rw] last_seen_at
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] message_type
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
AiSearchInstancesJobUpdateData = Struct.new(
  :account_id,
  :id,
  :instance_id,
  :namespace_id,
  :action,
  :created_at,
  :description,
  :end_reason,
  :ended_at,
  :last_seen_at,
  :message,
  :message_type,
  :source,
  :started_at,
  keyword_init: true
)

# AiSearchNamespace entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] new_namespace
#   @return [String]
#
# @!attribute [rw] public_endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] public_endpoint_params
#   @return [Hash, nil]
AiSearchNamespace = Struct.new(
  :created_at,
  :description,
  :id,
  :name,
  :new_namespace,
  :public_endpoint_id,
  :public_endpoint_params,
  keyword_init: true
)

# Request payload for AiSearchNamespace#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiSearchNamespaceLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for AiSearchNamespace#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
AiSearchNamespaceListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  :search,
  keyword_init: true
)

# Request payload for AiSearchNamespace#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] new_namespace
#   @return [String]
#
# @!attribute [rw] public_endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] public_endpoint_params
#   @return [Hash, nil]
AiSearchNamespaceCreateData = Struct.new(
  :account_id,
  :created_at,
  :description,
  :id,
  :name,
  :new_namespace,
  :public_endpoint_id,
  :public_endpoint_params,
  keyword_init: true
)

# Request payload for AiSearchNamespace#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] new_namespace
#   @return [String, nil]
#
# @!attribute [rw] public_endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] public_endpoint_params
#   @return [Hash, nil]
AiSearchNamespaceUpdateData = Struct.new(
  :account_id,
  :id,
  :created_at,
  :description,
  :name,
  :new_namespace,
  :public_endpoint_id,
  :public_endpoint_params,
  keyword_init: true
)

# Request payload for AiSearchNamespace#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiSearchNamespaceRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# AiSearchToken entity data model.
#
# @!attribute [rw] cf_api_id
#   @return [String]
#
# @!attribute [rw] cf_api_key
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] legacy
#   @return [Boolean, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] modified_by
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
AiSearchToken = Struct.new(
  :cf_api_id,
  :cf_api_key,
  :created_at,
  :created_by,
  :enabled,
  :id,
  :legacy,
  :modified_at,
  :modified_by,
  :name,
  keyword_init: true
)

# Request payload for AiSearchToken#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiSearchTokenLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for AiSearchToken#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
AiSearchTokenListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  :search,
  keyword_init: true
)

# Request payload for AiSearchToken#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cf_api_id
#   @return [String]
#
# @!attribute [rw] cf_api_key
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] legacy
#   @return [Boolean, nil]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] modified_by
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
AiSearchTokenCreateData = Struct.new(
  :account_id,
  :cf_api_id,
  :cf_api_key,
  :created_at,
  :created_by,
  :enabled,
  :id,
  :legacy,
  :modified_at,
  :modified_by,
  :name,
  keyword_init: true
)

# Request payload for AiSearchToken#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] cf_api_id
#   @return [String, nil]
#
# @!attribute [rw] cf_api_key
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] legacy
#   @return [Boolean, nil]
#
# @!attribute [rw] modified_at
#   @return [String, nil]
#
# @!attribute [rw] modified_by
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
AiSearchTokenUpdateData = Struct.new(
  :account_id,
  :id,
  :cf_api_id,
  :cf_api_key,
  :created_at,
  :created_by,
  :enabled,
  :legacy,
  :modified_at,
  :modified_by,
  :name,
  keyword_init: true
)

# Request payload for AiSearchToken#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AiSearchTokenRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# AigBillingCreateTopup entity data model.
#
# @!attribute [rw] amount
#   @return [Integer]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] payment_method_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingCreateTopup = Struct.new(
  :amount,
  :errors,
  :messages,
  :payment_method_id,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingCreateTopup#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] amount
#   @return [Integer]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] payment_method_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingCreateTopupCreateData = Struct.new(
  :account_id,
  :amount,
  :errors,
  :messages,
  :payment_method_id,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# AigBillingDeleteSpendingLimit entity data model.
class AigBillingDeleteSpendingLimit
end

# Request payload for AigBillingDeleteSpendingLimit#remove.
#
# @!attribute [rw] account_id
#   @return [String]
AigBillingDeleteSpendingLimitRemoveMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# AigBillingDeleteTopupConfig entity data model.
class AigBillingDeleteTopupConfig
end

# Request payload for AigBillingDeleteTopupConfig#remove.
#
# @!attribute [rw] account_id
#   @return [String]
AigBillingDeleteTopupConfigRemoveMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# AigBillingGetCreditBalance entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingGetCreditBalance = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingGetCreditBalance#list.
#
# @!attribute [rw] account_id
#   @return [String]
AigBillingGetCreditBalanceListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# AigBillingGetInvoiceHistory entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingGetInvoiceHistory = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingGetInvoiceHistory#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] type
#   @return [String, nil]
AigBillingGetInvoiceHistoryListMatch = Struct.new(
  :account_id,
  :type,
  keyword_init: true
)

# AigBillingGetInvoicePreview entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingGetInvoicePreview = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingGetInvoicePreview#list.
#
# @!attribute [rw] account_id
#   @return [String]
AigBillingGetInvoicePreviewListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# AigBillingGetSpendingLimit entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingGetSpendingLimit = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingGetSpendingLimit#list.
#
# @!attribute [rw] account_id
#   @return [String]
AigBillingGetSpendingLimitListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# AigBillingGetTopupConfig entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingGetTopupConfig = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingGetTopupConfig#list.
#
# @!attribute [rw] account_id
#   @return [String]
AigBillingGetTopupConfigListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# AigBillingGetTopupEligibility entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] payment_methods
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingGetTopupEligibility = Struct.new(
  :errors,
  :messages,
  :payment_methods,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingGetTopupEligibility#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] payment_methods
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingGetTopupEligibilityCreateData = Struct.new(
  :account_id,
  :errors,
  :messages,
  :payment_methods,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# AigBillingGetTopupLimit entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingGetTopupLimit = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingGetTopupLimit#list.
#
# @!attribute [rw] account_id
#   @return [String]
AigBillingGetTopupLimitListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# AigBillingGetUsageHistory entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingGetUsageHistory = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingGetUsageHistory#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] end_time
#   @return [Float, nil]
#
# @!attribute [rw] start_time
#   @return [Float, nil]
#
# @!attribute [rw] value_grouping_window
#   @return [String]
AigBillingGetUsageHistoryListMatch = Struct.new(
  :account_id,
  :end_time,
  :start_time,
  :value_grouping_window,
  keyword_init: true
)

# AigBillingSetSpendingLimit entity data model.
#
# @!attribute [rw] amount
#   @return [Integer]
#
# @!attribute [rw] duration
#   @return [String]
#
# @!attribute [rw] strategy
#   @return [String]
AigBillingSetSpendingLimit = Struct.new(
  :amount,
  :duration,
  :strategy,
  keyword_init: true
)

# Request payload for AigBillingSetSpendingLimit#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] amount
#   @return [Integer]
#
# @!attribute [rw] duration
#   @return [String]
#
# @!attribute [rw] strategy
#   @return [String]
AigBillingSetSpendingLimitCreateData = Struct.new(
  :account_id,
  :amount,
  :duration,
  :strategy,
  keyword_init: true
)

# AigBillingSetTopupConfig entity data model.
#
# @!attribute [rw] amount
#   @return [Integer]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] threshold
#   @return [Integer]
AigBillingSetTopupConfig = Struct.new(
  :amount,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  :threshold,
  keyword_init: true
)

# Request payload for AigBillingSetTopupConfig#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] amount
#   @return [Integer]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] threshold
#   @return [Integer]
AigBillingSetTopupConfigCreateData = Struct.new(
  :account_id,
  :amount,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  :threshold,
  keyword_init: true
)

# AigBillingTopupStatus entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] payment_intent_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingTopupStatus = Struct.new(
  :errors,
  :messages,
  :payment_intent_id,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AigBillingTopupStatus#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] payment_intent_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AigBillingTopupStatusCreateData = Struct.new(
  :account_id,
  :errors,
  :messages,
  :payment_intent_id,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# AutoRagJob entity data model.
#
# @!attribute [rw] created_at
#   @return [Float]
#
# @!attribute [rw] end_reason
#   @return [String, nil]
#
# @!attribute [rw] ended_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_seen_at
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] message_type
#   @return [Integer]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [String, nil]
AutoRagJob = Struct.new(
  :created_at,
  :end_reason,
  :ended_at,
  :id,
  :last_seen_at,
  :message,
  :message_type,
  :source,
  :started_at,
  keyword_init: true
)

# Request payload for AutoRagJob#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] rag_id
#   @return [String]
AutoRagJobLoadMatch = Struct.new(
  :account_id,
  :id,
  :rag_id,
  keyword_init: true
)

# Request payload for AutoRagJob#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] rag_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
AutoRagJobListMatch = Struct.new(
  :account_id,
  :job_id,
  :rag_id,
  :page,
  :per_page,
  keyword_init: true
)

# AutoRagRag entity data model.
#
# @!attribute [rw] error
#   @return [String]
#
# @!attribute [rw] job_id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String]
AutoRagRag = Struct.new(
  :error,
  :job_id,
  :key,
  keyword_init: true
)

# Request payload for AutoRagRag#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rag_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
AutoRagRagListMatch = Struct.new(
  :account_id,
  :rag_id,
  :page,
  :per_page,
  :search,
  :status,
  keyword_init: true
)

# Request payload for AutoRagRag#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rag_id
#   @return [String]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] job_id
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
AutoRagRagUpdateData = Struct.new(
  :account_id,
  :rag_id,
  :error,
  :job_id,
  :key,
  keyword_init: true
)

# AutoRagRagSearch entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] filters
#   @return [Object, nil]
#
# @!attribute [rw] has_more
#   @return [Boolean, nil]
#
# @!attribute [rw] max_num_results
#   @return [Integer, nil]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] next_page
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] ranking_options
#   @return [Hash, nil]
#
# @!attribute [rw] reranking
#   @return [Hash, nil]
#
# @!attribute [rw] response
#   @return [String]
#
# @!attribute [rw] rewrite_query
#   @return [Boolean, nil]
#
# @!attribute [rw] search_query
#   @return [String]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] system_prompt
#   @return [String, nil]
AutoRagRagSearch = Struct.new(
  :data,
  :filters,
  :has_more,
  :max_num_results,
  :model,
  :next_page,
  :object,
  :query,
  :ranking_options,
  :reranking,
  :response,
  :rewrite_query,
  :search_query,
  :stream,
  :system_prompt,
  keyword_init: true
)

# Request payload for AutoRagRagSearch#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rag_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] filters
#   @return [Object, nil]
#
# @!attribute [rw] has_more
#   @return [Boolean, nil]
#
# @!attribute [rw] max_num_results
#   @return [Integer, nil]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] next_page
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] ranking_options
#   @return [Hash, nil]
#
# @!attribute [rw] reranking
#   @return [Hash, nil]
#
# @!attribute [rw] response
#   @return [String]
#
# @!attribute [rw] rewrite_query
#   @return [Boolean, nil]
#
# @!attribute [rw] search_query
#   @return [String]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] system_prompt
#   @return [String, nil]
AutoRagRagSearchCreateData = Struct.new(
  :account_id,
  :rag_id,
  :data,
  :filters,
  :has_more,
  :max_num_results,
  :model,
  :next_page,
  :object,
  :query,
  :ranking_options,
  :reranking,
  :response,
  :rewrite_query,
  :search_query,
  :stream,
  :system_prompt,
  keyword_init: true
)

# FinetuneAsset entity data model.
#
# @!attribute [rw] file_name
#   @return [String]
#
# @!attribute [rw] file_url
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
FinetuneAsset = Struct.new(
  :file_name,
  :file_url,
  :id,
  keyword_init: true
)

# Request payload for FinetuneAsset#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] finetune_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
FinetuneAssetLoadMatch = Struct.new(
  :account_id,
  :finetune_id,
  :id,
  keyword_init: true
)

# Memory entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
Memory = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Memory#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String]
MemoryLoadMatch = Struct.new(
  :account_id,
  :id,
  :namespace_id,
  :profile_id,
  keyword_init: true
)

# Request payload for Memory#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String, nil]
#
# @!attribute [rw] profile_name
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] namespace_name
#   @return [String, nil]
MemoryListMatch = Struct.new(
  :account_id,
  :namespace_id,
  :profile_name,
  :cursor,
  :per_page,
  :session_id,
  :type,
  :namespace_name,
  keyword_init: true
)

# Request payload for Memory#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] profile_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
MemoryCreateData = Struct.new(
  :account_id,
  :namespace_id,
  :profile_name,
  :errors,
  :id,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Memory#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] namespace_id
#   @return [String]
#
# @!attribute [rw] profile_id
#   @return [String, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] profile_name
#   @return [String, nil]
MemoryRemoveMatch = Struct.new(
  :account_id,
  :id,
  :namespace_id,
  :profile_id,
  :session_id,
  :profile_name,
  keyword_init: true
)

# Namespace entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
Namespace = Struct.new(
  :errors,
  :id,
  :messages,
  :name,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Namespace#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
NamespaceLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Namespace#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
NamespaceListMatch = Struct.new(
  :account_id,
  :cursor,
  :direction,
  :order,
  :per_page,
  keyword_init: true
)

# Request payload for Namespace#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
NamespaceCreateData = Struct.new(
  :account_id,
  :errors,
  :id,
  :messages,
  :name,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Namespace#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
NamespaceRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Vectorize entity data model.
#
# @!attribute [rw] config
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] ids
#   @return [Array, nil]
#
# @!attribute [rw] indexType
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] propertyName
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Vectorize = Struct.new(
  :config,
  :description,
  :errors,
  :ids,
  :indexType,
  :messages,
  :name,
  :propertyName,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Vectorize#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] index_name
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] index_id
#   @return [String, nil]
VectorizeLoadMatch = Struct.new(
  :account_id,
  :index_name,
  :count,
  :cursor,
  :index_id,
  keyword_init: true
)

# Request payload for Vectorize#list.
#
# @!attribute [rw] account_id
#   @return [String]
VectorizeListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for Vectorize#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] index_id
#   @return [String, nil]
#
# @!attribute [rw] index_name
#   @return [String, nil]
#
# @!attribute [rw] config
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] ids
#   @return [Array, nil]
#
# @!attribute [rw] indexType
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] propertyName
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
VectorizeCreateData = Struct.new(
  :account_id,
  :index_id,
  :index_name,
  :config,
  :description,
  :errors,
  :ids,
  :indexType,
  :messages,
  :name,
  :propertyName,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Vectorize#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] index_name
#   @return [String]
VectorizeRemoveMatch = Struct.new(
  :account_id,
  :index_name,
  keyword_init: true
)

# VectorizeBetaDeprecated entity data model.
#
# @!attribute [rw] config
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] ids
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
VectorizeBetaDeprecated = Struct.new(
  :config,
  :description,
  :errors,
  :ids,
  :messages,
  :name,
  :result,
  :success,
  keyword_init: true
)

# Request payload for VectorizeBetaDeprecated#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] index_name
#   @return [String]
VectorizeBetaDeprecatedLoadMatch = Struct.new(
  :account_id,
  :index_name,
  keyword_init: true
)

# Request payload for VectorizeBetaDeprecated#list.
#
# @!attribute [rw] account_id
#   @return [String]
VectorizeBetaDeprecatedListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for VectorizeBetaDeprecated#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] index_name
#   @return [String, nil]
#
# @!attribute [rw] config
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] ids
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
VectorizeBetaDeprecatedCreateData = Struct.new(
  :account_id,
  :index_name,
  :config,
  :description,
  :errors,
  :ids,
  :messages,
  :name,
  :result,
  :success,
  keyword_init: true
)

# Request payload for VectorizeBetaDeprecated#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] index_name
#   @return [String]
#
# @!attribute [rw] config
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] ids
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
VectorizeBetaDeprecatedUpdateData = Struct.new(
  :account_id,
  :index_name,
  :config,
  :description,
  :errors,
  :ids,
  :messages,
  :name,
  :result,
  :success,
  keyword_init: true
)

# Request payload for VectorizeBetaDeprecated#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] index_name
#   @return [String]
VectorizeBetaDeprecatedRemoveMatch = Struct.new(
  :account_id,
  :index_name,
  keyword_init: true
)

# WorkersAi entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] extension
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] mimeType
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] options
#   @return [Hash, nil]
#
# @!attribute [rw] output
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersAi = Struct.new(
  :errors,
  :extension,
  :input,
  :messages,
  :mimeType,
  :model,
  :options,
  :output,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WorkersAi#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] hide_experimental
#   @return [Boolean, nil]
#
# @!attribute [rw] include_deprecated
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [Float, nil]
#
# @!attribute [rw] task
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
WorkersAiLoadMatch = Struct.new(
  :account_id,
  :author,
  :format,
  :hide_experimental,
  :include_deprecated,
  :page,
  :per_page,
  :search,
  :source,
  :task,
  :model,
  keyword_init: true
)

# Request payload for WorkersAi#list.
#
# @!attribute [rw] account_id
#   @return [String]
WorkersAiListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for WorkersAi#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] model_name
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] extension
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] mimeType
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] options
#   @return [Hash, nil]
#
# @!attribute [rw] output
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersAiCreateData = Struct.new(
  :account_id,
  :model_name,
  :errors,
  :extension,
  :input,
  :messages,
  :mimeType,
  :model,
  :options,
  :output,
  :result,
  :success,
  keyword_init: true
)

# WorkersAiFinetune entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] public
#   @return [Boolean]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersAiFinetune = Struct.new(
  :created_at,
  :description,
  :id,
  :model,
  :modified_at,
  :name,
  :public,
  :success,
  keyword_init: true
)

# Request payload for WorkersAiFinetune#load.
#
# @!attribute [rw] account_id
#   @return [String]
WorkersAiFinetuneLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for WorkersAiFinetune#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
WorkersAiFinetuneListMatch = Struct.new(
  :account_id,
  :limit,
  :offset,
  :order_by,
  keyword_init: true
)

# Request payload for WorkersAiFinetune#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] finetune_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] modified_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] public
#   @return [Boolean]
#
# @!attribute [rw] success
#   @return [Boolean]
WorkersAiFinetuneCreateData = Struct.new(
  :account_id,
  :finetune_id,
  :created_at,
  :description,
  :id,
  :model,
  :modified_at,
  :name,
  :public,
  :success,
  keyword_init: true
)

# Request payload for WorkersAiFinetune#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
WorkersAiFinetuneRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

