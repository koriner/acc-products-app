//
// Product module actions
//

import productsJson from 'constants/products.json';

// Just a simple sleep delay to simulate loading
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms ));


// Action types
export const GET_PRODUCTS = 'products/GET_PRODUCTS';


// Action creators

/**
 * Loads all products. This is just using static JSON but simulating
 * a short delay for the loading time.
 */
export const getProducts = () => {
  return async dispatch => {
    await delay(2000);
    dispatch({
      type: GET_PRODUCTS,
      payload: {
        products: productsJson
      }
    })
  }
}