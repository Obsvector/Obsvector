"use client";

import Link from "next/link";
import React from "react";
import { Ubuntu, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Animation Variants
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : direction === "right" ? 50 : 0, y: direction === "up" ? 50 : -50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, delay, ease: "easeInOut" } },
});

const slideEffect = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : direction === "right" ? 50 : 0, y: direction === "up" ? 50 : -50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay, ease: "easeInOut" } },
});

const slideIn = (direction = "left", delay = 0) => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: "easeInOut" } },
});

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative w-screen h-[50vh]">
        <Image src="/Flexible.jpeg" alt="No Image Found" layout="fill" objectFit="cover" className="w-screen h-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#003566] opacity-50"></div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          className="absolute top-0 left-0 w-full h-full flex items-start justify-center bg-black/40"
        >
          <div className="lg:mt-[10%] md:mt-[10%] mt-[20%] space-y-4">
            <h1 className={`text-white text-3xl font-bold text-center ${ubuntu.className}`}>About Us</h1>
            <h1 className={`text-white text-3xl font-semibold text-center ${ubuntu.className}`}>
              Managed IT Services with a Dedicated Team
            </h1>
            <p className={`text-white text-[16px] lg:px-40 px-10 font-normal text-center ${poppins.className}`}>
              We strategically design and optimize IT service delivery to enhance your enterprise’s efficiency.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="py-10 space-y-10">
        {[
          { img: "/Handle.png", title: "Focus on What Matters – We’ll Handle the Rest", reverse: false },
          { img: "/AboutExpert.png", title: "Empowering Businesses with Expert IT Solutions & Seamless Monitoring", reverse: true },
        ].map((section, index) => (
          <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn("up", 0.2 * index)}>
            <div className={`md:flex ${section.reverse ? "flex-row-reverse" : ""} lg:flex w-[100%] px-10 gap-10`}>
              <motion.div variants={slideIn(section.reverse ? "right" : "left", 0.2)} className="lg:w-[50%] md:w-[50%] w-[100%]">
                <Image src={section.img} alt="No Image Found" width={500} height={500} className="w-[100%] rounded-md shadow-md" />
              </motion.div>
              <motion.div variants={fadeIn("up", 0.4)} className="lg:w-[50%] md:w-[50%] w-[100%] flex flex-col space-y-4">
                <div className={`text-3xl font-semibold ${ubuntu.className}`}>{section.title}</div>

                {/* Updated missing content */}
                {index === 0 ? (
                  <ul className="space-y-2">
                    {[
                      {
                        title: "✅ Expertise That Delivers",
                        description:
                          "Our team comprises highly skilled professionals with deep experience across diverse IT domains, ensuring top-tier service and support.",
                      },
                      {
                        title: "✅ Tailored for Your Success",
                        description:
                          "We take a client-first approach, customizing solutions to align perfectly with your unique needs, delivering maximum value and satisfaction.",
                      },
                      {
                        title: "✅ Innovating for the Future",
                        description:
                          "We stay ahead of the curve, leveraging the latest advancements in technology to offer innovative, future-ready solutions.",
                      },
                      {
                        title: "✅ Trusted & Reliable",
                        description:
                          "Our proven track record, backed by positive client feedback, reflects our dedication to excellence and unwavering reliability.",
                      },
                    ].map((item, index) => (
                      <li key={index} className={`${poppins.className}`}>
                        {item.title}
                        <br />
                        {item.description}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-2">
                    <p className={`${poppins.className}`}>
                      ObsVector provides access to a team of highly skilled, experienced engineering and IT professionals,
                      specializing in Monitoring & Observability, IT Managed Services, IT Consulting, and Web & Mobile
                      Application Development. Our experts help businesses streamline their IT operations, monitoring
                      infrastructure, and software development to enhance system reliability, scalability, and business
                      competitiveness.
                    </p>
                    <p className={`${poppins.className}`}>
                      Many organizations rely on ObsVector to augment their IT teams when project schedules, skill gaps, or
                      resource constraints threaten delivery timelines. With a proven track record of excellence, we ensure
                      seamless IT integration, proactive monitoring, efficient software development, and reliable IT
                      management, helping businesses achieve scalability, security, and digital transformation.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true }} 
  className="bg-[#003566] py-20 px-10 space-y-10"
>
  <motion.h2 
    variants={fadeIn("up", 0.2)} 
    className={`lg:text-[34px] md:text-[24px] text-[18px] text-white font-bold text-center ${ubuntu.className}`}
  >
    Why Choose Us
  </motion.h2>

  <div className="flex justify-center w-full">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full max-w-6xl mx-auto">
      
      {[
        {
          title: "End-to-End IT Solutions",
          description: "Get access to a full spectrum of IT services, designed to meet all your business needs in one place.",
          delay: 0.2,
        },
        {
          title: "Experienced IT Professionals",
          description: "Our team of seasoned experts excels in managing and optimizing complex IT infrastructures.",
          delay: 0.4,
        },
        {
          title: "24/7 Proactive Support",
          description: "We detect and resolve issues before they disrupt your operations, ensuring seamless business continuity.",
          delay: 0.6,
        },
        {
          title: "Cost-Optimized IT Solutions",
          description: "Reduce expenses while maintaining top-tier IT quality and efficiency.",
          delay: 0.8,
        },
        {
          title: "Tailored IT Services",
          description: "Unlock customized IT solutions designed to support your specific goals and growth.",
          delay: 1.0,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", item.delay)}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          className="border border-gray-300 bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-center items-center text-center space-y-3 transform transition duration-300 hover:shadow-xl"
        >
          <div className={`text-xl font-semibold text-[#003566] ${ubuntu.className}`}>
            {item.title}
          </div>
          <p className={`text-gray-700 ${poppins.className}`}>
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

      {/* Final CTA Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn("up", 0.2)} className="flex w-screen h-80 gap-10">
        <div>
          <Image src="/Scalable.jpg" alt="No Image Found" width={500} height={500} className="h-full" />
        </div>
        <div className="py-20 space-y-4">
          <h2 className={`text-3xl font-semibold text-[#003566] text-center ${ubuntu.className}`}>
            Empowering Your Business with Cutting-Edge Technology
          </h2>
          <p className={`text-center text-[#003566] ${poppins.className}`}>
            Our mission is to drive your business forward by leveraging the power of technology.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-[#003566] text-white font-semibold p-2 rounded-md">
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;
