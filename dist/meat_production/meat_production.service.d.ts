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
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { MeatProduction } from './schemas/meat_production.schema';
import { Model } from 'mongoose';
export declare class MeatProductionService {
    private MeatProductionModel;
    constructor(MeatProductionModel: Model<MeatProduction>);
    create(createMeatProductionDto: CreateMeatProductionDto): Promise<import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MeatProduction, "find">;
    findOne(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MeatProduction, "findOne">;
    update(id: number, updateMeatProductionDto: UpdateMeatProductionDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MeatProduction, "findOneAndUpdate">;
    remove(id: number): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MeatProduction, "deleteOne">;
}
