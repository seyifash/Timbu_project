import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './cart.module.css';
import products1 from '../products.json';
import { addToCart, removeFromCart } from '../Actions/cartActions';
import { Link } from 'react-router-dom'

const handleImage = (imgName) => {
  if (imgName === undefined) {
    return ''
  } else {
    return require(`../assets/images/${imgName}`);
  }
  
}

const Cart = () => {
  const cart = useSelector(state => state.cartData.cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const dispatch = useDispatch();

  const handleBuyNow = (product) => {
    const productWithQuantity = {
      ...product,
      quantity: 1,
      totalPrice: product.price
    };
    dispatch(addToCart(productWithQuantity));
  };


  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };


  return (
    <div className={styles.cart}>
      {cart.length === 0 ?  ( <h2 className={styles.h1}>No items here</h2>) : 
      (
      <div className={styles.container}>
         <h1 className={styles.h2}>View items in your cart</h1>
        <ul className={styles.items}>
        {cart.map(item => (
          <li key={item.id} className={styles.li}>
            <img src={handleImage(`${item.imagefile}`)} alt={`image${item.id}`}  className={styles.img}></img>
            <div className={styles.desc}>
              <h2 className={styles.name}>{item.description}</h2>
              <p className={styles.price}>Price: #{item.price}</p>
              <p><span>Quantity:</span> {item.quantity}</p>
            </div>
            <span className={styles.sp} onClick={() => handleRemoveItem(item.id)}><i class='bx bxs-trash-alt'></i></span>
          </li>
        ))}
        </ul>
        <span className={styles.total}>Total: #{totalPrice}</span>
        <div className={styles.div}><Link to="/checkout" className={styles.orders}>Proceed to checkout</Link></div>
      </div>
      )
      }
      {cart.length > 0 && <div className={styles.container2}>
        <h1 className={styles.h2}>Similar Items</h1>
        <div className={styles.cat2}>
          {products1.slice(4, 5).map(product => (
            <div key={product.id} className={styles.li2}>
              <img className={styles.img2} src={handleImage(`${product.imagefile}`)} alt={`image${product.id}`}></img>
              <div className={styles.productdetails}>
                <div className={styles.descandprice}>
                <p>price: #{product.price}</p>
                  <p>Avaliable pieces: 6</p>
                </div>
                <button onClick={() => handleBuyNow(product)}><Link to="/cart">Add to cart</Link></button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      }
    </div>
  );
};

export default Cart;
