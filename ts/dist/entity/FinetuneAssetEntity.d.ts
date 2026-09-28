import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { FinetuneAsset, FinetuneAssetLoadMatch } from '../CloudflareAiTypes';
declare class FinetuneAssetEntity extends CloudflareAiEntityBase<FinetuneAsset> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: FinetuneAssetEntity): FinetuneAssetEntity;
    load(this: any, reqmatch?: FinetuneAssetLoadMatch, ctrl?: Control): Promise<FinetuneAssetEntity>;
}
export { FinetuneAssetEntity };
