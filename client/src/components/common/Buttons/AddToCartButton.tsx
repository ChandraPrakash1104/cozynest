import { useRecoilValue } from 'recoil';
import { useCart } from '../../../hooks/useCart';
import { cartState } from '../../../store/cart';
import { useEffect, useState } from 'react';

const AddToCartButton = ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  const [isDisable, setIsDisable] = useState(false);
  const cart = useRecoilValue(cartState);

  const { addToCart } = useCart();
  const handleClick = () => {
    addToCart(productId, quantity);
  };

  useEffect(() => {
    if (cart.find((item) => item.product.id === productId)) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [cart]);

  return (
    <button
      onClick={handleClick}
      disabled={isDisable}
      className={`text-sm px-6 w-full py-4 btn-click text-white font-bold ${
        isDisable ? 'bg-primary/80 scale-[98%]' : 'bg-primary'
      }`}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
