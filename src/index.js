import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';


import App from './components/app';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));
ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>
  , document.querySelector('#container'));
