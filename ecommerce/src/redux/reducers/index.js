import { combineReducers } from 'redux'
import {user}from "./userReducer"
import { cart } from './cartReducer';
const rootReducer = combineReducers({
 userState : user ,
 cartState:cart,
 
   });
   
   export default rootReducer