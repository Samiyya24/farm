"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiberProductionModule = void 0;
const common_1 = require("@nestjs/common");
const fiber_production_service_1 = require("./fiber_production.service");
const fiber_production_controller_1 = require("./fiber_production.controller");
const mongoose_1 = require("@nestjs/mongoose");
const fiber_production_schema_1 = require("./schemas/fiber_production.schema");
const jwt_1 = require("@nestjs/jwt");
let FiberProductionModule = class FiberProductionModule {
};
exports.FiberProductionModule = FiberProductionModule;
exports.FiberProductionModule = FiberProductionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: fiber_production_schema_1.FiberProduction.name,
                    schema: fiber_production_schema_1.FiberProductionSchema,
                },
            ]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [fiber_production_controller_1.FiberProductionController],
        providers: [fiber_production_service_1.FiberProductionService],
    })
], FiberProductionModule);
//# sourceMappingURL=fiber_production.module.js.map