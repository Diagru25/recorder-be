import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RecordDocument = tbl_record & Document;

@Schema()
export class tbl_record {
  @Prop({ required: true, default: '' })
  audio: string;

  @Prop({ required: true, default: '' })
  text: string;

  @Prop({ default: -1 })
  gender: number;

  @Prop({ default: '' })
  age: string;

  @Prop({ default: '' })
  area: string;

  @Prop({ default: new Date().getTime() })
  created_at: number;
}

export const RecordSchema = SchemaFactory.createForClass(tbl_record);