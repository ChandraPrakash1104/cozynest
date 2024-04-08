import { useRecoilValue } from 'recoil';
import { useCart } from '../../../hooks/useCart';
import { cartState } from '../../../store/cart';
import { useEffect, useState } from 'react';

const AddToCartButton = ({ productId }: { productId: string }) => {
  const [isDisable, setIsDisable] = useState(false);
  const cart = useRecoilValue(cartState);

  const { addToCart } = useCart();
  const handleClick = () => {
    addToCart(productId);
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
      className={`z-10 px-10 py-4 text-sm font-semibold text-primary rounded relative inline-flex group items-center justify-center cursor-pointer active:shadow-none ${
        isDisable
          ? 'bg-slate-300 '
          : 'bg-gradient-to-tr from-slate-200 to-slate-200 shadow-lg '
      }`}
      disabled={isDisable}
    >
      {!isDisable && (
        <span className='absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full group-hover:rounded-none opacity-50 blur-sm'></span>
      )}
      <span className='relative'> Add to cart</span>
    </button>
  );
};

export default AddToCartButton;
