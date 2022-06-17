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
import { LocationsService } from '../database/services/tbl_location.services';
import { IconsService } from '../database/services/tbl_icon.services';
import { report } from 'process';

@Controller('/admin/v1/ai')
export class AIController {
  constructor(
    private readonly locationsService: LocationsService,
    private readonly iconsService: IconsService,
  ) {}

  @Post('transcription')
  @UseInterceptors(FileInterceptor('file'))
  async getAll(@Body() body: any, @UploadedFile() file, @Res() res: Response) {
    try {
      var FormData = require('form-data');
      const formData = new FormData();
      formData.append('file', file.buffer, { filename: file.originalname });

      const headers = {
        ...formData.getHeaders(),
        'Content-Length': formData.getLengthSync(),
        'Content-Type': 'multipart/form-data',
      };
      const result = await axios.post(
        'http://192.168.1.125:5001/transcription',
        formData,
        {
          headers,
        },
      );
      // const result = await firstValueFrom(
      //   this.httpService.post('http://localhost:5001/transcription', formData, {
      //     headers: {headers},
      //   }),
      // );
      const transcription_text = result.data.text;
      const returned_locations = [];
      const returned_icons = [];
      let returned_command = [];

      let [listLocations, listIcons] = await Promise.all([
        await this.locationsService.getAllNoPaginate(),
        await this.iconsService.getAllNoPaginate()
      ]);

      // find report createdate = today;
      //report.icons
      //report.
      //   const listLocations = await this.locationsService.getAllNoPaginate();
    //   const listIcons = await this.iconsService.getAllNoPaginate();

      for (let i = 0; i < listLocations.length; i++) {
        const command_existed = listLocations[i].command.filter((el) =>
          transcription_text.includes(el.toLowerCase()),
        );

        if (command_existed.length > 0 ) {
          returned_command = returned_command.concat(command_existed);
          returned_locations.push(listLocations[i]);
        }
      }

      for (let i = 0; i < listIcons.length; i++) {
        const command_existed = listIcons[i].command.filter((el) =>
          transcription_text.includes(el.toLowerCase()),
        );

        if (command_existed.length > 0) {
          returned_command = returned_command.concat(command_existed);
          returned_icons.push(listIcons[i]);
        }
      }

      const returned_obj = {
        text: transcription_text,
        commands: returned_command,
        locations: returned_locations,
        icons: returned_icons
      };

      return apiResponse(res, HttpStatus.OK, returned_obj);
    } catch (error) {
      console.log(error);
      return apiResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        error,
        'error!',
      );
    }
  }
}
