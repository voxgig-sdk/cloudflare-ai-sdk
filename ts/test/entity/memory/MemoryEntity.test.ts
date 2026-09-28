

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


describe('MemoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.Memory()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'memory.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"Always empty for a successful response.","t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"sh":"Informational, non-error messages, if any.","t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":3},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":false,"t":"`$OBJECT`","key$":"result_info","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Always true for a successful response.","t":"`$BOOLEAN`","key$":"success","index$":5}},"id":{"field":"id","name":"id"},"name":"memory","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/ingest","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"namespace_id","or":"namespace_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-profile","k":"param","n":"profile_name","or":"profile_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/ingest","q":{"$action":"ingest","exist":["account_id","namespace_id","profile_name"]},"r":{"param":{"namespace_name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"profiles"},{"var":"profile_name"},{"lit":"ingest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/recall","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"namespace_id","or":"namespace_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-profile","k":"param","n":"profile_name","or":"profile_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/recall","q":{"$action":"recall","exist":["account_id","namespace_id","profile_name"]},"r":{"param":{"namespace_name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"profiles"},{"var":"profile_name"},{"lit":"recall"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/remember","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"namespace_id","or":"namespace_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-profile","k":"param","n":"profile_name","or":"profile_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/remember","q":{"$action":"remember","exist":["account_id","namespace_id","profile_name"]},"r":{"param":{"namespace_name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"profiles"},{"var":"profile_name"},{"lit":"remember"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/summary","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"namespace_id","or":"namespace_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-profile","k":"param","n":"profile_name","or":"profile_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/summary","q":{"$action":"summary","exist":["account_id","namespace_id","profile_name"]},"r":{"param":{"namespace_name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"profiles"},{"var":"profile_name"},{"lit":"summary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"namespace_id","or":"namespace_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-profile","k":"param","n":"profile_name","or":"profile_name","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":"01JSGCEXAMP1E0000000000000","k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"chat-session-42","k":"query","n":"session_id","or":"session_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"fact","k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories","q":{"exist":["account_id","cursor","namespace_id","per_page","profile_name","session_id","type"]},"r":{"param":{"namespace_name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"profiles"},{"var":"profile_name"},{"lit":"memories"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"namespace_name","or":"namespace_name","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"eyJ2IjoxLCJuIjoibXktcHJvZmlsZSJ9","k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles","q":{"exist":["account_id","cursor","namespace_name","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_name"},{"lit":"profiles"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01JSGCEXAMP1E0000000000000","k":"param","n":"id","or":"memory_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"support-agent","k":"param","n":"namespace_id","or":"namespace_name","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-profile","k":"param","n":"profile_id","or":"profile_name","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}","q":{"exist":["account_id","id","namespace_id","profile_id"]},"r":{"param":{"memory_id":"id","namespace_name":"namespace_id","profile_name":"profile_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"profiles"},{"var":"profile_id"},{"lit":"memories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01JSGCEXAMP1E0000000000000","k":"param","n":"id","or":"memory_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"support-agent","k":"param","n":"namespace_id","or":"namespace_name","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-profile","k":"param","n":"profile_id","or":"profile_name","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}","q":{"exist":["account_id","id","namespace_id","profile_id"]},"r":{"param":{"memory_id":"id","namespace_name":"namespace_id","profile_name":"profile_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"profiles"},{"var":"profile_id"},{"lit":"memories"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/sessions/{session_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"namespace_id","or":"namespace_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-profile","k":"param","n":"profile_id","or":"profile_name","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"chat-session-44","k":"param","n":"session_id","or":"session_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/sessions/{session_id}","q":{"exist":["account_id","namespace_id","profile_id","session_id"]},"r":{"param":{"namespace_name":"namespace_id","profile_name":"profile_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"profiles"},{"var":"profile_id"},{"lit":"sessions"},{"var":"session_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"support-agent","k":"param","n":"namespace_id","or":"namespace_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-profile","k":"param","n":"profile_name","or":"profile_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}","q":{"exist":["account_id","namespace_id","profile_name"]},"r":{"param":{"namespace_name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"agent-memory"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"profiles"},{"var":"profile_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.namespace"],["$.main.kit.entity.account","$.main.kit.entity.namespace"],["$.main.kit.entity.account","$.main.kit.entity.namespace"]]},"key$":"memory","name__orig":"memory","Name":"Memory","name_":"memory","name-":"memory","NAME":"MEMORY","index$":35}, {"active":true,"entity":"memory","key$":"BasicMemoryFlow","kind":"basic","name":"BasicMemoryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"memory_ref01"},"m":{"account_id":"account01","namespace_id":"namespace01","namespace_name":"namespace_name01","profile_id":"profile01","profile_name":"profile_name01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01","namespace_name":"namespace_name01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"memory_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"memory_ref01","srcdatavar":"memory_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"memory01","namespace_id":"namespace01","profile_id":"profile01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-memory_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"memory_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"memory01","namespace_id":"namespace01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01","namespace_name":"namespace_name01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"memory_ref01"}}],"index$":4}]}, 'Memory', {"POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/ingest":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"messages":{"description":"Conversation messages to extract memories from.","type":"array","items":{"properties":{"content":{"description":"Text content of the message.","example":"I really prefer dark mode in the dashboard.","minLength":1,"type":"string"},"role":{"description":"Author role of the message.","type":"string","example":"user","enum":[]},"timestamp":{"description":"Message timestamp.","type":"string","example":"2025-09-21T14:30:00Z"}},"required":["role","content"],"type":"object"},"minItems":1},"sessionId":{"description":"Session identifier.","type":"string","example":"chat-session-42","nullable":true}},"required":["messages"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"profile_name","in":"path","required":true,"schema":{"description":"Profile name.","type":"string","example":"my-profile","maxLength":100,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":2}]},"POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/recall":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"query":{"description":"Natural-language query to match against stored memories.","example":"What are my UI preferences?","minLength":1,"type":"string"},"referenceDate":{"description":"Temporal anchor for relative date references in the query.","type":"string","example":"2025-09-21T00:00:00Z"},"responseLength":{"description":"Verbosity of the synthesized answer. Defaults to 'medium'.","type":"string","example":"short","enum":["short","medium","long"]},"thinkingLevel":{"description":"Recall intensity / search depth. Defaults to 'low'.","type":"string","example":"medium","enum":["low","medium","high"]}},"required":["query"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"profile_name","in":"path","required":true,"schema":{"description":"Profile name.","type":"string","example":"my-profile","maxLength":100,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":2}]},"POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/remember":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"content":{"description":"Raw memory content to store.","example":"I prefer dark mode in the dashboard.","minLength":1,"type":"string"},"sessionId":{"description":"Session identifier.","type":"string","example":"chat-session-42","nullable":true}},"required":["content"]}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"profile_name","in":"path","required":true,"schema":{"description":"Profile name.","type":"string","example":"my-profile","maxLength":100,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":2}]},"POST /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/summary":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"sessionId":{"description":"Session identifier.","type":"string","example":"chat-session-42","nullable":true}}}}}},"parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"profile_name","in":"path","required":true,"schema":{"description":"Profile name.","type":"string","example":"my-profile","maxLength":100,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":2}]},"GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"profile_name","in":"path","required":true,"schema":{"description":"Profile name.","type":"string","example":"my-profile","maxLength":100,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":2},{"name":"per_page","in":"query","schema":{"description":"Number of results per page.","type":"integer","example":20,"maximum":500,"minimum":1},"index$":3},{"name":"cursor","in":"query","schema":{"description":"Continuation cursor for paginated results.","type":"string","example":"01JSGCEXAMP1E0000000000000","maxLength":26,"minLength":26},"index$":4},{"name":"session_id","in":"query","schema":{"description":"Session identifier for filtering.","type":"string","example":"chat-session-42","maxLength":64,"minLength":1},"index$":5},{"name":"type","in":"query","schema":{"description":"Memory type for filtering.","type":"string","example":"fact","enum":["fact","event","instruction","task"]},"index$":6}]},"GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"per_page","in":"query","schema":{"description":"Number of results per page.","type":"integer","example":20,"maximum":500,"minimum":1},"index$":2},{"name":"cursor","in":"query","schema":{"description":"Opaque continuation cursor returned by a previous list response.","type":"string","example":"eyJ2IjoxLCJuIjoibXktcHJvZmlsZSJ9","maxLength":256,"minLength":1,"pattern":"^[A-Za-z0-9_-]+$"},"index$":3}]},"GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"profile_name","in":"path","required":true,"schema":{"description":"Profile name.","type":"string","example":"my-profile","maxLength":100,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":2},{"name":"memory_id","in":"path","required":true,"schema":{"description":"Memory Identifier.","type":"string","example":"01JSGCEXAMP1E0000000000000","maxLength":26,"minLength":26,"pattern":"^[0-9A-HJKMNP-TV-Z]{26}$"},"index$":3}]},"DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/memories/{memory_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"profile_name","in":"path","required":true,"schema":{"description":"Profile name.","type":"string","example":"my-profile","maxLength":100,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":2},{"name":"memory_id","in":"path","required":true,"schema":{"description":"Memory Identifier.","type":"string","example":"01JSGCEXAMP1E0000000000000","maxLength":26,"minLength":26,"pattern":"^[0-9A-HJKMNP-TV-Z]{26}$"},"index$":3}]},"DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}/sessions/{session_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"profile_name","in":"path","required":true,"schema":{"description":"Profile name.","type":"string","example":"my-profile","maxLength":100,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":2},{"name":"session_id","in":"path","description":"Session identifier.","required":true,"schema":{"description":"Session Identifier.","type":"string","example":"chat-session-44","maxLength":64,"minLength":1},"index$":3}]},"DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}/profiles/{profile_name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Cloudflare Account ID.","required":true,"schema":{"type":"string","minLength":1,"pattern":"^\\d+$"},"index$":0},{"name":"namespace_name","in":"path","required":true,"schema":{"description":"Namespace name.","type":"string","example":"support-agent","maxLength":32,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":1},{"name":"profile_name","in":"path","required":true,"schema":{"description":"Profile name.","type":"string","example":"my-profile","maxLength":100,"minLength":1,"pattern":"^[a-z0-9]([a-z0-9-]*[a-z0-9])?$"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const memory_ref01_ent = client.Memory()
    let memory_ref01_data = setup.data.new.memory['memory_ref01']
    memory_ref01_data['account_id'] = setup.idmap['account01']
    memory_ref01_data['namespace_id'] = setup.idmap['namespace01']
    memory_ref01_data['namespace_name'] = setup.idmap['namespace_name01']
    memory_ref01_data['profile_id'] = setup.idmap['profile01']
    memory_ref01_data['profile_name'] = setup.idmap['profile_name01']

    memory_ref01_data = (await memory_ref01_ent.create(memory_ref01_data)).data()
    assert(null != memory_ref01_data.id)


    // LIST
    const memory_ref01_match: any = {}
    memory_ref01_match['account_id'] = setup.idmap['account01']
    memory_ref01_match['namespace_name'] = setup.idmap['namespace_name01']

    const memory_ref01_list = (await memory_ref01_ent.list(memory_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(memory_ref01_list, { id: memory_ref01_data.id })))


    // LOAD
    const memory_ref01_match_dt0: any = {}
    memory_ref01_match_dt0.id = memory_ref01_data.id
    const memory_ref01_data_dt0 = (await memory_ref01_ent.load(memory_ref01_match_dt0)).data()
    assert(memory_ref01_data_dt0.id === memory_ref01_data.id)


    // REMOVE
    const memory_ref01_match_rm0: any = { id: memory_ref01_data.id }
    await memory_ref01_ent.remove(memory_ref01_match_rm0)
  

    // LIST
    const memory_ref01_match_rt0: any = {}
    memory_ref01_match_rt0['account_id'] = setup.idmap['account01']
    memory_ref01_match_rt0['namespace_name'] = setup.idmap['namespace_name01']

    const memory_ref01_list_rt0 = (await memory_ref01_ent.list(memory_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(memory_ref01_list_rt0, { id: memory_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/memory/MemoryTestData.json')

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
    ['memory01','memory02','memory03','account01','account02','account03','namespace01','namespace02','namespace03','namespace_name01','profile01','profile_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_MEMORY_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_MEMORY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_MEMORY_ENTID']
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
  
