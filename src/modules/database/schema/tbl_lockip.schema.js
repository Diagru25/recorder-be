"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LockIpSchema = exports.tbl_lockip = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var tbl_lockip = /** @class */ (function () {
    function tbl_lockip() {
    }
    __decorate([
        (0, mongoose_1.Prop)({ required: true })
    ], tbl_lockip.prototype, "ip");
    __decorate([
        (0, mongoose_1.Prop)()
    ], tbl_lockip.prototype, "period_time");
    __decorate([
        (0, mongoose_1.Prop)()
    ], tbl_lockip.prototype, "note");
    tbl_lockip = __decorate([
        (0, mongoose_1.Schema)()
    ], tbl_lockip);
    return tbl_lockip;
}());
exports.tbl_lockip = tbl_lockip;
exports.LockIpSchema = mongoose_1.SchemaFactory.createForClass(tbl_lockip);
