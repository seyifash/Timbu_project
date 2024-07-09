import React from 'react';
import styles from './logocomponent.module.css';

const handleImage = (imgName) => {
  return require(`../assets/images/${imgName}`);
}

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.imglogo} src={handleImage('mrwhizzystore.png')} alt=''></img>
    </div>
  )
}


export default Logo;