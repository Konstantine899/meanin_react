import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './redux/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './App';

// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       const result = next(action);
//       console.log('Middleware', store.getState());
//       return result;
//     };
//   };
// }

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, reduxThunk)
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
