/* @flow */

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import DevTools from './DevTools';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);