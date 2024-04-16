import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FiberProductionDocument = HydratedDocument<FiberProduction>;

@Schema()
export class FiberProduction {
  @Prop()
  meat_yield: number;
  @Prop()
  shearing_schedule: string;
  @Prop()
  fiber_quality: string;
  @Prop()
  animal_id: number;
}
export const FiberProductionSchema =
  SchemaFactory.createForClass(FiberProduction);
