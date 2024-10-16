"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"; // Import framer-motion

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-br from-red-800 via-teal-600 to-gray-400">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block " />
            <span className="text-pink-900">
              <Typewriter
                options={{
                  strings: ["Web Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <motion.div
            className="w-[100px] h-[4px] bg-gray-900"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1 }}
          />
          <motion.p
            className="mb-8 leading-relaxed text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Welcome to my portfolio! I&apos;m excited to have you here. As you
            scroll down, you&apos;ll get an in-depth look at my skills, the
            exciting projects I&apos;ve worked on, and how I can collaborate
            with you to bring your creative ideas to life. Whether it&apos;s
            developing responsive, visually appealing websites or crafting
            innovative digital experiences, I take pride in combining creativity
            with technical expertise. Explore my journey, see the impact of my
            work, and learn how I can help turn your vision into reality with
            solutions tailored to your unique needs. Let&apos;s build something
            amazing together!
          </motion.p>
          <div className="flex  justify-center gap-4">

            <Link
              href={"#Contact"}
              className="px-1 py-1 w-[50%] sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white text-center"
            >
              <motion.button
                className="block text-white bg-black border-2 border-transparent rounded-full px-5 py-2 hover:border-gradient-to-br from-blue-500 via-primary-500 to-secondary-500"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Contact
              </motion.button>
            </Link>
            <a
              href="/assets/nextjs/zakia-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white text-center"
            >
              <motion.span
                className="block bg-black border-2 border-transparent rounded-full px-5 py-2 hover:border-gradient-to-br from-blue-500 via-primary-500 to-secondary-500"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Download CV
              </motion.span>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <Image
            className="object-cover object-center rounded-2xl mx-auto w-[15rem]"
            src={"/assets/images/zpic.jpeg"}
            alt="hero"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
