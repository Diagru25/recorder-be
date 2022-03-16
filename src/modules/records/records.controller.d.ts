import { Response } from 'express';
import { RecordsService } from '../database/services/tbl_record.service';
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    getAll(params: any, res: Response): Promise<Response<any, Record<string, any>>>;
    create(data: any, files: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
