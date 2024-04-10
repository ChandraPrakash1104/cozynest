import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const bulkFilter = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.status(201).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'something went wrong' });
  }
};

const idFilter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });
    const formatedProduct = {
      id: product?.id,
      productName: product?.product_name,
      description: product?.description,
      imageUrl: product?.image_url,
      price: product?.price,
      stockQuantity: product?.stock_quantity,
      category: product?.category,
    };
    res.status(200).json(formatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'something went wrong' });
  }
};

const categoryFilter = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const products = await prisma.product.findMany({
      where: {
        category: category,
      },
    });
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'something went wrong' });
  }
};
export const productFilter = {
  categoryFilter,
  bulkFilter,
  idFilter,
};
