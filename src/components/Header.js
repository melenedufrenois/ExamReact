import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='navList'>
          <li>E-commerce</li>
          <li><Link to="/">Catalogue</Link></li>
          <li><Link to="/cart">Panier</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;