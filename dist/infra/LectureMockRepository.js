"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lecture_1 = __importDefault(require("../domain/Lecture"));
var LectureMockRepository = /** @class */ (function () {
    function LectureMockRepository() {
    }
    LectureMockRepository.prototype.findAll = function () {
        return [new Lecture_1.default("000", "Yoga", "KANG SUNG IL"), new Lecture_1.default("001", "GYMClass", "KIM JONG IL"), new Lecture_1.default("002", "Tennis", "LEE HEE JONG")];
    };
    LectureMockRepository.prototype.save = function (lecture) {
        return lecture;
    };
    return LectureMockRepository;
}());
exports.default = LectureMockRepository;
