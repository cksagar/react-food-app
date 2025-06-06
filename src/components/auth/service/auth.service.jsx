import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

const API_URL = `${BASE_URL}/auth/`; // ✅ Fixed quotes
console.log("BASE_URL =", import.meta.env.VITE_BASE_URL);

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // ✅ Important for session-based auth
  headers: {
    "Content-Type": "application/json",
  },
});

class AuthService {
  // Login method
  login(email, password) {
    return axiosInstance
      .post("signin", { email, password })
      .then((res) => res.data);
  }

  // Signup method
  signup(email, password) {
    return axiosInstance
      .post("signup", { email, password })
      .then((res) => res.data);
  }

  // Logout method
  logout() {
    return axiosInstance.post("signout").then((res) => {
      return res.data;
    });
  }

  // Optional: You could also remove localStorage-based user if not using tokens
  removeLocalSession() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
