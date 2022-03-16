import { LockIpDocument } from './../schema/tbl_lockip.schema';
import { UserDocument } from '../schema/tbl_user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { LogDocument } from '../schema';
export declare class AuthService {
    private readonly userModel;
    private readonly logModel;
    private readonly LockIpModel;
    private readonly jwtService;
    constructor(userModel: Model<UserDocument>, logModel: Model<LogDocument>, LockIpModel: Model<LockIpDocument>, jwtService: JwtService);
    validateUser(username: string, password: string, ip: string): Promise<any>;
    login(user: any): Promise<any>;
}
