"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GroupSchema = exports.tbl_group = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var tbl_group = /** @class */ (function () {
    function tbl_group() {
    }
    __decorate([
        (0, mongoose_1.Prop)({ require: true, "default": "" })
    ], tbl_group.prototype, "name");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": "" })
    ], tbl_group.prototype, "description");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": 0 })
    ], tbl_group.prototype, "level");
    __decorate([
        (0, mongoose_1.Prop)({ "default": Date.now() })
    ], tbl_group.prototype, "created_at");
    __decorate([
        (0, mongoose_1.Prop)({ "default": 0 })
    ], tbl_group.prototype, "status");
    tbl_group = __decorate([
        (0, mongoose_1.Schema)()
    ], tbl_group);
    return tbl_group;
}());
exports.tbl_group = tbl_group;
exports.GroupSchema = mongoose_1.SchemaFactory.createForClass(tbl_group);
