import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AigBillingDeleteTopupConfig, AigBillingDeleteTopupConfigRemoveMatch } from '../CloudflareAiTypes';
declare class AigBillingDeleteTopupConfigEntity extends CloudflareAiEntityBase<AigBillingDeleteTopupConfig> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AigBillingDeleteTopupConfigEntity): AigBillingDeleteTopupConfigEntity;
    remove(this: any, reqmatch?: AigBillingDeleteTopupConfigRemoveMatch, ctrl?: Control): Promise<AigBillingDeleteTopupConfigEntity>;
}
export { AigBillingDeleteTopupConfigEntity };
