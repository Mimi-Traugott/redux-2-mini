import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import hackerNewsReducer from './hackerNewsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(hackerNewsReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))

export default store;