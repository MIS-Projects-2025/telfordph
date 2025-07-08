import { useState, useEffect } from "react";

export default function NavBarGuest() {
    const [scrolled, setScrolled] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled((prev) => {
                if (!prev && offset > 20) return true;
                if (prev && offset < 10) return false;
                return prev;
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menu = [
        {
            title: "About Us",
            links: [
                {
                    title: "What we do",
                    href: "/",
                },
                {
                    title: "Mission and Vision",
                    href: "/",
                },
                {
                    title: "Community Relations",
                    href: "/",
                },
            ],
        },
        {
            title: "Services",
            links: [
                {
                    title: "Tape and Reel",
                    href: "/",
                },
                {
                    title: "Tape and Reel",
                    href: "/",
                },
                {
                    title: "Tape and Reel",
                    href: "/",
                },
                {
                    title: "Tape and Reel",
                    href: "/",
                },
            ],
        },
        {
            title: "Careers",
            links: [
                {
                    title: "Open Roles",
                    href: "/",
                },
                {
                    title: "Application Form",
                    href: "/",
                },
            ],
        },
        {
            title: "Contact Us",
            links: [
                {
                    title: "Our locations",
                    href: "/",
                },
                {
                    title: "General Inquiry",
                    href: "/",
                },
                {
                    title: "Request a Quote",
                    href: "/",
                },
                {
                    title: "Customer Support",
                    href: "/",
                },
            ],
        },
    ];

    return (
        <div
            className={`sticky top-0 z-50 w-full bg-base-100 transition-all duration-300 ${
                scrolled ? "shadow h-[50px]" : "h-[70px]"
            }`}
        >
            {/* Navbar */}
            <nav className="flex items-center justify-between h-full px-5 mx-auto md:px-10 max-w-7xl">
                {/* Logo */}
                <div className="flex-1">
                    <a
                        href={route("home")}
                        className={`font-bold transition-all duration-300 ${
                            scrolled ? "text-lg" : "text-2xl"
                        }`}
                    >
                        TelfordPH
                    </a>
                </div>

                {/* Desktop Menu */}
                <div
                    className={`items-center hidden gap-10 font-medium transition-all duration-300 lg:flex ${
                        scrolled ? "text-sm" : "text-md"
                    }`}
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                >
                    <a
                        href={route("home")}
                        className="border-blue-700 hover:border-b-[3px]"
                    >
                        About Us
                    </a>
                    <a
                        href={route("home")}
                        className="border-blue-700 hover:border-b-[3px]"
                    >
                        Our Services
                    </a>
                    <a
                        href={route("home")}
                        className="border-blue-700 hover:border-b-[3px]"
                    >
                        Careers
                    </a>
                    <a
                        href={route("home")}
                        className="border-blue-700 hover:border-b-[3px]"
                    >
                        Contact Us
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                        className="text-xl btn btn-ghost"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Desktop Mega Menu */}
            <div
                className={`hidden lg:block overflow-hidden transition-[max-height] duration-500 ease-in-out bg-base-100 shadow w-full ${
                    megaMenuOpen ? "max-h-[500px]" : "max-h-0"
                }`}
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
            >
                <div className="flex justify-center gap-4 px-4 py-6 mx-auto text-sm max-w-7xl">
                    {menu.map((section, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-300 w-[220px] px-4 py-5 rounded-md bg-white"
                        >
                            <h4 className="flex items-center gap-1 mb-3 text-base font-semibold tracking-wide text-gray-700 uppercase">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            className="flex justify-between transition hover:bg-gray-100"
                                            href={link.href}
                                        >
                                            {link.title} <span>➝</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Mega Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 bg-base-100 shadow w-full ${
                    megaMenuOpen ? "max-h-[1000px]" : "max-h-0"
                }`}
            >
                <div className="flex flex-col px-4 py-6 space-y-6">
                    {menu.map((section, idx) => (
                        <div key={idx}>
                            <h4 className="mb-2 text-base font-semibold">
                                {section.title}
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {section.links.map((link, idx2) => (
                                    <li key={idx2}>
                                        <a
                                            className="flex justify-between transition hover:bg-gray-100"
                                            href={link.href}
                                        >
                                            {link.title} <span>➝</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
