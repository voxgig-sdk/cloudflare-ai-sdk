import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingGetInvoiceHistory, AigBillingGetInvoiceHistoryListMatch } from '../CloudflareAiTypes';
declare class AigBillingGetInvoiceHistoryEntity extends CloudflareAiEntityBase<AigBillingGetInvoiceHistory> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingGetInvoiceHistoryEntity): AigBillingGetInvoiceHistoryEntity;
    list(this: any, reqmatch?: AigBillingGetInvoiceHistoryListMatch, ctrl?: Control): Promise<AigBillingGetInvoiceHistoryEntity[]>;
}
export { AigBillingGetInvoiceHistoryEntity };
