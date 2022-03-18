import { UsersService } from './../database/services/tbl_user.service';
import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  HttpStatus,
  UseGuards,
  Get,
} from '@nestjs/common';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { AuthService } from '../database/services/auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('/auth/v1')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly JwtService: JwtService,
    private readonly UsersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req, @Res() res: Response) {
      const result = await this.authService.login(req.user);
      return apiResponse(
        res,
        result.statusCode,
        result.data,
        'success',
      );
  }

  @Get('/check_session')
  async checkSession(@Req() req, @Res() res: Response): Promise<any> {
    try {
      const authHeaders = req.headers['authorization'];

      if (authHeaders) {
        const token = authHeaders;
        const realToken = token.replace('Bearer', '').trim();

        const decode = this.JwtService.verify(realToken);
        const user = this.UsersService.getOneById(decode._id);

        if (!user)
          return apiResponse(
            res,
            HttpStatus.UNAUTHORIZED,
            false,
            'unauthorized',
          );
        return apiResponse(res, HttpStatus.OK, true, 'success');
      } else {
        return apiResponse(res, HttpStatus.UNAUTHORIZED, false, 'unauthorized');
      }
    } catch (error) {
      return apiResponse(res, HttpStatus.UNAUTHORIZED, {}, 'unauthorized');
    }
  }
}
