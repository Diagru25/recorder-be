import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { tbl_group, GroupDocument } from '../schema';

@Injectable()
export class GroupsService extends BaseService<GroupDocument, any> {
  constructor(
    @InjectModel(tbl_group.name)
    private readonly _model: Model<GroupDocument>,
  ) {
    super(_model);
  }
}
