import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IconDocument = tbl_icon & Document;

@Schema()
export class tbl_icon {
  @Prop({ required: true, default: '' })
  name: string;

  @Prop({ required: true, default: [] })
  command: Array<string>;

  @Prop({required: true, default: null})
  icon: string;

  @Prop({ default: new Date().getTime() })
  created_at: number;
}

export const IconSchema = SchemaFactory.createForClass(tbl_icon);
