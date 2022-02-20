import { combineReducers } from 'redux'
import  cartReducer  from '../cartRedux';
import userReducer from '../userRedux'
const rootReducer = combineReducers({
  cart:cartReducer,
  user:userReducer,
   });
   
   export default rootReducer