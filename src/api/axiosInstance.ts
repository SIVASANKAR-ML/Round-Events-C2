import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g. http://localhost:8000
  withCredentials: true, // required for Frappe session cookies
  headers: {
    "Content-Type": "application/json",
    "X-Frappe-CSRF-Token": "fetch", // Frappe needs this for non-GET requests
  },
});

// Fix relative Frappe file URLs in every response
api.interceptors.response.use((response) => {
  const fixUrls = (obj: unknown): unknown => {
    if (typeof obj === "string") {
      return obj.startsWith("/files/") ? `${BASE_URL}${obj}` : obj;
    }
    if (Array.isArray(obj)) return obj.map(fixUrls);
    if (obj && typeof obj === "object") {
      return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, fixUrls(v)])
      );
    }
    return obj;
  };

  response.data = fixUrls(response.data);
  return response;
});

export default api;