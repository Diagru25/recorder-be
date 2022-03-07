import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Action } from "src/shared/constant";
import { tbl_group } from "./tbl_group.schema";
import { tbl_module } from "./tbl_module.schema";

export type PermissionDocument = tbl_permission & Document;

@Schema()
export class tbl_permission {
    @Prop({required: true, type: Types.ObjectId, ref: tbl_group.name})
    group_id;

    @Prop({required: true, type: Types.ObjectId, ref: tbl_module.name})
    module_id;

    @Prop({required: true, enum: [Action.Create, Action.Update, Action.Read, Action.Delete]})
    action: string;

    @Prop({default: false})
    status: boolean;
}

export const PermissionSchema = SchemaFactory.createForClass(tbl_permission);