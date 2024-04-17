import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type blockDocument = HydratedDocument<Block>;

@Schema()
export class Block {
  @Prop()
  number: number;
  @Prop()
  description: string;
}
export const BlockSchema = SchemaFactory.createForClass(Block);

