import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { AiFillProfile } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

export default function Header() {
  const nav = useNavigate();
  const [curentUser, setCurentUser] = useState(null);

  // Fetch the role from authToken stored in sessionStorage
  useEffect(() => {
    const curentUser = sessionStorage.getItem("internal-user");

    if (curentUser) {
      try {
        setCurentUser(curentUser); // Set the role from the decoded token
      } catch (error) {
        console.error("Error decoding authToken:", error);
      }
    }
  });
  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("authToken"); // Clear the token from sessionStorage
    nav("/login"); // Redirect to login page
  };
  return (
    <div className="bg-cyan-800 h-16 px-4 flex justify-between items-center">
      <div>
        <div className="relative group hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-[200px] sm:w-[200px]
                        group-hover:w-[300px] transition-all
                        duration-300 rounded-full border
                        border-black-300 px-2 py-1
                        focus:outline-none focus: border-1
                        focus:border-primary"
          />
          <IoMdSearch
            className="text-gray-500 
                        group-hover:text-primary 
                        absolute top-1/2 -translate-y-1/2 right-3"
          />
        </div>
      </div>

      {/* add div tag to show a text */}
      <div className="text-white text-lg font-semibold">Hi, {curentUser}.</div>

      <div className="flex items-center gap-2 mr-2">
        {/* <HiOutlineChatAlt fontSize={24} />
                <HiOnlineBell fontSize={24} /> */}
        <Menu as="div" className="relative">
          <div>
            <MenuButton
              className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2
                focus:ring-neutral-400"
            >
              <span className="sr-only">{curentUser}</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center bg-center"
                style={{
                  backgroundImage:
                    'url("https://i.pinimg.com/564x/d9/03/0a/d9030a5696d2507a1dfb38a686ac93c2.jpg")',
                }}
              >
                <span className="sr-only">{curentUser}</span>
              </div>
            </MenuButton>
          </div>
          <MenuItems
            transition
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="origin-top-right z-10 absolute right-0 mt-2 w-48 
            rounded-sm shadow-md p-1 bg-white ring-1 
            ring-opacity-5 focus:outline-none"
          >
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => nav("/profile")}
                  className={`${
                    active ? "bg-neutral-100" : "text-neutral-900"
                  } group flex rounded-sm items-center w-full px-2 py-2 text-sm`}
                >
                  <AiFillProfile className="h-5 w-5 mr-2" />
                  {curentUser}
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => nav("/settings")}
                  className={`${
                    active ? "bg-neutral-100" : "text-neutral-900"
                  } group flex rounded-sm items-center w-full px-2 py-2 text-sm`}
                >
                  <IoMdSettings className="h-5 w-5 mr-2" />
                  Settings
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? "bg-neutral-100" : "text-neutral-900"
                  } group flex rounded-sm items-center w-full px-2 py-2 text-sm`}
                >
                  <CiLogout className="h-5 w-5 mr-2" />
                  Sign Out
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
