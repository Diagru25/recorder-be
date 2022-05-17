import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import axios from 'axios';


@Controller('/admin/v1/ai')
export class AIController {
  constructor(private httpService: HttpService) {}

  @Post('transcription')
  @UseInterceptors(FileInterceptor('file'))
  async getAll(@Body() body: any, @UploadedFile() file, @Res() res: Response) {

    console.log(file);

    var FormData = require('form-data');
    const formData = new FormData();
    formData.append('file', file.buffer, { filename: file.originalname });

    const headers = {
      ...formData.getHeaders(),
      'Content-Length': formData.getLengthSync(),
      'Content-Type': 'multipart/form-data',
    };
    const result = await axios.post('http://localhost:5001/transcription', formData, {
      headers,
    });
    // const result = await firstValueFrom(
    //   this.httpService.post('http://localhost:5001/transcription', formData, {
    //     headers: {headers},
    //   }),
    // );
    return apiResponse(res, HttpStatus.OK, result.data);
  }
}
