

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


describe('AiSearchInstancesItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AiSearchInstancesItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_search_instances_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action":{"a":true,"h":"Action","n":"action","r":true,"t":"`$STRING`","key$":"action","index$":0},"checksum":{"a":true,"h":"Checksum","n":"checksum","r":true,"ro":true,"t":"`$STRING`","key$":"checksum","index$":1},"chunkCount":{"a":true,"h":"Chunk Count","n":"chunkCount","r":true,"t":"`$INTEGER`","key$":"chunkCount","index$":2},"chunks_count":{"a":true,"h":"Chunks Count","n":"chunks_count","r":true,"ro":true,"t":"`$INTEGER`","key$":"chunks_count","index$":3},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"ro":true,"t":"`$STRING`","key$":"created_at","index$":4},"end_byte":{"a":true,"h":"End Byte","n":"end_byte","r":false,"t":"`$NUMBER`","key$":"end_byte","index$":5},"error":{"a":true,"h":"Error","n":"error","r":false,"ro":true,"t":"`$STRING`","key$":"error","index$":6},"errorType":{"a":true,"h":"Error Type","n":"errorType","r":true,"t":"`$STRING`","key$":"errorType","index$":7},"fileKey":{"a":true,"h":"File Key","n":"fileKey","r":true,"t":"`$STRING`","key$":"fileKey","index$":8},"file_size":{"a":true,"h":"File Size","n":"file_size","r":true,"ro":true,"t":"`$NUMBER`","key$":"file_size","index$":9},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$STRING`","key$":"id","index$":10},"item":{"a":true,"h":"Item","n":"item","r":true,"t":"`$OBJECT`","key$":"item","index$":11},"key":{"a":true,"h":"Key","n":"key","r":true,"ro":true,"sh":"Item key / filename.","t":"`$STRING`","key$":"key","index$":12},"last_seen_at":{"a":true,"fo":"date-time","h":"Last Seen At","n":"last_seen_at","r":true,"ro":true,"t":"`$STRING`","key$":"last_seen_at","index$":13},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":14},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"ro":true,"sh":"Built-in, configured filterable, and retained source metadata for the item.","t":"`$OBJECT`","union":{"branches":3,"count":1,"depth":1},"key$":"metadata","index$":15},"namespace":{"a":true,"h":"Namespace","n":"namespace","r":true,"ro":true,"t":"`$STRING`","key$":"namespace","index$":16},"next_action":{"a":true,"h":"Next Action","n":"next_action","r":true,"ro":true,"t":"`$STRING`","key$":"next_action","index$":17},"processingTimeMs":{"a":true,"h":"Processing Time Ms","n":"processingTimeMs","r":true,"t":"`$INTEGER`","key$":"processingTimeMs","index$":18},"source_id":{"a":true,"h":"Source Id","n":"source_id","r":true,"ro":true,"sh":"Identifies which data source this item belongs to.","t":"`$STRING`","key$":"source_id","index$":19},"start_byte":{"a":true,"h":"Start Byte","n":"start_byte","r":false,"t":"`$NUMBER`","key$":"start_byte","index$":20},"status":{"a":true,"h":"Status","n":"status","r":true,"ro":true,"t":"`$STRING`","key$":"status","index$":21},"text":{"a":true,"h":"Text","n":"text","r":true,"t":"`$STRING`","key$":"text","index$":22},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":true,"t":"`$STRING`","key$":"timestamp","index$":23},"wait_for_completion":{"a":true,"h":"Wait For Completion","n":"wait_for_completion","r":false,"sh":"Wait for indexing to fully complete before responding.","t":"`$BOOLEAN`","key$":"wait_for_completion","index$":24},"warnings":{"a":true,"h":"Warnings","n":"warnings","r":false,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"key$":"warnings","index$":25}},"id":{"field":"id","name":"id"},"name":"ai_search_instances_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items","q":{"exist":["account_id","instance_id","namespace_id"]},"r":{"param":{"id":"instance_id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"items"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"item_id","or":"item_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"key","or":"key","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"metadata_filter","or":"metadata_filter","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":"status","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"source","or":"source","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items","q":{"exist":["account_id","instance_id","item_id","key","metadata_filter","namespace_id","page","per_page","search","sort_by","source","status"]},"r":{"param":{"id":"instance_id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"items"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/logs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"item_id","or":"item_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":3}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/logs","q":{"exist":["account_id","cursor","instance_id","item_id","limit","namespace_id"]},"r":{"param":{"id":"instance_id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"items"},{"var":"item_id"},{"lit":"logs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/chunks","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"item_id","or":"item_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":3}],"query":[{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/chunks","q":{"exist":["account_id","instance_id","item_id","limit","namespace_id","offset"]},"r":{"param":{"id":"instance_id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"items"},{"var":"item_id"},{"lit":"chunks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"item_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}","q":{"exist":["account_id","id","instance_id","namespace_id"]},"r":{"param":{"id":"instance_id","item_id":"id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/download","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"item_id","or":"item_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/download","q":{"exist":["account_id","instance_id","item_id","namespace_id"]},"r":{"param":{"id":"instance_id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"items"},{"var":"item_id"},{"lit":"download"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"item_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}","q":{"exist":["account_id","id","instance_id","namespace_id"]},"r":{"param":{"id":"instance_id","item_id":"id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"item_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}","q":{"exist":["account_id","id","instance_id","namespace_id"]},"r":{"param":{"id":"instance_id","item_id":"id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"c3dc5f0b34a14ff8e1b3ec04895e1b22","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-ai-search","k":"param","n":"instance_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"my-namespace","k":"param","n":"namespace_id","or":"name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items","q":{"exist":["account_id","instance_id","namespace_id"]},"r":{"param":{"id":"instance_id","name":"namespace_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-search"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"instances"},{"var":"instance_id"},{"lit":"items"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.namespace"],["$.main.kit.entity.account","$.main.kit.entity.namespace"]]},"key$":"ai_search_instances_item","name__orig":"ai_search_instances_item","Name":"AiSearchInstancesItem","name_":"ai_search_instances_item","name-":"ai-search-instances-item","NAME":"AI_SEARCH_INSTANCES_ITEM","index$":13}, {"active":true,"entity":"ai_search_instances_item","key$":"BasicAiSearchInstancesItemFlow","kind":"basic","name":"BasicAiSearchInstancesItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_search_instances_item_ref01"},"m":{"account_id":"account01","instance_id":"instance01","item_id":"item01","namespace_id":"namespace01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01","instance_id":"instance01","item_id":"item01","namespace_id":"namespace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ai_search_instances_item_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01","namespace_id":"namespace01"},"i":{"ref":"ai_search_instances_item_ref01","srcdatavar":"ai_search_instances_item_ref01_data","suffix":"_up0","textfield":"action"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_search_instances_item_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"ai_search_instances_item_ref01","srcdatavar":"ai_search_instances_item_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"ai_search_instances_item01","instance_id":"instance01","namespace_id":"namespace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_search_instances_item_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"ai_search_instances_item_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"ai_search_instances_item01","instance_id":"instance01","namespace_id":"namespace01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01","instance_id":"instance01","item_id":"item01","namespace_id":"namespace01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"ai_search_instances_item_ref01"}}],"index$":5}]}, 'AiSearchInstancesItem', {"POST /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items":{"protocol":"http","requestBody":{"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"file":{"description":"The file to upload. Filename must not exceed 128 characters.","type":"string","format":"binary"},"metadata":{"description":"JSON string of custom metadata key-value pairs.","type":"string"},"wait_for_completion":{"description":"Wait for indexing to fully complete before responding. On RAGs with vector indexing enabled, this additionally waits for Vectorize ingestion confirmation (up to 40s) so the returned item reflects a queryable state. On timeout the item is returned in `running` state and the background alarm continues polling. Defaults to false.","type":"boolean","default":false}},"required":["file"]}}}},"parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":2}]},"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":2},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":50,"minimum":0},"index$":3},{"name":"search","in":"query","schema":{"type":"string","maxLength":256},"index$":4},{"name":"sort_by","in":"query","description":"Sort order for items. \"status\" (default) sorts by status priority then last_seen_at. \"modified_at\" sorts by file modification time (most recent first), falling back to created_at.","schema":{"description":"Sort order for items. \"status\" (default) sorts by status priority then last_seen_at. \"modified_at\" sorts by file modification time (most recent first), falling back to created_at.","type":"string","default":"status","enum":["status","modified_at"]},"index$":5},{"name":"status","in":"query","schema":{"type":"string","enum":["queued","running","completed","error","skipped","outdated"]},"index$":6},{"name":"source","in":"query","description":"Filter items by source_id. Use \"builtin\" for uploaded files, or a source identifier like \"web-crawler:https://example.com\".","schema":{"description":"Filter items by source_id. Use \"builtin\" for uploaded files, or a source identifier like \"web-crawler:https://example.com\".","type":"string","maxLength":512},"index$":7},{"name":"metadata_filter","in":"query","description":"JSON-encoded metadata filter using Vectorize filter syntax. Examples: {\"folder\":\"reports/\"}, {\"timestamp\":{\"$gte\":1700000000000}}, {\"folder\":{\"$in\":[\"docs/\",\"reports/\"]}}","schema":{"description":"JSON-encoded metadata filter using Vectorize filter syntax. Examples: {\"folder\":\"reports/\"}, {\"timestamp\":{\"$gte\":1700000000000}}, {\"folder\":{\"$in\":[\"docs/\",\"reports/\"]}}","type":"string","maxLength":2048},"index$":8},{"name":"item_id","in":"query","description":"Filter items by their unique ID. Returns at most one item.","schema":{"description":"Filter items by their unique ID. Returns at most one item.","type":"string","maxLength":64},"index$":9},{"name":"key","in":"query","description":"Filter items by their exact key (object key / filename). Keys are unique per source, so combine with `source` to disambiguate across data sources.","schema":{"description":"Filter items by their exact key (object key / filename). Keys are unique per source, so combine with `source` to disambiguate across data sources.","type":"string","maxLength":1024},"index$":10},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":11}]},"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/logs":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"item_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"limit","in":"query","schema":{"type":"integer","default":50,"maximum":100,"minimum":1},"index$":3},{"name":"cursor","in":"query","schema":{"type":"string","maxLength":512},"index$":4},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":5}]},"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/chunks":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"item_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"limit","in":"query","schema":{"type":"integer","default":20,"maximum":100,"minimum":1},"index$":3},{"name":"offset","in":"query","schema":{"type":"integer","default":0,"minimum":0},"index$":4},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":5}]},"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"item_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":3}]},"GET /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/download":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"item_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":3}]},"PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"next_action":{"type":"string","enum":["INDEX"],"key$":"next_action"},"wait_for_completion":{"description":"Wait for indexing to fully complete before responding. On RAGs with vector indexing enabled, this additionally waits for Vectorize ingestion confirmation (up to 40s) so the returned item reflects a queryable state. On timeout the item is returned in `running` state and the background alarm continues polling. Defaults to false.","type":"boolean","default":false,"key$":"wait_for_completion"}},"required":["next_action"],"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"item_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":3}]},"DELETE /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"item_id","in":"path","required":true,"schema":{"type":"string"},"index$":1},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":2},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":3}]},"PUT /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"key":{"description":"Item key / filename. Must not exceed 128 characters.","type":"string","key$":"key"},"next_action":{"type":"string","enum":["INDEX"],"key$":"next_action"},"wait_for_completion":{"description":"Wait for indexing to fully complete before responding. On RAGs with vector indexing enabled, this additionally waits for Vectorize ingestion confirmation (up to 40s) so the returned item reflects a queryable state. On timeout the item is returned in `running` state and the background alarm continues polling. Defaults to false.","type":"boolean","default":false,"key$":"wait_for_completion"}},"required":["key","next_action"],"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","required":true,"schema":{"description":"AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.","type":"string","example":"my-ai-search","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"c3dc5f0b34a14ff8e1b3ec04895e1b22"},"index$":1},{"name":"name","in":"path","description":"Namespace name","required":true,"schema":{"type":"string"},"example":"my-namespace","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_search_instances_item_ref01_ent = client.AiSearchInstancesItem()
    let ai_search_instances_item_ref01_data = setup.data.new.ai_search_instances_item['ai_search_instances_item_ref01']
    ai_search_instances_item_ref01_data['account_id'] = setup.idmap['account01']
    ai_search_instances_item_ref01_data['instance_id'] = setup.idmap['instance01']
    ai_search_instances_item_ref01_data['item_id'] = setup.idmap['item01']
    ai_search_instances_item_ref01_data['namespace_id'] = setup.idmap['namespace01']

    ai_search_instances_item_ref01_data = (await ai_search_instances_item_ref01_ent.create(ai_search_instances_item_ref01_data)).data()
    assert(null != ai_search_instances_item_ref01_data.id)


    // LIST
    const ai_search_instances_item_ref01_match: any = {}
    ai_search_instances_item_ref01_match['account_id'] = setup.idmap['account01']
    ai_search_instances_item_ref01_match['instance_id'] = setup.idmap['instance01']
    ai_search_instances_item_ref01_match['item_id'] = setup.idmap['item01']
    ai_search_instances_item_ref01_match['namespace_id'] = setup.idmap['namespace01']

    const ai_search_instances_item_ref01_list = (await ai_search_instances_item_ref01_ent.list(ai_search_instances_item_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(ai_search_instances_item_ref01_list, { id: ai_search_instances_item_ref01_data.id })))


    // UPDATE
    const ai_search_instances_item_ref01_data_up0: any = {}
    ai_search_instances_item_ref01_data_up0.id = ai_search_instances_item_ref01_data.id
    ai_search_instances_item_ref01_data_up0 ['account_id'] = setup.idmap['account_id']
    ai_search_instances_item_ref01_data_up0 ['namespace_id'] = setup.idmap['namespace_id']

    const ai_search_instances_item_ref01_markdef_up0 = { name: 'action', value: 'Mark01-ai_search_instances_item_ref01_' + setup.now }
    ;(ai_search_instances_item_ref01_data_up0 as any)[ai_search_instances_item_ref01_markdef_up0.name] = ai_search_instances_item_ref01_markdef_up0.value

    const ai_search_instances_item_ref01_resdata_up0 = (await ai_search_instances_item_ref01_ent.update(ai_search_instances_item_ref01_data_up0)).data()
    assert(ai_search_instances_item_ref01_resdata_up0.id === ai_search_instances_item_ref01_data_up0.id)

    assert((ai_search_instances_item_ref01_resdata_up0 as any)[ai_search_instances_item_ref01_markdef_up0.name] === ai_search_instances_item_ref01_markdef_up0.value)


    // LOAD
    const ai_search_instances_item_ref01_match_dt0: any = {}
    ai_search_instances_item_ref01_match_dt0.id = ai_search_instances_item_ref01_data.id
    const ai_search_instances_item_ref01_data_dt0 = (await ai_search_instances_item_ref01_ent.load(ai_search_instances_item_ref01_match_dt0)).data()
    assert(ai_search_instances_item_ref01_data_dt0.id === ai_search_instances_item_ref01_data.id)


    // REMOVE
    const ai_search_instances_item_ref01_match_rm0: any = { id: ai_search_instances_item_ref01_data.id }
    await ai_search_instances_item_ref01_ent.remove(ai_search_instances_item_ref01_match_rm0)
  

    // LIST
    const ai_search_instances_item_ref01_match_rt0: any = {}
    ai_search_instances_item_ref01_match_rt0['account_id'] = setup.idmap['account01']
    ai_search_instances_item_ref01_match_rt0['instance_id'] = setup.idmap['instance01']
    ai_search_instances_item_ref01_match_rt0['item_id'] = setup.idmap['item01']
    ai_search_instances_item_ref01_match_rt0['namespace_id'] = setup.idmap['namespace01']

    const ai_search_instances_item_ref01_list_rt0 = (await ai_search_instances_item_ref01_ent.list(ai_search_instances_item_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(ai_search_instances_item_ref01_list_rt0, { id: ai_search_instances_item_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_search_instances_item/AiSearchInstancesItemTestData.json')

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
    ['ai_search_instances_item01','ai_search_instances_item02','ai_search_instances_item03','account01','account02','account03','namespace01','namespace02','namespace03','instance01','item01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AI_SEARCH_INSTANCES_ITEM_ENTID']
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
  
