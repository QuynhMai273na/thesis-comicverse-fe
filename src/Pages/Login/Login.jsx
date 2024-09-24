import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="left-content">
                <h3>The best offer for your business</h3>
                <p>Fill later</p>
            </div>

            <div className="login">
                <h3>Sign In</h3>
                <form className="loginForm">
                    <div className="inputGroup">
                        <label htmlFor="name">Username:</label>
                        <input type="text" id="username" autoComplete="off" placeholder="Enter your username" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" autoComplete="off" placeholder="Enter your password" />

                        <button type="submit" className="btn btn-info">Sign In</button>
                    </div>
                </form>

                <div className="toSignup">
                    <p>Don't have an account? <a href="/signup">Sign Up</a></p>
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
    )
}

export default Login;
