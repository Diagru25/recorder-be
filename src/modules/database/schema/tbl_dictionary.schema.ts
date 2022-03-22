import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DictionaryDocument = tbl_dictionary & Document;

@Schema()
export class tbl_dictionary {
  @Prop({ required: true, default: '' })
  text: string;

  @Prop({ default: 0})
  nofGet: number;

  @Prop({default: new Date().getTime()})
  created_at: number;
}

export const DictionarySchema = SchemaFactory.createForClass(tbl_dictionary);
