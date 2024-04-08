import { useCart } from '../../../hooks/useCart';
import { MinusIcon, PlusIcon } from '../../../utils/icons';

const IncrementDecrementButton = ({
  quantity,
  cartItemId,
}: {
  quantity: number;
  cartItemId: string;
}) => {
  const { updateCartItem, deleteCartItem } = useCart();

  const handleQuantityIncrease = () => {
    updateCartItem(cartItemId, quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity - 1 <= 0) {
      deleteCartItem(cartItemId);
    } else {
      updateCartItem(cartItemId, quantity - 1);
    }
  };

  return (
    <div className='flex text-base font-medium rounded-2xl justify-around items-center'>
      <button
        className='hover-click-effect rounded-l-2xl h-10 w-10 flex justify-center items-center border-l border-t border-b border-slate-500 zoom-effect'
        onClick={handleQuantityDecrease}
      >
        <MinusIcon />
      </button>
      <div className='h-10 w-10 flex justify-center items-center border-y border-slate-500'>
        {quantity}
      </div>
      <button
        className='hover-click-effect zoom-effect border-r border-t border-b border-slate-500 rounded-r-2xl h-10 w-10 flex justify-center items-center'
        onClick={handleQuantityIncrease}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default IncrementDecrementButton;
