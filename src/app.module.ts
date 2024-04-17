import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { WorkerModule } from './worker/worker.module';
import { SpecialityModule } from './speciality/speciality.module';
import { MeatProductionModule } from './meat_production/meat_production.module';
import { FiberProductionModule } from './fiber_production/fiber_production.module';
import { MilkProductionModule } from './milk_production/milk_production.module';
import { RecordOfIllnessModule } from './record_of_illness/record_of_illness.module';
import { AnimalTypeModule } from './animal_type/animal_type.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { AnimalsModule } from './animals/animals.module';
import { BlocksModule } from './blocks/blocks.module';
import { FeedingModule } from './feeding/feeding.module';
import { VaccinationHistoryModule } from './vaccination_history/vaccination_history.module';
import { RecordsOfFeedingModule } from './records_of_feeding/records_of_feeding.module';
import { InfoModule } from './info/info.module';
import { BlocksModule } from './blocks/blocks.module';


@Module({
  imports: [
    ConfigModule.forRoot ({envFilePath: '.env',isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    WorkerModule,
    SpecialityModule,
    MeatProductionModule,
    FiberProductionModule,
    MilkProductionModule,
    RecordOfIllnessModule,
    AnimalTypeModule,
    VaccineModule,
    AnimalsModule,
    BlocksModule,
    InfoModule,
    RecordsOfFeedingModule,
    VaccinationHistoryModule,
    FeedingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
