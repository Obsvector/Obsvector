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
                <div className={`md:text-4xl text-[18px] px-4 lg:text-4xl   lg:px-10 text-white  lg:font-semibold font-bold text-center sm:text-left ${ubuntu.className}`}>Seamless IT Management for Business Excellence </div>
                <div className='space-y-2'>
                    <p className={`md:text-md px-4  lg:px-10 text-[12px] md:text-sm  lg:text-[16px]  text-center sm:text-left font-normal text-white ${poppins.className}`}>Managed IT Services are the backbone of a thriving digital ecosystem, ensuring uninterrupted operations and peak efficiency. Obsvector provides proactive monitoring and expert support, allowing you to focus on business growth while we handle your technology needs.</p>
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
            src='/it-management.png'
            alt='No Image Found'
            width={500}
            height={500}
            className='lg:h-[50vh] w-[100%] h-[40vh]'
            />
        </div>
        </div>
        <div className='lg:mt-10 md:mt-16 mt-[90%]'>
        <div className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}>Reliable IT Services with Unmatched Efficiency</div>
        <div className="lg:grid md:grid lg:grid-cols-3 gap-10 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4 ">
        <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Rapid Response & 24/7 Support</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Align your IT assets with current and anticipated business goals, driving your business forward.</div>
          </div>

          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Cost-Effective Solutions</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Minimize in-house IT expenses and reduce capital investment with predictable, budget-friendly pricing models.</div>
          </div>

          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Robust Security & Compliance</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Leverage enterprise-grade cybersecurity measures while ensuring adherence to regulatory standards.</div>
          </div>

          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Proactive IT Monitoring</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Detect and resolve potential issues before they impact operations, preventing costly downtime.</div>
          </div>

          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Access to Cutting-Edge Technology</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Stay ahead with the latest IT advancements, without heavy investments in new infrastructure.</div>
          </div>

          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Expert IT Knowledge & Support</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Gain access to a team of seasoned professionals with specialized expertise tailored to your business needs.</div>
          </div>

          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Seamless Scalability</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Effortlessly adjust IT resources as your business grows or changes, without the hassle of hiring or downsizing.</div>
          </div>

          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Disaster Recovery & Business Continuity</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Protect critical data with reliable backup and disaster recovery solutions, ensuring seamless business operations.</div>
          </div>

          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Focus on Core Business Goals</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Free up your team’s time to concentrate on strategic initiatives rather than IT management.</div>
          </div>

          <div className='border lg:p-10 p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[20px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Simplified Vendor Management </div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >One dedicated point of contact to handle all IT-related vendor coordination, saving time and reducing complexity.</div>
          </div>

 
        </div>
        
        </div>
        <div className='lg:mt-10 md:mt-16 mt-[90%]'>
        <div className={`lg:text-[34px] md:text-[24px] text-[18px] text-[#003566] font-bold text-center ${ubuntu.className}`}>Comprehensive IT Management for Seamless Operations</div>
        <div className="lg:grid md:grid lg:grid-cols-5 gap-5 md:grid-cols-3 lg:py-10 lg:px-20 md:p-4 ">
        <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>24/7/365 Monitoring</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Proactive oversight to detect and resolve issues before they impact your business.</div>
          </div>

          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[14px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Procurement Assistance</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Expert guidance to help you choose the best technology solutions at the best value.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Disaster Recovery & Data Protection</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Secure backup and recovery strategies to safeguard your critical business data.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Help Desk Support</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Reliable, round-the-clock IT support to resolve issues swiftly and minimize downtime.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Software License Management</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Ensure compliance and maximize the value of your software investments.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Mobile Security Solutions</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Protect your business’s mobile devices with advanced security measures.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>On-Site IT Support</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >When remote solutions aren’t enough, our team provides hands-on assistance.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Infrastructure Management</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Maintain robust and reliable network connections for seamless business operations.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Optimized SaaS Solutions</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Enhance the performance of your SaaS applications for maximum efficiency.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Vendor Relationship Management</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Simplify IT vendor interactions with our expert coordination and oversight.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Device Performance & Security</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Keep essential business tools optimized, secure, and fully operational.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Cloud Optimization & Management</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Navigate cloud solutions efficiently with our expert support.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Strategic IT Change Management</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Minimize disruptions with a structured and seamless IT transition process.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Firewall Protection & Security</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Strengthen your cybersecurity with advanced firewall management.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Office 365 Data Backup</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Ensure complete protection and recovery of your Office 365 data.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>IT Asset Optimization</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Extend the lifespan and maximize the efficiency of your IT investments.</div>
          </div>


          <div className='border p-4 flex flex-col lg:m-0 md:m-0 m-10  space-y-4 shadow-lg rounded-md shadow-[#003566]'>
            <div className={`lg:text-[16px] md:text-[16px] text-[14px] text-[#003566] font-bold   underline underline-offset-8 decoration-[#003566] ${ubuntu.className}`}>Server Performance & Maintenance</div>
            <div className={`md:text-md text-[12px] md:text-sm  lg:text-[16px]  sm:text-left font-normal text-[#003566] flex justify-center ${poppins.className}`} >Keep your servers running smoothly to support business-critical applications.</div>
          </div>

         

 
        </div>
        
        </div>
        <Footer />
    </div>
  )
}

export default page