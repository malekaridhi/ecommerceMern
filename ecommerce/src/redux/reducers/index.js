import { combineReducers } from 'redux'
import  cartReducer  from '../cartRedux';
const rootReducer = combineReducers({
 cartState:cartReducer,
 
   });
   
   export default rootReducer