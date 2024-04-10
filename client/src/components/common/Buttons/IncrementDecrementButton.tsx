import { MinusIcon, PlusIcon } from '../../../utils/icons';

const IncrementDecrementButton = ({
  quantity,
  handleIncrease,
  handleDecrease,
}: {
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}) => {
  return (
    <div className='flex text-base font-medium justify-around items-center'>
      <button
        className='hover-click-effect h-10 w-full min-w-10 flex justify-center items-center border-l border-t border-b border-slate-500 zoom-effect'
        onClick={handleDecrease}
      >
        <MinusIcon />
      </button>
      <div className='h-10 w-full min-w-10 flex justify-center items-center border-y border-slate-500'>
        {quantity}
      </div>
      <button
        className='hover-click-effect zoom-effect border-r border-t border-b border-slate-500 h-10 w-full min-w-10 flex justify-center items-center'
        onClick={handleIncrease}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default IncrementDecrementButton;
