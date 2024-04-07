import { Prouduct } from './productTypes';

export interface CartItem {
  id: number;
  quantity: number;
  userId: number;
  product: Prouduct;
}
