import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingGetInvoicePreview, AigBillingGetInvoicePreviewListMatch } from '../CloudflareAiTypes';
declare class AigBillingGetInvoicePreviewEntity extends CloudflareAiEntityBase<AigBillingGetInvoicePreview> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingGetInvoicePreviewEntity): AigBillingGetInvoicePreviewEntity;
    list(this: any, reqmatch?: AigBillingGetInvoicePreviewListMatch, ctrl?: Control): Promise<AigBillingGetInvoicePreviewEntity[]>;
}
export { AigBillingGetInvoicePreviewEntity };
