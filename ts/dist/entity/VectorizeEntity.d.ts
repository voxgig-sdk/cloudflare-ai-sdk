import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { Vectorize, VectorizeLoadMatch, VectorizeListMatch, VectorizeCreateData, VectorizeRemoveMatch } from '../CloudflareAiTypes';
declare class VectorizeEntity extends CloudflareAiEntityBase<Vectorize> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: VectorizeEntity): VectorizeEntity;
    load(this: any, reqmatch?: VectorizeLoadMatch, ctrl?: Control): Promise<VectorizeEntity>;
    list(this: any, reqmatch?: VectorizeListMatch, ctrl?: Control): Promise<VectorizeEntity[]>;
    create(this: any, reqdata?: VectorizeCreateData, ctrl?: Control): Promise<VectorizeEntity>;
    remove(this: any, reqmatch?: VectorizeRemoveMatch, ctrl?: Control): Promise<VectorizeEntity>;
}
export { VectorizeEntity };
