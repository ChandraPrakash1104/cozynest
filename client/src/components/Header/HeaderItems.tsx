import userIcon from '../../assets/logos/userIcon.svg';
import cartIcon from '../../assets/logos/cartIcon.svg';
import searchIcon from '../../assets/logos/searchIcon.svg';
import wishlistIcon from '../../assets/logos/wishlistIcon.svg';
import burgerIcon from '../../assets/logos/burgerIcon.svg';
import { useState } from 'react';
import HeaderLinks from './HeaderLinks';
import Modal from '../common/Modal/Modal';
import SearchBar from '../common/SearchBar/SearchBar';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../../store/auth';
import Logout from '../Auth/Logout/Logout';
import CartItemsCountsBadge from '../Cart/CartItemsCountsBadge';

const HeaderItems = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isAuth = useRecoilValue(authState).isAuthenticated;

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSeachClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <ul className='flex justify-around items-center cursor-pointer select-none  md:space-x-4 lg:justify-center lg:col-span-2 xl:col-span-1'>
      <li className='hover-click-effect rounded-full p-2 lg:px-4'>
        <div className='flex'>
          <img src={userIcon} alt='profile' className='w-5' />
          {!isAuth && (
            <NavLink to='/login'>
              <div className='text-sm hidden text-semibold lg:block text-balance'>
                Login or signup
              </div>
            </NavLink>
          )}
          {isAuth && (
            <div className='text-sm hidden lg:block text-balance'>
              <Logout />
            </div>
          )}
        </div>
      </li>

      {!isSearchOpen && (
        <li
          className='hover-click-effect rounded-full p-2 lg:p-3'
          onClick={handleSeachClick}
        >
          <img src={searchIcon} alt='Search' className='w-5' />
        </li>
      )}
      {isSearchOpen && (
        <Modal onClick={handleSeachClick}>
          <div className='fixed w-full flex justify-center'>
            <div className='w-[90%] md:w-[50%] lg:w-[30%] mx-auto my-4'>
              <SearchBar onChange={() => {}} placeholder='Search' />
            </div>
          </div>
        </Modal>
      )}
      <Link
        className='hover-click-effect rounded-full p-2 lg:p-3'
        to={'wishlist'}
      >
        <img src={wishlistIcon} alt='wishlist' className='w-5' />
      </Link>
      <Link
        className='hover-click-effect rounded-full p-2 lg:p-3 relative'
        to={'/cart'}
      >
        <div className='absolute top-0 right-0 xl:right-1 xl:top-1'>
          <CartItemsCountsBadge />
        </div>
        <img src={cartIcon} alt='cart' className='w-5' />
      </Link>
      <li
        onClick={handleMenuClick}
        className='lg:hidden hover-click-effect rounded-full p-2 lg:p-3  '
      >
        <img src={burgerIcon} alt='menu' className='w-5' />
      </li>

      {isMenuOpen && (
        <Modal onClick={handleMenuClick}>
          <div className='bg-white w-48 fixed top-0 right-0 pl-8 py-12 h-full lg:hidden'>
            <HeaderLinks handleOnClick={handleMenuClick} />
          </div>
        </Modal>
      )}
    </ul>
  );
};

export default HeaderItems;
