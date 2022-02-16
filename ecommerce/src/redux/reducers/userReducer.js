import { USER } from '../actions/type'

  const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
   
  };
  export const user =(state = initialState, action)=> {
    switch (action.type) {
        case USER:
          return {
            ...state,
            currentUser:action.payload
          };
        default:
          return state;
      }
    }