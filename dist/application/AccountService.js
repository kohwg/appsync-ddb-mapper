"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lecture_1 = __importDefault(require("../domain/Lecture"));
var AccountMockRepository_1 = __importDefault(require("../infra/AccountMockRepository"));
var AccountService = /** @class */ (function () {
    function AccountService() {
        this.lectureRepository = new AccountMockRepository_1.default();
    }
    AccountService.prototype.createAccount = function (path) {
        var lecture = this.lectureRepository.save(new Lecture_1.default("001", "KIM JONG IL"));
        return lecture.getLecture;
    };
    AccountService.prototype.listAccount = function (path) {
        var accountList = this.lectureRepository.findAll();
        var accountString = "";
        accountList.forEach(function (lecture) {
            accountString += lecture.getLecture + " ";
            console.log(accountString);
        });
        return accountString;
    };
    return AccountService;
}());
exports.default = AccountService;
