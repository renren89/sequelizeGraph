import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducers = {
  form: formReducer
};
const reducer = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);