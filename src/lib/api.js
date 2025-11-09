
export const API_BASE =
  import.meta.env.VITE_API_BASE?.trim() ||
  "https://tasksphere-backend-vz2t.onrender.com/api";

//  Debug
if (typeof window !== "undefined") {
  console.log("🌍 API Base URL Loaded:", API_BASE);
}

//  Token Helpers
export const getToken = () => localStorage.getItem("ts_token");
export const setToken = (t) => localStorage.setItem("ts_token", t);
export const clearToken = () => localStorage.removeItem("ts_token");

//  Auth Headers
export const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

//  JSON Headers
export const jsonHeaders = () => ({
  "Content-Type": "application/json",
  ...authHeaders(),
});
