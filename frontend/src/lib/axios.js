import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:3000",// your backend URL
  baseURL: 'https://movie-library-me8c.onrender.com'
});

export default api;
