import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { RecordsService } from '../database/services/tbl_record.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { readFileSync } from 'fs';
@Controller('/admin/v1/records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  async getAll(@Param() params: any, @Res() res: Response) {
    const f = readFileSync('assets/a.txt', { encoding: 'utf-8' });
    const lines = f.split(/\r?\n/);
    console.log(lines);
    return apiResponse(res, 200, {});
  }

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      storage: diskStorage({
        destination: './assets/audios',
        filename: (req, files, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(files.originalname)}`);
        },
      }),
    }),
  )
  async create(@Body() data, @UploadedFiles() files, @Res() res: Response) {
    try {
      const length = files.length;
      for(let i = 0; i < length; i++) {
          let record = {
              audio: files[i].path,
              text: data.texts[i],
              gender: data.gender,
              area: data.area,
              age: data.age
          };

          await this.recordsService.insert(record);
      }
      return apiResponse(res, HttpStatus.CREATED, {}, 'success');
    } catch (error) {
      return apiResponse(res, HttpStatus.BAD_REQUEST, {}, error);
    }
  }
}
