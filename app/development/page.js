"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Ubuntu, Poppins } from "next/font/google";
import { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      duration: 0.8,
      delay,
      ease: "easeInOut",
    },
  },
});

const slideFromSide = (direction = "up", delay = 0) => ({
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

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.1 } },
};

  const tiles = [
    {
      title: "Mobile App Consulting",
      description:
        "Our expert consultants provide strategic guidance on choosing the right technology and platform for your mobile app. We deliver customized solutions to ensure your app meets industry standards while aligning with your business goals.",
    },
    {
      title: "Mobile App UI/UX Design",
      description:
        "We craft intuitive and engaging user experiences through meticulous research, wireframing, and prototyping. Our design approach enhances usability and visual appeal, ensuring your app is both functional and user-friendly.",
    },
    {
      title: "Mobile App Development",
      description:
        "From ideation to launch, we develop high-performance mobile apps with seamless functionality and an engaging user interface. Our end-to-end development process turns your vision into a fully functional digital solution.",
    },
    {
      title: "Web App Development",
      description:
        "We build scalable and secure web applications tailored to your business needs. Our solutions leverage the latest technologies to ensure reliability, efficiency, and long-term adaptability for sustained success.",
    },
    {
      title: "Mobile App Integration",
      description:
        "Enhance your app’s capabilities with seamless integration into existing systems and third-party services. We ensure smooth connectivity between your mobile app and essential tools to improve functionality and user experience.",
    },
    {
      title: "Mobile App QA & Testing",
      description:
        "Security and performance are our priorities. Our rigorous testing process identifies vulnerabilities, prevents security threats, and ensures that your app is fully optimized for a flawless user experience.",
    },
    {
      title: "Maintenance & Support",
      description:
        "We provide continuous app maintenance, bug fixes, and updates to ensure your app remains compatible with new OS versions and evolving user needs. Our proactive support keeps your mobile solution running at its best.",
    },
    {
      title: "Mobile App Modernization",
      description:
        "Upgrade and enhance your existing app with our modernization services. We refine outdated applications by improving performance, security, and usability to align with the latest industry standards.",
    },
    {
      title: "Cross-Platform App Development",
      description:
        "Our cross-platform development expertise enables the creation of high-performance mobile apps that work seamlessly across both iOS and Android, ensuring a consistent experience for all users.",
    },
  ];

const technologyData = {
  "Mobile Application": [
    { name: "IOS", image: "/ios.png" },
    { name: "Android", image: "/android.png" },
    { name: "Swift", image: "/swift.png" },
    { name: "Kotlin", image: "/kotlin.png" },
    { name: "React Js", image: "/react-js.png" },
    { name: "Xamarine", image: "/xamarine.png" },
    { name: "Flutter", image: "/flutter.png" },
  ],
  Frontend: [
    { name: "React.js", image: "/react-js.png" },
    { name: "Angular", image: "/angular.png" },
    { name: "Vue.js", image: "/swift.png" },
    { name: "Knockout JS", image: "/knockoutjs.png" },
  ],
  Backend: [
    { name: "Node.js", image: "/node-js.png" },
    { name: "C#", image: "/c-sharp.png" },
    { name: ".Net Core", image: "/dot-netcore.png" },
    { name: "PHP", image: "/php.png" },
    { name: "Phyton", image: "/python.png" },
    { name: "Java", image: "/java-dev.png" },
  ],
  "Open Source": [
    { name: "Wordpress", image: "/wordpress.png" },
    { name: "Meganto", image: "/meganto.png" },
    { name: "Shopify", image: "/shopify.png" },
    { name: "DNN", image: "/dnn.png" },
    { name: "Kentico", image: "/kentico.png" },
    { name: "Woocommerce", image: "/woocommerce.png" },
  ],
  "DevOps / Cloud": [
    { name: "AWS", image: "/aws.png" },
    { name: "Google Cloud", image: "/google.png" },
    { name: "Azure", image: "/azure.jpeg" },
  ],
  Database: [
    { name: "MongoDB", image: "/mongo.png" },
    { name: "MySQL", image: "/mysql.png" },
    { name: "PostgreSQL", image: "/postgresql.png" },
    { name: "SQL Server", image: "/sqlserver.png" },
    { name: "DynamoDB", image: "/dynamodb.png" },
    { name: "MariaDB", image: "/mariadb.png" },
  ],
};


const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mobile Application");

  return (
    <div className="min-h-screen">
      <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="lg:flex md:flex w-[100%] lg:h-[70vh] md:h-[50vh] h-[40vh] bg-[#003566] pt-20"
    
  >
    <motion.div
      variants={slideEffect("left", 0.2)}
      className="flex flex-col justify-center lg:w-[50%] md:w-[50%] space-y-6"
    >
      <div
        className={`md:text-4xl text-[18px] px-4 lg:text-4xl lg:px-10 text-white lg:font-semibold font-bold text-center sm:text-left ${ubuntu.className}`}
      >
        Software Development Services
      </div>
      <div className="space-y-2">
        <p
          className={`md:text-md px-4 lg:px-10 text-[12px] md:text-sm lg:text-[16px] text-center sm:text-left font-normal text-white ${poppins.className}`}
        >
          Our website and mobile application development company serves clients
          with R&D, prototyping, infrastructure and architecture development,
          and ongoing agile product delivery, all while adhering to strict
          compliance and security standards.
        </p>
      </div>
      <div className="flex justify-center sm:justify-start hover:translate-x-1 px-4 lg:px-10 hover:-translate-y-1 duration-500">
        <Link
          href="/contact"
          className="border p-2 rounded-3xl bg-white font-bold"
        >
          Talk to an Expert
        </Link>
      </div>
    </motion.div>
    <motion.div
      variants={slideEffect("right", 0.4)}
      className="lg:w-[50%] md:w-[50%] lg:h-[50vh] md:h-[40vh] h-[40vh] lg:mt-0 mg:mt-0 mt-10"
    >
      <Image
        src="/development.avif"
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
        variants={slideFromSide("up", 0.2)}
        className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}
      >
        Our Mobile App Development Services
      </motion.div>
      <div className="lg:grid md:grid lg:grid-cols-3 gap-10 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4">
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            variants={slideFromSide("left", index * 0.1)}
            whileHover={{ x: 4, y: -4, transition: { duration: 0.2 } }}
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
              {tile.description}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
      <div className="bg-blue-100 py-10">
        <div
          className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}
        >
          Technology Stacks
        </div>
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-8">
          {Object.keys(technologyData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border-b-4 text-lg font-semibold ${selectedCategory === category ? "border-[#003566] text-[#003566]" : "border-transparent text-gray-500"} transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display Selected Category Images */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 px-6 md:px-20">
          {technologyData[selectedCategory].map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 p-4 border rounded-md shadow-md bg-white hover:translate-x-1 hover:-translate-y-1 duration-500">
              <Image src={tech.image} alt={tech.name} width={60} height={60} className="object-contain" />
              <div className={`text-[#003566] text-[16px] font-semibold text-center ${poppins.className}`}>
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
