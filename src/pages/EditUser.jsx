import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../lib/api";
import UserForm from "../components/UserForm";

const EditUser = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [user, setUser] = useState(null);

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

  const handleSubmit = async (data) => {
    try {
      await axios.put(`${API_BASE}/users/${id}`, data);
      alert("✅ User updated successfully!");
      nav("/dashboard");
    } catch (err) {
      alert("❌ Failed to update user!");
      console.error(err);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading user...</p>;

  return (
    <div className="p-8">
      <UserForm initialData={user} onSubmit={handleSubmit} type="edit" />
    </div>
  );
};

export default EditUser;
