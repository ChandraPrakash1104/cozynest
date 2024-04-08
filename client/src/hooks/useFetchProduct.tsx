import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchProduct = (id: string) => {
  console.log(id);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/product/${id}`
        );
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    setLoading(false);
    fetchProduct();
  }, []);
  useEffect(() => {});

  return { product, loading };
};
