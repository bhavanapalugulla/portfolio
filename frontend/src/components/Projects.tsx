import { Github } from "lucide-react";
import { motion } from "framer-motion";
import bookImage from "../assets/book.jpg";

const projects = [
  {
    title: "Online Book Management System",
    description: "Web app to manage book inventory, user logins, and admin controls.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/bhavanapalugulla/Online-book-",
    githubUser: "bhavanapalugulla",
    image: bookImage,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 px-4 flex flex-col items-center bg-white dark:bg-black scroll-mt-20"
    >
      {/* Section Header */}
      <div className="text-center mb-8 w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black dark:text-white mb-2">
          My Projects
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          Showcasing a real-world solution built with modern web and database technologies.
        </p>
      </div>

      {/* Project List */}
      <div className="w-full max-w-5xl">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-zinc-900 rounded-lg p-4 shadow-md mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            {/* Project Image */}
            <div className="w-full md:w-48 h-32 bg-gray-200 dark:bg-zinc-800 rounded-md mb-4 md:mb-0 md:mr-6 flex items-center justify-center overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex-1 w-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-800 dark:text-gray-300 mb-3">
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-300 dark:bg-zinc-800 px-3 py-1 text-black dark:text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Button */}
              <div className="flex items-center mt-2">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full transition-colors group
                    bg-gray-300 hover:bg-gray-400
                    dark:bg-[#FFD700] dark:hover:bg-[#f1c40f]"
                  title="View on GitHub"
                >
                  <Github className="w-6 h-6 text-black group-hover:text-black dark:text-black" />
                  <span className="text-black font-semibold text-sm group-hover:text-black">
                    {proj.githubUser}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
