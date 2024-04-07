import { useRecoilValue } from 'recoil';
import CartItem from './CartItem';
import { cartState } from '../../store/cart';

const CartItems = () => {
  const cart = useRecoilValue(cartState);

  return (
    <div className='space-y-8'>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          productId={item.productId}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default CartItems;
