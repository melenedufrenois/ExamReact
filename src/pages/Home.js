import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Home = () => {
  const { addToCart } = useCart();
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
      <h2>Our products</h2>
      <div className='shoeGrid'>
        {shoes.length > 0 ? (
          shoes.map((shoe, index) => (
            <div key={index} className='card'>
              <a href={`/shoe/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>                
                <img src={defaultImage} alt={shoe.name} className='image' />
                <h4>{shoe.name}</h4>
                <p>{shoe.price},00 $</p>
                <p>{shoe.gender === 'M' ? 'Male' : shoe.gender === 'F' ? 'Female' : 'Not defined'}</p>
                <p>{shoe.description.slice(0, 20)}{shoe.description.length > 20 ? '...' : ''}</p>
              </a>
              <Link to={`/shoe/${index}`} className='link'>Details</Link>
              <button className='addCart' onClick={() => addToCart(shoe)}>Add to cart</button>
            </div>
          ))
        ) : (
          <p>Empty store.</p>
        )}
      </div>
    </div>
  );
};

export default Home;