import { combineReducers } from 'redux'
import { dCart } from "./dCart";
import { dCustomer } from "./dCustomer";

export const reducers = combineReducers({
    dCustomer,
    dCart
})