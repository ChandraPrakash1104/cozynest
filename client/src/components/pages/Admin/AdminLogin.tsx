import { useEffect, useState } from 'react';
import LoginInputs from './LoginInputs';
import Quote from '../Quote';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../common/Buttons/PrimaryButton';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authState } from '../../../../store/auth';
import AuthHeader from '../auth/AuthHeader';
import AuthContainer from '../auth/AuthContainer';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useRecoilState(authState);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth.isAuthenticated) {
      navigate('/home');
    }
  }, [isAuth]);

  const submitHandler = async () => {
    const formdata = { password, email };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        formdata
      );
      const parsedData = await response.data;
      const userDetails = JSON.stringify(parsedData.userDetails);
      localStorage.setItem('user', userDetails);
      console.log(userDetails);
      setPassword('');
      setEmail('');
      setIsAuth({ isAuthenticated: true, user: userDetails });
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='lg:grid lg:grid-cols-2 h-screen '>
      <AuthContainer>
        <div className='space-y-8'>
          <AuthHeader
            head='Welcome Back'
            subHead='No account? '
            linkLabel='Signup'
            linkTo='/signup'
          />
          <LoginInputs
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
          <PrimaryButton
            label='Login'
            size='medium'
            styles='w-full rounded font-semibold'
            handleClick={submitHandler}
          />
        </div>
      </AuthContainer>
      <div className='hidden lg:block '>
        <Quote />
      </div>
    </div>
  );
};

export default AdminLogin;
