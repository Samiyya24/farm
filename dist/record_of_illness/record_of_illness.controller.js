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
exports.RecordOfIllnessController = void 0;
const common_1 = require("@nestjs/common");
const record_of_illness_service_1 = require("./record_of_illness.service");
const create_record_of_illness_dto_1 = require("./dto/create-record_of_illness.dto");
const update_record_of_illness_dto_1 = require("./dto/update-record_of_illness.dto");
let RecordOfIllnessController = class RecordOfIllnessController {
    constructor(recordOfIllnessService) {
        this.recordOfIllnessService = recordOfIllnessService;
    }
    create(createRecordOfIllnessDto) {
        return this.recordOfIllnessService.create(createRecordOfIllnessDto);
    }
    findAll() {
        return this.recordOfIllnessService.findAll();
    }
    findOne(id) {
        return this.recordOfIllnessService.findOne(+id);
    }
    update(id, updateRecordOfIllnessDto) {
        return this.recordOfIllnessService.update(+id, updateRecordOfIllnessDto);
    }
    remove(id) {
        return this.recordOfIllnessService.remove(+id);
    }
};
exports.RecordOfIllnessController = RecordOfIllnessController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_record_of_illness_dto_1.CreateRecordOfIllnessDto]),
    __metadata("design:returntype", void 0)
], RecordOfIllnessController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecordOfIllnessController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordOfIllnessController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_record_of_illness_dto_1.UpdateRecordOfIllnessDto]),
    __metadata("design:returntype", void 0)
], RecordOfIllnessController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordOfIllnessController.prototype, "remove", null);
exports.RecordOfIllnessController = RecordOfIllnessController = __decorate([
    (0, common_1.Controller)('record-of-illness'),
    __metadata("design:paramtypes", [record_of_illness_service_1.RecordOfIllnessService])
], RecordOfIllnessController);
//# sourceMappingURL=record_of_illness.controller.js.map