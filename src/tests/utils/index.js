//
// Helpers for working with tests
//

import { createStore, applyMiddleware } from 'redux';
import reducer from 'store/reducer';
import { middlewares } from 'store/store';

export const testStore = (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducer, initialState);
}
