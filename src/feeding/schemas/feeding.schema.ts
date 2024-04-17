import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type feedingDocument = HydratedDocument<Feeding>;

@Schema()
export class Feeding {
    @Prop()
  animal_id: number;
  @Prop()
  feeding_schedules: string;
  @Prop()
  types_of_feed: string;
  @Prop()
  dietary: string;
  @Prop()
  worker_id: number;
}
export const FeedingSchema = SchemaFactory.createForClass(Feeding);