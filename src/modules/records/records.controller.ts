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
import { RecordsService } from '../database/services/tbl_record.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('/admin/v1/records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get('random_compare')
  async getRandomCompare(@Query() params: any, @Res() res: Response) {
    try {
      let quantity: number = Number(params.quantity)
        ? Number(params.quantity)
        : 5;

      let filter = [
        {
          $sample: { size: quantity },
        },
      ];

      const result = await this.recordsService.getFilter(filter);

      return apiResponse(res, HttpStatus.OK, result);
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

  @Get(':id')
  async getOneById(@Param('id') id: any, @Res() res: Response) {
    try {
      const result = await this.recordsService.getOneById(id);
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
      : 1;
    let text_search: any = params.text_search || '';

    let filter = [
      {
        $addFields: {
          text_lower: {
            $toLower: '$text',
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
    const result = await this.recordsService.getAll(
      filter,
      page_index,
      page_size,
    );
    return apiResponse(res, HttpStatus.OK, result);
  }

  @Post('update_compare')
  async updateCompare(@Body() data, @Res() res: Response) {
    try {
      const dataList = data.dataList || [];

      const result = await this.recordsService.updateManyCompare(dataList);

      if (result) return apiResponse(res, HttpStatus.OK, {});
      else
        return apiResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, {}, 'error!');
    } catch (error) {
      return apiResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        error,
        'error!',
      );
    }
  }

  @Post('upload_one')
  @UseInterceptors(
    FileInterceptor('file', {
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
  async uploadOne(@Body() data, @UploadedFile() file, @Res() res: Response) {
    try {
      let record = {
        audio: file.path,
        text: data.text,
        gender: data.gender,
        area: data.area,
        age: data.age,
      };
      await this.recordsService.insert(record);
      return apiResponse(res, HttpStatus.CREATED, {}, 'success');
    } catch (error) {
      return apiResponse(res, HttpStatus.BAD_REQUEST, {}, error);
    }
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
      for (let i = 0; i < length; i++) {
        let record = {
          audio: files[i].path,
          text: data.texts[i],
          gender: data.gender,
          area: data.area,
          age: data.age,
        };

        await this.recordsService.insert(record);
      }
      return apiResponse(res, HttpStatus.CREATED, {}, 'success');
    } catch (error) {
      return apiResponse(res, HttpStatus.BAD_REQUEST, {}, error);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.recordsService.remove(id);
      return apiResponse(res, HttpStatus.OK, {});
    } catch (error) {
      return apiResponse(res, HttpStatus.BAD_REQUEST, {}, error);
    }
  }
}
