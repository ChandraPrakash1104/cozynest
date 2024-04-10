import { useRecoilValue } from 'recoil';
import CartItem from './CartItem';
import { cartState } from '../../store/cart';
import { useCart } from '../../hooks/useCart';

const CartItems = () => {
  const cart = useRecoilValue(cartState);
  const { updateCartItem, deleteCartItem } = useCart();

  if (!cart) return <div>Nothing in cart</div>;

  return (
    <div className='space-y-8'>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          cartItemId={item.id}
          productName={item.product.productName}
          quantity={item.quantity}
          imageUrl={item.product.imageUrl}
          description={item.product.description}
          price={item.product.price}
          updateCartItem={updateCartItem}
          deleteCartItem={deleteCartItem}
        />
      ))}
    </div>
  );
};

export default CartItems;
