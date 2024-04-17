import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Info } from './schemas/info.schema';
import { Model } from 'mongoose';

@Injectable()
export class InfoService {constructor(
    @InjectModel(Info.name) private InfoModel: Model<Info>
  ) {}
  create(createInfoDto: CreateInfoDto) {
    return this.InfoModel.create(createInfoDto);
  }

  findAll() {
    return this.InfoModel.find();
  }

  findOne(id: number) {
    return this.InfoModel.findOne({ id });
  }

  update(id: number, updateInfoDto: UpdateInfoDto) {
    return this.InfoModel.findOneAndUpdate({ id, updateInfoDto });
  }

  remove(id: number) {
    return this.InfoModel.deleteOne({ id });
  }
}
