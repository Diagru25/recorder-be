import { LocalAuthGuard } from './../auth/guards/local-auth.guard';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { Body, Controller, Get, Param, Post, Req, Res, UseGuards, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { UsersService } from '../database/services/tbl_user.service';
import * as bcrypt from 'bcrypt';

@Controller('/admin/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/current')
  async getCurrentUser(@Req() req: any, @Res() res: Response) {
    const result = await this.usersService.getOneById(req.user.id);

    return apiResponse(res, HttpStatus.OK, {user: result})
  }

  @Get()
  async getAll(@Param() params: any, @Res() res: Response) {
    return apiResponse(res, 200, {});
  }

  @Post()
  async insert(@Body() data: any, @Res() res: Response) {
    data.password = await bcrypt.hash(data.password, 10);
    const result = await this.usersService.insert(data);
    return apiResponse(res, 200, result);
  }
}
