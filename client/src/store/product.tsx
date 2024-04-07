import { atom } from 'recoil';

const productState = atom({
  key: 'productState',
  default: null,
});

export { productState };
