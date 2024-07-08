import React from 'react';
import Logo from './logocomponent';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.details}>
        <span className={styles.home}>Home</span>
        <span className={`${styles.shop} ${styles.active}`}>Shop</span>
        <span className={styles.cart}>Cart</span>
      </div>
    </div>
  )
}

export default NavBar