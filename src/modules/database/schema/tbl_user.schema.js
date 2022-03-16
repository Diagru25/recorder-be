"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserSchema = exports.tbl_user = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var constant_1 = require("../../../../../../../../../src/shared/constant");
var tbl_user = /** @class */ (function () {
    function tbl_user() {
    }
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": '' })
    ], tbl_user.prototype, "full_name");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": '' })
    ], tbl_user.prototype, "phone_number");
    __decorate([
        (0, mongoose_1.Prop)({ "default": '' })
    ], tbl_user.prototype, "username");
    __decorate([
        (0, mongoose_1.Prop)({ required: true })
    ], tbl_user.prototype, "password");
    __decorate([
        (0, mongoose_1.Prop)({ "default": '' })
    ], tbl_user.prototype, "email");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": constant_1.GENDER.MALE })
    ], tbl_user.prototype, "gender");
    __decorate([
        (0, mongoose_1.Prop)()
    ], tbl_user.prototype, "address");
    tbl_user = __decorate([
        (0, mongoose_1.Schema)()
    ], tbl_user);
    return tbl_user;
}());
exports.tbl_user = tbl_user;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(tbl_user);
