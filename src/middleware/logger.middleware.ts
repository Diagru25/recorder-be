import {
  tbl_log,
  LogDocument,
} from './../modules/database/schema/tbl_log.schema';
import { Inject, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response, NextFunction } from 'express';
import { Model } from 'mongoose';
import { LockIpService } from 'src/modules/database/services/tbl_lockip.services';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  //kieu 1
  //   constructor(
  //     @InjectModel(tbl_log.name)
  //     private readonly logModel: Model<LogDocument>,
  //   ) {}

  //kieu 2
  //   @InjectModel(tbl_log.name)
  //   private readonly logModel: Model<LogDocument>;

  //kieu 3
  @Inject(LockIpService)
  lockIpService: LockIpService;

  async use(req: Request, res: Response, next: NextFunction) {
    // const lockedIp = await this.lockIpService.getOne({ip: req.ip});

    // if(lockedIp)
    //     throw new UnauthorizedException(`Ip ${req.ip} đã bị khóa!`);
    
    return next();
  }
}
