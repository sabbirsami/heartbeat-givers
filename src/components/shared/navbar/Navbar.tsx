"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
    const navLinks = [
        {
            route: "Home",
            path: "/",
        },
        {
            route: "Donate",
            path: "/donate",
        },
        {
            route: "About Us",
            path: "/about",
        },
        {
            route: "Contact Us",
            path: "/contact",
        },
        {
            route: "Dashboard",
            path: "/dashboard",
        },
    ];

    const [closeMenu, setCloseMenu] = useState(false);

    return (
        <header className="container mx-auto lg:px-6 px-4 text-dark relative">
            <div className=" rounded-full pt-4 pb-4 md:px-12">
                <div className="flex items-end justify-between">
                    <div className="">
                        <Image
                            className="h-8 w-auto lg:mb-0.5  mb-2.5"
                            src={logo}
                            alt="heartbeat givers' logo"
                        ></Image>
                    </div>
                    <nav className="lg:block hidden">
                        <ul className="flex gap-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    href={link?.path}
                                    className="px-3 text-sm font-medium"
                                    key={idx}
                                >
                                    {link?.route}
                                </Link>
                            ))}
                        </ul>
                    </nav>
                    <div className="lg:block hidden">
                        <Link
                            href={"/register"}
                            className="py-3 font-medium px-6 text-primary rounded-full"
                        >
                            Register
                        </Link>
                    </div>
                    {/* mobile menu button  */}
                    <div className="block lg:hidden">
                        <button
                            className=" font-bold text-2xl text-primary rounded-full"
                            onClick={() => setCloseMenu(!closeMenu)}
                        >
                            <TbMenu />
                        </button>
                    </div>
                </div>
                {closeMenu && (
                    <div className="bg-gray-300 h-screen  absolute top-0 right-0 w-80">
                        <div className="flex justify-between p-10 items-end">
                            <div className="">
                                <Image
                                    className="h-8 w-auto mb-2.5"
                                    src={logo}
                                    alt="heartbeat givers' logo"
                                ></Image>
                            </div>
                            <div className="block lg:hidden">
                                <button
                                    onClick={() => setCloseMenu(!closeMenu)}
                                    className=" font-bold text-2xl text-primary rounded-full pt-3 mb-0"
                                >
                                    <IoClose />
                                </button>
                            </div>
                        </div>
                        <nav className="">
                            <ul className="flex flex-col px-10 gap-y-2">
                                {navLinks.map((link, idx) => (
                                    <Link
                                        href={link?.path}
                                        className=" text-sm font-medium"
                                        key={idx}
                                    >
                                        {link?.route}
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                        <div className="ps-8 mt-3">
                            <Link
                                href={"/register"}
                                className="py-3 font-medium px-2  text-primary rounded-full"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
