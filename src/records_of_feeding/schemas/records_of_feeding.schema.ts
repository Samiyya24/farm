import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type recordOfFeedingDocument = HydratedDocument<RecordsOfFeeding>;

@Schema()
export class RecordsOfFeeding {
  @Prop()
  date: Date;
  @Prop()
  consumption: number;
  @Prop()
  feeding_id: number;
}
export const recordOfFeedingSchema =
  SchemaFactory.createForClass(RecordsOfFeeding);
