// authState.js
import { atom } from 'recoil';

type AuthState = {
  isAuthenticated: boolean;
  user: string | null;
};

const defaultAuthState: AuthState = {
  isAuthenticated: localStorage.getItem('user') ? true : false,
  user: localStorage.getItem('user'),
};

export const authState = atom<AuthState>({
  key: 'authState',
  default: defaultAuthState,
});
