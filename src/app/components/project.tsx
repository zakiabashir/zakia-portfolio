import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project" className="bg-gradient-to-br from-pink-100 via-gray-200 to-teal-100
">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={("/assets/nextjs/count.png")}
                  width={150}
                  height={150}

                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                   Countdown-Timer Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Countdown-Timer
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Countdown Timer is a versatile web application designed to help users track time for various activities, whether it&APOS;s for cooking, workouts, study sessions, or countdowns to special events. The intuitive interface and responsive design make it easy to set and manage timers, providing a seamless user experience.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://countdown-timer-with-nextjs.vercel.app"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={("/assets/nextjs/number.png")}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Number Guessing Game Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Number Guessing Game
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Number Guessing Game is an engaging and interactive web-based application designed to challenge players in a fun and intuitive way. The objective of the game is simple: players must guess a randomly generated number within a specified range, using feedback provided by the game to hone in on the correct answer
                  </p>
                  <Link
                    target="_blank"
                    href={"https://number-guessing-game-krn5.vercel.app"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={("/assets/images/capture1.png")}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                   Static-Resume Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Static-Resume
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Static Resume is a clean and professional web application designed to showcase personal information, skills, education, work experience, and contact details in a visually appealing format. This project serves as an online portfolio that effectively presents a user&APOS;s qualifications and achievements to potential employers or clients.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://hackhaton-milestone1-repo-g6rpa1fy0-zakiabashirs-projects.vercel.app"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={("/assets/images/capture.png")}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic-Resume Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Dynamic-Resume
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project about dynamic-resume. The Dynamic Resume is an interactive web application that showcases personal qualifications, skills, education, and work experience in a visually engaging manner. Unlike a static resume, this project allows users to dynamically update their information, providing a more flexible and up-to-date presentation of their professional profile.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://zakia-mile5-lcpv.vercel.app"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={("/assets/nextjs/cal.png")}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Simple Calculator Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Simple Calculator
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  he Simple Calculator project is a straightforward web application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. This project serves as an excellent opportunity to practice JavaScript, HTML, and CSS while creating a functional and user-friendly tool.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://simple-calculator-with-nextjs.vercel.app"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={("/assets/images/figma.png")}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Figma Tere  Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Figma Tere
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Figma Ride is a conceptual design project aimed at creating an intuitive and user-friendly ride-sharing app prototype using Figma. This project involves designing a mobile application interface that offers users the ability to book rides, view ride details, track their driver in real-time, and manage their bookings seamlessly.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://figma-ride-web.vercel.app"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={("/assets/nextjs/joke.png")}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Random Joke-generator Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Random Joke-generator
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Random Joke Generator project is a fun and interactive web application that delivers a new joke to users every time they click a button. This project not only entertains users but also serves as a great way to practice working with APIs, JavaScript, and responsive design
                  </p>
                  <Link
                    target="_blank"
                    href={"https://joke-generator-app-nextjs.vercel.app"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={("/assets/nextjs/digi.png")}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Digital-Clock Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Digital-Clock
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Digital Clock project is a simple yet effective web application that displays the current time in a digital format. This project not only serves as a functional tool for users to check the time but also demonstrates key web development skills, including real-time updates, responsive design, and JavaScript programming.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://digital-clock-app-nextjs.vercel.app"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={("/assets/nextjs/birthday.png")}
                  width={150}
                  height={150}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    BirthDay-Wish Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  BirthDay-Wish
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Birthday Wish project is a delightful web application designed to send personalized birthday wishes to friends and family. This interactive platform allows users to choose from a variety of templates and customize their messages, creating heartfelt and memorable wishes for their loved ones.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://birthday-wish-app-nu.vercel.app"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

      