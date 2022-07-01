import { Types } from 'mongoose';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { ReportsService } from '../database/services/tbl_report.service';
import { ReportDetailsService } from '../database/services/tbl_report_detail.service';

@Controller('/admin/v1/reports')
export class ReportsController {
  constructor(
    private readonly reportsService: ReportsService,
    private readonly reportDetailService: ReportDetailsService,
  ) {}

  @Get('select')
  async getSelect(@Query() params: any, @Res() res: Response) {
    try {
      let text_search: any = params.text_search || '';
      let filter = [
        {
          $addFields: {
            text_lower: {
              $toLower: '$name',
            },
          },
        },
        {
          $match: {
            $or: [
              {
                text_lower: {
                  $regex: text_search.toLowerCase(),
                },
              },
              {
                _id: {
                  $regex: text_search.toLowerCase(),
                },
              },
            ],
          },
        },
      ];
      const result = await this.reportsService.getFilter(filter);
      return apiResponse(res, HttpStatus.OK, result);
    } catch (error) {
      return apiResponse(res, HttpStatus.BAD_REQUEST, {}, error);
    }
  }

  @Get('test')
  async test(@Query() params: any, @Res() res: Response) {
    let reportId = params.reportId;

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
      return apiResponse(res, HttpStatus.OK, reportDetailList);
    
  }

  @Get(':id')
  async getOneById(@Param('id') id: any, @Res() res: Response) {
    try {
      const result = await this.reportsService.getOneById(id);
      return apiResponse(res, HttpStatus.OK, result);
    } catch (error) {
      return apiResponse(res, HttpStatus.BAD_REQUEST, {}, error);
    }
  }

  @Get()
  async getAll(@Query() params: any, @Res() res: Response) {
    let page_index: number = Number(params.page_index)
      ? Number(params.page_index)
      : 1;
    let page_size: number = Number(params.page_size)
      ? Number(params.page_size)
      : 100;
    let text_search: any = params.text_search || '';

    let filter = [
      {
        $addFields: {
          text_lower: {
            $toLower: '$name',
          },
        },
      },
      {
        $match: {
          $or: [
            {
              text_lower: {
                $regex: text_search.toLowerCase(),
              },
            },
            {
              _id: {
                $regex: text_search.toLowerCase(),
              },
            },
          ],
        },
      },
    ];
    const result = await this.reportsService.getAll(
      filter,
      page_index,
      page_size,
    );
    return apiResponse(res, HttpStatus.OK, result);
  }

  @Post()
  async create(@Body() data, @Res() res: Response) {
    try {
      const reportResult = await this.reportsService.insert({
        name: data.name,
      });
      let report_id = reportResult._id;

      const rs = await this.reportDetailService.insertMany(
        data.formFields.map((item) => ({
          ...item,
          icon_id: item.icon_id ? new Types.ObjectId(item.icon_id) : null,
          location_id: item.location_id ? new Types.ObjectId(item.location_id) : null,
          report_id,
        })),
      );
      return apiResponse(res, HttpStatus.CREATED, {}, 'success');
    } catch (error) {
      return apiResponse(res, HttpStatus.BAD_REQUEST, {}, error.toString());
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.reportsService.remove(id);
      return apiResponse(res, HttpStatus.OK, {});
    } catch (error) {
      return apiResponse(res, HttpStatus.BAD_REQUEST, {}, error);
    }
  }
}
