import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
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

  async updateManyCompare(data: Array<any>) {
    const convertedData = data.map((item) => ({
      _id: new Types.ObjectId(item._id),
      text: item.text,
    }));

    return await this._model.updateMany(
      {
        _id: {
          $in: convertedData.map((item) => item._id),
        },
      },
      [
        {
          $set: {
            text: {
              $let: {
                vars: {
                  obj: {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: convertedData,
                          as: 'kvpa',
                          cond: { $eq: ['$$kvpa._id', '$_id'] },
                        },
                      },
                      0,
                    ],
                  },
                },
                in: '$$obj.text',
              },
            },
          },
        },
      ],
      { runValidators: true, multi: true },
    );
  }
}
