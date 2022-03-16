"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecordSchema = exports.tbl_record = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var tbl_record = /** @class */ (function () {
    function tbl_record() {
    }
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": '' })
    ], tbl_record.prototype, "audio");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": '' })
    ], tbl_record.prototype, "text");
    __decorate([
        (0, mongoose_1.Prop)({ "default": -1 })
    ], tbl_record.prototype, "gender");
    __decorate([
        (0, mongoose_1.Prop)({ "default": '' })
    ], tbl_record.prototype, "age");
    __decorate([
        (0, mongoose_1.Prop)({ "default": '' })
    ], tbl_record.prototype, "area");
    tbl_record = __decorate([
        (0, mongoose_1.Schema)()
    ], tbl_record);
    return tbl_record;
}());
exports.tbl_record = tbl_record;
exports.RecordSchema = mongoose_1.SchemaFactory.createForClass(tbl_record);
