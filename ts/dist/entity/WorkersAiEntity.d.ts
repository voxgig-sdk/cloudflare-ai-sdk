import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { WorkersAi, WorkersAiLoadMatch, WorkersAiListMatch, WorkersAiCreateData } from '../CloudflareAiTypes';
declare class WorkersAiEntity extends CloudflareAiEntityBase<WorkersAi> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: WorkersAiEntity): WorkersAiEntity;
    load(this: any, reqmatch?: WorkersAiLoadMatch, ctrl?: Control): Promise<WorkersAiEntity>;
    list(this: any, reqmatch?: WorkersAiListMatch, ctrl?: Control): Promise<WorkersAiEntity[]>;
    create(this: any, reqdata?: WorkersAiCreateData, ctrl?: Control): Promise<WorkersAiEntity>;
}
export { WorkersAiEntity };
