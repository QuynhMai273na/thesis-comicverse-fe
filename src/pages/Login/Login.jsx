import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Login.css";
import accountService from "../../services/apiServices/accountAPI";

const Login = ({ onAccountLogin }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(""); // State to manage login status message
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted");
    const loginAcc = { username, password };
    console.log(loginAcc);
    try {
      const response = await accountService.login(loginAcc);

      if (response.key !== "Failed" && response.value) {
        setLoginStatus("Login successful! Redirecting to ..."); // Set success message

        // Optional: Store the token if needed for future authenticated requests
        sessionStorage.setItem("authToken", response.key);
        // localStorage.setItem("authToken", response.key);

        setTimeout(() => {
          if (
            response.value.role === "SuperAdmin" ||
            response.value.role === "Quality Control" ||
            response.value.role === "Manager" ||
            response.value.role === "Employee"
          ) {
            navigate("/admin");
            sessionStorage.setItem(
              "internal-user",
              response.value.firstName + " " + response.value.lastName
            );
          }

          if (response.value.role === "User") {
            sessionStorage.setItem(
              "internal-user",
              response.value.firstName + " " + response.value.lastName
            );
            navigate("/home");
          }
        }, 2000);
      } else {
        setLoginStatus("Login failed. Please check your username or password.");
      }
    } catch (error) {
      console.error("Error login:", error);
      setLoginStatus(
        "Login failed. Please check your credentials and try again."
      ); // Set error message
    }
  };

  return (
    <div className="login-container">
      <div className="left-content">
        <h3>The best offer for your business</h3>
        <p>Fill later</p>
      </div>

      <div className="login">
        <h3>Sign In</h3>
        <form className="loginForm" onSubmit={handleLoginSubmit}>
          <div className="inputGroup">
            <label htmlFor="Username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="Username"
              autoComplete="off"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              autoComplete="off"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-info">
              Sign In
            </button>
          </div>
        </form>
        {loginStatus && <p className="login-status">{loginStatus}</p>}{" "}
        {/* Display login status message */}
        <div className="toSignup">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
        <p className="text-center mt-3">Or sign up with:</p>
        <div className="text-center social-icons">
          <i className="fab fa-facebook mr-3"></i>
          <i className="fab fa-google mr-3"></i>
          <i className="fab fa-twitter mr-3"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Login;
