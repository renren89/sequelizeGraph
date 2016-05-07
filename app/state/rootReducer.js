/* @flow */

import { combineReducers } from 'redux';
import { helloWorld } from './sampleReducer';

export const rootReducer = combineReducers({
  helloWorld
})