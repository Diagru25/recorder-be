import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RecordDocument = tbl_record & Document;

@Schema()
export class tbl_record {
    @Prop({required: true, default: ''})
    audio: string;

    @Prop({required: true, default: ''})
    text: string;

    @Prop({default: -1})
    gender: number;

    @Prop({default: 0})
    age: number

    @Prop({default: ''})
    area: string
}

export const RecordSchema = SchemaFactory.createForClass(tbl_record);