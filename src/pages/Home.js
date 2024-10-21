import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ addToCart }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('/shoes.json')
      .then((res) => res.json())
      .then((data) => setShoes(data))
      .catch((error) => console.error('Erreur de chargement des chaussures', error));
  }, []);

  const defaultImage = '/icone.webp';

  return (
    <div className='content'>
      <h2>Notre catalogue</h2>
      <div className='shoeGrid'>
        {shoes.length > 0 ? (
          shoes.map((shoe, index) => (
            <div key={index} className='card'>
              <a href={`/shoe/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>                
                <img src={defaultImage} alt={shoe.name} className='image' />
                <h4>{shoe.name}</h4>
                <p>{shoe.price},00 €</p>
                <p>{shoe.gender === 'M' ? 'Homme' : shoe.gender === 'F' ? 'Femme' : 'Unisexe'}</p>
                <p>{shoe.description.slice(0, 20)}{shoe.description.length > 20 ? '...' : ''}</p>
              </a>
              <Link to={`/shoe/${index}`} className='link'>Voir Détails</Link>
              <button className='addCart' onClick={() => addToCart(shoe)}>Ajouter au Panier</button>
            </div>
          ))
        ) : (
          <p>Aucune chaussure n'est disponible pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default Home;