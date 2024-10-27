import React from "react";
// import { IoMdSearch } from "react-icons/io";
// import { FaBookOpen } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Logo from "../../assets/Logo/HomeLogo.png";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/home",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#toprated",
    },
    {
        id: 3,
        name: "New Releases",
        link: "/#newrelease",
    },
    {
        id: 4,
        name: "Genres",
        link: "/#genres",
    },
    {
        id: 5,
        name: "Authors",
        link: "/#authors",
    },
    {
        id: 6,
        name: "Publisher",
        link: "/#publisher",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "About Us",
        link: "/#aboutus",
    },
    {
        id: 2,
        name: "Contact Us",
        link: "/#contactus",
    },
    {
        id: 3,
        name: "Privacy Policy",
        link: "/#privacy",
    },
    {
        id: 4,
        name: "Terms of Service",
        link: "/#terms",
    },
];

const Navbar = () => {
    return (
        <div className="shadow-md bg-white dark:bg-gray-400 dark:text-white duration-200 relative z-40">
            {/*Upper Navbar*/}
            <div className="bg-primary/40 py-2">
            <div className="container flex justify-between items-center">
                {/*Logo*/}
                <div className="logo">
                    <a href="/home" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo}alt="" className="w-10"/> Comicverse
                    </a>
                </div>
                <div className="flex justify-center">
            <ul className="sm:flex hidden items-center gap-4">
                {Menu.map((data)=>(
                    <li key={data.id}>
                        <a href={data.link}
                        className="inline-block px-4 
                        hover:text-primary
                        duration-200"
                        >{data.name}</a>
                    </li>
                ))}
                {/*Dropdown and link*/}
                <li className="group relative cursor-pointer">
                    <a href="/#"
                    className="flex items-center gap-[2px]
                    py-2">
                        More
                        <span>
                            <FaCaretDown 
                            className="transition-all
                            duration-200
                            group-hover:rotate-180"/>
                        </span>
                    </a>
                    <div className="absolute z-[9999] hidden
                    group-hover:block w-[150px] rounded-md
                    bg-white p-2 text-black shadow-md">
                        <ul>
                            {DropdownLinks.map((data)=>(
                                <li key={data.id}>
                                    <a href={data.link}
                                    className="inline-block w-full
                                    rounded-md p-2 hover:bg-primary/20">
                                        {data.name}
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
                {/*Search Bar*/}
                <div className="flex justify-between
                items-center gap-4">
                    {/* <div className="relative group hidden sm:block">
                        <input type="text" 
                        placeholder="Search comics" 
                        className="w-[200px] sm:w-[200px]
                        group-hover:w-[300px] transition-all
                        duration-300 rounded-full border
                        border-black-300 px-2 py-1
                        focus:outline-none focus: border-1
                        focus:border-primary"/>
                        <IoMdSearch 
                        className="text-gray-500 
                        group-hover:text-primary 
                        absolute top-1/2 -translate-y-1/2 right-3"
                        />
                    </div> */}
                    {/*Login button*/}
                <button>
                    <a href="/login" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">Login</a>
                </button>
                </div>
            </div>
        </div>
        {/*Lower Navbar*/}
    </div>
    )
};

export default Navbar;

