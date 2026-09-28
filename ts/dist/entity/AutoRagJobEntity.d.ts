import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AutoRagJob, AutoRagJobLoadMatch, AutoRagJobListMatch } from '../CloudflareAiTypes';
declare class AutoRagJobEntity extends CloudflareAiEntityBase<AutoRagJob> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AutoRagJobEntity): AutoRagJobEntity;
    load(this: any, reqmatch?: AutoRagJobLoadMatch, ctrl?: Control): Promise<AutoRagJobEntity>;
    list(this: any, reqmatch?: AutoRagJobListMatch, ctrl?: Control): Promise<AutoRagJobEntity[]>;
}
export { AutoRagJobEntity };
