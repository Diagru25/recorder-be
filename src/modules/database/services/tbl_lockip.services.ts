import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from "mongoose";
import { BaseService } from "src/shared/base.service";
import { tbl_lockip, LockIpDocument } from "../schema";

@Injectable()
export class LockIpService extends BaseService<LockIpDocument, any> {
    constructor(
        @InjectModel(tbl_lockip.name)
        private readonly _model: Model<LockIpDocument>
    ) {
        super(_model)
    }
}