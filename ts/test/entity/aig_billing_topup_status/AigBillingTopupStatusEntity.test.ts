

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


describe('AigBillingTopupStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AigBillingTopupStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'aig_billing_topup_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"payment_intent_id":{"a":true,"h":"Payment Intent Id","n":"payment_intent_id","r":true,"sh":"Stripe invoice ID to check status for.","t":"`$STRING`","key$":"payment_intent_id","index$":2},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":3},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":true,"t":"`$OBJECT`","key$":"result_info","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":5}},"name":"aig_billing_topup_status","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-gateway/billing/topup/status","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-gateway/billing/topup/status","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"billing"},{"lit":"topup"},{"lit":"status"}],"t":{"req":{"payment_intent_id":"`reqdata.payment_intent_id`"},"res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"aig_billing_topup_status","name__orig":"aig_billing_topup_status","Name":"AigBillingTopupStatus","name_":"aig_billing_topup_status","name-":"aig-billing-topup-status","NAME":"AIG_BILLING_TOPUP_STATUS","index$":30}, {"active":true,"entity":"aig_billing_topup_status","key$":"BasicAigBillingTopupStatusFlow","kind":"basic","name":"BasicAigBillingTopupStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"aig_billing_topup_status_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'AigBillingTopupStatus', {"POST /accounts/{account_id}/ai-gateway/billing/topup/status":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"payment_intent_id":{"description":"Stripe invoice ID to check status for.","type":"string","example":"in_1abc","key$":"payment_intent_id"}},"additionalProperties":false,"required":["payment_intent_id"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare account ID.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const aig_billing_topup_status_ref01_ent = client.AigBillingTopupStatus()
    let aig_billing_topup_status_ref01_data = setup.data.new.aig_billing_topup_status['aig_billing_topup_status_ref01']
    aig_billing_topup_status_ref01_data['account_id'] = setup.idmap['account01']

    aig_billing_topup_status_ref01_data = (await aig_billing_topup_status_ref01_ent.create(aig_billing_topup_status_ref01_data)).data()
    assert(null != aig_billing_topup_status_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/aig_billing_topup_status/AigBillingTopupStatusTestData.json')

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
    ['aig_billing_topup_status01','aig_billing_topup_status02','aig_billing_topup_status03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AIG_BILLING_TOPUP_STATUS_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AIG_BILLING_TOPUP_STATUS_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AIG_BILLING_TOPUP_STATUS_ENTID']
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
  
