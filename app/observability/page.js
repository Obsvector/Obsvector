"use client"
import React from "react";
import Image from "next/image";
import { Ubuntu, Poppins } from "next/font/google";
import Link from "next/link";
import { GoGear } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";
import { BsClockHistory } from "react-icons/bs";
import { PiGearFineLight } from "react-icons/pi";
import Footer from "@/components/Footer";
import { LuMonitorSmartphone } from "react-icons/lu";
import { IoMdEye } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { PiPlugsBold } from "react-icons/pi";
import { motion } from "framer-motion";


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSourceTools = [
  { name: "Prometheus", image: "/prometheus.png" },
  { name: "FluentD", image: "/fluentd.png" },
  { name: "Grafana", image: "/grafana.png" },
  { name: "Jaeger", image: "/jaeger.png" },
  { name: "Nagios", image: "/nagios.png" },
  { name: "Zabbix", image: "/zabbix.png" },
  { name: "Loki", image: "/loki.png" },
  { name: "Tempo", image: "/tempo.png" },
];

const enterpriseTools = [
  { name: "Splunk", image: "/splunk.avif" },
  { name: "Dynatrace", image: "/dynatrace.png" },
  { name: "New Relic", image: "/newrelic.jpg" },
  { name: "Datadog", image: "/datadog.png" },
  { name: "ELK", image: "/elk.png" },
  { name: "SolarWinds", image: "/solarwinds.png" },
  { name: "ScienceLogic", image: "/ScienceLogic.jpg" },
  { name: "OpsRamp", image: "/OpsRamp.png" },
];

const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
  };
  
  return {
    hidden: variants[direction],
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeInOut",
      },
    },
  };
};

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
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const page = () => {
  return (
    <div className="min-h-screen">
      <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn("up")}
    className="lg:flex md:flex w-[100%] lg:h-[70vh] md:h-[50vh] h-[40vh] bg-[#003566] pt-20"
  >
    <motion.div
      variants={fadeIn("left", 0.2)}
      className="flex flex-col justify-center lg:w-[50%] md:w-[50%] space-y-4"
    >
      <motion.div
        variants={fadeIn("left", 0.4)}
        className={`md:text-4xl text-[18px] px-4 lg:text-4xl lg:px-10 text-white lg:font-semibold font-bold text-center sm:text-left ${ubuntu.className}`}
      >
        Observability Consulting & Support Partner
      </motion.div>
      <div className="space-y-1">
        <motion.p
          variants={fadeIn("right", 0.6)}
          className={`md:text-md px-4 lg:px-10 text-[12px] md:text-sm lg:text-[16px] text-center sm:text-left font-normal text-white ${poppins.className}`}
        >
          We are your trusted partner for the adoption, implementation, and
          support of monitoring, logging, and tracing—the three pillars of
          observability.
        </motion.p>
        <motion.p
          variants={fadeIn("right", 0.8)}
          className={`md:text-md px-4 lg:px-10 text-[12px] md:text-sm lg:text-[16px] text-center sm:text-left font-normal text-white ${poppins.className}`}
        >
          With deep expertise in both open-source and enterprise
          observability solutions, we provide comprehensive support to
          ensure seamless integration and optimal performance of your entire
          landscape.
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("up", 1)}
        className="flex justify-center sm:justify-start hover:translate-x-1 px-4 lg:px-10 hover:-translate-y-1 duration-500"
      >
        <Link
          href="/contact"
          className="border p-2 rounded-3xl bg-white font-bold"
        >
          Talk to an Expert
        </Link>
      </motion.div>
    </motion.div>
    <motion.div
      variants={fadeIn("right", 1.2)}
      className="lg:w-[50%] md:w-[50%] lg:h-[50vh] md:h-[40vh] h-[40vh]"
    >
      <Image
        src="/Obs.png"
        alt="No Image Found"
        width={500}
        height={500}
        className="lg:h-[50vh] w-[100%] h-[40vh]"
      />
    </motion.div>
  </motion.div>
  <div className="lg:mt-10 md:mt-16 mt-[80%]">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideIn("left", 0.2)}
      className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}
    >
      Why you need Observability Consulting & Support?
    </motion.div>
    <div className="lg:grid md:grid lg:grid-cols-4 gap-10 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4 ">
      {[
        {
          content: "Gain end-to-end Ecosystem Visibility",
          icon: <GoGear size={30} color="#003566" />,
          animation: slideIn("left", 0.2),
        },
        {
          content: "Better Debugging, & Fire Fighting Workflows",
          icon: <FiFileText size={30} color="#003566" />,
          animation: slideIn("right", 0.4),
        },
        {
          content: "Achieve Higher Release Velocity",
          icon: <LuRocket size={30} color="#003566" />,
          animation: slideIn("left", 0.6),
        },
        {
          content: "Faster Incident Response",
          icon: <BsClockHistory size={30} color="#003566" />,
          animation: slideIn("right", 0.8),
        },
        {
          content: "Innovate Faster - Higher Quality & Less Risk",
          icon: (
            <Image
              src="/download.png"
              alt="no icon found"
              width={30}
              height={30}
              className="text-[#003566]"
            />
          ),
          animation: slideIn("left", 1),
        },
        {
          content: "Continuously Drive Better Business Outcomes",
          icon: <PiGearFineLight size={30} color="#003566" />,
          animation: slideIn("right", 1.2),
        },
        {
          content: "Proactively Pinpoint & Resolve Problems",
          icon: (
            <Image
              src="/person.png"
              alt="no icon found"
              width={30}
              height={30}
              className="text-[#003566]"
            />
          ),
          animation: slideIn("left", 1.4),
        },
        {
          content: "Optimize your Infrastructure Cost & Performance",
          icon: (
            <Image
              src="/gear.png"
              alt="no icon found"
              width={30}
              height={30}
              className="text-[#003566]"
            />
          ),
          animation: slideIn("right", 1.6),
        },
      ].map((tile, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tile.animation}
          className="h-32 flex flex-col lg:m-0 md:m-0 m-10 items-center justify-center px-10 shadow-lg shadow-[#003566] space-y-1 rounded-md"
        >
          <div>{tile.icon}</div>
          <div
            className={`text-[#003566] text-[16px] text-center font-semibold ${ubuntu.className}`}
          >
            {tile.content}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  <div className="w-screen py-6 mt-10 space-y-4 px-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideIn("down", 0.2)}
      className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}
    >
      Achieve Seamless Observability with Expert Guidance
    </motion.div>
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideIn("up", 0.4)}
      className={`md:text-md text-[12px] md:text-sm lg:text-[20px] sm:text-left font-normal text-[#003566] ${poppins.className}`}
    >
      Your trusted partner for end-to-end monitoring, logging, and
      tracing—empowering you with complete system visibility and
      performance optimization.
    </motion.p>

    <div className="lg:flex md:flex w-[100%] gap-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn("left", 0.6)}
        className="w-[45%]"
      >
        <Image
          src="/Optimized.jpg"
          alt="No Image Found"
          width={500}
          height={500}
          className="h-[400px] rounded-md shadow-lg opacity-90"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn("right", 0.8)}
        className="w-[50%] flex flex-col justify-center space-y-1"
      >
        <div
          className={`lg:text-[24px] md:text-[20px] text-[18px] text-[#003566] font-bold ${ubuntu.className}`}
        >
          Optimize Infrastructure Monitoring
        </div>
        <p>
          Ensure peak performance for your cloud or hybrid environments
          with real-time metrics, interactive visualizations, and
          proactive alerts.
        </p>
        <ul className="space-y-0.5">
          <li>
            ✅ Develop predictive analytics to identify potential system
            failures
          </li>
          <li>
            ✅ Design user-friendly dashboards for real-time
            infrastructure monitoring
          </li>
          <li>
            ✅ Set up automated alerts for immediate issue detection
          </li>
        </ul>
      </motion.div>
    </div>

    <div className="lg:flex md:flex lg:flex-row-reverse md:flex-row-reverse w-[100%] gap-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn("right", 0.6)}
        className="w-[45%]"
      >
        <Image
          src="/Optimized.jpg"
          alt="No Image Found"
          width={500}
          height={500}
          className="h-[400px] rounded-md shadow-lg opacity-90"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn("left", 0.8)}
        className="w-[50%] flex flex-col justify-center space-y-1"
      >
        <div
          className={`lg:text-[24px] md:text-[20px] text-[18px] text-[#003566] font-bold ${ubuntu.className}`}
        >
          Strengthen Your Logging Capabilities
        </div>
        <p>
          Gain full-stack visibility to troubleshoot errors, enhance
          performance, and mitigate security risks with an optimized
          logging framework.
        </p>
        <ul className="space-y-0.5">
          <li>✅ Extract actionable insights from application logs</li>
          <li>
            ✅ Implement secure, long-term log storage and retrieval
            solutions
          </li>
          <li>
            ✅ Configure real-time alerts for faster incident response
          </li>
          <li>
            ✅ Visualize log data for better analysis and decision-making
          </li>
        </ul>
      </motion.div>
    </div>

    <div className="lg:flex md:flex w-[100%] gap-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn("left", 0.6)}
        className="w-[45%]"
      >
        <Image
          src="/Optimized.jpg"
          alt="No Image Found"
          width={500}
          height={500}
          className="h-[400px] rounded-md shadow-lg opacity-90"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn("right", 0.8)}
        className="w-[50%] flex flex-col justify-center space-y-1"
      >
        <div
          className={`lg:text-[24px] md:text-[20px] text-[18px] text-[#003566] font-bold ${ubuntu.className}`}
        >
          Leverage Distributed Tracing for Deeper Insights
        </div>
        <p>
          Track every transaction across your application stack to
          pinpoint slowdowns and inefficiencies with precision.
        </p>
        <ul className="space-y-0.5">
          <li>
            ✅ Integrate tracing capabilities into your logging system
            failures
          </li>
          <li>
            ✅ Collect, manage, and analyze telemetry data for full-stack
            transparency
          </li>
          <li>✅ Accelerate debugging with in-depth trace analysis</li>
        </ul>
      </motion.div>
    </div>
  </div>
      
      
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#003566] py-10">
    <motion.div
      variants={slideIn("up", 0.2)}
      className={`lg:text-[34px] md:text-[24px] text-[18px] text-white font-bold text-center ${ubuntu.className}`}
    >
      What we offer?
    </motion.div>

    <motion.div
      className="flex flex-wrap mx-2 justify-center gap-8 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        {
          icon: <LuMonitorSmartphone size={40} color="#003566" />,
          title: "Observability Consulting & Strategic Planning",
          content: "Our observability consultants help you select the best tools tailored to your needs, whether open-source solutions like Prometheus, Grafana, Fluentd, and Jaeger or enterprise platforms such as Datadog, New Relic, and Dynatrace. We ensure seamless integration to enhance system visibility, security, and performance.",
          animation: slideIn("left", 0.2),
        },
        {
          icon: <IoMdEye size={40} color="#003566" />,
          title: "Observability Deployment & Optimization",
          content: "Our implementation experts design and set up a complete observability framework, incorporating monitoring, alerting, and tracing. We build an optimized observability stack that provides real-time insights, proactive alerts, and faster troubleshooting for a more reliable infrastructure.",
          animation: slideIn("right", 0.4),
        },
        {
          icon: <FaRegHandshake size={40} color="#003566" />,
          title: "Comprehensive Observability Management",
          content: "Leave the complexities of application monitoring, anomaly detection, and performance optimization to our skilled engineers. We identify and resolve blind spots, minimize system disruptions, and reduce Mean Time to Detect (MTTD) and Mean Time to Resolve (MTTR) for seamless operations.",
          animation: slideIn("left", 0.6),
        },
        {
          icon: <LuGraduationCap size={40} color="#003566" />,
          title: "Upskilling with Observability Training",
          content: "Equip your team with hands-on training led by experienced observability specialists. Our training programs empower engineers with the expertise to manage and optimize observability solutions independently while fostering a culture of continuous monitoring and improvement.",
          animation: slideIn("right", 0.8),
        },
        {
          icon: <PiPlugsBold size={40} color="#003566" />,
          title: "Custom Connectors",
          content: "Connect your ITSM, Monitoring, Cloud, DevOps, and CRM tools with our no-code integrations that are easy to set up and customize. Modify and scale on the go as your business needs change.",
          animation: slideIn("left", 1),
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={item.animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white flex flex-col justify-center h-64 w-[600px] space-y-2 overflow-hidden text-[#003566] shadow-lg rounded-md p-5 duration-500"
        >
          <div className="flex">{item.icon}</div>
          <div
            className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold ${ubuntu.className}`}
          >
            {item.title}
          </div>
          <p
            className={`md:text-md text-[12px] md:text-sm lg:text-[14px] sm:text-left font-normal text-[#003566] ${poppins.className}`}
          >
            {item.content}
          </p>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideIn("up", 0.2)}
      className="py-10"
    >
      <div
        className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}
      >
        We Support with Expertise
      </div>
    </motion.div>
  </motion.div>
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-10">
    <motion.div
      variants={fadeIn("up", 0.2)}
      className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}
    >
      We Support with Expertise
    </motion.div>
    <motion.div
      className="flex flex-col items-center px-6 md:px-0 lg:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        className="lg:flex lg:flex-row justify-center px-6 md:px-0 lg:px-4 py-10 gap-20 lg:space-y-0 md:space-y-10 space-y-10"
      >
        {/* Open Source Tools */}
        <motion.div
          variants={fadeIn("left", 0.6)}
          className="flex flex-col items-center lg:w-1/2"
        >
          <motion.div
            variants={fadeIn("down", 0.8)}
            className={`lg:text-[24px] md:text-[20px] text-[18px] text-[#003566] font-bold text-center mb-8 ${ubuntu.className}`}
          >
            Open Source Tools
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1)}
            className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-4"
          >
            {openSourceTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 1.2 + index * 0.1)}
                className="flex flex-col items-center justify-center w-36 h-36 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <Image src={tool.image} alt={tool.name} width={75} height={75} />
                <div
                  className={`text-[#003566] text-[18px] font-semibold mt-2 text-center ${poppins.className}`}
                >
                  {tool.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enterprise Tools */}
        <motion.div
          variants={fadeIn("right", 0.6)}
          className="flex flex-col items-center lg:w-1/2"
        >
          <motion.div
            variants={fadeIn("down", 0.8)}
            className={`lg:text-[24px] md:text-[20px] text-[18px] text-[#003566] font-bold text-center mb-8 ${ubuntu.className}`}
          >
            Enterprise Tools
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1)}
            className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-4"
          >
            {enterpriseTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 1.2 + index * 0.1)}
                className="flex flex-col items-center justify-center w-36 h-36 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <Image src={tool.image} alt={tool.name} width={75} height={75} />
                <div
                  className={`text-[#003566] text-[18px] font-semibold mt-2 text-center ${poppins.className}`}
                >
                  {tool.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
      <Footer />
    </div>
  );
};

export default page;
