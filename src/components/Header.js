import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='title'>Adadas</div>
        <nav>
          <ul className='navList'>
            <li><Link to="/">Our Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;