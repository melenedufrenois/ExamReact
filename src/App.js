import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShoeDetail from './pages/ShoeDetail';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/shoe/:id',
    element: (
      <>
        <Header />
        <ShoeDetail />
        <Footer />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;