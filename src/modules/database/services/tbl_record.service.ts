import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { tbl_record, RecordDocument } from '../schema';

@Injectable()
export class RecordsService extends BaseService<RecordDocument, any> {
  constructor(
    @InjectModel(tbl_record.name)
    private readonly _model: Model<RecordDocument>,
  ) {
    super(_model);
  }
}
