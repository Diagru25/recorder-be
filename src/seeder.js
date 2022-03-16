"use strict";
exports.__esModule = true;
var nestjs_seeder_1 = require("nestjs-seeder");
var database_module_1 = require("./modules/database/database.module");
var project_seeder_1 = require("./project.seeder");
(0, nestjs_seeder_1.seeder)({
    imports: [database_module_1.DatabaseModule]
}).run([project_seeder_1.ProjectSeeder]);
