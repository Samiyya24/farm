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
import { RecordOfIllnessService } from './record_of_illness.service';
import { CreateRecordOfIllnessDto } from './dto/create-record_of_illness.dto';
import { UpdateRecordOfIllnessDto } from './dto/update-record_of_illness.dto';
export declare class RecordOfIllnessController {
    private readonly recordOfIllnessService;
    constructor(recordOfIllnessService: RecordOfIllnessService);
    create(createRecordOfIllnessDto: CreateRecordOfIllnessDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness> & import("./schemas/record_of_illness.schemas").RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness> & import("./schemas/record_of_illness.schemas").RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness> & import("./schemas/record_of_illness.schemas").RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness, "find">;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness> & import("./schemas/record_of_illness.schemas").RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness> & import("./schemas/record_of_illness.schemas").RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness, "findOne">;
    update(id: string, updateRecordOfIllnessDto: UpdateRecordOfIllnessDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness> & import("./schemas/record_of_illness.schemas").RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness, "updateOne">;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness> & import("./schemas/record_of_illness.schemas").RecordOfIllness & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/record_of_illness.schemas").RecordOfIllness, "deleteOne">;
}
