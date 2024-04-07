import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: [],
});

export const modalOpenState = atom({
  key: 'modalOpenState',
  default: false,
});
