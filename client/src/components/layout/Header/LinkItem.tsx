import { NavLink } from 'react-router-dom';

const LinkItem = ({
  destination,
  label,
  handleOnClick,
}: {
  destination: string;
  label: string;
  handleOnClick?: () => void;
}) => {
  return (
    <NavLink
      onClick={handleOnClick}
      to={destination}
      className={({ isActive }) =>
        (isActive
          ? 'underline transform scale-105 lg:no-underline lg:bg-gray-300'
          : 'lg:hover:bg-gray-200 lg:active:bg-gray-300  transition-all') +
        ' py-1 px-4 transition-transform font-medium hover:scale-105'
      }
    >
      {label}
    </NavLink>
  );
};

export default LinkItem;
