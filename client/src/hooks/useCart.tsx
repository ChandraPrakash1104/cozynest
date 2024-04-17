import { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { AxiosResponse } from 'axios';
import { authState } from '../store/auth';
import { cartState, cartsTotalState } from '../store/cart';
import axiosInstance from '../utils/api';
import { useFetchProduct } from './useFetchProduct';
import { CartItem } from '../typings/cartTypes';

interface CartAction {
  (): Promise<AxiosResponse<any>>;
}

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const setCartsTotal = useSetRecoilState(cartsTotalState);
  const auth = useRecoilValue(authState);
  const [loading, setLoading] = useState(false);
  const { fetchProduct } = useFetchProduct();
  const fetchCartData = async () => {
    try {
      if (auth.isAuthenticated) {
        const response = await axiosInstance.get('/cart');
        const cartData = response.data.cartItems;
        setCart(cartData);
      } else {
        const stringCart = localStorage.getItem('cartData');
        const cartData = JSON.parse(stringCart || '');
        setCart(cartData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCartUpdate = async (action: CartAction) => {
    setLoading(true);
    try {
      await action();
      await fetchCartData();
      if (auth.isAuthenticated) {
        const response = await axiosInstance.get('/cart');
        const cartData = response.data.cartItems;
        localStorage.setItem('cartData', JSON.stringify(cartData));
      } else {
        localStorage.setItem('cartData', JSON.stringify(cart));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: string, quantity: number) => {
    const existingItem = cart.find((item) => item.product.id === productId);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
      setCartsTotal((prevTotal) => {
        const oldPrice = existingItem.quantity * existingItem.product.price;
        return prevTotal - oldPrice < 0 ? 0 : prevTotal - oldPrice;
      });
      await handleCartUpdate(() =>
        axiosInstance.put(`/cart/${existingItem.id}`, { quantity })
      );
    } else {
      const product = await fetchProduct(productId);
      if (product) {
        const newCartItem: CartItem = {
          id: `${product.id}-${Date.now()}`,
          quantity: quantity,
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
        setCartsTotal((prevTotal) => {
          return prevTotal + product.price * quantity < 0
            ? 0
            : prevTotal + product.price * quantity;
        });
      }

      await handleCartUpdate(() =>
        axiosInstance.post('/cart', { productId, quantity: quantity })
      );
    }
  };

  const updateCartItem = async (cartItemId: string, quantity: number) => {
    const existingItem = cart.find((item) => item.id === cartItemId);

    if (existingItem && quantity > 0) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === cartItemId ? { ...item, quantity: quantity } : item
        )
      );
      setCartsTotal((prevTotal) => {
        const oldPrice = existingItem.quantity * existingItem.product.price;
        const newPrice =
          prevTotal - oldPrice + quantity * existingItem.product.price;
        return newPrice < 0 ? 0 : newPrice;
      });
    }
    await handleCartUpdate(() =>
      axiosInstance.put(`/cart/${cartItemId}`, { quantity })
    );
  };

  const deleteCartItem = async (cartItemId: string) => {
    const existingItem = cart.find((item) => item.id === cartItemId);

    if (existingItem) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== cartItemId));

      setCartsTotal((prevTotal) => {
        const oldPrice = existingItem.quantity * existingItem.product.price;
        const newPrice = prevTotal - oldPrice;
        return newPrice < 0 ? 0 : newPrice;
      });
    }
    await handleCartUpdate(() => axiosInstance.delete(`/cart/${cartItemId}`));
  };

  return {
    cart,
    isAuthenticated: auth.isAuthenticated,
    loading,
    addToCart,
    updateCartItem,
    deleteCartItem,
    fetchCartData,
  };
};
