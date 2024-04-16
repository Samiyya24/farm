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
exports.WorkerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const worker_schemas_1 = require("./schemas/worker.schemas");
const mongoose_2 = require("mongoose");
const speciality_schema_1 = require("../speciality/schemas/speciality.schema");
let WorkerService = class WorkerService {
    constructor(workerModel, specialityModel) {
        this.workerModel = workerModel;
        this.specialityModel = specialityModel;
    }
    async create(createWorkerDto) {
        const { speciality_id } = createWorkerDto;
        const spec = await this.specialityModel.findById(speciality_id);
        if (!spec) {
            throw new common_1.BadRequestException('speciality not found');
        }
        const worker = await this.workerModel.create(createWorkerDto);
        return worker;
    }
    findAll() {
        return this.workerModel.find().populate('speciality_id');
    }
    findOne(id) {
        return `This action returns a #${id} worker`;
    }
    update(id, updateWorkerDto) {
        return `This action updates a #${id} worker`;
    }
    remove(id) {
        return `This action removes a #${id} worker`;
    }
};
exports.WorkerService = WorkerService;
exports.WorkerService = WorkerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(worker_schemas_1.Worker.name)),
    __param(1, (0, mongoose_1.InjectModel)(speciality_schema_1.Speciality.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], WorkerService);
//# sourceMappingURL=worker.service.js.map