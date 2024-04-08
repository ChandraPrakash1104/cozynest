import Loader from '../common/Loader/Loader';
import CartItems from '../Cart/CartItems';
import Wrapper from '../common/UI/Wrapper';
import OrderSummary from '../Cart/OrderSummary';
import { useCart } from '../../hooks/useCart';

const Cart = () => {
  const { loading } = useCart();
  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <Wrapper>
          <div className='py-12 w-full space-y-10 md:grid md:grid-cols-3'>
            <div className='col-span-2 md:pr-12 lg:pr-32'>
              <CartItems />
            </div>
            <OrderSummary />
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default Cart;
