import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingGetSpendingLimit, AigBillingGetSpendingLimitListMatch } from '../CloudflareAiTypes';
declare class AigBillingGetSpendingLimitEntity extends CloudflareAiEntityBase<AigBillingGetSpendingLimit> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingGetSpendingLimitEntity): AigBillingGetSpendingLimitEntity;
    list(this: any, reqmatch?: AigBillingGetSpendingLimitListMatch, ctrl?: Control): Promise<AigBillingGetSpendingLimitEntity[]>;
}
export { AigBillingGetSpendingLimitEntity };
