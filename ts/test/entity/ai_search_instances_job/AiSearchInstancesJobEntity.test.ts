

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


describe('AiSearchInstancesJobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AiSearchInstancesJob()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_search_instances_job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action":{"a":true,"h":"Action","n":"action","r":true,"t":"`$STRING`","key$":"action","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$NUMBER`","key$":"created_at","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":2},"end_reason":{"a":true,"h":"End Reason","n":"end_reason","r":false,"t":"`$STRING`","key$":"end_reason","index$":3},"ended_at":{"a":true,"h":"Ended At","n":"ended_at","r":false,"t":"`$STRING`","key$":"ended_at","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":5},"last_seen_at":{"a":true,"h":"Last Seen At","n":"last_seen_at","r":false,"t":"`$STRING`","key$":"last_seen_at","index$":6},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":7},"message_type":{"a":true,"h":"Message Type","n":"message_type","r":true,"t":"`$INTEGER`","key$":"message_type","index$":8},"source":{"a":true,"h":"Source","n":"source","r":true,"t":"`$STRING`","key$":"source","index$":9},"started_at":{"a":true,"h":"Started At","n":"started_at","r":false,"t":"`$STRING`","key$":"started_at","index$":10}},"id":{"field":"id","name":"id"},"name":"ai_search_instances_job","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs","q":{"exist":["account_id","instance_id","namespace_id"]},"r":{"param":{"id":"instance_id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-search/instances/{id}/jobs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-search/instances/{id}/jobs","q":{"exist":["account_id","instance_id"]},"r":{"param":{"id":"instance_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}/logs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"job_id","or":"job_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":3}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}/logs","q":{"exist":["account_id","instance_id","job_id","namespace_id","page","per_page"]},"r":{"param":{"id":"instance_id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"},{"var":"job_id"},{"lit":"logs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"job_id","or":"job_id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs","q":{"exist":["account_id","instance_id","job_id","page","per_page"]},"r":{"param":{"id":"instance_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"},{"var":"job_id"},{"lit":"logs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs","q":{"exist":["account_id","instance_id","namespace_id","page","per_page"]},"r":{"param":{"id":"instance_id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/instances/{id}/jobs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/instances/{id}/jobs","q":{"exist":["account_id","instance_id","page","per_page"]},"r":{"param":{"id":"instance_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"job_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}","q":{"exist":["account_id","id","instance_id","namespace_id"]},"r":{"param":{"id":"instance_id","job_id":"id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"job_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}","q":{"exist":["account_id","id","instance_id"]},"r":{"param":{"id":"instance_id","job_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"job_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}","q":{"exist":["account_id","id","instance_id","namespace_id"]},"r":{"param":{"id":"instance_id","job_id":"id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"a":true,"co":{"id":"PATCH /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"job_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}","q":{"exist":["account_id","id","instance_id"]},"r":{"param":{"id":"instance_id","job_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"instances"},{"var":"instance_id"},{"lit":"jobs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.account"],["$.main.kit.entity.account","$.main.kit.entity.namespace"],["$.main.kit.entity.account","$.main.kit.entity.namespace"]]},"key$":"ai_search_instances_job","name__orig":"ai_search_instances_job","Name":"AiSearchInstancesJob","name_":"ai_search_instances_job","name-":"ai-search-instances-job","NAME":"AI_SEARCH_INSTANCES_JOB","index$":14}, {"active":true,"entity":"ai_search_instances_job","key$":"BasicAiSearchInstancesJobFlow","kind":"basic","name":"BasicAiSearchInstancesJobFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_search_instances_job_ref01"},"m":{"account_id":"account01","instance_id":"instance01","job_id":"job01","namespace_id":"namespace01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01","instance_id":"instance01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ai_search_instances_job_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01","instance_id":"instance01"},"i":{"ref":"ai_search_instances_job_ref01","srcdatavar":"ai_search_instances_job_ref01_data","suffix":"_up0","textfield":"action"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_search_instances_job_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"ai_search_instances_job_ref01","srcdatavar":"ai_search_instances_job_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"ai_search_instances_job01","instance_id":"instance01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_search_instances_job_ref01"}}],"index$":3}]}, 'AiSearchInstancesJob', {"POST /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","maxLength":255,"key$":"description"}},"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":2}]},"POST /accounts/{account_id}/ai-search/instances/{id}/jobs":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","maxLength":255,"key$":"description"}},"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1}]},"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}/logs":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"job_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":3},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":500,"minimum":0},"index$":4},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":5}]},"GET /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"job_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":3},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":500,"minimum":0},"index$":4}]},"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":2},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":50,"minimum":0},"index$":3},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":4}]},"GET /accounts/{account_id}/ai-search/instances/{id}/jobs":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":2},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":50,"minimum":0},"index$":3}]},"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"job_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":3}]},"GET /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"job_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2}]},"PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"action":{"type":"string","enum":["cancel"],"key$":"action"}},"required":["action"],"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"job_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":3}]},"PATCH /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"action":{"type":"string","enum":["cancel"],"key$":"action"}},"required":["action"],"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"job_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_search_instances_job_ref01_ent = client.AiSearchInstancesJob()
    let ai_search_instances_job_ref01_data = setup.data.new.ai_search_instances_job['ai_search_instances_job_ref01']
    ai_search_instances_job_ref01_data['account_id'] = setup.idmap['account01']
    ai_search_instances_job_ref01_data['instance_id'] = setup.idmap['instance01']
    ai_search_instances_job_ref01_data['job_id'] = setup.idmap['job01']
    ai_search_instances_job_ref01_data['namespace_id'] = setup.idmap['namespace01']

    ai_search_instances_job_ref01_data = (await ai_search_instances_job_ref01_ent.create(ai_search_instances_job_ref01_data)).data()
    assert(null != ai_search_instances_job_ref01_data.id)


    // LIST
    const ai_search_instances_job_ref01_match: any = {}
    ai_search_instances_job_ref01_match['account_id'] = setup.idmap['account01']
    ai_search_instances_job_ref01_match['instance_id'] = setup.idmap['instance01']

    const ai_search_instances_job_ref01_list = (await ai_search_instances_job_ref01_ent.list(ai_search_instances_job_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(ai_search_instances_job_ref01_list, { id: ai_search_instances_job_ref01_data.id })))


    // UPDATE
    const ai_search_instances_job_ref01_data_up0: any = {}
    ai_search_instances_job_ref01_data_up0.id = ai_search_instances_job_ref01_data.id
    ai_search_instances_job_ref01_data_up0 ['account_id'] = setup.idmap['account_id']
    ai_search_instances_job_ref01_data_up0 ['instance_id'] = setup.idmap['instance_id']

    const ai_search_instances_job_ref01_markdef_up0 = { name: 'action', value: 'Mark01-ai_search_instances_job_ref01_' + setup.now }
    ;(ai_search_instances_job_ref01_data_up0 as any)[ai_search_instances_job_ref01_markdef_up0.name] = ai_search_instances_job_ref01_markdef_up0.value

    const ai_search_instances_job_ref01_resdata_up0 = (await ai_search_instances_job_ref01_ent.update(ai_search_instances_job_ref01_data_up0)).data()
    assert(ai_search_instances_job_ref01_resdata_up0.id === ai_search_instances_job_ref01_data_up0.id)

    assert((ai_search_instances_job_ref01_resdata_up0 as any)[ai_search_instances_job_ref01_markdef_up0.name] === ai_search_instances_job_ref01_markdef_up0.value)


    // LOAD
    const ai_search_instances_job_ref01_match_dt0: any = {}
    ai_search_instances_job_ref01_match_dt0.id = ai_search_instances_job_ref01_data.id
    const ai_search_instances_job_ref01_data_dt0 = (await ai_search_instances_job_ref01_ent.load(ai_search_instances_job_ref01_match_dt0)).data()
    assert(ai_search_instances_job_ref01_data_dt0.id === ai_search_instances_job_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_search_instances_job/AiSearchInstancesJobTestData.json')

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
    ['ai_search_instances_job01','ai_search_instances_job02','ai_search_instances_job03','account01','account02','account03','namespace01','namespace02','namespace03','instance01','job01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_JOB_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_JOB_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_JOB_ENTID']
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
  
