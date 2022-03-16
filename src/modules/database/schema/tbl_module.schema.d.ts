import { Document } from "mongoose";
export declare type ModuleDocument = tbl_module & Document;
export declare class tbl_module {
    name: string;
    type: string;
    status: Number;
}
export declare const ModuleSchema: import("mongoose").Schema<Document<tbl_module, any, any>, import("mongoose").Model<Document<tbl_module, any, any>, any, any, any>, any>;
