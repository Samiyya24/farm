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
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { MilkProduction } from './schemas/milk_production.schema';
import { Model } from 'mongoose';
export declare class MilkProductionService {
    private MilkProductionModel;
    constructor(MilkProductionModel: Model<MilkProduction>);
    create(createMilkProductionDto: CreateMilkProductionDto): Promise<import("mongoose").Document<unknown, {}, MilkProduction> & MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, MilkProduction> & MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, MilkProduction> & MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MilkProduction, "find">;
    findOne(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, MilkProduction> & MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, MilkProduction> & MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MilkProduction, "findOne">;
    update(id: number, updateMilkProductionDto: UpdateMilkProductionDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, MilkProduction> & MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, MilkProduction> & MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MilkProduction, "findOneAndUpdate">;
    remove(id: number): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, MilkProduction> & MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MilkProduction, "deleteOne">;
}
