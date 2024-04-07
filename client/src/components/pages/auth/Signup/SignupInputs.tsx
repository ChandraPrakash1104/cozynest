import { Dispatch, SetStateAction, useState } from 'react';
import InputWithLabel from '../../../InputFields/InputWithLabel';

const SignupInputs = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  firstname,
  setFirstname,
  lastname,
  setLastname,
}: {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  firstname: string;
  setFirstname: Dispatch<SetStateAction<string>>;
  lastname: string;
  setLastname: Dispatch<SetStateAction<string>>;
}) => {
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [firstnameTouched, setFirstnameTouched] = useState(false);
  const [lastnameTouched, setLastnameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const usernameIsValid = username.trim() !== '';
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const firstnameIsValid = firstname.trim() !== '';
  const lastnameIsValid = lastname.trim() !== '';
  const passwordIsValid = password.trim().length >= 6;

  const usernameError =
    !usernameIsValid && usernameTouched ? 'Username is required' : '';
  const emailError =
    !emailIsValid && emailTouched ? 'Invalid email address' : '';
  const firstnameError =
    !firstnameIsValid && firstnameTouched ? 'Firstname is required' : '';
  const lastnameError =
    !lastnameIsValid && lastnameTouched ? 'Lastname is required' : '';
  const passwordError =
    !passwordIsValid && passwordTouched
      ? 'Password must be at least 6 characters'
      : '';

  return (
    <div className='space-y-6'>
      <InputWithLabel
        label='Firstname'
        placeholder='Enter your firstname'
        type='text'
        value={firstname}
        setValue={setFirstname}
        warning={firstnameError}
        setTouched={setFirstnameTouched}
      />
      <InputWithLabel
        label='Lastname'
        placeholder='Enter your lastname'
        type='text'
        value={lastname}
        setValue={setLastname}
        warning={lastnameError}
        setTouched={setLastnameTouched}
      />
      <InputWithLabel
        label='Username'
        placeholder='Enter your username'
        type='text'
        value={username}
        setValue={setUsername}
        warning={usernameError}
        setTouched={setUsernameTouched}
      />
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

export default SignupInputs;
