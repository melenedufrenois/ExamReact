import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>Prix: {product.price} €</p>
      <p>Couleur: {product.color}</p>
      <p>{product.description}</p>
      {/* Bouton pour afficher les détails du produit */}
      <button style={styles.button}>Voir Détails</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center'
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default ProductCard;