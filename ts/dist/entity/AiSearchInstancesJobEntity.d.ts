import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiSearchInstancesJob, AiSearchInstancesJobLoadMatch, AiSearchInstancesJobListMatch, AiSearchInstancesJobCreateData, AiSearchInstancesJobUpdateData } from '../CloudflareAiTypes';
declare class AiSearchInstancesJobEntity extends CloudflareAiEntityBase<AiSearchInstancesJob> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiSearchInstancesJobEntity): AiSearchInstancesJobEntity;
    load(this: any, reqmatch?: AiSearchInstancesJobLoadMatch, ctrl?: Control): Promise<AiSearchInstancesJobEntity>;
    list(this: any, reqmatch?: AiSearchInstancesJobListMatch, ctrl?: Control): Promise<AiSearchInstancesJobEntity[]>;
    create(this: any, reqdata?: AiSearchInstancesJobCreateData, ctrl?: Control): Promise<AiSearchInstancesJobEntity>;
    update(this: any, reqdata?: AiSearchInstancesJobUpdateData, ctrl?: Control): Promise<AiSearchInstancesJobEntity>;
}
export { AiSearchInstancesJobEntity };
