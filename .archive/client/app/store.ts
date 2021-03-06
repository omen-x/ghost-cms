import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducer';


const composeEnhancers = typeof window === 'object'
// @ts-ignore
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);


const store = createStore(appReducer, enhancer);

export default store;
