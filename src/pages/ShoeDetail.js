import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const ShoeDetail = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/shoes.json')
      .then((res) => res.json())
      .then((data) => setShoe(data[id]))
      .catch((error) => console.error('Erreur de chargement des détails', error));
  }, [id]);

  if (!shoe) {
    return <div>Chargement...</div>;
  }

  const defaultImage = '/icone.webp';

  return (
    <div className='content'>
      <Link to={`/`} className='link'>Retour accueil</Link>
      <h1>{shoe.name}</h1>
      <div className="image-container">
        <img src={defaultImage} alt={shoe.name} className="main-image" />
      </div>
      <h2>{shoe.price},00 €</h2>
      <button className='addCart' onClick={() => addToCart(shoe)}>Ajouter au Panier</button>
      <p>Chaussures pour {shoe.gender === 'M' ? 'Homme' : shoe.gender === 'F' ? 'Femme' : 'Unisexe'}.</p>
      <p>Couleur : {shoe.color}.</p>
      <p>{shoe.description}</p>
    </div>
  );
};

export default ShoeDetail;