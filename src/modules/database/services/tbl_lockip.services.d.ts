import { Model } from "mongoose";
import { BaseService } from "src/shared/base.service";
import { LockIpDocument } from "../schema";
export declare class LockIpService extends BaseService<LockIpDocument, any> {
    private readonly _model;
    constructor(_model: Model<LockIpDocument>);
}
