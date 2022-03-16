"use strict";
exports.__esModule = true;
var apiResponse = function (res, statusCode, data, message, version) {
    if (message === void 0) { message = ''; }
    if (version === void 0) { version = 1; }
    var ans = {
        statusCode: statusCode,
        message: message,
        data: data,
        version: version
    };
    return res.status(statusCode).json(ans);
};
exports["default"] = apiResponse;
