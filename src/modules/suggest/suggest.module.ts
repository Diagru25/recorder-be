import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SuggestController } from './suggest.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SuggestController],
})
export class SuggestsModule {}
