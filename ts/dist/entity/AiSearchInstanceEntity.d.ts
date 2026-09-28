import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiSearchInstance, AiSearchInstanceLoadMatch, AiSearchInstanceListMatch, AiSearchInstanceCreateData, AiSearchInstanceUpdateData, AiSearchInstanceRemoveMatch } from '../CloudflareAiTypes';
declare class AiSearchInstanceEntity extends CloudflareAiEntityBase<AiSearchInstance> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiSearchInstanceEntity): AiSearchInstanceEntity;
    load(this: any, reqmatch?: AiSearchInstanceLoadMatch, ctrl?: Control): Promise<AiSearchInstanceEntity>;
    list(this: any, reqmatch?: AiSearchInstanceListMatch, ctrl?: Control): Promise<AiSearchInstanceEntity[]>;
    create(this: any, reqdata?: AiSearchInstanceCreateData, ctrl?: Control): Promise<AiSearchInstanceEntity>;
    update(this: any, reqdata?: AiSearchInstanceUpdateData, ctrl?: Control): Promise<AiSearchInstanceEntity>;
    remove(this: any, reqmatch?: AiSearchInstanceRemoveMatch, ctrl?: Control): Promise<AiSearchInstanceEntity>;
}
export { AiSearchInstanceEntity };
