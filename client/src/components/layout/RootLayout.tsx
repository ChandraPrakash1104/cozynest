import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRecoilValue } from 'recoil';
import { authState } from '../../store/auth';
import { useCart } from '../../hooks/useCart';
import { useEffect } from 'react';

const RootLayout = () => {
  const auth = useRecoilValue(authState);
  const { fetchCartData } = useCart();
  useEffect(() => {
    fetchCartData();
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
