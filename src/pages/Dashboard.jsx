import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../lib/api"; 
import ProfileCard from "../components/ProfileCard";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  //  Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_BASE}/users`);
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //  Delete a user
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
await axios.delete(`${API_BASE}/users/${id}`);
alert("🗑️ User deleted successfully!");
fetchUsers();

    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">User Management</h2>
        <button
          onClick={() => nav("/create")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          + Create New User
        </button>
      </div>

      {/* User Cards */}
      <div className="flex flex-wrap gap-6">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <ProfileCard
              key={user._id}
              user={user}
              onView={() => nav(`/user/${user._id}`)}
              onEdit={() => nav(`/edit/${user._id}`)}
              onDelete={() => handleDelete(user._id)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No users found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
