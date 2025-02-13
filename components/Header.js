"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Ubuntu } from "next/font/google";
import { FiMenu, FiX } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";
import Image from "next/image";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`lg:w-full md:w-full w-[100%] fixed z-10 flex justify-between px-5 lg:px-20 py-5 h-16 items-center transition-all duration-300 ${
        ubuntu.className
      } ${isScrolled ? "bg-[#003566] shadow-lg text-white" : "bg-white bg-opacity-80 text-[#003566]"}`}
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
        <ul className={`flex lg:space-x-20 md:space-x-5 space-x-2 transition-all duration-300 font-bold ${isScrolled ? "text-white" : "text-[#003566]"}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div></div>
      
      {/* ✅ Mobile Menu Icon */}
      <div className="lg:hidden">
        {menuOpen ? (
          <FiX size={30} className={`${isScrolled ? "text-white" : "text-[#003566]"}`} onClick={() => setMenuOpen(false)} />
        ) : (
          <RiMenu2Line size={30} className={`${isScrolled ? "text-white" : "text-[#003566]"}`} onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#003566] text-white p-5 flex flex-col space-y-4 items-center lg:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
