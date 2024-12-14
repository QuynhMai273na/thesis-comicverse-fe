import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Assumes you're using react-router
import Layout from "../../components/Admin/AdminLayout";
import { jwtDecode } from "jwt-decode";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if 'authKey' exists in session storage
    const authToken = sessionStorage.getItem("authToken");

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

        console.log(decodedToken);
        console.log(userRole);

        // // Check if user has an admin role
        if (
          userRole !== "Admin" &&
          userRole !== "Quality Control" &&
          userRole !== "Manager" &&
          userRole !== "Employee"
        ) {
          // Redirect non-admin users to a different page
          navigate("/unauthorized");
        }
      } catch (error) {
        // Handle decoding errors (e.g., if authToken is invalid)
        console.error("Invalid authToken:", error);
        navigate("/login");
      }
    }
  }, [navigate]);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
