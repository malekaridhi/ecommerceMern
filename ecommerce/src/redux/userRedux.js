import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
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
      faledLogin: (state) => {
        state.isFetching = false
        state.error = true;
      },
    },
  });
  
  export const { startLogin, successLogin, faledLogin } = userSlice.actions;
  export default userSlice.reducer;