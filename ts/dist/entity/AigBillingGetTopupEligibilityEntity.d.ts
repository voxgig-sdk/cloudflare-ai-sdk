import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingGetTopupEligibility, AigBillingGetTopupEligibilityCreateData } from '../CloudflareAiTypes';
declare class AigBillingGetTopupEligibilityEntity extends CloudflareAiEntityBase<AigBillingGetTopupEligibility> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingGetTopupEligibilityEntity): AigBillingGetTopupEligibilityEntity;
    create(this: any, reqdata?: AigBillingGetTopupEligibilityCreateData, ctrl?: Control): Promise<AigBillingGetTopupEligibilityEntity>;
}
export { AigBillingGetTopupEligibilityEntity };
