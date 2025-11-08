import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../lib/api";
import UserForm from "../components/UserForm";

const CreateUser = () => {
  const nav = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await axios.post(`${API_BASE}/users`, data);
      alert("✅ New user created successfully!");
      nav("/dashboard");
    } catch (err) {
      alert("❌ Failed to create user!");
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <UserForm onSubmit={handleSubmit} type="create" />
    </div>
  );
};

export default CreateUser;
