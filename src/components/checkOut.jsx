import React from "react";
import { useSelector } from "react-redux";
import styles from "./checkout.module.css";

const CheckOut = () => {
  const cart = useSelector((state) => state.cartData.cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className={styles.container}>
      
      <span className={styles.span}>Payment Details</span>
      <div className={styles.pay3}>
          <div>
            <span className={`${styles.span2} ${styles.top}`}><strong>Payment Summary</strong></span>
            <span className={styles.span2}>Total Amount to be paid</span>
            <span className={styles.span2}><strong>{totalPrice}</strong></span>
          </div>
          
        </div>
      <div className={styles.payment}>
        <div className={styles.pay1}>
          <span>Make payment via </span>
          <div className={styles.slide1}>
            <span>Bank transfer</span>
            <div className={styles.entry}>
              <div className={styles.input}>
                <label htmlFor="BankName">Bank Name</label>
                <input type="text" name="BankName" className={styles.entry1} />
              </div>
              <div className={styles.input}>
                <label htmlFor="AccountNumber">Account Number</label>
                <input type="text" name="AccountNumber" className={styles.entry1} />
              </div>
            </div>
            <div className={styles.input}>
              <label htmlFor="Accountname">Account name</label>
              <input type="text" name="Accountname" className={styles.entry2} />
            </div>
            <div className={styles.btn}>
              <span>I have made the transfer</span>
            </div>
          </div>
          <div className={styles.slide2}>
            <span>Credit/debit card</span>
            <div className={styles.entry}>
              <div className={styles.input}>
                <label htmlFor="cardnumber">card number</label>
                <input
                  type="text"
                  name="number"
                  placeholder="0000 0000 0000 0000"
                  className={styles.entry1}
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="cvv">cvv</label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="2022345890"
                  className={styles.entry1}
                />
              </div>
            </div>
            <div className={styles.input}>
              <label htmlFor="expirydate">expiry date</label>
              <input
                type="text"
                name="expirydate"
                placeholder="11/20"
                className={styles.entry2}
              />
            </div>
            <div className={styles.btn}>
              <span>Make Payment</span>
            </div>
          </div>
        </div>
        <div className={styles.pay2}>
          <div>
            <span className={`${styles.span2} ${styles.top}`}><strong>Payment Summary</strong></span>
            <span className={styles.span2}>Total Amount to be paid</span>
            <span className={styles.span2}><strong>{totalPrice}</strong></span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
