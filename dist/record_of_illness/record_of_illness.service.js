"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordOfIllnessService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const record_of_illness_schemas_1 = require("./schemas/record_of_illness.schemas");
const mongoose_2 = require("mongoose");
let RecordOfIllnessService = class RecordOfIllnessService {
    constructor(recordofillnessModel) {
        this.recordofillnessModel = recordofillnessModel;
    }
    create(createRecordOfIllnessDto) {
        return this.recordofillnessModel.create(createRecordOfIllnessDto);
    }
    findAll() {
        return this.recordofillnessModel.find();
    }
    findOne(id) {
        return this.recordofillnessModel.findOne({ id });
    }
    update(id, updateRecordOfIllnessDto) {
        return this.recordofillnessModel.updateOne({ id }, updateRecordOfIllnessDto);
    }
    remove(id) {
        return this.recordofillnessModel.deleteOne({ id });
    }
};
exports.RecordOfIllnessService = RecordOfIllnessService;
exports.RecordOfIllnessService = RecordOfIllnessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(record_of_illness_schemas_1.RecordOfIllness.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RecordOfIllnessService);
//# sourceMappingURL=record_of_illness.service.js.map