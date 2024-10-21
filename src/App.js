import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoeDetail from './pages/ShoeDetail';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
    alert(`${shoe.name} a été ajouté au panier !`);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/shoe/:id" element={<ShoeDetail addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
