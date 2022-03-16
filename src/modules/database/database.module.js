"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DatabaseModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var jwt_1 = require("@nestjs/jwt");
var keys_1 = require("../../../../../../../../src/configs/keys");
var schema_1 = require("./schema");
var tbl_group_service_1 = require("./services/tbl_group.service");
var tbl_user_service_1 = require("./services/tbl_user.service");
var auth_service_1 = require("./services/auth.service");
var tbl_log_service_1 = require("./services/tbl_log.service");
var tbl_lockip_services_1 = require("./services/tbl_lockip.services");
var tbl_record_service_1 = require("./services/tbl_record.service");
var tbl_suggest_service_1 = require("./services/tbl_suggest.service");
var DatabaseModule = /** @class */ (function () {
    function DatabaseModule() {
    }
    DatabaseModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forRoot(keys_1["default"].mongoURI),
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: schema_1.tbl_group.name,
                        schema: schema_1.GroupSchema
                    },
                    {
                        name: schema_1.tbl_module.name,
                        schema: schema_1.ModuleSchema
                    },
                    {
                        name: schema_1.tbl_permission.name,
                        schema: schema_1.PermissionSchema
                    },
                    {
                        name: schema_1.tbl_user.name,
                        schema: schema_1.UserSchema
                    },
                    {
                        name: schema_1.tbl_role.name,
                        schema: schema_1.RoleSchema
                    },
                    {
                        name: schema_1.tbl_log.name,
                        schema: schema_1.LogSchema
                    },
                    {
                        name: schema_1.tbl_lockip.name,
                        schema: schema_1.LockIpSchema
                    },
                    {
                        name: schema_1.tbl_record.name,
                        schema: schema_1.RecordSchema
                    },
                    {
                        name: schema_1.tbl_suggest.name,
                        schema: schema_1.SuggestSchema
                    },
                ]),
                jwt_1.JwtModule.register({
                    secret: keys_1["default"].jwt.JWT_SECRET,
                    signOptions: {
                        expiresIn: keys_1["default"].jwt.expiresIn
                    }
                }),
            ],
            providers: [
                tbl_group_service_1.GroupsService,
                tbl_user_service_1.UsersService,
                auth_service_1.AuthService,
                tbl_log_service_1.LogService,
                tbl_lockip_services_1.LockIpService,
                tbl_record_service_1.RecordsService,
                tbl_suggest_service_1.SuggestsService,
            ],
            exports: [
                tbl_group_service_1.GroupsService,
                tbl_user_service_1.UsersService,
                auth_service_1.AuthService,
                tbl_log_service_1.LogService,
                tbl_lockip_services_1.LockIpService,
                tbl_record_service_1.RecordsService,
                tbl_suggest_service_1.SuggestsService,
            ]
        })
    ], DatabaseModule);
    return DatabaseModule;
}());
exports.DatabaseModule = DatabaseModule;
