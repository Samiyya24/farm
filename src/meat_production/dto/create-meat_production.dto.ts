import { Date } from "mongoose";

export class CreateMeatProductionDto {
  meat_yield: number;
  slaughter_date: Date;
  shearing_schedule:string
  animal_id:number
}
