import { useEffect, useState } from 'react';
import AuthHeader from '../AuthHeader';
import AuthContainer from '../AuthContainer';
import LoginInputs from './LoginInputs';
import Quote from '../Quote';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../common/Buttons/PrimaryButton';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authState } from '../../../../store/auth';
import { loadingState } from '../../../../store/loading';
import { BACKEND_URL } from '../../../../utils/api';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useRecoilState(authState);
  const [loading, setLoading] = useRecoilState(loadingState);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth.isAuthenticated) {
      navigate('/home');
    }
  }, [isAuth]);

  const submitHandler = async () => {
    const formdata = { password, email };
    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, formdata);
      const parsedData = await response.data;
      const userDetails = JSON.stringify(parsedData.userDetails);
      localStorage.setItem('user', userDetails);
      setPassword('');
      setEmail('');
      setIsAuth({ isAuthenticated: true, user: parsedData.userDetails });
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className='lg:grid lg:grid-cols-2 h-screen '>
      <AuthContainer>
        <div className='space-y-8 w-4/5 sm:w-1/2'>
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
            loading={loading}
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

export default Signin;
