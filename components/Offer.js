"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Ubuntu, Poppins } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });

const Offer = () => {
  return (
    <div className="lg:space-y-20 md:space-y-20 space-y-10 py-20  bg-[#003566]">
      {/* ✅ Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`lg:text-[34px] md:text-[24px] text-[18px] text-white font-bold text-center ${ubuntu.className}`}
      >
        What We Offer
      </motion.h2>

      <div className='space-y-20'>
        <div className='lg:flex md:flex w-[100%] lg:space-y-0 md:space-y-0 space-y-4'>
            <div className='lg:w-[50%] md:w-[50%]'><Image src='/Scalable.jpg' alt="No Image Found" width={500} height={500} className='w-[100%] lg:h-[500px] md:h-[300px] opacity-50 shadow-lg rounded-md'/></div>
            <div className=' lg:w-[50%] md:w-[50%] px-10 lg:space-y-10 space-y-2 flex flex-col justify-center items-center'>
                <div  className={`lg:text-[24px] md:text-[20px] lg:pt-10 text-[14px] text-white font-bold text-center ${ubuntu.className}`}>Scalable IT Solutions
                </div>
            
            <div className={`md:text-md text-sm lg:text-lg text-white flex items-center max-w-3xl font-normal ${poppins.className}`}>Our adaptable solutions are designed for seamless expansion, eliminating the need for code modifications or architectural changes. This flexibility enables us to customize your systems efficiently while simplifying the management of your tools and technology. Recognizing the uniqueness of your organization, we take a tailored approach to deliver services that perfectly align with your specific requirements.</div>
            </div>
        </div>
        <div className='lg:flex flex-row-reverse md:flex w-[100%] lg:space-y-0 md:space-y-0 space-y-4'>
            <div className='lg:w-[50%] md:w-[50%]'><Image src='/Flexible.jpeg' alt="No Image Found" width={500} height={500} className='w-[100%] lg:h-[500px] md:h-[300px] opacity-50 shadow-lg rounded-md'/></div>
            <div className='lg:w-[50%] md:w-[50%] px-10 lg:space-y-10 space-y-2 flex flex-col justify-center items-center'>
                <div  className={`lg:text-[24px] md:text-[20px] text-[14px] text-white font-bold text-center ${ubuntu.className}`}>Flexible IT Service
                </div>
            
            <div className={`md:text-md text-sm lg:text-lg text-white flex items-center max-w-3xl font-normal ${poppins.className}`}>At Obsvector, flexibility is the foundation of our managed IT services, allowing you to select solutions tailored to your business needs. We equip organizations with advanced technology to stay ahead of the curve while ensuring they can quickly adapt to changing demands.

Count on Obsvector’s expertise to optimize your IT operations, boost efficiency, and drive long-term business growth.</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
