import { useEffect } from 'react';
import useAlert from '../../../hooks/userAlert';

const Alert = () => {
  const { alert, hideAlert } = useAlert();

  useEffect(() => {
    if (alert.isActive) {
      const timer = setTimeout(() => {
        hideAlert();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [alert, hideAlert]);

  if (!alert.isActive) return <div></div>;
  return (
    <div className='fixed bottom-20 z-10 min-w-52'>
      <div
        className={`flex items-center p-4 mb-4 ${
          alert.type == 'warning'
            ? 'text-warning-700 border-warning-500 bg-red-50'
            : 'text-success-700 border-success-500 bg-green-50'
        } border-t-4 `}
        role='alert'
      >
        <svg
          className='flex-shrink-0 w-4 h-4'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
        </svg>
        <div className='ms-3 text-sm font-medium flex-wrap'>{alert.label}</div>
        <button
          type='button'
          className={`ms-auto -mx-1.5 -my-1.5 bg-red-50 p-1.5  rounded-lg  ${
            alert.type == 'warning'
              ? 'bg-red-50  text-warning-500 hover:bg-warning-300 '
              : 'bg-green-50 text-success-500  hover:bg-success-300'
          }  inline-flex items-center justify-center h-8 w-8`}
          aria-label='Close'
          onClick={hideAlert}
        >
          <span className='sr-only'>Dismiss</span>
          <svg
            className='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
