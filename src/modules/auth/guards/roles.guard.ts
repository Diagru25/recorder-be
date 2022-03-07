import {
    Injectable,
    CanActivate,
    ExecutionContext,
    SetMetadata,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

export const CHECK_POLICY_KEY = 'check_policy';
export const checkPolicies = (action_code: '', module_code: '') => {
    let obj = {
        action_code,
        module_code
    }

    return SetMetadata(CHECK_POLICY_KEY, obj);
}

@Injectable()
export class RolesGuard extends AuthGuard('jwt') {
    constructor(
        private readonly reflector: Reflector
    ) {
        super();
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        await super.canActivate(context);

        const obj = this.reflector.get(
            CHECK_POLICY_KEY,
            context.getHandler()
        ) || {action_code: '', module_code: ''};

        const request = context.switchToHttp().getRequest();
        const user = request.user;


        ///check đưa user và các action_code, module_code vào hàm check.
        // return await check()
        return true;

    }
}
