import { MinusIcon, PlusIcon } from '../../../utils/icons';

const IncrementDecrementButton = ({ quantity }: { quantity: number }) => {
  return (
    <div className='flex text-base font-medium rounded-2xl justify-around items-center'>
      <button className='hover-click-effect rounded-l-2xl h-10 w-10 flex justify-center items-center border-l border-t border-b border-slate-500 zoom-effect'>
        <MinusIcon />
      </button>
      <div className='h-10 w-10 flex justify-center items-center border-y border-slate-500'>
        {quantity}
      </div>
      <button className='hover-click-effect zoom-effect border-r border-t border-b border-slate-500 rounded-r-2xl h-10 w-10 flex justify-center items-center'>
        <PlusIcon />
      </button>
    </div>
  );
};

export default IncrementDecrementButton;
