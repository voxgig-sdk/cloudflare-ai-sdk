import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGatewayCustomProvider, AiGatewayCustomProviderLoadMatch, AiGatewayCustomProviderListMatch, AiGatewayCustomProviderCreateData, AiGatewayCustomProviderUpdateData, AiGatewayCustomProviderRemoveMatch } from '../CloudflareAiTypes';
declare class AiGatewayCustomProviderEntity extends CloudflareAiEntityBase<AiGatewayCustomProvider> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayCustomProviderEntity): AiGatewayCustomProviderEntity;
    load(this: any, reqmatch?: AiGatewayCustomProviderLoadMatch, ctrl?: Control): Promise<AiGatewayCustomProviderEntity>;
    list(this: any, reqmatch?: AiGatewayCustomProviderListMatch, ctrl?: Control): Promise<AiGatewayCustomProviderEntity[]>;
    create(this: any, reqdata?: AiGatewayCustomProviderCreateData, ctrl?: Control): Promise<AiGatewayCustomProviderEntity>;
    update(this: any, reqdata?: AiGatewayCustomProviderUpdateData, ctrl?: Control): Promise<AiGatewayCustomProviderEntity>;
    remove(this: any, reqmatch?: AiGatewayCustomProviderRemoveMatch, ctrl?: Control): Promise<AiGatewayCustomProviderEntity>;
}
export { AiGatewayCustomProviderEntity };
