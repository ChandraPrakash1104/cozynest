import express, { Router } from 'express';
import controllers from '../controllers/cart/cartController';
const router: Router = express.Router();

router.post('/', controllers.addItemToCart);
router.get('/', controllers.getAllItemsFromCart);
router.get('/:cartId', controllers.getCartItemById);
router.put('/:cartId', controllers.updateCartItem);
router.delete('/:cartId', controllers.deleteCartItem);

export default router;
