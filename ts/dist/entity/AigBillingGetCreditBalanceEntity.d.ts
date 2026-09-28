import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingGetCreditBalance, AigBillingGetCreditBalanceListMatch } from '../CloudflareAiTypes';
declare class AigBillingGetCreditBalanceEntity extends CloudflareAiEntityBase<AigBillingGetCreditBalance> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingGetCreditBalanceEntity): AigBillingGetCreditBalanceEntity;
    list(this: any, reqmatch?: AigBillingGetCreditBalanceListMatch, ctrl?: Control): Promise<AigBillingGetCreditBalanceEntity[]>;
}
export { AigBillingGetCreditBalanceEntity };
