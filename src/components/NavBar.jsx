import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <span>Mr whizzy</span>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop" className="active">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </header>
  )
}

export default NavBar