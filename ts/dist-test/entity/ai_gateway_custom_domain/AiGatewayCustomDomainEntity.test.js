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
(0, node_test_1.describe)('AiGatewayCustomDomainEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_AI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareAiSDK.test();
        const ent = testsdk.AiGatewayCustomDomain();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_gateway_custom_domain.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "cname_target": { "a": true, "h": "Cname Target", "n": "cname_target", "r": true, "t": "`$STRING`", "key$": "cname_target", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "sh": "epoch milliseconds", "t": "`$INTEGER`", "key$": "created_at", "index$": 1 }, "domain": { "a": true, "h": "Domain", "n": "domain", "r": true, "sh": "Custom hostname that you own, such as `ai.example.com`.", "t": "`$STRING`", "key$": "domain", "index$": 2 }, "gateway_id": { "a": true, "h": "Gateway Id", "n": "gateway_id", "r": true, "sh": "Unique identifier of the AI Gateway within the account.", "t": "`$STRING`", "key$": "gateway_id", "index$": 3 }, "hostname": { "a": true, "h": "Hostname", "n": "hostname", "r": true, "sh": "Custom hostname that you own, such as `ai.example.com`.", "t": "`$STRING`", "key$": "hostname", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 5 }, "minTLS": { "a": true, "h": "Min Tls", "n": "minTLS", "r": false, "t": "`$STRING`", "key$": "minTLS", "index$": 6 }, "modified_at": { "a": true, "h": "Modified At", "n": "modified_at", "r": true, "sh": "epoch milliseconds", "t": "`$INTEGER`", "key$": "modified_at", "index$": 7 }, "ssl_hostname_id": { "a": true, "h": "Ssl Hostname Id", "n": "ssl_hostname_id", "r": true, "t": "`$STRING`", "key$": "ssl_hostname_id", "index$": 8 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 9 }, "zone_id": { "a": true, "h": "Zone Id", "n": "zone_id", "r": true, "sh": "ID of the Cloudflare zone that contains the custom hostname.", "t": "`$STRING`", "key$": "zone_id", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "ai_gateway_custom_domain", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "3ebbcb006d4d46d7bb6a8c7f14676cb0", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-gateway", "k": "param", "n": "gateway_id", "or": "gateway_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains", "q": { "exist": ["account_id", "gateway_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai-gateway" }, { "lit": "gateways" }, { "var": "gateway_id" }, { "lit": "custom-domains" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "3ebbcb006d4d46d7bb6a8c7f14676cb0", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-gateway", "k": "param", "n": "gateway_id", "or": "gateway_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains", "q": { "exist": ["account_id", "gateway_id", "page", "per_page", "search", "status"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai-gateway" }, { "lit": "gateways" }, { "var": "gateway_id" }, { "lit": "custom-domains" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "3ebbcb006d4d46d7bb6a8c7f14676cb0", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-gateway", "k": "param", "n": "gateway_id", "or": "gateway_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "ai.acme.com", "k": "param", "n": "id", "or": "hostname", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}", "q": { "exist": ["account_id", "gateway_id", "id"] }, "r": { "param": { "hostname": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai-gateway" }, { "lit": "gateways" }, { "var": "gateway_id" }, { "lit": "custom-domains" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "3ebbcb006d4d46d7bb6a8c7f14676cb0", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my-gateway", "k": "param", "n": "gateway_id", "or": "gateway_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "ai.acme.com", "k": "param", "n": "id", "or": "hostname", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}", "q": { "exist": ["account_id", "gateway_id", "id"] }, "r": { "param": { "hostname": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai-gateway" }, { "lit": "gateways" }, { "var": "gateway_id" }, { "lit": "custom-domains" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "ai_gateway_custom_domain", "name__orig": "ai_gateway_custom_domain", "Name": "AiGatewayCustomDomain", "name_": "ai_gateway_custom_domain", "name-": "ai-gateway-custom-domain", "NAME": "AI_GATEWAY_CUSTOM_DOMAIN", "index$": 2 }, { "active": true, "entity": "ai_gateway_custom_domain", "key$": "BasicAiGatewayCustomDomainFlow", "kind": "basic", "name": "BasicAiGatewayCustomDomainFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ai_gateway_custom_domain_ref01" }, "m": { "account_id": "account01", "gateway_id": "gateway01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "gateway_id": "gateway01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "ai_gateway_custom_domain_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "ai_gateway_custom_domain_ref01", "srcdatavar": "ai_gateway_custom_domain_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "gateway_id": "gateway01", "id": "ai_gateway_custom_domain01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ai_gateway_custom_domain_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "ai_gateway_custom_domain_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "gateway_id": "gateway01", "id": "ai_gateway_custom_domain01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01", "gateway_id": "gateway01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "ai_gateway_custom_domain_ref01" } }], "index$": 4 }] }, 'AiGatewayCustomDomain', { "POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "domain": { "description": "Custom hostname that you own, such as `ai.example.com`.", "type": "string", "example": "ai.acme.com", "maxLength": 253, "minLength": 1, "pattern": "^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$", "x-auditable": true, "key$": "domain" }, "minTLS": { "type": "string", "enum": ["1.0", "1.1", "1.2", "1.3"], "x-auditable": true, "key$": "minTLS" }, "zone_id": { "description": "ID of the Cloudflare zone that contains the custom hostname.", "type": "string", "example": "395566f4c8a5b9d2a5fc0d457b007c44", "pattern": "^[0-9a-f]{32}$", "x-auditable": true, "key$": "zone_id" } }, "required": ["domain", "zone_id"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0" }, "index$": 0 }, { "name": "gateway_id", "in": "path", "required": true, "schema": { "description": "Unique identifier of the AI Gateway within the account.", "type": "string", "example": "my-gateway", "maxLength": 64, "minLength": 1, "pattern": "^[a-z0-9_]+(?:-[a-z0-9_]+)*$", "x-auditable": true }, "index$": 1 }] }, "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0" }, "index$": 0 }, { "name": "gateway_id", "in": "path", "required": true, "schema": { "description": "Unique identifier of the AI Gateway within the account.", "type": "string", "example": "my-gateway", "maxLength": 64, "minLength": 1, "pattern": "^[a-z0-9_]+(?:-[a-z0-9_]+)*$", "x-auditable": true }, "index$": 1 }, { "name": "page", "in": "query", "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 2 }, { "name": "per_page", "in": "query", "schema": { "type": "integer", "default": 20, "maximum": 100, "minimum": 1 }, "index$": 3 }, { "name": "status", "in": "query", "schema": { "type": "string", "enum": ["initializing", "pending_dcv", "active", "blocked", "error"], "x-auditable": true }, "index$": 4 }, { "name": "search", "in": "query", "schema": { "description": "Search by hostname", "type": "string" }, "index$": 5 }] }, "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0" }, "index$": 0 }, { "name": "gateway_id", "in": "path", "required": true, "schema": { "description": "Unique identifier of the AI Gateway within the account.", "type": "string", "example": "my-gateway", "maxLength": 64, "minLength": 1, "pattern": "^[a-z0-9_]+(?:-[a-z0-9_]+)*$", "x-auditable": true }, "index$": 1 }, { "name": "hostname", "in": "path", "required": true, "schema": { "description": "Custom hostname that you own, such as `ai.example.com`.", "type": "string", "example": "ai.acme.com", "maxLength": 253, "minLength": 1, "pattern": "^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$", "x-auditable": true }, "index$": 2 }] }, "DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/custom-domains/{hostname}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "3ebbcb006d4d46d7bb6a8c7f14676cb0" }, "index$": 0 }, { "name": "gateway_id", "in": "path", "required": true, "schema": { "description": "Unique identifier of the AI Gateway within the account.", "type": "string", "example": "my-gateway", "maxLength": 64, "minLength": 1, "pattern": "^[a-z0-9_]+(?:-[a-z0-9_]+)*$", "x-auditable": true }, "index$": 1 }, { "name": "hostname", "in": "path", "required": true, "schema": { "description": "Custom hostname that you own, such as `ai.example.com`.", "type": "string", "example": "ai.acme.com", "maxLength": 253, "minLength": 1, "pattern": "^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$", "x-auditable": true }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ai_gateway_custom_domain_ref01_ent = client.AiGatewayCustomDomain();
        let ai_gateway_custom_domain_ref01_data = setup.data.new.ai_gateway_custom_domain['ai_gateway_custom_domain_ref01'];
        ai_gateway_custom_domain_ref01_data['account_id'] = setup.idmap['account01'];
        ai_gateway_custom_domain_ref01_data['gateway_id'] = setup.idmap['gateway01'];
        ai_gateway_custom_domain_ref01_data = (await ai_gateway_custom_domain_ref01_ent.create(ai_gateway_custom_domain_ref01_data)).data();
        (0, node_assert_1.default)(null != ai_gateway_custom_domain_ref01_data.id);
        // LIST
        const ai_gateway_custom_domain_ref01_match = {};
        ai_gateway_custom_domain_ref01_match['account_id'] = setup.idmap['account01'];
        ai_gateway_custom_domain_ref01_match['gateway_id'] = setup.idmap['gateway01'];
        const ai_gateway_custom_domain_ref01_list = (await ai_gateway_custom_domain_ref01_ent.list(ai_gateway_custom_domain_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(ai_gateway_custom_domain_ref01_list, { id: ai_gateway_custom_domain_ref01_data.id })));
        // LOAD
        const ai_gateway_custom_domain_ref01_match_dt0 = {};
        ai_gateway_custom_domain_ref01_match_dt0.id = ai_gateway_custom_domain_ref01_data.id;
        const ai_gateway_custom_domain_ref01_data_dt0 = (await ai_gateway_custom_domain_ref01_ent.load(ai_gateway_custom_domain_ref01_match_dt0)).data();
        (0, node_assert_1.default)(ai_gateway_custom_domain_ref01_data_dt0.id === ai_gateway_custom_domain_ref01_data.id);
        // REMOVE
        const ai_gateway_custom_domain_ref01_match_rm0 = { id: ai_gateway_custom_domain_ref01_data.id };
        await ai_gateway_custom_domain_ref01_ent.remove(ai_gateway_custom_domain_ref01_match_rm0);
        // LIST
        const ai_gateway_custom_domain_ref01_match_rt0 = {};
        ai_gateway_custom_domain_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        ai_gateway_custom_domain_ref01_match_rt0['gateway_id'] = setup.idmap['gateway01'];
        const ai_gateway_custom_domain_ref01_list_rt0 = (await ai_gateway_custom_domain_ref01_ent.list(ai_gateway_custom_domain_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(ai_gateway_custom_domain_ref01_list_rt0, { id: ai_gateway_custom_domain_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_gateway_custom_domain/AiGatewayCustomDomainTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareAiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_gateway_custom_domain01', 'ai_gateway_custom_domain02', 'ai_gateway_custom_domain03', 'account01', 'account02', 'account03', 'gateway01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_DOMAIN_ENTID': idmap,
        'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_AI_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_DOMAIN_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_AI_TEST_AI_GATEWAY_CUSTOM_DOMAIN_ENTID'];
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
//# sourceMappingURL=AiGatewayCustomDomainEntity.test.js.map