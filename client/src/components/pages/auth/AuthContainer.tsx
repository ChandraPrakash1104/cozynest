import React from 'react';
import { LeftIcon } from '../../common/UI/Icons';
import { Link } from 'react-router-dom';

const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Link
        className='fixed top-4 left-4 hover:rounded-full hover:bg-slate-200 transition-all p-2'
        to={'/home'}
      >
        <LeftIcon />
      </Link>
      {children}
    </div>
  );
};

export default AuthContainer;
