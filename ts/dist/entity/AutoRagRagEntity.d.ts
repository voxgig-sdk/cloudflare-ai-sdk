import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AutoRagRag, AutoRagRagListMatch, AutoRagRagUpdateData } from '../CloudflareAiTypes';
declare class AutoRagRagEntity extends CloudflareAiEntityBase<AutoRagRag> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AutoRagRagEntity): AutoRagRagEntity;
    list(this: any, reqmatch?: AutoRagRagListMatch, ctrl?: Control): Promise<AutoRagRagEntity[]>;
    update(this: any, reqdata?: AutoRagRagUpdateData, ctrl?: Control): Promise<AutoRagRagEntity>;
}
export { AutoRagRagEntity };
