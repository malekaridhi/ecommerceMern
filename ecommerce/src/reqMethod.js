import axios from "axios";
 const BASE_URL = "http://localhost:8000/api/"
 const TOkEN = ""
 export const publicRequest =  axios.create({
     baseURL:BASE_URL,
 });
 export const userRequest = axios.create({
     baseURL:BASE_URL,
     headers:{token,"bearer"}
 })