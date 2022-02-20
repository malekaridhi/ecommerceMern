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
      startLogin: (state ) => {
        state.isFetching = true
      },
    },
  });
  
  export const {  } = cartSlice.actions;
  export default cartSlice.reducer;