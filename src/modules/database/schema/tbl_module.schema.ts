import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ModuleDocument = tbl_module & Document;

@Schema()
export class tbl_module {
    @Prop({required: true, default: ""})
    name: string;

    @Prop({required: true, default: ""})
    type: string;

    @Prop({default: 0})
    status: Number;
}

export const ModuleSchema = SchemaFactory.createForClass(tbl_module);