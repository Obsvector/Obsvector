"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#003566] border-t-[1px] border-white text-white py-10 px-6 md:px-20 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
        
        {/* ✅ Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="flex items-center"><MdLocationOn className="mr-2" /> Mycon Acropolis, Madhapur, Hyderabad</p>
          <p className="flex items-center"><MdEmail className="mr-2" /> info@obsvector.com</p>
          <p className="flex items-center"><MdPhone className="mr-2" /> +91 90525 55678</p>
        </div>

        {/* ✅ Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* ✅ Helpful Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Helpful Links</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Support</Link></li>
          </ul>
        </div>
      </div>

      {/* ✅ Social Media & Copyright */}
      <div className="border-t border-gray-500 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} Obsvector. All rights reserved.</p> <p>Designed and Developed by <Link href='https://www.obsvector.com' target="_blank">ObsVector Private Limited</Link></p>
        
        {/* ✅ Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://facebook.com" target="_blank" className="hover:text-gray-300">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-gray-300">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-gray-300">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-gray-300">
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
