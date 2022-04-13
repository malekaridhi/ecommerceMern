import { combineReducers } from 'redux'
import userReducer from '../userRedux'
import productReducer from '../productRedux'
const rootReducer = combineReducers({
  user:userReducer,
  product:productReducer,
   });
   
   export default rootReducer