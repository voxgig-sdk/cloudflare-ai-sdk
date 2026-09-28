

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareAiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AigBillingSetSpendingLimitEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AigBillingSetSpendingLimit()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'aig_billing_set_spending_limit.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"Spending limit amount in cents (min 100).","t":"`$INTEGER`","key$":"amount","index$":0},"duration":{"a":true,"h":"Duration","n":"duration","r":true,"sh":"Spending limit duration.","t":"`$STRING`","key$":"duration","index$":1},"strategy":{"a":true,"h":"Strategy","n":"strategy","r":true,"sh":"Spending limit strategy.","t":"`$STRING`","key$":"strategy","index$":2}},"name":"aig_billing_set_spending_limit","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-gateway/billing/spending-limit","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-gateway/billing/spending-limit","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"billing"},{"lit":"spending-limit"}],"t":{"req":{"amount":"`reqdata.amount`","duration":"`reqdata.duration`","strategy":"`reqdata.strategy`"},"res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"aig_billing_set_spending_limit","name__orig":"aig_billing_set_spending_limit","Name":"AigBillingSetSpendingLimit","name_":"aig_billing_set_spending_limit","name-":"aig-billing-set-spending-limit","NAME":"AIG_BILLING_SET_SPENDING_LIMIT","index$":28}, {"active":true,"entity":"aig_billing_set_spending_limit","key$":"BasicAigBillingSetSpendingLimitFlow","kind":"basic","name":"BasicAigBillingSetSpendingLimitFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"aig_billing_set_spending_limit_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'AigBillingSetSpendingLimit', {"POST /accounts/{account_id}/ai-gateway/billing/spending-limit":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"amount":{"description":"Spending limit amount in cents (min 100).","type":"integer","example":10000,"minimum":100,"key$":"amount"},"duration":{"description":"Spending limit duration.","type":"string","example":"monthly","enum":["daily","weekly","monthly"],"key$":"duration"},"strategy":{"description":"Spending limit strategy.","type":"string","example":"fixed","enum":["fixed","sliding"],"key$":"strategy"}},"additionalProperties":false,"required":["amount","strategy","duration"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const aig_billing_set_spending_limit_ref01_ent = client.AigBillingSetSpendingLimit()
    let aig_billing_set_spending_limit_ref01_data = setup.data.new.aig_billing_set_spending_limit['aig_billing_set_spending_limit_ref01']
    aig_billing_set_spending_limit_ref01_data['account_id'] = setup.idmap['account01']

    aig_billing_set_spending_limit_ref01_data = (await aig_billing_set_spending_limit_ref01_ent.create(aig_billing_set_spending_limit_ref01_data)).data()
    assert(null != aig_billing_set_spending_limit_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/aig_billing_set_spending_limit/AigBillingSetSpendingLimitTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareAiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['aig_billing_set_spending_limit01','aig_billing_set_spending_limit02','aig_billing_set_spending_limit03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AIG_BILLING_SET_SPENDING_LIMIT_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AIG_BILLING_SET_SPENDING_LIMIT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AIG_BILLING_SET_SPENDING_LIMIT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareAiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CLOUDFLARE_AI_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLOUDFLARE_AI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
