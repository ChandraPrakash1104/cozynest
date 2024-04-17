// authUtils.js
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { authState } from '../store/auth';

export const useLogout = () => {
  const resetAuthState = useResetRecoilState(authState);
  const setAuth = useSetRecoilState(authState);
  const logout = () => {
    resetAuthState();
    setAuth({
      isAuthenticated: false,
      user: {
        token: '',
        username: '',
        id: '',
        email: '',
      },
    });
    localStorage.removeItem('user');
  };

  return logout;
};
