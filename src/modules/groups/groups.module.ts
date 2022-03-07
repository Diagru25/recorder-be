import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GroupsController } from './groups.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [GroupsController]
})
export class GroupsModule {}
