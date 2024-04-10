import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../common/Loader/Loader';
import axios from 'axios';
import { BACKEND_URL } from '../../utils/api';
import { ProductDetail } from '../../typings/productTypes';
import Error from '../common/Error/Error';
import { formatPrice } from '../../utils/format';
import Wrapper from '../common/UI/Wrapper';
import IncrementDecrementButton from '../common/Buttons/IncrementDecrementButton';
import AddToCartButton from '../common/Buttons/AddToCartButton';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductDetail>();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  console.log(productId);

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
  console.log(product);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <Error />;
  }
  return (
    <Wrapper>
      <div className='space-y-6'>
        <div>
          <img src={product.imageUrl} alt='' className='w-full max-w-[600px]' />
        </div>
        <div className='space-y-1'>
          <div className='text-2xl font-semibold'>{product.productName}</div>
          <div className='font-semibold text-font-color2'>
            <span className='text-sm'>Rs </span>
            {formatPrice(product.price)}
          </div>
          <div>Ratings...</div>
          <div className='text-sm font-medium'>
            {product.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officia blanditiis nemo quibusdam maiores quisquam
            autem est odio debitis tenetur voluptatum laborum veritatis
          </div>
          <div>colors</div>
          <div className='space-y-6'>
            <div className='mt-10'>
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
            <div className=''>
              <AddToCartButton
                productId={productId ?? ''}
                quantity={quantity}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
