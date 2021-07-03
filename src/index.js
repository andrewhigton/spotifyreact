import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './store';
// import  from './store';

// const store = createStore(rootReducer);

// export const persistor = persistStore(store) 

ReactDOM.render(
  
    <Provider store={store}>

    	<App />

    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

     //  <PersistGate persistor={persistor}>
    	// <App />
     //  </PersistGate>