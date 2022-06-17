import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { IconsController } from './icons.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [IconsController],
})
export class IconsModule {}
