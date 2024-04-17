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
import { CreateRecordOfIllnessDto } from './dto/create-record_of_illness.dto';
import { UpdateRecordOfIllnessDto } from './dto/update-record_of_illness.dto';
import { RecordOfIllness } from './schemas/record_of_illness.schemas';
import { Model } from 'mongoose';
export declare class RecordOfIllnessService {
    private recordofillnessModel;
    constructor(recordofillnessModel: Model<RecordOfIllness>);
    create(createRecordOfIllnessDto: CreateRecordOfIllnessDto): Promise<import("mongoose").Document<unknown, {}, RecordOfIllness> & RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, RecordOfIllness> & RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, RecordOfIllness> & RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, RecordOfIllness, "find">;
    findOne(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, RecordOfIllness> & RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, RecordOfIllness> & RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, RecordOfIllness, "findOne">;
    update(id: number, updateRecordOfIllnessDto: UpdateRecordOfIllnessDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, RecordOfIllness> & RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, RecordOfIllness, "updateOne">;
    remove(id: number): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, RecordOfIllness> & RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, RecordOfIllness, "deleteOne">;
}
