"use client"; // This will allow you to use client-side libraries like framer-motion
import { motion } from "framer-motion";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import About from "./components/about";
import Skill from "./components/skill";
import Certificate from "./components/certificate";

const sectionAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 1.1 }}
      >
        <Hero />
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 1.1 }}
      >
        <About />
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 1.1 }}
      >
        <Skill />
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 1.1 }}
      >
        <Certificate />
      </motion.section>
      
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 1.1 }}
      >
        <Project />
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 1.1 }}
      >
        <Contact />
      </motion.section>
    </div>
  );
}
