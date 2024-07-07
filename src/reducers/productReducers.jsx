import {ALL_PRODUCTS} from '../constants/productConstant'

import products from '../products.json';

const initialState = {
  products: products
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ALL_PRODUCTS:
      return products;

    default: 
      return state
    }
}

export default productsReducer;