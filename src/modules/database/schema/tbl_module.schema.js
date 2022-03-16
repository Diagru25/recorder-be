"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModuleSchema = exports.tbl_module = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var tbl_module = /** @class */ (function () {
    function tbl_module() {
    }
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": "" })
    ], tbl_module.prototype, "name");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": "" })
    ], tbl_module.prototype, "type");
    __decorate([
        (0, mongoose_1.Prop)({ "default": 0 })
    ], tbl_module.prototype, "status");
    tbl_module = __decorate([
        (0, mongoose_1.Schema)()
    ], tbl_module);
    return tbl_module;
}());
exports.tbl_module = tbl_module;
exports.ModuleSchema = mongoose_1.SchemaFactory.createForClass(tbl_module);
