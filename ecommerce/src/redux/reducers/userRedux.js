import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: null,
      isFetching:false,
      error: false,
    },
    reducers: {
      startLogin: (state ) => {
        state.isFetching = true
      },
      successLogin: (state ,action) => {
        state.isFetching = false
        state.currentUser = action.payload;
      },
      
    },
  });
  
  export const {  } = cartSlice.actions;
  export default cartSlice.reducer;