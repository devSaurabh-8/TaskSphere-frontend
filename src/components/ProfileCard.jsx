import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function ProfileCard({ user, onView, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-[260px] hover:shadow-lg transition">
      <FaUserCircle size={50} className="text-gray-500 mx-auto mb-2" />
      <h3 className="text-lg font-semibold text-center">{user.name}</h3>
      <p className="text-gray-500 text-center">{user.email}</p>
      <p className="text-gray-400 text-center text-sm">{user.city}</p>

      <div className="flex justify-center gap-2 mt-3">
        <button onClick={onView} className="border px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">
          View
        </button>
        <button onClick={onEdit} className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
          Edit
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
