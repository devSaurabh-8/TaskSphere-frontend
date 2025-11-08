import { API_BASE, jsonHeaders } from "./api";

//  Fetch all tasks
export const fetchTasks = async () => {
  const res = await fetch(`${API_BASE}/tasks`, {
    headers: jsonHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
};

//  Create a new task
export const createTask = async (data) => {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: jsonHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create task");
  return res.json();
};

//  Update task
export const updateTask = async (id, data) => {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "PATCH",
    headers: jsonHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update task");
  return res.json();
};

//  Delete task
export const deleteTask = async (id) => {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "DELETE",
    headers: jsonHeaders(),
  });
  if (!res.ok) throw new Error("Failed to delete task");
  return res.json();
};
