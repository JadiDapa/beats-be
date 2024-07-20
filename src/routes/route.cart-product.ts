import { Router } from 'express';
import CartProductController from '../controllers/controller.cart-product';
import { authCheck } from '../helpers/helper.authorization';

const CartProductRouter = Router();

CartProductRouter.get('/cart-products', authCheck, CartProductController.getAllCartProduct);
CartProductRouter.get(
  '/cart-products/:cartProductId',
  authCheck,
  CartProductController.getCartProductById
);
CartProductRouter.get(
  '/cart-products/account/:accountId',
  authCheck,
  CartProductController.getCartProductByAccountId
);
CartProductRouter.post('/cart-products/create', authCheck, CartProductController.createCartProduct);
CartProductRouter.put(
  '/cart-products/:cartProductId',
  authCheck,
  CartProductController.updateCartProduct
);
CartProductRouter.delete(
  '/cart-products/:cartProductId',
  authCheck,
  CartProductController.deleteCartProduct
);

export default CartProductRouter;
