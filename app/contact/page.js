"use client";

import React, { useState, useRef } from "react";
import { Ubuntu, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import emailjs from "emailjs-com";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Check for empty fields
    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());
    if (Object.values(values).some((value) => !value)) {
      alert("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    // Send email
    emailjs
      .sendForm(
        "service_gal6xww", // Replace with your EmailJS service ID
        "template_ea0r17t", // Replace with your EmailJS template ID
        form.current,
        "ptdFhOgKHaZ8Hvhxc" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you for reaching out! We'll get back to you soon.");
          setIsSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log("Email send error:", error.text);
          alert("Something went wrong! Please try again later.");
        }
      )
      .finally(() => setLoading(false));
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

          {isSubmitted ? (
            <p className="text-green-600 text-center font-semibold">Your message has been sent successfully! 🎉</p>
          ) : (
            <form ref={form} onSubmit={sendEmail} className={`space-y-4 ${poppins.className}`}>
              {/* Name Input */}
              <div>
                <label className="block text-[#003566] font-medium">Name</label>
                <input
                  type="text"
                  name="name"
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
                  disabled={loading}
                  className={`bg-[#003566] text-white py-3 px-6 rounded-lg hover:bg-[#002244] transition-all duration-300 ${poppins.className}`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ✅ Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default Contact;
