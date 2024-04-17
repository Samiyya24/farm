import { Injectable } from '@nestjs/common';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Feeding } from './schemas/feeding.schema';
import { Model } from 'mongoose';

@Injectable()
export class FeedingService {
  constructor(
    @InjectModel(Feeding.name)
    private FeedingModel: Model<Feeding>
  ) {}
  create(createFeedingDto: CreateFeedingDto) {
    return this.FeedingModel.create(createFeedingDto);
  }

  findAll() {
    return this.FeedingModel.find();
  }

  findOne(id: number) {
    return this.FeedingModel.findOne({ id });
  }

  update(id: number, updateFeedingDto: UpdateFeedingDto) {
    return this.FeedingModel.findOneAndUpdate({
      id,
      updateFeedingDto,
    });
  }

  remove(id: number) {
    return this.FeedingModel.deleteOne({ id });
  }
}

