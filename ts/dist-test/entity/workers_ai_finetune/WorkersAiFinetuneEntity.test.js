"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WorkersAiFinetuneEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_AI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareAiSDK.test();
        const ent = testsdk.WorkersAiFinetune();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workers_ai_finetune.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 1 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 2 }, "model": { "a": true, "h": "Model", "n": "model", "r": true, "t": "`$STRING`", "key$": "model", "index$": 3 }, "modified_at": { "a": true, "fo": "date-time", "h": "Modified At", "n": "modified_at", "r": true, "t": "`$STRING`", "key$": "modified_at", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 5 }, "public": { "a": true, "h": "Public", "n": "public", "op": { "create": { "req": false, "type": "`$BOOLEAN`" } }, "r": true, "t": "`$BOOLEAN`", "key$": "public", "index$": 6 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "workers_ai_finetune", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "bc451aef-f723-4b26-a6b2-901afd2e7a8a", "k": "param", "n": "finetune_id", "or": "finetune_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets", "q": { "exist": ["account_id", "finetune_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "finetunes" }, { "var": "finetune_id" }, { "lit": "finetune-assets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/ai/finetunes", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/ai/finetunes", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "finetunes" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/ai/finetunes/public", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 20, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/ai/finetunes/public", "q": { "exist": ["account_id", "limit", "offset", "order_by"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "finetunes" }, { "lit": "public" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/ai/finetunes", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/ai/finetunes", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "finetunes" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/ai/finetunes/{finetune_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "bc451aef-f723-4b26-a6b2-901afd2e7a8a", "k": "param", "n": "id", "or": "finetune_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/ai/finetunes/{finetune_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "finetune_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "finetunes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.account"], ["$.main.kit.entity.account"]] }, "key$": "workers_ai_finetune", "name__orig": "workers_ai_finetune", "Name": "WorkersAiFinetune", "name_": "workers_ai_finetune", "name-": "workers-ai-finetune", "NAME": "WORKERS_AI_FINETUNE", "index$": 40 }, { "active": true, "entity": "workers_ai_finetune", "key$": "BasicWorkersAiFinetuneFlow", "kind": "basic", "name": "BasicWorkersAiFinetuneFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "workers_ai_finetune_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "workers_ai_finetune_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "workers_ai_finetune_ref01", "srcdatavar": "workers_ai_finetune_ref01_data", "suffix": "_dt0" }, "m": { "id": "workers_ai_finetune01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workers_ai_finetune_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "workers_ai_finetune_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "workers_ai_finetune01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "workers_ai_finetune_ref01" } }], "index$": 4 }] }, 'WorkersAiFinetune', { "POST /accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets": { "protocol": "http", "requestBody": { "description": "Finetune asset file upload.", "content": { "multipart/form-data": { "schema": { "type": "object", "properties": { "file": { "description": "File to upload.", "type": "string", "format": "binary" }, "file_name": { "description": "Name of the file (adapter_config.json or adapter_model.safetensors).", "type": "string" } }, "required": ["file_name", "file"] } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }, { "name": "finetune_id", "in": "path", "required": true, "schema": { "type": "string", "example": "bc451aef-f723-4b26-a6b2-901afd2e7a8a" }, "index$": 1 }] }, "POST /accounts/{account_id}/ai/finetunes": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "description": { "type": "string", "key$": "description" }, "model": { "type": "string", "x-auditable": true, "key$": "model" }, "name": { "type": "string", "x-auditable": true, "key$": "name" }, "public": { "type": "boolean", "default": false, "x-auditable": true, "key$": "public" } }, "required": ["model", "name"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }] }, "GET /accounts/{account_id}/ai/finetunes/public": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }, { "name": "limit", "in": "query", "description": "Pagination Limit.", "schema": { "description": "Pagination Limit.", "type": "number", "default": 20 }, "index$": 1 }, { "name": "offset", "in": "query", "description": "Pagination Offset.", "schema": { "description": "Pagination Offset.", "type": "number", "default": 0 }, "index$": 2 }, { "name": "orderBy", "in": "query", "description": "Order By Column Name.", "schema": { "description": "Order By Column Name.", "type": "string" }, "index$": 3 }] }, "GET /accounts/{account_id}/ai/finetunes": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }] }, "DELETE /accounts/{account_id}/ai/finetunes/{finetune_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }, { "name": "finetune_id", "in": "path", "required": true, "schema": { "type": "string", "example": "bc451aef-f723-4b26-a6b2-901afd2e7a8a" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const workers_ai_finetune_ref01_ent = client.WorkersAiFinetune();
        let workers_ai_finetune_ref01_data = setup.data.new.workers_ai_finetune['workers_ai_finetune_ref01'];
        workers_ai_finetune_ref01_data['account_id'] = setup.idmap['account01'];
        workers_ai_finetune_ref01_data = (await workers_ai_finetune_ref01_ent.create(workers_ai_finetune_ref01_data)).data();
        (0, node_assert_1.default)(null != workers_ai_finetune_ref01_data.id);
        // LIST
        const workers_ai_finetune_ref01_match = {};
        workers_ai_finetune_ref01_match['account_id'] = setup.idmap['account01'];
        const workers_ai_finetune_ref01_list = (await workers_ai_finetune_ref01_ent.list(workers_ai_finetune_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(workers_ai_finetune_ref01_list, { id: workers_ai_finetune_ref01_data.id })));
        // LOAD
        const workers_ai_finetune_ref01_match_dt0 = {};
        workers_ai_finetune_ref01_match_dt0.id = workers_ai_finetune_ref01_data.id;
        const workers_ai_finetune_ref01_data_dt0 = (await workers_ai_finetune_ref01_ent.load(workers_ai_finetune_ref01_match_dt0)).data();
        (0, node_assert_1.default)(workers_ai_finetune_ref01_data_dt0.id === workers_ai_finetune_ref01_data.id);
        // REMOVE
        const workers_ai_finetune_ref01_match_rm0 = { id: workers_ai_finetune_ref01_data.id };
        await workers_ai_finetune_ref01_ent.remove(workers_ai_finetune_ref01_match_rm0);
        // LIST
        const workers_ai_finetune_ref01_match_rt0 = {};
        workers_ai_finetune_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const workers_ai_finetune_ref01_list_rt0 = (await workers_ai_finetune_ref01_ent.list(workers_ai_finetune_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(workers_ai_finetune_ref01_list_rt0, { id: workers_ai_finetune_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workers_ai_finetune/WorkersAiFinetuneTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareAiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workers_ai_finetune01', 'workers_ai_finetune02', 'workers_ai_finetune03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_AI_TEST_WORKERS_AI_FINETUNE_ENTID': idmap,
        'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_AI_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_AI_TEST_WORKERS_AI_FINETUNE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_AI_TEST_WORKERS_AI_FINETUNE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareAiSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=WorkersAiFinetuneEntity.test.js.map