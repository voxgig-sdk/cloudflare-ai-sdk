

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


describe('AiSearchNamespaceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AiSearchNamespace()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_search_namespace.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"ro":true,"t":"`$STRING`","key$":"created_at","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Optional description for the namespace.","t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":3},"new_namespace":{"a":true,"h":"New Namespace","n":"new_namespace","r":true,"sh":"Target namespace to move the instance into.","t":"`$STRING`","key$":"new_namespace","index$":4},"public_endpoint_id":{"a":true,"h":"Public Endpoint Id","n":"public_endpoint_id","r":false,"ro":true,"t":"`$STRING`","key$":"public_endpoint_id","index$":5},"public_endpoint_params":{"a":true,"h":"Public Endpoint Params","n":"public_endpoint_params","r":false,"t":"`$OBJECT`","key$":"public_endpoint_params","index$":6}},"id":{"field":"id","name":"id"},"name":"ai_search_namespace","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-search/namespaces","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-search/namespaces","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"prod","k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces","q":{"exist":["account_id","page","per_page","search"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"production","k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces/{name}","q":{"exist":["account_id","id"]},"r":{"param":{"name":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-blog","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"production","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}","q":{"exist":["account_id","id","namespace_id"]},"r":{"param":{"name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/ai-search/namespaces/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"production","k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/ai-search/namespaces/{name}","q":{"exist":["account_id","id"]},"r":{"param":{"name":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/ai-search/namespaces/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"production","k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/ai-search/namespaces/{name}","q":{"exist":["account_id","id"]},"r":{"param":{"name":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.account"]]},"key$":"ai_search_namespace","name__orig":"ai_search_namespace","Name":"AiSearchNamespace","name_":"ai_search_namespace","name-":"ai-search-namespace","NAME":"AI_SEARCH_NAMESPACE","index$":15}, {"active":true,"entity":"ai_search_namespace","key$":"BasicAiSearchNamespaceFlow","kind":"basic","name":"BasicAiSearchNamespaceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_search_namespace_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ai_search_namespace_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"ai_search_namespace_ref01","srcdatavar":"ai_search_namespace_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_search_namespace_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"ai_search_namespace_ref01","srcdatavar":"ai_search_namespace_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"ai_search_namespace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_search_namespace_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"ai_search_namespace_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"ai_search_namespace01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"ai_search_namespace_ref01"}}],"index$":5}]}, 'AiSearchNamespace', {"POST /accounts/{account_id}/ai-search/namespaces":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"description":"Optional description for the namespace. Max 256 characters.","type":"string","example":"Production environment","maxLength":256,"nullable":true,"key$":"description"},"name":{"type":"string","pattern":"^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$","key$":"name"},"public_endpoint_params":{"type":"object","properties":{"authorized_hosts":{"type":"array","items":{"type":"string"}},"chat_completions_endpoint":{"type":"object","properties":{"disabled":{}}},"custom_domains":{"description":"Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).","type":"array","items":{"description":"Custom domain hostname (must be a Verified zone on this account).","example":"search.example.com","maxLength":253,"minLength":1,"type":"string"},"maxItems":1,"nullable":true,"x-auditable":true},"default_domain_enabled":{"description":"When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.","type":"boolean","default":true,"x-auditable":true},"enabled":{"type":"boolean","default":false},"instances_allowed":{"description":"Instance IDs exposed through the namespace public endpoint. Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.","type":"array","items":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","type":"string","x-auditable":true},"example":["docs","blog"],"default":[],"maxItems":10,"x-auditable":true},"mcp":{"type":"object","properties":{"description":{},"disabled":{}}},"rate_limit":{"type":"object","properties":{"period_ms":{},"requests":{},"technique":{}}},"search_endpoint":{"type":"object","properties":{"disabled":{}}}},"key$":"public_endpoint_params"}},"required":["name"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":0}]},"GET /accounts/{account_id}/ai-search/namespaces":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":0},{"name":"page","in":"query","description":"Page number (1-indexed).","schema":{"description":"Page number (1-indexed).","type":"integer","example":1,"default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","description":"Number of results per page.","schema":{"description":"Number of results per page.","type":"integer","example":20,"default":20,"maximum":100,"minimum":1},"index$":2},{"name":"search","in":"query","description":"Filter namespaces whose name or description contains this string (case-insensitive).","schema":{"description":"Filter namespaces whose name or description contains this string (case-insensitive).","type":"string","example":"prod","maxLength":256},"index$":3}]},"GET /accounts/{account_id}/ai-search/namespaces/{name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":0},{"name":"name","in":"path","required":true,"schema":{"type":"string","example":"production"},"index$":1}]},"PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"new_namespace":{"description":"Target namespace to move the instance into.","type":"string","example":"staging","pattern":"^[a-z0-9]([a-z0-9-]{0,26}[a-z0-9])?$","key$":"new_namespace"}},"required":["new_namespace"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":0},{"name":"name","in":"path","description":"Current namespace of the instance.","required":true,"schema":{"description":"Current namespace of the instance.","type":"string","example":"production"},"index$":1},{"name":"id","in":"path","description":"Instance id.","required":true,"schema":{"description":"Instance id.","type":"string","example":"my-blog"},"index$":2}]},"DELETE /accounts/{account_id}/ai-search/namespaces/{name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":0},{"name":"name","in":"path","required":true,"schema":{"type":"string","example":"production"},"index$":1}]},"PUT /accounts/{account_id}/ai-search/namespaces/{name}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"description":"Optional description for the namespace. Max 256 characters.","type":"string","example":"Production environment","maxLength":256,"nullable":true,"key$":"description"},"public_endpoint_params":{"type":"object","nullable":true,"properties":{"authorized_hosts":{"type":"array","items":{"type":"string"}},"chat_completions_endpoint":{"type":"object","properties":{"disabled":{}}},"custom_domains":{"description":"Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).","type":"array","items":{"description":"Custom domain hostname (must be a Verified zone on this account).","example":"search.example.com","maxLength":253,"minLength":1,"type":"string"},"maxItems":1,"nullable":true,"x-auditable":true},"default_domain_enabled":{"description":"When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.","type":"boolean","default":true,"x-auditable":true},"enabled":{"type":"boolean","default":false},"instances_allowed":{"description":"Instance IDs exposed through the namespace public endpoint. Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.","type":"array","items":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","type":"string","x-auditable":true},"example":["docs","blog"],"default":[],"maxItems":10,"x-auditable":true},"mcp":{"type":"object","properties":{"description":{},"disabled":{}}},"rate_limit":{"type":"object","properties":{"period_ms":{},"requests":{},"technique":{}}},"search_endpoint":{"type":"object","properties":{"disabled":{}}}},"key$":"public_endpoint_params"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":0},{"name":"name","in":"path","required":true,"schema":{"type":"string","example":"production"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_search_namespace_ref01_ent = client.AiSearchNamespace()
    let ai_search_namespace_ref01_data = setup.data.new.ai_search_namespace['ai_search_namespace_ref01']
    ai_search_namespace_ref01_data['account_id'] = setup.idmap['account01']

    ai_search_namespace_ref01_data = (await ai_search_namespace_ref01_ent.create(ai_search_namespace_ref01_data)).data()
    assert(null != ai_search_namespace_ref01_data.id)


    // LIST
    const ai_search_namespace_ref01_match: any = {}
    ai_search_namespace_ref01_match['account_id'] = setup.idmap['account01']

    const ai_search_namespace_ref01_list = (await ai_search_namespace_ref01_ent.list(ai_search_namespace_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(ai_search_namespace_ref01_list, { id: ai_search_namespace_ref01_data.id })))


    // UPDATE
    const ai_search_namespace_ref01_data_up0: any = {}
    ai_search_namespace_ref01_data_up0.id = ai_search_namespace_ref01_data.id
    ai_search_namespace_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const ai_search_namespace_ref01_markdef_up0 = { name: 'description', value: 'Mark01-ai_search_namespace_ref01_' + setup.now }
    ;(ai_search_namespace_ref01_data_up0 as any)[ai_search_namespace_ref01_markdef_up0.name] = ai_search_namespace_ref01_markdef_up0.value

    const ai_search_namespace_ref01_resdata_up0 = (await ai_search_namespace_ref01_ent.update(ai_search_namespace_ref01_data_up0)).data()
    assert(ai_search_namespace_ref01_resdata_up0.id === ai_search_namespace_ref01_data_up0.id)

    assert((ai_search_namespace_ref01_resdata_up0 as any)[ai_search_namespace_ref01_markdef_up0.name] === ai_search_namespace_ref01_markdef_up0.value)


    // LOAD
    const ai_search_namespace_ref01_match_dt0: any = {}
    ai_search_namespace_ref01_match_dt0.id = ai_search_namespace_ref01_data.id
    const ai_search_namespace_ref01_data_dt0 = (await ai_search_namespace_ref01_ent.load(ai_search_namespace_ref01_match_dt0)).data()
    assert(ai_search_namespace_ref01_data_dt0.id === ai_search_namespace_ref01_data.id)


    // REMOVE
    const ai_search_namespace_ref01_match_rm0: any = { id: ai_search_namespace_ref01_data.id }
    await ai_search_namespace_ref01_ent.remove(ai_search_namespace_ref01_match_rm0)
  

    // LIST
    const ai_search_namespace_ref01_match_rt0: any = {}
    ai_search_namespace_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const ai_search_namespace_ref01_list_rt0 = (await ai_search_namespace_ref01_ent.list(ai_search_namespace_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(ai_search_namespace_ref01_list_rt0, { id: ai_search_namespace_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_search_namespace/AiSearchNamespaceTestData.json')

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
    ['ai_search_namespace01','ai_search_namespace02','ai_search_namespace03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AI_SEARCH_NAMESPACE_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AI_SEARCH_NAMESPACE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AI_SEARCH_NAMESPACE_ENTID']
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
  
