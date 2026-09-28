import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingGetTopupConfig, AigBillingGetTopupConfigListMatch } from '../CloudflareAiTypes';
declare class AigBillingGetTopupConfigEntity extends CloudflareAiEntityBase<AigBillingGetTopupConfig> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingGetTopupConfigEntity): AigBillingGetTopupConfigEntity;
    list(this: any, reqmatch?: AigBillingGetTopupConfigListMatch, ctrl?: Control): Promise<AigBillingGetTopupConfigEntity[]>;
}
export { AigBillingGetTopupConfigEntity };
