import { Model } from "mongoose";
import { BaseService } from "src/shared/base.service";
import { LogDocument } from "../schema";
import { LockIpService } from "./tbl_lockip.services";
export declare class LogService extends BaseService<LogDocument, any> {
    private lockIpService;
    private readonly _model;
    constructor(lockIpService: LockIpService, _model: Model<LogDocument>);
    countLogPPeriodTime(ip: string): Promise<any>;
}
