import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { tbl_report, ReportDocument } from '../schema';

@Injectable()
export class ReportsService extends BaseService<ReportDocument, any> {
  constructor(
    @InjectModel(tbl_report.name)
    private readonly _model: Model<ReportDocument>,
  ) {
    super(_model);
  }
}
