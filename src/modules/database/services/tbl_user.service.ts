import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { tbl_user, UserDocument } from '../schema';

@Injectable()
export class UsersService extends BaseService<UserDocument, any> {
  constructor(
    @InjectModel(tbl_user.name)
    private readonly _model: Model<UserDocument>,
  ) {
    super(_model);
  }
}
