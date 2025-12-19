import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="w-full py-16 px-6 bg-white dark:bg-black 
                 text-black dark:text-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
                      items-center gap-14">
        {/* Left side: About text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a Computer Science and Engineering student specializing in Data
            Science and Big Data Analytics with a strong interest in frontend
            development. I enjoy building clean, responsive, and user-friendly
            web applications while continuously learning modern technologies.
            Through academic projects, internships, and certifications, I have
            developed a solid foundation in web development and data-driven
            problem solving. I am motivated to contribute to innovative teams
            and grow as a professional software developer.
          </p>
        </motion.div>

        {/* Right side: Info card */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-gray-200 dark:bg-zinc-800 rounded-xl 
                          px-8 py-6 w-full max-w-md">
            <div className="space-y-4 text-left">
              <div className="flex gap-3">
                <span className="font-semibold">Name:</span>
                <span>Palugulla Venkata Sai Rama Bhavana</span>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold">Email:</span>
                <span>bhavanapalugulla@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
