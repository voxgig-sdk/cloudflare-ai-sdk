

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


describe('AutoRagRagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AutoRagRag()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'auto_rag_rag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"error":{"a":true,"h":"Error","n":"error","r":true,"t":"`$STRING`","key$":"error","index$":0},"job_id":{"a":true,"h":"Job Id","n":"job_id","r":true,"t":"`$STRING`","key$":"job_id","index$":1},"key":{"a":true,"h":"Key","n":"key","r":true,"t":"`$STRING`","key$":"key","index$":2}},"name":"auto_rag_rag","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/autorag/rags/{id}/files","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-rag","k":"param","n":"rag_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/autorag/rags/{id}/files","q":{"exist":["account_id","page","per_page","rag_id","search","status"]},"r":{"param":{"id":"rag_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"autorag"},{"lit":"rags"},{"var":"rag_id"},{"lit":"files"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/autorag/rags/{id}/sync","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-rag","k":"param","n":"rag_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/autorag/rags/{id}/sync","q":{"exist":["account_id","rag_id"]},"r":{"param":{"id":"rag_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"autorag"},{"lit":"rags"},{"var":"rag_id"},{"lit":"sync"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"auto_rag_rag","name__orig":"auto_rag_rag","Name":"AutoRagRag","name_":"auto_rag_rag","name-":"auto-rag-rag","NAME":"AUTO_RAG_RAG","index$":32}, {"active":true,"entity":"auto_rag_rag","key$":"BasicAutoRagRagFlow","kind":"basic","name":"BasicAutoRagRagFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01","rag_id":"rag01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"auto_rag_rag_ref01"}}],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"auto_rag_rag_ref01","srcdatavar":"auto_rag_rag_ref01_data","suffix":"_up0","textfield":"error"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-auto_rag_rag_ref01"}}],"v":[],"index$":1}]}, 'AutoRagRag', {"GET /accounts/{account_id}/autorag/rags/{id}/files":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"rag id","required":true,"schema":{"description":"rag id","type":"string","example":"my-rag","maxLength":32,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":2},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":50,"minimum":0},"index$":3},{"name":"search","in":"query","schema":{"type":"string"},"index$":4},{"name":"status","in":"query","schema":{"type":"string","enum":["completed","queued","running","error"]},"index$":5}]},"PATCH /accounts/{account_id}/autorag/rags/{id}/sync":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"rag id","required":true,"schema":{"description":"rag id","type":"string","example":"my-rag","maxLength":32,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let auto_rag_rag_ref01_data = Object.values(setup.data.existing.auto_rag_rag)[0] as any

    // LIST
    const auto_rag_rag_ref01_ent = client.AutoRagRag()
    const auto_rag_rag_ref01_match: any = {}
    auto_rag_rag_ref01_match['account_id'] = setup.idmap['account01']
    auto_rag_rag_ref01_match['rag_id'] = setup.idmap['rag01']

    const auto_rag_rag_ref01_list = (await auto_rag_rag_ref01_ent.list(auto_rag_rag_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const auto_rag_rag_ref01_data_up0: any = {}
    auto_rag_rag_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const auto_rag_rag_ref01_markdef_up0 = { name: 'error', value: 'Mark01-auto_rag_rag_ref01_' + setup.now }
    ;(auto_rag_rag_ref01_data_up0 as any)[auto_rag_rag_ref01_markdef_up0.name] = auto_rag_rag_ref01_markdef_up0.value

    const auto_rag_rag_ref01_resdata_up0 = (await auto_rag_rag_ref01_ent.update(auto_rag_rag_ref01_data_up0)).data()
    assert(null != auto_rag_rag_ref01_resdata_up0)

    assert((auto_rag_rag_ref01_resdata_up0 as any)[auto_rag_rag_ref01_markdef_up0.name] === auto_rag_rag_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/auto_rag_rag/AutoRagRagTestData.json')

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
    ['auto_rag_rag01','auto_rag_rag02','auto_rag_rag03','account01','account02','account03','rag01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_ENTID']
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
  
