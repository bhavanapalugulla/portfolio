import React from "react";
import klLogo from "../assets/klu.jpg";
import saradaLogo from "../assets/sarada.jpg";
import schoolLogo from "../assets/krishnaveni.png";

const educationData = [
  {
    logo: klLogo,
    year: "2022 - 2026",
    degree: "BTech in CSE , With Specialization Data Science",
    institute: "KL UNIVERSITY, VIJAYAWADA",
    description:
      "Currently pursuing B.Tech with a focus on DSA, Web Development, Full Stack Development. Engaged in real-time web and data-driven projects.",
  },
  {
    logo: saradaLogo,
    year: "2020 – 2022",
    degree: "Intermediate (MPC)",
    institute: "SRI SARADA JUNIOR COLLEGE, GUNTUR",
    description:
      "Completed Intermediate with core subjects: Mathematics, Physics, and Chemistry. Built strong problem-solving and analytical skills.",
  },
  {
    logo: schoolLogo,
    year: "2010 – 2020",
    degree: "10th Class",
    institute: "CHIGURUPATI SRI KRISHNAVENI SCHOOL, VIJAYAWADA",
    description:
      "Completed foundational education with distinction and active participation in co-curricular activities.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 scroll-mt-20"
    >
      <h2 className="text-4xl text-center font-semibold mb-12 text-black dark:text-white">
        Education Details{" "}
      </h2>

      <div className="space-y-12 max-w-5xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex items-start md:items-center gap-6 bg-gray-100 dark:bg-zinc-900 p-6 md:p-8 rounded-2xl shadow-md transition duration-300 hover:shadow-yellow-400/30 dark:hover:shadow-white/20"
          >
            <img
              src={edu.logo}
              alt={edu.institute}
              className="w-24 h-24 object-contain rounded-xl bg-white dark:bg-gray-200 p-2"
            />
            <div>
              <h4 className="text-sm mb-1 text-black dark:text-[#FFD700]">
                {edu.year}
              </h4>
              <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">
                {edu.degree}
              </h3>
              <h4 className="uppercase font-medium mb-2 tracking-wide text-black dark:text-white">
                {edu.institute}
              </h4>
              <p className="text-gray-800 dark:text-gray-400 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
