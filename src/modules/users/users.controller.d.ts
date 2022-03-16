import { Response } from 'express';
import { UsersService } from '../database/services/tbl_user.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(params: any, res: Response): Promise<Response<any, Record<string, any>>>;
    insert(data: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
