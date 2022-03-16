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
  SuggestSchema,
  tbl_group,
  tbl_module,
  tbl_permission,
  tbl_user,
  tbl_role,
  tbl_log,
  tbl_lockip,
  tbl_record,
  tbl_suggest,
} from './schema';
import { GroupsService } from './services/tbl_group.service';
import { UsersService } from './services/tbl_user.service';
import { AuthService } from './services/auth.service';
import { LogService } from './services/tbl_log.service';
import { LockIpService } from './services/tbl_lockip.services';
import { RecordsService } from './services/tbl_record.service';
import { SuggestsService } from './services/tbl_suggest.service';

@Module({
  imports: [
    MongooseModule.forRoot(keys.mongoURI),
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
        name: tbl_suggest.name,
        schema: SuggestSchema,
      },
    ]),
    JwtModule.register({
      secret: keys.jwt.JWT_SECRET,
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
    SuggestsService,
  ],
  exports: [
    GroupsService,
    UsersService,
    AuthService,
    LogService,
    LockIpService,
    RecordsService,
    SuggestsService,
  ],
})
export class DatabaseModule {}
