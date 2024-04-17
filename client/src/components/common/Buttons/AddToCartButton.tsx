import { useCart } from '../../../hooks/useCart';
import { useState } from 'react';

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

  const { addToCart } = useCart();
  const handleClick = () => {
    setIsDisable(true);
    addToCart(productId, quantity);
    notify();
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisable}
      className={`text-sm px-6 w-full py-4 btn-click text-white font-bold rounded-full ${
        isDisable ? 'bg-primary/80 scale-[98%]' : 'bg-primary'
      }`}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
