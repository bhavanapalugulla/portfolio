import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

const skillsTop = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
];

const skillsBottom = [
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "MySQL", icon: <SiMysql /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 px-4 text-center bg-white dark:bg-black text-black dark:text-white relative"
    >
      {/* Background Text */}
      <motion.h2
        className="text-[6vw] font-medium absolute opacity-10 -z-10 top-16 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      {/* Main Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl mb-14 font-semibold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      {/* Top Row (4 items) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
        {skillsTop.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex items-center justify-center gap-3 py-3 px-6 rounded-full
              border border-gray-300 dark:border-gray-600
              shadow-sm font-medium text-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <span className="text-xl dark:text-[#FFD700]">
              {skill.icon}
            </span>
            {skill.name}
          </motion.div>
        ))}
      </div>

      {/* Bottom Row (3 centered items) */}
      <div className="flex justify-center gap-6 flex-wrap max-w-5xl mx-auto">
        {skillsBottom.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex items-center justify-center gap-3 py-3 px-6 rounded-full
              border border-gray-300 dark:border-gray-600
              shadow-sm font-medium text-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <span className="text-xl dark:text-[#FFD700]">
              {skill.icon}
            </span>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
