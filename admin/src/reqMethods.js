import axios from "axios";
 const BASE_URL = "http://localhost:8000/api/"
 const TOKEN = process.env.REACT_APP_TOKEN
 console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser))
 export const publicRequest =  axios.create({
     baseURL:BASE_URL,
 });
 export const userRequest = axios.create({
     baseURL:BASE_URL,
     headers:{ token:`Bearer ${TOKEN}`}
 })