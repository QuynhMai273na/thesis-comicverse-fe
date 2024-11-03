import React from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "./TaskSidebar";
import Header from "./TaskHeader";
import Dashboard from "./TaskDashboard";

export default function Layout() {
    return (
        <div className="flex flex-row  bg-neutral-100 h-screen w-screen
        overflow-hidden">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <Dashboard />
            </div>
        </div>
    );
}