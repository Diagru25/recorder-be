import { Controller, Get, Query, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { DictionaryService } from '../database/services/tbl_dictionary.service';

@Controller('/admin/v1/dictionary')
export class DictionaryController {
  constructor(private readonly DictionaryService: DictionaryService) {}

  @Get('/random_text')
  async getAll(@Query() params: any, @Res() res: Response) {

    let quantity: number = Number(params.quantity) ? Number(params.quantity) : 5;

      const agg = [{
          $sample: {size: quantity}
      }]
    const result = await this.DictionaryService.getFilter(agg);

    if(result) {
        for(let i = 0; i < result.length; i++) {
            let item = result[i];
            await this.DictionaryService.update(item._id, {...item, nofGet: item.nofGet + 1});
            result[i].nofGet++;
        }
    }

    return apiResponse(res, HttpStatus.OK, result);
  }
}
