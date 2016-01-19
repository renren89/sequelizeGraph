import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/rootReducer';
import DevTools from '../DevTools';


const finalCreateStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  return store;
}