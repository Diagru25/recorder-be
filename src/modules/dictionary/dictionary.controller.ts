import { Model } from 'mongoose';
import { Controller, Get, Query, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { DictionaryService } from '../database/services/tbl_dictionary.service';

@Controller('/admin/v1/dictionary')
export class DictionaryController {
  constructor(private readonly DictionaryService: DictionaryService) {}

  @Get('/random_text')
  async getAll(@Query() params: any, @Res() res: Response) {
    try {
      let quantity: number = Number(params.quantity)
        ? Number(params.quantity)
        : 5;

      const agg = [
        {
          $group: {
            _id: null,
            average_table: {
              $avg: '$nofGet',
            },
          },
        },
      ];
      const average = await this.DictionaryService.getFilter(agg);

      let average_number = average.length > 0 ? average[0].average_table : 0;

      const result = await this.DictionaryService.getFilter([
        {
          $match: {
            nofGet: { $lte: average_number },
          },
        },
        { $sample: { size: quantity } },
      ]);

      if (result) {
        let ids = result.map(item => item._id);
        await this.DictionaryService.incMany(ids);
      }
      return apiResponse(res, HttpStatus.OK, result);
    } catch (error) {
        return apiResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error, "Lỗi db")
    }
  }
}
