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
(0, node_test_1.describe)('AigBillingGetTopupEligibilityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_AI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareAiSDK.test();
        const ent = testsdk.AigBillingGetTopupEligibility();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'aig_billing_get_topup_eligibility.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "payment_methods": { "a": true, "h": "Payment Methods", "n": "payment_methods", "r": false, "sh": "Account-level payment methods, forwarded by the dashboard.", "t": "`$ARRAY`", "key$": "payment_methods", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 3 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "t": "`$OBJECT`", "key$": "result_info", "index$": 4 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 5 } }, "name": "aig_billing_get_topup_eligibility", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/ai-gateway/billing/topup/eligibility", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/ai-gateway/billing/topup/eligibility", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai-gateway" }, { "lit": "billing" }, { "lit": "topup" }, { "lit": "eligibility" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "aig_billing_get_topup_eligibility", "name__orig": "aig_billing_get_topup_eligibility", "Name": "AigBillingGetTopupEligibility", "name_": "aig_billing_get_topup_eligibility", "name-": "aig-billing-get-topup-eligibility", "NAME": "AIG_BILLING_GET_TOPUP_ELIGIBILITY", "index$": 25 }, { "active": true, "entity": "aig_billing_get_topup_eligibility", "key$": "BasicAigBillingGetTopupEligibilityFlow", "kind": "basic", "name": "BasicAigBillingGetTopupEligibilityFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "aig_billing_get_topup_eligibility_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'AigBillingGetTopupEligibility', { "POST /accounts/{account_id}/ai-gateway/billing/topup/eligibility": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "payment_methods": { "description": "Account-level payment methods, forwarded by the dashboard.", "type": "array", "items": { "properties": { "default": { "description": "Whether this is the account default payment method.", "type": "boolean", "example": true }, "last_four": { "description": "Last 4 digits, for display copy only.", "type": "string", "example": "4242" }, "type": { "description": "Payment-method type. Absent or unrecognized is treated as non-card (does not error). Known values: PAYPAL, CREDIT_CARD, APPLE_PAY, GOOGLE_PAY, ACH_DIRECT_DEBIT, SEPA_DEBIT, CASHAPP, LINK, CRYPTO.", "type": "string", "example": "CREDIT_CARD" } }, "type": "object" }, "maxItems": 100, "key$": "payment_methods" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID.", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const aig_billing_get_topup_eligibility_ref01_ent = client.AigBillingGetTopupEligibility();
        let aig_billing_get_topup_eligibility_ref01_data = setup.data.new.aig_billing_get_topup_eligibility['aig_billing_get_topup_eligibility_ref01'];
        aig_billing_get_topup_eligibility_ref01_data['account_id'] = setup.idmap['account01'];
        aig_billing_get_topup_eligibility_ref01_data = (await aig_billing_get_topup_eligibility_ref01_ent.create(aig_billing_get_topup_eligibility_ref01_data)).data();
        (0, node_assert_1.default)(null != aig_billing_get_topup_eligibility_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/aig_billing_get_topup_eligibility/AigBillingGetTopupEligibilityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareAiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['aig_billing_get_topup_eligibility01', 'aig_billing_get_topup_eligibility02', 'aig_billing_get_topup_eligibility03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_AI_TEST_AIG_BILLING_GET_TOPUP_ELIGIBILITY_ENTID': idmap,
        'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_AI_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_AI_TEST_AIG_BILLING_GET_TOPUP_ELIGIBILITY_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_AI_TEST_AIG_BILLING_GET_TOPUP_ELIGIBILITY_ENTID'];
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
//# sourceMappingURL=AigBillingGetTopupEligibilityEntity.test.js.map