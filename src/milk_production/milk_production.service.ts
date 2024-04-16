import { Injectable } from '@nestjs/common';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MilkProduction } from './schemas/milk_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class MilkProductionService {
  constructor(
    @InjectModel(MilkProduction.name)
    private MilkProductionModel: Model<MilkProduction>
  ) {}

  create(createMilkProductionDto: CreateMilkProductionDto) {
    return this.MilkProductionModel.create(createMilkProductionDto);
  }

  findAll() {
    return this.MilkProductionModel.find();
  }

  findOne(id: number) {
    return this.MilkProductionModel.findOne({ id });
  }

  update(id: number, updateMilkProductionDto: UpdateMilkProductionDto) {
    return this.MilkProductionModel.findOneAndUpdate({ id, updateMilkProductionDto });
  }

  remove(id: number) {
    return this.MilkProductionModel.deleteOne({ id });
  }
}
