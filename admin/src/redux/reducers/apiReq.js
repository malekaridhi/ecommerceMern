import { startLogin, successLogin, faledLogin } from "../userRedux";
import {
  startGetttingProduct,
  successGettingProduct,
  failingGettingProduct,
  startDeletingProduct,
  successDeletingProduct,
  failingdeletingProduct,
  startUpdatingProduct,
  successUpdatingProduct,
  failingUpdatingProduct,
  // startAddingProduct,
  // successAddingProduct,
  // failureAddingProduct
  addProductStart,
  addProductSuccess,
  addProductFailure,
  
  



} from "../productRedux";
import { 
  startGetttingUser,
  successGettingUser,
  failingGettingUser,
  startDeletingUser,
  successDeletingUser,
  failingdeletingUser,
  startUpdatingUser,
  successUpdatingUser,
  failingUpdatingUser,
   } from "../userRedux";
import { publicRequest, userRequest } from "../../reqMethods";

export const login = async (dispatch, user) => {
  dispatch(startLogin());
  try {
    const res = await publicRequest.post("/auth/login", user);
    // console.log(res.data);
    window.location.href = '/home'
    dispatch(successLogin(res.data));
  } catch (error) {
    dispatch(faledLogin());
  }
};
export const getProduct = async (dispatch) => {
  dispatch(startGetttingProduct());
  try {
    const res = await publicRequest.get("/product");
    console.log("this shitty", res.data);
    dispatch(successGettingProduct(res.data));
  } catch (error) {
    dispatch(failingGettingProduct());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(startDeletingProduct());
  try {
      const res = await userRequest.delete(`/product/${id}`);
    dispatch(successDeletingProduct(id));
  } catch (err) {
    dispatch(failingdeletingProduct());
  }
};
export const updateProduct = async (id,product,dispatch) => {
  dispatch(startUpdatingProduct());
  try {
    const res = await userRequest.put(`/product/${id}`, product);
    console.log(res.data)
    dispatch(successUpdatingProduct(res.data));
  } catch (err) {
    dispatch(failingUpdatingProduct());
    console.log(err)
  }
};

export const addProduct = async ( dispatch,product) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/product`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
    console.log(err)
  }
};
///*******************************users****************************************
export const getUser = async (dispatch) => {
  dispatch(startGetttingUser());
  try {
    const res = await publicRequest.get("/user");
    console.log("this shitty", res.data);
    dispatch(successGettingUser(res.data));
  } catch (error) {
    dispatch(failingGettingUser());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(startDeletingUser());
  try {
      const res = await userRequest.delete(`/user/${id}`);
    dispatch(successDeletingUser(id));
  } catch (err) {
    dispatch(failingdeletingUser());
  }
};
export const updateUser = async (id,user,dispatch) => {
  dispatch(startUpdatingUser());
  try {
    const res = await userRequest.put(`/user/${id}`, user);
    console.log(res.data)
    dispatch(successUpdatingUser(res.data));
  } catch (err) {
    dispatch(failingUpdatingUser());
    console.log(err)
  }
};

