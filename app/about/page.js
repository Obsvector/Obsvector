import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* ✅ Background Section */}
      <div className="bg-[#003566] lg:h-[60%] h-[50%] flex justify-center items-center">
        <h1 className="text-white text-3xl lg:text-5xl font-bold">About Us</h1>
      </div>

      {/* ✅ About Us Content */}
      <div className="flex justify-center items-center -mt-20 px-5">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
          <h2 className="text-[#003566] text-2xl font-semibold text-center mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 text-center leading-relaxed">
            Welcome to <span className="font-semibold text-[#003566]">Obsvector</span>, where we are dedicated to delivering excellence in everything we do. Our mission is to provide high-quality services that meet the needs of our customers with innovation, integrity, and professionalism.
          </p>
          <p className="text-gray-600 text-center mt-4 leading-relaxed">
            Our team consists of experienced professionals who work tirelessly to bring value and satisfaction to our clients. We believe in continuous growth, adapting to new challenges, and always putting our customers first.
          </p>
          <div className="text-center mt-6">
            <Link href='/contact' className="bg-[#003566] text-white py-3 px-6 rounded-lg hover:bg-[#002244] transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
