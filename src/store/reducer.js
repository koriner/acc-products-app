//
// Root reducer file to import and combine all module reducers
//

import { combineReducers } from 'redux';
import products from './modules/products/reducer';

// Combine and export all reducer modules required
export default combineReducers({
  products
});
