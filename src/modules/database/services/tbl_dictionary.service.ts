import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/shared/base.service';
import { tbl_dictionary, DictionaryDocument } from '../schema';

@Injectable()
export class DictionaryService extends BaseService<DictionaryDocument, any> {
  constructor(
    @InjectModel(tbl_dictionary.name)
    private readonly _model: Model<DictionaryDocument>,
  ) {
    super(_model);
  }

  async incOne(id: string) {
    await this._model.updateOne({ _id: id }, { $inc: { nofGet: 1 } });
  }

  async incMany(ids: Array<string>) {
    await this._model.updateMany(
      { _id: { $in: ids } },
      { $inc: { nofGet: 1 } },
    );
  }
}
