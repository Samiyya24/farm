import { Injectable } from '@nestjs/common';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalType } from './schemas/animal_type.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnimalTypeService {
  constructor(
    @InjectModel(AnimalType.name)
    private AnimalTypeModel: Model<AnimalType>
  ) {}

  create(createAnimalTypeDto: CreateAnimalTypeDto) {
    return this.AnimalTypeModel.create(createAnimalTypeDto);
  }

  findAll() {
    return this.AnimalTypeModel.find();
  }

  findOne(id: number) {
    return this.AnimalTypeModel.findOne({ id });
  }

  update(id: number, updateAnimalTypeDto: UpdateAnimalTypeDto) {
    return this.AnimalTypeModel.findOneAndUpdate({ id, updateAnimalTypeDto });
  }

  remove(id: number) {
    return this.AnimalTypeModel.deleteOne({ id });
  }
}
