import React, { useEffect, useState } from "react";
import userService from "../../services/apiServices/userAPI";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const EditUserForm = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userid, setuserid] = useState([]);

  const [registerStatus, setRegisterStatus] = useState(""); // State to manage login status message
  const location = useLocation();

  const [userData, setUserData] = useState({
    userId: 0,
    userName: "",
    email: "",
    hashedPassword: "",
    repassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams(location.search);
        const id = params.get("id");
        setuserid(id);
        console.log(`userid: ${id}`);
        const user = await userService.getUserById(id);
        console.log("User:", user);
        setUserData({
          userId: id,
          userName: user.userName,
          email: user.email,
          hashedPassword: user.hashedPassword,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          dateOfBirth: user.dateOfBirth,
          status: user.status,
          createdAt: user.createdAt,
          lastLogin: formatTimestamp(Date.now()),
          role: user.role,
        });

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users.");
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const nav = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString().split("T")[0] + "T00:00:00";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User data:", userData);
    try {
      const response = await userService.updateUser(userData);

      console.log("Response:", response);

      if (response) {
        toast.success("Edit user successfully!");
      } else {
        toast.error("Edit failed. Please check your username or password.");
      }
    } catch (error) {
      console.error("Error Regist Account:", error);
      toast.error(error.response?.data?.description || "Registration failed.");
    }
    setTimeout(() => {
      nav("/admin/usermanage");
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Edit New User
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
              placeholder={`${userData.email}`}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              UserName:
            </label>
            <input
              type="text"
              name="username"
              value={userData.userName}
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
              value={userData.hashedPassword}
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
              Edit User
            </button>
            <button
              onClick={() => nav("/admin/usermanage")}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
        {registerStatus && <p className="login-status">{registerStatus}</p>}{" "}
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditUserForm;
