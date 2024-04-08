import { DeleteIcon } from '../../utils/icons';
import IncrementDecrementButton from '../common/Buttons/IncrementDecrementButton';

const CartItem = ({
  productName,
  quantity,
  imageUrl,
  description,
  price,
  cartItemId,
}: {
  productName: string;
  quantity: number;
  imageUrl: string;
  description: string;
  cartItemId: string;
  price: number;
}) => {
  return (
    <div className='flex justify-between '>
      <div className='flex'>
        <div>
          <img
            src={imageUrl}
            alt='#'
            className='min-w-24 w-24 md:w-32 object-center'
          />
        </div>
        <div className='px-3 md:px-8 space-y-2 flex flex-col items-centerjustify-around'>
          <div className='font-semibold'>{productName}</div>
          <div className='text-sm text-font-color2'>{description}</div>
          <div className='flex space-x-4'>
            <IncrementDecrementButton
              quantity={quantity}
              cartItemId={cartItemId}
            />
            <button className='zoom-effect'>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
      <div className='font-semibold'>Rs. {price}</div>
    </div>
  );
};

export default CartItem;
