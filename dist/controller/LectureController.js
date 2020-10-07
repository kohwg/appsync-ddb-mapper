"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LectureService_1 = __importDefault(require("../application/LectureService"));
var Paging_1 = __importDefault(require("../domain/entity/Paging"));
var LectureController = /** @class */ (function () {
    function LectureController() {
        this.lectureService = new LectureService_1.default();
    }
    // 키워드를 통해 클래스 검색 
    //http://127.0.0.1:3000/lectures?keyword=%20&startCtn=2&perPage=2
    LectureController.prototype.keywordSearch = function (event) {
        //검색 keyword
        var keyword = JSON.parse(JSON.stringify(event.queryStringParameters)).keyword;
        //페이징 parameter
        var paramPaging = JSON.parse(JSON.stringify(event.queryStringParameters));
        var paging = new Paging_1.default(paramPaging.startCtn, paramPaging.perPage); // domain 생성자에서 default값 setting
        var startCtn = paging.startCtn;
        var perPage = paging.perPage;
        var result = this.lectureService.keywordSearch(keyword, startCtn, perPage);
        return {
            'statusCode': 200,
            'headers': { 'Access-Control-Allow-Origin': '*' },
            'body': JSON.stringify({
                message: result
            })
        };
    };
    // 지점명을 검색하여 클래스를 검색 
    //http://127.0.0.1:3000/lectureCenterNm?keyword=%20&startCtn=2&perPage=2
    LectureController.prototype.keywordSearchByLectureCenterNm = function (event) {
        //검색 keyword
        var keyword = JSON.parse(JSON.stringify(event.queryStringParameters)).keyword;
        //페이징 parameter
        var paramPaging = JSON.parse(JSON.stringify(event.queryStringParameters));
        var paging = new Paging_1.default(paramPaging.startCtn, paramPaging.perPage);
        var startCtn = paging.startCtn;
        var perPage = paging.perPage;
        var result = this.lectureService.keywordSearchByLectureCenterNm(keyword, startCtn, perPage);
        return {
            'statusCode': 200,
            'headers': { 'Access-Control-Allow-Origin': '*' },
            'body': JSON.stringify({
                message: result
            })
        };
    };
    // 
    //http://127.0.0.1:3000/lectureCurriculum?keyword=%20
    LectureController.prototype.keywordSearchByLectureCurriculum = function (event) {
        var keyword = JSON.parse(JSON.stringify(event.queryStringParameters)).keyword;
        var result = this.lectureService.keywordSearchByLectureCurriculum(keyword);
        return {
            'statusCode': 200,
            'headers': { 'Access-Control-Allow-Origin': '*' },
            'body': JSON.stringify({
                message: result
            })
        };
    };
    // 새로운 강좌정보를 등록 
    LectureController.prototype.createLecture = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var lectureInfo, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("event : ", event);
                        lectureInfo = event.arguments.input;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.lectureService.createLecture(lectureInfo)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, {
                                'data': result,
                                'message': "success"
                            }];
                    case 3:
                        err_1 = _a.sent();
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * LectureId로 클래스 상세 정보를 가져온다.
     * http://127.0.0.1:3000/detailLecture?lectureId=136418
     * @param lectureId
     */
    LectureController.prototype.getLectureDetailByLectureId = function (lectureId) {
        var result = this.lectureService.getLectureDetailByLectureId(lectureId);
        return {
            'statusCode': 200,
            'headers': { 'Access-Control-Allow-Origin': '*' },
            'body': JSON.stringify({
                message: result
            })
        };
    };
    /**
     * LectureId로 클래스의 리뷰 정보를 가져온다.
     * http://127.0.0.1:3000/review?lectureId=136418
     * @param lectureId
     */
    LectureController.prototype.getReviewByLectureId = function (lectureId) {
        var result = this.lectureService.getReviewByLectureId(lectureId);
        return {
            'statusCode': 200,
            'headers': { 'Access-Control-Allow-Origin': '*' },
            'body': JSON.stringify({
                message: result
            })
        };
    };
    /**
     * tutorId로 강사의 모든 리뷰 정보를 가져온다.
     * http://127.0.0.1:3000/tutorsReview?tutorId=1
     * @param tutorId
     */
    LectureController.prototype.getReviewByTutorId = function (tutorId) {
        var result = this.lectureService.getReviewByTutorId(tutorId);
        return {
            'statusCode': 200,
            'headers': { 'Access-Control-Allow-Origin': '*' },
            'body': JSON.stringify({
                message: result
            })
        };
    };
    return LectureController;
}());
exports.default = LectureController;
