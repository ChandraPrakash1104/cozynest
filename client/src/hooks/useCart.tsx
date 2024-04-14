import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AxiosResponse } from 'axios';
import { authState } from '../store/auth';
import { cartState } from '../store/cart';
import axiosInstance from '../utils/api';
import { useFetchProduct } from './useFetchProduct';
import { CartItem } from '../typings/cartTypes';

interface CartAction {
  (): Promise<AxiosResponse<any>>;
}

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const auth = useRecoilValue(authState);
  const [loading, setLoading] = useState(false);
  const { fetchProduct } = useFetchProduct();
  const fetchCartData = async () => {
    try {
      const response = await axiosInstance.get('/cart');
      const cartData = response.data.cartItems;
      setCart(cartData);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(cart);

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchCartData();
    }
  }, [auth]);

  const handleCartUpdate = async (action: CartAction) => {
    setLoading(true);
    try {
      await action();
      await fetchCartData();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: string, quantity: number) => {
    const product = await fetchProduct(productId);
    if (product) {
      const newCartItem: CartItem = {
        id: `${product.id}-${Date.now()}`,
        quantity: 1,
        userId: '',
        product: {
          id: product.id,
          productName: product.productName,
          description: product.description,
          imageUrl: product.imageUrl,
          price: product.price,
          stockQuantity: product.stockQuantity,
        },
      };
      setCart((prevCartItems) => [...prevCartItems, newCartItem]);
    }
    if (auth.isAuthenticated) {
      await handleCartUpdate(() =>
        axiosInstance.post('/cart', { productId, quantity })
      );
    }
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
    isAuthenticated: auth.isAuthenticated,
    loading,
    addToCart,
    updateCartItem,
    deleteCartItem,
  };
};
