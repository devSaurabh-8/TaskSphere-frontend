//  Safe API base URL setup with fallback
export const API_BASE =
  import.meta.env.VITE_API_BASE?.trim() || "http://localhost:5000/api";

// Debug log (only runs once)
if (typeof window !== "undefined") {
  console.log("🌍 API Base URL:", API_BASE);
}

//  Token Helpers
export const getToken = () => localStorage.getItem("ts_token");
export const setToken = (t) => localStorage.setItem("ts_token", t);
export const clearToken = () => localStorage.removeItem("ts_token");

//  Auth headers
export const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

//  JSON headers
export const jsonHeaders = () => ({
  "Content-Type": "application/json",
  ...authHeaders(),
});
