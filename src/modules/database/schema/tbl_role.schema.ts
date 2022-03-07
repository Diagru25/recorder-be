import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document, Types} from "mongoose";
import { tbl_user } from "./tbl_user.schema";

export type RoleDocument = tbl_role & Document;

@Schema()
export class tbl_role {
    
    @Prop()
    type: number;

    @Prop()
    module_code: string;

    @Prop()
    action_code: string;

    @Prop({type: Types.ObjectId, ref: tbl_user.name})
    user_id: Types.ObjectId;

    @Prop()
    is_allow: boolean;

    @Prop()
    status: number;

    @Prop()
    priority: number;

}

export const RoleSchema = SchemaFactory.createForClass(tbl_role);