export enum Action {
  Create = 'create',
  Update = 'update',
  Read = 'read',
  Delete = 'delete',
}

export const permissionType = [
  {
    name: 'Quyền tạo dữ liệu',
    type: Action.Create,
  },
  {
    name: 'Quyền cập nhật dữ liệu',
    type: Action.Update,
  },
  {
    name: 'Quyền đọc dữ liệu',
    type: Action.Read,
  },
  {
    name: 'Quyền xóa dữ liệu',
    type: Action.Delete,
  },
];
