import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BrowseCard = ({ imgUrl, label }: { imgUrl: string; label: string }) => {
  return (
    <motion.div whileHover={{ scale: 1.015 }}>
      <Link
        to={`/shop?category=${encodeURIComponent(label.toLowerCase())}`}
        className='cursor-pointer group flex flex-col items-center gap-2'
      >
        <div className='space-y-2'>
          <img src={imgUrl} alt='#' />
        </div>
        <div className='font-bold text-font-primary text-lg inline-flex text-center group-hover:border-b group-hover:border-font-primary'>
          {label}
        </div>
      </Link>
    </motion.div>
  );
};

export default BrowseCard;
