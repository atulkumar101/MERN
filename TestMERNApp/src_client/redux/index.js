import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from "redux";

import reducer from './reducer';

//const initialState = window.__preloaded__;
//delete window.__preloaded__;

const persistedState = localStorage.getItem('redux-store')?JSON.parse(localStorage.getItem('redux-store')):{};

const store = createStore(reducer,persistedState, applyMiddleware(thunk, logger)); 

//store.getState();
store.subscribe(() => {
  localStorage.setItem('redux-store', JSON.stringify(store.getState()));
})
//store.dispatch(() => {}); 

export default store;