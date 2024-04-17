import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Block } from './schemas/block.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlocksService {
  constructor(
    @InjectModel(Block.name)
    private blockModel: Model<Block>
  ) {}
  create(createBlockDto: CreateBlockDto) {
    return this.blockModel.create(createBlockDto);
  }

  findAll() {
    return this.blockModel.find();
  }

  findOne(id: number) {
    return this.blockModel.findOne({ id });
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return this.blockModel.findOneAndUpdate({ id, updateBlockDto });
  }

  remove(id: number) {
    return this.blockModel.deleteOne({ id });
  }
}
