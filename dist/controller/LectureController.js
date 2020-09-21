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
    return LectureController;
}());
exports.default = LectureController;
