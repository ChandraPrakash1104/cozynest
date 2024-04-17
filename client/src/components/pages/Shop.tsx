import { useEffect } from 'react';
import Products from '../Shop/Products';

const Shop = () => {
  useEffect(() => {
    document.title = document.title.split(' ')[0] + ' | Shop';
  }, []);
  return (
    <div>
      <Products />
    </div>
  );
};

export default Shop;
