import { useState } from 'react';
import PrimaryButton from '../../../common/Buttons/PrimaryButton';
import axios from 'axios';
import AddProductInputs from './AddProductInputs';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [type, setType] = useState('');

  const submitHandler = async () => {
    if (!image) {
      console.log('image is required');
      return;
    }
    try {
      const imageFormData = new FormData();
      imageFormData.append('image', image);

      const formData = new FormData();
      formData.append('product_name', productName);
      formData.append('description', description);
      formData.append('price', price.toString());
      formData.append('stock_quantity', stockQuantity.toString());
      formData.append('category', category);
      formData.append('type', type);
      formData.append('image', image);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/product`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='space-y-8 my-12'>
        <AddProductInputs
          productName={productName}
          description={description}
          price={price}
          stockQuantity={stockQuantity}
          setProductName={setProductName}
          setDescription={setDescription}
          setPrice={setPrice}
          setStockQuantity={setStockQuantity}
          setCategory={setCategory}
          setImage={setImage}
          setType={setType}
        />
        <PrimaryButton
          label='Add Product'
          size='medium'
          styles='w-full rounded font-semibold'
          handleClick={submitHandler}
        />
      </div>
    </div>
  );
};

export default AddProduct;
