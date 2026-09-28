

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


describe('VectorizeBetaDeprecatedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.VectorizeBetaDeprecated()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'vectorize_beta__deprecated.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"config":{"a":true,"h":"Config","n":"config","r":true,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":2},"key$":"config","index$":0},"description":{"a":true,"h":"Description","n":"description","op":{"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"Specifies the description of the index.","t":"`$STRING`","key$":"description","index$":1},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":2},"ids":{"a":true,"h":"Ids","n":"ids","r":false,"sh":"A list of vector identifiers to delete from the index indicated by the path.","t":"`$ARRAY`","key$":"ids","index$":3},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":5},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":true,"type":"`$ARRAY`"}},"r":false,"t":"`$OBJECT`","key$":"result","index$":6},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":7}},"name":"vectorize_beta__deprecated","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"example-index","k":"param","n":"index_name","or":"index_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids","q":{"exist":["account_id","index_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"},{"var":"index_name"},{"lit":"delete-by-ids"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/vectorize/indexes/{index_name}/get-by-ids","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"example-index","k":"param","n":"index_name","or":"index_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/vectorize/indexes/{index_name}/get-by-ids","q":{"exist":["account_id","index_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"},{"var":"index_name"},{"lit":"get-by-ids"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /accounts/{account_id}/vectorize/indexes/{index_name}/insert","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"example-index","k":"param","n":"index_name","or":"index_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/vectorize/indexes/{index_name}/insert","q":{"$action":"insert","exist":["account_id","index_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"},{"var":"index_name"},{"lit":"insert"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /accounts/{account_id}/vectorize/indexes/{index_name}/query","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"example-index","k":"param","n":"index_name","or":"index_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/vectorize/indexes/{index_name}/query","q":{"$action":"query","exist":["account_id","index_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"},{"var":"index_name"},{"lit":"query"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /accounts/{account_id}/vectorize/indexes/{index_name}/upsert","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"example-index","k":"param","n":"index_name","or":"index_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/vectorize/indexes/{index_name}/upsert","q":{"$action":"upsert","exist":["account_id","index_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"},{"var":"index_name"},{"lit":"upsert"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"POST /accounts/{account_id}/vectorize/indexes","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/vectorize/indexes","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/vectorize/indexes","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/vectorize/indexes","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/vectorize/indexes/{index_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"example-index","k":"param","n":"index_name","or":"index_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/vectorize/indexes/{index_name}","q":{"exist":["account_id","index_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"},{"var":"index_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/vectorize/indexes/{index_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"example-index","k":"param","n":"index_name","or":"index_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/vectorize/indexes/{index_name}","q":{"exist":["account_id","index_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"},{"var":"index_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/vectorize/indexes/{index_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"example-index","k":"param","n":"index_name","or":"index_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/vectorize/indexes/{index_name}","q":{"exist":["account_id","index_name"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"vectorize"},{"lit":"indexes"},{"var":"index_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.account"]]},"key$":"vectorize_beta__deprecated","name__orig":"vectorize_beta__deprecated","Name":"VectorizeBetaDeprecated","name_":"vectorize_beta_deprecated","name-":"vectorize-beta-deprecated","NAME":"VECTORIZE_BETA__DEPRECATED","index$":38}, {"active":true,"entity":"vectorize_beta__deprecated","key$":"BasicVectorizeBetaDeprecatedFlow","kind":"basic","name":"BasicVectorizeBetaDeprecatedFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"vectorize_beta__deprecated_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"vectorize_beta__deprecated_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"vectorize_beta__deprecated_ref01","srcdatavar":"vectorize_beta__deprecated_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-vectorize_beta__deprecated_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"vectorize_beta__deprecated_ref01","srcdatavar":"vectorize_beta__deprecated_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"vectorize_beta__deprecated01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-vectorize_beta__deprecated_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"vectorize_beta__deprecated_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"vectorize_beta__deprecated01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"vectorize_beta__deprecated_ref01"}}],"index$":5}]}, 'VectorizeBetaDeprecated', {"POST /accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"ids":{"description":"A list of vector identifiers to delete from the index indicated by the path.","type":"array","items":{"description":"Identifier for a Vector","type":"string","example":"some-vector-id-023e105f4ecef8ad9ca31a8372d0c353","maxLength":64,"readOnly":true,"x-ref":"#/components/schemas/vectorize_vector-identifier"},"example":["5121db81354a40c6aedc3fe1ace51c59","f90eb49c2107486abdfd78c67e853430"],"key$":"ids"}},"x-ref":"#/components/schemas/vectorize_index-delete-vectors-by-id-request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0},{"name":"index_name","in":"path","required":true,"schema":{"type":"string","example":"example-index","pattern":"^([a-z]+[a-z0-9_-]*[a-z0-9]+)$","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-name"},"index$":1}]},"POST /accounts/{account_id}/vectorize/indexes/{index_name}/get-by-ids":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"ids":{"description":"A list of vector identifiers to retrieve from the index indicated by the path.","type":"array","items":{"description":"Identifier for a Vector","type":"string","example":"some-vector-id-023e105f4ecef8ad9ca31a8372d0c353","maxLength":64,"readOnly":true,"x-ref":"#/components/schemas/vectorize_vector-identifier"},"example":["5121db81354a40c6aedc3fe1ace51c59","f90eb49c2107486abdfd78c67e853430"],"key$":"ids"}},"x-ref":"#/components/schemas/vectorize_index-get-vectors-by-id-request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0},{"name":"index_name","in":"path","required":true,"schema":{"type":"string","example":"example-index","pattern":"^([a-z]+[a-z0-9_-]*[a-z0-9]+)$","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-name"},"index$":1}]},"POST /accounts/{account_id}/vectorize/indexes/{index_name}/insert":{"protocol":"http","requestBody":{"required":true,"content":{"application/x-ndjson":{"schema":{"description":"ndjson file containing vectors to insert.","type":"string","format":"binary","example":"@/path/to/vectors.ndjson"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0},{"name":"index_name","in":"path","required":true,"schema":{"type":"string","example":"example-index","pattern":"^([a-z]+[a-z0-9_-]*[a-z0-9]+)$","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-name"},"index$":1}]},"POST /accounts/{account_id}/vectorize/indexes/{index_name}/query":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"filter":{"description":"A metadata filter expression used to limit nearest neighbor results.","type":"object","example":{"has_viewed":{"$ne":true},"streaming_platform":"netflix"}},"returnMetadata":{"description":"Whether to return the metadata associated with the closest vectors.","type":"boolean","default":false},"returnValues":{"description":"Whether to return the values associated with the closest vectors.","type":"boolean","default":false},"topK":{"description":"The number of nearest neighbors to find.","type":"number","example":5,"default":5},"vector":{"description":"The search vector that will be used to find the nearest neighbors.","type":"array","items":{"type":"number"},"example":[0.5,0.5,0.5]}},"required":["vector"],"x-ref":"#/components/schemas/vectorize_index-query-request"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0},{"name":"index_name","in":"path","required":true,"schema":{"type":"string","example":"example-index","pattern":"^([a-z]+[a-z0-9_-]*[a-z0-9]+)$","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-name"},"index$":1}]},"POST /accounts/{account_id}/vectorize/indexes/{index_name}/upsert":{"protocol":"http","requestBody":{"required":true,"content":{"application/x-ndjson":{"schema":{"description":"ndjson file containing vectors to upsert.","type":"string","format":"binary","example":"@/path/to/vectors.ndjson"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0},{"name":"index_name","in":"path","required":true,"schema":{"type":"string","example":"example-index","pattern":"^([a-z]+[a-z0-9_-]*[a-z0-9]+)$","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-name"},"index$":1}]},"POST /accounts/{account_id}/vectorize/indexes":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"config":{"allOf":[{"description":"Specifies the type of configuration to use for the index.","oneOf":[{},{}],"x-ref":"#/components/schemas/vectorize_index-configuration"}],"key$":"config"},"description":{"description":"Specifies the description of the index.","type":"string","example":"This is my example index.","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-description","key$":"description"},"name":{"type":"string","example":"example-index","pattern":"^([a-z]+[a-z0-9_-]*[a-z0-9]+)$","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-name","key$":"name"}},"required":["name","config"],"x-ref":"#/components/schemas/vectorize_create-index-request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0}]},"GET /accounts/{account_id}/vectorize/indexes":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0}]},"GET /accounts/{account_id}/vectorize/indexes/{index_name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0},{"name":"index_name","in":"path","required":true,"schema":{"type":"string","example":"example-index","pattern":"^([a-z]+[a-z0-9_-]*[a-z0-9]+)$","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-name"},"index$":1}]},"DELETE /accounts/{account_id}/vectorize/indexes/{index_name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0},{"name":"index_name","in":"path","required":true,"schema":{"type":"string","example":"example-index","pattern":"^([a-z]+[a-z0-9_-]*[a-z0-9]+)$","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-name"},"index$":1}]},"PUT /accounts/{account_id}/vectorize/indexes/{index_name}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"description":"Specifies the description of the index.","type":"string","example":"This is my example index.","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-description","key$":"description"}},"required":["description"],"x-ref":"#/components/schemas/vectorize_update-index-request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/vectorize_identifier"},"index$":0},{"name":"index_name","in":"path","required":true,"schema":{"type":"string","example":"example-index","pattern":"^([a-z]+[a-z0-9_-]*[a-z0-9]+)$","x-auditable":true,"x-ref":"#/components/schemas/vectorize_index-name"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const vectorize_beta__deprecated_ref01_ent = client.VectorizeBetaDeprecated()
    let vectorize_beta__deprecated_ref01_data = setup.data.new.vectorize_beta__deprecated['vectorize_beta__deprecated_ref01']
    vectorize_beta__deprecated_ref01_data['account_id'] = setup.idmap['account01']

    vectorize_beta__deprecated_ref01_data = (await vectorize_beta__deprecated_ref01_ent.create(vectorize_beta__deprecated_ref01_data)).data()
    assert(null != vectorize_beta__deprecated_ref01_data)


    // LIST
    const vectorize_beta__deprecated_ref01_match: any = {}
    vectorize_beta__deprecated_ref01_match['account_id'] = setup.idmap['account01']

    const vectorize_beta__deprecated_ref01_list = (await vectorize_beta__deprecated_ref01_ent.list(vectorize_beta__deprecated_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const vectorize_beta__deprecated_ref01_data_up0: any = {}
    vectorize_beta__deprecated_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const vectorize_beta__deprecated_ref01_markdef_up0 = { name: 'description', value: 'Mark01-vectorize_beta__deprecated_ref01_' + setup.now }
    ;(vectorize_beta__deprecated_ref01_data_up0 as any)[vectorize_beta__deprecated_ref01_markdef_up0.name] = vectorize_beta__deprecated_ref01_markdef_up0.value

    const vectorize_beta__deprecated_ref01_resdata_up0 = (await vectorize_beta__deprecated_ref01_ent.update(vectorize_beta__deprecated_ref01_data_up0)).data()
    assert(null != vectorize_beta__deprecated_ref01_resdata_up0)

    assert((vectorize_beta__deprecated_ref01_resdata_up0 as any)[vectorize_beta__deprecated_ref01_markdef_up0.name] === vectorize_beta__deprecated_ref01_markdef_up0.value)




    // LIST
    const vectorize_beta__deprecated_ref01_match_rt0: any = {}
    vectorize_beta__deprecated_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const vectorize_beta__deprecated_ref01_list_rt0 = (await vectorize_beta__deprecated_ref01_ent.list(vectorize_beta__deprecated_ref01_match_rt0)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/vectorize_beta__deprecated/VectorizeBetaDeprecatedTestData.json')

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
    ['vectorize_beta__deprecated01','vectorize_beta__deprecated02','vectorize_beta__deprecated03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_VECTORIZE_BETA_DEPRECATED_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_VECTORIZE_BETA_DEPRECATED_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_VECTORIZE_BETA_DEPRECATED_ENTID']
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
  
