"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Ubuntu, Poppins } from "next/font/google";
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const page = () => {
  return (
    <div className='min-h-screen'>
      <motion.div initial='hidden' animate='visible' variants={fadeIn("up")} className='lg:flex md:flex w-[100%] lg:h-[70vh] md:h-[50vh] h-[40vh] bg-[#003566] pt-20'>
        <div className='flex flex-col justify-center lg:w-[50%] md:w-[50%] space-y-6'>
          <motion.div variants={fadeIn("left", 0.2)} className={`md:text-4xl text-[18px] px-4 lg:text-4xl lg:px-10 text-white lg:font-semibold font-bold text-center sm:text-left ${ubuntu.className}`}>
            Information Technology Consulting Services
          </motion.div>
          <div className='space-y-2'>
            <motion.p variants={fadeIn("right", 0.4)} className={`md:text-md px-4 lg:px-10 text-[12px] md:text-sm lg:text-[16px] text-center sm:text-left font-normal text-white ${poppins.className}`}>
              Outdated IT systems can affect business growth and drain your valuable resources? With custom IT consulting services, we help businesses achieve efficiency, boost innovation, and ensure long-term success
            </motion.p>
          </div>
          <motion.div variants={fadeIn("up", 0.6)} className="flex justify-center sm:justify-start hover:translate-x-1 px-4 lg:px-10 hover:-translate-y-1 duration-500">
            <Link href="/contact" className="border p-2 rounded-3xl bg-white font-bold">
              Talk to an Expert
            </Link>
          </motion.div>
        </div>
        <motion.div variants={fadeIn("right", 0.8)} className='lg:w-[50%] md:w-[50%] lg:h-[50vh] md:h-[40vh] h-[40vh] lg:mt-0 mg:mt-0 mt-10'>
          <Image 
            src='/IT-consulting.jpg'
            alt='No Image Found'
            width={500}
            height={500}
            className='lg:h-[50vh] w-[100%] h-[40vh]'
          />
        </motion.div>
      </motion.div>
      
      <motion.div initial='hidden' animate='visible' variants={fadeIn("up", 0.2)} className='space-y-4 py-10 bg-white lg:mt-10 md:mt-16 mt-[80%]'>
        <motion.div variants={fadeIn("up", 0.4)} className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}>
          Why Invest in IT Consulting
        </motion.div>

        <motion.div variants={fadeIn("up", 0.6)} className={`md:text-md px-4 lg:px-20 text-[12px] md:text-sm lg:text-[16px] text-center sm:text-left font-normal text-[#003566] ${poppins.className}`}>
          IT consulting optimizes operations, boosts efficiency, and keeps your business competitive by leveraging expertise, advanced technologies, and tailored strategies. Here’s why it’s a valuable investment for your organization.
        </motion.div>
        
        <div className="lg:grid md:grid lg:grid-cols-3 gap-10 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4">
          {[
            {
              title: "Expertise and Specialization",
              description: "Offering expert solutions using the latest technologies for optimal outcomes."
            },
            {
              title: "Cost-Effectiveness",
              description: "Paying for only needed expertise helps businesses cut costs vs. an in-house IT team."
            },
            {
              title: "Efficiency and Productivity",
              description: "Consultants optimize workflows and implement technologies to enhance efficiency and performance."
            },
            {
              title: "Risk Mitigation and Security",
              description: "IT consultants assess vulnerabilities, strengthen security, and monitor to protect data from cyber threats."
            },
            {
              title: "Scalability and Flexibility",
              description: "Offering solutions to adapt to changing demands and growth requirements, enabling businesses to expand."
            },
            {
              title: "Strategic Planning and Innovation",
              description: "Expert insights and recommendations to align IT initiatives with organizational goals and drive innovation."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10 space-y-4 shadow-lg rounded-md shadow-[#003566]'
            >
              <div className={`lg:text-[22px] md:text-[18px] text-[16px] text-[#003566] font-bold underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>
                {item.title}
              </div>
              <div className={`md:text-md text-[12px] md:text-sm lg:text-[16px] sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`}>
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className='lg:flex md:flex hidden w-screen'>
  <div className='inset-0 flex flex-col bg-[#003566] items-center text-white text-center px-6 py-10'>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`lg:text-[34px] md:text-[24px] text-[18px] text-white font-bold text-center ${ubuntu.className}`}
    >
      Expert IT Consulting Services We Offer
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:grid md:grid lg:grid-cols-3 gap-10 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4"
    >
      {[
        {
          title: "IT Strategy Consulting",
          description: "Align your IT assets with current and anticipated business goals, driving your business forward.",
          points: [
            "Assessing IT governance effectiveness",
            "Crafting a high-level IT strategy",
            "Planning strategic initiatives"
          ]
        },
        {
          title: "IT Assessment",
          description: "Maximize your IT infrastructure’s efficiency and security while reducing costs and evaluating various IT components.",
          points: [
            "Assessing IT policies",
            "Enhance IT infrastructure",
            "Streamlining IT ecosystem"
          ]
        },
        {
          title: "IT Operations Consulting",
          description: "Build sustainable IT solutions that support your business plans.",
          points: [
            "Diagnosing and troubleshooting inefficiencies",
            "Analyzing and comparing for optimization",
            "Planning strategies to enhance efficiency"
          ]
        },
        {
          title: "Digital Transformation",
          description: "Enhance your business with transformative digital solutions tailored to drive growth and innovation.",
          points: [
            "Digital transformation strategy",
            "Software modernization",
            "Software consulting"
          ]
        },
        {
          title: "Cloud Enablement",
          description: "Our expert team is dedicated to optimizing your infrastructure and applications into the cloud environment.",
          points: [
            "Seamless scalability for business growth",
            "Robust security measures for data protection",
            "Cost-effective cloud solutions for efficiency"
          ]
        },
        {
          title: "Security Consulting",
          description: "IT consultants use tested techniques to identify potential security threats and recommend effective remedial measures.",
          points: [
            "Wireless network analysis & assessment",
            "Upgrade existing security application",
            "Project security analysis and consulting"
          ]
        },
        {
          title: "IT Service Management",
          description: "We offer efficient IT service management solutions, ensuring optimal efficiency and customer satisfaction.",
          points: [
            "ITSM consulting",
            "Software QA consulting",
            "DevOps consulting"
          ]
        },
        {
          title: "Cybersecurity",
          description: "Our cybersecurity solutions protect digital assets with proactive monitoring, ensuring data confidentiality.",
          points: [
            "Security testing",
            "Managed security services",
            "Compliance assessment & consulting"
          ]
        },
        {
          title: "IT and Software Support",
          description: "Our IT support services ensure seamless operation, providing expert guidance for sustainable growth.",
          points: [
            "Application maintenance and support",
            "IT infrastructure support",
            "Managed IT services"
          ]
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10 space-y-4 shadow-lg bg-white rounded-md shadow-[#003566]'
        >
          <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold text-start underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>
            {service.title}
          </div>
          <div className={`md:text-md text-[12px] md:text-sm lg:text-[16px] sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`}>
            {service.description}
          </div>
          <div>
            <ul className='list-disc text-[#003566] space-y-1 text-start'>
              {service.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>
      <Footer />
    </div>
  )
}

export default page
