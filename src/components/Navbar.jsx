"use client";
import Link from "next/link";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import NavLink from "./NavLink";


const navItems = [
  { href: "/", text: "Home" },
  { href: "/destinations", text: "Destination" },
  { href: "/my-bookings", text: "My Bookings" },
  { href: "/admin", text: "Admin" }
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6 container mx-auto">
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
            {
                navItems.map((item,ind)=><NavLink key={ind} item={item}></NavLink>)
            }
        </ul>
        <div>
            <h1 className="text-2xl font-extrabold text-[#15a1bf]">Wanderlust</h1>
          {/* <Image src={logo} alt="Logo" height={100} width={100} /> */}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <BsPerson /> Profile
          </div>
          <p>Login</p>
          <p>Sign Up</p>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="#" className="block py-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
