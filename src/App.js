import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
// import logo from "./assets/logo.svg";
import "./assets/App.css";

import Home from "./pages/HomeScreen/HomeScreen";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import TaskDashboard from "./pages/ManagerDashboard/TaskManagerDashboard";
import AdminPage from "./pages/Administration/AdminPage";

import ComicForm from "./components/comic/ComicForm/ComicForm";
import CreateComic from "./pages/ComicManagement/CreateComic";
import EditComic from "./pages/ComicManagement/EditComic";
import ComicInfo from "./pages/ComicManagement/ComicInfo";

import Task from "./pages/TaskManagement/TaskManage";
import TaskList from "./pages/TaskManagement/TaskList";
import AddTask from "./pages/TaskManagement/CreateTask";
import EditTask from "./pages/TaskManagement/EditTask";

import UserManagement from "./pages/UserManagement/UserManagement";
import AddUser from "./pages/UserManagement/CreateUser";
import EditUser from "./pages/UserManagement/EditUser";
import UserInfo from "./pages/UserManagement/UserInfo";

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
        <Route path="/comics" element={<ComicForm />} />
        <Route path="/addcomic" element={<CreateComic />} />
        <Route path="/editcomic" element={<EditComic />} />
        <Route path="/comicinfo" element={<ComicInfo />} />
        {/*Task management*/}
        <Route path="/taskmanage" element={<Task />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/edittask" element={<EditTask />} />
        {/*User management*/}
        <Route path="/usermanage" element={<UserManagement />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
