import React from 'react'
import Image from 'next/image'
import { Ubuntu, Poppins } from "next/font/google";
import Link from 'next/link';
import { GoGear } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";
import { BsClockHistory } from "react-icons/bs";
import { PiGearFineLight } from "react-icons/pi";
import Footer from '@/components/Footer';



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

const page = () => {
  return (
    <div className='min-h-screen'>
        <div className='lg:flex md:flex w-[100%] lg:h-[70vh] md:h-[50vh] h-[40vh] bg-[#003566] pt-20'>
            <div className='flex flex-col justify-center lg:w-[50%] md:w-[50%] space-y-4'>
                <div className={`md:text-4xl text-[18px] px-4 lg:text-4xl   lg:px-10 text-white  lg:font-semibold font-bold text-center sm:text-left ${ubuntu.className}`}>Observability Consulting & Support Partner  </div>
                <div className='space-y-2'>
                    <p className={`md:text-md px-4  lg:px-10 text-[12px] md:text-sm  lg:text-[16px]  text-center sm:text-left font-normal text-white ${poppins.className}`}>We are your trusted partner for the adoption, implementation, and support of monitoring, logging, and tracing—the three pillars of observability. 
                    </p>
                    <p className={`md:text-md px-4  lg:px-10 text-[12px] md:text-sm lg:text-[16px]  text-center sm:text-left font-normal text-white ${poppins.className}`}>With deep expertise in both open-source and enterprise observability solutions, we provide comprehensive support to ensure seamless integration and optimal performance of your entire landscape.</p>
                </div>
                <div className="flex justify-center sm:justify-start hover:translate-x-1 px-4 lg:px-10 hover:-translate-y-1 duration-500">
              <Link
                href="/contact"
                className="border p-2 rounded-3xl bg-white font-bold"
              >
                Talk to an Expert
              </Link>
            </div>
            </div>
        <div className='lg:w-[50%] md:w-[50%] lg:h-[50vh] md:h-[40vh] h-[40vh] '>
            <Image 
            src='/Obs.png'
            alt='No Image Found'
            width={500}
            height={500}
            className='lg:h-[50vh] w-[100%] h-[40vh]'
            />
        </div>
       
        </div>
        <div className='lg:mt-10 md:mt-16 mt-[80%]'>
            <div className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}>Why you need Observability Consulting & Suppport?</div>
            <div className='lg:grid md:grid lg:grid-cols-4 gap-10 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4 '>
                <div className='h-32 flex flex-col lg:m-0 md:m-0 m-10 items-center justify-center px-10 shadow-lg shadow-[#003566] space-y-1 rounded-md'>
                    <div><GoGear size={30} color='#003566'/></div>
                    <div className={`text-[#003566] text-[16px] text-center font-semibold ${ubuntu.className}`}>Gain end-to-end Ecosystem Visibility</div>
                </div>
                <div className='h-32 flex flex-col lg:m-0 md:m-0 m-10  items-center justify-center px-10 shadow-lg shadow-[#003566] space-y-1 rounded-md'>
                    <div><FiFileText size={30} color='#003566'/></div>
                    <div className={`text-[#003566] text-[16px] text-center font-semibold ${ubuntu.className}`}>Better Debugging, & Fire Fighting Workflows</div>
                </div>
                <div className='h-32 flex flex-col lg:m-0 md:m-0 m-10  items-center justify-center px-10 shadow-lg shadow-[#003566] space-y-1 rounded-md'>
                    <div><LuRocket size={30} color='#003566'/></div>
                    <div className={`text-[#003566] text-[16px] text-center font-semibold ${ubuntu.className}`}>Achieve Higher Release Velocity</div>
                </div>
                <div className='h-32 flex flex-col  lg:m-0 md:m-0 m-10  items-center justify-center px-10 shadow-lg shadow-[#003566] space-y-1 rounded-md'>
                    <div><BsClockHistory size={30} color='#003566'/></div>
                    <div className={`text-[#003566] text-[16px] text-center font-semibold ${ubuntu.className}`}>Faster Incident Response</div>
                </div>
                <div className='h-32 flex flex-col lg:m-0 md:m-0 m-10  items-center justify-center px-10 shadow-lg shadow-[#003566] space-y-1 rounded-md'>
                    <div><Image src='/download.png' alt='no icon found' width={30} height={30} className='text-[#003566]'/></div>
                    <div className={`text-[#003566] text-[16px] text-center font-semibold ${ubuntu.className}`}>Innovate Faster - Higher Quality & Less Risk</div>
                </div>
                <div className='h-32 flex flex-col lg:m-0 md:m-0 m-10  items-center justify-center px-10 shadow-lg shadow-[#003566] space-y-1 rounded-md'>
                    <div><PiGearFineLight size={30} color='#003566'/></div>
                    <div className={`text-[#003566] text-[16px] text-center font-semibold ${ubuntu.className}`}>Continuously Drive Better Business Outcomes</div>
                </div>
                <div className='h-32 flex flex-col lg:m-0 md:m-0 m-10  items-center justify-center px-10 shadow-lg shadow-[#003566] space-y-1 rounded-md'>
                    <div><Image src='/person.png' alt='no icon found' width={30} height={30} className='text-[#003566]'/></div>
                    <div className={`text-[#003566] text-[16px] text-center font-semibold ${ubuntu.className}`}>Proactively Pinpoint & Resolve Problems</div>
                </div>
                <div className='h-32 flex flex-col lg:m-0 md:m-0 m-10 items-center justify-center px-10 shadow-lg shadow-[#003566] space-y-1 rounded-md'>
                    <div><Image src='/gear.png' alt='no icon found' width={30} height={30} className='text-[#003566]'/></div>
                    <div className={`text-[#003566] text-[16px] text-center font-semibold ${ubuntu.className}`}>Optimize your Infrastructure Cost & Performance</div>
                </div>
            </div>
        </div>
        <div>
            <div className={`lg:text-[34px] md:text-[24px] mt-20 text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`} >We Support with Expertise</div>
        </div>
        <div className="flex flex-col gap-16 px-6 md:px-0 lg:px-20 py-10">
        
        {/* Open Source Tools */}
        <div className="flex flex-col items-center">
          <div className={`lg:text-[24px] md:text-[20px] text-[18px] text-[#003566] font-bold text-center mb-8 ${ubuntu.className}`}>
            Open Source Tools
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {openSourceTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-40 h-40 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <Image src={tool.image} alt={tool.name} width={75} height={75} />
                <div className={`text-[#003566] text-[18px] font-semibold mt-2 text-center ${poppins.className}`}>
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Tools */}
        <div className="flex flex-col items-center">
          <div className={`lg:text-[24px] md:text-[20px] text-[18px] text-[#003566] font-bold text-center mb-8 ${ubuntu.className}`}>
            Enterprise Tools
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {enterpriseTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-40 h-40 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <Image src={tool.image} alt={tool.name} width={75} height={75} />
                <div className={`text-[#003566] text-[18px] font-semibold mt-2 text-center ${poppins.className}`}>
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
        <Footer />
    </div>
  )
}

export default page