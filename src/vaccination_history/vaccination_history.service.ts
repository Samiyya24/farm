import { Injectable } from '@nestjs/common';
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VaccinationHistory } from './schemas/vaccination_history.schema';
import { Model } from 'mongoose';

@Injectable()
export class VaccinationHistoryService {
  constructor(
    @InjectModel(VaccinationHistory.name)
    private VaccinationHistoryModel: Model<VaccinationHistory>
  ) {}
  create(createVaccinationHistoryDto: CreateVaccinationHistoryDto) {
    return this.VaccinationHistoryModel.create(createVaccinationHistoryDto);
  }

  findAll() {
    return this.VaccinationHistoryModel.find();
  }

  findOne(id: number) {
    return this.VaccinationHistoryModel.findOne({ id });
  }

  update(id: number, updateVaccinationHistoryDto: UpdateVaccinationHistoryDto) {
    return this.VaccinationHistoryModel.findOneAndUpdate({
      id,
      updateVaccinationHistoryDto,
    });
  }

  remove(id: number) {
    return this.VaccinationHistoryModel.deleteOne({ id });
  }
}
