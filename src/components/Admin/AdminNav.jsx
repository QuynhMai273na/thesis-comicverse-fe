import React from 'react';
import { FaBook } from 'react-icons/fa';
import { BsCollectionFill } from 'react-icons/bs';
import { MdPeople, MdPublish } from 'react-icons/md';
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { GoTasklist } from "react-icons/go";

export const AdminMenuUpper = [
    {
        key: 'Dashboard',
        label: 'Dashboard',
        path: '/admin/dashboard',
        icon: <MdDashboard />,
    },
    {
        key: 'AddBook',
        label: 'AddBook',
        path: '/admin/addbook',
        icon: <FaBook />,
    },
    {
        key: 'Collection',
        label: 'Collection',
        path: '/admin/collection',
        icon: <BsCollectionFill />,
    },
    {
        key: 'Publisher',
        label: 'Publisher',
        path: '/admin/publisher',
        icon: <MdPublish />,
    },
    {
        key: 'TashManagement',
        label: 'Tash Management',
        path: '/admin/taskmanage',
        icon: <GoTasklist />,
    },
    {
        key: 'UserManagement',
        label: 'User Management',
        path: '/admin/usermanage',
        icon: <MdPeople />,
    },
];

export const AdminMenuLower = [
    {
        key: 'Settings',
        label: 'Settings',
        path: '/admin/settings',
        icon: <IoMdSettings />
    },
    {
        key: 'Help',
        label: 'Help and Support',
        path: '/admin/help',
        icon: <IoMdHelpCircle />
    }
];