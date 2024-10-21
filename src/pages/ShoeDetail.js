import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShoeDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);

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
      <h1>{shoe.name}</h1>
      <div className="image-container">
        <img src={defaultImage} alt={shoe.name} className="main-image" />
      </div>
      <h2>{shoe.price},00 €</h2>
      <button className='addCart' onClick={() => addToCart(shoe)}>Ajouter au Panier</button>
      <p>{shoe.gender === 'M' ? 'Homme' : shoe.gender === 'F' ? 'Femme' : 'Unisexe'}</p>
      <p>Couleur : {shoe.color}</p>
      <p>{shoe.description}</p>
    </div>
  );
};

export default ShoeDetail;