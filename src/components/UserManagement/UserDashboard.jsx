import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import userService from "../../services/apiServices/userAPI";
import { useNavigate } from "react-router-dom";

const USER_TABLE_HEAD = [
  "Username",
  "Email",
  "First Name",
  "Last Name",
  "Phone Number",
  "Date of Birth",
  "Created At",
  "Last Login",
  "Role",
  "Status",
  "Actions",
];

const UserManagementDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUserAdded = () => {
    navigate("/admin/adduser"); // Redirect to Add User page
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const userList = await userService.getAllUsers();
        setUsers(userList);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="h-full w-full bg-white shadow-md rounded-lg">
      <div className="p-6 border-b">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">
              Users Overview
            </h1>
            <p className="text-gray-500 text-lg">Manage and track all users</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="border border-gray-300 text-sm px-4 py-2 rounded hover:bg-gray-100">
              View all
            </button>
            <button
              onClick={handleUserAdded}
              className="flex items-center gap-2 text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <MagnifyingGlassIcon className="h-4 w-4" /> Add user
            </button>
          </div>
        </div>

        {/* Table Body with Scroll */}
        <div className="overflow-y-auto max-h-80 p-4">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                {USER_TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-b p-4 text-sm font-semibold text-gray-600"
                  >
                    <div className="flex items-center justify-between">
                      {head}
                      {index !== USER_TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-100";

                return (
                  <tr key={user.userId}>
                    <td className={classes}>{user.userName}</td>
                    <td className={classes}>{user.email}</td>
                    <td className={classes}>{user.firstName}</td>
                    <td className={classes}>{user.lastName}</td>
                    <td className={classes}>{user.phoneNumber}</td>
                    <td className={classes}>
                      {new Date(user.dateOfBirth).toLocaleDateString()}
                    </td>
                    <td className={classes}>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className={classes}>
                      {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : "N/A"}
                    </td>
                    <td className={classes}>{user.role}</td>
                    <td className={classes}>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status || "Inactive"}
                      </span>
                    </td>
                    <td className={`${classes} flex items-center gap-2`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t flex items-center justify-between">
        <span className="text-sm text-gray-600">Page 1 of 10</span>
        <div className="flex gap-2">
          <button className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Previous
          </button>
          <button className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagementDashboard;
