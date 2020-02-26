import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// Export the middlewares so tests can replicate the same ones
export const middlewares = [ thunk ];

// Export the configureStore method so tests can utilise it too
export const configureStore = applyMiddleware(...middlewares)(createStore);

// The main store creation
export const store = configureStore(rootReducer);