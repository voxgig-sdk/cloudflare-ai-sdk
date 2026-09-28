import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGatewayEvaluation, AiGatewayEvaluationLoadMatch, AiGatewayEvaluationListMatch, AiGatewayEvaluationCreateData, AiGatewayEvaluationRemoveMatch } from '../CloudflareAiTypes';
declare class AiGatewayEvaluationEntity extends CloudflareAiEntityBase<AiGatewayEvaluation> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayEvaluationEntity): AiGatewayEvaluationEntity;
    load(this: any, reqmatch?: AiGatewayEvaluationLoadMatch, ctrl?: Control): Promise<AiGatewayEvaluationEntity>;
    list(this: any, reqmatch?: AiGatewayEvaluationListMatch, ctrl?: Control): Promise<AiGatewayEvaluationEntity[]>;
    create(this: any, reqdata?: AiGatewayEvaluationCreateData, ctrl?: Control): Promise<AiGatewayEvaluationEntity>;
    remove(this: any, reqmatch?: AiGatewayEvaluationRemoveMatch, ctrl?: Control): Promise<AiGatewayEvaluationEntity>;
}
export { AiGatewayEvaluationEntity };
