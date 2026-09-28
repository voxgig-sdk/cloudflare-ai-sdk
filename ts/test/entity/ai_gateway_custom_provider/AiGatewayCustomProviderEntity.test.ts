

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


describe('AiGatewayCustomProviderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AiGatewayCustomProvider()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_gateway_custom_provider.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"base_url":{"a":true,"fo":"uri","h":"Base Url","n":"base_url","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"base_url","index$":0},"beta":{"a":true,"h":"Beta","n":"beta","r":false,"t":"`$BOOLEAN`","key$":"beta","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":2},"curl_example":{"a":true,"h":"Curl Example","n":"curl_example","r":false,"t":"`$STRING`","key$":"curl_example","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":4},"enable":{"a":true,"h":"Enable","n":"enable","r":false,"t":"`$BOOLEAN`","key$":"enable","index$":5},"headers":{"a":true,"h":"Headers","n":"headers","r":false,"sh":"JSON object of extra HTTP headers that AI Gateway sends to the provider.","t":"`$STRING`","key$":"headers","index$":6},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":7},"js_example":{"a":true,"h":"Js Example","n":"js_example","r":false,"t":"`$STRING`","key$":"js_example","index$":8},"link":{"a":true,"h":"Link","n":"link","r":false,"t":"`$STRING`","key$":"link","index$":9},"logo":{"a":true,"h":"Logo","n":"logo","r":false,"t":"`$STRING`","key$":"logo","index$":10},"modified_at":{"a":true,"fo":"date-time","h":"Modified At","n":"modified_at","r":true,"t":"`$STRING`","key$":"modified_at","index$":11},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":12},"position":{"a":true,"h":"Position","n":"position","r":false,"t":"`$INTEGER`","key$":"position","index$":13},"slug":{"a":true,"h":"Slug","n":"slug","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"slug","index$":14}},"id":{"field":"id","name":"id"},"name":"ai_gateway_custom_provider","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-gateway/custom-providers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-gateway/custom-providers","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"custom-providers"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/custom-providers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"beta","or":"beta","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"enable","or":"enable","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/custom-providers","q":{"exist":["account_id","beta","enable","page","per_page","search"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"custom-providers"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/custom-providers/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/custom-providers/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"custom-providers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/ai-gateway/custom-providers/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/ai-gateway/custom-providers/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"custom-providers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/ai-gateway/custom-providers/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/ai-gateway/custom-providers/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"custom-providers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"ai_gateway_custom_provider","name__orig":"ai_gateway_custom_provider","Name":"AiGatewayCustomProvider","name_":"ai_gateway_custom_provider","name-":"ai-gateway-custom-provider","NAME":"AI_GATEWAY_CUSTOM_PROVIDER","index$":3}, {"active":true,"entity":"ai_gateway_custom_provider","key$":"BasicAiGatewayCustomProviderFlow","kind":"basic","name":"BasicAiGatewayCustomProviderFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_gateway_custom_provider_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ai_gateway_custom_provider_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"ai_gateway_custom_provider_ref01","srcdatavar":"ai_gateway_custom_provider_ref01_data","suffix":"_up0","textfield":"base_url"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_gateway_custom_provider_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"ai_gateway_custom_provider_ref01","srcdatavar":"ai_gateway_custom_provider_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"ai_gateway_custom_provider01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_gateway_custom_provider_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"ai_gateway_custom_provider_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"ai_gateway_custom_provider01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"ai_gateway_custom_provider_ref01"}}],"index$":5}]}, 'AiGatewayCustomProvider', {"POST /accounts/{account_id}/ai-gateway/custom-providers":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"base_url":{"type":"string","format":"uri","key$":"base_url"},"beta":{"type":"boolean","key$":"beta"},"curl_example":{"type":"string","key$":"curl_example"},"description":{"type":"string","key$":"description"},"enable":{"type":"boolean","key$":"enable"},"headers":{"description":"JSON object of extra HTTP headers that AI Gateway sends to the provider. Values can contain credentials.","type":"string","maxLength":8192,"x-sensitive":true,"key$":"headers"},"js_example":{"type":"string","key$":"js_example"},"link":{"type":"string","key$":"link"},"name":{"type":"string","key$":"name"},"position":{"type":"integer","key$":"position"},"slug":{"type":"string","pattern":"^[a-zA-Z0-9_-]+$","key$":"slug"}},"required":["name","slug","base_url"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0}]},"GET /accounts/{account_id}/ai-gateway/custom-providers":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":100,"minimum":1},"index$":2},{"name":"beta","in":"query","schema":{"type":"boolean"},"index$":3},{"name":"enable","in":"query","schema":{"type":"boolean"},"index$":4},{"name":"search","in":"query","schema":{"description":"Search by id, name, slug","type":"string"},"index$":5}]},"GET /accounts/{account_id}/ai-gateway/custom-providers/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0},{"name":"id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"DELETE /accounts/{account_id}/ai-gateway/custom-providers/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0},{"name":"id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"PATCH /accounts/{account_id}/ai-gateway/custom-providers/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"base_url":{"type":"string","format":"uri","key$":"base_url"},"beta":{"type":"boolean","key$":"beta"},"curl_example":{"type":"string","key$":"curl_example"},"description":{"type":"string","key$":"description"},"enable":{"type":"boolean","key$":"enable"},"headers":{"description":"JSON object of extra HTTP headers that AI Gateway sends to the provider. Values can contain credentials.","type":"string","maxLength":8192,"x-sensitive":true,"key$":"headers"},"js_example":{"type":"string","key$":"js_example"},"link":{"type":"string","key$":"link"},"logo":{"type":"string","key$":"logo"},"name":{"type":"string","key$":"name"},"position":{"type":"integer","key$":"position"},"slug":{"type":"string","pattern":"^[a-zA-Z0-9_-]+$","key$":"slug"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0},{"name":"id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_gateway_custom_provider_ref01_ent = client.AiGatewayCustomProvider()
    let ai_gateway_custom_provider_ref01_data = setup.data.new.ai_gateway_custom_provider['ai_gateway_custom_provider_ref01']
    ai_gateway_custom_provider_ref01_data['account_id'] = setup.idmap['account01']

    ai_gateway_custom_provider_ref01_data = (await ai_gateway_custom_provider_ref01_ent.create(ai_gateway_custom_provider_ref01_data)).data()
    assert(null != ai_gateway_custom_provider_ref01_data.id)


    // LIST
    const ai_gateway_custom_provider_ref01_match: any = {}
    ai_gateway_custom_provider_ref01_match['account_id'] = setup.idmap['account01']

    const ai_gateway_custom_provider_ref01_list = (await ai_gateway_custom_provider_ref01_ent.list(ai_gateway_custom_provider_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(ai_gateway_custom_provider_ref01_list, { id: ai_gateway_custom_provider_ref01_data.id })))


    // UPDATE
    const ai_gateway_custom_provider_ref01_data_up0: any = {}
    ai_gateway_custom_provider_ref01_data_up0.id = ai_gateway_custom_provider_ref01_data.id
    ai_gateway_custom_provider_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const ai_gateway_custom_provider_ref01_markdef_up0 = { name: 'base_url', value: 'Mark01-ai_gateway_custom_provider_ref01_' + setup.now }
    ;(ai_gateway_custom_provider_ref01_data_up0 as any)[ai_gateway_custom_provider_ref01_markdef_up0.name] = ai_gateway_custom_provider_ref01_markdef_up0.value

    const ai_gateway_custom_provider_ref01_resdata_up0 = (await ai_gateway_custom_provider_ref01_ent.update(ai_gateway_custom_provider_ref01_data_up0)).data()
    assert(ai_gateway_custom_provider_ref01_resdata_up0.id === ai_gateway_custom_provider_ref01_data_up0.id)

    assert((ai_gateway_custom_provider_ref01_resdata_up0 as any)[ai_gateway_custom_provider_ref01_markdef_up0.name] === ai_gateway_custom_provider_ref01_markdef_up0.value)


    // LOAD
    const ai_gateway_custom_provider_ref01_match_dt0: any = {}
    ai_gateway_custom_provider_ref01_match_dt0.id = ai_gateway_custom_provider_ref01_data.id
    const ai_gateway_custom_provider_ref01_data_dt0 = (await ai_gateway_custom_provider_ref01_ent.load(ai_gateway_custom_provider_ref01_match_dt0)).data()
    assert(ai_gateway_custom_provider_ref01_data_dt0.id === ai_gateway_custom_provider_ref01_data.id)


    // REMOVE
    const ai_gateway_custom_provider_ref01_match_rm0: any = { id: ai_gateway_custom_provider_ref01_data.id }
    await ai_gateway_custom_provider_ref01_ent.remove(ai_gateway_custom_provider_ref01_match_rm0)
  

    // LIST
    const ai_gateway_custom_provider_ref01_match_rt0: any = {}
    ai_gateway_custom_provider_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const ai_gateway_custom_provider_ref01_list_rt0 = (await ai_gateway_custom_provider_ref01_ent.list(ai_gateway_custom_provider_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(ai_gateway_custom_provider_ref01_list_rt0, { id: ai_gateway_custom_provider_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_gateway_custom_provider/AiGatewayCustomProviderTestData.json')

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
    ['ai_gateway_custom_provider01','ai_gateway_custom_provider02','ai_gateway_custom_provider03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_PROVIDER_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_PROVIDER_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_PROVIDER_ENTID']
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
  
