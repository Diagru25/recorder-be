import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AIController } from './ai.controller';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [AIController],
})
export class AIModule {}
