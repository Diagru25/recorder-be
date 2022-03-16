"use strict";
exports.__esModule = true;
exports.permissionType = exports.Action = void 0;
var Action;
(function (Action) {
    Action["Create"] = "create";
    Action["Update"] = "update";
    Action["Read"] = "read";
    Action["Delete"] = "delete";
})(Action = exports.Action || (exports.Action = {}));
exports.permissionType = [
    {
        name: 'Quyền tạo dữ liệu',
        type: Action.Create
    },
    {
        name: 'Quyền cập nhật dữ liệu',
        type: Action.Update
    },
    {
        name: 'Quyền đọc dữ liệu',
        type: Action.Read
    },
    {
        name: 'Quyền xóa dữ liệu',
        type: Action.Delete
    },
];
