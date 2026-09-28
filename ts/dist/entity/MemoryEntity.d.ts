import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { Memory, MemoryLoadMatch, MemoryListMatch, MemoryCreateData, MemoryRemoveMatch } from '../CloudflareAiTypes';
declare class MemoryEntity extends CloudflareAiEntityBase<Memory> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: MemoryEntity): MemoryEntity;
    load(this: any, reqmatch?: MemoryLoadMatch, ctrl?: Control): Promise<MemoryEntity>;
    list(this: any, reqmatch?: MemoryListMatch, ctrl?: Control): Promise<MemoryEntity[]>;
    create(this: any, reqdata?: MemoryCreateData, ctrl?: Control): Promise<MemoryEntity>;
    remove(this: any, reqmatch?: MemoryRemoveMatch, ctrl?: Control): Promise<MemoryEntity>;
}
export { MemoryEntity };
