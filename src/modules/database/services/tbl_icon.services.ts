import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { tbl_icon, IconDocument } from '../schema';

@Injectable()
export class IconsService extends BaseService<IconDocument, any> {
  constructor(
    @InjectModel(tbl_icon.name)
    private readonly _model: Model<IconDocument>,
  ) {
    super(_model);
  }
}
