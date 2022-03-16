import { Response } from 'express';
import { GroupsService } from '../database/services/tbl_group.service';
export declare class GroupsController {
    private readonly groupsService;
    constructor(groupsService: GroupsService);
    getAll(params: any, res: Response): Promise<Response<any, Record<string, any>>>;
    create(entity: any, res: Response): Promise<void>;
}
