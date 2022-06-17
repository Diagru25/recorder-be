import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  Query,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { IconsService } from '../database/services/tbl_icon.services';

@Controller('/admin/v1/icons')
export class IconsController {
  constructor(private readonly iconsService: IconsService) {}

  //@UseGuards(JwtAuthGuard)
  @Get()
  async getAll(@Query() params: any, @Res() res: Response) {
    const result = await this.iconsService.getAllNoPaginate();

    return apiResponse(res, HttpStatus.OK, { items: result });
  }
  //   @Post()
  //   async insert(@Body() data: any, @Res() res: Response) {
  //     data.password = await bcrypt.hash(data.password, 10);
  //     const result = await this.usersService.insert(data);
  //     return apiResponse(res, 200, result);
  //   }
}
