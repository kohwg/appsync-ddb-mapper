"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lecture_1 = __importDefault(require("../domain/Lecture"));
var LectureMockRepository_1 = __importDefault(require("../infra/LectureMockRepository"));
var CartDDBMockManager_1 = __importDefault(require("../infra/CartDDBMockManager"));
var LectureService = /** @class */ (function () {
    function LectureService() {
        this.lectureRepository = new LectureMockRepository_1.default();
        this.cartManager = new CartDDBMockManager_1.default();
    }
    LectureService.prototype.createLecture = function (path) {
        var lecture = this.lectureRepository.save(new Lecture_1.default("001", "Yoga", "KIM JONG IL"));
        return lecture.getLecture;
    };
    LectureService.prototype.listLecture = function (path) {
        var lectureList = this.lectureRepository.findAll();
        var lectureString = "";
        lectureList.forEach(function (lecture) {
            lectureString += lecture.getLecture + " ";
            console.log(lectureString);
        });
        return lectureString;
    };
    LectureService.prototype.getLectureDetail = function (id) {
        var lecture = this.lectureRepository.getDetail(id);
        return lecture.getLecture;
    };
    LectureService.prototype.addLectureToCart = function (id) {
        var result = this.cartManager.addCart(new Lecture_1.default("XXX", "Yoga", "ADD CART TEST"));
        return true;
    };
    return LectureService;
}());
exports.default = LectureService;
