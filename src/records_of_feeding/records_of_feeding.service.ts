import { Injectable } from '@nestjs/common';
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { Model } from 'mongoose';
import { RecordsOfFeeding } from './schemas/records_of_feeding.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RecordsOfFeedingService {
  constructor(
    @InjectModel(RecordsOfFeeding.name)
    private RecordsOfFeedingModel: Model<RecordsOfFeeding>
  ) {}
  create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto) {
    return this.RecordsOfFeedingModel.create(createRecordsOfFeedingDto);
  }

  findAll() {
    return this.RecordsOfFeedingModel.find();
  }

  findOne(id: number) {
    return this.RecordsOfFeedingModel.findOne({ id });
  }

  update(id: number, updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto) {
    return this.RecordsOfFeedingModel.findOneAndUpdate({ id, updateRecordsOfFeedingDto });
  }

  remove(id: number) {
    return this.RecordsOfFeedingModel.deleteOne({ id });
  }
}
