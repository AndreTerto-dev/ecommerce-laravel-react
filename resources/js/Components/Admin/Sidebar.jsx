import React, { useState } from "react";
import { SidebarData } from "../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import Logo from "../../../../public/assets/logo.png";
import { Link } from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex flex-col h-screen w-52 bg-transparent">
            <div className="flex items-center p-4">
                <img src={Logo} alt="logo" className="w-16 h-auto ml-4" />
                <div className="flex flex-col">
                    <span className="text-black font-bold text-xl">Storm</span>
                    <span className="text-gray-500 font-bold text-lg">
                        Sports
                    </span>
                </div>
            </div>

            <div className="flex-grow overflow-y-auto mb-8">
                <div className="flex flex-col space-y-5 p-4">
                    {SidebarData.map((item, index) => (
                        <div key={index}>
                            <Link href={item.route}>
                                <div
                                    onClick={() => setSelected(index)}
                                    className={`flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer ${
                                        selected === index
                                            ? "bg-blue-100"
                                            : "hover:bg-blue-50"
                                    }`}
                                >
                                    <item.icon />
                                    <span
                                        className={`text-gray-700 text-sm ${
                                            selected === index
                                                ? "font-bold"
                                                : ""
                                        }`}
                                    >
                                        {item.heading}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        as="button"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-50"
                    >
                        <UilSignOutAlt />
                        <span className="text-gray-700 text-sm">Log Out</span>
                    </ResponsiveNavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
