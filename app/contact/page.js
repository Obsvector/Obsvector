"use client";
import React, { useState } from "react";
import { Ubuntu, Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Background Section */}
      <div className="bg-[#003566] lg:h-[50vh] h-[40vh] flex justify-center items-center">
        <h1 className={`text-white text-3xl lg:text-5xl font-bold ${ubuntu.className}`}>
          Contact Us
        </h1>
      </div>

      {/* ✅ Form Section */}
      <div className="flex-grow flex justify-center items-center px-5 mb-10 lg:-mt-[10%] md:-mt-[30%] -mt-[40%]">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
          <h2 className={`text-[#003566] text-2xl font-semibold text-center mb-6 ${ubuntu.className}`}>
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className={`space-y-4 ${poppins.className}`}>
            {/* Name Input */}
            <div>
              <label className="block text-[#003566] font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003566]"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-[#003566] font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003566]"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-[#003566] font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003566]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className={`bg-[#003566] text-white py-3 px-6 rounded-lg hover:bg-[#002244] transition-all duration-300 ${poppins.className}`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default Contact;
