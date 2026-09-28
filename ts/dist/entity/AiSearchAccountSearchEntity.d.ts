import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiSearchAccountSearch, AiSearchAccountSearchCreateData } from '../CloudflareAiTypes';
declare class AiSearchAccountSearchEntity extends CloudflareAiEntityBase<AiSearchAccountSearch> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiSearchAccountSearchEntity): AiSearchAccountSearchEntity;
    create(this: any, reqdata?: AiSearchAccountSearchCreateData, ctrl?: Control): Promise<AiSearchAccountSearchEntity>;
}
export { AiSearchAccountSearchEntity };
