import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DictionaryController } from './dictionary.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [DictionaryController],
})
export class DictionaryModule {}
