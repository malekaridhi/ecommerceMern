import { startLogin, successLogin, faledLogin } from "../userRedux";

import { publicRequest } from "../../reqMethod";

export const login = async(dispatch, user) =>{
 dispatch(startLogin());
 try {
     const res = await publicRequest.post("/auth/login",user);
     dispatch(successLogin(res.data))
 } catch (error) {
     dispatch(faledLogin)
 }


}