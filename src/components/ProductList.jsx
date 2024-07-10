import React, { useState } from 'react';
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
  const [more, setMore] = useState(false);

  const handleBuyNow = (product) => {
    const productWithQuantity = {
      ...product,
      quantity: 1,
      totalPrice: product.price
    };
    dispatch(addToCart(productWithQuantity));
  };

  const handleMoreItems = () => {
      setMore(prevState => !prevState)
  }
  

  return (
    <div className={styles.contain}>
    <div className={styles.search}>
      <input type="text" placeholder='Search' className={styles.input} />
      <div className={styles.filter}>
        <span className={styles.filt}>Filters</span>
        <div className={styles.cat}>
          <span>male</span>
          <span>adult</span>
        </div>
        <div className={styles.cat}>
          <span>female</span>
          <span>kids</span>
        </div>
      </div>
      <span className={styles.sea}>Search</span>
    </div>
      <div className={styles.productcontainer}>
      <h1 className={styles.h1}>Available items on sale</h1>
      {!more && <ul className={styles.catalogue}>
        {products1.slice(0, 3).map(product => (
          <li key={product.id} className={styles.productitem}>
            <img src={handleImage(`${product.imagefile}`)} alt={`image${product.id}`}></img>
            <span className={styles.span}>40% off</span>
            <div className={styles.productdetails}>
              <div className={styles.descandprice}>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
              <button onClick={() => handleBuyNow(product)}><Link to="/cart">Buy Now</Link></button>
            </div>
            
          </li>
        ))}
      </ul>}
      {!more && <button className={styles.btn} onClick={handleMoreItems}>
        See More
      </button>}
      {more && <ul className={styles.catalogue}>
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
      </ul>}
      {more && <button className={styles.btn} onClick={handleMoreItems}>
         See Less
      </button>}
      <div className={styles.category} >
        <h1 className={styles.h1}>Shop by category</h1>
          <ul className={styles.catalogue}>
            {products1.slice(0, 3).map(product => (
              <li key={product.id} className={styles.productitem}>
                <img src={handleImage(`${product.imagefile}`)} alt={`image${product.id}`}></img>
                <div className={styles.productdetails}>
                  <div className={styles.descandprice}>
                    <p>{product.category}</p>
                    <p>${product.price}</p>
                  </div>
                  <button onClick={() => handleBuyNow(product)}><Link to="/cart">Shop Now</Link></button>
                </div>  
              </li>
            ))}
          </ul>
          <button className={styles.btn}>
         View More Categories
      </button>
        </div>
        <h1 className={styles.h1}>Available items on sale</h1>
      {!more && <ul className={styles.catalogue}>
        {products1.slice(0, 6).map(product => (
          <li key={product.id} className={styles.productitem}>
            <img src={handleImage(`${product.imagefile}`)} alt={`image${product.id}`}></img>
            <span className={styles.span}>40% off</span>
            <div className={styles.productdetails}>
              <div className={styles.descandprice}>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
              <button onClick={() => handleBuyNow(product)}><Link to="/cart">Buy Now</Link></button>
            </div>
            
          </li>
        ))}
      </ul>}
      </div>
      </div>
  );
};

export default ProductList;
