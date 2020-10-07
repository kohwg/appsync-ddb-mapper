"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchESEngine = /** @class */ (function () {
    function SearchESEngine() {
    }
    // ES를 통해 query하는 부분은 appsync<->ES에 바로 붙일수 있는 방안을 고려중, 결정 이후에 implementation 예정
    // ES를 lambda를 통해 query하게 된다면, searchKeyword로 필요한 모든 컬럼을 검색하여 결과를 리턴하게 해야함
    // keywordSearchByLectureCenterNm, keywordSearchByLectureCurriculum는 불필요해질 것으로 보임
    SearchESEngine.prototype.searchKeyword = function (keyword) {
        //TODO ES Implementation
        throw new Error('Method not implemented.');
    };
    SearchESEngine.prototype.keywordSearchByLectureCenterNm = function (keyword, startCtn, perPage) {
        //TODO ES Implementation
        throw new Error('Method not implemented.');
    };
    SearchESEngine.prototype.keywordSearchByLectureCurriculum = function (keyword) {
        //TODO ES Implementation
        throw new Error('Method not implemented.');
    };
    return SearchESEngine;
}());
exports.default = SearchESEngine;
