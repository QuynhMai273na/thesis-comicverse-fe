import React from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Admin/AdminSidebar";
import Header from "../../components/Admin/AdminHeader";
// import Dashboard from "../AdminDashboard/Dashboard";

export default function Layout() {
    return (
        <div className="flex flex-row  bg-neutral-100 h-screen w-screen
        overflow-hidden">
            <Sidebar />
            <div className="flex-1">
                <Header />
                {/* <Dashboard /> */}
            </div>
        </div>
    );
}