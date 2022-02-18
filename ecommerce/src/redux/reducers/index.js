import { combineReducers } from 'redux'
import  cartReducer  from '../cartRedux';
const rootReducer = combineReducers({
  cart:cartReducer,
 
   });
   
   export default rootReducer