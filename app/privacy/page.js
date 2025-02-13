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

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Background Section */}
      <div className="bg-[#003566] lg:h-[50vh] h-[40vh] flex justify-center items-center">
        <h1 className={`text-white text-3xl lg:text-5xl font-bold ${ubuntu.className}`}>
          Privacy Policy
        </h1>
      </div>

      {/* ✅ Privacy Policy Content */}
      <div className="flex-grow flex justify-center items-center px-5 lg:-mt-[10%] mb-10 md:-mt-[30%] -mt-[40%]">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
          <h2 className={`text-[#003566] text-2xl font-semibold text-center mb-6 ${ubuntu.className}`}>
            Your Privacy Matters
          </h2>

          {/* ✅ Section 1 - Introduction */}
          <p className={`text-gray-600 text-center leading-relaxed ${poppins.className}`}>
            At <span className="font-semibold text-[#003566]">Obsvector</span>, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
          </p>

          {/* ✅ Section 2 - Information We Collect */}
          <h3 className="text-[#003566] text-lg font-semibold mt-6 text-center">
            1. Information We Collect
          </h3>
          <p className={`text-gray-600 text-center leading-relaxed ${poppins.className}`}>
            - Personal details (Name, Email, Contact Info)  
            - Usage data (How you interact with our website)  
            - Cookies & analytics data to enhance user experience  
          </p>

          {/* ✅ Section 3 - How We Use Your Information */}
          <h3 className="text-[#003566] text-lg font-semibold mt-6 text-center">
            2. How We Use Your Information
          </h3>
          <p className={`text-gray-600 text-center leading-relaxed ${poppins.className}`}>
            - To provide and improve our services  
            - To personalize your experience  
            - To communicate updates and offers  
            - To comply with legal obligations  
          </p>

          {/* ✅ Section 4 - Data Protection & Security */}
          <h3 className="text-[#003566] text-lg font-semibold mt-6 text-center">
            3. Data Protection & Security
          </h3>
          <p className={`text-gray-600 text-center leading-relaxed ${poppins.className}`}>
            We take security seriously. We implement industry-standard measures to protect your personal data from unauthorized access or misuse.
          </p>

          {/* ✅ Section 5 - Your Rights */}
          <h3 className="text-[#003566] text-lg font-semibold mt-6 text-center">
            4. Your Rights
          </h3>
          <p className={`text-gray-600 text-center leading-relaxed ${poppins.className}`}>
            - You can request access to your data  
            - You can opt out of marketing communications  
            - You can request data deletion, subject to legal obligations  
          </p>

          {/* ✅ Section 6 - Contact Us */}
          <p className={`text-gray-600 text-center mt-6 leading-relaxed ${poppins.className}`}>
            If you have any questions about our Privacy Policy, please reach out to us.
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

export default PrivacyPolicy;
