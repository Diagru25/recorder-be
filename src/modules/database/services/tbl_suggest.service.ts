import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { tbl_suggest, SuggestDocument } from '../schema';

@Injectable()
export class SuggestService extends BaseService<SuggestDocument, any> {
  constructor(
    @InjectModel(tbl_suggest.name)
    private readonly _model: Model<SuggestDocument>,
  ) {
    super(_model);
  }
}
