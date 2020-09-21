"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lecture = /** @class */ (function () {
    function Lecture(id, classname, name) {
        this.id = id;
        this.classname = classname;
        this.name = name;
    }
    Object.defineProperty(Lecture.prototype, "getLecture", {
        get: function () {
            return this.id + ":" + this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Lecture;
}());
exports.default = Lecture;
