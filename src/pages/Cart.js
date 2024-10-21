import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const defaultImage = '/icone.webp';

  return (
    <div>
      <h1>Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        cart.map((shoe, index) => (
          <div key={index}>
            <h4>{shoe.name}</h4>
            <img src={defaultImage} alt={shoe.name} className='image-cart' />
            <p>{shoe.price},00 €</p>
            <button className='remove' onClick={() => removeFromCart(shoe)}>Supprimer</button>
            {index < cart.length - 1 && <hr />}
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;