import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingSetTopupConfig, AigBillingSetTopupConfigCreateData } from '../CloudflareAiTypes';
declare class AigBillingSetTopupConfigEntity extends CloudflareAiEntityBase<AigBillingSetTopupConfig> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingSetTopupConfigEntity): AigBillingSetTopupConfigEntity;
    create(this: any, reqdata?: AigBillingSetTopupConfigCreateData, ctrl?: Control): Promise<AigBillingSetTopupConfigEntity>;
}
export { AigBillingSetTopupConfigEntity };
