import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye } from "react-icons/fa";

const certifications = [
  {
    year: "2025",
    title: "Aviatrix Certified Engineer",
    subtitle: "Multicloud Network Associate",
    description:
      "The industry's first multicloud networking certification covering AWS, Azure, GCP, and OCI. Trained to build, secure, and scale multicloud networks using the Aviatrix Cloud Networking Platform.",
    pdf: "/certs/aviatrix.pdf",
  },
  {
    year: "2024",
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Amazon Web Services",
    description:
      "Validated foundational understanding of AWS cloud concepts, services, and best practices. Focused on cloud security, pricing models, and core services.",
    pdf: "/certs/aws.pdf",
  },
  {
    year: "2024",
    title: "Oracle Gen AI Certified",
    subtitle: "Oracle University",
    description:
      "Certified in applying Oracle's Gen AI models to solve business problems. Gained skills in AI-driven automation, content generation, and model fine-tuning.",
    pdf: "/certs/oracle.pdf",
  },
  {
    year: "2025",
    title: "Salesforce Certified AI Associate",
    subtitle: "Salesforce Trailhead",
    description:
      "Demonstrated knowledge of responsible AI, prompt engineering, and Salesforce Einstein tools for enhancing CRM intelligence and automation.",
    pdf: "/certs/salesforce.pdf",
  },
];

function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="certifications"
      className="w-full py-16 px-6 bg-white dark:bg-black text-black dark:text-white flex flex-col items-center"
    >
      {/* Background big title */}
      <motion.h2
        className="text-[7vw] font-black absolute opacity-10 -z-10 top-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Certs
      </motion.h2>

      {/* Main heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold z-10 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Certifications
      </motion.h2>

      {/* Cert Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-black/10 dark:hover:shadow-white/20 transition flex flex-col justify-between"
            data-aos={index < 2 ? "fade-right" : "fade-left"}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div>
              {/* Year with gold color */}
              <p className="text-sm font-medium mb-1 text-black dark:text-[#FFD700]">
  {cert.year}
</p>


              <h3 className="text-xl font-bold text-black dark:text-white">{cert.title}</h3>
              <h4 className="text-md text-gray-700 dark:text-gray-300 italic mb-3">
                {cert.subtitle}
              </h4>
              <p className="text-gray-700 dark:text-gray-400 text-sm">{cert.description}</p>
            </div>

            {/* Eye icon button */}
            <div className="mt-4">
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full 
                           bg-black text-white 
                           dark:bg-[#FFD700] dark:text-black 
                           font-medium transition-transform hover:scale-105"
              >
                <FaEye className="text-lg" />
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
