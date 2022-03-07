import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { RecordsService } from '../database/services/tbl_record.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('/admin/v1/records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  async getAll(@Param() params: any, @Res() res: Response) {
    return apiResponse(res, 200, {});
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('audio', {
      storage: diskStorage({
        destination: './files/audios',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async create(@Body() data, @UploadedFile() file, @Res() res: Response) {
    try {
      const record = {
        ...data,
        audio: file ? file.path : '',
      };
      const result = await this.recordsService.insert(record);
      return apiResponse(res, HttpStatus.CREATED, result, 'success');
    } catch (error) {
      return apiResponse(res, HttpStatus.BAD_REQUEST, {}, error);
    }
  }
}
