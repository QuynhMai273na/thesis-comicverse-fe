import React from "react";
import { FaBook } from "react-icons/fa";
import { BsCollectionFill } from "react-icons/bs";
import { MdPeople, MdPublish } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { TbWorldCheck } from "react-icons/tb";
import { GiSpellBook } from "react-icons/gi";

export const AdminMenuUpper = [
  {
    key: "Dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdDashboard />,
  },
  {
    key: "Comic Management",
    label: "Comics",
    path: "/admin/comicsmanage",
    icon: <GiSpellBook />,
  },
  {
    key: "Publising Request",
    label: "Publising",
    path: "/admin/publishing",
    icon: <TbWorldCheck />,
  },
  // {
  //     key: 'Publisher',
  //     label: 'Publisher',
  //     path: '/admin/publisher',
  //     icon: <MdPublish />,
  // },
  {
    key: "TaskManagement",
    label: "Tasks",
    path: "/admin/taskmanage",
    icon: <GoTasklist />,
  },
  {
    key: "UserManagement",
    label: "Users",
    path: "/admin/usermanage",
    icon: <MdPeople />,
  },
];

export const AdminMenuLower = [
  {
    key: "Settings",
    label: "Settings",
    path: "/admin/settings",
    icon: <IoMdSettings />,
  },
  {
    key: "Help",
    label: "Help and Support",
    path: "/admin/help",
    icon: <IoMdHelpCircle />,
  },
];
