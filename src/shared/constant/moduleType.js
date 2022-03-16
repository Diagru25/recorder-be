"use strict";
exports.__esModule = true;
exports.modulesType = exports.module_types = void 0;
exports.module_types = {
    USER: "MODULE_USERS_MANAGEMENT",
    MEMBER: "MODULE_MEMBER_MANAGEMENT",
    GROUP: "MODULE_GROUPS_MANAGEMENT",
    PERMISSION: "MODULE_PERMISSIONS_MANAGEMENT",
    MEDICINE: "MODULE_MEDICINE_MANAGEMENT",
    PRESCRIPTION: "MODULE_PRESCRIPTION_MANAGEMENT",
    STATISTIC: "MODULE_STATISTIC_MANAGEMENT"
};
exports.modulesType = [
    {
        name: "Thống kê",
        type: exports.module_types.STATISTIC
    },
    {
        name: 'Quản lý người dùng',
        type: exports.module_types.USER
    },
    {
        name: 'Quản lý khách hàng',
        type: exports.module_types.MEMBER
    },
    {
        name: "Quản lý thuốc",
        type: exports.module_types.MEDICINE
    },
    {
        name: "Quản lý đơn thuốc",
        type: exports.module_types.PRESCRIPTION
    },
    {
        name: 'Quản lý nhóm quyền',
        type: exports.module_types.GROUP
    },
    {
        name: "Quản lý quyền",
        type: exports.module_types.PERMISSION
    }
];
