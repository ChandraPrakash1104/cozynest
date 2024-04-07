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
    <div className='flex items-center border border-gray-400 p-2 bg-white min-w-[300px]'>
      <input
        type='text'
        className='w-full focus:outline-none text-sm'
        placeholder={placeholder}
        onChange={onChange}
        onFocus={handleToggleExpand}
        onBlur={handleToggleExpand}
      />
      <img
        src={searchIcon}
        alt='search'
        className='w-5 float-right top-0 cursor-pointer '
        onClick={handleToggleExpand}
      />
    </div>
  );
};

export default SearchBar;
