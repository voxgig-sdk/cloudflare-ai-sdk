

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


describe('AccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.Account()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"account","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/logging-state","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/logging-state","q":{"$action":"ai_gateway_logging_state","exist":["id"]},"r":{"param":{"account_id":"id"}},"s":[{"lit":"accounts"},{"var":"id"},{"lit":"ai-gateway"},{"lit":"logging-state"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/ai-gateway/logging-state","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/ai-gateway/logging-state","q":{"$action":"ai_gateway_logging_state","exist":["id"]},"r":{"param":{"account_id":"id"}},"s":[{"lit":"accounts"},{"var":"id"},{"lit":"ai-gateway"},{"lit":"logging-state"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"account","name__orig":"account","Name":"Account","name_":"account","name-":"account","NAME":"ACCOUNT","index$":0}, {"active":true,"entity":"account","key$":"BasicAccountFlow","kind":"basic","name":"BasicAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"account_ref01","srcdatavar":"account_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"account_ref01","srcdatavar":"account_ref01_data","suffix":"_dt0"},"m":{"id":"account01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_ref01"}}],"index$":1}]}, 'Account', {"GET /accounts/{account_id}/ai-gateway/logging-state":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0}]},"PATCH /accounts/{account_id}/ai-gateway/logging-state":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let account_ref01_data = Object.values(setup.data.existing.account)[0] as any

    // UPDATE
    const account_ref01_ent = client.Account()
    const account_ref01_data_up0: any = {}
    account_ref01_data_up0.id = account_ref01_data.id

    const account_ref01_resdata_up0 = (await account_ref01_ent.update(account_ref01_data_up0)).data()
    assert(account_ref01_resdata_up0.id === account_ref01_data_up0.id)


    // LOAD
    const account_ref01_match_dt0: any = {}
    account_ref01_match_dt0.id = account_ref01_data.id
    const account_ref01_data_dt0 = (await account_ref01_ent.load(account_ref01_match_dt0)).data()
    assert(account_ref01_data_dt0.id === account_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/account/AccountTestData.json')

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
    ['account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_ACCOUNT_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_ACCOUNT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_ACCOUNT_ENTID']
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
  
