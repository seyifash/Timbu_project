import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Actions/cartActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productData.products);

  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleBuyNow(product)}>Buy Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
