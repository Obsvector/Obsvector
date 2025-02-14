import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Ubuntu, Poppins } from "next/font/google";
import Footer from '@/components/Footer';


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const page = () => {
  return (
    <div className='min-h-screen'>
        <div className='lg:flex md:flex w-[100%] lg:h-[70vh] md:h-[50vh] h-[40vh] bg-[#003566] pt-20'>
       <div className='flex flex-col justify-center lg:w-[50%] md:w-[50%] space-y-6 '>
                <div className={`md:text-4xl text-[18px] px-4 lg:text-4xl   lg:px-10 text-white  lg:font-semibold font-bold text-center sm:text-left ${ubuntu.className}`}>Information Technology Consulting Services </div>
                <div className='space-y-2'>
                    <p className={`md:text-md px-4  lg:px-10 text-[12px] md:text-sm  lg:text-[16px]  text-center sm:text-left font-normal text-white ${poppins.className}`}>Outdated IT systems can affect business growth and drain your valuable resources? With custom IT consulting services, we help businesses achieve efficiency, boost innovation, and ensure long-term success
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
            </div>
        <div className='lg:w-[50%] md:w-[50%] lg:h-[50vh] md:h-[40vh] h-[40vh] lg:mt-0 mg:mt-0 mt-10  '>
            <Image 
            src='/IT-consulting.jpg'
            alt='No Image Found'
            width={500}
            height={500}
            className='lg:h-[50vh] w-[100%] h-[40vh]'
            />
        </div>
        </div>
        <div className='lg:flex md:flex hidden relative w-screen h-[1200px]'>
            <Image src='/expert.jpg' alt='no image found' layout='fill' objectFit='cover' className='absolute top-0 left-0 w-full h-full opacity-80' />
            <div className='absolute inset-0 flex flex-col bg-[#003566] bg-opacity-30  items-center text-white text-center px-6'>
            <div className={`  lg:text-[34px] md:text-[24px] text-[18px] text-white font-bold text-center ${ubuntu.className}`}>Expert IT Consulting Services We Offer</div>
            <div className="lg:grid md:grid lg:grid-cols-3 gap-10 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4 ">
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg bg-white rounded-md shadow-[#003566]'>
            <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>IT Strategy Consulting</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Align your IT assets with current and anticipated business goals, driving your business forward.</div>
            <div>
              <ul className='list-disc text-[#003566] space-y-1'>
                <li>Assessing IT governance effectiveness</li>
                <li>Crafting a high-level IT strategy</li>
                <li>Planning strategic initiatives</li>
              </ul>
            </div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg bg-white rounded-md shadow-[#003566]'>
            <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>IT Assessment</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Maximize your IT infrastructure’s efficiency and security while reducing costs and evaluating various IT components.</div>
            <div>
              <ul className='list-disc text-[#003566] space-y-1'>
                <li>Assessing IT policies</li>
                <li>Enhance IT infrastructure</li>
                <li>Streamlining IT ecosystem</li>
              </ul>
            </div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10 space-y-4 shadow-lg bg-white rounded-md shadow-[#003566]'>
            <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>IT Operations Consulting</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Build sustainable IT solutions that support your business plans.</div>
            <div>
              <ul className='list-disc text-[#003566] space-y-1'>
                <li>Diagnosing and troubleshooting inefficiencies</li>
                <li>Analyzing and comparing for optimization</li>
                <li>Planning strategies to enhance efficiency</li>
              </ul>
            </div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10 space-y-4 bg-white shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Digital Transformation</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Enhance your business with transformative digital solutions tailored to drive growth and innovation.</div>
            <div>
              <ul className='list-disc text-[#003566] space-y-1'>
                <li>Digital transformation strategy</li>
                <li>Software modernization</li>
                <li>Software consulting</li>
              </ul>
            </div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10 space-y-4 bg-white shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Cloud Enablement</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Our expert team is dedicated to optimizing your infrastructure and applications into the cloud environment.</div>
            <div>
              <ul className='list-disc text-[#003566] space-y-1'>
                <li>Seamless scalability for business growth</li>
                <li>Robust security measures for data protection</li>
                <li>Cost-effective cloud solutions for efficiency
                </li>
              </ul>
            </div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10 space-y-4 bg-white shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Security Consulting</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >IT consultants use tested techniques to identify potential security threats and recommend effective remedial measures.</div>
            <div>
              <ul className='list-disc text-[#003566] space-y-1'>
                <li >Wireless network analysis & assessment</li>
                <li>Upgrade existing security application</li>
                <li>Project security analysis and consulting
                </li>
              </ul>
            </div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 bg-white shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>IT Service Management</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >We offer efficient IT service management solutions, ensuring optimal efficiency and customer satisfaction.</div>
            <div>
              <ul className='list-disc text-[#003566] space-y-1'>
                <li>ITSM consulting</li>
                <li>Software QA consulting</li>
                <li>DevOps consulting
                </li>
              </ul>
            </div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 bg-white shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Cybersecurity</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Our cybersecurity solutions protect digital assets with proactive monitoring, ensuring data confidentiality.</div>
            <div>
              <ul className='list-disc text-[#003566] space-y-1'>
                <li>Security testing</li>
                <li>Managed security services</li>
                <li>Compliance assessment & consulting
                </li>
              </ul>
            </div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 bg-white shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[24px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>IT and Software Support</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Our IT support services ensure seamless operation, providing expert guidance for sustainable growth.</div>
            <div>
              <ul className='list-disc text-[#003566] space-y-1'>
                <li>Application maintenance and support</li>
                <li>IT infrastructure support</li>
                <li>Managed IT services
                </li>
              </ul>
            </div>
          </div>
          </div>
            </div>
        </div>
        <div className='space-y-4  py-10 bg-white]'>
        <div className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}>Why Invest in IT Consulting</div>

        <div className={`md:text-md px-4  lg:px-20 text-[12px] md:text-sm  lg:text-[16px]  text-center sm:text-left font-normal text-[#003566] ${poppins.className}`}>IT consulting optimizes operations, boosts efficiency, and keeps your business competitive by leveraging expertise, advanced technologies, and tailored strategies. Here’s why it’s a valuable investment for your organization.</div>
        <div className="lg:grid md:grid lg:grid-cols-3 gap-10 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4 ">
        <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10 space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[22px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Expertise and Specialization</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Offering expert solutions using the latest technologies for optimal outcomes.</div>
          </div>
        <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[22px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Cost-Effectiveness</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Paying for only needed expertise helps businesses cut costs vs. an in-house IT team.</div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col  lg:m-0 md:m-0 m-10 space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[22px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Efficiency and Productivity</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Consultants optimize workflows and implement technologies to enhance efficiency and performance.</div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[22px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Risk Mitigation and Security</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >IT consultants assess vulnerabilities, strengthen security, and monitor to protect data from cyber threats.</div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[22px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Scalability and Flexibility</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Offering solutions to adapt to changing demands and growth requirements, enabling businesses to expand.</div>
          </div>
          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[22px] md:text-[18px] text-[16px] text-[#003566] font-bold  underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Strategic Planning and Innovation</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Expert insights and recommendations to align IT initiatives with organizational goals and drive innovation.</div>
          </div>
        </div>
        
        </div>
        <Footer />
    </div>
  )
}

export default page