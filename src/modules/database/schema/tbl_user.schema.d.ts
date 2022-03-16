import { Document } from "mongoose";
export declare type UserDocument = tbl_user & Document;
export declare class tbl_user {
    full_name: string;
    phone_number: string;
    username: string;
    password: string;
    email: string;
    gender: number;
    address: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<tbl_user, any, any>, import("mongoose").Model<Document<tbl_user, any, any>, any, any, any>, any>;
