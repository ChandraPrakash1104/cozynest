import { Response } from 'express';
import { CustomeRequests } from '../../types/request';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllItemsFromCart = async (
  req: CustomeRequests,
  res: Response
) => {
  try {
    const cartItems = await prisma.cart.findMany();
    res.status(200).json({ cartItems });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while retrieving cart items.' });
  }
};

export const getCartItemById = async (req: CustomeRequests, res: Response) => {
  const { cartId } = req.params;

  try {
    const cartItem = await prisma.cart.findUnique({
      where: {
        id: cartId,
      },
    });

    if (!cartItem) {
      res.status(404).json({ error: 'Cart item not found.' });
      return;
    }

    res.status(200).json(cartItem);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while retrieving the cart item.' });
  }
};
