import React, { useState } from "react";
import "./Signup.css";
import accountService from "../../services/apiServices/accountAPI";

const Signup = ({ onAccountRegister }) => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState(""); // State to manage login status message

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submited");
    const newAcc = { username, email, password, repassword };
    console.log(newAcc);

    try {
      const response = await accountService.register(newAcc);
      if (response.key !== "Failed" && response.value) {
        setRegisterStatus("Login successful! Now you can login"); // Set success message

        onAccountRegister(); // Trigger refresh
        setName("");
        setEmail("");
        setPassword("");
        setRePassword("");

        // setTimeout(() => {
        //   navigate("/"); // Redirect to the home page after 2 seconds
        // }, 2000); // Adjust the timeout as needed
      } else {
        setRegisterStatus(
          "Login failed. Please check your username or password."
        );
      }
    } catch (error) {
      console.error("Error Regist Account:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="left-content">
        <h3>The best offer for your business</h3>
        <p>Fill later.</p>
      </div>

      <div className="addUser">
        <h3>Sign Up</h3>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="name" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              autoComplete="off"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              autoComplete="off"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              autoComplete="off"
              placeholder="Confirm your password"
              value={repassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-info">
              Sign Up
            </button>
          </div>
        </form>
        {registerStatus && <p className="login-status">{registerStatus}</p>}{" "}
        {/* Display login status message */}
        <div className="toLogin">
          <p>
            Already have an account? <a href="/login">Login</a>
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

export default Signup;
