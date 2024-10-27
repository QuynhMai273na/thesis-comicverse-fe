import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
// import logo from "./assets/logo.svg";
import "./assets/App.css";
import Home from "./pages/HomeScreen/HomeScreen";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import TaskDashboard from "./pages/ManagerDashboard/TaskManagerDashboard";
import AdminPage from "./pages/Administration/AdminPage";
import Layout from "./components/Shared/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import ComicForm from "./components/comic/ComicForm/ComicForm";
import CreateComic from "./pages/ComicManagement/CreateComic";
import EditComic from "./pages/ComicManagement/EditComic";

function App() {
  <link href="./output.css" rel="stylesheet"></link>
  return (
    <Router>
      <Routes>
        {/* Login and sign up */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<TaskDashboard />} />
        {/* Home and admin pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* Layout and dashboard */}
        <Route path="/" element={<Layout />}/>
        <Route index element={<Dashboard />} />
        <Route path="comics" element={<ComicForm />} />
        <Route path="/addcomic" element={<CreateComic />} />
        <Route path="/editcomic" element={<EditComic />} />
      </Routes>
    </Router>
  );
}

export default App;
