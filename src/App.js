import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
// import logo from "./assets/logo.svg";
import "./assets/App.css";
import Home from "./pages/HomeScreen/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import TaskDashboard from "./pages/ManagerDashboard/TaskManagerDashboard";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<TaskDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
