"use client"
import Link from "next/link";
import React from "react";
import { Ubuntu, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Footer from "@/components/Footer"; 

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Hero Section with Wave Effect */}
      <div className="relative bg-gradient-to-b from-[#003566] to-[#001f3f] lg:h-[60vh] h-[50vh] flex flex-col justify-center items-center text-white">
        <h1 className={`text-3xl lg:text-5xl font-bold text-center ${ubuntu.className}`}>
          About Us
        </h1>
        <p className={`text-center max-w-3xl mt-4 px-6 text-gray-300 text-lg ${poppins.className}`}>
          We are ObsVector – Your Trusted IT Partner for Innovation, Security, and Digital Excellence.
        </p>

        {/* ✅ Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-[70px] lg:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C300,60 900,180 1200,60 L1200,120 L0,120 Z" className="fill-white"></path>
          </svg>
        </div>
      </div>

      {/* ✅ About Us Content - Floating Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="flex-grow flex justify-center px-6 lg:px-20 py-10"
      >
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 w-full max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className={`text-[#003566] text-3xl font-semibold mb-6 ${ubuntu.className}`}
          >
            Who We Are
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className={`text-gray-600 leading-relaxed ${poppins.className}`}
          >
            <span className="font-semibold text-[#003566]">ObsVector</span> is a leading IT consulting and services provider, specializing in **Monitoring & Observability, IT Managed Services, Cybersecurity, and Software Development**.
          </motion.p>

          {/* ✅ Key Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              { title: "IT Managed Services", desc: "24/7 IT support, infrastructure monitoring, and cybersecurity solutions." },
              { title: "IT Consulting", desc: "Cloud migration, IT strategy, and digital transformation planning." },
              { title: "Web & Mobile Development", desc: "Custom applications, UI/UX design, and API integrations." },
              { title: "Observability Solutions", desc: "Monitoring, analytics, and automation for IT optimization." },
            ].map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl border bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-[#003566] text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ✅ Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="mt-8"
          >
            <Link href='/contact' className={`bg-[#003566] text-white py-3 px-6 rounded-lg hover:bg-[#002244] transition-all duration-300 ${poppins.className}`}>
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ✅ Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
