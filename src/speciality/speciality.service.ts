import { Injectable } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Speciality } from './schemas/speciality.schema';
import { Model } from 'mongoose';

@Injectable()
export class SpecialityService {
  constructor(@InjectModel(Speciality.name) private specialityModel: Model<Speciality>){}
  
  create(createSpecialityDto: CreateSpecialityDto) {
    return this.specialityModel.create(createSpecialityDto);
  }

  findAll() {
    return this.specialityModel.find();
  }

  findOne(id: number) {
    return this.specialityModel.findOne({ id });
  }

  update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    return this.specialityModel.findOneAndUpdate({ id, updateSpecialityDto });
  }

  remove(id: number) {
    return this.specialityModel.deleteOne({ id });
  }
}


