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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const admin_schemas_1 = require("./schemas/admin.schemas");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AdminService = class AdminService {
    constructor(adminModel, jwtService) {
        this.adminModel = adminModel;
        this.jwtService = jwtService;
    }
    async getTokens(admin) {
        const payload = {
            id: admin._id,
            is_active: admin.is_active,
            is_creator: admin.is_creator,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            accessToken: accessToken,
            refresh_token: refreshToken,
        };
    }
    async create(createAdminDto) {
        const { password, confirm_password } = createAdminDto;
        if (password !== confirm_password) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const hashed_password = await bcrypt.hash(password, 7);
        const newAdmin = await this.adminModel.create({
            ...createAdminDto,
            hashed_password,
        });
        const tokens = await this.getTokens(newAdmin);
        const hashed_refresh_token = bcrypt.hash(tokens.refresh_token, 7);
        const updatedAdmin = await this.adminModel.findByIdAndUpdate(newAdmin._id, {
            hashed_refresh_token,
        }, {
            new: true,
        });
        return updatedAdmin;
    }
    findAll() {
        return this.adminModel.find();
    }
    findOne(id) {
        return this.adminModel.findById(id);
    }
    update(id, updateAdminDto) {
        return `This action updates a #${id} admin`;
    }
    remove(id) {
        return `This action removes a #${id} admin`;
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(admin_schemas_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map