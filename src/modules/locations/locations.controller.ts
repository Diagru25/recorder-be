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
import { LocationsService } from '../database/services/tbl_location.services';

@Controller('/admin/v1/locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  //@UseGuards(JwtAuthGuard)
  @Get()
  async getAll(@Query() params: any, @Res() res: Response) {
    const result = await this.locationsService.getAllNoPaginate();

    return apiResponse(res, HttpStatus.OK, result);
  }
  //   @Post()
  //   async insert(@Body() data: any, @Res() res: Response) {
  //     data.password = await bcrypt.hash(data.password, 10);
  //     const result = await this.usersService.insert(data);
  //     return apiResponse(res, 200, result);
  //   }
}
