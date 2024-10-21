import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; Wenov 2024 - Dufrénois Mélène</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: '0',
  }
};

export default Footer;
