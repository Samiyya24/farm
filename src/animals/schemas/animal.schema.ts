import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type animalDocument = HydratedDocument<Animal>;

@Schema()
export class Animal {
  @Prop()
  animal_type_id: number;
  @Prop()
  photos: string;
  @Prop()
  uniq_id: number;
}
export const AnimalSchema = SchemaFactory.createForClass(Animal);
