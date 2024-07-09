import React from 'react';
import styles from './Footer.module.css';
import Logo from './logocomponent';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoanddetails}>
        <div className={styles.logocontainer}>
          <Logo />
        </div>
        
        
        <div className={styles.details}>
          <span className={styles.home}>Home</span>
          <span className={`${styles.shop}`}>Shop</span>
          <span className={styles.cart}>Cart</span>
        </div>
      </div>
      

      <form className={styles.feedback}>
        <label className={styles.feedbackquestion}>Have a question or complaint? Send us a message!</label>
        <textarea type='text' placeholder='Talk to us.......' className={styles.textarea}/>
        <button type='submit' className={styles.button}>
          <span className={styles.buttonvalue}>Send message</span>
        </button>
      </form>
    </div>
  )
}

export default Footer