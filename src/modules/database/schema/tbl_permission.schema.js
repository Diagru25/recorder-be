"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PermissionSchema = exports.tbl_permission = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var constant_1 = require("../../../../../../../../../src/shared/constant");
var tbl_group_schema_1 = require("./tbl_group.schema");
var tbl_module_schema_1 = require("./tbl_module.schema");
var tbl_permission = /** @class */ (function () {
    function tbl_permission() {
    }
    __decorate([
        (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: tbl_group_schema_1.tbl_group.name })
    ], tbl_permission.prototype, "group_id");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: tbl_module_schema_1.tbl_module.name })
    ], tbl_permission.prototype, "module_id");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "enum": [constant_1.Action.Create, constant_1.Action.Update, constant_1.Action.Read, constant_1.Action.Delete] })
    ], tbl_permission.prototype, "action");
    __decorate([
        (0, mongoose_1.Prop)({ "default": false })
    ], tbl_permission.prototype, "status");
    tbl_permission = __decorate([
        (0, mongoose_1.Schema)()
    ], tbl_permission);
    return tbl_permission;
}());
exports.tbl_permission = tbl_permission;
exports.PermissionSchema = mongoose_1.SchemaFactory.createForClass(tbl_permission);
