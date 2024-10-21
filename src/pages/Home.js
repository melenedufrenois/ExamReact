import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('/shoes')
      .then((res) => res.json())
      .then((data) => setShoes(data))
      .catch((error) => console.error('Erreur de chargement des chaussures', error));
  }, []);

  const defaultImage = '/icone.webp';

  return (
    <div>
      <h1>Liste des Chaussures</h1>
      <div className='shoeGrid'>
        {shoes.length > 0 ? (
          shoes.map((shoe, index) => (
            <div key={index} className='card'>
              <img src={defaultImage} alt={shoe.name} className='image' /> {/* Affichage de l'image par défaut */}
              <h2>{shoe.name}</h2>
              <p>Prix : {shoe.price} €</p>
              <p>Couleur : {shoe.color}</p>
              <Link to={`/shoe/${index}`} className='link'>Voir Détails</Link>
            </div>
          ))
        ) : (
          <p>Aucune chaussure disponible.</p>
        )}
      </div>
    </div>
  );
};

export default Home;