import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
export type ReportDetailDocument = tbl_report_detail & Document;

@Schema()
export class tbl_report_detail {
  @Prop({ required: true })
  report_id: mongoose.Types.ObjectId;

  @Prop({ required: true, default: new Date().getTime() })
  create_at: number;

  @Prop()
  icon_id: mongoose.Types.ObjectId;

  @Prop()
  location_id: mongoose.Types.ObjectId;

  @Prop()
  quantity: number;
}

export const ReportDetailSchema =
  SchemaFactory.createForClass(tbl_report_detail);
