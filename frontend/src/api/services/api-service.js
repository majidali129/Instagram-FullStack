import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  timeout: 10000,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
});

// Helper function to get a cookie by name
// const getCookie = (name) => {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
// };

// console.log(getCookie("accessToken"));

api.interceptors.request.use(
  (config) => {
    // const accessToken = getCookie("accessToken");
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized access - perhaps redirect to login");
      } else {
        console.error(
          `Error: ${error.response.status} - ${error.response.data.message}`
        );
        return error.response;
      }
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
