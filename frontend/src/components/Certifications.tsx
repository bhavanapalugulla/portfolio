import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const certifications = [
  {
    year: "2024",
    title: "Oracle Gen AI Certified",
    subtitle: "Oracle University",
    description:
      "Certified in applying Oracle's Gen AI models to solve business problems.",
  },
  {
    year: "2024",
    title: "Salesforce Certified AI Associate",
    subtitle: "Salesforce Trailhead",
    description:
      "Demonstrated knowledge of responsible AI, prompt engineering, and Salesforce Einstein tools.",
  },
  {
    year: "2025",
    title: "RPA Certification",
    subtitle: "Automation Anywhere University",
    description:
      "Completed Automation Anywhere RPA certification covering bot creation, task automation, and enterprise A2019 platform.",
  },
  {
    year: "2025",
    title: "Wipro TalentNext – Java Full Stack Development",
    subtitle: "Wipro",
    description:
      "Completed industry-oriented training in Java Full Stack Development, covering frontend, backend, and database concepts. Gained hands-on experience with Java, web technologies, and application development best practices.",
  },
  {
    year: "2025",
    title: "Aviatrix Certified Engineer",
    subtitle: "Multicloud Network Associate",
    description:
      "The industry's first multicloud networking certification covering AWS, Azure, GCP, and OCI. Trained to build, secure, and scale multicloud networks using the Aviatrix Cloud Networking Platform.",
  },
];

function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="certifications"
      className="w-full py-14 px-5 bg-white dark:bg-black text-black dark:text-white flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            className={`bg-gray-100 dark:bg-zinc-900 
              p-4 rounded-lg shadow-sm flex flex-col justify-between
              ${
                index === certifications.length - 1 &&
                certifications.length % 2 !== 0
                  ? "sm:col-span-2 sm:mx-auto sm:max-w-[44%]"
                  : ""
              }
            `}
          >
            <div>
              {/* Year */}
              <p className="text-xs font-medium text-black dark:text-[#FFD700] mb-1">
                {cert.year}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-snug">
                {cert.title}
              </h3>

              {/* Subtitle */}
              <h4 className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
                {cert.subtitle}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
