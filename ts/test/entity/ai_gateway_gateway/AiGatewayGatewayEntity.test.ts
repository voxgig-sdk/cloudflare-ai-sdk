

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


describe('AiGatewayGatewayEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.AiGatewayGateway()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_gateway_gateway.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"authentication":{"a":true,"h":"Authentication","n":"authentication","r":false,"t":"`$BOOLEAN`","key$":"authentication","index$":0},"byok_only":{"a":true,"h":"Byok Only","n":"byok_only","r":false,"sh":"Requires customer-provided provider credentials and prevents fallback to Unified Billing.","t":"`$BOOLEAN`","key$":"byok_only","index$":1},"cache_invalidate_on_update":{"a":true,"h":"Cache Invalidate On Update","n":"cache_invalidate_on_update","r":true,"t":"`$BOOLEAN`","key$":"cache_invalidate_on_update","index$":2},"cache_ttl":{"a":true,"h":"Cache Ttl","n":"cache_ttl","r":true,"t":"`$INTEGER`","key$":"cache_ttl","index$":3},"collect_logs":{"a":true,"h":"Collect Logs","n":"collect_logs","r":true,"t":"`$BOOLEAN`","key$":"collect_logs","index$":4},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":5},"dlp":{"a":true,"h":"Dlp","n":"dlp","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"dlp","index$":6},"guardrails":{"a":true,"h":"Guardrails","n":"guardrails","r":true,"t":"`$OBJECT`","key$":"guardrails","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier of the AI Gateway within the account.","t":"`$STRING`","key$":"id","index$":8},"is_default":{"a":true,"h":"Is Default","n":"is_default","r":false,"t":"`$BOOLEAN`","key$":"is_default","index$":9},"log_classification":{"a":true,"h":"Log Classification","n":"log_classification","r":false,"t":"`$BOOLEAN`","key$":"log_classification","index$":10},"log_management":{"a":true,"h":"Log Management","n":"log_management","r":false,"t":"`$INTEGER`","key$":"log_management","index$":11},"log_management_strategy":{"a":true,"h":"Log Management Strategy","n":"log_management_strategy","r":false,"t":"`$STRING`","key$":"log_management_strategy","index$":12},"logpush":{"a":true,"h":"Logpush","n":"logpush","r":false,"t":"`$BOOLEAN`","key$":"logpush","index$":13},"logpush_public_key":{"a":true,"h":"Logpush Public Key","n":"logpush_public_key","r":false,"t":"`$STRING`","key$":"logpush_public_key","index$":14},"modified_at":{"a":true,"fo":"date-time","h":"Modified At","n":"modified_at","r":true,"t":"`$STRING`","key$":"modified_at","index$":15},"otel":{"a":true,"h":"Otel","n":"otel","r":false,"t":"`$ARRAY`","key$":"otel","index$":16},"rate_limiting_interval":{"a":true,"h":"Rate Limiting Interval","n":"rate_limiting_interval","r":true,"t":"`$INTEGER`","key$":"rate_limiting_interval","index$":17},"rate_limiting_limit":{"a":true,"h":"Rate Limiting Limit","n":"rate_limiting_limit","r":true,"t":"`$INTEGER`","key$":"rate_limiting_limit","index$":18},"rate_limiting_technique":{"a":true,"h":"Rate Limiting Technique","n":"rate_limiting_technique","r":false,"t":"`$STRING`","key$":"rate_limiting_technique","index$":19},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$STRING`","key$":"result","index$":20},"retry_backoff":{"a":true,"h":"Retry Backoff","n":"retry_backoff","r":false,"sh":"Backoff strategy for retry delays","t":"`$STRING`","key$":"retry_backoff","index$":21},"retry_delay":{"a":true,"h":"Retry Delay","n":"retry_delay","r":false,"sh":"Delay between retry attempts in milliseconds (0-60000)","t":"`$INTEGER`","key$":"retry_delay","index$":22},"retry_max_attempts":{"a":true,"h":"Retry Max Attempts","n":"retry_max_attempts","r":false,"sh":"Maximum number of retry attempts for failed requests (1-5)","t":"`$INTEGER`","key$":"retry_max_attempts","index$":23},"spend_limits":{"a":true,"h":"Spend Limits","n":"spend_limits","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":6},"key$":"spend_limits","index$":24},"store_id":{"a":true,"h":"Store Id","n":"store_id","r":false,"t":"`$STRING`","key$":"store_id","index$":25},"stripe":{"a":true,"h":"Stripe","n":"stripe","r":true,"t":"`$OBJECT`","key$":"stripe","index$":26},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":27},"workers_ai_billing_mode":{"a":true,"h":"Workers Ai Billing Mode","n":"workers_ai_billing_mode","r":false,"sh":"Controls how Workers AI inference calls routed through this gateway are billed.","t":"`$STRING`","key$":"workers_ai_billing_mode","index$":28},"zdr":{"a":true,"h":"Zdr","n":"zdr","r":false,"t":"`$BOOLEAN`","key$":"zdr","index$":29}},"id":{"field":"id","name":"id"},"name":"ai_gateway_gateway","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/ai-gateway/gateways","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/ai-gateway/gateways","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/gateways","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/gateways","q":{"exist":["account_id","page","per_page","search"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d37909e38d3e99c29fa2cd343ac421a","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-gateway","k":"param","n":"gateway_id","or":"gateway_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"workers-ai","k":"param","n":"provider","or":"provider","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}","q":{"exist":["account_id","gateway_id","provider"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"gateway_id"},{"lit":"url"},{"var":"provider"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/ai-gateway/gateways/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-gateway","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai-gateway/gateways/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/ai-gateway/gateways/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-gateway","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/ai-gateway/gateways/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/ai-gateway/gateways/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3ebbcb006d4d46d7bb6a8c7f14676cb0","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"my-gateway","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/ai-gateway/gateways/{id}","q":{"exist":["account_id","id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai-gateway"},{"lit":"gateways"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.account"]]},"key$":"ai_gateway_gateway","name__orig":"ai_gateway_gateway","Name":"AiGatewayGateway","name_":"ai_gateway_gateway","name-":"ai-gateway-gateway","NAME":"AI_GATEWAY_GATEWAY","index$":8}, {"active":true,"entity":"ai_gateway_gateway","key$":"BasicAiGatewayGatewayFlow","kind":"basic","name":"BasicAiGatewayGatewayFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_gateway_gateway_ref01"},"m":{"account_id":"account01","gateway_id":"gateway01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ai_gateway_gateway_ref01"}}],"index$":1},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"ai_gateway_gateway_ref01","srcdatavar":"ai_gateway_gateway_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_gateway_gateway_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"ai_gateway_gateway_ref01","srcdatavar":"ai_gateway_gateway_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"ai_gateway_gateway01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_gateway_gateway_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"ai_gateway_gateway_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"ai_gateway_gateway01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"ai_gateway_gateway_ref01"}}],"index$":5}]}, 'AiGatewayGateway', {"POST /accounts/{account_id}/ai-gateway/gateways":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"authentication":{"type":"boolean","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"authentication"},"byok_only":{"description":"Requires customer-provided provider credentials and prevents fallback to Unified Billing.","type":"boolean","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"byok_only"},"cache_invalidate_on_update":{"type":"boolean","x-auditable":true,"key$":"cache_invalidate_on_update"},"cache_ttl":{"type":"integer","minimum":0,"nullable":true,"x-auditable":true,"key$":"cache_ttl"},"collect_logs":{"type":"boolean","x-auditable":true,"key$":"collect_logs"},"id":{"description":"Unique identifier of the AI Gateway within the account.","type":"string","example":"my-gateway","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true,"key$":"id"},"log_management":{"type":"integer","maximum":10000000,"minimum":10000,"nullable":true,"x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"log_management"},"log_management_strategy":{"type":"string","enum":["STOP_INSERTING","DELETE_OLDEST"],"nullable":true,"x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"log_management_strategy"},"logpush":{"type":"boolean","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"logpush"},"logpush_public_key":{"type":"string","maxLength":1024,"minLength":16,"nullable":true,"x-auditable":true,"key$":"logpush_public_key"},"rate_limiting_interval":{"type":"integer","minimum":0,"nullable":true,"x-auditable":true,"key$":"rate_limiting_interval"},"rate_limiting_limit":{"type":"integer","minimum":0,"nullable":true,"x-auditable":true,"key$":"rate_limiting_limit"},"rate_limiting_technique":{"type":"string","enum":["fixed","sliding"],"nullable":true,"x-auditable":true,"key$":"rate_limiting_technique"},"retry_backoff":{"description":"Backoff strategy for retry delays","type":"string","enum":["constant","linear","exponential"],"nullable":true,"x-auditable":true,"key$":"retry_backoff"},"retry_delay":{"description":"Delay between retry attempts in milliseconds (0-60000)","type":"integer","maximum":60000,"minimum":0,"nullable":true,"x-auditable":true,"key$":"retry_delay"},"retry_max_attempts":{"description":"Maximum number of retry attempts for failed requests (1-5)","type":"integer","maximum":5,"minimum":1,"nullable":true,"x-auditable":true,"key$":"retry_max_attempts"},"store_id":{"type":"string","nullable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"store_id"},"workers_ai_billing_mode":{"description":"Controls how Workers AI inference calls routed through this gateway are billed. 'postpaid' bills the account directly through Workers AI; 'unified' deducts credits via AI Gateway using neuron-based pricing and delegates billing to AI Gateway.","type":"string","default":"postpaid","enum":["postpaid","unified"],"x-auditable":true,"key$":"workers_ai_billing_mode"},"zdr":{"type":"boolean","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"zdr"}},"required":["id","rate_limiting_interval","rate_limiting_limit","collect_logs","cache_ttl","cache_invalidate_on_update"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0}]},"GET /accounts/{account_id}/ai-gateway/gateways":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":100,"minimum":1},"index$":2},{"name":"search","in":"query","schema":{"description":"Search by id","type":"string"},"index$":3}]},"GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}":{"protocol":"http","parameters":[{"name":"gateway_id","in":"path","required":true,"schema":{"description":"Unique identifier of the AI Gateway within the account.","type":"string","example":"my-gateway","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"0d37909e38d3e99c29fa2cd343ac421a"},"index$":1},{"name":"provider","in":"path","required":true,"schema":{"type":"string","example":"workers-ai"},"index$":2}]},"GET /accounts/{account_id}/ai-gateway/gateways/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0},{"name":"id","in":"path","required":true,"schema":{"description":"Unique identifier of the AI Gateway within the account.","type":"string","example":"my-gateway","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"x-fern-parameter-name":"gateway-id","index$":1}]},"DELETE /accounts/{account_id}/ai-gateway/gateways/{id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0},{"name":"id","in":"path","required":true,"schema":{"description":"Unique identifier of the AI Gateway within the account.","type":"string","example":"my-gateway","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"x-fern-parameter-name":"gateway-id","index$":1}]},"PUT /accounts/{account_id}/ai-gateway/gateways/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"authentication":{"type":"boolean","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"authentication"},"byok_only":{"description":"Requires customer-provided provider credentials and prevents fallback to Unified Billing.","type":"boolean","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"byok_only"},"cache_invalidate_on_update":{"type":"boolean","x-auditable":true,"key$":"cache_invalidate_on_update"},"cache_ttl":{"type":"integer","minimum":0,"nullable":true,"x-auditable":true,"key$":"cache_ttl"},"collect_logs":{"type":"boolean","x-auditable":true,"key$":"collect_logs"},"dlp":{"anyOf":[{"properties":{"action":{},"enabled":{},"profiles":{}},"required":["profiles","enabled","action"],"type":"object"},{"properties":{"enabled":{},"policies":{}},"required":["enabled","policies"],"type":"object"}],"key$":"dlp"},"guardrails":{"type":"object","nullable":true,"properties":{"prompt":{"type":"object","properties":{"P1":{},"S1":{},"S10":{},"S11":{},"S12":{},"S13":{},"S2":{},"S3":{},"S4":{},"S5":{},"S6":{},"S7":{},"S8":{},"S9":{}}},"response":{"type":"object","properties":{"P1":{},"S1":{},"S10":{},"S11":{},"S12":{},"S13":{},"S2":{},"S3":{},"S4":{},"S5":{},"S6":{},"S7":{},"S8":{},"S9":{}}}},"required":["prompt","response"],"x-auditable":true,"key$":"guardrails"},"log_classification":{"type":"boolean","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"log_classification"},"log_management":{"type":"integer","maximum":10000000,"minimum":10000,"nullable":true,"x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"log_management"},"log_management_strategy":{"type":"string","enum":["STOP_INSERTING","DELETE_OLDEST"],"nullable":true,"x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"log_management_strategy"},"logpush":{"type":"boolean","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"logpush"},"logpush_public_key":{"type":"string","maxLength":1024,"minLength":16,"nullable":true,"x-auditable":true,"key$":"logpush_public_key"},"otel":{"type":"array","items":{"properties":{"authorization":{"type":"string","maxLength":256},"content_type":{"type":"string","default":"json","enum":[]},"headers":{"type":"object","additionalProperties":{}},"url":{"type":"string","format":"uri","maxLength":2048}},"required":["url","headers"],"type":"object"},"maxItems":5,"nullable":true,"x-auditable":true,"key$":"otel"},"rate_limiting_interval":{"type":"integer","minimum":0,"nullable":true,"x-auditable":true,"key$":"rate_limiting_interval"},"rate_limiting_limit":{"type":"integer","minimum":0,"nullable":true,"x-auditable":true,"key$":"rate_limiting_limit"},"rate_limiting_technique":{"type":"string","enum":["fixed","sliding"],"nullable":true,"x-auditable":true,"key$":"rate_limiting_technique"},"retry_backoff":{"description":"Backoff strategy for retry delays","type":"string","enum":["constant","linear","exponential"],"nullable":true,"x-auditable":true,"key$":"retry_backoff"},"retry_delay":{"description":"Delay between retry attempts in milliseconds (0-60000)","type":"integer","maximum":60000,"minimum":0,"nullable":true,"x-auditable":true,"key$":"retry_delay"},"retry_max_attempts":{"description":"Maximum number of retry attempts for failed requests (1-5)","type":"integer","maximum":5,"minimum":1,"nullable":true,"x-auditable":true,"key$":"retry_max_attempts"},"spend_limits":{"type":"object","nullable":true,"properties":{"enabled":{"type":"boolean","default":false},"rules":{"type":"array","items":{"properties":{},"required":[],"type":"object"},"default":[],"maxItems":20}},"x-auditable":true,"key$":"spend_limits"},"store_id":{"type":"string","nullable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"store_id"},"stripe":{"type":"object","nullable":true,"properties":{"authorization":{"type":"string"},"usage_events":{"type":"array","items":{"properties":{},"required":[],"type":"object"}}},"required":["authorization","usage_events"],"x-auditable":true,"key$":"stripe"},"workers_ai_billing_mode":{"description":"Controls how Workers AI inference calls routed through this gateway are billed. 'postpaid' bills the account directly through Workers AI; 'unified' deducts credits via AI Gateway using neuron-based pricing and delegates billing to AI Gateway.","type":"string","default":"postpaid","enum":["postpaid","unified"],"x-auditable":true,"key$":"workers_ai_billing_mode"},"zdr":{"type":"boolean","x-auditable":true,"x-stainless-terraform-configurability":"computed_optional","key$":"zdr"}},"required":["rate_limiting_interval","rate_limiting_limit","collect_logs","cache_ttl","cache_invalidate_on_update"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"3ebbcb006d4d46d7bb6a8c7f14676cb0"},"index$":0},{"name":"id","in":"path","required":true,"schema":{"description":"Unique identifier of the AI Gateway within the account.","type":"string","example":"my-gateway","maxLength":64,"minLength":1,"pattern":"^[a-z0-9_]+(?:-[a-z0-9_]+)*$","x-auditable":true},"x-fern-parameter-name":"gateway-id","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_gateway_gateway_ref01_ent = client.AiGatewayGateway()
    let ai_gateway_gateway_ref01_data = setup.data.new.ai_gateway_gateway['ai_gateway_gateway_ref01']
    ai_gateway_gateway_ref01_data['account_id'] = setup.idmap['account01']
    ai_gateway_gateway_ref01_data['gateway_id'] = setup.idmap['gateway01']

    ai_gateway_gateway_ref01_data = (await ai_gateway_gateway_ref01_ent.create(ai_gateway_gateway_ref01_data)).data()
    assert(null != ai_gateway_gateway_ref01_data.id)


    // LIST
    const ai_gateway_gateway_ref01_match: any = {}
    ai_gateway_gateway_ref01_match['account_id'] = setup.idmap['account01']

    const ai_gateway_gateway_ref01_list = (await ai_gateway_gateway_ref01_ent.list(ai_gateway_gateway_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(ai_gateway_gateway_ref01_list, { id: ai_gateway_gateway_ref01_data.id })))


    // UPDATE
    const ai_gateway_gateway_ref01_data_up0: any = {}
    ai_gateway_gateway_ref01_data_up0.id = ai_gateway_gateway_ref01_data.id
    ai_gateway_gateway_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const ai_gateway_gateway_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-ai_gateway_gateway_ref01_' + setup.now }
    ;(ai_gateway_gateway_ref01_data_up0 as any)[ai_gateway_gateway_ref01_markdef_up0.name] = ai_gateway_gateway_ref01_markdef_up0.value

    const ai_gateway_gateway_ref01_resdata_up0 = (await ai_gateway_gateway_ref01_ent.update(ai_gateway_gateway_ref01_data_up0)).data()
    assert(ai_gateway_gateway_ref01_resdata_up0.id === ai_gateway_gateway_ref01_data_up0.id)

    assert((ai_gateway_gateway_ref01_resdata_up0 as any)[ai_gateway_gateway_ref01_markdef_up0.name] === ai_gateway_gateway_ref01_markdef_up0.value)


    // LOAD
    const ai_gateway_gateway_ref01_match_dt0: any = {}
    ai_gateway_gateway_ref01_match_dt0.id = ai_gateway_gateway_ref01_data.id
    const ai_gateway_gateway_ref01_data_dt0 = (await ai_gateway_gateway_ref01_ent.load(ai_gateway_gateway_ref01_match_dt0)).data()
    assert(ai_gateway_gateway_ref01_data_dt0.id === ai_gateway_gateway_ref01_data.id)


    // REMOVE
    const ai_gateway_gateway_ref01_match_rm0: any = { id: ai_gateway_gateway_ref01_data.id }
    await ai_gateway_gateway_ref01_ent.remove(ai_gateway_gateway_ref01_match_rm0)
  

    // LIST
    const ai_gateway_gateway_ref01_match_rt0: any = {}
    ai_gateway_gateway_ref01_match_rt0['account_id'] = setup.idmap['account01']

    const ai_gateway_gateway_ref01_list_rt0 = (await ai_gateway_gateway_ref01_ent.list(ai_gateway_gateway_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(ai_gateway_gateway_ref01_list_rt0, { id: ai_gateway_gateway_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ai_gateway_gateway/AiGatewayGatewayTestData.json')

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
    ['ai_gateway_gateway01','ai_gateway_gateway02','ai_gateway_gateway03','account01','account02','account03','gateway01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_AI_GATEWAY_GATEWAY_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_AI_GATEWAY_GATEWAY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_AI_GATEWAY_GATEWAY_ENTID']
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
  
