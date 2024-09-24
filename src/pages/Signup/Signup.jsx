import React from "react";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="left-content">
                <h3>The best offer for your business</h3>
                <p>Fill later.</p>
            </div>

            <div className="addUser">
                <h3>Sign Up</h3>
                <form className="addUserForm">
                    <div className="inputGroup">
                        <label htmlFor="name">Username:</label>
                        <input type="text" id="username" autoComplete="off" placeholder="Enter your username" />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" autoComplete="off" placeholder="Enter your email" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" autoComplete="off" placeholder="Enter your password" />

                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" autoComplete="off" placeholder="Confirm your password" />

                        <button type="submit" className="btn btn-info">Sign Up</button>
                    </div>
                </form>

                <div className="toLogin">
                    <p>Already have an account? <a href="/login">Login</a></p>
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
}

export default Signup;
