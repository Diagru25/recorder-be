import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document } from "mongoose";
import { GENDER } from "src/shared/constant";

export type UserDocument = tbl_user & Document;

@Schema()
export class tbl_user {
  @Prop({ required: true, default: '' })
  full_name: string;

  @Prop({ required: true, default: '' })
  phone_number: string;

  @Prop({ default: '' })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: '' })
  email: string;

  @Prop({ required: true, default: GENDER.MALE })
  gender: number;

  @Prop({default: ''})
  address: string;

  @Prop({ default: new Date().getTime() })
  created_at: number;
}

export const UserSchema = SchemaFactory.createForClass(tbl_user);

