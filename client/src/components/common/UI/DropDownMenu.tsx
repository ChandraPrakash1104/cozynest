import { useState } from 'react';

const DropDownMenu = ({
  dropList,
  label,
  handleSelection,
  fold = false,
}: {
  handleSelection: (index: number) => void;
  dropList: string[];
  label: string;
  fold?: boolean;
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [value, setValue] = useState(label);

  return (
    <div>
      <button
        onClick={() => setMenuIsOpen((e) => !e)}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
        type='button'
      >
        {value}
        <svg
          className={`w-2.5 h-2.5 ms-3 transform ${
            menuIsOpen ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>
      <div
        className={`z-10 ${
          !menuIsOpen && 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        <ul
          className={`py-2 text-sm text-gray-700 ${
            fold && 'flex flex-col max-h-48 flex-wrap'
          }`}
        >
          {dropList.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setValue(item);
                  setMenuIsOpen((e) => !e);
                  handleSelection(index);
                }}
                className='block px-4 py-2 hover:bg-gray-100 cursor-pointer'
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
