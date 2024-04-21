import { useEffect, useState } from 'react';
import { useCart } from '../../../hooks/useCart';
import { motion } from 'framer-motion';

const AddToCartButton = ({
  productId,
  quantity,
  notify,
}: {
  productId: string;
  quantity: number;
  notify: () => void;
}) => {
  const [isDisable, setIsDisable] = useState(false);
  const { addToCart, productAlreadyInCart } = useCart();
  const alreadyExists = productAlreadyInCart(productId);

  useEffect(() => {
    setIsDisable(alreadyExists);
  }, [alreadyExists]);

  const handleClick = () => {
    if (!isDisable) {
      addToCart(productId, quantity);
      notify();
      setIsDisable(true);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={isDisable}
      className={`text-sm px-6 w-full py-4  text-white font-bold rounded-full ${
        isDisable ? 'bg-primary/80' : 'bg-primary'
      }`}
      whileHover={{ scale: 1.012 }}
      whileTap={{ scale: 1 }}
    >
      Add to cart
    </motion.button>
  );
};

export default AddToCartButton;
