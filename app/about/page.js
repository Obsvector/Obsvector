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

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Image Container */}
      <div className="relative w-screen h-[50vh]">
        <Image
          src="/Flexible.jpeg"
          alt="No Image Found"
          layout="fill"
          objectFit="cover"
          className="w-screen h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#003566] opacity-50"></div>
        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center bg-black/40">
          <div className="lg:mt-[10%] md:mt-[10%] mt-[20%] space-y-4 ">
            <h1
              className={`text-white text-3xl font-bold text-center ${ubuntu.className}`}
            >
              About Us
            </h1>
            <h1
              className={`text-white text-3xl font-semibold  text-center ${ubuntu.className}`}
            >
              Managed IT Services with a Dedicated Team
            </h1>
            <p
              className={`text-white text-[16px] lg:px-40 px-10 font-normal  text-center ${poppins.className}`}
            >
              We strategically design and optimize IT service delivery to
              enhance your enterprise’s efficiency. Our goal is to maximize your
              team&apos;s technology potential, ensuring seamless integration,
              streamlined operations, and enhanced productivity across all areas
              of your business.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 space-y-10">
        <div className="md:flex lg:flex w-[100%] px-10 gap-10">
          <div className="lg:w-[50%] md:w-[50%] w-[100%]">
            <Image
              src="/Handle.png"
              alt="No Image Found"
              width={500}
              height={500}
              className="w-[100%] rounded-md shadow-md"
            />
          </div>
          <div className="lg:w-[50%] md:w-[50%] w-[100%] flex flex-col space-y-4">
            <div className={`text-3xl font-semibold  ${ubuntu.className}`}>
              Focus on What Matters – We’ll Handle the Rest
            </div>
            <div>
              <ul className="space-y-2">
                <li className={`${poppins.className}`}>
                  ✅ Expertise That Delivers
                  <br />
                  Our team comprises highly skilled professionals with deep
                  experience across diverse IT domains, ensuring top-tier
                  service and support.
                </li>
                <li className={`${poppins.className}`}>
                  ✅ Tailored for Your Success
                  <br />
                  We take a client-first approach, customizing solutions to
                  align perfectly with your unique needs, delivering maximum
                  value and satisfaction.
                </li>
                <li className={`${poppins.className}`}>
                  ✅ Innovating for the Future
                  <br />
                  We stay ahead of the curve, leveraging the latest advancements
                  in technology to offer innovative, future-ready solutions.
                </li>
                <li className={`${poppins.className}`}>
                  ✅ Trusted & Reliable
                  <br />
                  Our proven track record, backed by positive client feedback,
                  reflects our dedication to excellence and unwavering
                  reliability.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:flex flex-row-reverse lg:flex w-[100%] px-10 gap-10">
          <div className="lg:w-[50%] md:w-[50%] w-[100%]">
            <Image
              src="/AboutExpert.png"
              alt="No Image Found"
              width={500}
              height={500}
              className="w-[100%] rounded-md shadow-md"
            />
          </div>
          <div className="lg:w-[50%] md:w-[50%] w-[100%] flex flex-col  space-y-4">
            <div className={`text-3xl font-semibold  ${ubuntu.className}`}>
              Empowering Businesses with Expert IT Solutions & Seamless
              Monitoring
            </div>
            <div>
              <div className="space-y-2">
                <p className={`${poppins.className}`}>
                  {" "}
                  ObsVector provides access to a team of highly skilled,
                  experienced engineering and IT professionals, specializing in
                  Monitoring & Observability, IT Managed Services, IT
                  Consulting, and Web & Mobile Application Development. Our
                  experts help businesses streamline their IT operations,
                  monitoring infrastructure, and software development to enhance
                  system reliability, scalability, and business competitiveness.
                </p>
                <p className={`${poppins.className}`}>
                  Many organizations rely on ObsVector to augment their IT teams
                  when project schedules, skill gaps, or resource constraints
                  threaten delivery timelines. With a proven track record of
                  excellence, we ensure seamless IT integration, proactive
                  monitoring, efficient software development, and reliable IT
                  management, helping businesses achieve scalability, security,
                  and digital transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#003566] py-20 px-20 space-y-10">
        <div
          className={`lg:text-[34px] md:text-[24px] text-[18px]  text-white font-bold text-center ${ubuntu.className}`}
        >
          Why Choose Us
        </div>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-3 gap-6 w-[60%]">
            {/* Top Row - 3 Circles */}
            {[
              {
                title: "End-to-End IT Solutions",
                description:
                  "Get access to a full spectrum of IT services, designed to meet all your business needs in one place.",
              },
              {
                title: "Experienced IT Professionals",
                description:
                  "Our team of seasoned experts excels in managing and optimizing complex IT infrastructures.",
              },
              {
                title: "24/7 Proactive Support",
                description:
                  "We detect and resolve issues before they disrupt your operations, ensuring seamless business continuity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-64 h-64 border rounded-full flex flex-col shadow-lg hover:shadow-white hover:shadow-xl cursor-pointer hover:rounded-md hover:duration-500 text-white justify-center items-center overflow-hidden p-4"
              >
                <div
                  className={`text-md text-center font-semibold ${ubuntu.className}`}
                >
                  {item.title}
                </div>
                <div className={`text-center ${poppins.className}`}>
                  {item.description}
                </div>
              </div>
            ))}

            {/* Bottom Row - 2 Circles Centered */}
            <div className="col-span-3 flex justify-center gap-10">
              {[
                {
                  title: "Cost-Optimized IT Solutions",
                  description:
                    "Reduce expenses while maintaining top-tier IT quality and efficiency.",
                },
                {
                  title: "Tailored IT Services",
                  description:
                    "Unlock customized IT solutions designed to support your specific goals and growth.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-64 h-64 border rounded-full flex flex-col shadow-lg hover:shadow-white hover:shadow-xl cursor-pointer hover:rounded-md hover:duration-500 text-white justify-center items-center overflow-hidden p-4"
                >
                  <div
                    className={`text-md text-center font-semibold ${ubuntu.className}`}
                  >
                    {item.title}
                  </div>
                  <div className={`text-center ${poppins.className}`}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen h-80">
        <div>
          <Image 
          src='/Scalable.jpg'
          alt="No Image Found"
          width={500}
          height={500}
          className="h-full"/>
        </div>
        <div className="py-20 space-y-4">
          <div  className={`text-3xl font-semibold  text-[#003566] text-center ${ubuntu.className}`}>Empowering Your Business with Cutting-Edge Technology</div>
          <div><p className={`text-center  text-[#003566]  ${poppins.className}`}>Our mission is to drive your business forward by leveraging the transformative power of technology, ensuring innovation, efficiency, and growth at every step.</p></div>
          <div className="flex justify-center "><Link href='/contact' className="bg-[#003566] text-white font-semibold p-2 rounded-md">Contact Us</Link> </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
