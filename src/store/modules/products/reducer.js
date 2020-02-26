//
// Product module reducer
//

// Use immer for data immutability
import produce from 'immer';

// Import possible action types
import { GET_PRODUCTS } from './actions';

// Initial default state for reducer
export const INITIAL_STATE = {
  products: []
};

// Main reducer method
export default (state = INITIAL_STATE, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {

      case GET_PRODUCTS:
        draft.products = payload.products;
        break;

      default:
        break;
        
    }
  });
};