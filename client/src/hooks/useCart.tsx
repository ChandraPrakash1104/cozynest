import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AxiosResponse } from 'axios';
import { authState } from '../store/auth';
import { cartState } from '../store/cart';
import axiosInstance from '../utils/api';

interface CartAction {
  (): Promise<AxiosResponse<any>>;
}

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const isAuthenticated = useRecoilValue(authState);
  const [loading, setLoading] = useState(false);

  const fetchCartData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/cart');
      const cartData = response.data.cartItems;
      setCart(cartData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchCartData();
    }
  }, [isAuthenticated]);

  const handleCartUpdate = async (action: CartAction) => {
    try {
      await action();
      await fetchCartData();
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (productId: string) => {
    await handleCartUpdate(() =>
      axiosInstance.post('/cart', { productId, quantity: 1 })
    );
  };

  const updateCartItem = async (cartItemId: string, quantity: number) => {
    await handleCartUpdate(() =>
      axiosInstance.put(`/cart/${cartItemId}`, { quantity })
    );
  };

  const deleteCartItem = async (cartItemId: string) => {
    await handleCartUpdate(() => axiosInstance.delete(`/cart/${cartItemId}`));
  };

  return {
    cart,
    isAuthenticated,
    loading,
    addToCart,
    updateCartItem,
    deleteCartItem,
  };
};
