import CartProductModel from '../models/model.cart-product';
import ErrorResponse from '../helpers/helper.error';
import SuccessResponse from '../helpers/helper.success';
import { CartProduct } from '@prisma/client';

const cartProduct = new CartProductModel();

class CartProductController {
  static async getAllCartProduct(req: any, res: any) {
    try {
      const result = await cartProduct.getAll();
      return SuccessResponse.DataFound(req, res, 'CartProduct found', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, (error as Error).message);
    }
  }

  static async getCartProductById(req: { params: { cartProductId: string } }, res: any) {
    try {
      const cartProductId = req.params.cartProductId;
      const result = await cartProduct.getById(cartProductId);
      return SuccessResponse.DataFound(req, res, 'A CartProduct found', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, (error as Error).message);
    }
  }

  static async getCartProductByAccountId(req: { params: { accountId: string } }, res: any) {
    try {
      const accountId = req.params.accountId;
      const result = await cartProduct.getByAccountId(accountId);
      return SuccessResponse.DataFound(req, res, 'A CartProduct found', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, (error as Error).message);
    }
  }

  static async createCartProduct(
    req: {
      body: CartProduct;
    },
    res: any
  ) {
    try {
      const data = req.body;
      const result = await cartProduct.create(data);
      return SuccessResponse.DataFound(req, res, 'New CartProduct Created', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, (error as Error).message);
    }
  }

  static async updateCartProduct(
    req: { params: { cartProductId: string }; body: CartProduct },
    res: any
  ) {
    try {
      const cartProductId = req.params.cartProductId;
      const data = req.body;
      const result = await cartProduct.update(cartProductId, data);
      return SuccessResponse.DataFound(req, res, 'Existing CartProduct Updated', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, (error as Error).message);
    }
  }

  static async deleteCartProduct(req: { params: { cartProductId: string } }, res: any) {
    try {
      const cartProductId = req.params.cartProductId;
      const result = await cartProduct.delete(cartProductId);
      return SuccessResponse.DataFound(req, res, 'CartProduct Deleted', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, (error as Error).message);
    }
  }
}

export default CartProductController;
