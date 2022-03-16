import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare const CHECK_POLICY_KEY = "check_policy";
export declare const checkPolicies: (action_code: '', module_code: '') => import("@nestjs/common").CustomDecorator<string>;
declare const RolesGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class RolesGuard extends RolesGuard_base {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
