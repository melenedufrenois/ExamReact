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
      .catch((error) => console.error('Erreur de chargement des Details', error));
  }, [id]);

  if (!shoe) {
    return <div>Loading...</div>;
  }

  const defaultImage = '/icone.webp';

  return (
    <div className='content'>
      <Link to={`/`} className='link'>Go back to our products</Link>
      <h1>{shoe.name}</h1>
      <div className="image-container">
        <img src={defaultImage} alt={shoe.name} className="main-image" />
      </div>
      <h2>{shoe.price},00 $</h2>
      <button className='addCart' onClick={() => addToCart(shoe)}>Add to cart</button>
      <p>Shoes for {shoe.gender === 'M' ? 'Male' : shoe.gender === 'F' ? 'Female' : 'Not defined'}.</p>
      <p>Color : {shoe.color}.</p>
      <p>{shoe.description}</p>
    </div>
  );
};

export default ShoeDetail;