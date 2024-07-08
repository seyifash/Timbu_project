import React from 'react';
import Logo from './logocomponent';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container">

      <Logo />
      
      <div className="details">
        <span className="home">Home</span>
        <span className="shop">Shop</span>
        <span className="cart">Cart</span>
      </div>

      <form className={styles.feedback}>
        <label className={styles.feedbackquestion}>Have a question or complaint? Send us a message!</label>
        <textarea type='text' placeholder='Talk to us.......' className={styles.textarea}></textarea>
        <button type='submit' className={styles.button}>
          <span className={styles.buttonvalue}>Send message</span>
        </button>
      </form>
    </div>
  )
}

export default Footer