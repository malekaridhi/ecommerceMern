import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: null,
      isFetching:false,
      error: false,
      users:[],
    },
    reducers: {
      startLogin: (state ) => {
        state.isFetching = true;
      },
      successLogin: (state ,action) => {
        state.isFetching = false
        state.currentUser = action.payload;
      },
      faledLogin: (state) => {
        state.isFetching = false
        state.error = true;
      },
       //GET ALL
    startGetttingUser: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    successGettingUser: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    failingGettingUser: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    startDeletingUser: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    successDeletingUser: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    failingdeletingUser: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    startUpdatingUser: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    successUpdatingUser: (state, action) => {
      state.isFetching = false;
      state.users[
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user;
    },
    failingUpdatingUser: (state) => {
      state.isFetching = false;
      state.error = true;
    },
   
    },
  });
  
  export const { startLogin, 
    successLogin,
     faledLogin,
     startGetttingUser,
     successGettingUser,
     failingGettingUser,
     startDeletingUser,
     successDeletingUser,
     failingdeletingUser,
     startUpdatingUser,
     successUpdatingUser,
     failingUpdatingUser,
     
    } = userSlice.actions;
  export default userSlice.reducer;