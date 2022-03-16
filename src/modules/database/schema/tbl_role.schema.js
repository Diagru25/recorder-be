"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoleSchema = exports.tbl_role = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var tbl_user_schema_1 = require("./tbl_user.schema");
var tbl_role = /** @class */ (function () {
    function tbl_role() {
    }
    __decorate([
        (0, mongoose_1.Prop)()
    ], tbl_role.prototype, "type");
    __decorate([
        (0, mongoose_1.Prop)()
    ], tbl_role.prototype, "module_code");
    __decorate([
        (0, mongoose_1.Prop)()
    ], tbl_role.prototype, "action_code");
    __decorate([
        (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: tbl_user_schema_1.tbl_user.name })
    ], tbl_role.prototype, "user_id");
    __decorate([
        (0, mongoose_1.Prop)()
    ], tbl_role.prototype, "is_allow");
    __decorate([
        (0, mongoose_1.Prop)()
    ], tbl_role.prototype, "status");
    __decorate([
        (0, mongoose_1.Prop)()
    ], tbl_role.prototype, "priority");
    tbl_role = __decorate([
        (0, mongoose_1.Schema)()
    ], tbl_role);
    return tbl_role;
}());
exports.tbl_role = tbl_role;
exports.RoleSchema = mongoose_1.SchemaFactory.createForClass(tbl_role);
