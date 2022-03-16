"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var keys_1 = require("../../../../../../../../src/configs/keys");
var logger_middleware_1 = require("../../../../../../../../src/middleware/logger.middleware");
var database_module_1 = require("../database/database.module");
var auth_controller_1 = require("./auth.controller");
var jwt_strategy_1 = require("./strategies/jwt.strategy");
var local_strategy_1 = require("./strategies/local.strategy");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.prototype.configure = function (consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes(auth_controller_1.AuthController);
    };
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [database_module_1.DatabaseModule, passport_1.PassportModule],
            controllers: [auth_controller_1.AuthController],
            providers: [local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
