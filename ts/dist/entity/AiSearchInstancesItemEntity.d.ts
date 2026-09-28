import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiSearchInstancesItem, AiSearchInstancesItemLoadMatch, AiSearchInstancesItemListMatch, AiSearchInstancesItemCreateData, AiSearchInstancesItemUpdateData, AiSearchInstancesItemRemoveMatch } from '../CloudflareAiTypes';
declare class AiSearchInstancesItemEntity extends CloudflareAiEntityBase<AiSearchInstancesItem> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiSearchInstancesItemEntity): AiSearchInstancesItemEntity;
    load(this: any, reqmatch?: AiSearchInstancesItemLoadMatch, ctrl?: Control): Promise<AiSearchInstancesItemEntity>;
    list(this: any, reqmatch?: AiSearchInstancesItemListMatch, ctrl?: Control): Promise<AiSearchInstancesItemEntity[]>;
    create(this: any, reqdata?: AiSearchInstancesItemCreateData, ctrl?: Control): Promise<AiSearchInstancesItemEntity>;
    update(this: any, reqdata?: AiSearchInstancesItemUpdateData, ctrl?: Control): Promise<AiSearchInstancesItemEntity>;
    remove(this: any, reqmatch?: AiSearchInstancesItemRemoveMatch, ctrl?: Control): Promise<AiSearchInstancesItemEntity>;
}
export { AiSearchInstancesItemEntity };
