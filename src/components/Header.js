import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='title'>E-commerce</div>
        <nav>
          <ul className='navList'>
            <li><Link to="/">Catalogue</Link></li>
            <li><Link to="/cart">Panier</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;