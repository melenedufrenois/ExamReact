import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li>Nom du site</li>
          <li><Link to="/">Catalogue</Link></li>
          <li><Link to="/cart">Panier</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  }
};

export default Header;
