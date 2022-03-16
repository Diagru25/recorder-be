import { Document } from "mongoose";
export declare type GroupDocument = tbl_group & Document;
export declare class tbl_group {
    name: string;
    description: string;
    level: string;
    created_at: Number;
    status: Number;
}
export declare const GroupSchema: import("mongoose").Schema<Document<tbl_group, any, any>, import("mongoose").Model<Document<tbl_group, any, any>, any, any, any>, any>;
