"use strict";
exports.__esModule = true;
exports.readFile = void 0;
var fs_1 = require("fs");
var readFile = function (filePath) {
    // read contents of the file
    var data = (0, fs_1.readFileSync)('a.txt', { encoding: 'utf8' });
    // split the contents by new line
    var lines = data.split(/\r?\n/);
    // print all lines
    lines.forEach(function (line) {
        console.log(line);
    });
    //const lines = data.split(/\r?\n/);
    //console.log(lines);
};
exports.readFile = readFile;
