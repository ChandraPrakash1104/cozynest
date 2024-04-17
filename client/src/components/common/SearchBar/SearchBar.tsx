import { useState } from 'react';
import searchIcon from '../../../assets/logos/searchIcon.svg';

const SearchBar = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex items-center rounded-full py-3 px-4 bg-white hover:shadow-lg transition-shadow duration-200 ${
        isExpanded ? 'shadow-lg ring-1 ring-gray-900' : ''
      }`}
    >
      <input
        type='text'
        className='w-full focus:outline-none text-sm text-gray-700 placeholder-gray-400'
        placeholder={placeholder}
        onChange={onChange}
        onFocus={handleToggleExpand}
        onBlur={handleToggleExpand}
      />
      <img
        src={searchIcon}
        alt='search'
        className='w-5 float-right top-0 cursor-pointer transition-transform duration-200 hover:scale-110'
        onClick={handleToggleExpand}
      />
    </div>
  );
};

export default SearchBar;
