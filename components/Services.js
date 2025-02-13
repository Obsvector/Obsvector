"use client";
import React from "react";
import { Ubuntu, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serviceData = [
{
    title: "Observability",
    description: "We are your trusted partner for the adoption, implementation, and support of monitoring, logging, and tracing—the three pillars of observability. With deep expertise in both open-source and enterprise observability solutions, we provide comprehensive support to ensure seamless integration and optimal performance of your entire landscape .",
    image: "/IT.jpeg",
    reverse: false
  },
  {
    title: "IT Consulting",
    description: "Outdated IT systems can affect business growth and drain your valuable resources? With custom IT consulting services, we help businesses achieve efficiency, boost innovation, and ensure long-term success. ",
    image: "/IT consulting.webp",
    reverse: true
  },
  {
    title: "Managed IT Services",
    description: "Comprehensive IT support, including network management, helpdesk assistance, and migration support to keep your business running smoothly.",
    image: "/Managed It.jpeg",
    reverse: false
  },
  {
    title: "Software Development",
    description: "Our website and mobile application development company serves clients with R&D, prototyping, infrastructure and architecture development, and ongoing agile product delivery, all while adhering to strict compliance and security standards.",
    image: "/Software.jpg",
    reverse: true
  }
];

const Services = () => {
  return (
    <div className="lg:space-y-20 md:space-y-20 space-y-10 px-6 md:px-0 lg:px-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
        className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}
      >
        Services We Offer
      </motion.div>
      <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-10">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col-reverse lg:flex-row md:flex-row ${service.reverse ? "lg:flex-row-reverse md:flex-row-reverse" : ""} items-center justify-between gap-10`}
            initial={{ opacity: 0, x: service.reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`lg:w-[45%] md:w-[45%] flex ${service.reverse ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, x: service.reverse ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image 
                src={service.image} 
                alt="No Image Found" 
                width={500} 
                height={500} 
                loading="lazy"
                className="lg:h-[400px] lg:w-[90%] w-[100%] md:h-[300px] h-[300px] rounded-tl-[100px] hover:rounded-none hover:duration-500 rounded-br-[100px]" 
              />
            </motion.div>
            <motion.div 
              className="lg:w-[45%] md:w-[45%] flex flex-col justify-center items-start text-left space-y-4"
              initial={{ opacity: 0, x: service.reverse ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className={`lg:text-[24px] md:text-[20px] text-[18px] text-[#003566] font-bold ${ubuntu.className}`}>
                {service.title}
              </div>

              <div className={`md:text-md text-sm lg:text-lg max-w-3xl font-normal ${poppins.className}`}>
                {service.description}
              </div>

              <motion.div 
                className="bg-[#003566] p-2 text-white rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href='/contact'>Know More</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
