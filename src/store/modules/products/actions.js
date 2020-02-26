//
// Product module actions
//

import productsJson from 'constants/products.json';

// Just a simple sleep delay to simulate loading
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms ));


// Action types
export const GET_PRODUCTS = 'products/GET_PRODUCTS';
export const SET_PRODUCT_TYPES = 'products/SET_PRODUCT_TYPES';

// Action creators

/**
 * Loads all products. This is just using static JSON but simulating
 * a short delay for the loading time.
 */
export const getProducts = () => {
  return async dispatch => {
    await delay(1000);

    dispatch({
      type: GET_PRODUCTS,
      payload: {
        products: productsJson
      }
    });

    // Filter and find unique types for all possible products
    let productTypes = [];
    productsJson.forEach(product => {
      if (product.type && !productTypes.includes(product.type)) {
        productTypes.push(product.type);
      }
    });

    dispatch({
      type: SET_PRODUCT_TYPES,
      payload: {
        productTypes
      }
    });
  }
}