import axios from 'axios';

const initialState = {
    user: {cart: []},
    items: [],
    loading: false,
    cart: [],
    cartFull: false
}
const GET_USER = 'GET_USER';
const GET_ITEMS = 'GET_ITEMS';
const GET_CART = 'GET_CART';
const GET_TOTAL = 'GET_TOTAL';
const CHANGE_CART = 'CHANGE_CART'

export function getUser(user) {
    return {
        type:GET_USER,
        payload: user
    }
}
export function changeCart(user) {
    return {
        type:CHANGE_CART,
        payload: user
    }
}
export function getItems(){
    const items = axios.get('/menuItems')
return {
    type:GET_ITEMS, 
    payload: items 
    }
}
export function getCart(){
    const items = axios.get('/cart')
return {
    type:GET_CART,
    payload: items
    }
}
export function getTotal(){
    const items = axios.get('/checkout')
return {
    type:GET_TOTAL,
    payload: items
    }
}
export default function cookieReducer(state = initialState, action){
const {type, payload} = action;
switch(type){
    case GET_USER:
        return {...state, user: payload}
    case CHANGE_CART:
        return {...state, cartFull: payload}
    case GET_ITEMS + '_PENDING':
        return {...state, loading:true}
    case GET_ITEMS + '_FULFILLED':
        return {...state, loading:false, items: payload.data}
    case GET_ITEMS + '_REJECTED':
        return initialState;
    case GET_CART + '_PENDING':
        return {...state, loading:true}
    case GET_CART + '_FULFILLED':
        return {...state, loading:false, user: {...state.user, cart:payload.data}}
    case GET_CART + '_REJECTED':
        return initialState;
    case GET_TOTAL + '_PENDING':
        return {...state, loading:true}
    case GET_TOTAL + '_FULFILLED':
        return {...state, loading:false, user: {...state.user, total:payload.data.total}}
    case GET_TOTAL + '_REJECTED':
        return initialState;
    default:
        return state
    }
}