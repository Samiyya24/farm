import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type VaccinationHistoryDocument = HydratedDocument<VaccinationHistory>;

@Schema()
export class VaccinationHistory {
  @Prop()
  animal_id: number;
  @Prop()
  vaccine_type_id: number;
  @Prop()
  vaccinated_date: Date;
  @Prop()
  next_vaccination_date: Date;
  @Prop()
  vaccination_photo: string;
  @Prop()
  worker_id: number;
}
export const VaccinationHistorySchema =
  SchemaFactory.createForClass(VaccinationHistory);
