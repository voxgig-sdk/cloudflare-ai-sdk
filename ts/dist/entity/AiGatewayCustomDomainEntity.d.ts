import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGatewayCustomDomain, AiGatewayCustomDomainLoadMatch, AiGatewayCustomDomainListMatch, AiGatewayCustomDomainCreateData, AiGatewayCustomDomainRemoveMatch } from '../CloudflareAiTypes';
declare class AiGatewayCustomDomainEntity extends CloudflareAiEntityBase<AiGatewayCustomDomain> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayCustomDomainEntity): AiGatewayCustomDomainEntity;
    load(this: any, reqmatch?: AiGatewayCustomDomainLoadMatch, ctrl?: Control): Promise<AiGatewayCustomDomainEntity>;
    list(this: any, reqmatch?: AiGatewayCustomDomainListMatch, ctrl?: Control): Promise<AiGatewayCustomDomainEntity[]>;
    create(this: any, reqdata?: AiGatewayCustomDomainCreateData, ctrl?: Control): Promise<AiGatewayCustomDomainEntity>;
    remove(this: any, reqmatch?: AiGatewayCustomDomainRemoveMatch, ctrl?: Control): Promise<AiGatewayCustomDomainEntity>;
}
export { AiGatewayCustomDomainEntity };
