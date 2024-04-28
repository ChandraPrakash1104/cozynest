import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRecoilValue } from 'recoil';
import { authState } from '../../store/auth';
import { useCart } from '../../hooks/useCart';
import { useEffect } from 'react';
import { useWishlist } from '../../hooks/useWishlist';

const RootLayout = () => {
  const auth = useRecoilValue(authState);
  const { fetchCartData } = useCart();
  const { fetchWishlist } = useWishlist();
  useEffect(() => {
    fetchCartData();
    fetchWishlist();
  }, [auth]);
  return (
    <main>
      <Header />
      <Toaster />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
