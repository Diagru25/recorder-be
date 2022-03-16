import { Response } from 'express';
import { SuggestsService } from '../database/services/tbl_suggest.service';
export declare class SuggestController {
    private readonly suggestsService;
    constructor(suggestsService: SuggestsService);
    getAll(params: any, res: Response): Promise<Response<any, Record<string, any>>>;
    create(data: any, res: Response): Promise<void>;
}
