import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LogDocument = tbl_log & Document;

@Schema()
export class tbl_log {
    @Prop({required: true})
    ip: string;

    @Prop({required: true, default: new Date().getTime()})
    time: number

    @Prop()
    note: string

}

export const LogSchema = SchemaFactory.createForClass(tbl_log);