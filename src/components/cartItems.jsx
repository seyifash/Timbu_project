import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cartData.cart);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
