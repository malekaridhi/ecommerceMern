import { startLogin, successLogin, faledLogin } from "../userRedux";
import {startGetttingProduct, successGettingProduct, failingGettingProduct, startDeletingProduct, successDeletingProduct, failingdeletingProduct } from "../productRedux"
import { publicRequest,userRequest } from "../../reqMethods";

export const login = async(dispatch, user) =>{
 dispatch(startLogin());
 try {
     const res = await publicRequest.post("/auth/login",user);
     console.log(res.data)
     dispatch(successLogin(res.data))
 } catch (error) {
     dispatch(faledLogin())
 }


}
export const getProduct = async(dispatch) =>{
    dispatch(startGetttingProduct());
    try {
        const res = await publicRequest.get("/product");
        console.log("this shitty",res.data)
        dispatch(successGettingProduct(res.data))
    } catch (error) {
        dispatch(failingGettingProduct())
    }
   
   
   }

   export const deleteProduct = async (id, dispatch) => {
    dispatch(startDeletingProduct());
    try {
    //   const res = await userRequest.delete(`/products/${id}`);
      dispatch(successDeletingProduct(id));
    } catch (err) {
      dispatch(failingdeletingProduct());
    }
  };