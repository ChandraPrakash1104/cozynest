import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import RootLayout from './components/layout/RootLayout';
import { loader as redirectToHome } from './components/pages/Home/Home';
import { RecoilRoot } from 'recoil';
import Loader from './components/common/Loader/Loader';
import { Suspense, lazy } from 'react';
import NotFoundPage from './components/pages/NotFoundPage';

const LazyHome = lazy(() => import('./components/pages/Home/Home'));
const LazyShop = lazy(() => import('./components/pages/Shop'));
const LazyProduct = lazy(() => import('./components/pages/Product'));
const LazyCart = lazy(() => import('./components/pages/Cart'));
const LazyAbout = lazy(() => import('./components/pages/About'));
const LazyContact = lazy(() => import('./components/pages/Contact'));
const LazyLogin = lazy(() => import('./components/pages/auth/Login/Login'));
const LazySignup = lazy(() => import('./components/pages/auth/Signup/Signup'));
const LazyAddProduct = lazy(
  () => import('./components/pages/Admin/Product/AddProduct')
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path='/'
        element={
          <Suspense fallback={<Loader />}>
            <RootLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <LazyHome />
            </Suspense>
          }
          loader={redirectToHome}
        />
        <Route
          path='/home'
          element={
            <Suspense fallback={<Loader />}>
              <LazyHome />
            </Suspense>
          }
        />
        <Route
          path='/shop'
          element={
            <Suspense fallback={<Loader />}>
              <LazyShop />
            </Suspense>
          }
        />
        <Route
          path='/product/:productId'
          element={
            <Suspense fallback={<Loader />}>
              <LazyProduct />
            </Suspense>
          }
        />
        <Route
          path='/cart'
          element={
            <Suspense fallback={<Loader />}>
              <LazyCart />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <Suspense fallback={<Loader />}>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense fallback={<Loader />}>
              <LazyContact />
            </Suspense>
          }
        />
      </Route>
      <Route path='/'>
        <Route
          path='/login'
          element={
            <Suspense fallback={<Loader />}>
              <LazyLogin />
            </Suspense>
          }
        />
        <Route
          path='/signup'
          element={
            <Suspense fallback={<Loader />}>
              <LazySignup />
            </Suspense>
          }
        />
      </Route>
      <Route path='/admin'>
        <Route
          path='/admin/addproduct'
          element={
            <Suspense fallback={<Loader />}>
              <LazyAddProduct />
            </Suspense>
          }
        />
      </Route>
      <Route path='/*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
