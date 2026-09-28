

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


describe('NamespaceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.Namespace()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'namespace.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"Always empty for a successful response.","t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"sh":"Informational, non-error messages, if any.","t":"`$ARRAY`","key$":"messages","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Namespace name.","t":"`$STRING`","key$":"name","index$":3},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":4},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":false,"t":"`$OBJECT`","key$":"result_info","index$":5},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Always true for a successful response.","t":"`$BOOLEAN`","key$":"success","index$":6}},"id":{"field":"id","name":"id"},"name":"namespace","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/agent-memory/namespaces","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/agent-memory/namespaces","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/agent-memory/namespaces","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"asc","k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"id","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/agent-memory/namespaces","q":{"exist":["account_id","cursor","direction","order","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"id","or":"namespace_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}","q":{"exist":["account_id","id"]},"r":{"param":{"namespace_name":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"id","or":"namespace_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}","q":{"exist":["account_id","id"]},"r":{"param":{"namespace_name":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"namespace","name__orig":"namespace","Name":"Namespace","name_":"namespace","name-":"namespace","NAME":"NAMESPACE","index$":36}, {"active":true,"entity":"namespace","key$":"BasicNamespaceFlow","kind":"basic","name":"BasicNamespaceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"namespace_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"namespace_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"namespace_ref01","srcdatavar":"namespace_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"namespace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-namespace_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"namespace_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"namespace01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"namespace_ref01"}}],"index$":4}]}, 'Namespace', {"POST /accounts/{account_id}/agent-memory/namespaces":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$","key$":"name"}},"required":["name"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0}]},"GET /accounts/{account_id}/agent-memory/namespaces":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"per_page","in":"query","schema":{"description":"Number of results per page.","type":"integer","example":20,"maximum":1000,"minimum":1},"index$":1},{"name":"order","in":"query","schema":{"description":"Field to order the results by.","type":"string","example":"id","enum":["id","name"]},"index$":2},{"name":"direction","in":"query","schema":{"description":"Direction to sort the results in.","type":"string","example":"asc","enum":["asc","desc"]},"index$":3},{"name":"cursor","in":"query","schema":{"description":"Pagination cursor returned by a previous list response.","type":"string"},"index$":4}]},"GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1}]},"DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const namespace_ref01_ent = client.Namespace()
    let namespace_ref01_data = setup.data.new.namespace['namespace_ref01']
    namespace_ref01_data['account_id'] = setup.idmap['account01']

    namespace_ref01_data = (await namespace_ref01_ent.create(namespace_ref01_data)).data()
    assert(null != namespace_ref01_data.id)


    // LIST
    const namespace_ref01_match: any = {}
    namespace_ref01_match['account_id'] = setup.idmap['account01']

    const namespace_ref01_list = (await namespace_ref01_ent.list(namespace_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(namespace_ref01_list, { id: namespace_ref01_data.id })))


    // LOAD
    const namespace_ref01_match_dt0: any = {}
    namespace_ref01_match_dt0.id = namespace_ref01_data.id
    const namespace_ref01_data_dt0 = (await namespace_ref01_ent.load(namespace_ref01_match_dt0)).data()
    assert(namespace_ref01_data_dt0.id === namespace_ref01_data.id)


    // REMOVE
    const namespace_ref01_match_rm0: any = { id: namespace_ref01_data.id }
    await namespace_ref01_ent.remove(namespace_ref01_match_rm0)
  

    // LIST
    const namespace_ref01_match_rt0: any = {}
    namespace_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const namespace_ref01_list_rt0 = (await namespace_ref01_ent.list(namespace_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(namespace_ref01_list_rt0, { id: namespace_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/namespace/NamespaceTestData.json')

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
    ['namespace01','namespace02','namespace03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_NAMESPACE_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_NAMESPACE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_NAMESPACE_ENTID']
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
  
