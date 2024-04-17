import { Injectable } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vaccine } from './schemas/vaccine.schema';
import { Model } from 'mongoose';

@Injectable()
export class VaccineService {
  constructor(
    @InjectModel(Vaccine.name) private VaccineModel: Model<Vaccine>
  ) {}

  create(createVaccineDto: CreateVaccineDto) {
    return this.VaccineModel.create(createVaccineDto);
  }

  findAll() {
    return this.VaccineModel.find();
  }

  findOne(id: number) {
    return this.VaccineModel.findOne({ id });
  }

  update(id: number, updateVaccineDto: UpdateVaccineDto) {
    return this.VaccineModel.findOneAndUpdate({ id, updateVaccineDto });
  }

  remove(id: number) {
    return this.VaccineModel.deleteOne({ id });
  }
}
