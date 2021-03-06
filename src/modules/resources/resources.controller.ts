import { Controller, Get, Query, Res } from '@nestjs/common';

@Controller('v1/resources')
export class ResourcesController {
    constructor() {}

    @Get('/get_file')
    async getImage(@Query() query, @Res() res) {
        res.sendFile(query.filename, { root: '.' });
    }
}
