import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
// import logo from "./assets/logo.svg";
import "./assets/App.css";
import Home from "./pages/HomeScreen/HomeScreen";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  <link href="./output.css" rel="stylesheet"></link>
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>

  );
}

export default App;
