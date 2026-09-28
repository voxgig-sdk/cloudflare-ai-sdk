package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAccountEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayCustomDomainEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayCustomProviderEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayCustomProviderCostEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayDatasetEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayDynamicRouteEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayEvaluationEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayGatewayEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayLogEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiGatewayProviderConfigEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiSearchAccountSearchEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiSearchInstanceEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiSearchInstancesItemEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiSearchInstancesJobEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiSearchNamespaceEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAiSearchTokenEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingCreateTopupEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingDeleteSpendingLimitEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingDeleteTopupConfigEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingGetCreditBalanceEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingGetInvoiceHistoryEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingGetInvoicePreviewEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingGetSpendingLimitEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingGetTopupConfigEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingGetTopupEligibilityEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingGetTopupLimitEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingGetUsageHistoryEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingSetSpendingLimitEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingSetTopupConfigEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAigBillingTopupStatusEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAutoRagJobEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAutoRagRagEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewAutoRagRagSearchEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewFinetuneAssetEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewVectorizeEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewVectorizeBetaDeprecatedEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewWorkersAiEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

var NewWorkersAiFinetuneEntityFunc func(client *CloudflareAiSDK, entopts map[string]any) CloudflareAiEntity

