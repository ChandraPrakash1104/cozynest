import { useRecoilState, useRecoilValue } from 'recoil';
import { authState } from '../store/auth';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { cartState } from '../store/cart';
import { CartItem } from '../typings/cartTypes';

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const isAuthenticated = useRecoilValue(authState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchCartData = async () => {
      // const reponse = axios.get()
    };
  }, [isAuthenticated]);

  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    setCart((preCart) =>
      preCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const addToCart = (userId: number, productId: number) => {
    const itemInCart = cart.find(
      (cartItem: CartItem) => cartItem.productId === productId
    );

    if (itemInCart) {
      updateCartItemQuantity(productId, itemInCart.quantity + 1);
    } else {
      const newItem = {
        id: cart.length + 1,
        userId,
        productId,
        quantity: 1,
      };
      setCart((pre) => [...pre, newItem]);
    }
  };

  return { addToCart, loading, removeFromCart };
};
