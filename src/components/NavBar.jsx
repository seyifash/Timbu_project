import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './logocomponent';
import './NavBar.css';

const NavBar = () => {

      const [menu, setShowMenu] = useState(false);
      const location = useLocation();

      useEffect(() => {
        setShowMenu(false);
      }, [location]);

  const handleShowMenu = () => {
      setShowMenu(prevState => !prevState)
  }
  return (
    <header>
      <Logo />
      <div className="menu2" onClick={handleShowMenu}><i className='bx bx-menu'></i></div>
      <ul className={`ul2   ${menu ? 'active3' : ''}`}>
      <li className="menu3" onClick={handleShowMenu}><i class='bx bx-x'></i></li>
        <li><Link to="/" className="active">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </header>
  )
}

export default NavBar