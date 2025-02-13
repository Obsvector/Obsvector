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
  const pathname = usePathname(); // ✅ Get current route

  return (
    <div
      className={`w-screen fixed z-10 flex justify-between px-5 lg:px-20 py-5 h-16 items-center bg-black transition-all duration-300 ${
        ubuntu.className
      }`}
    >
      {/* ✅ Logo */}
      <div>
        <Image
          src="/Logo.png"
          alt="No Logo Found"
          width={200}
          height={100}
          className=""
        />
      </div>

      {/* ✅ Desktop Navigation */}
      <div className="hidden lg:flex">
        <ul className="flex lg:space-x-20 md:space-x-5 space-x-2 transition-all duration-300 font-bold text-white">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${
                  pathname === item.path ? "text-orange-500" : "text-white"
                } transition-all duration-300 px-2 pb-1`}
              >
                {item.name}
              </Link>
            </li>
          ))}
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
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${
                pathname === item.path ? "text-orange-500 font-semibold" : "text-white"
              } transition-all duration-300`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
