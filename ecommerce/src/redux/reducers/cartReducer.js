import { CART } from "../actions/type";
const initialState = {
    products: [],
    quantity: 0,
    total: 0,
  };
  export const cart =(state = initialState, action)=> {
    switch (action.type) {
        case CART:
          return {
            ...state,
            currentUser:action.payload
          };
        default:
          return state;
      }
    }