import { Document } from "mongoose";
export declare type RecordDocument = tbl_record & Document;
export declare class tbl_record {
    audio: string;
    text: string;
    gender: number;
    age: string;
    area: string;
}
export declare const RecordSchema: import("mongoose").Schema<Document<tbl_record, any, any>, import("mongoose").Model<Document<tbl_record, any, any>, any, any, any>, any>;
