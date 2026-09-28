

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


describe('AutoRagRagSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AutoRagRagSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'auto_rag_rag_search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$ARRAY`","key$":"data","index$":0},"filters":{"a":true,"h":"Filters","n":"filters","r":false,"t":"`$ANY`","union":{"branches":3,"count":3,"depth":7},"key$":"filters","index$":1},"has_more":{"a":true,"h":"Has More","n":"has_more","r":false,"t":"`$BOOLEAN`","key$":"has_more","index$":2},"max_num_results":{"a":true,"h":"Max Num Results","n":"max_num_results","r":false,"t":"`$INTEGER`","key$":"max_num_results","index$":3},"model":{"a":true,"h":"Model","n":"model","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"model","index$":4},"next_page":{"a":true,"h":"Next Page","n":"next_page","r":false,"t":"`$STRING`","key$":"next_page","index$":5},"object":{"a":true,"h":"Object","n":"object","r":false,"t":"`$STRING`","key$":"object","index$":6},"query":{"a":true,"h":"Query","n":"query","r":true,"t":"`$STRING`","key$":"query","index$":7},"ranking_options":{"a":true,"h":"Ranking Options","n":"ranking_options","r":false,"t":"`$OBJECT`","key$":"ranking_options","index$":8},"reranking":{"a":true,"h":"Reranking","n":"reranking","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"reranking","index$":9},"response":{"a":true,"h":"Response","n":"response","r":true,"t":"`$STRING`","key$":"response","index$":10},"rewrite_query":{"a":true,"h":"Rewrite Query","n":"rewrite_query","r":false,"t":"`$BOOLEAN`","key$":"rewrite_query","index$":11},"search_query":{"a":true,"h":"Search Query","n":"search_query","r":true,"t":"`$STRING`","key$":"search_query","index$":12},"stream":{"a":true,"h":"Stream","n":"stream","r":false,"t":"`$BOOLEAN`","key$":"stream","index$":13},"system_prompt":{"a":true,"h":"System Prompt","n":"system_prompt","r":false,"t":"`$STRING`","key$":"system_prompt","index$":14}},"name":"auto_rag_rag_search","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/autorag/rags/{id}/ai-search","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-rag","k":"param","n":"rag_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/autorag/rags/{id}/ai-search","q":{"exist":["account_id","rag_id"]},"r":{"param":{"id":"rag_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"autorag"},{"lit":"rags"},{"var":"rag_id"},{"lit":"ai-search"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/autorag/rags/{id}/search","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-rag","k":"param","n":"rag_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/autorag/rags/{id}/search","q":{"exist":["account_id","rag_id"]},"r":{"param":{"id":"rag_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"autorag"},{"lit":"rags"},{"var":"rag_id"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"auto_rag_rag_search","name__orig":"auto_rag_rag_search","Name":"AutoRagRagSearch","name_":"auto_rag_rag_search","name-":"auto-rag-rag-search","NAME":"AUTO_RAG_RAG_SEARCH","index$":33}, {"active":true,"entity":"auto_rag_rag_search","key$":"BasicAutoRagRagSearchFlow","kind":"basic","name":"BasicAutoRagRagSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"auto_rag_rag_search_ref01"},"m":{"account_id":"account01","rag_id":"rag01"},"o":"create","s":[],"v":[],"index$":0}]}, 'AutoRagRagSearch', {"POST /accounts/{account_id}/autorag/rags/{id}/ai-search":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"filters":{"anyOf":[{"properties":{"key":{},"type":{},"value":{}},"required":["key","type","value"],"type":"object"},{"properties":{"filters":{},"type":{}},"required":["type","filters"],"type":"object"}],"key$":"filters"},"max_num_results":{"type":"integer","default":10,"maximum":50,"minimum":1,"key$":"max_num_results"},"model":{"anyOf":[{"enum":["@cf/meta/llama-3.3-70b-instruct-fp8-fast","@cf/meta/llama-3.1-8b-instruct-fast","@cf/meta/llama-3.1-8b-instruct-fp8","@cf/meta/llama-4-scout-17b-16e-instruct","@cf/qwen/qwen3-30b-a3b-fp8","@cf/deepseek-ai/deepseek-r1-distill-qwen-32b","@cf/moonshotai/kimi-k2-instruct","anthropic/claude-3-7-sonnet","anthropic/claude-sonnet-4","anthropic/claude-opus-4","anthropic/claude-3-5-haiku","cerebras/qwen-3-235b-a22b-instruct","cerebras/qwen-3-235b-a22b-thinking","cerebras/llama-3.3-70b","cerebras/llama-4-maverick-17b-128e-instruct","cerebras/llama-4-scout-17b-16e-instruct","cerebras/gpt-oss-120b","google-ai-studio/gemini-2.5-flash","google-ai-studio/gemini-2.5-pro","grok/grok-4","groq/llama-3.3-70b-versatile","groq/llama-3.1-8b-instant","openai/gpt-5","openai/gpt-5-mini","openai/gpt-5-nano"],"type":"string"},{"enum":[""],"type":"string"}],"key$":"model"},"query":{"type":"string","key$":"query"},"ranking_options":{"type":"object","default":{},"properties":{"ranker":{"type":"string"},"score_threshold":{"type":"number","default":0.4,"maximum":1,"minimum":0}},"key$":"ranking_options"},"reranking":{"type":"object","properties":{"enabled":{"type":"boolean","default":false},"model":{"anyOf":[{},{}]}},"key$":"reranking"},"rewrite_query":{"type":"boolean","default":false,"key$":"rewrite_query"},"stream":{"type":"boolean","default":false,"key$":"stream"},"system_prompt":{"type":"string","key$":"system_prompt"}},"required":["query"],"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"rag id","required":true,"schema":{"description":"rag id","type":"string","example":"my-rag","maxLength":32,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1}]},"POST /accounts/{account_id}/autorag/rags/{id}/search":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"filters":{"anyOf":[{"properties":{"key":{},"type":{},"value":{}},"required":["key","type","value"],"type":"object"},{"properties":{"filters":{},"type":{}},"required":["type","filters"],"type":"object"}],"key$":"filters"},"max_num_results":{"type":"integer","default":10,"maximum":50,"minimum":1,"key$":"max_num_results"},"query":{"type":"string","key$":"query"},"ranking_options":{"type":"object","default":{},"properties":{"ranker":{"type":"string"},"score_threshold":{"type":"number","default":0.4,"maximum":1,"minimum":0}},"key$":"ranking_options"},"reranking":{"type":"object","properties":{"enabled":{"type":"boolean","default":false},"model":{"anyOf":[{},{}]}},"key$":"reranking"},"rewrite_query":{"type":"boolean","default":false,"key$":"rewrite_query"}},"required":["query"],"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"rag id","required":true,"schema":{"description":"rag id","type":"string","example":"my-rag","maxLength":32,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const auto_rag_rag_search_ref01_ent = client.AutoRagRagSearch()
    let auto_rag_rag_search_ref01_data = setup.data.new.auto_rag_rag_search['auto_rag_rag_search_ref01']
    auto_rag_rag_search_ref01_data['account_id'] = setup.idmap['account01']
    auto_rag_rag_search_ref01_data['rag_id'] = setup.idmap['rag01']

    auto_rag_rag_search_ref01_data = (await auto_rag_rag_search_ref01_ent.create(auto_rag_rag_search_ref01_data)).data()
    assert(null != auto_rag_rag_search_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/auto_rag_rag_search/AutoRagRagSearchTestData.json')

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
    ['auto_rag_rag_search01','auto_rag_rag_search02','auto_rag_rag_search03','account01','account02','account03','rag01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_SEARCH_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_SEARCH_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AUTO_RAG_RAG_SEARCH_ENTID']
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
  
