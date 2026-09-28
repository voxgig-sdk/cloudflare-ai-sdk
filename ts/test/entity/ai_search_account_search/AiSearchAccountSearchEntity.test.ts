

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


describe('AiSearchAccountSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AiSearchAccountSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_search_account_search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ai_search_options":{"a":true,"h":"Ai Search Options","n":"ai_search_options","r":true,"t":"`$OBJECT`","union":{"branches":3,"count":1,"depth":3},"key$":"ai_search_options","index$":0},"choices":{"a":true,"h":"Choices","n":"choices","r":true,"t":"`$ARRAY`","union":{"branches":3,"count":2,"depth":8},"key$":"choices","index$":1},"chunks":{"a":true,"h":"Chunks","n":"chunks","r":true,"t":"`$ARRAY`","key$":"chunks","index$":2},"errors":{"a":true,"h":"Errors","n":"errors","r":false,"t":"`$ARRAY`","key$":"errors","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"messages":{"a":true,"h":"Messages","n":"messages","op":{"create":{"req":true,"type":"`$ARRAY`"}},"r":false,"sh":"OpenAI-compatible message array.","t":"`$ARRAY`","union":{"branches":3,"count":2,"depth":6},"key$":"messages","index$":5},"model":{"a":true,"h":"Model","n":"model","r":false,"sh":"A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API.","t":"`$STRING`","key$":"model","index$":6},"object":{"a":true,"h":"Object","n":"object","r":false,"t":"`$STRING`","key$":"object","index$":7},"query":{"a":true,"h":"Query","n":"query","r":false,"sh":"A simple text query string.","t":"`$STRING`","key$":"query","index$":8},"query_kind":{"a":true,"h":"Query Kind","n":"query_kind","r":true,"t":"`$STRING`","key$":"query_kind","index$":9},"search_query":{"a":true,"h":"Search Query","n":"search_query","r":false,"t":"`$STRING`","key$":"search_query","index$":10},"stream":{"a":true,"h":"Stream","n":"stream","r":false,"t":"`$BOOLEAN`","key$":"stream","index$":11}},"id":{"field":"id","name":"id"},"name":"ai_search_account_search","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-search/namespaces/{name}/search","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-namespace","k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-search/namespaces/{name}/search","q":{"exist":["account_id","name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"name"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-search/namespaces/{name}/chat/completions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-search/namespaces/{name}/chat/completions","q":{"exist":["account_id","namespace_id"]},"r":{"param":{"name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"chat"},{"lit":"completions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"ai_search_account_search","name__orig":"ai_search_account_search","Name":"AiSearchAccountSearch","name_":"ai_search_account_search","name-":"ai-search-account-search","NAME":"AI_SEARCH_ACCOUNT_SEARCH","index$":11}, {"active":true,"entity":"ai_search_account_search","key$":"BasicAiSearchAccountSearchFlow","kind":"basic","name":"BasicAiSearchAccountSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_search_account_search_ref01"},"m":{"account_id":"account01","namespace_id":"namespace01"},"o":"create","s":[],"v":[],"index$":0}]}, 'AiSearchAccountSearch', {"POST /accounts/{account_id}/ai-search/namespaces/{name}/search":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"ai_search_options":{"type":"object","properties":{"cache":{"type":"object","properties":{"cache_threshold":{},"enabled":{}}},"custom_metadata":{"description":"Metadata added to AI Gateway logs for requests triggered by this operation. Accepts up to 2 string, number, or boolean entries. Keys 'ai-search', 'task', 'origin', and keys beginning with 'cf.' are reserved.","type":"object","example":{"test":true,"user_id":"user-123"},"additionalProperties":{"anyOf":[]},"maxProperties":2},"instance_ids":{"type":"array","items":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","type":"string","x-auditable":true},"minItems":1},"query_rewrite":{"type":"object","properties":{"enabled":{},"model":{},"rewrite_prompt":{}}},"reranking":{"type":"object","properties":{"enabled":{},"match_threshold":{},"model":{}}},"retrieval":{"type":"object","properties":{"boost_by":{},"context_expansion":{},"filters":{},"fusion_method":{},"keyword_match_mode":{},"match_threshold":{},"max_num_results":{},"retrieval_type":{},"return_on_failure":{}}}},"required":["instance_ids"],"key$":"ai_search_options"},"messages":{"description":"OpenAI-compatible message array. For multimodal queries, set the last user message's `content` to an array of typed parts: `[{type:'text', text:'…'}, {type:'image_url', image_url:{url:'…'}}]`. Image inputs require the RAG's embedding_model to declare 'image' in supported_modalities.","type":"array","items":{"additionalProperties":true,"properties":{"content":{"anyOf":[]},"role":{"type":"string","enum":[]}},"required":["role","content"],"type":"object"},"minItems":1,"key$":"messages"},"query":{"description":"A simple text query string. Alternative to 'messages' — provide either this or 'messages', not both.","minLength":1,"type":"string","key$":"query"}},"required":["ai_search_options"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":0},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":1}]},"POST /accounts/{account_id}/ai-search/namespaces/{name}/chat/completions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"ai_search_options":{"type":"object","properties":{"cache":{"type":"object","properties":{"cache_threshold":{},"enabled":{}}},"custom_metadata":{"description":"Metadata added to AI Gateway logs for requests triggered by this operation. Accepts up to 2 string, number, or boolean entries. Keys 'ai-search', 'task', 'origin', and keys beginning with 'cf.' are reserved.","type":"object","example":{"test":true,"user_id":"user-123"},"additionalProperties":{"anyOf":[]},"maxProperties":2},"instance_ids":{"type":"array","items":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","type":"string","x-auditable":true},"minItems":1},"query_rewrite":{"type":"object","properties":{"enabled":{},"model":{},"rewrite_prompt":{}}},"reranking":{"type":"object","properties":{"enabled":{},"match_threshold":{},"model":{}}},"retrieval":{"type":"object","properties":{"boost_by":{},"context_expansion":{},"filters":{},"fusion_method":{},"keyword_match_mode":{},"match_threshold":{},"max_num_results":{},"retrieval_type":{},"return_on_failure":{}}}},"required":["instance_ids"],"key$":"ai_search_options"},"messages":{"type":"array","items":{"additionalProperties":true,"properties":{"content":{"anyOf":[]},"role":{"type":"string","enum":[]}},"required":["role","content"],"type":"object"},"minItems":1,"key$":"messages"},"model":{"description":"A Workers AI model ID or an AI Gateway model ID compatible with the OpenAI Chat Completions API. An empty string uses the configured or default model.","type":"string","key$":"model"},"stream":{"type":"boolean","key$":"stream"}},"additionalProperties":true,"required":["messages","ai_search_options"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":0},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_search_account_search_ref01_ent = client.AiSearchAccountSearch()
    let ai_search_account_search_ref01_data = setup.data.new.ai_search_account_search['ai_search_account_search_ref01']
    ai_search_account_search_ref01_data['account_id'] = setup.idmap['account01']
    ai_search_account_search_ref01_data['namespace_id'] = setup.idmap['namespace01']

    ai_search_account_search_ref01_data = (await ai_search_account_search_ref01_ent.create(ai_search_account_search_ref01_data)).data()
    assert(null != ai_search_account_search_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_search_account_search/AiSearchAccountSearchTestData.json')

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
    ['ai_search_account_search01','ai_search_account_search02','ai_search_account_search03','account01','account02','account03','namespace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AI_SEARCH_ACCOUNT_SEARCH_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AI_SEARCH_ACCOUNT_SEARCH_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AI_SEARCH_ACCOUNT_SEARCH_ENTID']
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
  
