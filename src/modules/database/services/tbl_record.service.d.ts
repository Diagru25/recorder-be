import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { RecordDocument } from '../schema';
export declare class RecordsService extends BaseService<RecordDocument, any> {
    private readonly _model;
    constructor(_model: Model<RecordDocument>);
}
