import { CloudflareAiEntityBase } from '../CloudflareAiEntityBase';
import type { CloudflareAiSDK } from '../CloudflareAiSDK';
import type { Control } from '../types';
import type { Account, AccountLoadMatch, AccountUpdateData } from '../CloudflareAiTypes';
declare class AccountEntity extends CloudflareAiEntityBase<Account> {
    constructor(client: CloudflareAiSDK, entopts: any);
    make(this: AccountEntity): AccountEntity;
    load(this: any, reqmatch?: AccountLoadMatch, ctrl?: Control): Promise<AccountEntity>;
    update(this: any, reqdata?: AccountUpdateData, ctrl?: Control): Promise<AccountEntity>;
}
export { AccountEntity };
