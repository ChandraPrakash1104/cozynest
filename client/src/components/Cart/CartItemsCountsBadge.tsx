import { useRecoilValue } from 'recoil';
import { cartState } from '../../store/cart';

const CartItemsCountsBadge = () => {
  const cart = useRecoilValue(cartState);

  if (cart.length === 0) return;

  return (
    <div className='bg-warning-700 text-white rounded-full w-4 h-4 text-xs flex justify-center items-center'>
      {cart.length}
    </div>
  );
};

export default CartItemsCountsBadge;
