import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RecordsController } from './records.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RecordsController],
})
export class RecordsModule {}
