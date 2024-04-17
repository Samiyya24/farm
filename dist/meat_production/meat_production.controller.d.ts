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
import { MeatProductionService } from './meat_production.service';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
export declare class MeatProductionController {
    private readonly meatProductionService;
    constructor(meatProductionService: MeatProductionService);
    create(createMeatProductionDto: CreateMeatProductionDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/meat_production.schema").MeatProduction> & import("./schemas/meat_production.schema").MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/meat_production.schema").MeatProduction> & import("./schemas/meat_production.schema").MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/meat_production.schema").MeatProduction> & import("./schemas/meat_production.schema").MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/meat_production.schema").MeatProduction, "find">;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/meat_production.schema").MeatProduction> & import("./schemas/meat_production.schema").MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./schemas/meat_production.schema").MeatProduction> & import("./schemas/meat_production.schema").MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/meat_production.schema").MeatProduction, "findOne">;
    update(id: string, updateMeatProductionDto: UpdateMeatProductionDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/meat_production.schema").MeatProduction> & import("./schemas/meat_production.schema").MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./schemas/meat_production.schema").MeatProduction> & import("./schemas/meat_production.schema").MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/meat_production.schema").MeatProduction, "findOneAndUpdate">;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./schemas/meat_production.schema").MeatProduction> & import("./schemas/meat_production.schema").MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/meat_production.schema").MeatProduction, "deleteOne">;
}
