import { Document } from 'mongoose';
export declare type LockIpDocument = tbl_lockip & Document;
export declare class tbl_lockip {
    ip: string;
    period_time: string;
    note: string;
}
export declare const LockIpSchema: import("mongoose").Schema<Document<tbl_lockip, any, any>, import("mongoose").Model<Document<tbl_lockip, any, any>, any, any, any>, any>;
