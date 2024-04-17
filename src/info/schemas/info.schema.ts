import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type InfoDocument = HydratedDocument<Info>;

@Schema()
export class Info {
  @Prop()
  weight: number;
  @Prop()
  height: number;
  @Prop()
  color: string;
  @Prop()
  breed: string;
  @Prop()
  gender: string;
  @Prop()
  birth_or_acquisition: Date;
  @Prop()
  block_id: number;
  @Prop()
  animal_id: number;
  @Prop()
  parent_id: number;
}
export const InfoSchema = SchemaFactory.createForClass(Info);
