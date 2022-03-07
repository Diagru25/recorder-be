import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';

@Controller('v1/resources')
export class ResourcesController {
    constructor() {}

    @Get('/file')
    async getImage(@Query() query, @Res() res) {
        console.log(query)
        //return true;
        res.sendFile(query.filename, { root: '.' });
    }
}
