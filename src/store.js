import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
// import browseReducer from '../reducers/browseReducer';
import rootReducer from './reducers/index.js';
import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';


// const initialState = {};
// const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export const persistor = persistStore(store) 

export default { store, persistor };
// export default store;