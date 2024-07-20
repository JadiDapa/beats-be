import { PrismaClient, CartProduct } from '@prisma/client';

const prisma = new PrismaClient();

class CartProductModel {
  async getAll() {
    return await prisma.cartProduct.findMany({
      include: {
        Product: true,
        Account: true
      }
    });
  }

  async getById(id: string) {
    return await prisma.cartProduct.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        Product: true
      }
    });
  }

  async getByAccountId(accountId: string) {
    return await prisma.cartProduct.findMany({
      where: {
        accountId: parseInt(accountId)
      },
      include: {
        Product: true
      }
    });
  }

  async create(data: CartProduct) {
    return await prisma.cartProduct.create({
      data: data
    });
  }

  async update(id: string, data: CartProduct) {
    return await prisma.cartProduct.update({
      where: {
        id: parseInt(id)
      },
      data: data
    });
  }

  async delete(id: string) {
    return await prisma.cartProduct.delete({
      where: {
        id: parseInt(id)
      }
    });
  }
}

export default CartProductModel;
