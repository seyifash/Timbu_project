import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logocomponent';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <Logo />
      <ul>
        <li><Link to="/" className="active">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </header>
  )
}

export default NavBar