import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
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
    successupdatingProduct: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    failingupdatingProduct: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    startAddingProduct: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    successAddingProduct: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    failureAddingProduct: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
    startGetttingProduct,
    successGettingProduct,
    failingGettingProduct,
    startDeletingProduct,
    successDeletingProduct,
    failingdeletingProduct,
} = productSlice.actions;

export default productSlice.reducer;