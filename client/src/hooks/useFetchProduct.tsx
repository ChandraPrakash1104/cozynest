import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchProduct = (id: string) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/product/${id}`
        );
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  return { product, loading };
};
