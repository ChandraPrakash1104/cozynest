import axios from 'axios';
import { useState } from 'react';
import { ProductDetail } from '../typings/productTypes';
import { BACKEND_URL } from '../utils/api';

export const useFetchProduct = () => {
  const [loading, setLoading] = useState(false);

  const fetchProduct = async (id: string): Promise<ProductDetail | null> => {
    setLoading(true);
    try {
      const response = await axios.get(`${BACKEND_URL}/product/${id}`);
      const data = response.data;
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return null;
    }
  };

  return { fetchProduct, loading };
};
