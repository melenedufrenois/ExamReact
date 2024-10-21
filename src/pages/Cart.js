import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const defaultImage = '/icone.webp';

  const totalAmount = cart.reduce((acc, shoe) => acc + shoe.price, 0);

  return (
    <div>
      <h1>Your cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((shoe, index) => (
          <div key={index}>
            <h4>{shoe.name}</h4>
            <img src={defaultImage} alt={shoe.name} className='image-cart' />
            <p>{shoe.price},00 $</p>
            <button className='remove' onClick={() => removeFromCart(shoe)}>Remove</button>
            {index < cart.length - 1 && <hr />}
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div>
          <h2>Total amount: {totalAmount},00 $</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;