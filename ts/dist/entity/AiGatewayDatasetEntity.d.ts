import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { AiGatewayDataset, AiGatewayDatasetLoadMatch, AiGatewayDatasetListMatch, AiGatewayDatasetCreateData, AiGatewayDatasetUpdateData, AiGatewayDatasetRemoveMatch } from '../CloudflareAiTypes';
declare class AiGatewayDatasetEntity extends CloudflareAiEntityBase<AiGatewayDataset> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AiGatewayDatasetEntity): AiGatewayDatasetEntity;
    load(this: any, reqmatch?: AiGatewayDatasetLoadMatch, ctrl?: Control): Promise<AiGatewayDatasetEntity>;
    list(this: any, reqmatch?: AiGatewayDatasetListMatch, ctrl?: Control): Promise<AiGatewayDatasetEntity[]>;
    create(this: any, reqdata?: AiGatewayDatasetCreateData, ctrl?: Control): Promise<AiGatewayDatasetEntity>;
    update(this: any, reqdata?: AiGatewayDatasetUpdateData, ctrl?: Control): Promise<AiGatewayDatasetEntity>;
    remove(this: any, reqmatch?: AiGatewayDatasetRemoveMatch, ctrl?: Control): Promise<AiGatewayDatasetEntity>;
}
export { AiGatewayDatasetEntity };
