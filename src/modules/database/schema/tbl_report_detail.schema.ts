import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDetailDocument = tbl_report_detail & Document;

@Schema()
export class tbl_report_detail {
  @Prop({ required: true })
  report_id: string;

  @Prop({ required: true, default: new Date().getTime() })
  create_at: number;

  @Prop({ required: true, default: null })
  icon_id: string;

  @Prop({ required: true, default: null })
  location_id: string;
}

export const ReportDetailSchema = SchemaFactory.createForClass(tbl_report_detail);
