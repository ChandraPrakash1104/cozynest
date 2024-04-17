import { useRecoilValue } from 'recoil';
import { SeparatorDarkLine } from '../common/SeparatorLine';
import { formatPrice } from '../../utils/format';
import { cartsTotalState } from '../../store/cart';

const OrderSummary = () => {
  const cart = useRecoilValue(cartsTotalState);

  return (
    <div className='text-font-color2'>
      <div className='font-bold '>Order Summary</div>
      <div className='flex justify-between mt-6 text-sm'>
        <div>Subtotal</div>
        <div className='font-semibold'>Rs. {formatPrice(cart)}</div>
      </div>
      <SeparatorDarkLine />
      <div className='flex justify-between mt-6 text-sm'>
        <div className='font-bold'>Total</div>
        <div className='text-xl text-font-color1 font-semibold'>
          Rs. {formatPrice(cart)}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
