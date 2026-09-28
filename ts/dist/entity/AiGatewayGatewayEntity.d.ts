import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGatewayGateway, AiGatewayGatewayLoadMatch, AiGatewayGatewayListMatch, AiGatewayGatewayCreateData, AiGatewayGatewayUpdateData, AiGatewayGatewayRemoveMatch } from '../CloudflareAiTypes';
declare class AiGatewayGatewayEntity extends CloudflareAiEntityBase<AiGatewayGateway> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayGatewayEntity): AiGatewayGatewayEntity;
    load(this: any, reqmatch?: AiGatewayGatewayLoadMatch, ctrl?: Control): Promise<AiGatewayGatewayEntity>;
    list(this: any, reqmatch?: AiGatewayGatewayListMatch, ctrl?: Control): Promise<AiGatewayGatewayEntity[]>;
    create(this: any, reqdata?: AiGatewayGatewayCreateData, ctrl?: Control): Promise<AiGatewayGatewayEntity>;
    update(this: any, reqdata?: AiGatewayGatewayUpdateData, ctrl?: Control): Promise<AiGatewayGatewayEntity>;
    remove(this: any, reqmatch?: AiGatewayGatewayRemoveMatch, ctrl?: Control): Promise<AiGatewayGatewayEntity>;
}
export { AiGatewayGatewayEntity };
