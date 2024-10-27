import React from "react";
import { MdManageAccounts } from "react-icons/md";
import { AdminMenuLower, AdminMenuUpper } from "../Navbar/AdminNav";
import { Link, useLocation } from 'react-router-dom';
import classNames from "classnames";
import { CiLogout } from "react-icons/ci";

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 duration-200 rounded-sm text-base";

export default function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
            <div className="flex items-center
            gap-2 px-1 py-3">
                <MdManageAccounts fontSize={30}/>
                <span className="text-neutral-100 text-lg">Admin</span>
            </div>
            <div className="flex-1 py-3 flex flex-col gap-0.5">
                {AdminMenuUpper.map((items)=>(
                    <SidebarLink key={items.key} items={items}/>
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                {AdminMenuLower.map((items)=>(
                    <SidebarLink key={items.key} items={items}/>
                ))}
                <div
                    className={classNames("text-red-400 cursor-pointer",linkClasses)}
                >
                    <span className="text-xl"><CiLogout /></span>
                    <span>Log out</span>
                </div>
            </div>
        </div>
    );
}

function SidebarLink({items}) {
    const {pathname} = useLocation();

    return (
        <Link to={items.path} className={classNames(pathname === items.path ?  "text-white" : "text-neutral-400",linkClasses)}>
            <span className="text-xl">{items.icon}</span>
            <span>{items.label}</span>
        </Link>
    );
}