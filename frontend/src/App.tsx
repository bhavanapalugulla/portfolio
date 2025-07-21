import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  // 🔥 STEP 1: Load theme from localStorage on first render
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // 🔥 STEP 2: Apply theme and save to localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans transition-colors duration-500">
      <Navbar theme={theme} setTheme={setTheme} />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="resume"><Resume /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="certifications"><Certifications /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
