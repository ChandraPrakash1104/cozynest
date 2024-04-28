import { atom } from 'recoil';
import { wishlist } from '../typings/wishlistTypes';

export const wishlistStore = atom<wishlist[]>({
  key: 'wishlistStore',
  default: [],
});
