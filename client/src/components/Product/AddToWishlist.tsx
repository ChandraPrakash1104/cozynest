import { useEffect, useState } from 'react';
import { EmptyHeartIcon, FilledHeartIcon } from '../../utils/icons';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { authState } from '../../store/auth';
import toast from 'react-hot-toast';
import { useWishlist } from '../../hooks/useWishlist';

const AddToWishlist = ({ productId }: { productId: string }) => {
  const [clicked, setClicked] = useState(false);
  const auth = useRecoilValue(authState);
  const { fetchWishlist, addToWishlist } = useWishlist();

  useEffect(() => {
    fetchWishlist();
  }, [auth]);

  const handleClick = () => {
    if (!auth.isAuthenticated) {
      toast.error('Please log in first!');
    } else {
      setClicked(true);
      addToWishlist(productId);
    }
  };
  return (
    <motion.div
      className='flex items-center justify-center h-12 border-2 border-primary rounded-full select-none'
      whileHover={{ scale: 1.012 }}
      whileTap={{ scale: 1 }}
      onClick={handleClick}
    >
      <button className='text-primary font-semibold flex gap-1 '>
        Add to wishlist
        <div>{!clicked ? <EmptyHeartIcon /> : <FilledHeartIcon />}</div>
      </button>
    </motion.div>
  );
};

export default AddToWishlist;
