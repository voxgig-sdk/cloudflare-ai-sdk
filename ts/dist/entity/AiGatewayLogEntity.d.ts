import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGatewayLog, AiGatewayLogLoadMatch, AiGatewayLogListMatch, AiGatewayLogUpdateData, AiGatewayLogRemoveMatch } from '../CloudflareAiTypes';
declare class AiGatewayLogEntity extends CloudflareAiEntityBase<AiGatewayLog> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayLogEntity): AiGatewayLogEntity;
    load(this: any, reqmatch?: AiGatewayLogLoadMatch, ctrl?: Control): Promise<AiGatewayLogEntity>;
    list(this: any, reqmatch?: AiGatewayLogListMatch, ctrl?: Control): Promise<AiGatewayLogEntity[]>;
    update(this: any, reqdata?: AiGatewayLogUpdateData, ctrl?: Control): Promise<AiGatewayLogEntity>;
    remove(this: any, reqmatch?: AiGatewayLogRemoveMatch, ctrl?: Control): Promise<AiGatewayLogEntity>;
}
export { AiGatewayLogEntity };
