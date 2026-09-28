// CloudflareAi Ts SDK

import { AccountEntity } from './entity/AccountEntity'
import { AiGatewayEntity } from './entity/AiGatewayEntity'
import { AiGatewayCustomDomainEntity } from './entity/AiGatewayCustomDomainEntity'
import { AiGatewayCustomProviderEntity } from './entity/AiGatewayCustomProviderEntity'
import { AiGatewayCustomProviderCostEntity } from './entity/AiGatewayCustomProviderCostEntity'
import { AiGatewayDatasetEntity } from './entity/AiGatewayDatasetEntity'
import { AiGatewayDynamicRouteEntity } from './entity/AiGatewayDynamicRouteEntity'
import { AiGatewayEvaluationEntity } from './entity/AiGatewayEvaluationEntity'
import { AiGatewayGatewayEntity } from './entity/AiGatewayGatewayEntity'
import { AiGatewayLogEntity } from './entity/AiGatewayLogEntity'
import { AiGatewayProviderConfigEntity } from './entity/AiGatewayProviderConfigEntity'
import { AiSearchAccountSearchEntity } from './entity/AiSearchAccountSearchEntity'
import { AiSearchInstanceEntity } from './entity/AiSearchInstanceEntity'
import { AiSearchInstancesItemEntity } from './entity/AiSearchInstancesItemEntity'
import { AiSearchInstancesJobEntity } from './entity/AiSearchInstancesJobEntity'
import { AiSearchNamespaceEntity } from './entity/AiSearchNamespaceEntity'
import { AiSearchTokenEntity } from './entity/AiSearchTokenEntity'
import { AigBillingCreateTopupEntity } from './entity/AigBillingCreateTopupEntity'
import { AigBillingDeleteSpendingLimitEntity } from './entity/AigBillingDeleteSpendingLimitEntity'
import { AigBillingDeleteTopupConfigEntity } from './entity/AigBillingDeleteTopupConfigEntity'
import { AigBillingGetCreditBalanceEntity } from './entity/AigBillingGetCreditBalanceEntity'
import { AigBillingGetInvoiceHistoryEntity } from './entity/AigBillingGetInvoiceHistoryEntity'
import { AigBillingGetInvoicePreviewEntity } from './entity/AigBillingGetInvoicePreviewEntity'
import { AigBillingGetSpendingLimitEntity } from './entity/AigBillingGetSpendingLimitEntity'
import { AigBillingGetTopupConfigEntity } from './entity/AigBillingGetTopupConfigEntity'
import { AigBillingGetTopupEligibilityEntity } from './entity/AigBillingGetTopupEligibilityEntity'
import { AigBillingGetTopupLimitEntity } from './entity/AigBillingGetTopupLimitEntity'
import { AigBillingGetUsageHistoryEntity } from './entity/AigBillingGetUsageHistoryEntity'
import { AigBillingSetSpendingLimitEntity } from './entity/AigBillingSetSpendingLimitEntity'
import { AigBillingSetTopupConfigEntity } from './entity/AigBillingSetTopupConfigEntity'
import { AigBillingTopupStatusEntity } from './entity/AigBillingTopupStatusEntity'
import { AutoRagJobEntity } from './entity/AutoRagJobEntity'
import { AutoRagRagEntity } from './entity/AutoRagRagEntity'
import { AutoRagRagSearchEntity } from './entity/AutoRagRagSearchEntity'
import { FinetuneAssetEntity } from './entity/FinetuneAssetEntity'
import { MemoryEntity } from './entity/MemoryEntity'
import { NamespaceEntity } from './entity/NamespaceEntity'
import { VectorizeEntity } from './entity/VectorizeEntity'
import { VectorizeBetaDeprecatedEntity } from './entity/VectorizeBetaDeprecatedEntity'
import { WorkersAiEntity } from './entity/WorkersAiEntity'
import { WorkersAiFinetuneEntity } from './entity/WorkersAiFinetuneEntity'

export type * from './CloudflareAiTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudflareAiEntityBase } from './CloudflareAiEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CloudflareAiSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
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
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudflareAiSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudflareAiSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudflareAiSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Account(entopts?: Record<string, any>) {
    const self = this
    return new AccountEntity(self, entopts)
  }


  // Entity access: `client.AiGateway().list()` / `client.AiGateway().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGateway(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayEntity(self, entopts)
  }


  // Entity access: `client.AiGatewayCustomDomain().list()` / `client.AiGatewayCustomDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGatewayCustomDomain(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayCustomDomainEntity(self, entopts)
  }


  // Entity access: `client.AiGatewayCustomProvider().list()` / `client.AiGatewayCustomProvider().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGatewayCustomProvider(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayCustomProviderEntity(self, entopts)
  }


  // Entity access: `client.AiGatewayCustomProviderCost().list()` / `client.AiGatewayCustomProviderCost().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGatewayCustomProviderCost(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayCustomProviderCostEntity(self, entopts)
  }


  // Entity access: `client.AiGatewayDataset().list()` / `client.AiGatewayDataset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGatewayDataset(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayDatasetEntity(self, entopts)
  }


  // Entity access: `client.AiGatewayDynamicRoute().list()` / `client.AiGatewayDynamicRoute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGatewayDynamicRoute(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayDynamicRouteEntity(self, entopts)
  }


  // Entity access: `client.AiGatewayEvaluation().list()` / `client.AiGatewayEvaluation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGatewayEvaluation(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayEvaluationEntity(self, entopts)
  }


  // Entity access: `client.AiGatewayGateway().list()` / `client.AiGatewayGateway().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGatewayGateway(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayGatewayEntity(self, entopts)
  }


  // Entity access: `client.AiGatewayLog().list()` / `client.AiGatewayLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGatewayLog(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayLogEntity(self, entopts)
  }


  // Entity access: `client.AiGatewayProviderConfig().list()` / `client.AiGatewayProviderConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiGatewayProviderConfig(entopts?: Record<string, any>) {
    const self = this
    return new AiGatewayProviderConfigEntity(self, entopts)
  }


  // Entity access: `client.AiSearchAccountSearch().list()` / `client.AiSearchAccountSearch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiSearchAccountSearch(entopts?: Record<string, any>) {
    const self = this
    return new AiSearchAccountSearchEntity(self, entopts)
  }


  // Entity access: `client.AiSearchInstance().list()` / `client.AiSearchInstance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiSearchInstance(entopts?: Record<string, any>) {
    const self = this
    return new AiSearchInstanceEntity(self, entopts)
  }


  // Entity access: `client.AiSearchInstancesItem().list()` / `client.AiSearchInstancesItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiSearchInstancesItem(entopts?: Record<string, any>) {
    const self = this
    return new AiSearchInstancesItemEntity(self, entopts)
  }


  // Entity access: `client.AiSearchInstancesJob().list()` / `client.AiSearchInstancesJob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiSearchInstancesJob(entopts?: Record<string, any>) {
    const self = this
    return new AiSearchInstancesJobEntity(self, entopts)
  }


  // Entity access: `client.AiSearchNamespace().list()` / `client.AiSearchNamespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiSearchNamespace(entopts?: Record<string, any>) {
    const self = this
    return new AiSearchNamespaceEntity(self, entopts)
  }


  // Entity access: `client.AiSearchToken().list()` / `client.AiSearchToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiSearchToken(entopts?: Record<string, any>) {
    const self = this
    return new AiSearchTokenEntity(self, entopts)
  }


  // Entity access: `client.AigBillingCreateTopup().list()` / `client.AigBillingCreateTopup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingCreateTopup(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingCreateTopupEntity(self, entopts)
  }


  // Entity access: `client.AigBillingDeleteSpendingLimit().list()` / `client.AigBillingDeleteSpendingLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingDeleteSpendingLimit(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingDeleteSpendingLimitEntity(self, entopts)
  }


  // Entity access: `client.AigBillingDeleteTopupConfig().list()` / `client.AigBillingDeleteTopupConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingDeleteTopupConfig(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingDeleteTopupConfigEntity(self, entopts)
  }


  // Entity access: `client.AigBillingGetCreditBalance().list()` / `client.AigBillingGetCreditBalance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingGetCreditBalance(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingGetCreditBalanceEntity(self, entopts)
  }


  // Entity access: `client.AigBillingGetInvoiceHistory().list()` / `client.AigBillingGetInvoiceHistory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingGetInvoiceHistory(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingGetInvoiceHistoryEntity(self, entopts)
  }


  // Entity access: `client.AigBillingGetInvoicePreview().list()` / `client.AigBillingGetInvoicePreview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingGetInvoicePreview(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingGetInvoicePreviewEntity(self, entopts)
  }


  // Entity access: `client.AigBillingGetSpendingLimit().list()` / `client.AigBillingGetSpendingLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingGetSpendingLimit(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingGetSpendingLimitEntity(self, entopts)
  }


  // Entity access: `client.AigBillingGetTopupConfig().list()` / `client.AigBillingGetTopupConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingGetTopupConfig(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingGetTopupConfigEntity(self, entopts)
  }


  // Entity access: `client.AigBillingGetTopupEligibility().list()` / `client.AigBillingGetTopupEligibility().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingGetTopupEligibility(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingGetTopupEligibilityEntity(self, entopts)
  }


  // Entity access: `client.AigBillingGetTopupLimit().list()` / `client.AigBillingGetTopupLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingGetTopupLimit(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingGetTopupLimitEntity(self, entopts)
  }


  // Entity access: `client.AigBillingGetUsageHistory().list()` / `client.AigBillingGetUsageHistory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingGetUsageHistory(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingGetUsageHistoryEntity(self, entopts)
  }


  // Entity access: `client.AigBillingSetSpendingLimit().list()` / `client.AigBillingSetSpendingLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingSetSpendingLimit(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingSetSpendingLimitEntity(self, entopts)
  }


  // Entity access: `client.AigBillingSetTopupConfig().list()` / `client.AigBillingSetTopupConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingSetTopupConfig(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingSetTopupConfigEntity(self, entopts)
  }


  // Entity access: `client.AigBillingTopupStatus().list()` / `client.AigBillingTopupStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AigBillingTopupStatus(entopts?: Record<string, any>) {
    const self = this
    return new AigBillingTopupStatusEntity(self, entopts)
  }


  // Entity access: `client.AutoRagJob().list()` / `client.AutoRagJob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AutoRagJob(entopts?: Record<string, any>) {
    const self = this
    return new AutoRagJobEntity(self, entopts)
  }


  // Entity access: `client.AutoRagRag().list()` / `client.AutoRagRag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AutoRagRag(entopts?: Record<string, any>) {
    const self = this
    return new AutoRagRagEntity(self, entopts)
  }


  // Entity access: `client.AutoRagRagSearch().list()` / `client.AutoRagRagSearch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AutoRagRagSearch(entopts?: Record<string, any>) {
    const self = this
    return new AutoRagRagSearchEntity(self, entopts)
  }


  // Entity access: `client.FinetuneAsset().list()` / `client.FinetuneAsset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FinetuneAsset(entopts?: Record<string, any>) {
    const self = this
    return new FinetuneAssetEntity(self, entopts)
  }


  // Entity access: `client.Memory().list()` / `client.Memory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Memory(entopts?: Record<string, any>) {
    const self = this
    return new MemoryEntity(self, entopts)
  }


  // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Namespace(entopts?: Record<string, any>) {
    const self = this
    return new NamespaceEntity(self, entopts)
  }


  // Entity access: `client.Vectorize().list()` / `client.Vectorize().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Vectorize(entopts?: Record<string, any>) {
    const self = this
    return new VectorizeEntity(self, entopts)
  }


  // Entity access: `client.VectorizeBetaDeprecated().list()` / `client.VectorizeBetaDeprecated().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VectorizeBetaDeprecated(entopts?: Record<string, any>) {
    const self = this
    return new VectorizeBetaDeprecatedEntity(self, entopts)
  }


  // Entity access: `client.WorkersAi().list()` / `client.WorkersAi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersAi(entopts?: Record<string, any>) {
    const self = this
    return new WorkersAiEntity(self, entopts)
  }


  // Entity access: `client.WorkersAiFinetune().list()` / `client.WorkersAiFinetune().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkersAiFinetune(entopts?: Record<string, any>) {
    const self = this
    return new WorkersAiFinetuneEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudflareAiSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudflareAiSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CloudflareAi' }
  }

  toString() {
    return 'CloudflareAi ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudflareAiSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CloudflareAiEntityBase,

  CloudflareAiSDK,
  SDK,
}


