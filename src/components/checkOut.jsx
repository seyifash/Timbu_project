import React from 'react';
import { useSelector } from 'react-redux';
import styles from './checkout.module.css'

const CheckOut = () => {

    const cart = useSelector(state => state.cartData.cart);
    const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);


  return (
    <div className={styles.container}>
        <span>Payment Details</span>
        <div className={styles.payment}>
            <div className={styles.pay1}>
                <span>Make payment via </span>
                <div className={styles.slide1}>
                    <span>Bank transfer</span>
                    <div className="entry">
                        <div className="input">
                            <label htmlFor='BankName'>Bank Name</label>
                            <input type="text" name="BankName" className="entry1" />
                        </div>
                        <div className="input">
                            <label htmlFor='AccountNumber'>Account Number</label>
                            <input type="text" name="AccountNumber" className="entry1" />
                        </div>
                </div>
                    <div className="input">
                            <label htmlFor='Accountname'>Account name</label>
                            <input type="text" name="Accountname" className="entry1" />
                    </div>
                    <div className={styles.btn}>
                        <span>I have made the transfer</span>
                    </div>
                </div>
                <div className={styles.slide2}>
                <span>Credit/debit card</span>
                <div className="entry">
                        <div className="input">
                            <label htmlFor='cardnumber'>card number</label>
                            <input type="text" name="number" placeholder='0000 0000 0000 0000' className="entry1" />
                        </div>
                        <div className="input">
                            <label htmlFor="cvv">cvv</label>
                            <input type="text" name="cvv" placeholder='2022345890' className="entry1" />
                        </div>
                    </div>
                    <div className="input">
                            <label htmlFor='expirydate'>expiry date</label>
                            <input type="text" name="expirydate" placeholder='11/20' className="entry1" />
                    </div>
                    <div className={styles.btn}>
                        <span>Make Payment</span>
                    </div>
                </div>
            </div>
            <div className={styles.pay2}>
                <span>Payment Summary</span>
                <span>Total Amount to be paid</span>
                <span>{totalPrice}</span>
            </div>
        </div>
    </div>
  )
}

export default CheckOut