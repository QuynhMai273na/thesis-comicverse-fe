import React, { useEffect, useState } from "react";
import userService from "../../services/apiServices/userAPI"; // Import user service
import UserTable from "./UserTable"; 

const UserDashboard = () => {
  const [users, setUsers] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const userList = await userService.getAllUsers(); 
        setUsers(userList); // Set the fetched users
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
    <div className="overflow: -webkit-scrollbar: none;">
      <UserTable users={users} /> {/* Pass the fetched users to the UserTable */}
    </div>
  );
};

export default UserDashboard;
