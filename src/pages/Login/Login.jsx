import React, { useState } from "react";
import "./Login.css";
import accountService from "../../services/apiServices/accountAPI";

const Login = ({ onAccountLogin }) => {
  // const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log("Submited");
    const loginAcc = { username, password };
    console.log(loginAcc);
    try {
      await accountService.login(loginAcc);
      onAccountLogin(); // Trigger refresh
      setUserName("");
      setPassword("");
    } catch (error) {
      console.error("Error login:", error);
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
