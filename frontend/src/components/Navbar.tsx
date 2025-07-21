import React from "react";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function Navbar({ theme, setTheme }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white text-black dark:bg-black dark:text-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold">
        <span className="text-black dark:text-white">BHAVANA</span> REDDY
      </h1>

      <ul className="flex items-center space-x-6 font-medium">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#resume" className="hover:text-blue-500">Resume</a></li>
        <li><a href="#education" className="hover:text-blue-500">Education</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#certifications" className="hover:text-blue-500">Certifications</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        <li>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xl focus:outline-none"
            title="Toggle Theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
