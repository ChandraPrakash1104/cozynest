import { DeleteIcon } from '../../utils/icons';
import ProductCard from '../common/Cards/ProductCard';
import { motion } from 'framer-motion';

const WishlistItem = ({
  productName,
  imageUrl,
  description,
  price,
  wishlistItemId,
  itemIsInStock,
  deleteWishlistItem,
}: {
  productName: string;
  itemIsInStock: boolean;
  imageUrl: string;
  description: string;
  wishlistItemId: string;
  price: number;
  deleteWishlistItem: (cartItemId: string) => void;
}) => {
  return (
    <div className='relative group'>
      {!itemIsInStock && (
        <div>
          <div className='bg-warning-700 w-full h-12 absolute text-white flex items-center justify-center z-10 mt-[90%] font-semibold'>
            Out of Stock
          </div>
          <div className='absolute w-full h-full bg-black/20' />
        </div>
      )}
      <motion.button
        className='zoom-effect absolute right-3 bottom-5'
        onClick={() => {
          deleteWishlistItem(wishlistItemId);
        }}
        whileTap={{ scale: 1 }}
      >
        <DeleteIcon />
      </motion.button>
      <ProductCard
        productName={productName}
        price={price}
        description={description}
        imageUrl={imageUrl}
        hoverEffect={false}
      />
    </div>
  );
};

export default WishlistItem;
