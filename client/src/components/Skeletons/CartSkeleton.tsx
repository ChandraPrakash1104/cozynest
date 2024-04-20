import Wrapper from '../common/UI/Wrapper';

const CartSkeleton = () => {
  return (
    <div className='animate-pulse'>
      <Wrapper>
        <div className='py-12 w-full space-y-10 md:grid md:grid-cols-3 flex'>
          <div className='col-span-2 md:pr-12 lg:pr-32 '>
            <div className='space-y-8'>
              <div className='flex justify-between '>
                <div className='flex'>
                  <div className='w-28 h-28 bg-gray-200'></div>
                  <div className='px-3 md:px-8 space-y-2 flex flex-col items-centerjustify-around'>
                    <div className='bg-gray-200 h-4 w-44'></div>
                    <div className='bg-gray-200  h-4 w-44'></div>
                    <div className='flex bg-gray-200 space-x-4 h-8 w-full'></div>
                  </div>
                </div>
                <div className='w-full'></div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CartSkeleton;
