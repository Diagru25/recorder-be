import { SuggestsService } from './modules/database/services/tbl_suggest.service';
import { Seeder } from 'nestjs-seeder';
export declare class ProjectSeeder implements Seeder {
    private readonly suggestsService;
    constructor(suggestsService: SuggestsService);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
