import React, { useState } from "react";
import accountService from "../../services/apiServices/accountAPI";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    // dateOfBirth: "",
  });
  const nav = useNavigate();
  const [registerStatus, setRegisterStatus] = useState(""); // State to manage login status message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User data:", userData);
    try {
      const response = await accountService.register(userData);

      console.log("Response:", response);

      if (response.key !== "Failed" && response.value) {
        toast.success("Create user successfully!");
      } else {
        toast.error("Create failed!");
      }
      setTimeout(() => {
        nav("/admin/usermanage");
      }, 3000);
    } catch (error) {
      console.error("Error Regist Account:", error);
      toast.error(error.response?.data?.description || "Create new user failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Add New User
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="User Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              UserName:
            </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="User Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Re-Password
            </label>
            <input
              type="password"
              name="repassword"
              value={userData.repassword}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Re-Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={userData.role}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="User Role"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="First Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Last Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number:
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Phone Number"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add new User
            </button>

            {/* <button onClick={notify}>Notify!</button> */}
            <button
              onClick={() => {
                nav("/admin/usermanage");
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
            <ToastContainer />
          </div>
        </form>
        {registerStatus && <p className="login-status">{registerStatus}</p>}{" "}
      </div>
    </div>
  );
};

export default AddUserForm;
