import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Python", icon: <FaPython /> },
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
        className="text-3xl sm:text-4xl mb-10 font-semibold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {skills.map((skill, i) => (
          <motion.li
            key={skill.name}
            className="flex items-center justify-center gap-3 py-3 px-5 rounded-full border border-gray-300 dark:border-gray-600 shadow-sm font-medium text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {/* Icon with updated gold color in dark mode */}
            <div
              className="p-2 rounded-full 
                         bg-black text-white 
                         dark:bg-transparent dark:text-[#FFD700] 
                         text-xl transition-all duration-300"
            >
              {skill.icon}
            </div>
            <span className="text-black dark:text-white">{skill.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Skills;
