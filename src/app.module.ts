import { ResourcesModule } from './modules/resources/resources.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import keys from './configs/keys';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { GroupsModule } from './modules/groups/groups.module';
import { RecordsModule } from './modules/records/records.module';
import { UsersModule } from './modules/users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot(keys.mongoURI),
    DatabaseModule,
    AuthModule,
    GroupsModule,
    UsersModule,
    RecordsModule,
    ResourcesModule
  ],
})
export class AppModule {}
