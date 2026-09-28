

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


describe('AiGatewayDynamicRouteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AiGatewayDynamicRoute()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_gateway_dynamic_route.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_tag":{"a":true,"h":"Account Tag","n":"account_tag","r":true,"t":"`$STRING`","key$":"account_tag","index$":0},"active":{"a":true,"h":"Active","n":"active","r":true,"t":"`$BOOLEAN`","key$":"active","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":2},"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$STRING`","key$":"data","index$":3},"deployment":{"a":true,"h":"Deployment","n":"deployment","r":true,"t":"`$OBJECT`","key$":"deployment","index$":4},"deployments":{"a":true,"h":"Deployments","n":"deployments","r":true,"t":"`$ARRAY`","key$":"deployments","index$":5},"elements":{"a":true,"h":"Elements","n":"elements","r":true,"t":"`$ARRAY`","union":{"branches":6,"count":1,"depth":1},"key$":"elements","index$":6},"gateway_id":{"a":true,"h":"Gateway Id","n":"gateway_id","r":true,"t":"`$STRING`","key$":"gateway_id","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":8},"is_valid":{"a":true,"h":"Is Valid","n":"is_valid","r":false,"t":"`$BOOLEAN`","key$":"is_valid","index$":9},"modified_at":{"a":true,"fo":"date-time","h":"Modified At","n":"modified_at","r":true,"t":"`$STRING`","key$":"modified_at","index$":10},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":11},"order_by":{"a":true,"h":"Order By","n":"order_by","r":true,"t":"`$STRING`","key$":"order_by","index$":12},"order_by_direction":{"a":true,"h":"Order By Direction","n":"order_by_direction","r":true,"t":"`$STRING`","key$":"order_by_direction","index$":13},"page":{"a":true,"h":"Page","n":"page","r":true,"t":"`$NUMBER`","key$":"page","index$":14},"per_page":{"a":true,"h":"Per Page","n":"per_page","r":true,"t":"`$NUMBER`","key$":"per_page","index$":15},"routes":{"a":true,"h":"Routes","n":"routes","r":true,"t":"`$ARRAY`","union":{"branches":6,"count":1,"depth":4},"key$":"routes","index$":16},"version":{"a":true,"h":"Version","n":"version","r":true,"t":"`$OBJECT`","key$":"version","index$":17},"version_id":{"a":true,"h":"Version Id","n":"version_id","r":true,"t":"`$STRING`","key$":"version_id","index$":18},"versions":{"a":true,"h":"Versions","n":"versions","r":true,"t":"`$ARRAY`","key$":"versions","index$":19}},"id":{"field":"id","name":"id"},"name":"ai_gateway_dynamic_route","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"54442216","k":"param","n":"route_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments","q":{"exist":["account_id","gateway_id","route_id"]},"r":{"param":{"id":"route_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"},{"var":"route_id"},{"lit":"deployments"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"54442216","k":"param","n":"route_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions","q":{"exist":["account_id","gateway_id","route_id"]},"r":{"param":{"id":"route_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"},{"var":"route_id"},{"lit":"versions"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":1},{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes","q":{"exist":["account_id","gateway_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes","q":{"exist":["account_id","gateway_id","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions/{version_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"54442216","k":"param","n":"route_id","or":"id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"54442216","k":"param","n":"version_id","or":"version_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions/{version_id}","q":{"exist":["account_id","gateway_id","route_id","version_id"]},"r":{"param":{"id":"route_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"},{"var":"route_id"},{"lit":"versions"},{"var":"version_id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":1},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"54442216","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}","q":{"exist":["account_id","gateway_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":2},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"54442216","k":"param","n":"route_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments","q":{"exist":["account_id","gateway_id","route_id"]},"r":{"param":{"id":"route_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"},{"var":"route_id"},{"lit":"deployments"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":3},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"54442216","k":"param","n":"route_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions","q":{"exist":["account_id","gateway_id","route_id"]},"r":{"param":{"id":"route_id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"},{"var":"route_id"},{"lit":"versions"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":4}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"54442216","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}","q":{"exist":["account_id","gateway_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"54442216","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"54442216","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}","q":{"exist":["account_id","gateway_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"routes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.route`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.account"],["$.main.kit.entity.account"]]},"key$":"ai_gateway_dynamic_route","name__orig":"ai_gateway_dynamic_route","Name":"AiGatewayDynamicRoute","name_":"ai_gateway_dynamic_route","name-":"ai-gateway-dynamic-route","NAME":"AI_GATEWAY_DYNAMIC_ROUTE","index$":6}, {"active":true,"entity":"ai_gateway_dynamic_route","key$":"BasicAiGatewayDynamicRouteFlow","kind":"basic","name":"BasicAiGatewayDynamicRouteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_gateway_dynamic_route_ref01"},"m":{"account_id":"account01","gateway_id":"gateway01","route_id":"route01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01","gateway_id":"gateway01"},"i":{"ref":"ai_gateway_dynamic_route_ref01","srcdatavar":"ai_gateway_dynamic_route_ref01_data","suffix":"_up0","textfield":"account_tag"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_gateway_dynamic_route_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"ai_gateway_dynamic_route_ref01","srcdatavar":"ai_gateway_dynamic_route_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","gateway_id":"gateway01","id":"ai_gateway_dynamic_route01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_gateway_dynamic_route_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"ai_gateway_dynamic_route_ref01","suffix":"_rm0"},"m":{"account_id":"account01","gateway_id":"gateway01","id":"ai_gateway_dynamic_route01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'AiGatewayDynamicRoute', {"POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"version_id":{"type":"string","example":"54442216","key$":"version_id"}},"required":["version_id"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1},{"name":"id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":2}]},"POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"elements":{"type":"array","items":{"oneOf":[{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"}]},"key$":"elements"}},"required":["elements"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1},{"name":"id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":2}]},"POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"elements":{"type":"array","items":{"oneOf":[{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"}]},"key$":"elements"},"name":{"type":"string","minLength":1,"key$":"name"}},"required":["name","elements"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1}]},"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1},{"name":"page","in":"query","description":"Page number","schema":{"description":"Page number","type":"integer","example":1},"index$":2},{"name":"per_page","in":"query","description":"Number of routes per page","schema":{"description":"Number of routes per page","type":"integer","example":20},"index$":3}]},"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions/{version_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1},{"name":"id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":2},{"name":"version_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":3}]},"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1},{"name":"id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":2}]},"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1},{"name":"id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":2}]},"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1},{"name":"id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":2}]},"DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1},{"name":"id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":2}]},"PATCH /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","example":"Route Name","minLength":1,"key$":"name"}},"required":["name"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":0},{"name":"gateway_id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":1},{"name":"id","in":"path","required":true,"schema":{"type":"string","example":"54442216"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_gateway_dynamic_route_ref01_ent = client.AiGatewayDynamicRoute()
    let ai_gateway_dynamic_route_ref01_data = setup.data.new.ai_gateway_dynamic_route['ai_gateway_dynamic_route_ref01']
    ai_gateway_dynamic_route_ref01_data['account_id'] = setup.idmap['account01']
    ai_gateway_dynamic_route_ref01_data['gateway_id'] = setup.idmap['gateway01']
    ai_gateway_dynamic_route_ref01_data['route_id'] = setup.idmap['route01']

    ai_gateway_dynamic_route_ref01_data = (await ai_gateway_dynamic_route_ref01_ent.create(ai_gateway_dynamic_route_ref01_data)).data()
    assert(null != ai_gateway_dynamic_route_ref01_data.id)


    // UPDATE
    const ai_gateway_dynamic_route_ref01_data_up0: any = {}
    ai_gateway_dynamic_route_ref01_data_up0.id = ai_gateway_dynamic_route_ref01_data.id
    ai_gateway_dynamic_route_ref01_data_up0 ['account_id'] = setup.idmap['account_id']
    ai_gateway_dynamic_route_ref01_data_up0 ['gateway_id'] = setup.idmap['gateway_id']

    const ai_gateway_dynamic_route_ref01_markdef_up0 = { name: 'account_tag', value: 'Mark01-ai_gateway_dynamic_route_ref01_' + setup.now }
    ;(ai_gateway_dynamic_route_ref01_data_up0 as any)[ai_gateway_dynamic_route_ref01_markdef_up0.name] = ai_gateway_dynamic_route_ref01_markdef_up0.value

    const ai_gateway_dynamic_route_ref01_resdata_up0 = (await ai_gateway_dynamic_route_ref01_ent.update(ai_gateway_dynamic_route_ref01_data_up0)).data()
    assert(ai_gateway_dynamic_route_ref01_resdata_up0.id === ai_gateway_dynamic_route_ref01_data_up0.id)

    assert((ai_gateway_dynamic_route_ref01_resdata_up0 as any)[ai_gateway_dynamic_route_ref01_markdef_up0.name] === ai_gateway_dynamic_route_ref01_markdef_up0.value)


    // LOAD
    const ai_gateway_dynamic_route_ref01_match_dt0: any = {}
    ai_gateway_dynamic_route_ref01_match_dt0.id = ai_gateway_dynamic_route_ref01_data.id
    const ai_gateway_dynamic_route_ref01_data_dt0 = (await ai_gateway_dynamic_route_ref01_ent.load(ai_gateway_dynamic_route_ref01_match_dt0)).data()
    assert(ai_gateway_dynamic_route_ref01_data_dt0.id === ai_gateway_dynamic_route_ref01_data.id)


    // REMOVE
    const ai_gateway_dynamic_route_ref01_match_rm0: any = { id: ai_gateway_dynamic_route_ref01_data.id }
    await ai_gateway_dynamic_route_ref01_ent.remove(ai_gateway_dynamic_route_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_gateway_dynamic_route/AiGatewayDynamicRouteTestData.json')

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
    ['ai_gateway_dynamic_route01','ai_gateway_dynamic_route02','ai_gateway_dynamic_route03','account01','account02','account03','gateway01','route01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AI_GATEWAY_DYNAMIC_ROUTE_ENTID']
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
  
