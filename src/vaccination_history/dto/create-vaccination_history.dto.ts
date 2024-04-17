import { Date } from "mongoose";

export class CreateVaccinationHistoryDto {
  animal_id: number;
  vaccine_type_id: number;
  vaccinated_date: Date;
  next_vaccination_date: Date;
  vaccination_photo: string;
  worker_id:number
}
