import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { tbl_location, LocationDocument } from '../schema';

@Injectable()
export class LocationsService extends BaseService<LocationDocument, any> {
  constructor(
    @InjectModel(tbl_location.name)
    private readonly _model: Model<LocationDocument>,
  ) {
    super(_model);
  }
}
