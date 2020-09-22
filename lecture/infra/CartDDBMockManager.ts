import Lecture from "../domain/Lecture";
import CartManager from "../domain/CartManager";


class CartDDBMockManager implements CartManager {

    addCart(lecture: Lecture): boolean {
        // CALL addCart API 
        return true;
    }
}

export default CartDDBMockManager;