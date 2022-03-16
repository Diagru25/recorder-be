import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { GroupDocument } from '../schema';
export declare class GroupsService extends BaseService<GroupDocument, any> {
    private readonly _model;
    constructor(_model: Model<GroupDocument>);
}
