import { SeparatorDarkLine } from '../common/SeparatorLine';

const OrderSummary = () => {
  return (
    <div className='text-font-color2'>
      <div className='font-bold '>Order Summary</div>
      <div className='flex justify-between mt-6 text-sm'>
        <div>Subtotal</div>
        <div className='font-semibold'>Rs. 24,415.00</div>
      </div>
      <SeparatorDarkLine />
      <div className='flex justify-between mt-6 text-sm'>
        <div className='font-bold'>Total</div>
        <div className='text-xl text-font-color1 font-semibold'>
          Rs. 24,415.00
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
