import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const RootLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
