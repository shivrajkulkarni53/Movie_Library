import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:3000",// your backend URL
  baseURL: "https://movie-library-me8c.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});

// OPTIONAL: response interceptor (safe for college projects)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
