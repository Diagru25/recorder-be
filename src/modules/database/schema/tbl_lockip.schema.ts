import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LockIpDocument = tbl_lockip & Document;

@Schema()
export class tbl_lockip {
  @Prop({ required: true })
  ip: string;

  @Prop()
  period_time: string;

  @Prop()
  note: string;
}

export const LockIpSchema = SchemaFactory.createForClass(tbl_lockip);
