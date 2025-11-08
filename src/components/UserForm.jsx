import React, { useState, useEffect } from "react";

const UserForm = ({ initialData, onSubmit, type = "create" }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    password: "",
  });

  useEffect(() => {
    if (initialData)
      setForm({
        name: initialData.name || "",
        email: initialData.email || "",
        city: initialData.city || "",
        password: "", 
      });
  }, [initialData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">
        {type === "edit" ? "Edit User" : "Create New User"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full rounded-md"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="border p-2 w-full rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder={
            type === "edit"
              ? "Enter new password (optional)"
              : "Set password"
          }
          value={form.password}
          onChange={handleChange}
          className="border p-2 w-full rounded-md"
          required={type !== "edit"}
        />

        <div className="flex justify-end gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            {type === "edit" ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
