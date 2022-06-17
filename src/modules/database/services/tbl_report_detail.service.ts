import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { tbl_report_detail, ReportDetailDocument } from '../schema';

@Injectable()
export class ReportDetailsService extends BaseService<ReportDetailDocument, any> {
  constructor(
    @InjectModel(tbl_report_detail.name)
    private readonly _model: Model<ReportDetailDocument>,
  ) {
    super(_model);
  }
}
