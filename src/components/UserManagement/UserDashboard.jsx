import React, { useEffect, useState } from "react";
import userService from "../../services/apiServices/userAPI"; // Assuming taskService is located in the same directory
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate

const UserManagementDashboard = () => {
  const [users, serUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigation hook
  const handleUserAdded = () => {
    navigate("/admin/adduser"); // Redirect to Signup page
  };
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const userList = await userService.getAllUsers();
        serUsers(userList);

        console.log(userList);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch tasks.");
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>User Management</h2>
      {/* // create a button to add a new user */}

      <button onClick={handleUserAdded}>Add User</button>

      <button onClick={handleUserAdded}>Edit User</button>


      <h2>User Management</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>userName</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Status</th>
            <th>Phone number</th>
            <th>Date</th>
            {/* <th>Deadline</th> */}
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.status}</td>
              <td>{user.phoneNumber}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              {/* <td>{new Date(user.deadline).toLocaleDateString()}</td> */}
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementDashboard;
