import { AIModule } from './modules/ai/ai.module';
import { ConfigModule } from '@nestjs/config';
import { DictionaryModule } from './modules/dictionary/dictionary.module';
import { ResourcesModule } from './modules/resources/resources.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { GroupsModule } from './modules/groups/groups.module';
import { RecordsModule } from './modules/records/records.module';
import { UsersModule } from './modules/users/users.module';
import { AppGateway } from './utils/app.gateway';
@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true
    }),
    DatabaseModule,
    AuthModule,
    GroupsModule,
    UsersModule,
    RecordsModule,
    ResourcesModule,
    DictionaryModule,
    AIModule
  ],
  providers: [AppGateway],
})
export class AppModule {}
