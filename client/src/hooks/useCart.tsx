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

  const calculateTotalPrice = (cartItems: CartItem[]) => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
  };

  const saveCartToLocalStorage = (cartData: CartItem[]) => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  };

  const fetchCartData = async () => {
    try {
      let cartData: CartItem[] = [];
      if (auth.isAuthenticated) {
        const response = await axiosInstance.get('/cart');
        cartData = response.data.cartItems;
      } else {
        const stringCart = localStorage.getItem('cartData');
        cartData = JSON.parse(stringCart || '[]');
      }
      setCart(cartData);
      setCartsTotal(calculateTotalPrice(cartData));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCartUpdate = async (action: CartAction) => {
    setLoading(true);
    try {
      if (auth.isAuthenticated) {
        await action();
        await fetchCartData();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: string, quantity: number) => {
    try {
      const existingItem = cart.find((item) => item.product.id === productId);

      if (existingItem) {
        const updatedQuantity = existingItem.quantity + quantity;
        updateCartItem(existingItem.id, updatedQuantity);
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
          setCart([...cart, newCartItem]);
          setCartsTotal((prevTotal) => prevTotal + product.price * quantity);
          saveCartToLocalStorage([...cart, newCartItem]);
          await handleCartUpdate(() =>
            axiosInstance.post('/cart', { productId, quantity: quantity })
          );
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateCartItem = async (cartItemId: string, quantity: number) => {
    try {
      setCart((prevCart) => {
        const res = prevCart.map((item) =>
          item.id === cartItemId ? { ...item, quantity: quantity } : item
        );
        saveCartToLocalStorage(res);

        return res;
      });

      setCartsTotal(calculateTotalPrice(cart));
      await handleCartUpdate(() =>
        axiosInstance.put(`/cart/${cartItemId}`, { quantity })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCartItem = async (cartItemId: string) => {
    const existingItem = cart.find((item) => item.id === cartItemId);

    if (existingItem) {
      setCart((prevCart) => {
        const res = prevCart.filter((item) => item.id !== cartItemId);
        saveCartToLocalStorage(res);
        return res;
      });

      setCartsTotal(calculateTotalPrice(cart));
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
