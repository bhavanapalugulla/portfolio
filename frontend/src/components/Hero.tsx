import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import meImg from "../assets/me.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-6 scroll-mt-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-10">
        {/* Text Section - Fully Centered */}
        <motion.div
          className="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
        <h3
  className="text-4xl md:text-5xl font-semibold mb-4 text-black dark:text-white tracking-wide"
  style={{ fontFamily: "'Poppins', sans-serif" }}
>
  Hi,
</h3>


          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            I'm Bhavana
          </h2>

          <TypeAnimation
            sequence={["Web Developer", 2000, "", 500]}
            wrapper="h3"
            speed={50}
            repeat={Infinity}
            className="text-3xl md:text-5xl text-blue-600 dark:text-yellow-400 font-extrabold mb-4"
          />

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
            I’m a passionate and driven web developer with a strong foundation in design, development, and problem-solving.
             With a growth mindset and a love for continuous learning, I thrive on creating clean, responsive,
             and user-friendly web experiences. I believe in turning ideas into meaningful solutions that leave a positive impact.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-[360px] flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-full border-4 border-black dark:border-white shadow-xl h-[360px] w-[360px]">
            <img
              src={meImg}
              alt="Bhavana"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
