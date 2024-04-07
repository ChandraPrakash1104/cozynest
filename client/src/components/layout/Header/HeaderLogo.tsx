import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';

const HeaderLogo = () => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate('/home');
  };
  return (
    <div className='flex items-center select-none ' onClick={handleOnclick}>
      <div className='flex items-center w-8 mr-1 md:w-10'>
        <img src={logo} alt='logo' className='' />
      </div>
      <div className='text-xl font-semibold tracking-wider md:text-2xl'>
        <h1>Furniro</h1>
      </div>
    </div>
  );
};

export default HeaderLogo;
