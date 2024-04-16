import { Module } from '@nestjs/common';
import { FiberProductionService } from './fiber_production.service';
import { FiberProductionController } from './fiber_production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FiberProduction, FiberProductionSchema } from './schemas/fiber_production.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FiberProduction.name,
        schema: FiberProductionSchema,
      },
    ]),
    JwtModule.register({}),
  ],
  controllers: [FiberProductionController],
  providers: [FiberProductionService],
})
export class FiberProductionModule {}
