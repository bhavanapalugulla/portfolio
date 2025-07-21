import { Mail, PhoneCall, MapPin, Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black pt-8 pb-4 text-gray-700 dark:text-gray-400 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-left">
        {/* About Column */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">About</h2>
          <p className="mb-5 leading-relaxed text-[1rem] text-gray-800 dark:text-gray-300">
            Building a strong foundation in development and actively expanding technical expertise through real-world projects. Proficient in full-stack and front-end development. Focused on scalable, accessible web solutions. Experienced with React.js, Spring Boot, and cloud technologies.
          </p>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://github.com/bhavanapalugulla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-black transition"
            >
              <Github className="w-5 h-5 text-black dark:text-yellow-400" />
            </a>
            <a
              href="https://linkedin.com/in/bhavana-reddy-6707b52b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-black transition"
            >
              <Linkedin className="w-5 h-5 text-black dark:text-yellow-400" />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">Links</h2>
          <ul className="space-y-3 text-[1rem]">
            <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">→ Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">→ About</a></li>
            <li><a href="#resume" className="hover:text-blue-600 dark:hover:text-blue-400 transition">→ Resume</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">→ Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">→ Contact</a></li>
          </ul>
        </div>

        {/* Questions Column */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">Have a Questions?</h2>
          <ul className="space-y-3 text-[1rem]">
            <li className="flex items-center">
              <span className="p-2 mr-2 rounded-full bg-white dark:bg-black">
                <Mail className="w-5 h-5 text-black dark:text-yellow-400" />
              </span>
              bhavanapalugulla@gmail.com
            </li>
            <li className="flex items-center">
              <span className="p-2 mr-2 rounded-full bg-white dark:bg-black">
                <MapPin className="w-5 h-5 text-black dark:text-yellow-400" />
              </span>
              Guntur, Andhra Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-600 dark:text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Bhavana Reddy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
