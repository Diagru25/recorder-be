import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { UserDocument } from '../schema';
export declare class UsersService extends BaseService<UserDocument, any> {
    private readonly _model;
    constructor(_model: Model<UserDocument>);
}
