import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Alert from '../common/UI/Alert';
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
  return (
    <main>
      <Header />
      <Toaster />
      <Alert />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
