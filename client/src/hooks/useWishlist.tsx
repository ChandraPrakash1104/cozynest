import { useRecoilValue, useSetRecoilState } from 'recoil';
import { wishlistStore } from '../store/wishlist';
import { authState } from '../store/auth';
import axiosInstance, { BACKEND_URL } from '../utils/api';
import { useState } from 'react';

export const useWishlist = () => {
  const setWishlist = useSetRecoilState(wishlistStore);
  const auth = useRecoilValue(authState);
  const [loading, setLoading] = useState(false);

  const fetchWishlist = async () => {
    setLoading(true);
    if (auth.isAuthenticated) {
      try {
        const res = await axiosInstance.get(`${BACKEND_URL}/wishlist`);
        setWishlist(res.data.wishlist);
      } catch (e) {
        console.log(e);
      }
    }
    setLoading(false);
  };

  const addToWishlist = async (productId: string) => {
    if (auth.isAuthenticated) {
      const res = await axiosInstance.post(`${BACKEND_URL}/wishlist`, {
        productId,
      });
      setWishlist(res.data.wishlist);
    }
  };

  const deleteWishlistItem = async (wishListItemId: string) => {
    if (auth.isAuthenticated) {
      const res = await axiosInstance.delete(
        `${BACKEND_URL}/wishlist/${wishListItemId}`
      );
      setWishlist(res.data.wishlist);
    }
  };

  return {
    fetchWishlist,
    addToWishlist,
    deleteWishlistItem,
    loading,
  };
};
