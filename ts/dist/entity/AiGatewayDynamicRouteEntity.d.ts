import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGatewayDynamicRoute, AiGatewayDynamicRouteLoadMatch, AiGatewayDynamicRouteCreateData, AiGatewayDynamicRouteUpdateData, AiGatewayDynamicRouteRemoveMatch } from '../CloudflareAiTypes';
declare class AiGatewayDynamicRouteEntity extends CloudflareAiEntityBase<AiGatewayDynamicRoute> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayDynamicRouteEntity): AiGatewayDynamicRouteEntity;
    load(this: any, reqmatch?: AiGatewayDynamicRouteLoadMatch, ctrl?: Control): Promise<AiGatewayDynamicRouteEntity>;
    create(this: any, reqdata?: AiGatewayDynamicRouteCreateData, ctrl?: Control): Promise<AiGatewayDynamicRouteEntity>;
    update(this: any, reqdata?: AiGatewayDynamicRouteUpdateData, ctrl?: Control): Promise<AiGatewayDynamicRouteEntity>;
    remove(this: any, reqmatch?: AiGatewayDynamicRouteRemoveMatch, ctrl?: Control): Promise<AiGatewayDynamicRouteEntity>;
}
export { AiGatewayDynamicRouteEntity };
