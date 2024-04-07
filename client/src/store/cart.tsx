import { atom } from 'recoil';
import { CartItem } from '../typings/cartTypes';

export const cartState = atom<CartItem[]>({
  key: 'cartState',
  default: [],
});
