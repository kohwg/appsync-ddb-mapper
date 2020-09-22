import Lecture from './Lecture';

interface CartManager {
    addCart(lecture: Lecture): boolean;
}

export default CartManager;