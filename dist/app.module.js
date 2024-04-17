"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const admin_module_1 = require("./admin/admin.module");
const worker_module_1 = require("./worker/worker.module");
const speciality_module_1 = require("./speciality/speciality.module");
const meat_production_module_1 = require("./meat_production/meat_production.module");
const fiber_production_module_1 = require("./fiber_production/fiber_production.module");
const milk_production_module_1 = require("./milk_production/milk_production.module");
const record_of_illness_module_1 = require("./record_of_illness/record_of_illness.module");
const animal_type_module_1 = require("./animal_type/animal_type.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI),
            admin_module_1.AdminModule,
            worker_module_1.WorkerModule,
            speciality_module_1.SpecialityModule,
            meat_production_module_1.MeatProductionModule,
            fiber_production_module_1.FiberProductionModule,
            milk_production_module_1.MilkProductionModule,
            record_of_illness_module_1.RecordOfIllnessModule,
            animal_type_module_1.AnimalTypeModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map