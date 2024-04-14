import { Product } from './productTypes';

export interface CartItem {
  id: string;
  quantity: number;
  userId?: string;
  product: Product;
}
