import { Document } from "mongoose";
export declare type LogDocument = tbl_log & Document;
export declare class tbl_log {
    ip: string;
    time: number;
    note: string;
}
export declare const LogSchema: import("mongoose").Schema<Document<tbl_log, any, any>, import("mongoose").Model<Document<tbl_log, any, any>, any, any, any>, any>;
