"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// repository말고 다른 이름이 뭐가 있을까?
// 카드를 추가하는 API를 호출할껀데...... CARTManager?
var CartDDBMockManager = /** @class */ (function () {
    function CartDDBMockManager() {
    }
    CartDDBMockManager.prototype.addCart = function (lecture) {
        // CALL addCart API 
        return true;
    };
    return CartDDBMockManager;
}());
exports.default = CartDDBMockManager;
