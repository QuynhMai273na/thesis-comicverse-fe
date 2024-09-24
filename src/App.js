import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import logo from "./assets/logo.svg";
import "./assets/App.css";
import ProductList from "./components/product/ProductList/ProductList";
import ProductForm from "./components/product/ProductForm/ProductForm";
import Home from "./pages/HomeScreen/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleProductAdded = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger re-render
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>

    // <div>
    //   <ProductList key={refresh} />
    //   <ProductForm onProductAdded={handleProductAdded} />
    // </div>
    // </div>
  );
}

export default App;
