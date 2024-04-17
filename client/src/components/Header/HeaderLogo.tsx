import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/logos/SiteName.svg';

const HeaderLogo = () => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate('/home');
  };
  return (
    <div className='flex items-center select-none ' onClick={handleOnclick}>
      {/* <div className='flex items-center w-8 mr-1 md:w-10'>
        <img src={logo} alt='logo' className='' />
      </div> */}
      {/* <img src={logo} alt='' className='w-20' /> */}
      <div className='text-2xl tracking-wider md:text-3xl text-primary font-bold'>
        CozyNest
      </div>
    </div>
  );
};

export default HeaderLogo;
