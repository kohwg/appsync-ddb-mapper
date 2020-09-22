"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LectureService_1 = __importDefault(require("../application/LectureService"));
var LectureController = /** @class */ (function () {
    function LectureController() {
        this.lectureService = new LectureService_1.default();
    }
    LectureController.prototype.createLecture = function (event) {
        var path = event.path;
        var result = this.lectureService.createLecture(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        };
    };
    LectureController.prototype.listLecture = function (event) {
        var path = event.path;
        var result = this.lectureService.listLecture(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        };
    };
    LectureController.prototype.getLectureDetail = function (event) {
        //        수신한 event에서 lecture id값을 받아, detail정보를 출력하도록 하려면 아래처럼..
        //        let Id:string = event.body['id'];
        //        let result:string=this.lectureService.getLectureDetail(id);
        var path = event.path;
        var result = this.lectureService.getLectureDetail(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        };
    };
    LectureController.prototype.addLectureToCart = function (event) {
        var path = event.path;
        var result = this.lectureService.addLectureToCart(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        };
    };
    return LectureController;
}());
exports.default = LectureController;
