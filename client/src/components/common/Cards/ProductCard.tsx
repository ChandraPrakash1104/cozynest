import { motion } from 'framer-motion';

const ProductCard = ({
  productName,
  description,
  price,
  imageUrl,
  hoverEffect = true,
}: {
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
  hoverEffect?: boolean;
}) => {
  return (
    <motion.div
      className='cursor-pointer bg-slate-100'
      whileHover={{ scale: hoverEffect ? 1.02 : 1 }}
    >
      <div className='space-y-2'>
        <img src={imageUrl} alt={`${productName} Image`} />
      </div>
      <div className='px-4 pb-4 space-y-1'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-font-color1 text-lg  py-2'>
            {productName}
          </div>
        </div>
        <div className='text-sm text-font-color2 font-semibold'>
          {description}
        </div>
        <div className='font-semibold'>Rs. {price}</div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
