import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingGetUsageHistory, AigBillingGetUsageHistoryListMatch } from '../CloudflareAiTypes';
declare class AigBillingGetUsageHistoryEntity extends CloudflareAiEntityBase<AigBillingGetUsageHistory> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingGetUsageHistoryEntity): AigBillingGetUsageHistoryEntity;
    list(this: any, reqmatch?: AigBillingGetUsageHistoryListMatch, ctrl?: Control): Promise<AigBillingGetUsageHistoryEntity[]>;
}
export { AigBillingGetUsageHistoryEntity };
