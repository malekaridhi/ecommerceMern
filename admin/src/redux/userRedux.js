import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: null,
      users:[],
      isFetching:false,
      error: false,
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
    startGetttingProduct: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    successGettingProduct: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    failingGettingProduct: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    startDeletingProduct: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    successDeletingProduct: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    failingdeletingProduct: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    startUpdatingProduct: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    successUpdatingProduct: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    failingUpdatingProduct: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    },
  });
  
  export const { startLogin, successLogin, faledLogin } = userSlice.actions;
  export default userSlice.reducer;