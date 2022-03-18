import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuggestDocument = tbl_suggest & Document;

@Schema()
export class tbl_suggest {
  @Prop({ required: true, default: '' })
  text: string;
}

export const SuggestSchema = SchemaFactory.createForClass(tbl_suggest);
