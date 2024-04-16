import { Module } from "@nestjs/common";
import { MeatProductionService } from "./meat_production.service";
import { MeatProductionController } from "./meat_production.controller";
import { MongooseModule } from "@nestjs/mongoose";
import {
  MeatProduction,
  MeatProductionSchema,
} from "./schemas/meat_production.schema";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MeatProduction.name, schema: MeatProductionSchema },
    ]),
    JwtModule.register({})
  ],
  controllers: [MeatProductionController],
  providers: [MeatProductionService],
})
export class MeatProductionModule {}
