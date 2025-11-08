import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../lib/api";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_BASE}/users/${id}`);
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) return <p className="text-center mt-10">Loading user...</p>;

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.city}</p>
      <button
        onClick={() => nav("/dashboard")}
        className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default ViewUser;
