import {
  PlusIcon,
  ChevronUpDownIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import userService from "../../services/apiServices/userAPI";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";

const USER_TABLE_HEAD = [
  "Username",
  "Email",
  "Full name",
  // "Last Name",
  "Role",
  "Status",
  "Phone Number",
  "Date of Birth",
  "Created At",
  "Last Login",
  "Actions",
];

const UserManagementDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("authToken");
  const [searchQuery, setSearchQuery] = useState("");

  const handleUserAdded = () => {
    try {
      if (!authToken) {
        // Redirect to login page if authToken is missing
        navigate("/login");
      } else {
        try {
          // Decode the authToken to get the role
          const decodedToken = jwtDecode(authToken);
          const userRole =
            decodedToken[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ];

          // Check if user has an admin role
          if (userRole !== "Admin" && userRole !== "Manager") {
            toast.error("You are not authorized to add new user.");
          } else {
            navigate("/admin/adduser"); // Redirect to Add User page
          }
        } catch (error) {
          // Handle decoding errors (e.g., if authToken is invalid)
          console.error("Invalid authToken:", error);
          navigate("/login");
        }
      }
    } catch (err) {
      setError("Failed to delete user.");
      toast.error(error.response?.data?.description || "Registration failed.");
    }
  };

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

  const handleDeleteUser = async (userId) => {
    // Delete user with userId
    try {
      if (!authToken) {
        // Redirect to login page if authToken is missing
        navigate("/login");
      } else {
        try {
          // Decode the authToken to get the role
          const decodedToken = jwtDecode(authToken);
          const userRole =
            decodedToken[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ];

          // Check if user has an admin role
          if (userRole !== "Admin" && userRole !== "Manager") {
            toast.error("You are not authorized to delete users.");
          } else {
            const response = await userService.deleteUser(userId);
            console.log(response);

            if (response) {
              toast.success(`Delete ${response.userName} successfully!`);
              // delay 3s to reload the page
              setTimeout(() => {
                fetchUsers();
              }, 3500);
            } else {
              toast.error(
                "Delete failed. Please check your username or password."
              );
            }
          }
        } catch (error) {
          // Handle decoding errors (e.g., if authToken is invalid)
          console.error("Invalid authToken:", error);
          navigate("/login");
        }
      }
    } catch (err) {
      setError("Failed to delete user.");
      toast.error(error.response?.data?.description || "Registration failed.");
    }
  };

  const handleUpdateUser = async (userId) => {
    // Delete user with userId
    try {
      if (!authToken) {
        // Redirect to login page if authToken is missing
        navigate("/login");
      } else {
        try {
          // Decode the authToken to get the role
          const decodedToken = jwtDecode(authToken);
          const userRole =
            decodedToken[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ];

          // Check if user has an admin role
          if (userRole !== "Admin" && userRole !== "Manager") {
            toast.error("You are not authorized to delete users.");
          } else {
            // Check if user has an admin role
            if (userRole !== "Admin" && userRole !== "Manager") {
              toast.error("You are not authorized to add new user.");
            } else {
              navigate(`/admin/edituser?id=${userId}`);
            }
          }
        } catch (error) {
          // Handle decoding errors (e.g., if authToken is invalid)
          console.error("Invalid authToken:", error);
          navigate("/login");
        }
      }
    } catch (err) {
      setError("Failed to delete user.");
      toast.error(error.response?.data?.description || "Registration failed.");
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter users based on the search query
  const handleSearchUser = () => {
    return users.filter((user) => {
      return (
        (user.username &&
          user.username.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email &&
          user.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.firstName &&
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.lastName &&
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  };

  useEffect(() => {
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
      <div className="p-6 h-full border-b">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">
              Users Overview
            </h1>
            <p className="text-gray-500 text-lg">Manage and track all users</p>
          </div>

          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search User..."
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {/* <button className="border border-gray-300 text-sm px-4 py-2 rounded hover:bg-gray-100">
              View all
            </button> */}
            <button
              onClick={handleUserAdded}
              className="flex items-center gap-2 text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <PlusIcon className="h-4 w-4" /> New User
            </button>
          </div>
        </div>

        {/* Table Body with Scroll */}
        <div className="overflow-y-auto h-5/6 p-4">
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
              {handleSearchUser().map((user, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-100";

                return (
                  <tr key={user.userId}>
                    <td className={classes}>{user.userName}</td>
                    <td className={classes}>{user.email}</td>
                    <td className={classes}>{user.firstName} {user.lastName}</td>
                    {/* <td className={classes}>{user.lastName}</td> */}
                    <td className={classes}>{user.role}</td>
                    <td className={classes}>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className={classes}>{user.phoneNumber}</td>
                    <td className={classes}>{user.dateOfBirth}</td>
                    <td className={classes}>{user.createdAt}</td>
                    <td className={classes}>{user.lastLogin}</td>
                    <td className={classes}>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUpdateUser(user.userId)}
                          className="text-blue-500"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.userId)}
                          className="text-red-500"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserManagementDashboard;
