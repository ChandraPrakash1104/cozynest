import { atom } from 'recoil';
import { Product } from '../typings/productTypes';

export const wishlistStore = atom<Product[]>({
  key: 'wishlistStore',
  default: [],
});
