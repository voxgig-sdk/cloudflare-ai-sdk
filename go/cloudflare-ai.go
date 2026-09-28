package voxgigcloudflareaisdk

import (
	"github.com/voxgig-sdk/cloudflare-ai-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-ai-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-ai-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-ai-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareAiSDK = core.CloudflareAiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareAiEntity = core.CloudflareAiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareAiError = core.CloudflareAiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAccountEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAccountEntity(client, entopts)
	}
	core.NewAiGatewayEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayEntity(client, entopts)
	}
	core.NewAiGatewayCustomDomainEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayCustomDomainEntity(client, entopts)
	}
	core.NewAiGatewayCustomProviderEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayCustomProviderEntity(client, entopts)
	}
	core.NewAiGatewayCustomProviderCostEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayCustomProviderCostEntity(client, entopts)
	}
	core.NewAiGatewayDatasetEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayDatasetEntity(client, entopts)
	}
	core.NewAiGatewayDynamicRouteEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayDynamicRouteEntity(client, entopts)
	}
	core.NewAiGatewayEvaluationEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayEvaluationEntity(client, entopts)
	}
	core.NewAiGatewayGatewayEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayGatewayEntity(client, entopts)
	}
	core.NewAiGatewayLogEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayLogEntity(client, entopts)
	}
	core.NewAiGatewayProviderConfigEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiGatewayProviderConfigEntity(client, entopts)
	}
	core.NewAiSearchAccountSearchEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiSearchAccountSearchEntity(client, entopts)
	}
	core.NewAiSearchInstanceEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiSearchInstanceEntity(client, entopts)
	}
	core.NewAiSearchInstancesItemEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiSearchInstancesItemEntity(client, entopts)
	}
	core.NewAiSearchInstancesJobEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiSearchInstancesJobEntity(client, entopts)
	}
	core.NewAiSearchNamespaceEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiSearchNamespaceEntity(client, entopts)
	}
	core.NewAiSearchTokenEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAiSearchTokenEntity(client, entopts)
	}
	core.NewAigBillingCreateTopupEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingCreateTopupEntity(client, entopts)
	}
	core.NewAigBillingDeleteSpendingLimitEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingDeleteSpendingLimitEntity(client, entopts)
	}
	core.NewAigBillingDeleteTopupConfigEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingDeleteTopupConfigEntity(client, entopts)
	}
	core.NewAigBillingGetCreditBalanceEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingGetCreditBalanceEntity(client, entopts)
	}
	core.NewAigBillingGetInvoiceHistoryEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingGetInvoiceHistoryEntity(client, entopts)
	}
	core.NewAigBillingGetInvoicePreviewEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingGetInvoicePreviewEntity(client, entopts)
	}
	core.NewAigBillingGetSpendingLimitEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingGetSpendingLimitEntity(client, entopts)
	}
	core.NewAigBillingGetTopupConfigEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingGetTopupConfigEntity(client, entopts)
	}
	core.NewAigBillingGetTopupEligibilityEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingGetTopupEligibilityEntity(client, entopts)
	}
	core.NewAigBillingGetTopupLimitEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingGetTopupLimitEntity(client, entopts)
	}
	core.NewAigBillingGetUsageHistoryEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingGetUsageHistoryEntity(client, entopts)
	}
	core.NewAigBillingSetSpendingLimitEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingSetSpendingLimitEntity(client, entopts)
	}
	core.NewAigBillingSetTopupConfigEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingSetTopupConfigEntity(client, entopts)
	}
	core.NewAigBillingTopupStatusEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAigBillingTopupStatusEntity(client, entopts)
	}
	core.NewAutoRagJobEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAutoRagJobEntity(client, entopts)
	}
	core.NewAutoRagRagEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAutoRagRagEntity(client, entopts)
	}
	core.NewAutoRagRagSearchEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewAutoRagRagSearchEntity(client, entopts)
	}
	core.NewFinetuneAssetEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewFinetuneAssetEntity(client, entopts)
	}
	core.NewMemoryEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewMemoryEntity(client, entopts)
	}
	core.NewNamespaceEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewNamespaceEntity(client, entopts)
	}
	core.NewVectorizeEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewVectorizeEntity(client, entopts)
	}
	core.NewVectorizeBetaDeprecatedEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewVectorizeBetaDeprecatedEntity(client, entopts)
	}
	core.NewWorkersAiEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewWorkersAiEntity(client, entopts)
	}
	core.NewWorkersAiFinetuneEntityFunc = func(client *core.CloudflareAiSDK, entopts map[string]any) core.CloudflareAiEntity {
		return entity.NewWorkersAiFinetuneEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareAiSDK = core.NewCloudflareAiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareAiSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareAiSDK  { return NewCloudflareAiSDK(nil) }
func Test() *CloudflareAiSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
