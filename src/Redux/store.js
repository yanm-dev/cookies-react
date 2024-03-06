import {createStore, applyMiddleware} from 'redux';
import cookieReducer from './cookieReducer';
import promiseMiddleware from 'redux-promise-middleware';


export default createStore(cookieReducer, applyMiddleware(promiseMiddleware) );