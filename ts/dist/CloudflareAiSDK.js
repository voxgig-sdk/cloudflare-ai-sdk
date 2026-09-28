"use strict";
// CloudflareAi Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareAiSDK = exports.CloudflareAiEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccountEntity_1 = require("./entity/AccountEntity");
const AiGatewayEntity_1 = require("./entity/AiGatewayEntity");
const AiGatewayCustomDomainEntity_1 = require("./entity/AiGatewayCustomDomainEntity");
const AiGatewayCustomProviderEntity_1 = require("./entity/AiGatewayCustomProviderEntity");
const AiGatewayCustomProviderCostEntity_1 = require("./entity/AiGatewayCustomProviderCostEntity");
const AiGatewayDatasetEntity_1 = require("./entity/AiGatewayDatasetEntity");
const AiGatewayDynamicRouteEntity_1 = require("./entity/AiGatewayDynamicRouteEntity");
const AiGatewayEvaluationEntity_1 = require("./entity/AiGatewayEvaluationEntity");
const AiGatewayGatewayEntity_1 = require("./entity/AiGatewayGatewayEntity");
const AiGatewayLogEntity_1 = require("./entity/AiGatewayLogEntity");
const AiGatewayProviderConfigEntity_1 = require("./entity/AiGatewayProviderConfigEntity");
const AiSearchAccountSearchEntity_1 = require("./entity/AiSearchAccountSearchEntity");
const AiSearchInstanceEntity_1 = require("./entity/AiSearchInstanceEntity");
const AiSearchInstancesItemEntity_1 = require("./entity/AiSearchInstancesItemEntity");
const AiSearchInstancesJobEntity_1 = require("./entity/AiSearchInstancesJobEntity");
const AiSearchNamespaceEntity_1 = require("./entity/AiSearchNamespaceEntity");
const AiSearchTokenEntity_1 = require("./entity/AiSearchTokenEntity");
const AigBillingCreateTopupEntity_1 = require("./entity/AigBillingCreateTopupEntity");
const AigBillingDeleteSpendingLimitEntity_1 = require("./entity/AigBillingDeleteSpendingLimitEntity");
const AigBillingDeleteTopupConfigEntity_1 = require("./entity/AigBillingDeleteTopupConfigEntity");
const AigBillingGetCreditBalanceEntity_1 = require("./entity/AigBillingGetCreditBalanceEntity");
const AigBillingGetInvoiceHistoryEntity_1 = require("./entity/AigBillingGetInvoiceHistoryEntity");
const AigBillingGetInvoicePreviewEntity_1 = require("./entity/AigBillingGetInvoicePreviewEntity");
const AigBillingGetSpendingLimitEntity_1 = require("./entity/AigBillingGetSpendingLimitEntity");
const AigBillingGetTopupConfigEntity_1 = require("./entity/AigBillingGetTopupConfigEntity");
const AigBillingGetTopupEligibilityEntity_1 = require("./entity/AigBillingGetTopupEligibilityEntity");
const AigBillingGetTopupLimitEntity_1 = require("./entity/AigBillingGetTopupLimitEntity");
const AigBillingGetUsageHistoryEntity_1 = require("./entity/AigBillingGetUsageHistoryEntity");
const AigBillingSetSpendingLimitEntity_1 = require("./entity/AigBillingSetSpendingLimitEntity");
const AigBillingSetTopupConfigEntity_1 = require("./entity/AigBillingSetTopupConfigEntity");
const AigBillingTopupStatusEntity_1 = require("./entity/AigBillingTopupStatusEntity");
const AutoRagJobEntity_1 = require("./entity/AutoRagJobEntity");
const AutoRagRagEntity_1 = require("./entity/AutoRagRagEntity");
const AutoRagRagSearchEntity_1 = require("./entity/AutoRagRagSearchEntity");
const FinetuneAssetEntity_1 = require("./entity/FinetuneAssetEntity");
const VectorizeEntity_1 = require("./entity/VectorizeEntity");
const VectorizeBetaDeprecatedEntity_1 = require("./entity/VectorizeBetaDeprecatedEntity");
const WorkersAiEntity_1 = require("./entity/WorkersAiEntity");
const WorkersAiFinetuneEntity_1 = require("./entity/WorkersAiFinetuneEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareAiEntityBase_1 = require("./CloudflareAiEntityBase");
Object.defineProperty(exports, "CloudflareAiEntityBase", { enumerable: true, get: function () { return CloudflareAiEntityBase_1.CloudflareAiEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareAiSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareAiSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareAiSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareAiSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Account(entopts) {
        const self = this;
        return new AccountEntity_1.AccountEntity(self, entopts);
    }
    // Entity access: `client.AiGateway().list()` / `client.AiGateway().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGateway(entopts) {
        const self = this;
        return new AiGatewayEntity_1.AiGatewayEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayCustomDomain().list()` / `client.AiGatewayCustomDomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayCustomDomain(entopts) {
        const self = this;
        return new AiGatewayCustomDomainEntity_1.AiGatewayCustomDomainEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayCustomProvider().list()` / `client.AiGatewayCustomProvider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayCustomProvider(entopts) {
        const self = this;
        return new AiGatewayCustomProviderEntity_1.AiGatewayCustomProviderEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayCustomProviderCost().list()` / `client.AiGatewayCustomProviderCost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayCustomProviderCost(entopts) {
        const self = this;
        return new AiGatewayCustomProviderCostEntity_1.AiGatewayCustomProviderCostEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayDataset().list()` / `client.AiGatewayDataset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayDataset(entopts) {
        const self = this;
        return new AiGatewayDatasetEntity_1.AiGatewayDatasetEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayDynamicRoute().list()` / `client.AiGatewayDynamicRoute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayDynamicRoute(entopts) {
        const self = this;
        return new AiGatewayDynamicRouteEntity_1.AiGatewayDynamicRouteEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayEvaluation().list()` / `client.AiGatewayEvaluation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayEvaluation(entopts) {
        const self = this;
        return new AiGatewayEvaluationEntity_1.AiGatewayEvaluationEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayGateway().list()` / `client.AiGatewayGateway().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayGateway(entopts) {
        const self = this;
        return new AiGatewayGatewayEntity_1.AiGatewayGatewayEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayLog().list()` / `client.AiGatewayLog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayLog(entopts) {
        const self = this;
        return new AiGatewayLogEntity_1.AiGatewayLogEntity(self, entopts);
    }
    // Entity access: `client.AiGatewayProviderConfig().list()` / `client.AiGatewayProviderConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiGatewayProviderConfig(entopts) {
        const self = this;
        return new AiGatewayProviderConfigEntity_1.AiGatewayProviderConfigEntity(self, entopts);
    }
    // Entity access: `client.AiSearchAccountSearch().list()` / `client.AiSearchAccountSearch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiSearchAccountSearch(entopts) {
        const self = this;
        return new AiSearchAccountSearchEntity_1.AiSearchAccountSearchEntity(self, entopts);
    }
    // Entity access: `client.AiSearchInstance().list()` / `client.AiSearchInstance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiSearchInstance(entopts) {
        const self = this;
        return new AiSearchInstanceEntity_1.AiSearchInstanceEntity(self, entopts);
    }
    // Entity access: `client.AiSearchInstancesItem().list()` / `client.AiSearchInstancesItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiSearchInstancesItem(entopts) {
        const self = this;
        return new AiSearchInstancesItemEntity_1.AiSearchInstancesItemEntity(self, entopts);
    }
    // Entity access: `client.AiSearchInstancesJob().list()` / `client.AiSearchInstancesJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiSearchInstancesJob(entopts) {
        const self = this;
        return new AiSearchInstancesJobEntity_1.AiSearchInstancesJobEntity(self, entopts);
    }
    // Entity access: `client.AiSearchNamespace().list()` / `client.AiSearchNamespace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiSearchNamespace(entopts) {
        const self = this;
        return new AiSearchNamespaceEntity_1.AiSearchNamespaceEntity(self, entopts);
    }
    // Entity access: `client.AiSearchToken().list()` / `client.AiSearchToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiSearchToken(entopts) {
        const self = this;
        return new AiSearchTokenEntity_1.AiSearchTokenEntity(self, entopts);
    }
    // Entity access: `client.AigBillingCreateTopup().list()` / `client.AigBillingCreateTopup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingCreateTopup(entopts) {
        const self = this;
        return new AigBillingCreateTopupEntity_1.AigBillingCreateTopupEntity(self, entopts);
    }
    // Entity access: `client.AigBillingDeleteSpendingLimit().list()` / `client.AigBillingDeleteSpendingLimit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingDeleteSpendingLimit(entopts) {
        const self = this;
        return new AigBillingDeleteSpendingLimitEntity_1.AigBillingDeleteSpendingLimitEntity(self, entopts);
    }
    // Entity access: `client.AigBillingDeleteTopupConfig().list()` / `client.AigBillingDeleteTopupConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingDeleteTopupConfig(entopts) {
        const self = this;
        return new AigBillingDeleteTopupConfigEntity_1.AigBillingDeleteTopupConfigEntity(self, entopts);
    }
    // Entity access: `client.AigBillingGetCreditBalance().list()` / `client.AigBillingGetCreditBalance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingGetCreditBalance(entopts) {
        const self = this;
        return new AigBillingGetCreditBalanceEntity_1.AigBillingGetCreditBalanceEntity(self, entopts);
    }
    // Entity access: `client.AigBillingGetInvoiceHistory().list()` / `client.AigBillingGetInvoiceHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingGetInvoiceHistory(entopts) {
        const self = this;
        return new AigBillingGetInvoiceHistoryEntity_1.AigBillingGetInvoiceHistoryEntity(self, entopts);
    }
    // Entity access: `client.AigBillingGetInvoicePreview().list()` / `client.AigBillingGetInvoicePreview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingGetInvoicePreview(entopts) {
        const self = this;
        return new AigBillingGetInvoicePreviewEntity_1.AigBillingGetInvoicePreviewEntity(self, entopts);
    }
    // Entity access: `client.AigBillingGetSpendingLimit().list()` / `client.AigBillingGetSpendingLimit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingGetSpendingLimit(entopts) {
        const self = this;
        return new AigBillingGetSpendingLimitEntity_1.AigBillingGetSpendingLimitEntity(self, entopts);
    }
    // Entity access: `client.AigBillingGetTopupConfig().list()` / `client.AigBillingGetTopupConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingGetTopupConfig(entopts) {
        const self = this;
        return new AigBillingGetTopupConfigEntity_1.AigBillingGetTopupConfigEntity(self, entopts);
    }
    // Entity access: `client.AigBillingGetTopupEligibility().list()` / `client.AigBillingGetTopupEligibility().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingGetTopupEligibility(entopts) {
        const self = this;
        return new AigBillingGetTopupEligibilityEntity_1.AigBillingGetTopupEligibilityEntity(self, entopts);
    }
    // Entity access: `client.AigBillingGetTopupLimit().list()` / `client.AigBillingGetTopupLimit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingGetTopupLimit(entopts) {
        const self = this;
        return new AigBillingGetTopupLimitEntity_1.AigBillingGetTopupLimitEntity(self, entopts);
    }
    // Entity access: `client.AigBillingGetUsageHistory().list()` / `client.AigBillingGetUsageHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingGetUsageHistory(entopts) {
        const self = this;
        return new AigBillingGetUsageHistoryEntity_1.AigBillingGetUsageHistoryEntity(self, entopts);
    }
    // Entity access: `client.AigBillingSetSpendingLimit().list()` / `client.AigBillingSetSpendingLimit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingSetSpendingLimit(entopts) {
        const self = this;
        return new AigBillingSetSpendingLimitEntity_1.AigBillingSetSpendingLimitEntity(self, entopts);
    }
    // Entity access: `client.AigBillingSetTopupConfig().list()` / `client.AigBillingSetTopupConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingSetTopupConfig(entopts) {
        const self = this;
        return new AigBillingSetTopupConfigEntity_1.AigBillingSetTopupConfigEntity(self, entopts);
    }
    // Entity access: `client.AigBillingTopupStatus().list()` / `client.AigBillingTopupStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AigBillingTopupStatus(entopts) {
        const self = this;
        return new AigBillingTopupStatusEntity_1.AigBillingTopupStatusEntity(self, entopts);
    }
    // Entity access: `client.AutoRagJob().list()` / `client.AutoRagJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutoRagJob(entopts) {
        const self = this;
        return new AutoRagJobEntity_1.AutoRagJobEntity(self, entopts);
    }
    // Entity access: `client.AutoRagRag().list()` / `client.AutoRagRag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutoRagRag(entopts) {
        const self = this;
        return new AutoRagRagEntity_1.AutoRagRagEntity(self, entopts);
    }
    // Entity access: `client.AutoRagRagSearch().list()` / `client.AutoRagRagSearch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutoRagRagSearch(entopts) {
        const self = this;
        return new AutoRagRagSearchEntity_1.AutoRagRagSearchEntity(self, entopts);
    }
    // Entity access: `client.FinetuneAsset().list()` / `client.FinetuneAsset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FinetuneAsset(entopts) {
        const self = this;
        return new FinetuneAssetEntity_1.FinetuneAssetEntity(self, entopts);
    }
    // Entity access: `client.Vectorize().list()` / `client.Vectorize().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Vectorize(entopts) {
        const self = this;
        return new VectorizeEntity_1.VectorizeEntity(self, entopts);
    }
    // Entity access: `client.VectorizeBetaDeprecated().list()` / `client.VectorizeBetaDeprecated().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VectorizeBetaDeprecated(entopts) {
        const self = this;
        return new VectorizeBetaDeprecatedEntity_1.VectorizeBetaDeprecatedEntity(self, entopts);
    }
    // Entity access: `client.WorkersAi().list()` / `client.WorkersAi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersAi(entopts) {
        const self = this;
        return new WorkersAiEntity_1.WorkersAiEntity(self, entopts);
    }
    // Entity access: `client.WorkersAiFinetune().list()` / `client.WorkersAiFinetune().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkersAiFinetune(entopts) {
        const self = this;
        return new WorkersAiFinetuneEntity_1.WorkersAiFinetuneEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareAiSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareAiSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareAi' };
    }
    toString() {
        return 'CloudflareAi ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareAiSDK = CloudflareAiSDK;
const SDK = CloudflareAiSDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareAiSDK.js.map