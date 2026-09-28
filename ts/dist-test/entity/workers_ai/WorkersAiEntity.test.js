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
(0, node_test_1.describe)('WorkersAiEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_AI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_AI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareAiSDK.test();
        const ent = testsdk.WorkersAi();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_AI_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workers_ai.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "extension": { "a": true, "h": "Extension", "n": "extension", "r": true, "t": "`$STRING`", "key$": "extension", "index$": 1 }, "input": { "a": true, "h": "Input", "n": "input", "r": true, "sh": "JSON object containing the selected model's input fields, such as prompt or messages.", "t": "`$OBJECT`", "key$": "input", "index$": 2 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 3 }, "mimeType": { "a": true, "h": "Mime Type", "n": "mimeType", "r": true, "t": "`$STRING`", "key$": "mimeType", "index$": 4 }, "model": { "a": true, "h": "Model", "n": "model", "r": true, "sh": "The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7)", "t": "`$STRING`", "key$": "model", "index$": 5 }, "options": { "a": true, "h": "Options", "n": "options", "r": false, "t": "`$OBJECT`", "key$": "options", "index$": 6 }, "output": { "a": true, "h": "Output", "n": "output", "r": true, "t": "`$OBJECT`", "key$": "output", "index$": 7 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "create": { "req": true, "type": "`$ARRAY`" }, "list": { "req": true, "type": "`$ARRAY`" } }, "r": false, "sh": "Model-specific output.", "t": "`$OBJECT`", "union": { "branches": 13, "count": 3, "depth": 2 }, "key$": "result", "index$": 8 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 9 } }, "name": "workers_ai", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/ai/run/{model_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "@cf/meta/llama-3.1-8b-instruct", "k": "param", "n": "model_name", "or": "model_name", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/ai/run/{model_name}", "q": { "exist": ["account_id", "model_name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "run" }, { "var": "model_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/ai/run", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/ai/run", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "run" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/ai/tomarkdown", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/ai/tomarkdown", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "tomarkdown" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/ai/authors/search", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/ai/authors/search", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "authors" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/ai/tasks/search", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/ai/tasks/search", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "tasks" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/ai/tomarkdown/supported", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/ai/tomarkdown/supported", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "tomarkdown" }, { "lit": "supported" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 2 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/ai/models/search", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "", "k": "query", "n": "author", "or": "author", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": false, "k": "query", "n": "hide_experimental", "or": "hide_experimental", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "ex": false, "k": "query", "n": "include_deprecated", "or": "include_deprecated", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": 100, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": "", "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "source", "or": "source", "r": false, "t": "`$NUMBER`", "index$": 7 }, { "a": true, "ex": "Text Generation", "k": "query", "n": "task", "or": "task", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/ai/models/search", "q": { "exist": ["account_id", "author", "format", "hide_experimental", "include_deprecated", "page", "per_page", "search", "source", "task"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "models" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/ai/models/schema", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "@cf/meta/llama-3.1-8b-instruct", "k": "query", "n": "model", "or": "model", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/ai/models/schema", "q": { "exist": ["account_id", "model"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "ai" }, { "lit": "models" }, { "lit": "schema" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.account"], ["$.main.kit.entity.account"]] }, "key$": "workers_ai", "name__orig": "workers_ai", "Name": "WorkersAi", "name_": "workers_ai", "name-": "workers-ai", "NAME": "WORKERS_AI", "index$": 37 }, { "active": true, "entity": "workers_ai", "key$": "BasicWorkersAiFlow", "kind": "basic", "name": "BasicWorkersAiFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "workers_ai_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "workers_ai_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "workers_ai_ref01", "srcdatavar": "workers_ai_ref01_data", "suffix": "_dt0" }, "m": { "id": "workers_ai01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workers_ai_ref01" } }], "index$": 2 }] }, 'WorkersAi', { "POST /accounts/{account_id}/ai/run/{model_name}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "oneOf": [{ "properties": { "text": { "description": "The text that you want to classify", "type": "string", "minLength": 1 } }, "required": ["text"], "title": "Text Classification", "type": "object" }, { "properties": { "guidance": { "description": "Controls how closely the generated image should adhere to the prompt; higher values make the image more aligned with the prompt", "type": "number", "default": 7.5 }, "height": { "description": "The height of the generated image in pixels", "type": "integer", "maximum": 2048, "minimum": 256 }, "image": { "description": "For use with img2img tasks. An array of integers that represent the image data constrained to 8-bit unsigned integer values", "type": "array", "items": { "description": "A value between 0 and 255", "type": "number" } }, "image_b64": { "description": "For use with img2img tasks. A base64-encoded string of the input image", "type": "string" }, "mask": { "description": "An array representing An array of integers that represent mask image data for inpainting constrained to 8-bit unsigned integer values", "type": "array", "items": { "description": "A value between 0 and 255", "type": "number" } }, "negative_prompt": { "description": "Text describing elements to avoid in the generated image", "type": "string" }, "num_steps": { "description": "The number of diffusion steps; higher values can improve quality but take longer", "type": "integer", "default": 20, "maximum": 20 }, "prompt": { "description": "A text description of the image you want to generate", "type": "string", "minLength": 1 }, "seed": { "description": "Random seed for reproducibility of the image generation", "type": "integer" }, "strength": { "description": "A value between 0 and 1 indicating how strongly to apply the transformation during img2img tasks; lower values make the output closer to the input image", "type": "number", "default": 1 }, "width": { "description": "The width of the generated image in pixels", "type": "integer", "maximum": 2048, "minimum": 256 } }, "required": ["prompt"], "title": "Text To Image", "type": "object" }, { "properties": { "lang": { "description": "The speech language (e.g., 'en' for English, 'fr' for French). Defaults to 'en' if not specified", "type": "string", "default": "en" }, "prompt": { "description": "A text description of the audio you want to generate", "type": "string", "minLength": 1 } }, "required": ["prompt"], "title": "Text To Speech", "type": "object" }, { "properties": { "text": { "oneOf": [{}, {}] } }, "required": ["text"], "title": "Text Embeddings", "type": "object" }, { "oneOf": [{ "format": "binary", "type": "string" }, { "properties": { "audio": {}, "source_lang": {}, "target_lang": {} }, "required": ["audio"], "type": "object" }], "title": "Automatic Speech Recognition", "type": "object" }, { "oneOf": [{ "description": "The image to classify", "format": "binary", "type": "string" }, { "properties": { "image": {} }, "required": ["image"], "type": "object" }], "title": "Image Classification", "type": "object" }, { "oneOf": [{ "description": "The image to use for detection", "format": "binary", "type": "string" }, { "properties": { "image": {} }, "type": "object" }], "title": "Object Detection", "type": "object" }, { "oneOf": [{ "properties": { "frequency_penalty": {}, "lora": {}, "max_tokens": {}, "presence_penalty": {}, "prompt": {}, "raw": {}, "repetition_penalty": {}, "response_format": {}, "seed": {}, "stream": {}, "temperature": {}, "top_k": {}, "top_p": {} }, "required": ["prompt"], "title": "Prompt" }, { "properties": { "frequency_penalty": {}, "functions": {}, "max_tokens": {}, "messages": {}, "presence_penalty": {}, "raw": {}, "repetition_penalty": {}, "response_format": {}, "seed": {}, "stream": {}, "temperature": {}, "tools": {}, "top_k": {}, "top_p": {} }, "required": ["messages"], "title": "Messages" }], "title": "Text Generation", "type": "object" }, { "properties": { "source_lang": { "description": "The language code of the source text (e.g., 'en' for English). Defaults to 'en' if not specified", "type": "string", "default": "en" }, "target_lang": { "description": "The language code to translate the text into (e.g., 'es' for Spanish)", "type": "string" }, "text": { "description": "The text to be translated", "type": "string", "minLength": 1 } }, "required": ["text", "target_lang"], "title": "Translation", "type": "object" }, { "properties": { "input_text": { "description": "The text that you want the model to summarize", "type": "string", "minLength": 1 }, "max_length": { "description": "The maximum length of the generated summary in tokens", "type": "integer", "default": 1024 } }, "required": ["input_text"], "title": "Summarization", "type": "object" }, { "oneOf": [{ "description": "Binary string representing the image contents.", "format": "binary", "type": "string" }, { "properties": { "frequency_penalty": {}, "image": {}, "max_tokens": {}, "presence_penalty": {}, "prompt": {}, "raw": {}, "repetition_penalty": {}, "seed": {}, "temperature": {}, "top_k": {}, "top_p": {} }, "required": ["image"], "type": "object" }], "title": "Image To Text", "type": "object" }, { "oneOf": [{ "properties": { "frequency_penalty": {}, "ignore_eos": {}, "image": {}, "max_tokens": {}, "presence_penalty": {}, "prompt": {}, "repetition_penalty": {}, "seed": {}, "temperature": {}, "top_k": {}, "top_p": {} }, "required": ["prompt", "image"], "type": "object" }, { "properties": { "frequency_penalty": {}, "ignore_eos": {}, "image": {}, "max_tokens": {}, "messages": {}, "presence_penalty": {}, "repetition_penalty": {}, "seed": {}, "temperature": {}, "top_k": {}, "top_p": {} }, "required": ["messages", "image"], "type": "object" }], "title": "Image Text To Text", "type": "object" }, { "properties": { "image": { "description": "Image in base64 encoded format.", "type": "string", "minLength": 1 }, "text": { "type": "array", "items": { "minLength": 1, "type": "string" } } }, "title": "Multimodal Embeddings", "type": "object" }], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID used for this AI model request.", "required": true, "schema": { "description": "Cloudflare account ID used for this AI model request.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }, { "name": "model_name", "in": "path", "description": "Workers AI model identifier, including its namespace and model name.", "required": true, "schema": { "description": "Workers AI model identifier, including its namespace and model name.", "type": "string", "example": "@cf/meta/llama-3.1-8b-instruct" }, "index$": 1 }] }, "POST /accounts/{account_id}/ai/run": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "input": { "description": "JSON object containing the selected model's input fields, such as prompt or messages. Do not include model or options inside this object.", "type": "object", "example": { "prompt": "Tell me a joke" }, "key$": "input" }, "model": { "description": "The AI model to execute (e.g., @cf/google/gemma-4-26b-a4b-it, openai/gpt-5.5, anthropic/claude-opus-4.7)", "type": "string", "example": "openai/gpt-5.5", "key$": "model" }, "options": { "type": "object", "properties": { "extraHeaders": { "description": "Additional headers to pass to the AI provider", "type": "object", "additionalProperties": { "type": "string" } }, "gateway": { "type": "object", "properties": { "cacheTtl": {}, "id": {}, "skipCache": {} } } }, "key$": "options" } }, "required": ["model", "input"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID used for this AI model request.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }] }, "POST /accounts/{account_id}/ai/tomarkdown": { "protocol": "http", "requestBody": { "content": { "multipart/form-data": { "schema": { "type": "object", "properties": { "files": { "description": "Files to convert, supplied as multipart file uploads.", "type": "array", "items": { "format": "binary", "type": "string" } } }, "required": ["files"] } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID used for this AI model request.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }] }, "GET /accounts/{account_id}/ai/authors/search": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }] }, "GET /accounts/{account_id}/ai/tasks/search": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }] }, "GET /accounts/{account_id}/ai/tomarkdown/supported": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID used for this AI model request.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }] }, "GET /accounts/{account_id}/ai/models/search": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }, { "name": "per_page", "in": "query", "schema": { "type": "integer", "default": 100 }, "index$": 1 }, { "name": "page", "in": "query", "schema": { "type": "integer", "default": 1 }, "index$": 2 }, { "name": "task", "in": "query", "description": "Filter by Task Name.", "schema": { "description": "Filter by Task Name.", "type": "string", "example": "Text Generation", "default": "" }, "index$": 3 }, { "name": "author", "in": "query", "description": "Filter by Author.", "schema": { "description": "Filter by Author.", "type": "string", "default": "" }, "index$": 4 }, { "name": "source", "in": "query", "description": "Filter by Source Id.", "schema": { "description": "Filter by Source Id.", "type": "number" }, "index$": 5 }, { "name": "hide_experimental", "in": "query", "description": "Filter to hide experimental models.", "schema": { "description": "Filter to hide experimental models.", "type": "boolean", "default": false }, "index$": 6 }, { "name": "search", "in": "query", "description": "Search.", "schema": { "description": "Search.", "type": "string", "default": "" }, "index$": 7 }, { "name": "include_deprecated", "in": "query", "description": "If true, include models for up to three months after their deprecation date. Defaults to false.", "schema": { "description": "If true, include models for up to three months after their deprecation date. Defaults to false.", "type": "boolean", "default": false }, "index$": 8 }, { "name": "format", "in": "query", "description": "If set, return models in the requested marketplace format instead of the default response.", "schema": { "description": "If set, return models in the requested marketplace format instead of the default response.", "type": "string", "enum": ["openrouter"] }, "index$": 9 }] }, "GET /accounts/{account_id}/ai/models/schema": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account ID used for this AI model request.", "required": true, "schema": { "description": "Cloudflare account ID used for this AI model request.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }, { "name": "model", "in": "query", "description": "AI model identifier, including its namespace and model name.", "required": true, "schema": { "description": "AI model identifier, including its namespace and model name.", "type": "string", "example": "@cf/meta/llama-3.1-8b-instruct" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const workers_ai_ref01_ent = client.WorkersAi();
        let workers_ai_ref01_data = setup.data.new.workers_ai['workers_ai_ref01'];
        workers_ai_ref01_data['account_id'] = setup.idmap['account01'];
        workers_ai_ref01_data = (await workers_ai_ref01_ent.create(workers_ai_ref01_data)).data();
        (0, node_assert_1.default)(null != workers_ai_ref01_data);
        // LIST
        const workers_ai_ref01_match = {};
        workers_ai_ref01_match['account_id'] = setup.idmap['account01'];
        const workers_ai_ref01_list = (await workers_ai_ref01_ent.list(workers_ai_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workers_ai/WorkersAiTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareAiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workers_ai01', 'workers_ai02', 'workers_ai03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_AI_TEST_WORKERS_AI_ENTID': idmap,
        'CLOUDFLARE_AI_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_AI_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_AI_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_AI_TEST_WORKERS_AI_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_AI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_AI_TEST_WORKERS_AI_ENTID'];
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
//# sourceMappingURL=WorkersAiEntity.test.js.map