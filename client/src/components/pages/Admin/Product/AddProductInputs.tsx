import { Dispatch, SetStateAction } from 'react';
import AddProductInputWithLabel from './AddProductInputWithLabel';
import DropDownMenu from '../../../common/UI/DropDownMenu';

interface Props {
  productName: string;
  setProductName: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  price: number | undefined;
  setPrice: Dispatch<SetStateAction<number>>;
  stockQuantity: number | undefined;
  setStockQuantity: Dispatch<SetStateAction<number>>;
  setCategory: Dispatch<SetStateAction<string>>;
  setImage: Dispatch<SetStateAction<File | null>>;
  setType: Dispatch<SetStateAction<string>>;
}

const AddProductInputs = ({
  productName,
  setProductName,
  description,
  setDescription,
  price,
  setPrice,
  stockQuantity,
  setStockQuantity,
  setCategory,
  setImage,
  setType,
}: Props) => {
  const categoryDropList = ['Dining Room', 'Bedroom', 'Living Room'];
  const typeDropList = [
    'Sofa',
    'Table',
    'Chair',
    'Bed',
    'Ottoman',
    'Dresser',
    'Bookshelf',
    'TV Stand',
    'Desk',
    'Shoe Rack',
  ];

  return (
    <div className='space-y-6'>
      <AddProductInputWithLabel
        label='Product Name'
        placeholder='Enter product name'
        type='text'
        value={productName}
        setValue={setProductName}
      />
      <AddProductInputWithLabel
        label='Description'
        placeholder='Enter description'
        type='text'
        value={description}
        setValue={setDescription}
      />
      <AddProductInputWithLabel
        label='Price'
        placeholder='Enter price'
        type='number'
        value={price?.toString() || ''}
        setValue={(value) => setPrice(Number(value))}
      />
      <AddProductInputWithLabel
        label='Stock Quantity'
        placeholder='Enter stock quantity'
        type='number'
        value={stockQuantity?.toString() || ''}
        setValue={(value) => setStockQuantity(Number(value))}
      />
      <DropDownMenu
        dropList={categoryDropList}
        label='Select Category'
        handleSelection={(index) => setCategory(categoryDropList[index])}
      />
      <div>
        <label htmlFor='image'>Image</label>
        <input
          type='file'
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
      </div>
      <DropDownMenu
        dropList={typeDropList}
        label='Select Type for this product'
        handleSelection={(index) => setType(typeDropList[index])}
        fold={true}
      />
    </div>
  );
};

export default AddProductInputs;
