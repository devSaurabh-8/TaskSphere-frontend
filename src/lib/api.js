export const API_BASE =
  import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export const getToken = () => localStorage.getItem("ts_token");
export const setToken = (t) => localStorage.setItem("ts_token", t);
export const clearToken = () => localStorage.removeItem("ts_token");

export const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const jsonHeaders = () => ({
  "Content-Type": "application/json",
  ...authHeaders(),
});
