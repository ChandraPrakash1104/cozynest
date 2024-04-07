import { useFetchProduct } from '../../hooks/useFetchProduct';
import { DeleteIcon } from '../../utils/icons';
import IncrementDecrementButton from '../common/Buttons/IncrementDecrementButton';

const CartItem = ({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) => {
  const { product, loading } = useFetchProduct(productId);
  console.log(product);

  return (
    <div className='flex justify-between '>
      <div className='flex'>
        <div>
          <img
            src={product.image_url}
            alt='#'
            className='min-w-24 w-24 md:w-32 object-center'
          />
        </div>
        <div className='px-3 md:px-8 space-y-2 flex flex-col items-centerjustify-around'>
          <div className='font-semibold'>{product.product_name}</div>
          <div className='text-sm text-font-color2'>{product.description}</div>
          <div className='flex space-x-4'>
            <IncrementDecrementButton quantity={quantity} />
            <button className='zoom-effect'>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
      <div className='font-semibold'>Rs. {product.price}</div>
    </div>
  );
};

export default CartItem;
