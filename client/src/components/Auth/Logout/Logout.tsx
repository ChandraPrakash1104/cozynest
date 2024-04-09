import { useLogout } from '../../../hooks/useLogout';

const Logout = ({ handleOnClick }: { handleOnClick?: () => void }) => {
  const logout = useLogout();
  return (
    <div
      className='font-medium hover:scale-105 transition-all cursor-pointer'
      onClick={() => {
        logout();
        handleOnClick && handleOnClick();
      }}
    >
      Logout
    </div>
  );
};

export default Logout;
