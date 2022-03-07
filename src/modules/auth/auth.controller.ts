import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { AuthService } from '../database/services/auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('/auth/v1/login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async insert(@Req() req: any, @Res() res: Response) {
    const result = await this.authService.login(req.user);
    if (result.isSuccess) {
        return apiResponse(res, result.status, result.data);
    }
    else {
        return apiResponse(res, result.status, result.data, 'Lỗi')
    }
  }
}
