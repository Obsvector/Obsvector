import Link from "next/link";
import React from "react";
import { Ubuntu, Poppins } from "next/font/google";
import Footer from "@/components/Footer"; // ✅ Import Footer

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Background Section */}
      <div className="bg-[#003566] lg:h-[50vh] h-[40vh] flex justify-center items-center">
        <h1 className={`text-white text-3xl lg:text-5xl font-bold ${ubuntu.className}`}>
          Terms & Conditions
        </h1>
      </div>

      {/* ✅ Terms Content */}
      <div className="flex-grow flex justify-center items-center px-5 lg:-mt-[10%] md:-mt-[30%] mb-10 -mt-[40%]">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
          <h2 className={`text-[#003566] text-2xl font-semibold text-center mb-6 ${ubuntu.className}`}>
            Our Terms of Service
          </h2>

          {/* ✅ Section 1 - Introduction */}
          <p className={`text-gray-600 text-center leading-relaxed ${poppins.className}`}>
            Welcome to <span className="font-semibold text-[#003566]">Obsvector</span>. By using our website and services, you agree to the following terms and conditions. Please read them carefully before proceeding.
          </p>

          {/* ✅ Section 2 - Usage Policy */}
          <p className={`text-gray-600 text-center mt-4 leading-relaxed ${poppins.className}`}>
            Our services are designed to provide IT solutions with reliability and security. Users must comply with all applicable laws and avoid any misuse of our services.
          </p>

          {/* ✅ Section 3 - Privacy Policy Link */}
          <p className={`text-gray-600 text-center mt-4 leading-relaxed ${poppins.className}`}>
            Your privacy is important to us. Read our 
            <Link href="/privacy" className="text-blue-600 hover:underline ml-1">Privacy Policy</Link>.
          </p>

          {/* ✅ Section 4 - Contact Info */}
          <p className={`text-gray-600 text-center mt-4 leading-relaxed ${poppins.className}`}>
            For any inquiries, feel free to contact us.
          </p>

          {/* ✅ CTA Button - Contact Us */}
          <div className="text-center mt-6">
            <Link href='/contact' className={`bg-[#003566] text-white py-3 px-6 rounded-lg hover:bg-[#002244] transition-all duration-300 ${poppins.className}`}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default Terms;
