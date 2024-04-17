import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './schemas/animal.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnimalsService {constructor(
    @InjectModel(Animal.name)
    private AnimalTypeModel: Model<Animal>
  ) {}
  create(createAnimalDto: CreateAnimalDto) {
    return this.AnimalTypeModel.create(createAnimalDto);
  }

  findAll() {
    return this.AnimalTypeModel.find();
  }

  findOne(id: number) {
    return this.AnimalTypeModel.findOne({ id });
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return this.AnimalTypeModel.findOneAndUpdate({ id, updateAnimalDto });
  }

  remove(id: number) {
    return this.AnimalTypeModel.deleteOne({ id });
  }
}
