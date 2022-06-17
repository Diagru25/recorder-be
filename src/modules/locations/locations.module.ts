import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { LocationsController } from './locations.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationsController],
})
export class LocationsModule {}
