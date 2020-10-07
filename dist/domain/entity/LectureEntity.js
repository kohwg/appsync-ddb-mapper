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
Object.defineProperty(exports, "__esModule", { value: true });
var dynamodb_data_mapper_annotations_1 = require("@aws/dynamodb-data-mapper-annotations");
var dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
// cloudformation template에서 생성되는 TABLE값을 ENV로 받아와 사용 
var tableName = String(process.env.SAMPLE_TABLE);
if (!process.env.SAMPLE_TABLE) {
    this.tableName = 'class-dev-LectureTable-MXV4LYH979IN';
    ;
}
var LectureCurriculum = /** @class */ (function () {
    function LectureCurriculum() {
    }
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureCurriculum.prototype, "title", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureCurriculum.prototype, "content", void 0);
    return LectureCurriculum;
}());
var LectureEntity = /** @class */ (function () {
    function LectureEntity() {
    }
    LectureEntity_1 = LectureEntity;
    /**
     *
     */
    LectureEntity.prototype.domainlogic = function () {
        this.attribute1 = "1";
        return this.attribute1;
    };
    Object.defineProperty(LectureEntity.prototype, "toJson", {
        get: function () {
            return JSON.stringify(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * https://github.com/awslabs/dynamodb-data-mapper-js/issues/136
     * @param partitionkey
     * @param sortkey
     * @param attribute1
     * @param attribute2
     */
    LectureEntity.createObject = function (request) {
        console.log("### object is : ", request);
        //TODO Validation Implementation
        //Example) 강좌제목에 비속어가 들어있다던지? 특정항목이 null이라던지?
        //만약 validation 과정이 길어지면 Domain layer에 Validator로 별도로 분리하는것을 고려할 것 
        return Object.assign(new LectureEntity_1, {
            // 실제로 클래스를 생성할때, 입력받아야 하는 값들을 추려야함 
            partitionkey: request.partitionkey,
            sortkey: request.sortkey,
            attribute1: request.attribute1,
            attribute2: request.attribute2,
            lectureId: request.lectureId,
            lectureNm: request.lectureNm,
            lectureStatusCd: request.lectureStatusCd,
            lectureStatusNm: request.lectureStatusNm,
            lectureLargeCtgCd: request.lectureLargeCtgCd,
            lectureLargeCtgNm: request.lectureLargeCtgNm,
            lectureSmallCtgCd: request.lectureSmallCtgCd,
            lectureSmallCtgNm: request.lectureSmallCtgNm,
            lectureStartYyyyMMdd: request.lectureStartYyyyMMdd,
            lectureEndYyyyMMdd: request.lectureEndYyyyMMdd,
            lectureStartHhMM: request.lectureStartHhMM,
            lectureEndHhMM: request.lectureEndHhMM,
            lectureDay: request.lectureDay,
            lectureCenterCd: request.lectureCenterCd,
            lectureCenterNm: request.lectureCenterNm,
            lectureBfSalePrice: request.lectureBfSalePrice,
            lectureAfSalePrice: request.lectureAfSalePrice,
            lectureCtn: request.lectureCtn,
            lectureCurriculum: request.lectureCurriculum,
            lectureOriginYn: request.lectureOriginYn,
            cartYn: request.cartYn,
            lectureImage: request.lectureImage,
            tutorId: request.tutorId
        });
    };
    var LectureEntity_1;
    __decorate([
        dynamodb_data_mapper_annotations_1.hashKey(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "partitionkey", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.rangeKey(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "sortkey", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "attribute1", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "attribute2", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureId", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureNm", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureStatusCd", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureStatusNm", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureLargeCtgCd", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureLargeCtgNm", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureSmallCtgCd", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureSmallCtgNm", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureStartYyyyMMdd", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureEndYyyyMMdd", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureStartHhMM", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureEndHhMM", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureDay", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureCenterCd", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureCenterNm", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureBfSalePrice", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureAfSalePrice", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", Number)
    ], LectureEntity.prototype, "lectureCtn", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute({ memberType: dynamodb_data_mapper_1.embed(LectureCurriculum) }),
        __metadata("design:type", Array)
    ], LectureEntity.prototype, "lectureCurriculum", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", Boolean)
    ], LectureEntity.prototype, "lectureOriginYn", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "cartYn", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "lectureImage", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], LectureEntity.prototype, "tutorId", void 0);
    LectureEntity = LectureEntity_1 = __decorate([
        dynamodb_data_mapper_annotations_1.table(tableName)
    ], LectureEntity);
    return LectureEntity;
}());
exports.default = LectureEntity;
