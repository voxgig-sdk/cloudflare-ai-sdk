import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingSetSpendingLimit, AigBillingSetSpendingLimitCreateData } from '../CloudflareAiTypes';
declare class AigBillingSetSpendingLimitEntity extends CloudflareAiEntityBase<AigBillingSetSpendingLimit> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingSetSpendingLimitEntity): AigBillingSetSpendingLimitEntity;
    create(this: any, reqdata?: AigBillingSetSpendingLimitCreateData, ctrl?: Control): Promise<AigBillingSetSpendingLimitEntity>;
}
export { AigBillingSetSpendingLimitEntity };
