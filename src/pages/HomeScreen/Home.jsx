import logo from "../../assets/logo.svg";
// import "../HomeScreen/Home.css";
import ProductList from "../../components/product/ProductList/ProductList";
import ProductForm from "../../components/product/ProductForm/ProductForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate

function Home() {
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleProductAdded = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger re-render
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to Login page
  };

  const handleSignupRedirect = () => {
    navigate("/signup"); // Redirect to Signup page
  };

  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />

      {/* Two buttons to redirect to Login and Signup */}
      <button onClick={handleLoginRedirect} className="btn btn-primary">
        Login
      </button>
      <button onClick={handleSignupRedirect} className="btn btn-secondary">
        Signup
      </button>

      {/* Product List and Form */}
      <ProductList refresh={refresh} />
      <ProductForm onProductAdded={handleProductAdded} />
    </div>
  );
}

export default Home;
