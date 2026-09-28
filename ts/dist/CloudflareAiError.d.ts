import { Context } from './Context';
declare class CloudflareAiError extends Error {
    isCloudflareAiError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CloudflareAiError };
