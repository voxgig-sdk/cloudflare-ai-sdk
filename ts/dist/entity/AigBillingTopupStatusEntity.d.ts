import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingTopupStatus, AigBillingTopupStatusCreateData } from '../CloudflareAiTypes';
declare class AigBillingTopupStatusEntity extends CloudflareAiEntityBase<AigBillingTopupStatus> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingTopupStatusEntity): AigBillingTopupStatusEntity;
    create(this: any, reqdata?: AigBillingTopupStatusCreateData, ctrl?: Control): Promise<AigBillingTopupStatusEntity>;
}
export { AigBillingTopupStatusEntity };
