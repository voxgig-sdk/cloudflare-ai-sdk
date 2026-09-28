

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


describe('AutoRagJobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AutoRagJob()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'auto_rag_job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$NUMBER`","key$":"created_at","index$":0},"end_reason":{"a":true,"h":"End Reason","n":"end_reason","r":false,"t":"`$STRING`","key$":"end_reason","index$":1},"ended_at":{"a":true,"h":"Ended At","n":"ended_at","r":false,"t":"`$STRING`","key$":"ended_at","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":3},"last_seen_at":{"a":true,"h":"Last Seen At","n":"last_seen_at","r":false,"t":"`$STRING`","key$":"last_seen_at","index$":4},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":5},"message_type":{"a":true,"h":"Message Type","n":"message_type","r":true,"t":"`$INTEGER`","key$":"message_type","index$":6},"source":{"a":true,"h":"Source","n":"source","r":true,"t":"`$STRING`","key$":"source","index$":7},"started_at":{"a":true,"h":"Started At","n":"started_at","r":false,"t":"`$STRING`","key$":"started_at","index$":8}},"id":{"field":"id","name":"id"},"name":"auto_rag_job","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"job_id","or":"job_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-rag","k":"param","n":"rag_id","or":"id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs","q":{"exist":["account_id","job_id","page","per_page","rag_id"]},"r":{"param":{"id":"rag_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"autorag"},{"lit":"rags"},{"var":"rag_id"},{"lit":"jobs"},{"var":"job_id"},{"lit":"logs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/autorag/rags/{id}/jobs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-rag","k":"param","n":"rag_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/autorag/rags/{id}/jobs","q":{"exist":["account_id","page","per_page","rag_id"]},"r":{"param":{"id":"rag_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"autorag"},{"lit":"rags"},{"var":"rag_id"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"job_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-rag","k":"param","n":"rag_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}","q":{"exist":["account_id","id","rag_id"]},"r":{"param":{"id":"rag_id","job_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"autorag"},{"lit":"rags"},{"var":"rag_id"},{"lit":"jobs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.account"]]},"key$":"auto_rag_job","name__orig":"auto_rag_job","Name":"AutoRagJob","name_":"auto_rag_job","name-":"auto-rag-job","NAME":"AUTO_RAG_JOB","index$":31}, {"active":true,"entity":"auto_rag_job","key$":"BasicAutoRagJobFlow","kind":"basic","name":"BasicAutoRagJobFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01","rag_id":"rag01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"auto_rag_job_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"auto_rag_job_ref01","srcdatavar":"auto_rag_job_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"auto_rag_job01","rag_id":"rag01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-auto_rag_job_ref01"}}],"index$":1}]}, 'AutoRagJob', {"GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"rag id","required":true,"schema":{"description":"rag id","type":"string","example":"my-rag","maxLength":32,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$"},"index$":0},{"name":"job_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":3},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":500,"minimum":0},"index$":4}]},"GET /accounts/{account_id}/autorag/rags/{id}/jobs":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"rag id","required":true,"schema":{"description":"rag id","type":"string","example":"my-rag","maxLength":32,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":2},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":50,"minimum":0},"index$":3}]},"GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"rag id","required":true,"schema":{"description":"rag id","type":"string","example":"my-rag","maxLength":32,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$"},"index$":0},{"name":"job_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let auto_rag_job_ref01_data = Object.values(setup.data.existing.auto_rag_job)[0] as any

    // LIST
    const auto_rag_job_ref01_ent = client.AutoRagJob()
    const auto_rag_job_ref01_match: any = {}
    auto_rag_job_ref01_match['account_id'] = setup.idmap['account01']
    auto_rag_job_ref01_match['rag_id'] = setup.idmap['rag01']

    const auto_rag_job_ref01_list = (await auto_rag_job_ref01_ent.list(auto_rag_job_ref01_match)).map((e: any) => e.data())


    // LOAD
    const auto_rag_job_ref01_match_dt0: any = {}
    auto_rag_job_ref01_match_dt0.id = auto_rag_job_ref01_data.id
    const auto_rag_job_ref01_data_dt0 = (await auto_rag_job_ref01_ent.load(auto_rag_job_ref01_match_dt0)).data()
    assert(auto_rag_job_ref01_data_dt0.id === auto_rag_job_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/auto_rag_job/AutoRagJobTestData.json')

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
    ['auto_rag_job01','auto_rag_job02','auto_rag_job03','account01','account02','account03','rag01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AUTO_RAG_JOB_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AUTO_RAG_JOB_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AUTO_RAG_JOB_ENTID']
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
  
