import React from "react";
import Image from "next/image";
import { Ubuntu, Poppins } from "next/font/google";
import Link from "next/link";
import Services from "@/components/Services";
import Offer from '@/components/Offer'
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Page = () => {
  return (
    <div  className="relative min-h-screen">
      <div className="relative w-full lg:h-screen h-[50vh] overflow-hidden">
        {/* ✅ Video Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/Home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* ✅ Overlay (Dark Blue with Opacity) */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#003566] opacity-50"></div>

          {/* ✅ Text Content on Top of Overlay */}
          <div className="absolute w-screen lg:top-1/2 top-[50%] lg:left-[50%] md:left-[50%] left-[50%] 
          lg:space-y-10 md:space-y-4 space-y-2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          
            {/* Main Heading */}
            <h1 className={`md:text-4xl text-[18px] px-4 lg:text-4xl lg:w-[60%] lg:px-10  lg:font-semibold font-bold text-center sm:text-left ${ubuntu.className}`}>
              Dedicated IT Experts for Seamless Technology Management
            </h1>

            {/* Subheading */}
            <p className={`md:text-md px-4 lg:px-10 text-[12px] md:text-sm lg:text-lg max-w-3xl text-center sm:text-left font-normal ${poppins.className}`}>
              Our skilled IT team is committed to strategically managing and optimizing your enterprise’s technology infrastructure. We help your team operate more efficiently with fully integrated and scalable IT solutions.
            </p>
            <div className="flex justify-center sm:justify-start hover:translate-x-1 px-4 lg:px-10 hover:-translate-y-1 duration-500">
              <Link
                href="/contact"
                className="border lg:p-4 md:p-3 p-2 rounded-3xl hover:bg-[#003566] hover:text-white font-bold"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Image Container with Overlay Text */}
      <div className="relative w-full flex justify-center">
  {/* ✅ Background Image */}
  <Image 
    src="/Looper-1.png" 
    alt="No Image Found" 
    width={500} 
    height={500} 
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* ✅ Overlay Text & Services on Looper-1 */}
  <div className="relative w-full flex flex-col items-center px-[5%] pt-10">
    {/* ✅ Heading - "Obsvector: A Managed IT Service Provider" */}
    <div className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}>
      Obsvector: A Managed IT Service Provider
    </div>

    {/* ✅ Company Description */}
    <div className={`lg:text-[16px] md:text-[14px] text-[12px] font-normal py-6 leading-loose max-w-5xl ${poppins.className}`}>
      Obsvector is a problem-solving IT consulting and managed IT services provider. We’re the experts other technicians turn to when they need advanced solutions. Our team has honed its expertise through hands-on experience in the field, tackling complex challenges, testing strategies, and refining best practices. We continuously innovate to develop and optimize IT infrastructure, ensuring seamless connectivity and security for our clients.
      <br /><br />
      Partner with Obsvector to design and implement a robust IT infrastructure that supports long-term growth. Our team proactively monitors your assets and network, enhancing efficiency while detecting and neutralizing potential threats. We safeguard your enterprise by deploying timely security patches and upgrades, ensuring your systems remain protected and resilient.
    </div>

    {/* ✅ New Section - "Services We Offer" */}
    <div className="w-full flex flex-col items-center text-center px-4 lg:px-10 pt-10">
      <div className="mt-10 w-full">
        <Services />
      </div>
    </div>
    <div className="w-screen flex flex-col items-center text-center pt-10">
      <div className="mt-10 w-full">
        <Offer />
      </div>
    </div>
    <div className="w-screen">
      <div className="w-full">
        <Footer />
      </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Page;
