import { Document, Types } from "mongoose";
export declare type RoleDocument = tbl_role & Document;
export declare class tbl_role {
    type: number;
    module_code: string;
    action_code: string;
    user_id: Types.ObjectId;
    is_allow: boolean;
    status: number;
    priority: number;
}
export declare const RoleSchema: import("mongoose").Schema<Document<tbl_role, any, any>, import("mongoose").Model<Document<tbl_role, any, any>, any, any, any>, any>;
