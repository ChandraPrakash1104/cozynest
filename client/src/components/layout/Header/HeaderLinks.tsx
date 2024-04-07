import { useRecoilValue } from 'recoil';
import CloseButton from '../../common/Buttons/CloseButton';
import LinkItem from './LinkItem';
import { authState } from '../../../store/auth';
import Logout from '../../Auth/Logout/Logout';

const HeaderLinks = ({ handleOnClick }: { handleOnClick?: () => void }) => {
  const isAuth = useRecoilValue(authState);
  console.log(isAuth);
  return (
    <>
      {handleOnClick && <CloseButton onClick={handleOnClick} />}
      <div className='flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:justify-center lg:space-x-3 '>
        <LinkItem
          destination='/home'
          label='Home'
          handleOnClick={handleOnClick}
        />
        <LinkItem
          destination='/shop'
          label='Shop'
          handleOnClick={handleOnClick}
        />
        <LinkItem
          destination='/about'
          label='About'
          handleOnClick={handleOnClick}
        />
        <LinkItem
          destination='/contact'
          label='Contact'
          handleOnClick={handleOnClick}
        />
        <div className='absolute bottom-20 lg:hidden'>
          {!isAuth.isAuthenticated && (
            <div className='flex flex-col space-y-6 '>
              <LinkItem
                destination='/login'
                label='Login'
                handleOnClick={handleOnClick}
              />
              <LinkItem
                destination='/signup'
                label='Signup'
                handleOnClick={handleOnClick}
              />
            </div>
          )}
          {isAuth.isAuthenticated && <Logout handleOnClick={handleOnClick} />}
        </div>
      </div>
    </>
  );
};

export default HeaderLinks;
