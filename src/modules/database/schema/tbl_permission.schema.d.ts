import { Document } from "mongoose";
export declare type PermissionDocument = tbl_permission & Document;
export declare class tbl_permission {
    group_id: any;
    module_id: any;
    action: string;
    status: boolean;
}
export declare const PermissionSchema: import("mongoose").Schema<Document<tbl_permission, any, any>, import("mongoose").Model<Document<tbl_permission, any, any>, any, any, any>, any>;
