import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

export type GroupDocument = tbl_group & Document;

@Schema()
export class tbl_group {
    @Prop({require: true, default: ""})
    name: string;

    @Prop({required: true, default: ""})
    description: string;

    @Prop({required: true, default: 0})
    level: string;

    @Prop({default: Date.now()})
    created_at: Number;

    @Prop({default: 0})
    status: Number;
}

export const GroupSchema = SchemaFactory.createForClass(tbl_group);