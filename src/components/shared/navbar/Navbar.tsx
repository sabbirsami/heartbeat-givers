import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

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
            route: "About",
            path: "/about",
        },
        {
            route: "Contact",
            path: "/contact",
        },
        {
            route: "Dashboard",
            path: "/dashboard",
        },
    ];
    return (
        <header className="container mx-auto px-6 my-4 text-secondary">
            <div className="bg-dark rounded-full pt-4 pb-4 px-12">
                <div className="flex items-center justify-between">
                    <div className="">
                        <Image
                            className="h-8 w-auto mb-2"
                            src={logo}
                            alt="heartbeat givers' logo"
                        ></Image>
                    </div>
                    <nav>
                        <ul className="flex gap-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    href={link?.path}
                                    className="px-3 text-sm"
                                    key={idx}
                                >
                                    {link?.route}
                                </Link>
                            ))}
                        </ul>
                    </nav>
                    <div className="">
                        <Link
                            href={"/register"}
                            className="py-3 px-6 text-primary rounded-full"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
