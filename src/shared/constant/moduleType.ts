export const module_types = {
  USER: "MODULE_USERS_MANAGEMENT",
  MEMBER:"MODULE_MEMBER_MANAGEMENT",
  GROUP: "MODULE_GROUPS_MANAGEMENT",
  PERMISSION: "MODULE_PERMISSIONS_MANAGEMENT",
  MEDICINE: "MODULE_MEDICINE_MANAGEMENT",
  PRESCRIPTION: "MODULE_PRESCRIPTION_MANAGEMENT",
  STATISTIC: "MODULE_STATISTIC_MANAGEMENT"
}
export const modulesType = [
  {
    name: "Thống kê",
    type: module_types.STATISTIC
  },
  {
    name: 'Quản lý người dùng',
    type: module_types.USER,
  },
  {
    name: 'Quản lý khách hàng',
    type: module_types.MEMBER,
  },
  {
    name: "Quản lý thuốc",
    type: module_types.MEDICINE
  },
  {
    name: "Quản lý đơn thuốc",
    type: module_types.PRESCRIPTION
  },
  {
    name: 'Quản lý nhóm quyền',
    type: module_types.GROUP
  },
  {
    name: "Quản lý quyền",
    type: module_types.PERMISSION
  }
];