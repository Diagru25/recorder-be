"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var suggest_module_1 = require("./modules/suggest/suggest.module");
var resources_module_1 = require("./modules/resources/resources.module");
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var keys_1 = require("./configs/keys");
var auth_module_1 = require("./modules/auth/auth.module");
var database_module_1 = require("./modules/database/database.module");
var groups_module_1 = require("./modules/groups/groups.module");
var records_module_1 = require("./modules/records/records.module");
var users_module_1 = require("./modules/users/users.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forRoot(keys_1["default"].mongoURI),
                database_module_1.DatabaseModule,
                auth_module_1.AuthModule,
                groups_module_1.GroupsModule,
                users_module_1.UsersModule,
                records_module_1.RecordsModule,
                resources_module_1.ResourcesModule,
                suggest_module_1.SuggestsModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
