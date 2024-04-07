import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './App.css';
import { loader as redirectToHome } from './components/pages/Home/Home';
import Login from './components/pages/auth/Login/Login';
import Signup from './components/pages/auth/Signup/Signup';
import './styles/customUtilities.css';
import { RecoilRoot } from 'recoil';
import AdminLogin from './components/pages/Admin/AdminLogin';
import AddProduct from './components/pages/Admin/Product/AddProduct';
import Cart from './components/pages/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} loader={redirectToHome} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route path='/'>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
      <Route path='/admin'>
        {/* <Route path='/admin/login' element={<AdminLogin />} /> */}
        <Route path='/admin/addproduct' element={<AddProduct />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />;
    </RecoilRoot>
  );
};

export default App;
