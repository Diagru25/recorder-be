import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ReportsController } from './reports.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ReportsController],
})
export class ReportsModule {}
