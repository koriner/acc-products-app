// Product module reducer tests

import { INITIAL_STATE } from './reducer';
import {
  GET_PRODUCTS,
  SET_PRODUCT_TYPES,
} from './actions';
import reducer from './reducer';

describe('Products reducer', () => {
  // Test initial reducer state
  it ('should return initial state with no input', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(INITIAL_STATE);
  });

  // Test the GET_PRODUCTS action
  it ('should return new state for GET_PRODUCTS action', () => {
    const products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];

    const state = reducer(undefined, {});
    const newState = reducer(state, {
      type: GET_PRODUCTS,
      payload: { products }
    });

    expect(newState).toEqual({ products, productTypes: [] });
  });

  // Test the SET_PRODUCT_TYPES action
  it ('should correctly set unique product types in state', () => {
    const productTypes = ['type1', 'type2'];

    const state = reducer(undefined, {});
    const newState = reducer(state, {
      type: SET_PRODUCT_TYPES,
      payload: { productTypes }
    });

    expect(newState.productTypes).toEqual(productTypes);
  })
});
