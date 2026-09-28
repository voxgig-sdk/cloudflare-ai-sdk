import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiSearchToken, AiSearchTokenLoadMatch, AiSearchTokenListMatch, AiSearchTokenCreateData, AiSearchTokenUpdateData, AiSearchTokenRemoveMatch } from '../CloudflareAiTypes';
declare class AiSearchTokenEntity extends CloudflareAiEntityBase<AiSearchToken> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiSearchTokenEntity): AiSearchTokenEntity;
    load(this: any, reqmatch?: AiSearchTokenLoadMatch, ctrl?: Control): Promise<AiSearchTokenEntity>;
    list(this: any, reqmatch?: AiSearchTokenListMatch, ctrl?: Control): Promise<AiSearchTokenEntity[]>;
    create(this: any, reqdata?: AiSearchTokenCreateData, ctrl?: Control): Promise<AiSearchTokenEntity>;
    update(this: any, reqdata?: AiSearchTokenUpdateData, ctrl?: Control): Promise<AiSearchTokenEntity>;
    remove(this: any, reqmatch?: AiSearchTokenRemoveMatch, ctrl?: Control): Promise<AiSearchTokenEntity>;
}
export { AiSearchTokenEntity };
