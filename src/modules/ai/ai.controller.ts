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
import { Types } from 'mongoose';
import { ReportDetailsService } from '../database/services/tbl_report_detail.service';

@Controller('/admin/v1/ai')
export class AIController {
  constructor(
    private readonly locationsService: LocationsService,
    private readonly iconsService: IconsService,
    private readonly reportDetailService: ReportDetailsService,
  ) {}

  @Post('transcription')
  @UseInterceptors(FileInterceptor('file'))
  async getAll(@Body() body: any, @UploadedFile() file, @Res() res: Response) {
    try {
      const reportId = body.report_id || '';

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

      const transcription_text = result.data.text;
      const returned_locations = [];
      const returned_icons = [];
      let returned_command = [];

      let filter = [
        {
          $match: {
            report_id: new Types.ObjectId(reportId),
          },
        },
        {
          $lookup: {
            from: 'tbl_icons',
            localField: 'icon_id',
            foreignField: '_id',
            as: 'icon',
          },
        },
        {
          $unwind: {
            path: '$icon',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: 'tbl_locations',
            localField: 'location_id',
            foreignField: '_id',
            as: 'location',
          },
        },
        {
          $unwind: {
            path: '$location',
            preserveNullAndEmptyArrays: true,
          },
        },
      ];
      let reportDetailList = await this.reportDetailService.getFilter(filter);
      //   let [listLocations, listIcons] = await Promise.all([
      //     await this.locationsService.getAllNoPaginate(),
      //     await this.iconsService.getAllNoPaginate(),
      //   ]);

      for (let i = 0; i < reportDetailList.length; i++) {
        if (reportDetailList[i].icon_id !== null) {
          const icon = reportDetailList[i].icon;
          const command_existed = icon.command.filter((el) =>
            transcription_text.includes(el.toLowerCase()),
          );
          if (command_existed.length > 0) {
            returned_command = returned_command.concat(command_existed);
            returned_icons.push(icon);
          }
        }
        if (reportDetailList[i].location_id !== null) {
          const location = reportDetailList[i].location;
          const command_existed = location.command.filter((el) =>
            transcription_text.includes(el.toLowerCase()),
          );
          if (command_existed.length > 0) {
            returned_command = returned_command.concat(command_existed);
            returned_locations.push(location);
          }
        }
      }

      const returned_obj = {
        text: transcription_text,
        commands: returned_command,
        locations: returned_locations,
        icons: returned_icons,
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
