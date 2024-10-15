import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-br from-pink-100 via-gray-200 to-teal-100">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-2xl mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={"/assets/images/zpic.jpeg"}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
            I am a passionate web developer focused on creating visually appealing and highly functional websites. With expertise in HTML, CSS, JavaScript, TypeScript, and frameworks like Next.js and Tailwind CSS, I specialize in building intuitive and seamless user interfaces that elevate the user experience. My goal is to craft innovative digital solutions that captivate users and deliver impactful results. Constantly pushing the boundaries of my skill set, I am committed to developing cutting-edge work that leaves a lasting impression.
            </p>
            <p className="mb-5 leading-relaxed">
            I am currently focused on broadening my skill set by mastering new programming languages, exploring various courses, and diving into emerging technologies within the industry. My main areas of interest include Artificial Intelligence, Web 3.0, and the Metaverse, where I am deeply engaged in learning and development.
            </p>
            <div className="flex justify-center">
              <a href={"/assets/nextjs/zakia-resume.pdf"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

      