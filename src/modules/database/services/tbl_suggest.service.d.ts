import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { SuggestDocument } from '../schema';
export declare class SuggestsService extends BaseService<SuggestDocument, any> {
    private readonly _model;
    constructor(_model: Model<SuggestDocument>);
}
