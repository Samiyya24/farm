"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordOfIllnessModule = void 0;
const common_1 = require("@nestjs/common");
const record_of_illness_service_1 = require("./record_of_illness.service");
const record_of_illness_controller_1 = require("./record_of_illness.controller");
const mongoose_1 = require("@nestjs/mongoose");
const record_of_illness_schemas_1 = require("./schemas/record_of_illness.schemas");
let RecordOfIllnessModule = class RecordOfIllnessModule {
};
exports.RecordOfIllnessModule = RecordOfIllnessModule;
exports.RecordOfIllnessModule = RecordOfIllnessModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: record_of_illness_schemas_1.RecordOfIllness.name,
                    schema: record_of_illness_schemas_1.RecordOfIllnessSchema,
                },
            ]),
        ],
        controllers: [record_of_illness_controller_1.RecordOfIllnessController],
        providers: [record_of_illness_service_1.RecordOfIllnessService],
    })
], RecordOfIllnessModule);
//# sourceMappingURL=record_of_illness.module.js.map