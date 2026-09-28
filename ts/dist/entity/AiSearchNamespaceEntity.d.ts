import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiSearchNamespace, AiSearchNamespaceLoadMatch, AiSearchNamespaceListMatch, AiSearchNamespaceCreateData, AiSearchNamespaceUpdateData, AiSearchNamespaceRemoveMatch } from '../CloudflareAiTypes';
declare class AiSearchNamespaceEntity extends CloudflareAiEntityBase<AiSearchNamespace> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiSearchNamespaceEntity): AiSearchNamespaceEntity;
    load(this: any, reqmatch?: AiSearchNamespaceLoadMatch, ctrl?: Control): Promise<AiSearchNamespaceEntity>;
    list(this: any, reqmatch?: AiSearchNamespaceListMatch, ctrl?: Control): Promise<AiSearchNamespaceEntity[]>;
    create(this: any, reqdata?: AiSearchNamespaceCreateData, ctrl?: Control): Promise<AiSearchNamespaceEntity>;
    update(this: any, reqdata?: AiSearchNamespaceUpdateData, ctrl?: Control): Promise<AiSearchNamespaceEntity>;
    remove(this: any, reqmatch?: AiSearchNamespaceRemoveMatch, ctrl?: Control): Promise<AiSearchNamespaceEntity>;
}
export { AiSearchNamespaceEntity };
