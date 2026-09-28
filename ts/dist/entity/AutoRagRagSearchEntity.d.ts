import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AutoRagRagSearch, AutoRagRagSearchCreateData } from '../CloudflareAiTypes';
declare class AutoRagRagSearchEntity extends CloudflareAiEntityBase<AutoRagRagSearch> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AutoRagRagSearchEntity): AutoRagRagSearchEntity;
    create(this: any, reqdata?: AutoRagRagSearchCreateData, ctrl?: Control): Promise<AutoRagRagSearchEntity>;
}
export { AutoRagRagSearchEntity };
