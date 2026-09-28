import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingDeleteSpendingLimit, AigBillingDeleteSpendingLimitRemoveMatch } from '../CloudflareAiTypes';
declare class AigBillingDeleteSpendingLimitEntity extends CloudflareAiEntityBase<AigBillingDeleteSpendingLimit> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingDeleteSpendingLimitEntity): AigBillingDeleteSpendingLimitEntity;
    remove(this: any, reqmatch?: AigBillingDeleteSpendingLimitRemoveMatch, ctrl?: Control): Promise<AigBillingDeleteSpendingLimitEntity>;
}
export { AigBillingDeleteSpendingLimitEntity };
