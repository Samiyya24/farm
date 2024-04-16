import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MeatProductionDocument = HydratedDocument<MeatProduction>;

@Schema()
export class MeatProduction {
  @Prop()
  meat_yield: number;
  @Prop()
  slaughter_date: Date;
  @Prop()
  shearing_schedule: string;
  @Prop()
  animal_id: number;
}

export const MeatProductionSchema = SchemaFactory.createForClass(MeatProduction)
