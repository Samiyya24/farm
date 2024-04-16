import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MilkProductionDocument = HydratedDocument<MilkProduction>;
@Schema()
export class MilkProduction {
  @Prop()
  milk_yield: number;
  @Prop()
  milk_schedule: string;
  @Prop()
  milk_quality: string;
  @Prop()
  animal_id: number;
}

export const MilkProductionSchema =
  SchemaFactory.createForClass(MilkProduction);

