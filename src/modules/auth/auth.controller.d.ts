import { Response } from 'express';
import { AuthService } from '../database/services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    insert(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
