import { useRecoilValue } from 'recoil';
import { useCart } from '../../../hooks/useCart';
import { cartState } from '../../../store/cart';

const AddToCartButton = ({ productId }: { productId: number }) => {
  const cart = useRecoilValue(cartState);
  const { addToCart } = useCart();
  const handleClick = () => {
    addToCart(1, productId);
  };
  console.log(cart);

  return (
    <button
      onClick={handleClick}
      className=' z-10 px-10 py-4 text-sm font-semibold text-primary rounded relative inline-flex group items-center justify-center cursor-pointer active:shadow-none shadow-lg bg-gradient-to-tr from-slate-200 to-slate-200 '
    >
      <span className='absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full group-hover:rounded-none opacity-50 blur-sm'></span>
      <span className='relative'> Add to cart</span>
    </button>
  );
};

export default AddToCartButton;
