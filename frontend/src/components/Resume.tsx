import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi"; // Download icon from react-icons

function Resume() {
  return (
    <section
      id="resume"
      className="relative flex flex-col justify-center items-center min-h-[80vh] py-16 px-4 bg-white dark:bg-black text-black dark:text-white w-full text-center transition-colors duration-500"
    >
      {/* Resume Heading (slightly less bold now) */}
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold z-10 text-black dark:text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Resume
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-6 max-w-3xl text-gray-700 dark:text-gray-400 text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
         Passionate Data Science and Big Data Analytics student with strong skills in Java, and Full-Stack Development.
      </motion.p>

      {/* Download Button */}
      <motion.a
        href="/MY NEW RESUME.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 bg-black dark:bg-[#FFD700] text-white dark:text-black px-6 py-3 rounded-full font-semibold transition duration-300 hover:opacity-90"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <FiDownload className="text-white dark:text-[#b8860b] text-xl" />
        Download Resume
      </motion.a>
    </section>
  );
}

export default Resume;
