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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/admin.schemas").Admin> & import("./schemas/admin.schemas").Admin & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/admin.schemas").Admin> & import("./schemas/admin.schemas").Admin & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/admin.schemas").Admin> & import("./schemas/admin.schemas").Admin & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/admin.schemas").Admin, "find">;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/admin.schemas").Admin> & import("./schemas/admin.schemas").Admin & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./schemas/admin.schemas").Admin> & import("./schemas/admin.schemas").Admin & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/admin.schemas").Admin, "findOne">;
    update(id: string, updateAdminDto: UpdateAdminDto): string;
    remove(id: string): string;
}
