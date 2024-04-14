import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../common/Buttons/PrimaryButton';

const BannerBox = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-box-color w-[90%] mx-auto p-6 md:absolute md:right-16 md:top-44 md:w-[60%] lg:right-44 lg:w-[45%] xl:w-[35%] lg:pr-28 lg:pb-12 lg:pl-10 rounded-lg'>
      <div className='font-semibold text-sm tracking-wider py-3 md:pt-10'>
        New Arrival
      </div>
      <div className='text-primary font-bold tracking-wide leading-tight  md:text-3xl xl:text-5xl'>
        Discover Our <br />
        New Collection
      </div>
      <div className='pt-3 pb-12 text-sm '>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
        dolore minima dolor harum ut,
      </div>
      <PrimaryButton
        label='BUY NOW'
        size='large'
        handleClick={() => {
          navigate('/shop');
        }}
      />
    </div>
  );
};

export default BannerBox;
