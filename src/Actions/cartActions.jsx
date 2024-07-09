import {ADD_TO_CART,
  REMOVE_ITEMS
} from '../constants/productConstant'

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});


export const removeFromCart = (id) => ({
  type: REMOVE_ITEMS,
  payload: id,
});