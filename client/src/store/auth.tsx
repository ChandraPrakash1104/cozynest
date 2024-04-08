// authState.js
import { atom } from 'recoil';

type AuthState = {
  isAuthenticated: boolean;
  user: {
    token: string;
    username: string;
    id: string;
    email: string;
  } | null;
};

const defaultAuthState: AuthState = {
  isAuthenticated: localStorage.getItem('user') ? true : false,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null,
};

export const authState = atom<AuthState>({
  key: 'authState',
  default: defaultAuthState,
});
