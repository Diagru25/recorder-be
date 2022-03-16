import { Strategy } from 'passport-local';
import { AuthService } from 'src/modules/database/services/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(req: any, username: string, password: string): Promise<any>;
}
export {};
