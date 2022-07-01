import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDocument = tbl_report & Document;

let d = new Date();

@Schema()
export class tbl_report {
  @Prop()
  name: string;
  
  @Prop({
    required: true,
    default: new Date(
      `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
    ).getTime(),
  })
  create_at: number;
}

export const ReportSchema = SchemaFactory.createForClass(tbl_report);
