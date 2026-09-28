import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingGetTopupLimit, AigBillingGetTopupLimitListMatch } from '../CloudflareAiTypes';
declare class AigBillingGetTopupLimitEntity extends CloudflareAiEntityBase<AigBillingGetTopupLimit> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingGetTopupLimitEntity): AigBillingGetTopupLimitEntity;
    list(this: any, reqmatch?: AigBillingGetTopupLimitListMatch, ctrl?: Control): Promise<AigBillingGetTopupLimitEntity[]>;
}
export { AigBillingGetTopupLimitEntity };
