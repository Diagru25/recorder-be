import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = tbl_location & Document;

@Schema()
export class tbl_location {
  @Prop({ required: true, default: '' })
  name: string;

  @Prop({ required: true, default: [] })
  coordinate: Array<number>;

  @Prop({ required: true, default: [] })
  command: Array<string>;

  @Prop({ default: new Date().getTime() })
  created_at: number;
}

export const LocationSchema = SchemaFactory.createForClass(tbl_location);
