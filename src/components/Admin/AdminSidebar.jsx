import React, { useEffect, useState } from "react";
import { MdManageAccounts } from "react-icons/md";
import { AdminMenuLower, AdminMenuUpper } from "./AdminNav";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { CiLogout } from "react-icons/ci";
import { jwtDecode } from "jwt-decode"; // Use named import for jwtDecode

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 duration-200 rounded-sm text-base";

export default function Sidebar() {
  const [role, setRole] = useState(null);
  const nav = useNavigate();

  // Fetch the role from authToken stored in sessionStorage
  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken");

    if (authToken) {
      try {
        const decodedToken = jwtDecode(authToken); // Decode the token
        const userRole =
          decodedToken[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];
        setRole(userRole); // Set the role from the decoded token
      } catch (error) {
        console.error("Error decoding authToken:", error);
      }
    } else {
      nav("/login"); // Redirect to login if no authToken found
    }
  }, [nav]);

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("authToken"); // Clear the token from sessionStorage
    nav("/login"); // Redirect to login page
  };

  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <MdManageAccounts fontSize={30} />
        <span className="text-neutral-100 text-lg">
          {role ? `${role}` : ""}
        </span>
      </div>
      <div className="flex-1 py-3 flex flex-col gap-0.5">
        {AdminMenuUpper.map((items) => (
          <SidebarLink key={items.key} items={items} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {AdminMenuLower.map((items) => (
          <SidebarLink key={items.key} items={items} />
        ))}
        <div
          className={classNames("text-red-400 cursor-pointer", linkClasses)}
          onClick={handleLogout}
        >
          <span className="text-xl">
            <CiLogout />
          </span>
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ items }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={items.path}
      className={classNames(
        pathname === items.path ? "text-white" : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{items.icon}</span>
      <span>{items.label}</span>
    </Link>
  );
}
