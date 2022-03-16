import { Document } from "mongoose";
export declare type SuggestDocument = tbl_suggest & Document;
export declare class tbl_suggest {
    text: string;
}
export declare const SuggestSchema: import("mongoose").Schema<Document<tbl_suggest, any, any>, import("mongoose").Model<Document<tbl_suggest, any, any>, any, any, any>, any>;
