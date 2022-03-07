import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import apiResponse from 'src/helpers/api_response';
import { GroupsService } from '../database/services/tbl_group.service';

@Controller('admin/v1/groups')
export class GroupsController {
    constructor (
        private readonly groupsService: GroupsService
    ) { }

    @Get()
    async getAll(@Param() params: any,  @Res() res: Response) {
        console.log(params);
        return apiResponse(res, 200, params);
    }

    @Post()
    async create(@Body() entity: any, @Res() res: Response) {
        //const result = await this.groupsService.create(entity);
    }
}
