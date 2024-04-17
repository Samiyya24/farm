import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type animalTypeDocument = HydratedDocument<AnimalType>;
@Schema()
export class AnimalType {
  @Prop()
  type_name: string;
  @Prop()
  description: string;
}

export const AnimalTypeSchema = SchemaFactory.createForClass(AnimalType);
