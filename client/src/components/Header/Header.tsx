import HeaderItems from './HeaderItems';
import HeaderLinks from './HeaderLinks';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  return (
    <div className='sticky z-10 bg-white top-0 grid grid-cols-2 lg:grid-cols-5 px-4 py-2 md:py-3 md:px-12 xl:grid-cols-3'>
      <HeaderLogo />
      <div className='hidden lg:block lg:col-span-2 xl:col-span-1'>
        <HeaderLinks />
      </div>
      <HeaderItems />
    </div>
  );
};

export default Header;
