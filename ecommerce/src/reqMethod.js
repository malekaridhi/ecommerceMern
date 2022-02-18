import axios from "axios";
 const BASE_URL = "http://localhost:8000/api/"
 const TOKEN = ""
 export const publicRequest =  axios.create({
     baseURL:process.env.BASE_URL,
 });
 export const userRequest = axios.create({
     baseURL:BASE_URL,
     headers:{ token:`Bearer ${process.env.TOKEN}`}
 })