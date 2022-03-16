import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';

import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { SuggestsService } from '../database/services/tbl_suggest.service';

import {resolve} from 'path';

const fs = require('fs');

@Controller('/admin/v1/suggests')
export class SuggestController {
  constructor(private readonly suggestsService: SuggestsService) {}

  @Get()
  async getAll(@Param() params: any, @Res() res: Response) {
    const result = this.suggestsService.getFilter({})
    return apiResponse(res, HttpStatus.OK, {items: result});
  }

  @Post()
  async create(@Body() data: any, @Res() res: Response) {
      const r = fs.readFileSync('a.txt', 'utf8');

      // split the contents by new line
      const lines = r.split(/\r?\n/);

      // print all lines
      lines.forEach((line) => {
        console.log(line);
      });

    //   const result = await this.suggestsService.insert({text: 'Sơn'});
    //   console.log(result);
    //   return apiResponse(res, HttpStatus.CREATED, {result});
  }
}
