import {ADD_TO_CART} from '../constants/productConstant'

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
