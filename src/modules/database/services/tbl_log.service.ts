import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from "mongoose";
import { BaseService } from "src/shared/base.service";
import { tbl_log, LogDocument } from "../schema";
import { LockIpService } from "./tbl_lockip.services";

@Injectable()
export class LogService extends BaseService<LogDocument, any> {
  constructor(
    @Inject(LockIpService) private lockIpService: LockIpService,

    @InjectModel(tbl_log.name)
    private readonly _model: Model<LogDocument>,
  ) {
    super(_model);
  }

  async countLogPPeriodTime(ip: string): Promise<any> {
    // 5 min

    let dt = new Date();
    dt.setMinutes(dt.getMinutes() - 5);
    let from = dt.getTime();
    let to = new Date().getTime();

    //count
    const count = await this._model.count({ip: ip, time: {$gte: from, $lte: to}});

    return count;
  }
}