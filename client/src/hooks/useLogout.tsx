// authUtils.js
import { useResetRecoilState } from 'recoil';
import { authState } from '../store/auth';

export const useLogout = () => {
  const resetAuthState = useResetRecoilState(authState);

  const logout = () => {
    resetAuthState();
    localStorage.removeItem('user');
  };

  return logout;
};
