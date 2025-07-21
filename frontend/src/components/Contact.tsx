import { motion } from "framer-motion";
import { Mail, PhoneCall, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const contactItems = [
 
  {
    icon: (isDark: boolean) => (
      <Mail className={`w-8 h-8 ${isDark ? "text-[#FFD700]" : "text-black"}`} />
    ),
    title: "EMAIL ADDRESS",
    value: "bhavanapalugulla@gmail.com",
    link: "mailto:bhavanapalugulla@gmail.com",
  },
  {
    icon: (isDark: boolean) => (
      <Github className={`w-8 h-8 ${isDark ? "text-[#FFD700]" : "text-black"}`} />
    ),
    title: "GITHUB",
    value: "bhavanapalugulla",
    link: "https://github.com/bhavanapalugulla",
  },
  {
    icon: (isDark: boolean) => (
      <Linkedin className={`w-8 h-8 ${isDark ? "text-[#FFD700]" : "text-black"}`} />
    ),
    title: "LINKEDIN",
    value: "bhavana-reddy",
    link: "https://www.linkedin.com/in/bhavana-reddy-6707b52b6/",
  },
];

function Contact() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center py-16 text-center bg-white dark:bg-black px-4 scroll-mt-20"
    >
      <motion.h2
        className="text-4xl font-medium mb-4 text-black dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Feel free to reach out for freelance work, project inquiries, or
        technical collaboration!
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12 justify-items-center">

        {contactItems.map((item, idx) => (
          <motion.div
            key={item.value}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08, boxShadow: "0 8px 32px #00000020" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Dynamic background color based on theme */}
            <div
              className={`p-5 rounded-full mb-3 shadow-lg ${
                isDark ? "bg-black" : "bg-white"
              }`}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon(isDark)}
              </a>
            </div>
            <h4 className="font-semibold text-md text-black dark:text-white">
              {item.title}
            </h4>
            <p className="text-black dark:text-white mt-1 text-sm">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {item.value}
              </a>
            </p>
          </motion.div>
        ))}
      </div>

      <motion.form
        className="max-w-2xl mx-auto space-y-5 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
      >
      </motion.form>
    </section>
  );
}

export default Contact;
