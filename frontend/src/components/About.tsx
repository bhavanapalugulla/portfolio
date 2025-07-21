import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center min-h-[40vh] py-8 
                 bg-white text-black dark:bg-black dark:text-white w-full scroll-mt-20 
                 transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 w-full max-w-5xl">
        {/* Left side: Who Am I */}
        <motion.div
          className="flex-1 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-3">Who Am I??</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
           I’m a Data Science and Big Data Analytics student with a strong foundation in frontend development and a keen interest in turning data into impactful solutions. I love exploring patterns, building intelligent systems, and crafting responsive, user-friendly websites that merge logic with creativity. Always learning, always growing.<br />
          </p>
        </motion.div>

        {/* Right side: About Me with details */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-center md:text-left">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center md:text-left">
             I’m a motivated and versatile individual with a strong passion for learning and continuous growth. I strive to deliver high-quality results in every project I take on and aim to make a meaningful impact through innovative and thoughtful solutions.
          </p>
          <div className="bg-gray-200 dark:bg-zinc-800 rounded-lg px-6 py-6 w-full max-w-md mx-auto md:mx-0 transition-colors duration-500">
            <table className="w-full text-left">
              <tbody>
                <tr>
                  <td className="font-semibold py-1 pr-3">Name:</td>
                  <td className="py-1">Palugulla Venkata Sai Rama Bhavana</td>
                </tr>
                <tr>
                  <td className="font-semibold py-1 pr-3">Address:</td>
                  <td className="py-1">Vijayawada, Andhra Pradesh, India</td>
                </tr>
                <tr>
                  <td className="font-semibold py-1 pr-3">Zip code:</td>
                  <td className="py-1">522501</td>
                </tr>
                <tr>
                  <td className="font-semibold py-1 pr-3">Email:</td>
                  <td className="py-1">bhavanapalugulla@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
