import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShoeDetail = () => {
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

  return (
    <div>
      <h1>{shoe.name}</h1>
      <p>Prix : {shoe.price} €</p>
      <p>Description : {shoe.description}</p>
      <p>Couleur : {shoe.color}</p>
      <p>Pour : {shoe.gender === 'M' ? 'Homme' : shoe.gender === 'F' ? 'Femme' : 'Unisexe'}</p>
    </div>
  );
};

export default ShoeDetail;