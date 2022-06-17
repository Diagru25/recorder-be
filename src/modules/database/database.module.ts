import { IconsService } from './services/tbl_icon.services';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { JwtModule } from '@nestjs/jwt';

import keys from 'src/configs/keys';
import {
  GroupSchema,
  ModuleSchema,
  PermissionSchema,
  UserSchema,
  RoleSchema,
  LogSchema,
  LockIpSchema,
  RecordSchema,
  DictionarySchema,
  LocationSchema,
  IconSchema,
  ReportSchema,
  ReportDetailSchema,
  tbl_group,
  tbl_module,
  tbl_permission,
  tbl_user,
  tbl_role,
  tbl_log,
  tbl_lockip,
  tbl_record,
  tbl_dictionary,
  tbl_location,
  tbl_icon,
  tbl_report,
  tbl_report_detail,
} from './schema';
import { GroupsService } from './services/tbl_group.service';
import { UsersService } from './services/tbl_user.service';
import { AuthService } from './services/auth.service';
import { LogService } from './services/tbl_log.service';
import { LockIpService } from './services/tbl_lockip.services';
import { RecordsService } from './services/tbl_record.service';
import { DictionaryService } from './services/tbl_dictionary.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocationsService } from './services/tbl_location.services';
import { ReportsService } from './services/tbl_report.service';
import { ReportDetailsService } from './services/tbl_report_detail.service';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    //MongooseModule.forRoot('mongodb://192.168.1.125:27017/speechtotext'),
    MongooseModule.forFeature([
      {
        name: tbl_group.name,
        schema: GroupSchema,
      },
      {
        name: tbl_module.name,
        schema: ModuleSchema,
      },
      {
        name: tbl_permission.name,
        schema: PermissionSchema,
      },
      {
        name: tbl_user.name,
        schema: UserSchema,
      },
      {
        name: tbl_role.name,
        schema: RoleSchema,
      },
      {
        name: tbl_log.name,
        schema: LogSchema,
      },
      {
        name: tbl_lockip.name,
        schema: LockIpSchema,
      },
      {
        name: tbl_record.name,
        schema: RecordSchema,
      },
      {
        name: tbl_dictionary.name,
        schema: DictionarySchema,
      },
      {
        name: tbl_location.name,
        schema: LocationSchema,
      },
      {
        name: tbl_icon.name,
        schema: IconSchema,
      },
      {
        name: tbl_report.name,
        schema: ReportSchema,
      },
      {
        name: tbl_report_detail.name,
        schema: ReportDetailSchema,
      },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: keys.jwt.expiresIn,
      },
    }),
  ],

  providers: [
    GroupsService,
    UsersService,
    AuthService,
    LogService,
    LockIpService,
    RecordsService,
    DictionaryService,
    LocationsService,
    IconsService,
    ReportsService,
    ReportDetailsService,
  ],
  exports: [
    GroupsService,
    UsersService,
    AuthService,
    LogService,
    LockIpService,
    RecordsService,
    DictionaryService,
    LocationsService,
    IconsService,
    ReportsService,
    ReportDetailsService
  ],
})
export class DatabaseModule {}
