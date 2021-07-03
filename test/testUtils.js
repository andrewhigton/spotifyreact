import rootReducer from '../src/reducers/index.js';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';

export const storeFactory = (initialState) => {
	return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}