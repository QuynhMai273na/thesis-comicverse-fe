import React from 'react';
import { IoLibrary } from 'react-icons/io5';
import { FaBook } from 'react-icons/fa';
import { BsCollectionFill } from 'react-icons/bs';
import { MdPublish } from 'react-icons/md';
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";

export const AdminMenuUpper = [
    {
        key: 'Library',
        label: 'Library',
        path: '/admin/library',
        icon: <IoLibrary />,
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