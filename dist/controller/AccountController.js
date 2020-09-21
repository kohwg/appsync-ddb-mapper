"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LectureService_1 = __importDefault(require("../application/LectureService"));
var AccountController = /** @class */ (function () {
    function AccountController() {
        this.accountService = new LectureService_1.default();
    }
    AccountController.prototype.createAccount = function (event) {
        var path = event.path;
        var result = this.accountService.createAccount(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        };
    };
    AccountController.prototype.listAccount = function (event) {
        var path = event.path;
        var result = this.lectureService.listAccount(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        };
    };
    return AccountController;
}());
exports.default = AccountController;
