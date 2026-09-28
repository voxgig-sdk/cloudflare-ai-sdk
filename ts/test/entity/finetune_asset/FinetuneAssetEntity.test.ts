

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


describe('FinetuneAssetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_AI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareAiSDK.test()
    const ent = testsdk.FinetuneAsset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'finetune_asset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"file_name":{"a":true,"h":"File Name","n":"file_name","r":true,"t":"`$STRING`","key$":"file_name","index$":0},"file_url":{"a":true,"h":"File Url","n":"file_url","r":true,"t":"`$STRING`","key$":"file_url","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2}},"id":{"field":"id","name":"id"},"name":"finetune_asset","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets/{file_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"bc451aef-f723-4b26-a6b2-901afd2e7a8a","k":"param","n":"finetune_id","or":"finetune_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"adapter_model.safetensors","k":"param","n":"id","or":"file_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets/{file_name}","q":{"exist":["account_id","finetune_id","id"]},"r":{"param":{"file_name":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"ai"},{"lit":"finetunes"},{"var":"finetune_id"},{"lit":"finetune-assets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"finetune_asset","name__orig":"finetune_asset","Name":"FinetuneAsset","name_":"finetune_asset","name-":"finetune-asset","NAME":"FINETUNE_ASSET","index$":34}, {"active":true,"entity":"finetune_asset","key$":"BasicFinetuneAssetFlow","kind":"basic","name":"BasicFinetuneAssetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"finetune_asset_ref01","srcdatavar":"finetune_asset_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","finetune_id":"finetune01","id":"finetune_asset01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-finetune_asset_ref01"}}],"index$":0}]}, 'FinetuneAsset', {"GET /accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets/{file_name}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353"},"index$":0},{"name":"finetune_id","in":"path","required":true,"schema":{"type":"string","example":"bc451aef-f723-4b26-a6b2-901afd2e7a8a"},"index$":1},{"name":"file_name","in":"path","required":true,"schema":{"type":"string","example":"adapter_model.safetensors"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let finetune_asset_ref01_data = Object.values(setup.data.existing.finetune_asset)[0] as any

    // LOAD
    const finetune_asset_ref01_ent = client.FinetuneAsset()
    const finetune_asset_ref01_match_dt0: any = {}
    finetune_asset_ref01_match_dt0.id = finetune_asset_ref01_data.id
    const finetune_asset_ref01_data_dt0 = (await finetune_asset_ref01_ent.load(finetune_asset_ref01_match_dt0)).data()
    assert(finetune_asset_ref01_data_dt0.id === finetune_asset_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/finetune_asset/FinetuneAssetTestData.json')

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
    ['finetune_asset01','finetune_asset02','finetune_asset03','account01','account02','account03','finetune01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_AI_TEST_FINETUNE_ASSET_ENTID': idmap,
    'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_AI_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_AI_TEST_FINETUNE_ASSET_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_AI_TEST_FINETUNE_ASSET_ENTID']
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
  
