import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { WorkersAiFinetune, WorkersAiFinetuneLoadMatch, WorkersAiFinetuneListMatch, WorkersAiFinetuneCreateData, WorkersAiFinetuneRemoveMatch } from '../CloudflareAiTypes';
declare class WorkersAiFinetuneEntity extends CloudflareAiEntityBase<WorkersAiFinetune> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: WorkersAiFinetuneEntity): WorkersAiFinetuneEntity;
    load(this: any, reqmatch?: WorkersAiFinetuneLoadMatch, ctrl?: Control): Promise<WorkersAiFinetuneEntity>;
    list(this: any, reqmatch?: WorkersAiFinetuneListMatch, ctrl?: Control): Promise<WorkersAiFinetuneEntity[]>;
    create(this: any, reqdata?: WorkersAiFinetuneCreateData, ctrl?: Control): Promise<WorkersAiFinetuneEntity>;
    remove(this: any, reqmatch?: WorkersAiFinetuneRemoveMatch, ctrl?: Control): Promise<WorkersAiFinetuneEntity>;
}
export { WorkersAiFinetuneEntity };
