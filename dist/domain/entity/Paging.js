"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paging = /** @class */ (function () {
    function Paging(startCtn, perPage) {
        if (startCtn === void 0) { startCtn = 1; }
        if (perPage === void 0) { perPage = 10; }
        this.startCtn = startCtn;
        this.perPage = perPage;
    }
    return Paging;
}());
exports.default = Paging;
