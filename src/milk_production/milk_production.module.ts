import { Module } from '@nestjs/common';
import { MilkProductionService } from './milk_production.service';
import { MilkProductionController } from './milk_production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MilkProduction, MilkProductionSchema } from './schemas/milk_production.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MilkProduction.name,
        schema: MilkProductionSchema,
      },
    ]),
    JwtModule.register({}),
  ],
  controllers: [MilkProductionController],
  providers: [MilkProductionService],
})
export class MilkProductionModule {}
