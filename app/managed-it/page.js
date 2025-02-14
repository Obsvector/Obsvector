"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Ubuntu, Poppins } from "next/font/google";
import Footer from '@/components/Footer';
import { motion } from "framer-motion";


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeInOut",
    },
  },
});

const slideEffect = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1, // Slightly longer duration for a different feel
      delay,
      ease: "easeInOut",
    },
  },
});

const slideIn = (direction = "left", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeInOut",
    },
  },
});


const page = () => {
  return (
    <div className='min-h-screen'>
      <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="lg:flex md:flex w-[100%] lg:h-[70vh] md:h-[50vh] h-[40vh] bg-[#003566] pt-20"
  >
    <motion.div
      variants={fadeIn("left", 0.2)}
      className="flex flex-col justify-center lg:w-[50%] md:w-[50%] space-y-6"
    >
      <motion.div
        variants={fadeIn("left", 0.4)}
        className={`md:text-4xl text-[18px] px-4 lg:text-4xl lg:px-10 text-white lg:font-semibold font-bold text-center sm:text-left ${ubuntu.className}`}
      >
        Seamless IT Management for Business Excellence
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        className="space-y-2"
      >
        <p
          className={`md:text-md px-4 lg:px-10 text-[12px] md:text-sm lg:text-[16px] text-center sm:text-left font-normal text-white ${poppins.className}`}
        >
          Managed IT Services are the backbone of a thriving digital ecosystem, ensuring uninterrupted operations and peak efficiency. Obsvector provides proactive monitoring and expert support, allowing you to focus on business growth while we handle your technology needs.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.8)}
        className="flex justify-center sm:justify-start hover:translate-x-1 px-4 lg:px-10 hover:-translate-y-1 duration-500"
      >
        <Link href="/contact" className="border p-2 rounded-3xl bg-white font-bold">
          Talk to an Expert
        </Link>
      </motion.div>
    </motion.div>

    <motion.div
      variants={fadeIn("right", 1)}
      className="lg:w-[50%] md:w-[50%] lg:h-[50vh] md:h-[40vh] h-[40vh] lg:mt-0 mg:mt-0 mt-10"
    >
      <Image
        src="/it-management.png"
        alt="No Image Found"
        width={500}
        height={500}
        className="lg:h-[50vh] w-[100%] h-[40vh]"
      />
    </motion.div>
  </motion.div>
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="lg:mt-10 md:mt-16 mt-[90%]"
  >
    <motion.div
      variants={slideIn("up", 0.2)}
      className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}
    >
      Reliable IT Services with Unmatched Efficiency
    </motion.div>
    <div className="lg:grid md:grid lg:grid-cols-3 gap-10 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4">
      {[
        {
          title: "Rapid Response & 24/7 Support",
          content: "Align your IT assets with current and anticipated business goals, driving your business forward.",
          animation: slideIn("left", 0.2),
        },
        {
          title: "Cost-Effective Solutions",
          content: "Minimize in-house IT expenses and reduce capital investment with predictable, budget-friendly pricing models.",
          animation: slideIn("right", 0.4),
        },
        {
          title: "Robust Security & Compliance",
          content: "Leverage enterprise-grade cybersecurity measures while ensuring adherence to regulatory standards.",
          animation: slideIn("left", 0.6),
        },
        {
          title: "Proactive IT Monitoring",
          content: "Detect and resolve potential issues before they impact operations, preventing costly downtime.",
          animation: slideIn("right", 0.8),
        },
        {
          title: "Access to Cutting-Edge Technology",
          content: "Stay ahead with the latest IT advancements, without heavy investments in new infrastructure.",
          animation: slideIn("left", 1.0),
        },
        {
          title: "Expert IT Knowledge & Support",
          content: "Gain access to a team of seasoned professionals with specialized expertise tailored to your business needs.",
          animation: slideIn("right", 1.2),
        },
        {
          title: "Seamless Scalability",
          content: "Effortlessly adjust IT resources as your business grows or changes, without the hassle of hiring or downsizing.",
          animation: slideIn("left", 1.4),
        },
        {
          title: "Disaster Recovery & Business Continuity",
          content: "Protect critical data with reliable backup and disaster recovery solutions, ensuring seamless business operations.",
          animation: slideIn("right", 1.6),
        },
        {
          title: "Focus on Core Business Goals",
          content: "Free up your team’s time to concentrate on strategic initiatives rather than IT management.",
          animation: slideIn("left", 1.8),
        },
      ].map((tile, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tile.animation}
          className="border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10 space-y-4 shadow-lg rounded-md shadow-[#003566]"
        >
          <div
            className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}
          >
            {tile.title}
          </div>
          <div
            className={`md:text-md text-[12px] md:text-sm lg:text-[16px] sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`}
          >
            {tile.content}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="lg:mt-10 md:mt-16 bg-[#003566] mt-[90%] py-10"
  >
    <motion.div
      variants={slideEffect("up", 0.2)}
      className={`lg:text-[34px] md:text-[24px] text-[18px] text-[white] font-bold text-center ${ubuntu.className}`}
    >
      Comprehensive IT Management for Seamless Operations
    </motion.div>
    <div className="lg:grid md:grid lg:grid-cols-5 gap-5 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4">
      {[
        { title: "24/7/365 Monitoring", description: "Proactive oversight to detect and resolve issues before they impact your business.", direction: "left" },
        { title: "Procurement Assistance", description: "Expert guidance to help you choose the best technology solutions at the best value.", direction: "right" },
        { title: "Disaster Recovery & Data Protection", description: "Secure backup and recovery strategies to safeguard your critical business data.", direction: "left" },
        { title: "Help Desk Support", description: "Reliable, round-the-clock IT support to resolve issues swiftly and minimize downtime.", direction: "right" },
        { title: "Software License Management", description: "Ensure compliance and maximize the value of your software investments.", direction: "left" },
        { title: "Mobile Security Solutions", description: "Protect your business’s mobile devices with advanced security measures.", direction: "right" },
        { title: "On-Site IT Support", description: "When remote solutions aren’t enough, our team provides hands-on assistance.", direction: "left" },
        { title: "Infrastructure Management", description: "Maintain robust and reliable network connections for seamless business operations.", direction: "right" },
        { title: "Optimized SaaS Solutions", description: "Enhance the performance of your SaaS applications for maximum efficiency.", direction: "left" },
        { title: "Vendor Relationship Management", description: "Simplify IT vendor interactions with our expert coordination and oversight.", direction: "right" },
        { title: "Device Performance & Security", description: "Keep essential business tools optimized, secure, and fully operational.", direction: "left" },
        { title: "Cloud Optimization & Management", description: "Navigate cloud solutions efficiently with our expert support.", direction: "right" },
        { title: "Strategic IT Change Management", description: "Minimize disruptions with a structured and seamless IT transition process.", direction: "left" },
        { title: "Firewall Protection & Security", description: "Strengthen your cybersecurity with advanced firewall management.", direction: "right" },
        { title: "Office 365 Data Backup", description: "Ensure complete protection and recovery of your Office 365 data.", direction: "left" },
        { title: "IT Asset Optimization", description: "Extend the lifespan and maximize the efficiency of your IT investments.", direction: "right" },
        { title: "Server Performance & Maintenance", description: "Keep your servers running smoothly to support business-critical applications.", direction: "left" },
      ].map((tile, index) => (
        <motion.div
          key={index}
          variants={slideEffect(tile.direction, 0.2 * index)}
          className="border p-4 flex flex-col lg:m-0 md:m-0 m-10 space-y-4 bg-white shadow-lg rounded-md shadow-[#003566]"
        >
          <div
            className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}
          >
            {tile.title}
          </div>
          <div
            className={`md:text-md text-[12px] md:text-sm lg:text-[16px] sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`}
          >
            {tile.description}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
        <Footer />
    </div>
  )
}

export default page