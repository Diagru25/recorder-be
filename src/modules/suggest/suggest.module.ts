import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SuggestsController } from './suggest.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SuggestsController],
})
export class SuggestModule {}
