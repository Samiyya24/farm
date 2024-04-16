import { Injectable } from '@nestjs/common';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FiberProduction } from './schemas/fiber_production.schema';

@Injectable()
export class FiberProductionService {
  constructor(
    @InjectModel(FiberProduction.name)
    private FiberProductionModel: Model<FiberProduction>
  ) {}

  create(createFiberProductionDto: CreateFiberProductionDto) {
    return this.FiberProductionModel.create(createFiberProductionDto);
  }

  findAll() {
    return this.FiberProductionModel.find();
  }

  findOne(id: number) {
    return this.FiberProductionModel.findOne({ id });
  }

  update(id: number, updateFiberProductionDto: UpdateFiberProductionDto) {
    return this.FiberProductionModel.findOneAndUpdate({ id, updateFiberProductionDto });
  }

  remove(id: number) {
    return this.FiberProductionModel.deleteOne({ id });
  }
}
