"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Ubuntu } from "next/font/google";
import { FiMenu, FiX } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ Import usePathname()

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get current route

  return (
    <div
      className={`w-screen fixed z-10 flex justify-between px-5 lg:px-20 py-5 h-16 items-center bg-black transition-all duration-300 ${
        ubuntu.className
      }`}
    >
      {/* ✅ Logo */}
      <div>
        <Image src="/Logo.png" alt="No Logo Found" width={200} height={100} className="" />
      </div>

      {/* ✅ Desktop Navigation */}
      <div className="hidden lg:flex">
        <ul className="flex lg:space-x-10 md:space-x-5 space-x-2 transition-all duration-300 font-bold text-white">
          <li>
            <Link href="/" className={`${pathname === "/" ? "text-orange-500" : "text-white"} transition-all duration-300 px-2 pb-1`}>
              Home
            </Link>
          </li>

          {/* ✅ Services Dropdown (Desktop) */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={`${pathname.includes("/services") ? "text-orange-500" : "text-white"} transition-all duration-300 px-2 pb-1`}>
              Services
            </span>

            {/* Dropdown Menu */}
            <div
              className={`absolute -left-10 mt-4 bg-white text-[#003566] shadow-lg rounded-lg w-48 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                dropdownOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link href="/observability" className="block px-4 py-2 hover:bg-gray-100">
                Observability
              </Link>
              <Link href="/it-consulting" className="block px-4 py-2 hover:bg-gray-100">
                IT Consulting
              </Link>
              <Link href="/managed-it" className="block px-4 py-2 hover:bg-gray-100">
                Managed IT
              </Link>
              <Link href="/development" className="block px-4 py-2 hover:bg-gray-100">
                Development
              </Link>
            </div>
          </li>

          <li>
            <Link href="/about" className={`${pathname === "/about" ? "text-orange-500" : "text-white"} transition-all duration-300 px-2 pb-1`}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${pathname === "/contact" ? "text-orange-500" : "text-white"} transition-all duration-300 px-2 pb-1`}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div></div>

      {/* ✅ Mobile Menu Icon */}
      <div className="lg:hidden">
        {menuOpen ? (
          <FiX size={30} className="text-white" onClick={() => setMenuOpen(false)} />
        ) : (
          <RiMenu2Line size={30} className="text-white" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#003566] text-white p-5 flex flex-col space-y-4 items-center lg:hidden">
          <Link href="/" className={`${pathname === "/" ? "text-orange-500 font-semibold" : "text-white"}`} onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* ✅ Services Dropdown (Mobile) */}
          <div className="w-full text-center">
            <button
              className="w-full text-white font-semibold py-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services {dropdownOpen ? "▲" : "▼"}
            </button>

            {dropdownOpen && (
              <div className="w-full  mt-2">
                <Link href="/observability" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                  Observability
                </Link>
                <Link href="/it-consulting" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                  IT Consulting
                </Link>
                <Link href="/managed-it" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                  Managed IT
                </Link>
                <Link href="/development" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                  Development
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className={`${pathname === "/about" ? "text-orange-500 font-semibold" : "text-white"}`} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className={`${pathname === "/contact" ? "text-orange-500 font-semibold" : "text-white"}`} onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
