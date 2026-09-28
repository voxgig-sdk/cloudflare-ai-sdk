# CloudflareAi SDK

from cloudflareai_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareai_sdk.core.utility_type import CloudflareAiUtility
from cloudflareai_sdk.core.spec import CloudflareAiSpec
from cloudflareai_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflareai_sdk.utility import register

# Load features
from cloudflareai_sdk.feature.base_feature import CloudflareAiBaseFeature
from cloudflareai_sdk.features import _has_feature, _make_feature


class CloudflareAiSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareAiUtility()
        self._utility = utility

        from cloudflareai_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareAiUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareAiSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareAiSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareAiSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Account(self, data=None) -> "AccountEntity":
        """Entity factory: client.Account().list() / client.Account().load({"id": ...})."""
        from cloudflareai_sdk.entity.account_entity import AccountEntity
        return AccountEntity(self, data)


    def AiGateway(self, data=None) -> "AiGatewayEntity":
        """Entity factory: client.AiGateway().list() / client.AiGateway().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_entity import AiGatewayEntity
        return AiGatewayEntity(self, data)


    def AiGatewayCustomDomain(self, data=None) -> "AiGatewayCustomDomainEntity":
        """Entity factory: client.AiGatewayCustomDomain().list() / client.AiGatewayCustomDomain().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_custom_domain_entity import AiGatewayCustomDomainEntity
        return AiGatewayCustomDomainEntity(self, data)


    def AiGatewayCustomProvider(self, data=None) -> "AiGatewayCustomProviderEntity":
        """Entity factory: client.AiGatewayCustomProvider().list() / client.AiGatewayCustomProvider().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_custom_provider_entity import AiGatewayCustomProviderEntity
        return AiGatewayCustomProviderEntity(self, data)


    def AiGatewayCustomProviderCost(self, data=None) -> "AiGatewayCustomProviderCostEntity":
        """Entity factory: client.AiGatewayCustomProviderCost().list() / client.AiGatewayCustomProviderCost().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_custom_provider_cost_entity import AiGatewayCustomProviderCostEntity
        return AiGatewayCustomProviderCostEntity(self, data)


    def AiGatewayDataset(self, data=None) -> "AiGatewayDatasetEntity":
        """Entity factory: client.AiGatewayDataset().list() / client.AiGatewayDataset().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_dataset_entity import AiGatewayDatasetEntity
        return AiGatewayDatasetEntity(self, data)


    def AiGatewayDynamicRoute(self, data=None) -> "AiGatewayDynamicRouteEntity":
        """Entity factory: client.AiGatewayDynamicRoute().list() / client.AiGatewayDynamicRoute().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_dynamic_route_entity import AiGatewayDynamicRouteEntity
        return AiGatewayDynamicRouteEntity(self, data)


    def AiGatewayEvaluation(self, data=None) -> "AiGatewayEvaluationEntity":
        """Entity factory: client.AiGatewayEvaluation().list() / client.AiGatewayEvaluation().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_evaluation_entity import AiGatewayEvaluationEntity
        return AiGatewayEvaluationEntity(self, data)


    def AiGatewayGateway(self, data=None) -> "AiGatewayGatewayEntity":
        """Entity factory: client.AiGatewayGateway().list() / client.AiGatewayGateway().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_gateway_entity import AiGatewayGatewayEntity
        return AiGatewayGatewayEntity(self, data)


    def AiGatewayLog(self, data=None) -> "AiGatewayLogEntity":
        """Entity factory: client.AiGatewayLog().list() / client.AiGatewayLog().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_log_entity import AiGatewayLogEntity
        return AiGatewayLogEntity(self, data)


    def AiGatewayProviderConfig(self, data=None) -> "AiGatewayProviderConfigEntity":
        """Entity factory: client.AiGatewayProviderConfig().list() / client.AiGatewayProviderConfig().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_gateway_provider_config_entity import AiGatewayProviderConfigEntity
        return AiGatewayProviderConfigEntity(self, data)


    def AiSearchAccountSearch(self, data=None) -> "AiSearchAccountSearchEntity":
        """Entity factory: client.AiSearchAccountSearch().list() / client.AiSearchAccountSearch().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_search_account_search_entity import AiSearchAccountSearchEntity
        return AiSearchAccountSearchEntity(self, data)


    def AiSearchInstance(self, data=None) -> "AiSearchInstanceEntity":
        """Entity factory: client.AiSearchInstance().list() / client.AiSearchInstance().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_search_instance_entity import AiSearchInstanceEntity
        return AiSearchInstanceEntity(self, data)


    def AiSearchInstancesItem(self, data=None) -> "AiSearchInstancesItemEntity":
        """Entity factory: client.AiSearchInstancesItem().list() / client.AiSearchInstancesItem().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_search_instances_item_entity import AiSearchInstancesItemEntity
        return AiSearchInstancesItemEntity(self, data)


    def AiSearchInstancesJob(self, data=None) -> "AiSearchInstancesJobEntity":
        """Entity factory: client.AiSearchInstancesJob().list() / client.AiSearchInstancesJob().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_search_instances_job_entity import AiSearchInstancesJobEntity
        return AiSearchInstancesJobEntity(self, data)


    def AiSearchNamespace(self, data=None) -> "AiSearchNamespaceEntity":
        """Entity factory: client.AiSearchNamespace().list() / client.AiSearchNamespace().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_search_namespace_entity import AiSearchNamespaceEntity
        return AiSearchNamespaceEntity(self, data)


    def AiSearchToken(self, data=None) -> "AiSearchTokenEntity":
        """Entity factory: client.AiSearchToken().list() / client.AiSearchToken().load({"id": ...})."""
        from cloudflareai_sdk.entity.ai_search_token_entity import AiSearchTokenEntity
        return AiSearchTokenEntity(self, data)


    def AigBillingCreateTopup(self, data=None) -> "AigBillingCreateTopupEntity":
        """Entity factory: client.AigBillingCreateTopup().list() / client.AigBillingCreateTopup().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_create_topup_entity import AigBillingCreateTopupEntity
        return AigBillingCreateTopupEntity(self, data)


    def AigBillingDeleteSpendingLimit(self, data=None) -> "AigBillingDeleteSpendingLimitEntity":
        """Entity factory: client.AigBillingDeleteSpendingLimit().list() / client.AigBillingDeleteSpendingLimit().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_delete_spending_limit_entity import AigBillingDeleteSpendingLimitEntity
        return AigBillingDeleteSpendingLimitEntity(self, data)


    def AigBillingDeleteTopupConfig(self, data=None) -> "AigBillingDeleteTopupConfigEntity":
        """Entity factory: client.AigBillingDeleteTopupConfig().list() / client.AigBillingDeleteTopupConfig().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_delete_topup_config_entity import AigBillingDeleteTopupConfigEntity
        return AigBillingDeleteTopupConfigEntity(self, data)


    def AigBillingGetCreditBalance(self, data=None) -> "AigBillingGetCreditBalanceEntity":
        """Entity factory: client.AigBillingGetCreditBalance().list() / client.AigBillingGetCreditBalance().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_get_credit_balance_entity import AigBillingGetCreditBalanceEntity
        return AigBillingGetCreditBalanceEntity(self, data)


    def AigBillingGetInvoiceHistory(self, data=None) -> "AigBillingGetInvoiceHistoryEntity":
        """Entity factory: client.AigBillingGetInvoiceHistory().list() / client.AigBillingGetInvoiceHistory().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_get_invoice_history_entity import AigBillingGetInvoiceHistoryEntity
        return AigBillingGetInvoiceHistoryEntity(self, data)


    def AigBillingGetInvoicePreview(self, data=None) -> "AigBillingGetInvoicePreviewEntity":
        """Entity factory: client.AigBillingGetInvoicePreview().list() / client.AigBillingGetInvoicePreview().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_get_invoice_preview_entity import AigBillingGetInvoicePreviewEntity
        return AigBillingGetInvoicePreviewEntity(self, data)


    def AigBillingGetSpendingLimit(self, data=None) -> "AigBillingGetSpendingLimitEntity":
        """Entity factory: client.AigBillingGetSpendingLimit().list() / client.AigBillingGetSpendingLimit().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_get_spending_limit_entity import AigBillingGetSpendingLimitEntity
        return AigBillingGetSpendingLimitEntity(self, data)


    def AigBillingGetTopupConfig(self, data=None) -> "AigBillingGetTopupConfigEntity":
        """Entity factory: client.AigBillingGetTopupConfig().list() / client.AigBillingGetTopupConfig().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_get_topup_config_entity import AigBillingGetTopupConfigEntity
        return AigBillingGetTopupConfigEntity(self, data)


    def AigBillingGetTopupEligibility(self, data=None) -> "AigBillingGetTopupEligibilityEntity":
        """Entity factory: client.AigBillingGetTopupEligibility().list() / client.AigBillingGetTopupEligibility().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_get_topup_eligibility_entity import AigBillingGetTopupEligibilityEntity
        return AigBillingGetTopupEligibilityEntity(self, data)


    def AigBillingGetTopupLimit(self, data=None) -> "AigBillingGetTopupLimitEntity":
        """Entity factory: client.AigBillingGetTopupLimit().list() / client.AigBillingGetTopupLimit().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_get_topup_limit_entity import AigBillingGetTopupLimitEntity
        return AigBillingGetTopupLimitEntity(self, data)


    def AigBillingGetUsageHistory(self, data=None) -> "AigBillingGetUsageHistoryEntity":
        """Entity factory: client.AigBillingGetUsageHistory().list() / client.AigBillingGetUsageHistory().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_get_usage_history_entity import AigBillingGetUsageHistoryEntity
        return AigBillingGetUsageHistoryEntity(self, data)


    def AigBillingSetSpendingLimit(self, data=None) -> "AigBillingSetSpendingLimitEntity":
        """Entity factory: client.AigBillingSetSpendingLimit().list() / client.AigBillingSetSpendingLimit().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_set_spending_limit_entity import AigBillingSetSpendingLimitEntity
        return AigBillingSetSpendingLimitEntity(self, data)


    def AigBillingSetTopupConfig(self, data=None) -> "AigBillingSetTopupConfigEntity":
        """Entity factory: client.AigBillingSetTopupConfig().list() / client.AigBillingSetTopupConfig().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_set_topup_config_entity import AigBillingSetTopupConfigEntity
        return AigBillingSetTopupConfigEntity(self, data)


    def AigBillingTopupStatus(self, data=None) -> "AigBillingTopupStatusEntity":
        """Entity factory: client.AigBillingTopupStatus().list() / client.AigBillingTopupStatus().load({"id": ...})."""
        from cloudflareai_sdk.entity.aig_billing_topup_status_entity import AigBillingTopupStatusEntity
        return AigBillingTopupStatusEntity(self, data)


    def AutoRagJob(self, data=None) -> "AutoRagJobEntity":
        """Entity factory: client.AutoRagJob().list() / client.AutoRagJob().load({"id": ...})."""
        from cloudflareai_sdk.entity.auto_rag_job_entity import AutoRagJobEntity
        return AutoRagJobEntity(self, data)


    def AutoRagRag(self, data=None) -> "AutoRagRagEntity":
        """Entity factory: client.AutoRagRag().list() / client.AutoRagRag().load({"id": ...})."""
        from cloudflareai_sdk.entity.auto_rag_rag_entity import AutoRagRagEntity
        return AutoRagRagEntity(self, data)


    def AutoRagRagSearch(self, data=None) -> "AutoRagRagSearchEntity":
        """Entity factory: client.AutoRagRagSearch().list() / client.AutoRagRagSearch().load({"id": ...})."""
        from cloudflareai_sdk.entity.auto_rag_rag_search_entity import AutoRagRagSearchEntity
        return AutoRagRagSearchEntity(self, data)


    def FinetuneAsset(self, data=None) -> "FinetuneAssetEntity":
        """Entity factory: client.FinetuneAsset().list() / client.FinetuneAsset().load({"id": ...})."""
        from cloudflareai_sdk.entity.finetune_asset_entity import FinetuneAssetEntity
        return FinetuneAssetEntity(self, data)


    def Vectorize(self, data=None) -> "VectorizeEntity":
        """Entity factory: client.Vectorize().list() / client.Vectorize().load({"id": ...})."""
        from cloudflareai_sdk.entity.vectorize_entity import VectorizeEntity
        return VectorizeEntity(self, data)


    def VectorizeBetaDeprecated(self, data=None) -> "VectorizeBetaDeprecatedEntity":
        """Entity factory: client.VectorizeBetaDeprecated().list() / client.VectorizeBetaDeprecated().load({"id": ...})."""
        from cloudflareai_sdk.entity.vectorize_beta__deprecated_entity import VectorizeBetaDeprecatedEntity
        return VectorizeBetaDeprecatedEntity(self, data)


    def WorkersAi(self, data=None) -> "WorkersAiEntity":
        """Entity factory: client.WorkersAi().list() / client.WorkersAi().load({"id": ...})."""
        from cloudflareai_sdk.entity.workers_ai_entity import WorkersAiEntity
        return WorkersAiEntity(self, data)


    def WorkersAiFinetune(self, data=None) -> "WorkersAiFinetuneEntity":
        """Entity factory: client.WorkersAiFinetune().list() / client.WorkersAiFinetune().load({"id": ...})."""
        from cloudflareai_sdk.entity.workers_ai_finetune_entity import WorkersAiFinetuneEntity
        return WorkersAiFinetuneEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareAiSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflareai_sdk.entity.account_entity import AccountEntity
    from cloudflareai_sdk.entity.ai_gateway_entity import AiGatewayEntity
    from cloudflareai_sdk.entity.ai_gateway_custom_domain_entity import AiGatewayCustomDomainEntity
    from cloudflareai_sdk.entity.ai_gateway_custom_provider_entity import AiGatewayCustomProviderEntity
    from cloudflareai_sdk.entity.ai_gateway_custom_provider_cost_entity import AiGatewayCustomProviderCostEntity
    from cloudflareai_sdk.entity.ai_gateway_dataset_entity import AiGatewayDatasetEntity
    from cloudflareai_sdk.entity.ai_gateway_dynamic_route_entity import AiGatewayDynamicRouteEntity
    from cloudflareai_sdk.entity.ai_gateway_evaluation_entity import AiGatewayEvaluationEntity
    from cloudflareai_sdk.entity.ai_gateway_gateway_entity import AiGatewayGatewayEntity
    from cloudflareai_sdk.entity.ai_gateway_log_entity import AiGatewayLogEntity
    from cloudflareai_sdk.entity.ai_gateway_provider_config_entity import AiGatewayProviderConfigEntity
    from cloudflareai_sdk.entity.ai_search_account_search_entity import AiSearchAccountSearchEntity
    from cloudflareai_sdk.entity.ai_search_instance_entity import AiSearchInstanceEntity
    from cloudflareai_sdk.entity.ai_search_instances_item_entity import AiSearchInstancesItemEntity
    from cloudflareai_sdk.entity.ai_search_instances_job_entity import AiSearchInstancesJobEntity
    from cloudflareai_sdk.entity.ai_search_namespace_entity import AiSearchNamespaceEntity
    from cloudflareai_sdk.entity.ai_search_token_entity import AiSearchTokenEntity
    from cloudflareai_sdk.entity.aig_billing_create_topup_entity import AigBillingCreateTopupEntity
    from cloudflareai_sdk.entity.aig_billing_delete_spending_limit_entity import AigBillingDeleteSpendingLimitEntity
    from cloudflareai_sdk.entity.aig_billing_delete_topup_config_entity import AigBillingDeleteTopupConfigEntity
    from cloudflareai_sdk.entity.aig_billing_get_credit_balance_entity import AigBillingGetCreditBalanceEntity
    from cloudflareai_sdk.entity.aig_billing_get_invoice_history_entity import AigBillingGetInvoiceHistoryEntity
    from cloudflareai_sdk.entity.aig_billing_get_invoice_preview_entity import AigBillingGetInvoicePreviewEntity
    from cloudflareai_sdk.entity.aig_billing_get_spending_limit_entity import AigBillingGetSpendingLimitEntity
    from cloudflareai_sdk.entity.aig_billing_get_topup_config_entity import AigBillingGetTopupConfigEntity
    from cloudflareai_sdk.entity.aig_billing_get_topup_eligibility_entity import AigBillingGetTopupEligibilityEntity
    from cloudflareai_sdk.entity.aig_billing_get_topup_limit_entity import AigBillingGetTopupLimitEntity
    from cloudflareai_sdk.entity.aig_billing_get_usage_history_entity import AigBillingGetUsageHistoryEntity
    from cloudflareai_sdk.entity.aig_billing_set_spending_limit_entity import AigBillingSetSpendingLimitEntity
    from cloudflareai_sdk.entity.aig_billing_set_topup_config_entity import AigBillingSetTopupConfigEntity
    from cloudflareai_sdk.entity.aig_billing_topup_status_entity import AigBillingTopupStatusEntity
    from cloudflareai_sdk.entity.auto_rag_job_entity import AutoRagJobEntity
    from cloudflareai_sdk.entity.auto_rag_rag_entity import AutoRagRagEntity
    from cloudflareai_sdk.entity.auto_rag_rag_search_entity import AutoRagRagSearchEntity
    from cloudflareai_sdk.entity.finetune_asset_entity import FinetuneAssetEntity
    from cloudflareai_sdk.entity.vectorize_entity import VectorizeEntity
    from cloudflareai_sdk.entity.vectorize_beta__deprecated_entity import VectorizeBetaDeprecatedEntity
    from cloudflareai_sdk.entity.workers_ai_entity import WorkersAiEntity
    from cloudflareai_sdk.entity.workers_ai_finetune_entity import WorkersAiFinetuneEntity
