import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGatewayCustomProviderCost, AiGatewayCustomProviderCostLoadMatch, AiGatewayCustomProviderCostListMatch, AiGatewayCustomProviderCostCreateData, AiGatewayCustomProviderCostUpdateData, AiGatewayCustomProviderCostRemoveMatch } from '../CloudflareAiTypes';
declare class AiGatewayCustomProviderCostEntity extends CloudflareAiEntityBase<AiGatewayCustomProviderCost> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayCustomProviderCostEntity): AiGatewayCustomProviderCostEntity;
    load(this: any, reqmatch?: AiGatewayCustomProviderCostLoadMatch, ctrl?: Control): Promise<AiGatewayCustomProviderCostEntity>;
    list(this: any, reqmatch?: AiGatewayCustomProviderCostListMatch, ctrl?: Control): Promise<AiGatewayCustomProviderCostEntity[]>;
    create(this: any, reqdata?: AiGatewayCustomProviderCostCreateData, ctrl?: Control): Promise<AiGatewayCustomProviderCostEntity>;
    update(this: any, reqdata?: AiGatewayCustomProviderCostUpdateData, ctrl?: Control): Promise<AiGatewayCustomProviderCostEntity>;
    remove(this: any, reqmatch?: AiGatewayCustomProviderCostRemoveMatch, ctrl?: Control): Promise<AiGatewayCustomProviderCostEntity>;
}
export { AiGatewayCustomProviderCostEntity };
