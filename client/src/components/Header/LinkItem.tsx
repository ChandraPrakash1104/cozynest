import { motion } from 'framer-motion';
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
        `${
          isActive
            ? 'inline-block lg:border-b scale-105 lg:scale:100 border-primary text-primary'
            : 'text-font-primary'
        } px-4 font-semibold transition-colors duration-200`
      }
    >
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ duration: 0.2, type: 'spring' }}
      >
        {label}
      </motion.div>
    </NavLink>
  );
};

export default LinkItem;
