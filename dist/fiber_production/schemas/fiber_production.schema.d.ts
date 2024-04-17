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
import { HydratedDocument } from "mongoose";
export type FiberProductionDocument = HydratedDocument<FiberProduction>;
export declare class FiberProduction {
    meat_yield: number;
    shearing_schedule: string;
    fiber_quality: string;
    animal_id: number;
}
export declare const FiberProductionSchema: import("mongoose").Schema<FiberProduction, import("mongoose").Model<FiberProduction, any, any, any, import("mongoose").Document<unknown, any, FiberProduction> & FiberProduction & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FiberProduction, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FiberProduction>> & import("mongoose").FlatRecord<FiberProduction> & {
    _id: import("mongoose").Types.ObjectId;
}>;
