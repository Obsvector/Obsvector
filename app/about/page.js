import Link from "next/link";
import React from "react";
import { Ubuntu, Poppins } from "next/font/google";
import Footer from "@/components/Footer"; // ✅ Import Footer

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
      {/* ✅ Background Section */}
      <div className="bg-[#003566] lg:h-[50vh] h-[40vh] flex justify-center items-center">
        <h1 className={`text-white text-3xl lg:text-5xl font-bold ${ubuntu.className}`}>
          About Us
        </h1>
      </div>

      {/* ✅ About Us Content */}
      <div className="flex-grow flex justify-center items-center px-5 pt-10 mb-10 lg:-mt-[10%] md:-mt-[30%] -mt-[40%]"> 
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
          <h2 className={`text-[#003566] text-2xl font-semibold text-center mb-6 ${ubuntu.className}`}>
            Who We Are
          </h2>
          <p className={`text-gray-600 text-center leading-relaxed ${poppins.className}`}>
            <span className="font-semibold text-[#003566]">ObsVector</span> provides access to a team of highly skilled, experienced engineering and IT professionals, specializing in Monitoring & Observability, IT Managed Services, IT Consulting, and Web & Mobile Application Development.
          </p>
          <p className={`text-gray-600 text-center mt-4 leading-relaxed ${poppins.className}`}>
            We offer end-to-end IT Managed Services, including 24/7 infrastructure monitoring, cloud management, cybersecurity, network operations, and technical support. By outsourcing IT operations to ObsVector, businesses can reduce costs, optimize performance, and maintain seamless IT continuity.
          </p>
          <p className={`text-gray-600 text-center mt-4 leading-relaxed ${poppins.className}`}>
            Our IT Consulting Services assist organizations in strategic IT planning, cloud adoption, cybersecurity, and digital transformation. Our experts provide customized solutions to help businesses make informed technology decisions and stay competitive.
          </p>
          <p className={`text-gray-600 text-center mt-4 leading-relaxed ${poppins.className}`}>
            ObsVector specializes in Web and Mobile Application Development, offering full-stack development, UI/UX design, cloud-native applications, API integrations, and cross-platform mobile development for robust digital experiences.
          </p>
          <p className={`text-gray-600 text-center mt-4 leading-relaxed ${poppins.className}`}>
            We also provide advanced observability solutions, including monitoring tool implementation, log management, performance analytics, and automation-driven optimizations. Our expertise spans tools like Prometheus, Grafana, Datadog, Splunk, and OpenTelemetry for proactive incident detection and response.
          </p>
          <p className={`text-gray-600 text-center mt-4 leading-relaxed ${poppins.className}`}>
            Many organizations rely on ObsVector to augment their IT teams when project schedules, skill gaps, or resource constraints threaten delivery timelines. We ensure seamless IT integration, proactive monitoring, efficient software development, and reliable IT management, helping businesses achieve scalability, security, and digital transformation.
          </p>
          <div className="text-center mt-6">
            <Link href='/contact' className={`bg-[#003566] text-white py-3 px-6 rounded-lg hover:bg-[#002244] transition-all duration-300 ${poppins.className}`}>
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default About;
