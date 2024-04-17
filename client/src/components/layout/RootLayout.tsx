import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const RootLayout = () => {
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
