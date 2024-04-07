import { Dispatch, SetStateAction, useState } from 'react';
import InputWithLabel from '../../../InputFields/InputWithLabel';

const LoginInputs = ({
  email,
  setEmail,
  password,
  setPassword,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}) => {
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordIsValid = password.trim().length >= 6;

  const emailError =
    !emailIsValid && emailTouched ? 'Invalid email address' : '';
  const passwordError =
    !passwordIsValid && passwordTouched
      ? 'Password must be at least 6 characters'
      : '';

  return (
    <div className='space-y-6'>
      <InputWithLabel
        label='Email'
        placeholder='john@abc.com'
        type='email'
        value={email}
        setValue={setEmail}
        warning={emailError}
        setTouched={setEmailTouched}
      />
      <InputWithLabel
        label='Password'
        placeholder='Enter your password'
        type='password'
        value={password}
        setValue={setPassword}
        warning={passwordError}
        setTouched={setPasswordTouched}
      />
    </div>
  );
};

export default LoginInputs;
