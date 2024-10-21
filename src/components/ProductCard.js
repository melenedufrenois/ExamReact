import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className='card'>
      <h3>{product.name}</h3>
      <p>Prix: {product.price} €</p>
      <p>Couleur: {product.color}</p>
      <p>{product.description}</p>
      {/* Bouton pour afficher les détails du produit */}
      <button className='button'>Voir Détails</button>
    </div>
  );
};

export default ProductCard;