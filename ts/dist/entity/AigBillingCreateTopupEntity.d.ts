import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingCreateTopup, AigBillingCreateTopupCreateData } from '../CloudflareAiTypes';
declare class AigBillingCreateTopupEntity extends CloudflareAiEntityBase<AigBillingCreateTopup> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingCreateTopupEntity): AigBillingCreateTopupEntity;
    create(this: any, reqdata?: AigBillingCreateTopupCreateData, ctrl?: Control): Promise<AigBillingCreateTopupEntity>;
}
export { AigBillingCreateTopupEntity };
