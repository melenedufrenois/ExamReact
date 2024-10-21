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
      <div style={styles.shoeGrid}>
        {shoes.length > 0 ? (
          shoes.map((shoe, index) => (
            <div key={index} style={styles.card}>
              <img src={defaultImage} alt={shoe.name} style={styles.image} /> {/* Affichage de l'image par défaut */}
              <h2>{shoe.name}</h2>
              <p>Prix : {shoe.price} €</p>
              <p>Couleur : {shoe.color}</p>
              <Link to={`/shoe/${index}`} style={styles.link}>Voir Détails</Link>
            </div>
          ))
        ) : (
          <p>Aucune chaussure disponible.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  shoeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  link: {
    textDecoration: 'none',
    color: 'blue',
    fontWeight: 'bold',
  },
};

export default Home;