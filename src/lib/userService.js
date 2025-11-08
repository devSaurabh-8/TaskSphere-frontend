import { API_BASE, jsonHeaders } from "./api";

// GET all users
export const fetchUsers = async () => {
  const res = await fetch(`${API_BASE}/users`, { headers: jsonHeaders() });
  if (!res.ok) throw new Error("Failed to load users");
  return res.json(); // expect { users: [...] } or array; handle in Dashboard
};

// CREATE user
export const createUser = async (payload) => {
  const res = await fetch(`${API_BASE}/users`, {
    method: "POST",
    headers: jsonHeaders(),
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json(); // { user }
};

// UPDATE user
export const updateUser = async (id, payload) => {
  const res = await fetch(`${API_BASE}/users/${id}`, {
    method: "PUT",
    headers: jsonHeaders(),
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update user");
  return res.json(); // { user }
};

// DELETE user
export const deleteUser = async (id) => {
  const res = await fetch(`${API_BASE}/users/${id}`, {
    method: "DELETE",
    headers: jsonHeaders(),
  });
  if (!res.ok) throw new Error("Failed to delete user");
  return res.json();
};
