import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../common/Loader/Loader';
import axios from 'axios';
import { BACKEND_URL } from '../../utils/api';
import { ProductDetail } from '../../typings/productTypes';
import { formatPrice } from '../../utils/format';
import Wrapper from '../common/UI/Wrapper';
import IncrementDecrementButton from '../common/Buttons/IncrementDecrementButton';
import AddToCartButton from '../common/Buttons/AddToCartButton';
import Rating from '../Rating/Rating';
import toast from 'react-hot-toast';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductDetail>();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/product/${productId}`);
        const data = response.data;

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <></>;
  }

  return (
    <Wrapper>
      <div className='space-y-6 max-w-[25rem] md:space-y-[unset] md:max-w-[unset] md:flex md:gap-6 tracking-wide my-10'>
        <div className='md:flex-grow md:relative overflow-hidden'>
          <img
            src={product.imageUrl}
            alt=''
            className='w-full max-w-[600px] md:w-[unset] md:absolute md:h-full object-center'
          />
        </div>
        <div className='space-y-4 md:max-w-[50%] md:p-10 md:space-y-8'>
          <div className='text-2xl font-semibold md:text-4xl'>
            {product.productName}
          </div>
          <div className='font-semibold md:text-lg text-font-color2'>
            <span className='text-sm'>Rs </span>
            {formatPrice(product.price)}
          </div>
          <div>
            <Rating />
          </div>
          <div className='text-sm font-medium !leading-[1.5rem] tracking-wider  md:tracking-widest'>
            {product.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officia blanditiis nemo quibusdam maiores quisquam
            autem est odio debitis tenetur voluptatum laborum veritatis
          </div>
          <div className='h-[7rem]'>colors</div>
          <div className='space-y-6 md:flex md:justify-around md:items-center md:space-y-[unset] md:space-x-2'>
            <div className='mt-10 md:mt-[unset] md:max-w-44 flex-grow'>
              <IncrementDecrementButton
                handleDecrease={() => {
                  setQuantity((pre) => {
                    if (pre > 1) return pre - 1;
                    return 1;
                  });
                }}
                handleIncrease={() => {
                  setQuantity((pre) => pre + 1);
                }}
                quantity={quantity}
              />
            </div>
            <div className='md:max-w-72 flex-grow'>
              <AddToCartButton
                productId={productId ?? ''}
                quantity={quantity}
                notify={() => {
                  toast.success('Item added to cart');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
