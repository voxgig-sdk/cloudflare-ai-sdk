import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { Namespace, NamespaceLoadMatch, NamespaceListMatch, NamespaceCreateData, NamespaceRemoveMatch } from '../CloudflareAiTypes';
declare class NamespaceEntity extends CloudflareAiEntityBase<Namespace> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: NamespaceEntity): NamespaceEntity;
    load(this: any, reqmatch?: NamespaceLoadMatch, ctrl?: Control): Promise<NamespaceEntity>;
    list(this: any, reqmatch?: NamespaceListMatch, ctrl?: Control): Promise<NamespaceEntity[]>;
    create(this: any, reqdata?: NamespaceCreateData, ctrl?: Control): Promise<NamespaceEntity>;
    remove(this: any, reqmatch?: NamespaceRemoveMatch, ctrl?: Control): Promise<NamespaceEntity>;
}
export { NamespaceEntity };
