import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { SuggestService } from '../database/services/tbl_suggest.service';

@Controller('/admin/v1/suggests')
export class SuggestsController {
  constructor(private readonly suggestService: SuggestService) {}

  @Get('/random_text')
  async getAll(@Param() params: any, @Res() res: Response) {
      const agg = [{
          $sample: {size: 5}
      }]
    const result = await this.suggestService.getFilter(agg);

    return apiResponse(res, 200, result);
  }
}
