import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoeDetail from './pages/ShoeDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
    alert(`${shoe.name} added to your cart !`);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/shoe/:id" element={<ShoeDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
