import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGatewayProviderConfig, AiGatewayProviderConfigListMatch, AiGatewayProviderConfigCreateData, AiGatewayProviderConfigUpdateData, AiGatewayProviderConfigRemoveMatch } from '../CloudflareAiTypes';
declare class AiGatewayProviderConfigEntity extends CloudflareAiEntityBase<AiGatewayProviderConfig> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayProviderConfigEntity): AiGatewayProviderConfigEntity;
    list(this: any, reqmatch?: AiGatewayProviderConfigListMatch, ctrl?: Control): Promise<AiGatewayProviderConfigEntity[]>;
    create(this: any, reqdata?: AiGatewayProviderConfigCreateData, ctrl?: Control): Promise<AiGatewayProviderConfigEntity>;
    update(this: any, reqdata?: AiGatewayProviderConfigUpdateData, ctrl?: Control): Promise<AiGatewayProviderConfigEntity>;
    remove(this: any, reqmatch?: AiGatewayProviderConfigRemoveMatch, ctrl?: Control): Promise<AiGatewayProviderConfigEntity>;
}
export { AiGatewayProviderConfigEntity };
