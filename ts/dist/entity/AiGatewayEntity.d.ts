import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGateway, AiGatewayCreateData } from '../CloudflareAiTypes';
declare class AiGatewayEntity extends CloudflareAiEntityBase<AiGateway> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayEntity): AiGatewayEntity;
    create(this: any, reqdata?: AiGatewayCreateData, ctrl?: Control): Promise<AiGatewayEntity>;
}
export { AiGatewayEntity };
