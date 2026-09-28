"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAiError = void 0;
class CloudflareAiError extends Error {
    isCloudflareAiError = true;
    sdk = 'CloudflareAi';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloudflareAiError = CloudflareAiError;
//# sourceMappingURL=CloudflareAiError.js.map