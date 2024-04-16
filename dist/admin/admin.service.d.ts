/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './schemas/admin.schemas';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class AdminService {
    private adminModel;
    private readonly jwtService;
    constructor(adminModel: Model<Admin>, jwtService: JwtService);
    getTokens(admin: AdminDocument): Promise<{
        accessToken: string;
        refresh_token: string;
    }>;
    create(createAdminDto: CreateAdminDto): Promise<import("mongoose").Document<unknown, {}, Admin> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Admin> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Admin> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Admin, "find">;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Admin> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Admin> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Admin, "findOne">;
    update(id: number, updateAdminDto: UpdateAdminDto): string;
    remove(id: number): string;
}
