import React from 'react';
import styles from './ProductList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Actions/cartActions';
import products1 from '../products.json';
import { Link } from 'react-router-dom'

const handleImage = (imgName) => {
  return require(`../assets/images/${imgName}`);
}

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productData.products);

  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };

  

  return (
    <div className={styles.productcontainer}>
      <h1 className={styles.h1}>Available items on sale</h1>
      <ul className={styles.catalogue}>
        {products1.map(product => (
          <li key={product.id} className={styles.productitem}>
            <img src={handleImage(`${product.imagefile}`)} alt={`image${product.id}`}></img>
            <div className={styles.productdetails}>
              <div className={styles.descandprice}>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
              <button onClick={() => handleBuyNow(product)}><Link to="/cart">Buy Now</Link></button>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
