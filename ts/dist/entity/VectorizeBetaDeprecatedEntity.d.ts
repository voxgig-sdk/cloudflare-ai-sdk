import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { VectorizeBetaDeprecated, VectorizeBetaDeprecatedLoadMatch, VectorizeBetaDeprecatedListMatch, VectorizeBetaDeprecatedCreateData, VectorizeBetaDeprecatedUpdateData, VectorizeBetaDeprecatedRemoveMatch } from '../CloudflareAiTypes';
declare class VectorizeBetaDeprecatedEntity extends CloudflareAiEntityBase<VectorizeBetaDeprecated> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: VectorizeBetaDeprecatedEntity): VectorizeBetaDeprecatedEntity;
    load(this: any, reqmatch?: VectorizeBetaDeprecatedLoadMatch, ctrl?: Control): Promise<VectorizeBetaDeprecatedEntity>;
    list(this: any, reqmatch?: VectorizeBetaDeprecatedListMatch, ctrl?: Control): Promise<VectorizeBetaDeprecatedEntity[]>;
    create(this: any, reqdata?: VectorizeBetaDeprecatedCreateData, ctrl?: Control): Promise<VectorizeBetaDeprecatedEntity>;
    update(this: any, reqdata?: VectorizeBetaDeprecatedUpdateData, ctrl?: Control): Promise<VectorizeBetaDeprecatedEntity>;
    remove(this: any, reqmatch?: VectorizeBetaDeprecatedRemoveMatch, ctrl?: Control): Promise<VectorizeBetaDeprecatedEntity>;
}
export { VectorizeBetaDeprecatedEntity };
